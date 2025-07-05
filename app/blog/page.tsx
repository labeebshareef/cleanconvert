import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileImage, Zap, Shield, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CleanConvert Blog - Image Optimization Tips & Tutorials',
  description: 'Learn image optimization techniques, format comparison guides, and web performance tips. Expert tutorials on JPG, PNG, WEBP, and AVIF formats.',
  keywords: 'image optimization, web performance, image formats, WEBP vs JPG, PNG vs AVIF, image compression, website speed',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'CleanConvert Blog - Image Optimization & Web Performance',
    description: 'Expert guides on image optimization, format selection, and web performance improvements.',
    url: '/blog',
    images: ['/og-image.png'],
    type: 'website',
  },
};

const blogPosts = [
  {
    title: 'Ultimate Guide to Image Formats: JPG vs PNG vs WEBP vs AVIF',
    excerpt: 'Complete comparison of modern image formats with performance benchmarks, use cases, and recommendations for web developers.',
    date: '2025-01-04',
    category: 'Guide',
    slug: 'image-formats-comparison-guide',
    readTime: '8 min read',
    featured: true,
  },
  {
    title: 'How to Optimize Images for Web Performance in 2025',
    excerpt: 'Step-by-step guide to optimizing images for faster loading times, better SEO, and improved user experience.',
    date: '2025-01-03',
    category: 'Performance',
    slug: 'optimize-images-web-performance-2025',
    readTime: '6 min read',
  },
  {
    title: 'WEBP vs JPG: Which Format Should You Use?',
    excerpt: 'Detailed comparison of WEBP and JPG formats including file size differences, browser support, and best practices.',
    date: '2025-01-02',
    category: 'Comparison',
    slug: 'webp-vs-jpg-format-comparison',
    readTime: '5 min read',
  },
  {
    title: 'Batch Image Processing: Save Time with Bulk Operations',
    excerpt: 'Learn how to efficiently process multiple images at once using batch conversion, resizing, and optimization techniques.',
    date: '2025-01-01',
    category: 'Tutorial',
    slug: 'batch-image-processing-tutorial',
    readTime: '4 min read',
  },
];

export default function BlogPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "CleanConvert Blog",
    "description": "Expert guides on image optimization, format selection, and web performance improvements.",
    "url": "https://www.cleanconvert.online/blog",
    "author": {
      "@type": "Person",
      "name": "Labeeb Shareef",
      "url": "https://github.com/labeebshareef"
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "url": `https://www.cleanconvert.online/blog/${post.slug}`,
      "author": {
        "@type": "Person",
        "name": "Labeeb Shareef"
      }
    }))
  };

  return (
    <div className="py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema)
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            CleanConvert Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert guides on image optimization, format selection, and web performance improvements.
          </p>
        </div>

        {/* Featured Post */}
        {blogPosts.find(post => post.featured) && (
          <div className="mb-12">
            <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">Featured</Badge>
                  <Badge variant="outline">{blogPosts[0].category}</Badge>
                </div>
                <CardTitle className="text-2xl mb-2">{blogPosts[0].title}</CardTitle>
                <p className="text-muted-foreground">{blogPosts[0].excerpt}</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{blogPosts[0].date}</span>
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <Button asChild>
                    <Link href={`/blog/${blogPosts[0].slug}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {blogPosts.slice(1).map((post, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">{post.category}</Badge>
                </div>
                <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    <div>{post.date}</div>
                    <div>{post.readTime}</div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/blog/${post.slug}`}>
                      Read More
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Guides', count: 3, icon: FileImage },
              { name: 'Performance', count: 2, icon: Zap },
              { name: 'Tutorials', count: 4, icon: Users },
              { name: 'Comparisons', count: 3, icon: Shield },
            ].map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <category.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-1">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} articles</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <Card>
          <CardHeader className="text-center">
            <CardTitle>Stay Updated</CardTitle>
            <p className="text-muted-foreground">
              Get the latest image optimization tips and tutorials delivered to your inbox.
            </p>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-muted-foreground">
              Follow us for updates on new features and optimization techniques.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
