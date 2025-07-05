import { Metadata } from 'next';
import { ImageConverter } from '@/components/image-converter';

export const metadata: Metadata = {
  title: 'Convert WEBP to JPG Online Free - CleanConvert',
  description: 'Convert WEBP to JPG format for maximum compatibility. Free online WEBP to JPG converter. No uploads, instant conversion with quality control.',
  keywords: 'convert WEBP to JPG, WEBP to JPG converter, WEBP to JPEG, image compatibility, social media images, universal format',
  alternates: {
    canonical: '/convert/webp-to-jpg',
  },
  openGraph: {
    title: 'Convert WEBP to JPG Online Free - CleanConvert',
    description: 'Convert WEBP to JPG format for universal compatibility. Free, fast, and private conversion.',
    url: '/convert/webp-to-jpg',
    images: ['/og-image.png'],
    type: 'website',
  },
};

export default function WebpToJpgPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "WEBP to JPG Converter",
    "description": "Free online converter to convert WEBP images to JPG format for maximum compatibility across all devices and platforms.",
    "url": "https://www.cleanconvert.online/convert/webp-to-jpg",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Convert WEBP to JPG",
      "Universal compatibility",
      "Quality control options",
      "Batch WEBP to JPG conversion",
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
            Convert WEBP to JPG Online Free
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Convert WEBP images to JPG format for maximum compatibility. Perfect for social media, email, and older devices.
          </p>
        </div>
        <ImageConverter />
        
        <div className="mt-12 prose prose-lg max-w-4xl mx-auto">
          <h2>Why Convert WEBP to JPG?</h2>
          <p>
            While WEBP offers excellent compression, JPG remains the most universally supported image format. Convert WEBP to JPG when you need:
          </p>
          <ul>
            <li>Maximum compatibility across all devices and platforms</li>
            <li>Support for older browsers and software</li>
            <li>Social media uploads (some platforms prefer JPG)</li>
            <li>Email attachments and document embedding</li>
            <li>Print-ready images</li>
          </ul>
          
          <h2>How to Convert WEBP to JPG</h2>
          <ol>
            <li>Upload your WEBP files using the converter above</li>
            <li>Select JPG as your output format</li>
            <li>Adjust quality settings (recommended: 85-95% for photos)</li>
            <li>Click "Convert" to process your images</li>
            <li>Download your converted JPG files</li>
          </ol>
          
          <h2>WEBP vs JPG: When to Use Each</h2>
          <p>
            <strong>WEBP:</strong> Best for web use, smaller file sizes, modern browsers, supports transparency.
          </p>
          <p>
            <strong>JPG:</strong> Best for universal compatibility, photography, print media, social media, and older systems.
          </p>
          
          <h2>Quality Settings Guide</h2>
          <ul>
            <li><strong>95-100%:</strong> Print quality, maximum detail</li>
            <li><strong>85-95%:</strong> High quality for web and professional use</li>
            <li><strong>70-85%:</strong> Good quality for general web use</li>
            <li><strong>50-70%:</strong> Smaller files for fast loading</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
