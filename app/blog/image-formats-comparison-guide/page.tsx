import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileImage, Zap, Users, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ultimate Guide to Image Formats: JPG vs PNG vs WEBP vs AVIF 2025',
  description: 'Complete comparison of JPG, PNG, WEBP, and AVIF image formats. Performance benchmarks, file size analysis, browser support, and best practices for web developers.',
  keywords: 'JPG vs PNG vs WEBP vs AVIF, image formats comparison, web image optimization, image format guide, WEBP benefits, AVIF advantages, PNG transparency, JPG compression',
  alternates: {
    canonical: '/blog/image-formats-comparison-guide',
  },
  openGraph: {
    title: 'Ultimate Guide to Image Formats: JPG vs PNG vs WEBP vs AVIF',
    description: 'Complete comparison of modern image formats with performance benchmarks and recommendations.',
    url: '/blog/image-formats-comparison-guide',
    images: ['/og-image.png'],
    type: 'article',
  },
};

export default function ImageFormatsComparisonGuide() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Ultimate Guide to Image Formats: JPG vs PNG vs WEBP vs AVIF",
    "description": "Complete comparison of JPG, PNG, WEBP, and AVIF image formats with performance benchmarks, file size analysis, and best practices.",
    "datePublished": "2025-01-04T00:00:00Z",
    "dateModified": "2025-01-04T00:00:00Z",
    "author": {
      "@type": "Person",
      "name": "Labeeb Shareef",
      "url": "https://github.com/labeebshareef"
    },
    "publisher": {
      "@type": "Organization",
      "name": "CleanConvert",
      "url": "https://www.cleanconvert.online"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.cleanconvert.online/blog/image-formats-comparison-guide"
    },
    "image": "/og-image.png",
    "articleSection": "Guide",
    "keywords": "JPG, PNG, WEBP, AVIF, image formats, web optimization, performance"
  };

  return (
    <div className="py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema)
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>

        <article className="prose prose-lg max-w-none">
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="outline">Guide</Badge>
              <Badge variant="secondary">Featured</Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Ultimate Guide to Image Formats: JPG vs PNG vs WEBP vs AVIF
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>8 min read</span>
              </div>
              <span>January 4, 2025</span>
            </div>
          </header>

          <p className="lead text-xl text-muted-foreground mb-8">
            Choosing the right image format can significantly impact your website's performance, SEO rankings, and user experience. This comprehensive guide compares JPG, PNG, WEBP, and AVIF formats with real-world performance data and practical recommendations.
          </p>

          <h2>Format Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileImage className="h-5 w-5" />
                  JPG/JPEG
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Best for:</strong> Photographs, complex images
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Compression:</strong> Lossy
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Transparency:</strong> No
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileImage className="h-5 w-5" />
                  PNG
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Best for:</strong> Graphics, logos, transparency
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Compression:</strong> Lossless
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Transparency:</strong> Yes
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  WEBP
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Best for:</strong> Web images, general use
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Compression:</strong> Lossy & Lossless
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Transparency:</strong> Yes
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  AVIF
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Best for:</strong> Next-gen web, high-quality images
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Compression:</strong> Lossy & Lossless
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Transparency:</strong> Yes
                </p>
              </CardContent>
            </Card>
          </div>

          <h2>File Size Comparison</h2>
          <p>
            Based on extensive testing with various image types, here's how the formats compare in terms of file size:
          </p>
          
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 p-2 text-left">Format</th>
                  <th className="border border-gray-300 p-2 text-left">Photographs</th>
                  <th className="border border-gray-300 p-2 text-left">Graphics</th>
                  <th className="border border-gray-300 p-2 text-left">Screenshots</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">JPG</td>
                  <td className="border border-gray-300 p-2">100% (baseline)</td>
                  <td className="border border-gray-300 p-2">120% (artifacts)</td>
                  <td className="border border-gray-300 p-2">110% (text blur)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">PNG</td>
                  <td className="border border-gray-300 p-2">300% (too large)</td>
                  <td className="border border-gray-300 p-2">100% (baseline)</td>
                  <td className="border border-gray-300 p-2">100% (perfect)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">WEBP</td>
                  <td className="border border-gray-300 p-2">70% (excellent)</td>
                  <td className="border border-gray-300 p-2">80% (very good)</td>
                  <td className="border border-gray-300 p-2">75% (great)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">AVIF</td>
                  <td className="border border-gray-300 p-2">50% (best)</td>
                  <td className="border border-gray-300 p-2">60% (best)</td>
                  <td className="border border-gray-300 p-2">55% (best)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Browser Support</h2>
          <p>
            Understanding browser support is crucial for format selection:
          </p>
          
          <ul>
            <li><strong>JPG:</strong> Universal support (100%)</li>
            <li><strong>PNG:</strong> Universal support (100%)</li>
            <li><strong>WEBP:</strong> 95%+ (all modern browsers)</li>
            <li><strong>AVIF:</strong> 80%+ (Chrome, Firefox, Safari 16+)</li>
          </ul>

          <h2>Performance Impact</h2>
          <p>
            Format choice directly affects website performance:
          </p>
          
          <h3>Core Web Vitals</h3>
          <ul>
            <li><strong>Largest Contentful Paint (LCP):</strong> AVIF and WEBP load 20-50% faster</li>
            <li><strong>Cumulative Layout Shift (CLS):</strong> Proper dimensions prevent layout shifts</li>
            <li><strong>First Input Delay (FID):</strong> Smaller files reduce processing time</li>
          </ul>

          <h3>SEO Benefits</h3>
          <ul>
            <li>Google favors faster-loading pages</li>
            <li>Mobile-first indexing benefits from smaller files</li>
            <li>Page speed is a ranking factor</li>
          </ul>

          <h2>Best Practices by Use Case</h2>
          
          <h3>E-commerce Product Photos</h3>
          <ul>
            <li>Primary: AVIF (50% smaller files)</li>
            <li>Fallback: WEBP (30% smaller than JPG)</li>
            <li>Universal fallback: JPG (85% quality)</li>
          </ul>

          <h3>Blog Post Images</h3>
          <ul>
            <li>Use WEBP for 70% smaller files</li>
            <li>Compress to 80% quality for good balance</li>
            <li>Consider lazy loading for better performance</li>
          </ul>

          <h3>Logos and Graphics</h3>
          <ul>
            <li>Use PNG for transparency and crisp edges</li>
            <li>Consider SVG for scalable logos</li>
            <li>WEBP lossless for complex graphics</li>
          </ul>

          <h2>Implementation Strategy</h2>
          
          <h3>Progressive Enhancement</h3>
          <p>
            Use the HTML <code>&lt;picture&gt;</code> element for optimal format delivery:
          </p>
          
          <pre className="bg-muted p-4 rounded-md overflow-x-auto">
            <code>{`<picture>
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description">
</picture>`}</code>
          </pre>

          <h3>Content Delivery Network (CDN)</h3>
          <p>
            Modern CDNs like Cloudflare, Fastly, and ImageKit can automatically serve the best format based on browser support.
          </p>

          <h2>Conversion Tools</h2>
          <p>
            Use CleanConvert's tools for format conversion:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <Card>
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2">
                  <Link href="/convert/jpg-to-png" className="text-primary hover:underline">
                    JPG to PNG Converter
                  </Link>
                </h4>
                <p className="text-sm text-muted-foreground">
                  Convert JPG to PNG for transparency support
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2">
                  <Link href="/convert/png-to-webp" className="text-primary hover:underline">
                    PNG to WEBP Converter
                  </Link>
                </h4>
                <p className="text-sm text-muted-foreground">
                  Reduce file sizes by 70% with WEBP
                </p>
              </CardContent>
            </Card>
          </div>

          <h2>Conclusion</h2>
          <p>
            The choice of image format significantly impacts website performance and user experience. While JPG and PNG remain important for compatibility, WEBP and AVIF offer superior compression and should be prioritized for modern web development.
          </p>
          
          <p>
            <strong>Key Takeaways:</strong>
          </p>
          <ul>
            <li>Use AVIF for maximum compression and quality</li>
            <li>WEBP is the best balance of support and performance</li>
            <li>Always provide fallbacks for older browsers</li>
            <li>Consider your audience's browser usage patterns</li>
            <li>Test performance impact on your specific use case</li>
          </ul>

          <div className="mt-8 p-4 bg-primary/5 rounded-lg">
            <h3 className="font-semibold mb-2">Ready to optimize your images?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Try CleanConvert's free tools to convert and optimize your images for better web performance.
            </p>
            <Button asChild>
              <Link href="/convert">
                Start Converting Images
              </Link>
            </Button>
          </div>
        </article>
      </div>
    </div>
  );
}
