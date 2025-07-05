'use client';

import { useEffect } from 'react';

export function PerformanceMonitor() {
  useEffect(() => {
    // Track Core Web Vitals
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      try {
        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (window.gtag) {
              window.gtag('event', 'LCP', {
                custom_parameter_lcp: entry.startTime,
              });
            }
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (window.gtag) {
              const fidEntry = entry as any;
              window.gtag('event', 'FID', {
                custom_parameter_fid: fidEntry.processingStart - fidEntry.startTime,
              });
            }
          }
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const clsEntry = entry as any;
            if (!clsEntry.hadRecentInput) {
              clsValue += clsEntry.value;
            }
          }
          if (window.gtag) {
            window.gtag('event', 'CLS', {
              custom_parameter_cls: clsValue,
            });
          }
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        return () => {
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
        };
      } catch (error) {
        console.warn('Performance monitoring not supported:', error);
        return undefined;
      }
    }
    return undefined;
  }, []);

  return null;
}

// Hook to track custom performance metrics
export function usePerformanceTracking() {
  const trackTiming = (label: string, startTime: number) => {
    const duration = performance.now() - startTime;
    
    if (window.gtag) {
      window.gtag('event', 'timing_complete', {
        name: label,
        value: Math.round(duration),
      });
    }
  };

  const trackConversion = (type: string, format: string) => {
    if (window.gtag) {
      window.gtag('event', 'image_conversion', {
        conversion_type: type,
        output_format: format,
      });
    }
  };

  return { trackTiming, trackConversion };
}
