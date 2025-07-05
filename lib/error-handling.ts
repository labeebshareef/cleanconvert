import { toast } from 'sonner';
import { URLManager } from './url-manager';

export interface ImageProcessingError extends Error {
  code: string;
  details?: any;
}

export class ImageProcessingError extends Error {
  constructor(message: string, public code: string, public details?: any) {
    super(message);
    this.name = 'ImageProcessingError';
  }
}

export async function safeProcessImage(
  file: File,
  options: any,
  onProgress?: (progress: number) => void
): Promise<{ success: true; blob: Blob; url: string } | { success: false; error: ImageProcessingError }> {
  try {
    const { processImage } = await import('./image-processor-new');
    
    // Validate file
    if (!file || !file.type.startsWith('image/')) {
      throw new ImageProcessingError('Invalid file type', 'INVALID_FILE_TYPE');
    }

    // Check file size (10MB limit)
    if (file.size > 10 * 1024 * 1024) {
      throw new ImageProcessingError('File too large (max 10MB)', 'FILE_TOO_LARGE');
    }

    onProgress?.(10);

    const blob = await processImage(file, options);
    
    onProgress?.(90);

    const url = URLManager.create(blob);
    
    onProgress?.(100);

    return { success: true, blob, url };
  } catch (error) {
    const processedError = error instanceof ImageProcessingError 
      ? error 
      : new ImageProcessingError(
          error instanceof Error ? error.message : 'Unknown error',
          'PROCESSING_ERROR',
          error
        );

    // Show user-friendly error message
    const userMessage = getUserFriendlyMessage(processedError);
    toast.error(userMessage);

    return { success: false, error: processedError };
  }
}

function getUserFriendlyMessage(error: ImageProcessingError): string {
  switch (error.code) {
    case 'INVALID_FILE_TYPE':
      return 'Please select a valid image file (JPG, PNG, WEBP, etc.)';
    case 'FILE_TOO_LARGE':
      return 'Image file is too large. Please use a file smaller than 10MB.';
    case 'PROCESSING_ERROR':
      return 'Failed to process image. Please try again with a different image.';
    case 'TIMEOUT':
      return 'Image processing timed out. Please try with a smaller image.';
    default:
      return 'An unexpected error occurred. Please try again.';
  }
}

export function handleAsyncError(error: any, context: string): void {
  console.error(`Error in ${context}:`, error);
  
  // Log to analytics if available
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'exception', {
      description: `${context}: ${error.message || 'Unknown error'}`,
      fatal: false,
    });
  }
  
  // Show user notification
  toast.error(`Failed to ${context.toLowerCase()}. Please try again.`);
}
