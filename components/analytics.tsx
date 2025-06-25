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

  useEffect(() => {
    // Initialize dataLayer if not present
    window.dataLayer = window.dataLayer || [];

    // gtag function
    function gtag(...args: any[]) {
      window.dataLayer.push(arguments);
    }

    // Make gtag available globally
    window.gtag = gtag;

    // Configure GA4
    gtag('js', new Date());
    gtag('config', 'G-2FXHBJYWS0', {
      anonymize_ip: true,
      send_page_view: false // We'll send page views manually
    });
  }, []);

  // Track page views when pathname changes
  useEffect(() => {
    if (pathname && window.gtag) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      window.gtag('config', 'G-2FXHBJYWS0', {
        page_path: url,
        anonymize_ip: true,
      });
      
      // Also send a page_view event
      window.gtag('event', 'page_view', {
        page_path: url,
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, [pathname, searchParams]);

  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-2FXHBJYWS0"
        strategy="afterInteractive"
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