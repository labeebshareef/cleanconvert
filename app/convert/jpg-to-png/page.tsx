import { Metadata } from 'next';
import Link from 'next/link';
import { ImageConverter } from '@/components/image-converter';

export const metadata: Metadata = {
  title: 'Convert JPG to PNG Online Free - No Upload',
  description: 'Convert JPG to PNG format instantly with our free online converter. No uploads required, 100% browser-based. Add transparency support, preserve quality. Fast JPG to PNG conversion.',
  keywords: ['convert JPG to PNG', 'JPG to PNG converter', 'JPEG to PNG', 'free image converter', 'online JPG to PNG', 'add transparency to JPG'],
  alternates: {
    canonical: '/convert/jpg-to-png',
  },
  openGraph: {
    title: 'Convert JPG to PNG Online Free - No Upload Required',
    description: 'Convert JPG to PNG format instantly. Add transparency, preserve quality. Free, fast, private browser-based conversion.',
    url: '/convert/jpg-to-png',
    images: ['/og-image.png'],
    type: 'website',
  },
};

export default function JpgToPngPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "JPG to PNG Converter",
    "description": "Free online converter to convert JPG images to PNG format with transparency support.",
    "url": "https://www.cleanconvert.online/convert/jpg-to-png",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Convert JPG to PNG",
      "Preserve image quality",
      "Add transparency support",
      "Batch JPG to PNG conversion",
      "No file uploads required",
      "Privacy-focused processing"
    ]
  };

  return (
    <div className="py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema)
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Convert JPG to PNG Online Free
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Convert JPG images to PNG format instantly. Perfect for adding transparency or ensuring lossless quality. No uploads, completely free.
          </p>
        </div>
        <ImageConverter defaultFormat="png" defaultSourceHint="jpg" />
        
        <div className="mt-12 prose prose-lg max-w-4xl mx-auto">
          <h2>Why Convert JPG to PNG?</h2>
          <p>
            PNG format offers lossless compression and transparency support, making it ideal for logos, graphics with text, and images that need transparent backgrounds. Convert your JPG files to PNG to:
          </p>
          <ul>
            <li>Add transparency support for web graphics</li>
            <li>Preserve image quality without compression artifacts</li>
            <li>Create logos and graphics with transparent backgrounds</li>
            <li>Maintain crisp text and sharp edges in graphics</li>
          </ul>
          
          <h2>How to Convert JPG to PNG</h2>
          <ol>
            <li>Upload your JPG files using the converter above</li>
            <li>The output format is automatically set to PNG</li>
            <li>Click "Convert" to process your images</li>
            <li>Download your converted PNG files</li>
          </ol>
          
          <h2>JPG vs PNG: Key Differences</h2>
          <p>
            <strong>JPG:</strong> Best for photographs with many colors. Uses lossy compression for smaller file sizes but doesn't support transparency.
          </p>
          <p>
            <strong>PNG:</strong> Best for graphics, logos, and images with text. Uses lossless compression and supports transparency, but creates larger files.
          </p>

          <h2>Related Image Conversions</h2>
          <ul>
            <li><Link href="/convert/png-to-webp">Convert PNG to WEBP</Link> — Reduce PNG file size by up to 80%</li>
            <li><Link href="/convert/jpg-to-avif">Convert JPG to AVIF</Link> — Next-gen format with 50% smaller files</li>
            <li><Link href="/convert/webp-to-jpg">Convert WEBP to JPG</Link> — Universal compatibility for any device</li>
            <li><Link href="/convert">All Image Conversions</Link> — Browse all supported formats</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
