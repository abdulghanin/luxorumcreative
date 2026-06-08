"use client";
// components/home/HeroSection.tsx
import Link from "next/link";
import { motion } from "framer-motion";
import { trackEvent } from "@/components/shared/Analytics";

const stats = [
  { num: "50+",  label: "Projects Delivered" },
  { num: "30+",  label: "Happy Clients" },
  { num: "3",    label: "Years of Excellence" },
  { num: "100%", label: "Client Satisfaction" },
];

export function HeroSection() {
  return (
    <section className="min-h-[100svh] flex items-center justify-center relative overflow-hidden px-4 sm:px-6 pt-20 sm:pt-24 pb-12">
      {/* Grid BG */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(99,102,241,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,.06) 1px,transparent 1px)",
        backgroundSize: "clamp(40px,8vw,60px) clamp(40px,8vw,60px)",
      }} />
      {/* Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[min(600px,90vw)] h-[min(600px,90vw)] rounded-full pointer-events-none" style={{
        background: "radial-gradient(circle,rgba(99,102,241,.15) 0%,transparent 70%)",
      }} />

      <div className="relative text-center max-w-5xl mx-auto w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 bg-[#6366F1]/10 border border-[#6366F1]/30 rounded-full px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs text-[#6366F1] mb-6 sm:mb-8"
        >
          <span className="text-[10px]">✦</span>
          Premium Digital Agency · UAE & Gulf
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}
          className="text-[clamp(2rem,7vw,5rem)] font-bold leading-[1.1] tracking-tight mb-5 sm:mb-6"
        >
          We Build Digital
          <br />
          <span style={{ background: "linear-gradient(135deg,#6366F1,#a855f7,#ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Experiences That Wow
          </span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base sm:text-lg text-[#94A3B8] max-w-xl mx-auto mb-8 sm:mb-10 px-2"
        >
          From brand identity to full digital transformation — we blend creativity with technology to deliver exceptional results for businesses across the UAE and Gulf.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
        >
          <Link href="/contact" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
              onClick={() => trackEvent("cta_click", { event_category: "hero" })}
              className="w-full sm:w-auto bg-[#6366F1] hover:bg-[#818CF8] text-white px-7 sm:px-8 py-3.5 rounded-xl text-base font-semibold transition-colors"
              style={{ boxShadow: "0 8px 25px rgba(99,102,241,.4)" }}
            >
              Start Your Project →
            </motion.button>
          </Link>
          <Link href="/portfolio" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto bg-transparent text-[#F8FAFC] border border-[#1E293B] hover:border-[#6366F1] hover:text-[#6366F1] px-7 sm:px-8 py-3.5 rounded-xl text-base font-medium transition-all"
            >
              View Our Work
            </motion.button>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mt-12 sm:mt-16 px-2"
        >
          {stats.map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#F8FAFC]">{stat.num}</div>
              <div className="text-[11px] sm:text-xs text-[#94A3B8] mt-1 leading-snug">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-[#94A3B8] text-xs"
      >
        Scroll to explore
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-1.5 h-1.5 bg-[#6366F1] rounded-full" />
      </motion.div>
    </section>
  );
}
