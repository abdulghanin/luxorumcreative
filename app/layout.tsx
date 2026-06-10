// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "@/styles/globals.css";

import { SITE_CONFIG } from "@/constants";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/shared/WhatsAppFloat";
import { Analytics } from "@/components/shared/Analytics";
import { Toaster } from "@/components/shared/Toaster";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Luxorum Creative | Web Design, Branding & AI Automation Agency UAE",
    template: `%s | Luxorum Creative`,
  },
  description: "Luxorum Creative is a premium digital agency in UAE providing web design, branding, AI automation, SEO, ecommerce development and digital growth solutions for businesses in the Gulf region.",
  keywords: [
    "web design dubai",
    "branding agency uae",
    "ai automation uae",
    "seo services dubai",
    "ecommerce development uae",
    "nextjs development uae",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  category: "Technology",
  verification: {
    google: "7cnmvA8EZ4eTb52lOjpvjOTnRKncQ9Kk8rO3RWBJvHU",
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
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "ar-AE": "/ar",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_AE",
    url: "/",
    siteName: SITE_CONFIG.name,
    title: "Luxorum Creative | Web Design, Branding & AI Automation Agency UAE",
    description: "Premium digital agency in UAE providing web design, branding, AI automation, SEO and ecommerce solutions.",
    // With metadataBase set, relative paths are automatically resolved
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: SITE_CONFIG.name }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@luxorumcreative",
    creator: "@luxorumcreative",
    title: "Luxorum Creative | Web Design, Branding & AI Automation Agency UAE",
    description: "Premium digital agency in UAE providing web design, branding, AI automation, SEO and ecommerce solutions.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [{ url: "/favicon/favicon-32.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon/apple-touch-icon.svg" }],
  },
};

export const viewport: Viewport = {
  width: "device-width", 
  initialScale: 1,
  themeColor: "#0B0F19",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_CONFIG.url}/#organization`,
    name: "Luxorum Creative",
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logos/logo-dark.svg`,
    image: `${SITE_CONFIG.url}/opengraph-image`,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.whatsapp,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: SITE_CONFIG.email,
      availableLanguage: ["English", "Arabic"],
    },
    areaServed: ["United Arab Emirates", "Saudi Arabia", "Qatar", "Kuwait"],
    sameAs: [
      SITE_CONFIG.social.instagram,
      SITE_CONFIG.social.linkedin,
      SITE_CONFIG.social.twitter,
      SITE_CONFIG.social.behance,
    ],
  };

  return (
    <html lang="en" dir="ltr" className={inter.variable} data-scroll-behavior="smooth">
      <body className={inter.className}>
        <script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <Toaster />
      </body>
    </html>
  );
}
