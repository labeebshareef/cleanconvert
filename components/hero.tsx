import { Badge } from '@/components/ui/badge';
import { Shield, Zap, Upload } from 'lucide-react';
import { HeroButton } from '@/components/hero-button';

export function Hero() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <Badge variant="secondary" className="mb-4">
          Browser-Based Tool
        </Badge>
        
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
          Free Online Image Converter
          <br />
          <span className="text-primary">JPG, PNG, WEBP, AVIF</span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Convert, resize, and optimize images instantly in your browser. 
          No uploads to servers, no registration, 100% private and free.
          Supports JPG, PNG, WEBP, AVIF, BMP, TIFF and more.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center space-x-2 bg-muted/50 rounded-full px-4 py-2">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">100% Private</span>
          </div>
          <div className="flex items-center space-x-2 bg-muted/50 rounded-full px-4 py-2">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Lightning Fast</span>
          </div>
          <div className="flex items-center space-x-2 bg-muted/50 rounded-full px-4 py-2">
            <Upload className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">No Uploads</span>
          </div>
        </div>

        <HeroButton />
      </div>
    </section>
  );
}