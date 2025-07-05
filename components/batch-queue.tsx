'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Trash2, Image as ImageIcon } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { BatchQueueProps, ProcessedImage } from '@/types';

export function BatchQueue({ images, onRemove, onDownload }: BatchQueueProps) {
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

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ImageIcon className="h-5 w-5" />
          Batch Queue ({images.length})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-96">
          <div className="space-y-3">
            {images.map((image) => (
              <div 
                key={image.id} 
                className="flex items-center gap-3 p-3 border rounded-lg"
              >
                <div className="w-12 h-12 bg-muted rounded-md overflow-hidden flex-shrink-0">
                  <img 
                    src={image.originalUrl} 
                    alt={image.file.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium truncate">
                      {image.file.name}
                    </span>
                    <Badge variant={getStatusColor(image.status)} className="text-xs">
                      {image.status}
                    </Badge>
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    {formatFileSize(image.file.size)} → {image.targetFormat.toUpperCase()} ({image.quality}%)
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
                      onClick={() => onDownload(image)}
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  )}
                  
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => onRemove(image.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}