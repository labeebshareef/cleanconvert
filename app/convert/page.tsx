import { Metadata } from 'next';
import Link from 'next/link';
import { ImageConverter } from '@/components/image-converter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Zap, TrendingUp } from 'lucide-react';
import { conversions } from '@/lib/conversions';

export const metadata: Metadata = {
  title: 'Free Online Image Converter - Convert JPG to PNG, WEBP, AVIF | CleanConvert',
  description: 'Convert images between JPG, PNG, WEBP, AVIF, BMP, TIFF, ICO, SVG formats instantly. Fast, private, browser-based conversion. No uploads required. 100% free image converter.',
  keywords: 'convert JPG to PNG, convert PNG to WEBP, convert WEBP to JPG, convert AVIF to JPG, convert BMP to PNG, convert TIFF to JPG, convert ICO to PNG, convert SVG to PNG, free image converter, online image converter, browser image converter',
  alternates: {
    canonical: '/convert',
  },
  openGraph: {
    title: 'Free Image Converter - Convert JPG, PNG, WEBP, AVIF Online',
    description: 'Convert images between all major formats instantly. Private, fast, browser-based conversion tool.',
    url: '/convert',
    images: ['/og-image.png'],
    type: 'website',
  },
};

export default function ConvertPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CleanConvert Image Converter",
    "description": "Free online image converter supporting JPG, PNG, WEBP, AVIF, BMP, TIFF, ICO, SVG formats with privacy-focused browser-based processing.",
    "url": "https://www.cleanconvert.online/convert",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Convert JPG to PNG",
      "Convert PNG to WEBP", 
      "Convert WEBP to AVIF",
      "Convert AVIF to JPG",
      "Convert BMP to PNG",
      "Convert TIFF to JPG",
      "Convert ICO to PNG",
      "Convert SVG to PNG",
      "Batch image conversion",
      "Privacy-focused processing",
      "No file uploads required"
    ]
  };

  const popularConversions = [
    {
      title: 'JPG to PNG',
      description: 'Convert JPG to PNG for transparency support',
      href: '/convert/jpg-to-png',
      searches: '18K searches/month',
      badge: 'Most Popular'
    },
    {
      title: 'PNG to JPG',
      description: 'Reduce PNG file sizes dramatically',
      href: '/convert/png-to-jpg',
      searches: '12K searches/month',
      badge: 'High Demand'
    },
    {
      title: 'PNG to WEBP',
      description: 'Reduce file size by 70% with WEBP format',
      href: '/convert/png-to-webp',
      searches: '8K searches/month',
      badge: 'Best Compression'
    },
    {
      title: 'JPG to WEBP',
      description: 'Modern format for faster websites',
      href: '/convert/jpg-to-webp',
      searches: '6K searches/month',
      badge: 'Web Optimized'
    },
    {
      title: 'WEBP to JPG',
      description: 'Convert WEBP to JPG for universal compatibility',
      href: '/convert/webp-to-jpg',
      searches: '5K searches/month',
      badge: 'Universal'
    },
    {
      title: 'WEBP to PNG',
      description: 'Lossless quality from WEBP files',
      href: '/convert/webp-to-png',
      searches: '4K searches/month',
      badge: 'Lossless'
    },
    {
      title: 'SVG to PNG',
      description: 'Rasterize vector graphics to PNG',
      href: '/convert/svg-to-png',
      searches: '3K searches/month',
      badge: 'Vectors'
    },
    {
      title: 'JPG to AVIF',
      description: 'Next-gen format with 50% smaller file sizes',
      href: '/convert/jpg-to-avif',
      searches: '2K searches/month',
      badge: 'Future-Proof'
    },
  ];

  const allConversions = Object.values(conversions).filter(
    (c) => !popularConversions.some((p) => p.href === `/convert/${c.slug}`)
  );

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
            Free Online Image Converter
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Convert between JPG, PNG, WEBP, AVIF, BMP, TIFF, ICO, SVG formats with our privacy-respecting converter. No uploads, no registration, completely free.
          </p>
        </div>
        
        <ImageConverter />
        
        {/* Popular Conversions Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              Popular Conversions
            </h2>
            <p className="text-muted-foreground">
              Quick access to the most searched image conversions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularConversions.map((conversion, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow group">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {conversion.badge}
                    </Badge>
                    <Zap className="h-4 w-4 text-primary opacity-60" />
                  </div>
                  <CardTitle className="text-lg">{conversion.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    {conversion.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {conversion.searches}
                    </span>
                    <Link 
                      href={conversion.href}
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 group-hover:translate-x-1 transition-transform"
                    >
                      Convert
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            All conversions are processed locally in your browser for maximum privacy and security.
          </p>
        </div>

        {/* All Other Conversions (SEO internal links) */}
        {allConversions.length > 0 && (
          <div className="mt-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">All Image Conversions</h2>
              <p className="text-muted-foreground">
                Browse every supported format conversion
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {allConversions.map((c) => (
                <Link
                  key={c.slug}
                  href={`/convert/${c.slug}`}
                  className="flex items-center justify-between p-4 rounded-lg border hover:border-primary/50 hover:shadow-sm transition-all group"
                >
                  <span className="text-sm font-medium group-hover:text-primary transition-colors">
                    {c.sourceLabel} to {c.targetLabel}
                  </span>
                  <ArrowRight className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}