import { Zap, Shield, Upload, Layers, Scissors, Gauge, FileImage, Watch as Batch } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: FileImage,
    title: 'Multi-Format Support',
    description: 'Convert between JPG, PNG, WEBP, AVIF, BMP, TIFF, ICO, SVG and more formats instantly.',
  },
  {
    icon: Batch,
    title: 'Batch Processing',
    description: 'Process multiple images at once. Drag & drop ZIP files for bulk operations.',
  },
  {
    icon: Scissors,
    title: 'Edit & Optimize',
    description: 'Resize, crop, compress, and strip EXIF data with live preview.',
  },
  {
    icon: Shield,
    title: '100% Private',
    description: 'Your images never leave your device. No uploads, no servers, no tracking.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Browser-based processing means instant results without waiting for uploads.',
  },
  {
    icon: Upload,
    title: 'Multiple Input Methods',
    description: 'Drag & drop files, paste from clipboard, or use the file picker.',
  },
  {
    icon: Layers,
    title: 'Live Preview',
    description: 'See your changes in real-time before downloading the final result.',
  },
  {
    icon: Gauge,
    title: 'No Limits',
    description: 'Process as many images as you want. No file size limits or usage quotas.',
  },
];

export function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional image tools designed for developers, designers, and power users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-none hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}