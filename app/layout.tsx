import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Analytics } from '@/components/analytics';
import { ErrorBoundary } from '@/components/error-boundary';
import { PageTracker } from '@/components/page-tracker';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CleanConvert - Free Online Image Converter | JPG, PNG, WEBP, AVIF',
  description: 'Free online image converter and optimizer. Convert JPG to PNG, PNG to WEBP, WEBP to AVIF instantly. No uploads, 100% privacy-focused, browser-based image tools. Resize, compress, and optimize images for web.',
  keywords: 'free image converter, online image converter, convert JPG to PNG, PNG to WEBP, WEBP to AVIF, image optimizer, resize images, compress images, batch image converter, browser image tools, privacy image converter, no upload converter',
  authors: [{ name: 'Labeeb Shareef', url: 'https://github.com/labeebshareef' }],
  creator: 'Labeeb Shareef',
  publisher: 'CleanConvert',
  robots: 'index, follow',
  metadataBase: new URL('https://www.cleanconvert.online'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'CleanConvert - Free Online Image Converter | No Uploads Required',
    description: 'Convert images between JPG, PNG, WEBP, AVIF formats instantly. 100% privacy-focused, browser-based processing. No uploads, no registration, completely free.',
    url: '/',
    siteName: 'CleanConvert', 
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CleanConvert - Free Online Image Converter',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CleanConvert - Free Online Image Converter',
    description: 'Convert images instantly with zero uploads. Privacy-focused, browser-based image tools.',
    images: ['/og-image.png'],
    creator: '@labeebshareef',
    site: '@cleanconvert',
  },
  category: 'technology',
  classification: 'Image Conversion Tools',
  other: {
    'google-adsense-account': 'ca-pub-3066812168811933',
    'google-site-verification': 'your-google-site-verification-code',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-adsense-account" content="ca-pub-3066812168811933" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "CleanConvert",
              "description": "Fast, privacy-respecting image converter. Convert JPG, PNG, WEBP, AVIF and more. Zero uploads, zero storage, zero clutter.",
              "url": "https://www.cleanconvert.online",
              "applicationCategory": "UtilitiesApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "author": {
                "@type": "Person",
                "name": "Labeeb Shareef",
                "url": "https://github.com/labeebshareef"
              },
              "creator": {
                "@type": "Person",
                "name": "Labeeb Shareef",
                "url": "https://github.com/labeebshareef"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ErrorBoundary>
          <div className="min-h-screen flex flex-col bg-background">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
          <Analytics />
          <PageTracker />
        </ErrorBoundary>
      </body>
    </html>
  );
}