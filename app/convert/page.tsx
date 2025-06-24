import { Metadata } from 'next';
import { ImageConverter } from '@/components/image-converter';

export const metadata: Metadata = {
  title: 'Convert Images - CleanConvert',
  description: 'Convert images between JPG, PNG, WEBP, AVIF, BMP, TIFF, ICO, SVG formats. Fast, private, browser-based conversion.',
  alternates: {
    canonical: '/convert',
  },
};

export default function ConvertPage() {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Convert Images
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Convert between JPG, PNG, WEBP, AVIF, BMP, TIFF, ICO, SVG formats with our privacy-respecting converter.
          </p>
        </div>
        <ImageConverter />
      </div>
    </div>
  );
}