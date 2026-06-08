"use client";
// components/home/CTASection.tsx
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SITE_CONFIG } from "@/constants";
import { trackEvent } from "@/components/shared/Analytics";

export function CTASection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden"
      style={{ background: "linear-gradient(135deg,rgba(99,102,241,.08) 0%,rgba(168,85,247,.08) 100%)", borderTop: "1px solid #1E293B" }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(99,102,241,.12) 0%, transparent 70%)" }} />

      <div className="relative max-w-2xl mx-auto">
        <motion.span initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="inline-block text-xs font-semibold text-[#6366F1] tracking-[3px] uppercase mb-4">
          Start Today
        </motion.span>

        <motion.h2 initial={{ opacity: 0, y: 25 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[clamp(1.9rem,5vw,3.5rem)] font-bold leading-tight mb-4">
          Ready to Elevate<br />Your Brand?
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#94A3B8] max-w-md mx-auto mb-8 sm:mb-10 text-sm sm:text-base">
          Join 30+ Gulf businesses that trust Luxorum Creative to build their premium digital presence.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <Link href="/contact" className="w-full sm:w-auto">
            <motion.button whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
              onClick={() => trackEvent("cta_click", { event_category: "cta_section" })}
              className="w-full sm:w-auto bg-[#6366F1] hover:bg-[#818CF8] text-white px-7 sm:px-8 py-3.5 rounded-xl text-base font-semibold transition-colors"
              style={{ boxShadow: "0 8px 25px rgba(99,102,241,.4)" }}>
              Book a Free Consultation →
            </motion.button>
          </Link>
          <motion.a href={SITE_CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
            onClick={() => trackEvent("whatsapp_click", { event_category: "cta_section" })}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent text-[#F8FAFC] border border-[#1E293B] hover:border-[#6366F1] hover:text-[#6366F1] px-7 sm:px-8 py-3.5 rounded-xl text-base font-medium transition-all">
            💬 WhatsApp Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
