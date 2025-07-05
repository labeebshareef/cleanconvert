export interface AsyncOperationOptions {
  timeout?: number;
  retries?: number;
  onProgress?: (progress: number) => void;
}

export async function withErrorHandling<T>(
  operation: () => Promise<T>,
  options: AsyncOperationOptions = {}
): Promise<T> {
  const { timeout = 30000, retries = 3 } = options;
  
  let lastError: Error | null = null;
  
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      // Add timeout to the operation
      const timeoutPromise = new Promise<never>((_, reject) => {
        setTimeout(() => reject(new Error('Operation timed out')), timeout);
      });
      
      const result = await Promise.race([operation(), timeoutPromise]);
      return result;
    } catch (error) {
      lastError = error instanceof Error ? error : new Error('Unknown error');
      
      if (attempt < retries) {
        // Exponential backoff
        const delay = Math.pow(2, attempt) * 1000;
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }
  
  throw lastError || new Error('Operation failed after retries');
}

export async function batchProcess<T, R>(
  items: T[],
  processor: (item: T, index: number) => Promise<R>,
  options: {
    concurrency?: number;
    onProgress?: (completed: number, total: number) => void;
    onError?: (error: Error, item: T, index: number) => void;
  } = {}
): Promise<R[]> {
  const { concurrency = 3, onProgress, onError } = options;
  const results: R[] = [];
  let completed = 0;
  
  const processChunk = async (chunk: Array<{ item: T; index: number }>) => {
    const chunkResults = await Promise.allSettled(
      chunk.map(async ({ item, index }) => {
        try {
          const result = await processor(item, index);
          completed++;
          onProgress?.(completed, items.length);
          return result;
        } catch (error) {
          const err = error instanceof Error ? error : new Error('Unknown error');
          onError?.(err, item, index);
          throw err;
        }
      })
    );
    
    return chunkResults.map(result => {
      if (result.status === 'fulfilled') {
        return result.value;
      } else {
        throw result.reason;
      }
    });
  };
  
  // Process items in chunks
  for (let i = 0; i < items.length; i += concurrency) {
    const chunk = items.slice(i, i + concurrency).map((item, chunkIndex) => ({
      item,
      index: i + chunkIndex
    }));
    
    try {
      const chunkResults = await processChunk(chunk);
      results.push(...chunkResults);
    } catch (error) {
      // Continue processing even if some items fail
      console.error('Batch processing error:', error);
    }
  }
  
  return results;
}
