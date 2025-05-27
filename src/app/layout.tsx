import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/Providers';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Jick Lampago',
  description: 'A Progressive Web App example with Next.js',
  manifest: '/icons/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black',
    title: 'Jick Lampago',
  },
  applicationName: 'Jick Lampago',
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#ffffff' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" sizes="180x180" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="google-site-verification" content="QmuIeSpIBrVp8T4unbJuDhxL1d-x0FPlR1ewVIN_Bz0" />
        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:title" content="Jick Lampago - Premier Web and Mobile Design Services" />
        <meta
          property="og:description"
          content="Transform your online presence with stunning, high-performance websites and mobile apps. Professional web design, development, and digital solutions for businesses of all sizes."
        />
        <meta property="og:image" content="https://www.jicklampago.xyz/preview/preview.png" />
        <meta property="og:url" content="https://www.jicklampago.xyz/" />
        <meta property="og:type" content="website" />
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.jicklampago.xyz/" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.jicklampago.xyz/preview/preview.png" />
        <meta name="twitter:url" content="https://www.jicklampago.xyz/" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
