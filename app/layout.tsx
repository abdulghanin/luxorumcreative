// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
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
    default: `${SITE_CONFIG.name} | Premium Digital Agency in the Gulf`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "digital agency dubai",
    "web design uae",
    "branding gulf",
    "web development abu dhabi",
    "AI solutions gulf",
    "ecommerce development",
    "digital marketing uae",
    "وكالة رقمية دبي",
    "تصميم مواقع",
    "luxorum creative",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_AE",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | Premium Digital Agency`,
    description: SITE_CONFIG.description,
    images: [{ url: `${SITE_CONFIG.url}/og-image.png`, width: 1200, height: 630, alt: SITE_CONFIG.name }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@luxorumcreative",
    creator: "@luxorumcreative",
    title: `${SITE_CONFIG.name} | Premium Digital Agency`,
    description: SITE_CONFIG.description,
    images: [`${SITE_CONFIG.url}/og-image.png`],
  },
  alternates: {
    canonical: SITE_CONFIG.url,
    languages: { "en-US": SITE_CONFIG.url, "ar-AE": `${SITE_CONFIG.url}/ar` },
  },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0F19",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={inter.variable} data-scroll-behavior="smooth">
      <body className={inter.className}>
        <Analytics />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <Toaster />
      </body>
    </html>
  );
}
