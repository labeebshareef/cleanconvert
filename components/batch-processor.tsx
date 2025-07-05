'use client';

import { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { FileUpload } from '@/components/file-upload';
import { FormatSelector } from '@/components/format-selector';
import { QualitySlider } from '@/components/quality-slider';
import { BatchQueue } from '@/components/batch-queue';
import { processImage } from '@/lib/image-processor';
import { extractImagesFromZip, createZipFromImages } from '@/lib/zip-processor';
import { Upload, Download, Trash2, Archive, Zap, Settings2 } from 'lucide-react';
import { toast } from 'sonner';
import { ProcessedImage } from '@/types';

export function BatchProcessor() {
  const [images, setImages] = useState<ProcessedImage[]>([]);
  const [targetFormat, setTargetFormat] = useState('webp');
  const [quality, setQuality] = useState(85);
  const [isProcessing, setIsProcessing] = useState(false);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const allImages: File[] = [];
    
    for (const file of acceptedFiles) {
      if (file.type === 'application/zip' || file.name.endsWith('.zip')) {
        try {
          const extractedImages = await extractImagesFromZip(file);
          allImages.push(...extractedImages);
          toast.success(`Extracted ${extractedImages.length} images from ${file.name}`);
        } catch (error) {
          toast.error(`Failed to extract images from ${file.name}`);
        }
      } else if (file.type.startsWith('image/')) {
        allImages.push(file);
      }
    }

    if (allImages.length === 0) {
      toast.error('No valid images found in the uploaded files');
      return;
    }

    const newImages = allImages.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      originalUrl: URL.createObjectURL(file),
      targetFormat,
      quality,
      status: 'pending' as const,
    }));
    
    setImages(prev => [...prev, ...newImages]);
    toast.success(`Added ${allImages.length} image(s) to batch queue`);
  }, [targetFormat, quality]);

  const processAllImages = async () => {
    if (images.length === 0) return;

    setIsProcessing(true);
    let processed = 0;
    
    for (const image of images.filter(img => img.status === 'pending')) {
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

        setImages(prev => prev.map(img => 
          img.id === image.id 
            ? { ...img, status: 'completed' as const, convertedUrl }
            : img
        ));

        processed++;

      } catch (error) {
        setImages(prev => prev.map(img => 
          img.id === image.id 
            ? { ...img, status: 'error' as const, error: error instanceof Error ? error.message : 'Unknown error' }
            : img
        ));
      }
    }

    setIsProcessing(false);
    toast.success(`Batch processing completed! Processed ${processed} images.`);
  };

  const downloadImage = (image: ProcessedImage) => {
    if (!image.convertedUrl) return;

    const link = document.createElement('a');
    link.href = image.convertedUrl;
    link.download = `${image.file.name.split('.')[0]}.${image.targetFormat}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadAllAsZip = async () => {
    const completedImages = images.filter(img => img.status === 'completed' && img.convertedUrl);
    
    if (completedImages.length === 0) {
      toast.error('No completed images to download');
      return;
    }

    try {
      const imageBlobs = await Promise.all(
        completedImages.map(async (image) => {
          const response = await fetch(image.convertedUrl!);
          const blob = await response.blob();
          return {
            name: `${image.file.name.split('.')[0]}.${image.targetFormat}`,
            blob
          };
        })
      );

      const zipBlob = await createZipFromImages(imageBlobs);
      const zipUrl = URL.createObjectURL(zipBlob);
      
      const link = document.createElement('a');
      link.href = zipUrl;
      link.download = `cleanconvert-batch-${Date.now()}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      URL.revokeObjectURL(zipUrl);
      toast.success('Downloaded all images as ZIP file');
    } catch (error) {
      toast.error('Failed to create ZIP file');
    }
  };

  const downloadAll = () => {
    const completedImages = images.filter(img => img.status === 'completed' && img.convertedUrl);
    completedImages.forEach(downloadImage);
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
    setImages(prev => prev.map(img => {
      const updatedImg: ProcessedImage = {
        ...img,
        targetFormat,
        quality,
        status: img.status === 'completed' ? 'pending' : img.status,
      };
      
      if (img.status === 'completed') {
        delete (updatedImg as any).convertedUrl;
      }
      
      return updatedImg;
    }));
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        <div className="xl:col-span-3 space-y-6">
          {/* Upload Section */}
          <Card className="border-2 border-dashed border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5 text-primary" />
                Batch Upload
              </CardTitle>
            </CardHeader>
            <CardContent>
              <FileUpload 
                onFilesSelected={onDrop}
                accept={{
                  'image/*': ['.jpg', '.jpeg', '.png', '.webp', '.avif', '.bmp', '.tiff', '.ico', '.svg'],
                  'application/zip': ['.zip']
                }}
                multiple={true}
              />
              <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Tip:</strong> You can upload ZIP files containing images for automatic extraction, 
                  or select multiple image files at once for batch processing.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Settings */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings2 className="h-5 w-5 text-primary" />
                  Output Format
                </CardTitle>
              </CardHeader>
              <CardContent>
                <FormatSelector 
                  value={targetFormat} 
                  onChange={(value) => {
                    setTargetFormat(value);
                    if (images.length > 0) {
                      setTimeout(updateAllImagesSettings, 100);
                    }
                  }} 
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings2 className="h-5 w-5 text-primary" />
                  Quality Settings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <QualitySlider 
                  value={quality} 
                  onChange={(value) => {
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
          <Card className="sticky top-6">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Batch Status
                <Badge variant="secondary">{images.length} files</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {images.length === 0 ? (
                <div className="text-center py-8">
                  <Archive className="mx-auto h-12 w-12 text-muted-foreground/50 mb-3" />
                  <p className="text-sm text-muted-foreground">
                    No images in batch queue
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Upload images or ZIP files to get started
                  </p>
                </div>
              ) : (
                <>
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

                  <div className="space-y-2">
                    <Button 
                      onClick={processAllImages}
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
                          Process All Images
                        </>
                      )}
                    </Button>
                    
                    <div className="grid grid-cols-1 gap-2">
                      <Button 
                        variant="outline"
                        onClick={downloadAllAsZip}
                        disabled={images.filter(img => img.status === 'completed').length === 0}
                        className="flex items-center gap-2"
                      >
                        <Archive className="h-4 w-4" />
                        Download as ZIP
                      </Button>
                      
                      <Button 
                        variant="outline"
                        onClick={downloadAll}
                        disabled={images.filter(img => img.status === 'completed').length === 0}
                        className="flex items-center gap-2"
                      >
                        <Download className="h-4 w-4" />
                        Download All Files
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
        </div>
      </div>
    </div>
  );
}