'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { analytics } from '@/lib/analytics';

/**
 * Custom hook to track page engagement and navigation patterns
 */
export function usePageTracking() {
  const pathname = usePathname();

  useEffect(() => {
    // Track page view
    if (typeof window !== 'undefined') {
      // Add a small delay to ensure the page is fully loaded
      const timer = setTimeout(() => {
        analytics.track('page_engagement', {
          page_path: pathname,
          engagement_time_seconds: 0,
          scroll_depth_percent: 0,
          interactions_count: 0,
        });
      }, 100);

      return () => clearTimeout(timer);
    }
    return undefined;
  }, [pathname]);

  // Track tool/page switches
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && pathname) {
        // Track return to page as feature usage
        analytics.track('feature_usage', {
          feature_name: 'page_return',
          feature_category: 'help',
          usage_context: pathname,
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [pathname]);
}

/**
 * Custom hook to track feature usage patterns
 */
export function useFeatureTracking() {
  const trackFeatureClick = (featureName: string, category: string, context?: string) => {
    analytics.track('feature_usage', {
      feature_name: featureName,
      feature_category: category as any,
      usage_context: context || 'click',
    });
  };

  const trackToolSwitch = (fromTool: string, toTool: string, method: string = 'navigation') => {
    analytics.track('tool_switch', {
      from_tool: fromTool,
      to_tool: toTool,
      switch_method: method as any,
    });
  };

  const trackHelpInteraction = (helpType: string, topic: string, interactionType: string = 'view') => {
    analytics.track('help_interaction', {
      help_type: helpType as any,
      help_topic: topic,
      interaction_type: interactionType as any,
    });
  };

  return {
    trackFeatureClick,
    trackToolSwitch,
    trackHelpInteraction,
  };
}

/**
 * Custom hook to track errors and performance
 */
export function useErrorTracking() {
  const trackError = (error: Error, context?: Record<string, any>) => {
    analytics.track('conversion_error', {
      error_type: error.name,
      error_message: error.message.substring(0, 500),
      file_format: context?.fileFormat || 'unknown',
      file_size_mb: context?.fileSize ? Number((context.fileSize / (1024 * 1024)).toFixed(2)) : 0,
      browser_info: navigator.userAgent.substring(0, 200),
    });
  };

  const trackPerformance = (metricName: string, value: number, unit: string, context?: string) => {
    analytics.track('performance_metric', {
      metric_name: metricName,
      metric_value: value,
      metric_unit: unit,
      context: context || 'general',
    });
  };

  return {
    trackError,
    trackPerformance,
  };
}

/**
 * Custom hook to track user interactions with forms and controls
 */
export function useInteractionTracking() {
  const trackFormatSelection = (fromFormat: string, toFormat: string, method: string = 'dropdown') => {
    analytics.track('format_selection', {
      from_format: fromFormat,
      to_format: toFormat,
      selection_method: method as any,
    });
  };

  const trackQualityAdjustment = (format: string, quality: number, method: string = 'slider') => {
    analytics.track('quality_adjustment', {
      format,
      quality_value: quality,
      adjustment_method: method as any,
    });
  };

  const trackImageResize = (
    originalDimensions: string,
    targetDimensions: string,
    resizeType: string,
    maintainAspectRatio: boolean = true
  ) => {
    analytics.track('image_resize', {
      original_dimensions: originalDimensions,
      target_dimensions: targetDimensions,
      resize_type: resizeType as any,
      maintain_aspect_ratio: maintainAspectRatio,
    });
  };

  const trackImageOptimize = (
    optimizationLevel: string,
    originalSize: number,
    optimizedSize: number,
    qualityReduction: number
  ) => {
    analytics.track('image_optimize', {
      optimization_level: optimizationLevel,
      original_size_mb: Number((originalSize / (1024 * 1024)).toFixed(2)),
      optimized_size_mb: Number((optimizedSize / (1024 * 1024)).toFixed(2)),
      quality_reduction: qualityReduction,
    });
  };

  return {
    trackFormatSelection,
    trackQualityAdjustment,
    trackImageResize,
    trackImageOptimize,
  };
}
