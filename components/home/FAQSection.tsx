"use client";
// components/home/FAQSection.tsx
import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQ_ITEMS } from "@/constants";
import { SectionLabel } from "@/components/shared/SectionLabel";

export function FAQSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [openId, setOpenId] = useState<string | null>("1");

  return (
    <section ref={ref} className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 items-start">

        {/* Left */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="text-[clamp(1.7rem,4vw,3rem)] font-bold leading-tight mb-4">
            Everything You<br />Need to Know
          </h2>
          <p className="text-[#94A3B8] mb-6 sm:mb-8 text-sm sm:text-base max-w-sm">
            Don&apos;t see your question here? Contact us directly and we&apos;ll respond promptly.
          </p>
          <Link href="/contact">
            <motion.button whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }}
              className="bg-[#6366F1] hover:bg-[#818CF8] text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors"
              style={{ boxShadow: "0 8px 25px rgba(99,102,241,.3)" }}>
              Get in Touch →
            </motion.button>
          </Link>
        </motion.div>

        {/* FAQ list */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }}>
          {FAQ_ITEMS.map(item => (
            <div key={item.id} className="border-b border-[#1E293B] last:border-none">
              <button onClick={() => setOpenId(p => p === item.id ? null : item.id)}
                className="w-full flex justify-between items-center py-4 sm:py-5 text-left gap-4 group"
                aria-expanded={openId === item.id}>
                <span className="font-medium text-sm sm:text-base leading-snug group-hover:text-[#6366F1] transition-colors">
                  {item.questionAr}
                </span>
                <motion.span animate={{ rotate: openId === item.id ? 45 : 0 }} transition={{ duration: 0.2 }}
                  className="flex-shrink-0 text-[#94A3B8] group-hover:text-[#6366F1] transition-colors">
                  <Plus size={18} />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openId === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28, ease: "easeInOut" }}
                    className="overflow-hidden">
                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed pb-4 sm:pb-5">
                      {item.answerAr}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
