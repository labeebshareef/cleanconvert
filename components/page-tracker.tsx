'use client';

import { usePageTracking } from '@/hooks/use-analytics';

/**
 * Client component to handle page tracking
 */
export function PageTracker() {
  usePageTracking();
  return null;
}
