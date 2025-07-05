export interface ProcessedImage {
  id: string;
  file: File;
  originalUrl: string;
  convertedUrl?: string | undefined;
  targetFormat: string;
  quality: number;
  status: 'pending' | 'processing' | 'completed' | 'error';
  error?: string | undefined;
}

export interface BatchQueueProps {
  images: ProcessedImage[];
  onRemove: (id: string) => void;
  onDownload: (image: ProcessedImage) => void;
}

export interface ImagePreviewProps {
  images: ProcessedImage[];
}

export interface ResizedImage {
  id: string;
  file: File;
  originalUrl: string;
  resizedUrl?: string | undefined;
  width: number;
  height: number;
  status: 'pending' | 'processing' | 'completed' | 'error';
  error?: string | undefined;
}

export interface OptimizedImage {
  id: string;
  file: File;
  originalUrl: string;
  optimizedUrl?: string | undefined;
  originalSize: number;
  optimizedSize?: number | undefined;
  quality: number;
  stripExif: boolean;
  status: 'pending' | 'processing' | 'completed' | 'error';
  error?: string | undefined;
}
