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

  // Prevent tracking in development and localhost
  if (process.env.NODE_ENV === 'development' || 
      (typeof window !== 'undefined' && (
        window.location.hostname === 'localhost' ||
        window.location.hostname === '127.0.0.1' ||
        window.location.hostname.includes('localhost')
      ))) {
    return null;
  }

  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-58VTTL0ZPX"
        strategy="afterInteractive"
        onLoad={() => {
          // Initialize dataLayer and gtag after script loads
          window.dataLayer = window.dataLayer || [];
          function gtag(...args: any[]) {
            window.dataLayer.push(args);
          }
          window.gtag = gtag;
          
          // Configure GA4 with enhanced settings
          gtag('js', new Date());
          gtag('config', 'G-58VTTL0ZPX', {
            // Privacy settings
            anonymize_ip: true,
            allow_google_signals: false,
            allow_ad_personalization_signals: false,
            
            // Cookie settings
            cookie_expires: 63072000, // 2 years
            cookie_update: true,
            cookie_flags: 'SameSite=Strict;Secure',
            
            // Enhanced measurement
            enhanced_conversions: true,
            
            // Custom parameters for better tracking
            custom_map: {
              'custom_conversion_type': 'conversion_type',
              'custom_file_format': 'file_format',
              'custom_file_size': 'file_size',
              'custom_processing_time': 'processing_time',
              'custom_batch_size': 'batch_size',
              'custom_quality_setting': 'quality_setting',
              'custom_feature_category': 'feature_category',
              'custom_error_type': 'error_type',
              'custom_engagement_time': 'engagement_time',
              'custom_scroll_depth': 'scroll_depth',
              'custom_user_flow': 'user_flow',
            },
            
            // Debug mode (only in development)
            debug_mode: process.env.NODE_ENV === 'development',
          });

          // Set up enhanced ecommerce tracking for conversion events
          gtag('config', 'G-58VTTL0ZPX', {
            conversion_linker: true,
            send_page_view: true,
          });

          // Track initial app load
          gtag('event', 'app_load', {
            app_name: 'CleanConvert',
            app_version: '1.0.0',
            screen_resolution: `${screen.width}x${screen.height}`,
            language: navigator.language,
            platform: navigator.platform,
          });
        }}
        onError={(error) => {
          console.warn('Google Analytics failed to load:', error);
        }}
      />

      {/* Google AdSense */}
      <Script
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3066812168811933"
        strategy="afterInteractive"
        crossOrigin="anonymous"
        onError={(error) => {
          console.warn('Google AdSense failed to load:', error);
        }}
      />
    </>
  );
}