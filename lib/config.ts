export const APP_CONFIG = {
  // App Info
  name: 'CleanConvert',
  version: '1.0.0',
  description: 'Free online image converter and optimizer',
  
  // Processing Limits
  maxFileSize: 50 * 1024 * 1024, // 50MB
  maxBatchSize: 50,
  maxConcurrentJobs: 3,
  processingTimeout: 30000, // 30 seconds
  
  // Supported Formats
  supportedInputFormats: [
    'image/jpeg',
    'image/png',
    'image/webp',
    'image/avif',
    'image/bmp',
    'image/tiff',
    'image/svg+xml',
    'image/gif',
    'image/x-icon',
    'image/vnd.microsoft.icon',
  ],
  
  supportedOutputFormats: [
    'jpeg',
    'png',
    'webp',
    'avif',
    'bmp',
    'tiff',
  ],
  
  // Quality Settings
  defaultQuality: 0.8,
  qualityRange: { min: 0.1, max: 1.0 },
  
  // Performance
  enableWorkers: true,
  enableWebAssembly: true,
  memoryLimit: 500 * 1024 * 1024, // 500MB
  
  // Privacy & Security
  enableAnalytics: true,
  enableErrorReporting: true,
  dataRetentionHours: 0, // No data retention
  
  // Features
  features: {
    batchProcessing: true,
    zipSupport: true,
    previewGeneration: true,
    metadataExtraction: true,
    qualityPresets: true,
    dragAndDrop: true,
    clipboardPaste: true,
    progressIndicators: true,
    errorRecovery: true,
  },
  
  // URLs
  urls: {
    homepage: 'https://www.cleanconvert.online',
    github: 'https://github.com/labeebshareef/cleanconvert',
    issues: 'https://github.com/labeebshareef/cleanconvert/issues',
    docs: 'https://www.cleanconvert.online/help',
  },
  
  // Social
  social: {
    twitter: '@cleanconvert',
    github: 'labeebshareef',
  },
  
  // Analytics
  analytics: {
    googleAnalytics: 'G-58VTTL0ZPX',
    googleAdsense: 'ca-pub-3066812168811933',
  },
  
  // Environment
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  
  // API Endpoints (if needed in future)
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || '',
    version: 'v1',
  },
} as const;

// Type-safe configuration access
export type AppConfig = typeof APP_CONFIG;

// Helper functions
export const getMaxFileSize = () => APP_CONFIG.maxFileSize;
export const getSupportedFormats = () => APP_CONFIG.supportedInputFormats;
export const isFormatSupported = (mimeType: string) => 
  APP_CONFIG.supportedInputFormats.includes(mimeType as any);
export const getQualityRange = () => APP_CONFIG.qualityRange;
export const isFeatureEnabled = (feature: keyof typeof APP_CONFIG.features) => 
  APP_CONFIG.features[feature];
export const getAnalyticsId = () => APP_CONFIG.analytics.googleAnalytics;
export const getAdsenseId = () => APP_CONFIG.analytics.googleAdsense;
