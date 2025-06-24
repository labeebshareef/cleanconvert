'use client';

import { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { FileUpload } from '@/components/file-upload';
import { QualitySlider } from '@/components/quality-slider';
import { ImagePreview } from '@/components/image-preview';
import { processImage } from '@/lib/image-processor';
import { Download, Trash2, Zap, FileImage, Settings2 } from 'lucide-react';
import { toast } from 'sonner';

interface OptimizedImage {
  id: string;
  file: File;
  originalUrl: string;
  optimizedUrl?: string;
  originalSize: number;
  optimizedSize?: number;
  quality: number;
  stripExif: boolean;
  status: 'pending' | 'processing' | 'completed' | 'error';
  error?: string;
}

export function ImageOptimizer() {
  const [images, setImages] = useState<OptimizedImage[]>([]);
  const [quality, setQuality] = useState(85);
  const [stripExif, setStripExif] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newImages = acceptedFiles.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      originalUrl: URL.createObjectURL(file),
      originalSize: file.size,
      quality,
      stripExif,
      status: 'pending' as const,
    }));
    
    setImages(prev => [...prev, ...newImages]);
    toast.success(`Added ${acceptedFiles.length} image(s) for optimization`);
  }, [quality, stripExif]);

  const optimizeImages = async () => {
    if (images.length === 0) return;

    setIsProcessing(true);
    
    for (const image of images.filter(img => img.status === 'pending')) {
      try {
        setImages(prev => prev.map(img => 
          img.id === image.id 
            ? { ...img, status: 'processing' as const }
            : img
        ));

        const optimizedBlob = await processImage(image.file, {
          format: image.file.type.includes('png') ? 'png' : 'jpg',
          quality: image.quality / 100,
          stripExif: image.stripExif,
        });

        const optimizedUrl = URL.createObjectURL(optimizedBlob);

        setImages(prev => prev.map(img => 
          img.id === image.id 
            ? { 
                ...img, 
                status: 'completed' as const, 
                optimizedUrl,
                optimizedSize: optimizedBlob.size
              }
            : img
        ));

      } catch (error) {
        setImages(prev => prev.map(img => 
          img.id === image.id 
            ? { ...img, status: 'error' as const, error: error instanceof Error ? error.message : 'Unknown error' }
            : img
        ));
      }
    }

    setIsProcessing(false);
    toast.success('Image optimization completed!');
  };

  const downloadImage = (image: OptimizedImage) => {
    if (!image.optimizedUrl) return;

    const link = document.createElement('a');
    link.href = image.optimizedUrl;
    link.download = `optimized_${image.file.name}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadAll = () => {
    const completedImages = images.filter(img => img.status === 'completed' && img.optimizedUrl);
    completedImages.forEach(downloadImage);
  };

  const clearQueue = () => {
    images.forEach(img => {
      if (img.originalUrl) URL.revokeObjectURL(img.originalUrl);
      if (img.optimizedUrl) URL.revokeObjectURL(img.optimizedUrl);
    });
    setImages([]);
  };

  const removeImage = (id: string) => {
    const image = images.find(img => img.id === id);
    if (image) {
      if (image.originalUrl) URL.revokeObjectURL(image.originalUrl);
      if (image.optimizedUrl) URL.revokeObjectURL(image.optimizedUrl);
    }
    setImages(prev => prev.filter(img => img.id !== id));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const calculateSavings = () => {
    const completedImages = images.filter(img => img.status === 'completed' && img.optimizedSize);
    if (completedImages.length === 0) return { totalSaved: 0, percentage: 0 };
    
    const totalOriginal = completedImages.reduce((sum, img) => sum + img.originalSize, 0);
    const totalOptimized = completedImages.reduce((sum, img) => sum + (img.optimizedSize || 0), 0);
    const totalSaved = totalOriginal - totalOptimized;
    const percentage = totalOriginal > 0 ? (totalSaved / totalOriginal) * 100 : 0;
    
    return { totalSaved, percentage };
  };

  const { totalSaved, percentage } = calculateSavings();

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileImage className="h-5 w-5" />
                Upload Images
              </CardTitle>
            </CardHeader>
            <CardContent>
              <FileUpload onFilesSelected={onDrop} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings2 className="h-5 w-5" />
                Optimization Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <QualitySlider value={quality} onChange={setQuality} />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="strip-exif"
                      checked={stripExif}
                      onCheckedChange={setStripExif}
                    />
                    <Label htmlFor="strip-exif">Strip EXIF data</Label>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Remove metadata like location, camera settings, and timestamps to reduce file size and protect privacy.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {images.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Optimization Queue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {images.map((image) => (
                    <div key={image.id} className="flex items-center gap-3 p-3 border rounded-lg">
                      <div className="w-12 h-12 bg-muted rounded-md overflow-hidden flex-shrink-0">
                        <img 
                          src={image.optimizedUrl || image.originalUrl} 
                          alt={image.file.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-medium truncate">
                            {image.file.name}
                          </span>
                          <Badge variant={
                            image.status === 'completed' ? 'default' :
                            image.status === 'processing' ? 'secondary' :
                            image.status === 'error' ? 'destructive' : 'outline'
                          }>
                            {image.status}
                          </Badge>
                        </div>
                        
                        <div className="text-xs text-muted-foreground">
                          {formatFileSize(image.originalSize)}
                          {image.optimizedSize && (
                            <>
                              {' → '}
                              <span className="text-green-600 font-medium">
                                {formatFileSize(image.optimizedSize)}
                              </span>
                              <span className="text-green-600 ml-1">
                                (-{Math.round(((image.originalSize - image.optimizedSize) / image.originalSize) * 100)}%)
                              </span>
                            </>
                          )}
                        </div>
                        
                        {image.error && (
                          <div className="text-xs text-destructive mt-1">
                            {image.error}
                          </div>
                        )}
                      </div>
                      
                      <div className="flex gap-1">
                        {image.status === 'completed' && (
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => downloadImage(image)}
                          >
                            <Download className="h-4 w-4" />
                          </Button>
                        )}
                        
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => removeImage(image.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Optimization Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {images.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-8">
                  No images to optimize
                </p>
              ) : (
                <>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Files</span>
                      <span>{images.length}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Completed</span>
                      <span>{images.filter(img => img.status === 'completed').length}</span>
                    </div>
                    {totalSaved > 0 && (
                      <>
                        <div className="flex justify-between text-sm">
                          <span>Space Saved</span>
                          <span className="text-green-600 font-medium">
                            {formatFileSize(totalSaved)}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Reduction</span>
                          <span className="text-green-600 font-medium">
                            {percentage.toFixed(1)}%
                          </span>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-medium">Current Settings:</div>
                    <div className="text-xs text-muted-foreground space-y-1">
                      <div>Quality: {quality}%</div>
                      <div>Strip EXIF: {stripExif ? 'Yes' : 'No'}</div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Button 
                      onClick={optimizeImages}
                      disabled={isProcessing || images.every(img => img.status === 'completed')}
                      className="w-full"
                    >
                      {isProcessing ? 'Optimizing...' : 'Optimize All'}
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
                        Clear
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {images.length > 0 && (
            <ImagePreview 
              images={images.slice(0, 3).map(img => ({
                ...img,
                convertedUrl: img.optimizedUrl,
                targetFormat: img.file.type.includes('png') ? 'png' : 'jpg'
              }))} 
            />
          )}
        </div>
      </div>
    </div>
  );
}