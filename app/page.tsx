import { Metadata } from 'next';
import Link from 'next/link';
import { ImageConverter } from '@/components/image-converter';
import { Hero } from '@/components/hero';
import { Features } from '@/components/features';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CleanConvert - Free Online Image Converter | JPG, PNG, WEBP, AVIF',
  description: 'Free online image converter and optimizer. Convert JPG to PNG, PNG to WEBP, WEBP to AVIF instantly. No uploads, 100% privacy-focused, browser-based image tools. Resize, compress, and optimize images for web.',
  keywords: 'free image converter, online image converter, convert JPG to PNG, PNG to WEBP, WEBP to AVIF, image optimizer, resize images, compress images, batch image converter, browser image tools, privacy image converter, no upload converter',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'CleanConvert - Free Online Image Converter | No Uploads Required',
    description: 'Convert images between JPG, PNG, WEBP, AVIF formats instantly. 100% privacy-focused, browser-based processing.',
    url: '/',
    images: ['/og-image.png'],
    type: 'website',
  },
};

export default function Home() {
  const quickConversions = [
    { name: 'JPG to PNG', href: '/convert/jpg-to-png', popular: true },
    { name: 'PNG to JPG', href: '/convert/png-to-jpg', popular: true },
    { name: 'PNG to WEBP', href: '/convert/png-to-webp', popular: true },
    { name: 'JPG to WEBP', href: '/convert/jpg-to-webp', popular: true },
    { name: 'WEBP to JPG', href: '/convert/webp-to-jpg', popular: false },
    { name: 'SVG to PNG', href: '/convert/svg-to-png', popular: false },
    { name: 'JPG to AVIF', href: '/convert/jpg-to-avif', popular: false },
    { name: 'WEBP to PNG', href: '/convert/webp-to-png', popular: false },
  ];

  return (
    <div className="space-y-12">
      <Hero />
      <ImageConverter />
      
      {/* Quick Conversions Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">
              Quick Conversions
            </h2>
            <p className="text-muted-foreground">
              Popular image conversion tools used by thousands daily
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickConversions.map((conversion, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">{conversion.name}</span>
                    {conversion.popular && (
                      <Badge variant="secondary" className="text-xs">
                        <Star className="h-3 w-3 mr-1" />
                        Popular
                      </Badge>
                    )}
                  </div>
                  <Link 
                    href={conversion.href}
                    className="inline-flex items-center text-sm text-primary hover:text-primary/80"
                  >
                    Convert Now
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <Features />
    </div>
  );
}