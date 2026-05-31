import type { Metadata } from 'next';
import './globals.css';
import '@/styles/fontStyles.css';
import { AboutDetailProvider } from '@/context/AboutDetailContext';
import { BookingModalProvider } from '@/context/BookingModalContext';
import Header from '@/components/Header';

export const metadata: Metadata = {
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
        {/* Meta Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1558481559035983');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1558481559035983&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {children}
        </AboutDetailProvider>
        </BookingModalProvider>
      </body>
    </html>
  );
}
