'use client';

import { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileUpload } from '@/components/file-upload';
import { Badge } from '@/components/ui/badge';
import { processImage } from '@/lib/image-processor';
import { Download, Maximize2, Smartphone, Monitor, Tablet } from 'lucide-react';
import { toast } from 'sonner';

const presets = [
  { name: 'HD', width: 1920, height: 1080, icon: Monitor },
  { name: 'Full HD', width: 1920, height: 1080, icon: Monitor },
  { name: 'Tablet', width: 1024, height: 768, icon: Tablet },
  { name: 'Mobile', width: 375, height: 667, icon: Smartphone },
  { name: 'Square', width: 1080, height: 1080, icon: Maximize2 },
  { name: 'Instagram', width: 1080, height: 1080, icon: Maximize2 },
];

interface ResizedImage {
  id: string;
  file: File;
  originalUrl: string;
  resizedUrl?: string;
  width: number;
  height: number;
  status: 'pending' | 'processing' | 'completed' | 'error';
}

export function ImageResizer() {
  const [images, setImages] = useState<ResizedImage[]>([]);
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(600);
  const [maintainAspectRatio, setMaintainAspectRatio] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newImages = acceptedFiles.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      originalUrl: URL.createObjectURL(file),
      width,
      height,
      status: 'pending' as const,
    }));
    
    setImages(prev => [...prev, ...newImages]);
    toast.success(`Added ${acceptedFiles.length} image(s) for resizing`);
  }, [width, height]);

  const applyPreset = (preset: typeof presets[0]) => {
    setWidth(preset.width);
    setHeight(preset.height);
  };

  const resizeImages = async () => {
    if (images.length === 0) return;

    setIsProcessing(true);
    
    for (const image of images.filter(img => img.status === 'pending')) {
      try {
        setImages(prev => prev.map(img => 
          img.id === image.id 
            ? { ...img, status: 'processing' as const }
            : img
        ));

        const resizedBlob = await processImage(image.file, {
          format: 'png',
          quality: 1,
          maxWidth: image.width,
          maxHeight: image.height,
        });

        const resizedUrl = URL.createObjectURL(resizedBlob);

        setImages(prev => prev.map(img => 
          img.id === image.id 
            ? { ...img, status: 'completed' as const, resizedUrl }
            : img
        ));

      } catch (error) {
        setImages(prev => prev.map(img => 
          img.id === image.id 
            ? { ...img, status: 'error' as const }
            : img
        ));
      }
    }

    setIsProcessing(false);
    toast.success('Image resizing completed!');
  };

  const downloadImage = (image: ResizedImage) => {
    if (!image.resizedUrl) return;

    const link = document.createElement('a');
    link.href = image.resizedUrl;
    link.download = `${image.file.name.split('.')[0]}_${image.width}x${image.height}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Upload Images</CardTitle>
            </CardHeader>
            <CardContent>
              <FileUpload onFilesSelected={onDrop} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Resize Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <Tabs defaultValue="custom" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="custom">Custom Size</TabsTrigger>
                  <TabsTrigger value="presets">Presets</TabsTrigger>
                </TabsList>
                
                <TabsContent value="custom" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="width">Width (px)</Label>
                      <Input
                        id="width"
                        type="number"
                        value={width}
                        onChange={(e) => setWidth(Number(e.target.value))}
                        min="1"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="height">Height (px)</Label>
                      <Input
                        id="height"
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(Number(e.target.value))}
                        min="1"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="aspect-ratio"
                      checked={maintainAspectRatio}
                      onCheckedChange={setMaintainAspectRatio}
                    />
                    <Label htmlFor="aspect-ratio">Maintain aspect ratio</Label>
                  </div>
                </TabsContent>
                
                <TabsContent value="presets" className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    {presets.map((preset) => (
                      <Button
                        key={preset.name}
                        variant="outline"
                        className="flex items-center gap-2 p-4 h-auto"
                        onClick={() => applyPreset(preset)}
                      >
                        <preset.icon className="h-4 w-4" />
                        <div className="text-left">
                          <div className="font-medium">{preset.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {preset.width} × {preset.height}
                          </div>
                        </div>
                      </Button>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Queue
                <Badge variant="secondary">{images.length} files</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {images.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-8">
                  No images to resize
                </p>
              ) : (
                <div className="space-y-4">
                  <Button 
                    onClick={resizeImages}
                    disabled={isProcessing || images.every(img => img.status === 'completed')}
                    className="w-full"
                  >
                    {isProcessing ? 'Resizing...' : 'Resize All'}
                  </Button>

                  <div className="space-y-2">
                    {images.map((image) => (
                      <div key={image.id} className="flex items-center gap-3 p-2 border rounded">
                        <div className="w-8 h-8 bg-muted rounded overflow-hidden">
                          <img 
                            src={image.originalUrl} 
                            alt={image.file.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium truncate">
                            {image.file.name}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {image.width} × {image.height}
                          </div>
                        </div>
                        
                        {image.status === 'completed' && (
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => downloadImage(image)}
                          >
                            <Download className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}