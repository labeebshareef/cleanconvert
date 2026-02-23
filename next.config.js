/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: { 
    formats: ['image/webp', 'image/avif'],
  },
  // Enable React strict mode
  reactStrictMode: true,
  // Optimize for production
  swcMinify: true,
  // Experimental features
  experimental: {
    webVitalsAttribution: ['CLS', 'LCP'],
  },
  // Security headers
  poweredByHeader: false,
  // Compression
  compress: true,
  // Security & caching headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },
  // Environment variables
  env: {
    NEXT_PUBLIC_APP_VERSION: process.env.npm_package_version,
  },
  // Webpack configuration - simplified to avoid conflicts
  webpack: (config, { isServer, dev }) => {
    // Only add source maps in development, but don't override Next.js devtool
    if (dev && !config.devtool) {
      config.devtool = 'eval-source-map';
    }
    
    return config;
  },
  // Performance optimizations
  onDemandEntries: {
    // Period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // Number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
};

module.exports = nextConfig;