"use client";
// components/home/ServicesSection.tsx
import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { SERVICES } from "@/constants";
import { SectionLabel } from "@/components/shared/SectionLabel";

export function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="services" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <SectionLabel>Our Services</SectionLabel>
          <h2 className="text-[clamp(1.7rem,4vw,3rem)] font-bold leading-tight mb-3">
            Comprehensive Digital Solutions<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>for Your Growth
          </h2>
          <p className="text-[#94A3B8] max-w-xl mb-8 sm:mb-12 text-sm sm:text-base">
            A full spectrum of premium digital services designed specifically for the Gulf market.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {SERVICES.map((service, i) => (
            <motion.div key={service.id}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.06 }}
            >
              <Link href={`/services#${service.slug}`} className="block group h-full">
                <div className="relative bg-[#111827] border border-[#1E293B] rounded-2xl p-5 sm:p-7 h-full overflow-hidden
                  transition-all duration-300 group-hover:border-[#6366F1]/40 group-hover:-translate-y-1 group-hover:shadow-[0_16px_40px_rgba(0,0,0,.3)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  <div className="relative z-10">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 bg-[#6366F1]/10 rounded-xl flex items-center justify-center text-xl sm:text-2xl mb-4 sm:mb-5">
                      {service.icon}
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3">{service.nameEn}</h3>
                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">{service.descEn}</p>
                    <div className="mt-3 sm:mt-4 text-xs font-medium text-[#6366F1] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      Learn more →
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
