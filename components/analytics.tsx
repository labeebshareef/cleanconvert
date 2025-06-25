'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track page views when pathname changes
  useEffect(() => {
    const trackPageView = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
        
        window.gtag('event', 'page_view', {
          page_path: url,
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    };

    // Track page view with a small delay to ensure gtag is ready
    const timer = setTimeout(trackPageView, 100);
    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-2FXHBJYWS0"
        strategy="afterInteractive"
        onLoad={() => {
          // Initialize dataLayer and gtag after script loads
          window.dataLayer = window.dataLayer || [];
          function gtag(...args: any[]) {
            window.dataLayer.push(arguments);
          }
          window.gtag = gtag;
          
          // Configure GA4
          gtag('js', new Date());
          gtag('config', 'G-2FXHBJYWS0', {
            anonymize_ip: true,
          });
        }}
      />

      {/* Google AdSense */}
      <Script
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXX"
        strategy="afterInteractive"
        crossOrigin="anonymous"
      />
    </>
  );
}