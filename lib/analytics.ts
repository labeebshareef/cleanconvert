'use client';

/**
 * Enhanced Analytics Utility for CleanConvert
 * Tracks comprehensive user interactions and application usage
 */

// Analytics event types for better type safety
export interface AnalyticsEvent {
  // Core conversion events
  image_upload: {
    file_count: number;
    file_types: string[];
    total_size_mb: number;
    source: 'drag_drop' | 'file_picker' | 'paste';
  };
  
  image_conversion_start: {
    source_format: string;
    target_format: string;
    quality: number;
    file_size_mb: number;
    batch_size: number;
    conversion_type: 'single' | 'batch';
  };
  
  image_conversion_complete: {
    source_format: string;
    target_format: string;
    quality: number;
    original_size_mb: number;
    converted_size_mb: number;
    compression_ratio: number;
    processing_time_ms: number;
    success: boolean;
    error_type?: string;
  };
  
  image_download: {
    format: string;
    file_size_mb: number;
    download_type: 'single' | 'batch_zip';
  };
  
  // Image optimization events
  image_resize: {
    original_dimensions: string;
    target_dimensions: string;
    resize_type: 'percentage' | 'dimensions' | 'preset';
    maintain_aspect_ratio: boolean;
  };
  
  image_optimize: {
    optimization_level: string;
    original_size_mb: number;
    optimized_size_mb: number;
    quality_reduction: number;
  };
  
  // User interaction events
  format_selection: {
    from_format: string;
    to_format: string;
    selection_method: 'dropdown' | 'suggestion' | 'preset';
  };
  
  quality_adjustment: {
    format: string;
    quality_value: number;
    adjustment_method: 'slider' | 'input' | 'preset';
  };
  
  feature_usage: {
    feature_name: string;
    feature_category: 'conversion' | 'optimization' | 'resize' | 'batch' | 'help';
    usage_context: string;
  };
  
  // Navigation and engagement
  page_engagement: {
    page_path: string;
    engagement_time_seconds: number;
    scroll_depth_percent: number;
    interactions_count: number;
  };
  
  tool_switch: {
    from_tool: string;
    to_tool: string;
    switch_method: 'navigation' | 'suggestion' | 'direct';
  };
  
  // Error and performance tracking
  conversion_error: {
    error_type: string;
    error_message: string;
    file_format: string;
    file_size_mb: number;
    browser_info: string;
  };
  
  performance_metric: {
    metric_name: string;
    metric_value: number;
    metric_unit: string;
    context: string;
  };
  
  // Help and support
  help_interaction: {
    help_type: 'faq' | 'guide' | 'contact' | 'documentation';
    help_topic: string;
    interaction_type: 'view' | 'click' | 'search';
  };
}

export type AnalyticsEventName = keyof AnalyticsEvent;

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

class AnalyticsManager {
  private isEnabled: boolean = false;
  private engagementStartTime: number = 0;
  private interactionCount: number = 0;
  private maxScrollDepth: number = 0;

  constructor() {
    this.init();
  }

  private init() {
    // Only enable in production and when gtag is available
    this.isEnabled = process.env.NODE_ENV === 'production' && 
                     typeof window !== 'undefined' && 
                     !this.isLocalhost();
    
    if (this.isEnabled) {
      this.setupPageEngagementTracking();
      this.setupScrollTracking();
    }
  }

  private isLocalhost(): boolean {
    if (typeof window === 'undefined') return false;
    
    return window.location.hostname === 'localhost' ||
           window.location.hostname === '127.0.0.1' ||
           window.location.hostname.includes('localhost') ||
           window.location.hostname.includes('192.168.') ||
           window.location.hostname.includes('10.0.') ||
           window.location.hostname.includes('172.');
  }

  private setupPageEngagementTracking() {
    this.engagementStartTime = Date.now();
    this.interactionCount = 0;

    // Track interactions
    ['click', 'keydown', 'scroll', 'touchstart'].forEach(event => {
      document.addEventListener(event, () => {
        this.interactionCount++;
      }, { passive: true });
    });

    // Track page engagement on visibility change
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        this.trackPageEngagement();
      } else {
        this.engagementStartTime = Date.now();
      }
    });

    // Track engagement on page unload
    window.addEventListener('beforeunload', () => {
      this.trackPageEngagement();
    });
  }

  private setupScrollTracking() {
    let ticking = false;
    
    const updateScrollDepth = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.min(100, Math.round((scrollTop / documentHeight) * 100));
      
      this.maxScrollDepth = Math.max(this.maxScrollDepth, scrollPercent);
      ticking = false;
    };

    document.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollDepth);
        ticking = true;
      }
    }, { passive: true });
  }

  private trackPageEngagement() {
    if (!this.isEnabled) return;

    const engagementTime = Math.round((Date.now() - this.engagementStartTime) / 1000);
    
    if (engagementTime > 5) { // Only track meaningful engagement (>5 seconds)
      this.track('page_engagement', {
        page_path: window.location.pathname,
        engagement_time_seconds: engagementTime,
        scroll_depth_percent: this.maxScrollDepth,
        interactions_count: this.interactionCount,
      });
    }
  }

  public track<T extends AnalyticsEventName>(
    eventName: T,
    eventData: AnalyticsEvent[T],
    customParameters?: Record<string, any>
  ) {
    if (!this.isEnabled || typeof window === 'undefined' || !window.gtag) {
      return;
    }

    try {
      // Combine event data with custom parameters
      const parameters = {
        ...eventData,
        ...customParameters,
        // Add standard parameters
        timestamp: new Date().toISOString(),
        user_agent: navigator.userAgent,
        page_path: window.location.pathname,
        page_url: window.location.href,
        referrer: document.referrer,
        screen_resolution: `${screen.width}x${screen.height}`,
        viewport_size: `${window.innerWidth}x${window.innerHeight}`,
        connection_type: (navigator as any).connection?.effectiveType || 'unknown',
      };

      // Send to Google Analytics
      window.gtag('event', eventName, parameters);

      // Log in development for debugging
      if (process.env.NODE_ENV === 'development') {
        console.log('Analytics Event:', eventName, parameters);
      }
    } catch (error) {
      console.warn('Analytics tracking failed:', error);
    }
  }

  // Utility methods for common tracking scenarios
  public trackConversion(
    sourceFormat: string,
    targetFormat: string,
    fileSize: number,
    quality: number,
    batchSize: number = 1
  ) {
    this.track('image_conversion_start', {
      source_format: sourceFormat,
      target_format: targetFormat,
      quality,
      file_size_mb: Number((fileSize / (1024 * 1024)).toFixed(2)),
      batch_size: batchSize,
      conversion_type: batchSize > 1 ? 'batch' : 'single',
    });
  }

  public trackConversionComplete(
    sourceFormat: string,
    targetFormat: string,
    originalSize: number,
    convertedSize: number,
    processingTime: number,
    quality: number,
    success: boolean,
    errorType?: string
  ) {
    const originalSizeMB = originalSize / (1024 * 1024);
    const convertedSizeMB = convertedSize / (1024 * 1024);
    
    const eventData: AnalyticsEvent['image_conversion_complete'] = {
      source_format: sourceFormat,
      target_format: targetFormat,
      quality,
      original_size_mb: Number(originalSizeMB.toFixed(2)),
      converted_size_mb: Number(convertedSizeMB.toFixed(2)),
      compression_ratio: Number((originalSizeMB / convertedSizeMB).toFixed(2)),
      processing_time_ms: processingTime,
      success,
    };

    if (errorType !== undefined) {
      eventData.error_type = errorType;
    }
    
    this.track('image_conversion_complete', eventData);
  }

  public trackFileUpload(
    files: File[],
    source: 'drag_drop' | 'file_picker' | 'paste'
  ) {
    const totalSize = files.reduce((sum, file) => sum + file.size, 0);
    const fileTypesSet = new Set(files.map(file => {
      const extension = file.name.split('.').pop()?.toLowerCase() || 'unknown';
      return extension;
    }));
    const fileTypes = Array.from(fileTypesSet);

    this.track('image_upload', {
      file_count: files.length,
      file_types: fileTypes,
      total_size_mb: Number((totalSize / (1024 * 1024)).toFixed(2)),
      source,
    });
  }

  public trackFeatureUsage(
    featureName: string,
    category: 'conversion' | 'optimization' | 'resize' | 'batch' | 'help',
    context: string
  ) {
    this.track('feature_usage', {
      feature_name: featureName,
      feature_category: category,
      usage_context: context,
    });
  }

  public trackError(
    errorType: string,
    errorMessage: string,
    context: {
      fileFormat?: string;
      fileSize?: number;
    } = {}
  ) {
    this.track('conversion_error', {
      error_type: errorType,
      error_message: errorMessage.substring(0, 500), // Limit message length
      file_format: context.fileFormat || 'unknown',
      file_size_mb: context.fileSize ? Number((context.fileSize / (1024 * 1024)).toFixed(2)) : 0,
      browser_info: navigator.userAgent.substring(0, 200),
    });
  }

  public trackPerformance(
    metricName: string,
    metricValue: number,
    unit: string,
    context: string
  ) {
    this.track('performance_metric', {
      metric_name: metricName,
      metric_value: metricValue,
      metric_unit: unit,
      context,
    });
  }
}

// Create a singleton instance
export const analytics = new AnalyticsManager();

// Export convenience functions
export const trackConversion = analytics.trackConversion.bind(analytics);
export const trackConversionComplete = analytics.trackConversionComplete.bind(analytics);
export const trackFileUpload = analytics.trackFileUpload.bind(analytics);
export const trackFeatureUsage = analytics.trackFeatureUsage.bind(analytics);
export const trackError = analytics.trackError.bind(analytics);
export const trackPerformance = analytics.trackPerformance.bind(analytics);
