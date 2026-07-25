import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';

export const metadata: Metadata = {
  title: "VASTRAM | Luxury Women's Fashion Boutique | Mangaluru",
  description: "Exquisite bridal lehengas, handwoven Kanjeevaram sarees, designer gowns & luxury ethnic wear. Reserve online for Click & Collect store pickup at Hampankatta, Mangaluru.",
  keywords: [
    "Vastram Mangaluru",
    "Luxury Women Fashion Mangaluru",
    "Bridal Lehenga Mangaluru",
    "Kanjeevaram Saree Hampankatta",
    "Designer Gowns Mangaluru",
    "Click and Collect Boutique",
    "Pailands Building Hampankatta"
  ],
  authors: [{ name: "VASTRAM Boutique" }],
  openGraph: {
    title: "VASTRAM | Luxury Women's Fashion Boutique | Mangaluru",
    description: "Reserve luxury bridal wear, sarees, and designer gowns online for Click & Collect showroom pickup in Mangaluru.",
    url: "https://vastram.fashion",
    siteName: "VASTRAM Boutique",
    images: [
      {
        url: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "VASTRAM Luxury Boutique Mangaluru",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VASTRAM | Luxury Women's Fashion Boutique",
    description: "Click & Collect store pickup for bridal lehengas and pure silk sarees in Mangaluru.",
    images: ["https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=1200"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    "name": "VASTRAM Luxury Women's Fashion Boutique",
    "image": "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=1200",
    "telephone": "+91 824 244 8990",
    "email": "concierge@vastram.fashion",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Pailands Building, 2nd Floor, P.M. Rao Road, KSR Road, Hampankatta",
      "addressLocality": "Mangaluru",
      "addressRegion": "Karnataka",
      "postalCode": "575001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "12.8712",
      "longitude": "74.8415"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "10:00",
      "closes": "20:30"
    },
    "priceRange": "₹₹₹₹"
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col justify-between bg-white text-gray-900 selection:bg-[#C8A45D] selection:text-black" suppressHydrationWarning>
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <FloatingWhatsApp />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
