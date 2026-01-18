import type { Metadata } from 'next';
import { Fraunces, Sora } from 'next/font/google';

import '@/styles/globals.css';
import { BackgroundEffect } from '@/components/BackgroundEffect';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { ThemeProvider } from '@/components/ThemeProvider';
import { profile } from '@/data/profile';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: profile.site.title,
  description: profile.site.description,
  metadataBase: new URL(profile.site.url),
  openGraph: {
    title: profile.site.title,
    description: profile.site.description,
    url: profile.site.url,
    images: [
      {
        url: profile.site.ogImage,
        width: 1200,
        height: 630,
        alt: profile.name,
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-base text-ink antialiased">
        <ThemeProvider>
          <BackgroundEffect />
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
