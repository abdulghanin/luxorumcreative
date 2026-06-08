"use client";
// app/portfolio/page.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/constants";
import { CTASection } from "@/components/home/CTASection";

const categories = [
  { key: "all",   label: "All Work" },
  { key: "brand", label: "Branding" },
  { key: "web",   label: "Websites" },
  { key: "ecom",  label: "E-Commerce" },
  { key: "ai",    label: "AI / Tech" },
];

export default function PortfolioPage() {
  const [active, setActive] = useState("all");
  const filtered = PROJECTS.filter(p => active === "all" || p.category === active);

  return (
    <>
      <div className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(99,102,241,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,.06) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center top, rgba(99,102,241,.12) 0%, transparent 60%)" }} />
        <div className="relative max-w-3xl mx-auto">
          <span className="inline-block text-xs font-semibold text-[#6366F1] tracking-[3px] uppercase mb-4">Our Work</span>
          <h1 className="text-[clamp(2rem,5vw,4rem)] font-bold leading-tight mb-4">
            Projects That Speak<br />
            <span style={{ background: "linear-gradient(135deg,#6366F1,#a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              for Themselves
            </span>
          </h1>
          <p className="text-[#94A3B8] text-base sm:text-lg max-w-xl mx-auto">
            Selected work delivering measurable results for clients across the UAE and Gulf.
          </p>
        </div>
      </div>

      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filter — horizontal scroll on mobile */}
          <div className="flex gap-2 mb-8 sm:mb-10 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0" style={{ scrollbarWidth: "none" }}>
            {categories.map(cat => (
              <button key={cat.key} onClick={() => setActive(cat.key)}
                className={`px-4 sm:px-5 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                  active === cat.key ? "bg-[#6366F1] text-white" : "bg-[#111827] border border-[#1E293B] text-[#94A3B8] hover:text-[#F8FAFC]"
                }`}>
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map(project => (
                <motion.div key={project.id} layout
                  initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.35 }}
                  className="bg-[#111827] border border-[#1E293B] rounded-2xl overflow-hidden hover:-translate-y-2 hover:border-[#6366F1]/30 hover:shadow-[0_20px_45px_rgba(0,0,0,.4)] transition-all duration-300">
                  <div className="h-44 sm:h-56 flex items-center justify-center text-5xl sm:text-6xl relative overflow-hidden"
                    style={{ background: project.gradient }}>
                    <div className="relative z-10">{project.emoji}</div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-2 py-0.5 text-xs text-white">{project.year}</span>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="text-[10px] font-bold uppercase tracking-[2px] text-[#6366F1] mb-2">{project.tagEn}</div>
                    <h2 className="font-semibold text-sm sm:text-base mb-1.5 leading-snug">{project.titleEn}</h2>
                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-3 line-clamp-2">{project.descEn}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#475569]">{project.client}</span>
                      <span className="text-xs text-[#6366F1] font-medium">View Details →</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
