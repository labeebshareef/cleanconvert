'use client';

import { useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export function Analytics() {
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
    gtag('config', 'GA_MEASUREMENT_ID', {
      anonymize_ip: true,
      send_page_view: false // We'll send page views manually
    });
  }, []);

  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
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