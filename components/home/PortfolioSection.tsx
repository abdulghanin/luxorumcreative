"use client";
// components/home/PortfolioSection.tsx
import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/constants";
import { SectionLabel } from "@/components/shared/SectionLabel";

const categories = [
  { key: "all",   label: "All Work" },
  { key: "web",   label: "Websites" },
  { key: "brand", label: "Branding" },
  { key: "ecom",  label: "E-Commerce" },
  { key: "ai",    label: "AI / Tech" },
];

export function PortfolioSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState("all");

  const filtered = PROJECTS.filter(p => active === "all" || p.category === active);

  return (
    <section ref={ref} id="portfolio" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <SectionLabel>Our Work</SectionLabel>
          <h2 className="text-[clamp(1.7rem,4vw,3rem)] font-bold leading-tight mb-3">
            Projects That Speak<br className="hidden sm:block" /> for Themselves
          </h2>
          <p className="text-[#94A3B8] mb-6 sm:mb-8 max-w-lg text-sm sm:text-base">
            Selected projects delivering measurable results for clients across the UAE and Gulf.
          </p>
        </motion.div>

        {/* Filter — scrollable on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-2 mb-8 sm:mb-10 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
        >
          {categories.map(cat => (
            <button key={cat.key} onClick={() => setActive(cat.key)}
              className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                active === cat.key ? "bg-[#6366F1] text-white" : "bg-[#111827] border border-[#1E293B] text-[#94A3B8] hover:text-[#F8FAFC]"
              }`}>
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div key={project.id} layout
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.35, delay: i * 0.06 }}
              >
                <Link href="/portfolio" className="block group">
                  <div className="bg-[#111827] border border-[#1E293B] rounded-2xl overflow-hidden
                    transition-all duration-300 group-hover:-translate-y-2 group-hover:border-[#6366F1]/30 group-hover:shadow-[0_20px_45px_rgba(0,0,0,.4)]">
                    <div className="h-44 sm:h-52 flex items-center justify-center text-5xl relative overflow-hidden"
                      style={{ background: project.gradient }}>
                      <div className="relative z-10">{project.emoji}</div>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                      <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-2 py-0.5 text-xs text-white">
                        {project.year}
                      </div>
                    </div>
                    <div className="p-4 sm:p-5">
                      <div className="text-[10px] font-bold uppercase tracking-[2px] text-[#6366F1] mb-2">{project.tagEn}</div>
                      <h3 className="text-sm font-semibold mb-1.5 leading-snug">{project.titleEn}</h3>
                      <p className="text-xs text-[#94A3B8] leading-relaxed line-clamp-2">{project.descEn}</p>
                      <div className="mt-3 text-xs text-[#6366F1] opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                        View Project →
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.7 }}
          className="text-center mt-10 sm:mt-12">
          <Link href="/portfolio">
            <button className="border border-[#1E293B] hover:border-[#6366F1] text-[#94A3B8] hover:text-[#6366F1] px-7 sm:px-8 py-3 rounded-xl text-sm font-medium transition-all">
              View All Projects →
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
