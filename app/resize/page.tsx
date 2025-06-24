import { Metadata } from 'next';
import { ImageResizer } from '@/components/image-resizer';

export const metadata: Metadata = {
  title: 'Resize Images - CleanConvert',
  description: 'Resize images with custom dimensions or presets. Maintain aspect ratio or crop to fit. Browser-based, no uploads.',
  alternates: {
    canonical: '/resize',
  },
};

export default function ResizePage() {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Resize Images
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Resize images with custom dimensions or use presets. Maintain aspect ratio or crop to fit perfectly.
          </p>
        </div>
        <ImageResizer />
      </div>
    </div>
  );
}