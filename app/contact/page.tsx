// app/contact/page.tsx
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/constants";
import { ContactForm } from "@/components/home/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Luxorum Creative",
  description: "Get in touch with Luxorum Creative to start your digital project. Free consultation available.",
  openGraph: { title: "Contact Us — Luxorum Creative", url: `${SITE_CONFIG.url}/contact` },
};

const structuredData = {
  "@context": "https://schema.org", "@type": "ContactPage",
  name: "Contact Luxorum Creative", url: `${SITE_CONFIG.url}/contact`,
  mainEntity: { "@type": "Organization", name: "Luxorum Creative",
    contactPoint: { "@type": "ContactPoint", telephone: SITE_CONFIG.whatsapp, email: SITE_CONFIG.email, contactType: "customer service", availableLanguage: ["English", "Arabic"] }
  },
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="pt-16 sm:pt-20" />
      <ContactForm />
    </>
  );
}
