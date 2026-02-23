import { Metadata } from 'next';
import Link from 'next/link';
import { ImageConverter } from '@/components/image-converter';

export const metadata: Metadata = {
  title: 'Convert JPG to AVIF Free - Next-Gen Format',
  description: 'Convert JPG to AVIF format for next-generation image compression. Reduce file sizes by 50% while maintaining superior quality. Free online JPG to AVIF converter, no uploads.',
  keywords: ['convert JPG to AVIF', 'JPG to AVIF converter', 'next-gen image format', 'image compression', 'reduce file size', 'AVIF converter'],
  alternates: {
    canonical: '/convert/jpg-to-avif',
  },
  openGraph: {
    title: 'Convert JPG to AVIF Free - Next-Gen Format',
    description: 'Convert JPG to AVIF format for superior compression and quality. Free, fast, and private conversion.',
    url: '/convert/jpg-to-avif',
    images: ['/og-image.png'],
    type: 'website',
  },
};

export default function JpgToAvifPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "JPG to AVIF Converter",
    "description": "Free online converter to convert JPG images to AVIF format for next-generation image compression and superior quality.",
    "url": "https://www.cleanconvert.online/convert/jpg-to-avif",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Convert JPG to AVIF",
      "Reduce file size by 50%",
      "Superior image quality",
      "Next-gen compression",
      "Batch JPG to AVIF conversion",
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
            Convert JPG to AVIF Online Free
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Convert JPG images to AVIF format for next-generation compression. Reduce file sizes by 50% while maintaining superior quality.
          </p>
        </div>
        <ImageConverter defaultFormat="avif" defaultSourceHint="jpg" />
        
        <div className="mt-12 prose prose-lg max-w-4xl mx-auto">
          <h2>Why Convert JPG to AVIF?</h2>
          <p>
            AVIF is the newest image format offering exceptional compression efficiency. Converting JPG to AVIF provides:
          </p>
          <ul>
            <li>50% smaller file sizes compared to JPG</li>
            <li>Better image quality at the same file size</li>
            <li>Support for HDR and wide color gamut</li>
            <li>Superior compression for photographs</li>
            <li>Future-proof format for modern web</li>
          </ul>
          
          <h2>How to Convert JPG to AVIF</h2>
          <ol>
            <li>Upload your JPG files using the converter above</li>
            <li>Select AVIF as your output format</li>
            <li>Adjust quality settings (recommended: 50-70 for AVIF)</li>
            <li>Click "Convert" to process your images</li>
            <li>Download your optimized AVIF files</li>
          </ol>
          
          <h2>JPG vs AVIF: The Future of Images</h2>
          <p>
            <strong>JPG:</strong> Universal compatibility, good compression, established format, works everywhere.
          </p>
          <p>
            <strong>AVIF:</strong> Next-gen compression, smaller files, better quality, HDR support, but limited older browser support.
          </p>
          
          <h2>Browser Support for AVIF</h2>
          <p>
            AVIF is supported by modern browsers including Chrome, Firefox, and Safari. For maximum compatibility, consider providing JPG fallbacks or using progressive enhancement techniques.
          </p>
          
          <h2>Best Use Cases for AVIF</h2>
          <ul>
            <li>Modern websites with progressive enhancement</li>
            <li>High-quality photography websites</li>
            <li>Mobile-first applications</li>
            <li>Content delivery networks (CDNs)</li>
            <li>Performance-critical web applications</li>
          </ul>

          <h2>Related Image Conversions</h2>
          <ul>
            <li><Link href="/convert/jpg-to-png">Convert JPG to PNG</Link> — Add transparency to JPG images</li>
            <li><Link href="/convert/png-to-webp">Convert PNG to WEBP</Link> — Reduce PNG file size by up to 80%</li>
            <li><Link href="/convert/webp-to-jpg">Convert WEBP to JPG</Link> — Universal compatibility for any device</li>
            <li><Link href="/convert">All Image Conversions</Link> — Browse all supported formats</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
