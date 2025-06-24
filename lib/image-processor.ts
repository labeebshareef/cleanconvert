import imageCompression from 'browser-image-compression';

export interface ProcessingOptions {
  format: string;
  quality: number;
  maxWidth?: number;
  maxHeight?: number;
  stripExif?: boolean;
}

export async function processImage(file: File, options: ProcessingOptions): Promise<Blob> {
  const { format, quality, maxWidth, maxHeight, stripExif = true } = options;
  
  try {
    // Create canvas for image processing
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Could not get canvas context');

    // Load image
    const img = new Image();
    const imageUrl = URL.createObjectURL(file);
    
    return new Promise((resolve, reject) => {
      img.onload = async () => {
        try {
          URL.revokeObjectURL(imageUrl);
          
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
            async (blob) => {
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
        URL.revokeObjectURL(imageUrl);
        reject(new Error('Failed to load image'));
      };
      
      img.src = imageUrl;
    });
  } catch (error) {
    throw new Error(`Image processing failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

function getMimeType(format: string): string {
  const mimeTypes: Record<string, string> = {
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'png': 'image/png',
    'webp': 'image/webp',
    'avif': 'image/avif',
    'bmp': 'image/bmp',
    'tiff': 'image/tiff',
    'ico': 'image/x-icon',
  };
  
  return mimeTypes[format.toLowerCase()] || 'image/jpeg';
}

export function getFileExtension(mimeType: string): string {
  const extensions: Record<string, string> = {
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/webp': 'webp',
    'image/avif': 'avif',
    'image/bmp': 'bmp',
    'image/tiff': 'tiff',
    'image/x-icon': 'ico',
  };
  
  return extensions[mimeType] || 'jpg';
}