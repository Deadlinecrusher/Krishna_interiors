import type { Metadata, Viewport } from 'next';
import '../styles/globals.css';
import { ThemeProvider } from '../hooks/useTheme';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import IntroLoader from '../components/Intro';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#D4AF37',
};

export const metadata: Metadata = {
  title: {
    default: 'Krishna Interiors | Luxury Interior Design & Turnkey Solutions – Delhi NCR',
    template: '%s | Krishna Interiors',
  },
  description:
    'Krishna Construction Company offers premium interior design, renovation, modular kitchens, and turnkey solutions across Ghaziabad, Delhi, Noida & NCR. Free consultation available.',
  keywords: [
    'interior design Delhi NCR',
    'luxury interior design Ghaziabad',
    'modular kitchen Noida',
    'turnkey interior solutions Delhi',
    'home renovation NCR',
    'false ceiling design Ghaziabad',
    'Krishna Construction Company',
    'interior designer Indirapuram',
  ],
  metadataBase: new URL('https://krishnainteriors.in'),
  alternates: { canonical: 'https://krishnainteriors.in/' },
  manifest: '/manifest.json',

  openGraph: {
    title: 'Krishna Interiors | Luxury Interior Design',
    description: 'Designed for Comfort, Built for Life. Premium interiors across Delhi NCR.',
    url: 'https://krishnainteriors.in',
    siteName: 'Krishna Interiors',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Krishna Interiors – Luxury Interior Design Delhi NCR',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Krishna Interiors | Luxury Interior Design Delhi NCR',
    description: 'Premium interior design, modular kitchens & turnkey solutions across Delhi NCR.',
    images: ['/og-image.jpg'],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />

        {/* PWA + Meta */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'InteriorDesigner',
              name: 'Krishna Construction Company',
              alternateName: 'Krishna Interiors',
              url: 'https://krishnainteriors.in',
              telephone: '+918796956034',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Plot 836, Shalimar Garden Ext-1',
                addressLocality: 'Ghaziabad',
                addressRegion: 'UP',
                postalCode: '201005',
                addressCountry: 'IN',
              },
              areaServed: ['Ghaziabad', 'Delhi', 'Noida', 'Gurugram', 'NCR'],
              priceRange: '₹₹₹',
              sameAs: ['https://www.instagram.com/_krishna_interiors_'],
            }),
          }}
        />
      </head>

      <body>
        {/* 🔥 Intro Loader */}
        <IntroLoader />

        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}