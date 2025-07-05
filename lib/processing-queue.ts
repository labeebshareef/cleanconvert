import { ProcessingOptions } from './image-processor';

export interface ProcessingQueueItem {
  id: string;
  file: File;
  options: ProcessingOptions;
  onProgress?: (progress: number) => void;
  onComplete?: (result: Blob) => void;
  onError?: (error: Error) => void;
}

export class ProcessingQueue {
  private queue: ProcessingQueueItem[] = [];
  private isProcessing = false;
  private maxConcurrent = 2;
  private activeJobs = 0;

  add(item: ProcessingQueueItem) {
    this.queue.push(item);
    this.processNext();
  }

  private async processNext() {
    if (this.isProcessing || this.activeJobs >= this.maxConcurrent || this.queue.length === 0) {
      return;
    }

    const item = this.queue.shift();
    if (!item) return;

    this.activeJobs++;
    this.isProcessing = true;

    try {
      const { processImage } = await import('./image-processor');
      
      // Use requestIdleCallback for better performance
      const processWithIdleCallback = () => {
        return new Promise<Blob>((resolve, reject) => {
          if ('requestIdleCallback' in window) {
            requestIdleCallback(async () => {
              try {
                const result = await processImage(item.file, item.options);
                resolve(result);
              } catch (error) {
                reject(error);
              }
            });
          } else {
            // Fallback for browsers without requestIdleCallback
            setTimeout(async () => {
              try {
                const result = await processImage(item.file, item.options);
                resolve(result);
              } catch (error) {
                reject(error);
              }
            }, 16); // ~60fps
          }
        });
      };

      const result = await processWithIdleCallback();
      item.onComplete?.(result);
    } catch (error) {
      const errorObj = error instanceof Error ? error : new Error('Unknown processing error');
      item.onError?.(errorObj);
    } finally {
      this.activeJobs--;
      this.isProcessing = false;
      
      // Process next item
      setTimeout(() => this.processNext(), 0);
    }
  }

  clear() {
    this.queue.length = 0;
  }

  get length() {
    return this.queue.length;
  }
}

export const globalProcessingQueue = new ProcessingQueue();
