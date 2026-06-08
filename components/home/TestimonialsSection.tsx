"use client";
// components/home/TestimonialsSection.tsx
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TESTIMONIALS } from "@/constants";
import { SectionLabel } from "@/components/shared/SectionLabel";

export function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: "rgba(17,24,39,.5)", borderTop: "1px solid #1E293B" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14">
          <SectionLabel center>Client Reviews</SectionLabel>
          <h2 className="text-[clamp(1.7rem,4vw,3rem)] font-bold leading-tight">
            What Our Clients<br />Say About Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div key={t.id}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="bg-[#111827] border border-[#1E293B] rounded-2xl p-5 sm:p-7 hover:border-[#6366F1]/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-[#F59E0B] tracking-widest text-sm mb-4">{"★".repeat(t.rating)}</div>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-5 sm:mb-6">
                &ldquo;{t.textAr}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-bold text-white text-sm flex-shrink-0"
                  style={{ background: t.avatarGradient }}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.nameAr}</div>
                  <div className="text-xs text-[#94A3B8]">{t.titleAr}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
