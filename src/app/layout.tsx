import type { Metadata } from 'next';
import { Manrope, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SuperHeader } from '@/components/SuperHeader';
import { SeasonalBanner } from '@/components/SeasonalBanner';
import { ChristmasLightbox } from '@/components/ChristmasLightbox';
import { SeasonProvider } from '@/context/SeasonContext';
import { StyleProvider } from '@/context/StyleContext';

const manrope = Manrope({
  variable: '--font-sans',
  subsets: ['latin'],
});

const playfair = Playfair_Display({
  variable: '--font-display',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Barons Family · The Cricketers',
  description:
    'Modern experience for The Cricketers at Horsell – showcasing the Barons Family brand, menus, events and private hire.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${playfair.variable} font-sans`} data-style="heritage">
        <StyleProvider>
          <SeasonProvider>
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-4 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-slate-900"
            >
              Skip to content
            </a>
            <SuperHeader />
            <Header />
            <SeasonalBanner />
            <main id="main" className="min-h-[60vh]">
              {children}
            </main>
            <Footer />
            <ChristmasLightbox />
          </SeasonProvider>
        </StyleProvider>
      </body>
    </html>
  );
}
