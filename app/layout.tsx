import type { Metadata } from 'next';
import './globals.css';
import '@/styles/fontStyles.css';
import { AboutDetailProvider } from '@/context/AboutDetailContext';
import { BookingModalProvider } from '@/context/BookingModalContext';
import Header from '@/components/Header';
import MetaPixel from '@/components/MetaPixel';

export const metadata: Metadata = {
  metadataBase: new URL('https://trueme.vercel.app'),
  title: 'TRUE ME Camp | A Week That Can Change How a Teenager Feels About Themselves',
  description: 'A one-week transformative experience for teenagers aged 14-18. Discover friendship, confidence, joy, and belonging at TRUE ME Camp in Mafra, Portugal.',
  openGraph: {
    title: 'TRUE ME Camp',
    description: 'A week that can change how a teenager feels about themselves.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TRUE ME Camp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TRUE ME Camp',
    description: 'A week that can change how a teenager feels about themselves.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ECE9E2" />
      </head>
      <body className="bg-trueme-bg text-trueme-dark">
        <BookingModalProvider>
          <AboutDetailProvider>
            <Header />
            <MetaPixel />
            {children}
          </AboutDetailProvider>
        </BookingModalProvider>
      </body>
    </html>
  );
}
