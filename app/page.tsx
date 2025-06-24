import { Metadata } from 'next';
import { ImageConverter } from '@/components/image-converter';
import { Hero } from '@/components/hero';
import { Features } from '@/components/features';

export const metadata: Metadata = {
  title: 'CleanConvert - No BS. Just Image Tools.',
  description: 'Fast, privacy-respecting image converter. Convert JPG, PNG, WEBP, AVIF and more. Zero uploads, zero storage, zero clutter.',
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <div className="space-y-12">
      <Hero />
      <ImageConverter />
      <Features />
    </div>
  );
}