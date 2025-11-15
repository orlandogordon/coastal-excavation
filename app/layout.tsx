import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL('https://coastalexcavation.construction'),
  title: {
    default: "Coastal Excavation | Professional Excavating & Site Work Services",
    template: "%s | Coastal Excavation"
  },
  description: "Family owned and operated excavation company serving the community with quality excavating, grading, sitework, and underground utility services for residential and commercial projects.",
  keywords: ["excavation", "excavating", "grading", "sitework", "underground utilities", "drainage", "concrete", "pavers", "retaining walls", "water", "sewer", "stone spreading"],
  authors: [{ name: "Coastal Excavation" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://coastalexcavation.construction",
    siteName: "Coastal Excavation",
    title: "Coastal Excavation | Professional Excavating & Site Work Services",
    description: "Family owned and operated excavation company serving the community with quality excavating, grading, sitework, and underground utility services.",
    images: [
      {
        url: "/images/hero/hero01.jpeg",
        width: 1920,
        height: 1080,
        alt: "Coastal Excavation - Professional excavating services"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Coastal Excavation | Professional Excavating & Site Work Services",
    description: "Family owned and operated excavation company serving the community with quality excavating, grading, sitework, and underground utility services.",
    images: ["/images/hero/hero01.jpeg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification code here when available
    // google: 'your-verification-code',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className="antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
