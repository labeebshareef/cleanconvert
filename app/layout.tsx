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
  description: 'Fast, privacy-respecting image converter. Convert JPG, PNG, WEBP, AVIF and more. Zero uploads, zero storage, zero clutter. Created by Bolt.new.',
  keywords: 'image converter, format conversion, JPG, PNG, WEBP, AVIF, privacy, no upload, browser-based',
  authors: [{ name: 'Bolt.new', url: 'https://bolt.new' }],
  creator: 'Bolt.new',
  publisher: 'Bolt.new',
  robots: 'index, follow',
  metadataBase: new URL('https://cleanconvert.vercel.app'),
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
    creator: '@bolt_new',
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