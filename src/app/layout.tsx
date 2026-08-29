import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgress from "@/components/ScrollProgress";

const fraunces = localFont({
  src: [
    { path: "./fonts/Fraunces-Variable.ttf", style: "normal" },
    { path: "./fonts/Fraunces-Italic-Variable.ttf", style: "italic" },
  ],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = localFont({
  src: [{ path: "./fonts/Manrope-Variable.ttf", style: "normal" }],
  variable: "--font-manrope",
  display: "swap",
});

// Domain URL Configuration
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://kmdsweethouse.com";

// Official Relevant Sweet Production Logo Asset (Web-Optimized CDN Image)
const LOGO_IMAGE_URL = "https://cdn-icons-png.flaticon.com/512/3081/3081913.png"; 

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "KMD Sweet House | Traditional Sri Lankan Sweets, Jaggery & Murukku - Hanwella",
    template: "%s | KMD Sweet House",
  },
  description:
    "KMD Sweet House in Thunnana, Hanwella produces authentic homemade Sri Lankan sweets, Jaggery snacks, Jaggery Murukku, spicy Murukku, Kokis, and Aluwa. Available for both wholesale and single retail orders across Colombo & Western Province.",
  keywords: [
    "KMD Sweet House",
    "KMD Sweet House Hanwella",
    "Sri Lankan traditional sweets",
    "Jaggery Murukku",
    "Jaggery sweets Sri Lanka",
    "Spicy Murukku",
    "Any kind of Murukku Sri Lanka",
    "Wholesale sweets Sri Lanka",
    "Retail sweets Hanwella",
    "Bulk sweet orders Colombo",
    "Homemade mithai Sri Lanka",
    "Thunnana sweet shop",
    "Kokis and Aluwa Hanwella",
    "Kavum and Athirasa",
  ],
  authors: [{ name: "KMD Sweet House" }],
  creator: "KMD Sweet House",
  publisher: "KMD Sweet House",
  category: "Food & Beverage",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  icons: {
    icon: [
      { url: LOGO_IMAGE_URL, href: LOGO_IMAGE_URL },
      { url: LOGO_IMAGE_URL, sizes: "32x32", type: "image/png" },
      { url: LOGO_IMAGE_URL, sizes: "16x16", type: "image/png" },
    ],
    shortcut: LOGO_IMAGE_URL,
    apple: [{ url: LOGO_IMAGE_URL, sizes: "180x180", type: "image/png" }],
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "KMD Sweet House | Wholesale & Retail Sri Lankan Sweets, Jaggery & Murukku",
    description:
      "Buy fresh handmade Sri Lankan sweets, Jaggery Murukku, and savory snacks in Thunnana, Hanwella. Wholesale bulk orders & single sales available.",
    url: SITE_URL,
    siteName: "KMD Sweet House",
    images: [
      {
        url: LOGO_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "KMD Sweet House Official Branding Logo",
      },
    ],
    locale: "en_LK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KMD Sweet House | Sri Lankan Traditional Sweets & Murukku",
    description:
      "Authentic handmade sweets, Jaggery specials, and Murukku in Thunnana, Hanwella. Bulk wholesale & retail delivery.",
    images: [LOGO_IMAGE_URL],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "LK-11",
    "geo.placename": "Hanwella, Thunnana, Colombo",
    "geo.position": "6.8923;80.0817",
    "ICBM": "6.8923, 80.0817",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    "name": "KMD Sweet House",
    "image": LOGO_IMAGE_URL,
    "logo": {
      "@type": "ImageObject",
      "url": LOGO_IMAGE_URL,
      "caption": "KMD Sweet House Logo",
    },
    "@id": `${SITE_URL}/#organization`,
    "url": SITE_URL,
    "telephone": "+94700000000",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Thunnana",
      "addressLocality": "Hanwella",
      "addressRegion": "Western Province",
      "postalCode": "10650",
      "addressCountry": "LK",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 6.8923,
      "longitude": 80.0817,
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      "opens": "08:00",
      "closes": "20:00",
    },
    "servesCuisine": [
      "Sri Lankan Sweets",
      "Jaggery Murukku",
      "Spicy Murukku",
      "Traditional Mithai",
      "Kokis",
      "Aluwa",
    ],
    "description":
      "KMD Sweet House specializes in high-quality handmade Sri Lankan traditional sweets, Jaggery Murukku, and all types of snacks for both wholesale and single retail orders in Thunnana, Hanwella.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Wholesale & Retail Sweets Catalog",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Jaggery Murukku & Savory Murukku (All Kinds)",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Sri Lankan Traditional Sweets (Kokis, Aluwa, Kavum, Athirasa)",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Wholesale & Single Retail Sales",
          },
        },
      ],
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href={LOGO_IMAGE_URL} />
        <link rel="apple-touch-icon" href={LOGO_IMAGE_URL} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className={`${fraunces.variable} ${manrope.variable} grain antialiased`}>
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}