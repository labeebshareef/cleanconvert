import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Analytics } from '@/components/analytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CleanConvert - No BS. Just Image Tools.',
  description: 'Fast, privacy-respecting image converter. Convert JPG, PNG, WEBP, AVIF and more. Zero uploads, zero storage, zero clutter. Created by Labeeb Shareef.',
  keywords: 'image converter, format conversion, JPG, PNG, WEBP, AVIF, privacy, no upload, browser-based',
  authors: [{ name: 'Labeeb Shareef', url: 'https://github.com/labeebshareef' }],
  creator: 'Labeeb Shareef',
  publisher: 'Labeeb Shareef',
  robots: 'index, follow',
  metadataBase: new URL('https://www.cleanconvert.online'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'CleanConvert - No BS. Just Image Tools.',
    description: 'Fast, privacy-respecting image converter. Convert JPG, PNG, WEBP, AVIF and more. Zero uploads, zero storage, zero clutter.',
    url: '/',
    siteName: 'CleanConvert', 
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CleanConvert - No BS. Just Image Tools.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CleanConvert - No BS. Just Image Tools.',
    description: 'Fast, privacy-respecting image converter. Zero uploads, zero storage, zero clutter.',
    images: ['/og-image.png'],
    creator: '@labeebshareef',
  },
  viewport: 'width=device-width, initial-scale=1',
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
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
        <div className="min-h-screen flex flex-col bg-background">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}