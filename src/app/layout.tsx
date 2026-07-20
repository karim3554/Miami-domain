import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'miamipropertydeals.com | Premium Miami Real Estate Domain For Sale (GoDaddy Escrow)',
  description:
    'Acquire miamipropertydeals.com — an elite category-defining domain for Miami real estate agencies, property investors, and luxury brokerages. Direct sale and transfer via GoDaddy Escrow.',
  keywords: [
    'buy miami real estate domain',
    'premium real estate domain for sale',
    'miamipropertydeals.com',
    'miami property domain',
    'miami real estate branding',
    'godaddy miami domain',
    'godaddy domain sale',
    'real estate domain investment',
  ],
  authors: [{ name: 'Domain Owner' }],
  openGraph: {
    title: 'miamipropertydeals.com | Tier-1 Miami Real Estate Asset',
    description:
      'Own Miami\'s most authoritative real estate domain. Exact match keywords: Miami + Property + Deals. Safe transfer via GoDaddy Escrow.',
    url: 'https://miamipropertydeals.com',
    siteName: 'Miami Property Deals Domain Sale',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Miami Skyline Real Estate Luxury Domain',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'miamipropertydeals.com - Premium Real Estate Digital Asset',
    description: 'Secure Miami\'s premier real estate domain asset today via GoDaddy.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'miamipropertydeals.com Domain Name',
    image: 'https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?q=80&w=1200&auto=format&fit=crop',
    description:
      'Exclusive tier-1 domain asset for Miami real estate portals, luxury brokerages, and property investment firms.',
    brand: {
      '@type': 'Brand',
      name: 'Miami Property Deals',
    },
    offers: {
      '@type': 'Offer',
      url: 'https://www.godaddy.com',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'GoDaddy Verified Domain Seller',
      },
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-[#0A1124] text-slate-100 antialiased selection:bg-[#E5B842]/30 selection:text-[#FDF0CD]">
        {children}
      </body>
    </html>
  );
}
