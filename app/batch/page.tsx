import { Metadata } from 'next';
import { BatchProcessor } from '@/components/batch-processor';

export const metadata: Metadata = {
  title: 'Batch Processing - CleanConvert',
  description: 'Process multiple images at once with batch conversion, resizing, and optimization. Upload ZIP files or multiple images for bulk processing.',
  alternates: {
    canonical: '/batch',
  },
};

export default function BatchPage() {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Batch Processing
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Process multiple images simultaneously. Upload ZIP files or select multiple images for bulk conversion, resizing, and optimization.
          </p>
        </div>
        <BatchProcessor />
      </div>
    </div>
  );
}