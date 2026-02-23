'use client';

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileUpload } from '@/components/file-upload';
import { FormatSelector } from '@/components/format-selector';
import { QualitySlider } from '@/components/quality-slider';
import { ImagePreview } from '@/components/image-preview';
import { BatchQueue } from '@/components/batch-queue';
import { processImage } from '@/lib/image-processor';
import { Upload, Download, Trash2, Image as ImageIcon, Zap, Settings2 } from 'lucide-react';
import { toast } from 'sonner';
import { ProcessedImage } from '@/types';
import { trackFileUpload, trackConversion, trackConversionComplete, trackFeatureUsage, trackError } from '@/lib/analytics';

export function ImageConverter({ defaultFormat, defaultSourceHint: _sourceHint }: { defaultFormat?: string; defaultSourceHint?: string } = {}) {
  const [images, setImages] = useState<ProcessedImage[]>([]);
  const [targetFormat, setTargetFormat] = useState(defaultFormat || 'webp');
  const [quality, setQuality] = useState(85);
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeTab, setActiveTab] = useState('single');

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Track file upload
    trackFileUpload(acceptedFiles, 'drag_drop');
    
    const newImages = acceptedFiles.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      originalUrl: URL.createObjectURL(file),
      targetFormat,
      quality,
      status: 'pending' as const,
    }));
    
    setImages(prev => [...prev, ...newImages]);
    toast.success(`Added ${acceptedFiles.length} image(s) to queue`);
  }, [targetFormat, quality]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpg', '.jpeg', '.png', '.webp', '.avif', '.bmp', '.tiff', '.ico', '.svg']
    },
    multiple: true,
  });

  const processImages = async () => {
    if (images.length === 0) return;

    setIsProcessing(true);
    
    // Track conversion start for the batch
    const pendingImages = images.filter(img => img.status === 'pending');
    if (pendingImages.length > 0) {
      const firstImage = pendingImages[0];
      const sourceFormat = firstImage.file.name.split('.').pop()?.toLowerCase() || 'unknown';
      trackConversion(
        sourceFormat,
        firstImage.targetFormat,
        firstImage.file.size,
        firstImage.quality,
        pendingImages.length
      );
    }
    
    for (const image of pendingImages) {
      const startTime = performance.now();
      const sourceFormat = image.file.name.split('.').pop()?.toLowerCase() || 'unknown';
      
      try {
        setImages(prev => prev.map(img => 
          img.id === image.id 
            ? { ...img, status: 'processing' as const }
            : img
        ));

        const convertedBlob = await processImage(image.file, {
          format: image.targetFormat,
          quality: image.quality / 100,
        });

        const convertedUrl = URL.createObjectURL(convertedBlob);
        const processingTime = performance.now() - startTime;

        setImages(prev => prev.map(img => 
          img.id === image.id 
            ? { ...img, status: 'completed' as const, convertedUrl }
            : img
        ));

        // Track successful conversion completion
        trackConversionComplete(
          sourceFormat,
          image.targetFormat,
          image.file.size,
          convertedBlob.size,
          processingTime,
          image.quality,
          true
        );

      } catch (error) {
        const processingTime = performance.now() - startTime;
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        
        setImages(prev => prev.map(img => 
          img.id === image.id 
            ? { ...img, status: 'error' as const, error: errorMessage }
            : img
        ));

        // Track conversion error
        trackConversionComplete(
          sourceFormat,
          image.targetFormat,
          image.file.size,
          0,
          processingTime,
          image.quality,
          false,
          errorMessage
        );

        // Also track the error specifically
        trackError('conversion_failed', errorMessage, {
          fileFormat: sourceFormat,
          fileSize: image.file.size,
        });
      }
    }

    setIsProcessing(false);
    const completedCount = images.filter(img => img.status === 'completed').length;
    toast.success(`Image processing completed! ${completedCount} images converted successfully.`);
  };

  const downloadImage = (image: ProcessedImage) => {
    if (!image.convertedUrl) return;

    const link = document.createElement('a');
    link.href = image.convertedUrl;
    const fileName = `${image.file.name.split('.')[0]}.${image.targetFormat}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Track download
    trackFeatureUsage('single_download', 'conversion', `${image.targetFormat}_format`);
  };

  const downloadAll = () => {
    const completedImages = images.filter(img => img.status === 'completed' && img.convertedUrl);
    if (completedImages.length === 0) return;
    
    completedImages.forEach(downloadImage);
    
    // Track batch download
    trackFeatureUsage('batch_download', 'conversion', `${completedImages.length}_files`);
  };

  const clearQueue = () => {
    images.forEach(img => {
      if (img.originalUrl) URL.revokeObjectURL(img.originalUrl);
      if (img.convertedUrl) URL.revokeObjectURL(img.convertedUrl);
    });
    setImages([]);
  };

  const removeImage = (id: string) => {
    const image = images.find(img => img.id === id);
    if (image) {
      if (image.originalUrl) URL.revokeObjectURL(image.originalUrl);
      if (image.convertedUrl) URL.revokeObjectURL(image.convertedUrl);
    }
    setImages(prev => prev.filter(img => img.id !== id));
  };

  const updateAllImagesSettings = () => {
    setImages(prev => prev.map(img => ({
      ...img,
      targetFormat,
      quality,
      status: img.status === 'completed' ? 'pending' as const : img.status,
      convertedUrl: img.status === 'completed' ? undefined : img.convertedUrl
    })));
  };

  return (
    <section id="image-converter" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/* Main Content Area */}
          <div className="xl:col-span-3 space-y-6">
            {/* Upload Section */}
            <Card className="border-2 border-dashed border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Upload className="h-5 w-5 text-primary" />
                  Upload Images
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={(value) => {
                  // Track tab switching
                  trackFeatureUsage('tab_switch', 'conversion', `from_${activeTab}_to_${value}`);
                  setActiveTab(value);
                }} className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="single" className="flex items-center gap-2">
                      <ImageIcon className="h-4 w-4" />
                      Single Files
                    </TabsTrigger>
                    <TabsTrigger value="batch" className="flex items-center gap-2">
                      <Zap className="h-4 w-4" />
                      Batch Upload
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="single">
                    <FileUpload onFilesSelected={onDrop} />
                  </TabsContent>

                  <TabsContent value="batch">
                    <div 
                      {...getRootProps()} 
                      className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer
                        ${isDragActive ? 'border-primary bg-primary/5' : 'border-muted-foreground/25 hover:border-primary/50'}
                      `}
                    >
                      <input {...getInputProps()} />
                      <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                      {isDragActive ? (
                        <p className="text-lg">Drop files here...</p>
                      ) : (
                        <div>
                          <p className="text-lg mb-2">Drag & drop images or ZIP files</p>
                          <p className="text-sm text-muted-foreground">
                            Supports JPG, PNG, WEBP, AVIF, BMP, TIFF, ICO, SVG
                          </p>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Conversion Settings */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <Settings2 className="h-5 w-5 text-primary" />
                    Output Format
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <FormatSelector 
                    value={targetFormat} 
                    onChange={(value) => {
                      // Track format selection
                      trackFeatureUsage('format_selection', 'conversion', `from_${targetFormat}_to_${value}`);
                      setTargetFormat(value);
                      if (images.length > 0) {
                        setTimeout(updateAllImagesSettings, 100);
                      }
                    }} 
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <Settings2 className="h-5 w-5 text-primary" />
                    Quality Settings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <QualitySlider 
                    value={quality} 
                    onChange={(value) => {
                      // Track quality adjustment
                      trackFeatureUsage('quality_adjustment', 'conversion', `from_${quality}_to_${value}`);
                      setQuality(value);
                      if (images.length > 0) {
                        setTimeout(updateAllImagesSettings, 100);
                      }
                    }} 
                  />
                </CardContent>
              </Card>
            </div>

            {/* Batch Queue */}
            {images.length > 0 && (
              <BatchQueue 
                images={images} 
                onRemove={removeImage}
                onDownload={downloadImage}
              />
            )}
          </div>

          {/* Sidebar */}
          <div className="xl:col-span-1 space-y-6">
            {/* Processing Status */}
            <Card className="sticky top-6">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center justify-between text-lg">
                  Processing Queue
                  <Badge variant="secondary" className="text-sm">
                    {images.length} {images.length === 1 ? 'file' : 'files'}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {images.length === 0 ? (
                  <div className="text-center py-8">
                    <ImageIcon className="mx-auto h-12 w-12 text-muted-foreground/50 mb-3" />
                    <p className="text-sm text-muted-foreground">
                      No images uploaded yet
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Upload images to get started
                    </p>
                  </div>
                ) : (
                  <>
                    {/* Progress Overview */}
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">
                          {images.filter(img => img.status === 'completed').length} / {images.length}
                        </span>
                      </div>
                      <Progress 
                        value={(images.filter(img => img.status === 'completed').length / images.length) * 100} 
                        className="h-2"
                      />
                    </div>

                    {/* Status Breakdown */}
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <span>{images.filter(img => img.status === 'pending').length} Pending</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span>{images.filter(img => img.status === 'completed').length} Done</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <span>{images.filter(img => img.status === 'processing').length} Processing</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <span>{images.filter(img => img.status === 'error').length} Errors</span>
                      </div>
                    </div>

                    {/* Current Settings Display */}
                    <div className="p-3 bg-muted/50 rounded-lg space-y-2">
                      <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                        Current Settings
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Format:</span>
                        <Badge variant="outline" className="text-xs">
                          {targetFormat.toUpperCase()}
                        </Badge>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Quality:</span>
                        <span className="font-medium">{quality}%</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2">
                      <Button 
                        onClick={processImages}
                        disabled={isProcessing || images.every(img => img.status === 'completed')}
                        className="w-full"
                        size="lg"
                      >
                        {isProcessing ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Processing...
                          </>
                        ) : (
                          <>
                            <Zap className="h-4 w-4 mr-2" />
                            Convert All Images
                          </>
                        )}
                      </Button>
                      
                      <div className="grid grid-cols-2 gap-2">
                        <Button 
                          variant="outline"
                          onClick={downloadAll}
                          disabled={images.filter(img => img.status === 'completed').length === 0}
                          className="flex items-center gap-2"
                        >
                          <Download className="h-4 w-4" />
                          Download All
                        </Button>
                        
                        <Button 
                          variant="outline"
                          onClick={clearQueue}
                          disabled={images.length === 0}
                          className="flex items-center gap-2"
                        >
                          <Trash2 className="h-4 w-4" />
                          Clear Queue
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Preview */}
            {images.length > 0 && (
              <ImagePreview 
                images={images.slice(0, 2)} 
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}