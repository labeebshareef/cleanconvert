'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Upload, Shield, Zap } from 'lucide-react';

export function Hero() {
  const scrollToConverter = () => {
    const converterSection = document.getElementById('image-converter');
    if (converterSection) {
      converterSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <Badge variant="secondary" className="mb-4">
          Created by Bolt.new
        </Badge>
        
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
          <span className="text-primary">No BS.</span>
          <br />
          Just Image Tools.
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Fast, privacy-respecting image converter. Zero uploads, zero storage, zero clutter. 
          Convert JPG, PNG, WEBP, AVIF and more—all in your browser.
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

        <Button size="lg" className="text-lg px-8 py-6" onClick={scrollToConverter}>
          Start Converting Now
        </Button>
      </div>
    </section>
  );
}