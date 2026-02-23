import { Metadata } from 'next';
import Link from 'next/link';
import { ImageConverter } from '@/components/image-converter';

export const metadata: Metadata = {
  title: 'Convert PNG to WEBP Free - Reduce Size 80%',
  description: 'Convert PNG to WEBP format and reduce file sizes by up to 80% while maintaining quality. Free online PNG to WEBP converter. No uploads, instant browser-based conversion.',
  keywords: ['convert PNG to WEBP', 'PNG to WEBP converter', 'reduce image size', 'web optimization', 'image compression', 'free WEBP converter'],
  alternates: {
    canonical: '/convert/png-to-webp',
  },
  openGraph: {
    title: 'Convert PNG to WEBP Free - Reduce Size 80%',
    description: 'Convert PNG to WEBP format for better web performance. Free, fast, and private conversion.',
    url: '/convert/png-to-webp',
    images: ['/og-image.png'],
    type: 'website',
  },
};

export default function PngToWebpPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "PNG to WEBP Converter",
    "description": "Free online converter to convert PNG images to WEBP format for better web performance and smaller file sizes.",
    "url": "https://www.cleanconvert.online/convert/png-to-webp",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Convert PNG to WEBP",
      "Reduce file size up to 80%",
      "Maintain image quality",
      "Support transparency",
      "Batch PNG to WEBP conversion",
      "No file uploads required"
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
            Convert PNG to WEBP Online Free
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Convert PNG images to WEBP format for better web performance. Reduce file sizes by up to 80% while maintaining excellent quality.
          </p>
        </div>
        <ImageConverter defaultFormat="webp" defaultSourceHint="png" />
        
        <div className="mt-12 prose prose-lg max-w-4xl mx-auto">
          <h2>Why Convert PNG to WEBP?</h2>
          <p>
            WEBP is a modern image format that provides superior compression compared to PNG while maintaining excellent quality. Benefits include:
          </p>
          <ul>
            <li>Reduce file sizes by 70-80% compared to PNG</li>
            <li>Faster website loading times</li>
            <li>Better SEO performance due to improved page speed</li>
            <li>Support for transparency (like PNG)</li>
            <li>Widely supported by modern browsers</li>
          </ul>
          
          <h2>How to Convert PNG to WEBP</h2>
          <ol>
            <li>Upload your PNG files using the converter above</li>
            <li>Select WEBP as your output format</li>
            <li>Adjust quality settings if needed (recommended: 80-90%)</li>
            <li>Click "Convert" to process your images</li>
            <li>Download your optimized WEBP files</li>
          </ol>
          
          <h2>PNG vs WEBP Comparison</h2>
          <p>
            <strong>PNG:</strong> Lossless compression, perfect quality, supports transparency, but larger file sizes.
          </p>
          <p>
            <strong>WEBP:</strong> Excellent compression (lossy and lossless), smaller file sizes, supports transparency, ideal for web use.
          </p>
          
          <h2>When to Use WEBP</h2>
          <ul>
            <li>Website images and graphics</li>
            <li>E-commerce product photos</li>
            <li>Blog post images</li>
            <li>Social media content</li>
            <li>Any image intended for web display</li>
          </ul>

          <h2>Related Image Conversions</h2>
          <ul>
            <li><Link href="/convert/jpg-to-png">Convert JPG to PNG</Link> — Add transparency to JPG images</li>
            <li><Link href="/convert/jpg-to-avif">Convert JPG to AVIF</Link> — Next-gen format with 50% smaller files</li>
            <li><Link href="/convert/webp-to-jpg">Convert WEBP to JPG</Link> — Universal compatibility for any device</li>
            <li><Link href="/convert">All Image Conversions</Link> — Browse all supported formats</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
