"use client";
// components/home/ProcessSection.tsx
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionLabel } from "@/components/shared/SectionLabel";

const steps = [
  { num: "01", title: "Discovery & Planning",  desc: "We understand your needs, goals, and market — then craft a tailored strategy.",       icon: "💬" },
  { num: "02", title: "Design & Creativity",   desc: "We design innovative visual solutions that reflect your brand and captivate your audience.", icon: "🎨" },
  { num: "03", title: "Development & Build",   desc: "We develop with cutting-edge technology, ensuring high performance and security.",     icon: "⚙️" },
  { num: "04", title: "Launch & Support",      desc: "We launch successfully and continue with ongoing support and continuous improvement.",   icon: "🚀" },
];

export function ProcessSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14">
          <SectionLabel center>How We Work</SectionLabel>
          <h2 className="text-[clamp(1.7rem,4vw,3rem)] font-bold leading-tight">
            A Proven Process<br />That Guarantees Success
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Connector line — desktop only */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-px z-0"
            style={{ background: "linear-gradient(90deg,transparent,#1E293B,#1E293B,transparent)" }} />

          {steps.map((step, i) => (
            <motion.div key={step.num}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="relative z-10 text-center sm:text-left lg:text-center flex sm:flex-row lg:flex-col items-start sm:items-center lg:items-center gap-4 sm:gap-5 lg:gap-0"
            >
              {/* Circle */}
              <div className="relative flex-shrink-0 mx-auto sm:mx-0 lg:mx-auto mb-0 sm:mb-0 lg:mb-5">
                <div className="w-[56px] h-[56px] bg-[#111827] border border-[#1E293B] rounded-full flex items-center justify-center font-bold text-base text-[#6366F1]">
                  {step.num}
                </div>
                <div className="absolute inset-[-4px] rounded-full border border-[#6366F1]/20" />
              </div>
              <div className="flex-1 lg:flex-none">
                <div className="text-xl sm:text-2xl mb-1.5 sm:mb-2 lg:mb-3 hidden lg:block">{step.icon}</div>
                <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-1.5">{step.title}</h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed max-w-[240px] sm:max-w-none lg:max-w-[200px] mx-auto sm:mx-0">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
