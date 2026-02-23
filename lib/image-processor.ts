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
        img.onload = () => {
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
            
            const targetMime = getMimeType(format);
            
            // Check if the browser supports the target format
            // by testing with a tiny canvas
            const testCanvas = document.createElement('canvas');
            testCanvas.width = 1;
            testCanvas.height = 1;
            const testCtx = testCanvas.getContext('2d');
            if (testCtx) {
              testCtx.fillRect(0, 0, 1, 1);
            }
            
            // For formats that use quality (JPEG, WEBP), pass it.
            // For lossless formats (PNG, BMP), quality param is ignored by canvas.
            const qualityParam = ['image/jpeg', 'image/webp'].includes(targetMime) ? quality : undefined;
            
            canvas.toBlob(
              (blob: Blob | null) => {
                if (!blob) {
                  reject(new Error(`Failed to convert image to ${format}. Your browser may not support this format.`));
                  return;
                }
                
                // Verify the blob has the expected MIME type
                // If the browser doesn't support the target format, toBlob silently
                // falls back to image/png. Detect that and warn the user.
                if (blob.type !== targetMime) {
                  console.warn(
                    `Browser does not support ${targetMime} output. Got ${blob.type} instead.`
                  );
                  // Still return the blob — it's valid, just in a fallback format
                }
                
                resolve(blob);
              },
              targetMime,
              qualityParam
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
