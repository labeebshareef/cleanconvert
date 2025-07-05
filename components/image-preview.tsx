'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, Eye } from 'lucide-react';
import { ImagePreviewProps, ProcessedImage } from '@/types';

export function ImagePreview({ images }: ImagePreviewProps) {
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getStatusColor = (status: ProcessedImage['status']) => {
    switch (status) {
      case 'pending': return 'secondary';
      case 'processing': return 'default';
      case 'completed': return 'default';
      case 'error': return 'destructive';
      default: return 'secondary';
    }
  };

  if (images.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Eye className="h-5 w-5" />
          Preview
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {images.map((image) => (
          <div key={image.id} className="space-y-3">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <img 
                src={image.convertedUrl || image.originalUrl} 
                alt={image.file.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium truncate">
                  {image.file.name}
                </span>
                <Badge variant={getStatusColor(image.status)}>
                  {image.status}
                </Badge>
              </div>
              
              <div className="text-xs text-muted-foreground space-y-1">
                <div>Size: {formatFileSize(image.file.size)}</div>
                <div>Format: {image.targetFormat.toUpperCase()}</div>
                <div>Quality: {image.quality}%</div>
              </div>

              {image.status === 'completed' && image.convertedUrl && (
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = image.convertedUrl!;
                    link.download = `${image.file.name.split('.')[0]}.${image.targetFormat}`;
                    link.click();
                  }}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}