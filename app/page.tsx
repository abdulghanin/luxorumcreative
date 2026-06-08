// app/page.tsx
import type { Metadata } from "next";
import { HeroSection }         from "@/components/home/HeroSection";
import { ServicesSection }     from "@/components/home/ServicesSection";
import { WhyUsSection }        from "@/components/home/WhyUsSection";
import { PortfolioSection }    from "@/components/home/PortfolioSection";
import { AISection }           from "@/components/home/AISection";
import { ProcessSection }      from "@/components/home/ProcessSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection }          from "@/components/home/FAQSection";
import { CTASection }          from "@/components/home/CTASection";
import { ContactForm }         from "@/components/home/ContactForm";
import { SITE_CONFIG }         from "@/constants";

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} | Premium Digital Agency in the Gulf`,
  description: SITE_CONFIG.description,
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Luxorum Creative",
  alternateName: "لوكسوروم كريتيف",
  url: SITE_CONFIG.url,
  description: SITE_CONFIG.description,
  address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
  contactPoint: { "@type": "ContactPoint", telephone: SITE_CONFIG.whatsapp, contactType: "customer service", availableLanguage: ["English", "Arabic"] },
  areaServed: ["AE", "SA", "KW", "QA", "BH", "OM"],
  serviceType: ["Web Design", "Web Development", "Branding", "AI Solutions", "Digital Marketing", "E-Commerce Development"],
  sameAs: [SITE_CONFIG.social.instagram, SITE_CONFIG.social.linkedin, SITE_CONFIG.social.twitter],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <PortfolioSection />
      <AISection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <ContactForm />
    </>
  );
}
