import imageCompression from 'browser-image-compression';
import { withErrorHandling } from './async-utils';

export interface ProcessingOptions {
  format: string;
  quality: number;
  maxWidth?: number;
  maxHeight?: number;
  stripExif?: boolean;
}

export async function processImage(file: File, options: ProcessingOptions): Promise<Blob> {
  return withErrorHandling(async () => {
    const { format, quality, maxWidth, maxHeight } = options;
    
    // Validate inputs
    if (!file || !file.type.startsWith('image/')) {
      throw new Error('Invalid file: must be an image');
    }
    
    if (quality < 0 || quality > 1) {
      throw new Error('Quality must be between 0 and 1');
    }

    // Create canvas for image processing
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Could not get canvas context');

    // Load image
    const img = new Image();
    const imageUrl = URL.createObjectURL(file);
    
    try {
      const result = await new Promise<Blob>((resolve, reject) => {
        img.onload = async () => {
          try {
            // Calculate dimensions
            let { width, height } = img;
            
            if (maxWidth && width > maxWidth) {
              height = (height * maxWidth) / width;
              width = maxWidth;
            }
            
            if (maxHeight && height > maxHeight) {
              width = (width * maxHeight) / height;
              height = maxHeight;
            }
            
            // Set canvas size
            canvas.width = width;
            canvas.height = height;
            
            // Draw image
            ctx.drawImage(img, 0, 0, width, height);
            
            // Convert to blob
            canvas.toBlob(
              async (blob: Blob | null) => {
                if (!blob) {
                  reject(new Error('Failed to create blob'));
                  return;
                }
                
                // Apply compression if needed
                if (quality < 1) {
                  try {
                    const compressedFile = await imageCompression(
                      new File([blob], file.name, { type: blob.type }),
                      {
                        initialQuality: quality,
                        alwaysKeepResolution: true,
                      }
                    );
                    resolve(compressedFile);
                  } catch (error) {
                    // Fallback to original blob if compression fails
                    console.warn('Compression failed, using original:', error);
                    resolve(blob);
                  }
                } else {
                  resolve(blob);
                }
              },
              getMimeType(format),
              quality
            );
          } catch (error) {
            reject(error);
          }
        };
        
        img.onerror = () => {
          reject(new Error('Failed to load image'));
        };
        
        img.src = imageUrl;
      });
      
      return result;
    } finally {
      URL.revokeObjectURL(imageUrl);
    }
  }, {
    timeout: 30000,
    retries: 1
  });
}

function getMimeType(format: string): string {
  switch (format.toLowerCase()) {
    case 'jpg':
    case 'jpeg':
      return 'image/jpeg';
    case 'png':
      return 'image/png';
    case 'webp':
      return 'image/webp';
    case 'avif':
      return 'image/avif';
    case 'bmp':
      return 'image/bmp';
    case 'tiff':
      return 'image/tiff';
    default:
      return 'image/jpeg';
  }
}

export function getFileExtension(mimeType: string): string {
  switch (mimeType) {
    case 'image/jpeg':
      return 'jpg';
    case 'image/png':
      return 'png';
    case 'image/webp':
      return 'webp';
    case 'image/avif':
      return 'avif';
    case 'image/bmp':
      return 'bmp';
    case 'image/tiff':
      return 'tiff';
    default:
      return 'jpg';
  }
}
