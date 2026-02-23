'use client';

import Link from 'next/link';
import { Zap } from 'lucide-react';
import { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export function Footer() {
  useEffect(() => {
    // Initialize AdSense ads
    if (typeof window !== 'undefined' && window.adsbygoogle) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error) {
        console.warn('AdSense initialization failed:', error);
      }
    }
  }, []);

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-primary" />
              <span className="font-semibold">CleanConvert</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              No BS. Just Image Tools.
            </p>
            <p className="text-xs text-muted-foreground">
              Open source image processing tools
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Tools</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/convert" className="text-muted-foreground hover:text-primary transition-colors">
                  Convert Images
                </Link>
              </li>
              <li>
                <Link href="/resize" className="text-muted-foreground hover:text-primary transition-colors">
                  Resize Images
                </Link>
              </li>
              <li>
                <Link href="/optimize" className="text-muted-foreground hover:text-primary transition-colors">
                  Optimize Images
                </Link>
              </li>
              <li>
                <Link href="/batch" className="text-muted-foreground hover:text-primary transition-colors">
                  Batch Processing
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Popular Conversions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/convert/jpg-to-png" className="text-muted-foreground hover:text-primary transition-colors">
                  JPG to PNG
                </Link>
              </li>
              <li>
                <Link href="/convert/png-to-webp" className="text-muted-foreground hover:text-primary transition-colors">
                  PNG to WEBP
                </Link>
              </li>
              <li>
                <Link href="/convert/jpg-to-webp" className="text-muted-foreground hover:text-primary transition-colors">
                  JPG to WEBP
                </Link>
              </li>
              <li>
                <Link href="/convert/webp-to-jpg" className="text-muted-foreground hover:text-primary transition-colors">
                  WEBP to JPG
                </Link>
              </li>
              <li>
                <Link href="/convert/svg-to-png" className="text-muted-foreground hover:text-primary transition-colors">
                  SVG to PNG
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/help" className="text-muted-foreground hover:text-primary transition-colors">
                  Help & FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-xs text-muted-foreground">
              © 2025 CleanConvert. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              {/* Google AdSense - Small Banner */}
              <div className="h-8 flex items-center">
                <ins className="adsbygoogle"
                  style={{ display: 'inline-block', width: '320px', height: '50px' }}
                  data-ad-client="ca-pub-3066812168811933"
                  data-ad-slot="6214735116"
                  data-ad-format="auto"
                  data-full-width-responsive="true"></ins>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}