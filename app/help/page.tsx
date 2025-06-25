import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { HelpCircle, FileImage, Upload, Download, Settings, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Help & FAQ - CleanConvert',
  description: 'Get help with CleanConvert image tools. Find answers to common questions about image conversion, resizing, optimization, and batch processing.',
  alternates: {
    canonical: '/help',
  },
};

const faqs = [
  {
    question: "What image formats are supported?",
    answer: "CleanConvert supports all major image formats including JPG, PNG, WebP, AVIF, BMP, TIFF, ICO, and SVG. You can convert between any of these formats with ease."
  },
  {
    question: "Are my images uploaded to a server?",
    answer: "No! CleanConvert processes all images directly in your browser. Your images never leave your device, ensuring complete privacy and security. No uploads, no storage, no tracking."
  },
  {
    question: "Is there a file size limit?",
    answer: "There are no artificial file size limits imposed by CleanConvert. The only limitation is your device's available memory. Most modern devices can handle images up to several hundred megabytes."
  },
  {
    question: "Can I process multiple images at once?",
    answer: "Yes! CleanConvert supports batch processing. You can upload multiple images at once or even drag and drop ZIP files containing images for bulk processing."
  },
  {
    question: "What quality settings should I use?",
    answer: "For photos: 85-95% for high quality, 70-85% for balanced size/quality, 50-70% for smaller files. For graphics with text: use PNG format or 90%+ quality to maintain sharpness."
  },
  {
    question: "Why should I strip EXIF data?",
    answer: "EXIF data contains metadata like GPS location, camera settings, and timestamps. Removing it reduces file size and protects your privacy by preventing accidental sharing of sensitive information."
  },
  {
    question: "Which format should I choose?",
    answer: "WebP and AVIF offer the best compression while maintaining quality. Use PNG for images requiring transparency, JPG for maximum compatibility, and AVIF for the smallest file sizes."
  },
  {
    question: "Can I use CleanConvert offline?",
    answer: "Once the page loads, CleanConvert works entirely in your browser and doesn't require an internet connection for processing images. However, you need internet to initially load the application."
  },
  {
    question: "Is CleanConvert free to use?",
    answer: "Yes, CleanConvert is completely free to use with no limitations on the number of images you can process or features you can access."
  },
  {
    question: "How do I resize images while maintaining aspect ratio?",
    answer: "In the resize tool, enable the 'Maintain aspect ratio' toggle. This ensures your images don't get distorted when resizing. You can also use our preset sizes for common dimensions."
  }
];

const features = [
  {
    icon: FileImage,
    title: "Format Conversion",
    description: "Convert between JPG, PNG, WebP, AVIF, BMP, TIFF, ICO, SVG formats"
  },
  {
    icon: Upload,
    title: "Multiple Input Methods",
    description: "Drag & drop, clipboard paste, file picker, or ZIP file upload"
  },
  {
    icon: Settings,
    title: "Advanced Options",
    description: "Quality control, EXIF stripping, resize, crop, and optimization"
  },
  {
    icon: Download,
    title: "Batch Processing",
    description: "Process multiple images simultaneously with bulk download"
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "100% browser-based processing, no uploads or data collection"
  }
];

export default function HelpPage() {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle className="h-8 w-8 text-primary" />
            <h1 className="text-3xl sm:text-4xl font-bold">
              Help & FAQ
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about using CleanConvert's image tools effectively.
          </p>
        </div>

        <div className="space-y-8">
          {/* Quick Start Guide */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Quick Start Guide
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex items-start gap-3 p-4 border rounded-lg">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Upload Images</h3>
                    <p className="text-sm text-muted-foreground">
                      Drag & drop files, paste from clipboard, or use the file picker
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 border rounded-lg">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Choose Settings</h3>
                    <p className="text-sm text-muted-foreground">
                      Select output format, quality, and other options
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 border rounded-lg">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Process & Download</h3>
                    <p className="text-sm text-muted-foreground">
                      Click process and download your converted images
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Features Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Features Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 border rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Supported Formats */}
          <Card>
            <CardHeader>
              <CardTitle>Supported Formats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Input Formats</h3>
                  <div className="flex flex-wrap gap-2">
                    {['JPG', 'JPEG', 'PNG', 'WebP', 'AVIF', 'BMP', 'TIFF', 'ICO', 'SVG'].map((format) => (
                      <Badge key={format} variant="outline">{format}</Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Output Formats</h3>
                  <div className="flex flex-wrap gap-2">
                    {['JPG', 'PNG', 'WebP', 'AVIF', 'BMP', 'TIFF'].map((format) => (
                      <Badge key={format} variant="outline">{format}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardHeader>
              <CardTitle>Need More Help?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                If you can't find the answer to your question here, feel free to reach out for support.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  CleanConvert is built with privacy and simplicity in mind. No accounts, no tracking, just powerful image tools.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}