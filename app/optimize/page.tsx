import { Metadata } from 'next';
import { ImageOptimizer } from '@/components/image-optimizer';

export const metadata: Metadata = {
  title: 'Optimize Images - CleanConvert',
  description: 'Optimize images for web with compression, EXIF removal, and format conversion. Reduce file sizes while maintaining quality.',
  alternates: {
    canonical: '/optimize',
  },
};

export default function OptimizePage() {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Optimize Images
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Compress images, strip EXIF data, and optimize for web delivery. Reduce file sizes while maintaining visual quality.
          </p>
        </div>
        <ImageOptimizer />
      </div>
    </div>
  );
}