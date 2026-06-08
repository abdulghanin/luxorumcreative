"use client";
// components/home/WhyUsSection.tsx
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TEAM_MEMBERS } from "@/constants";
import { SectionLabel } from "@/components/shared/SectionLabel";

const features = [
  { icon: "🚀", title: "Fast & Reliable Delivery",      desc: "We commit to deadlines and deliver high-quality projects on time, every time — no excuses." },
  { icon: "🎯", title: "Measurable Results",             desc: "Every decision is data-backed to ensure that every dollar you invest delivers a tangible return." },
  { icon: "🌐", title: "Deep Gulf Market Understanding", desc: "Local cultural expertise ensures your message resonates authentically with your target audience." },
  { icon: "🔒", title: "Ongoing Support",                desc: "A long-term partnership with 24/7 technical support to keep your business running smoothly." },
];

const metrics = [
  { num: "50+", label: "Projects Delivered" },
  { num: "30+", label: "Happy Clients" },
  { num: "3",   label: "Years Experience" },
  { num: "5★",  label: "Client Rating" },
];

export function WhyUsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: "rgba(17,24,39,.5)", borderTop: "1px solid #1E293B", borderBottom: "1px solid #1E293B" }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 items-center">

        {/* Text column */}
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <SectionLabel>Why Luxorum?</SectionLabel>
            <h2 className="text-[clamp(1.7rem,4vw,3rem)] font-bold leading-tight mb-4">
              Creativity Meets<br />Advanced Technology
            </h2>
            <p className="text-[#94A3B8] mb-8 sm:mb-10 text-sm sm:text-base max-w-lg">
              A specialized team combining creative design expertise with technical development to deliver results that exceed your expectations.
            </p>
          </motion.div>

          <div className="flex flex-col gap-5 sm:gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title}
                initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="flex gap-3 sm:gap-4 items-start"
              >
                <div className="w-10 h-10 bg-[#6366F1]/10 rounded-xl flex items-center justify-center text-lg sm:text-xl flex-shrink-0 mt-0.5">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-sm sm:text-base">{f.title}</h3>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Visual card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}
          className="relative bg-[#111827] border border-[#1E293B] rounded-2xl p-5 sm:p-7 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-full h-full pointer-events-none"
            style={{ background: "radial-gradient(circle at 80% 20%, rgba(99,102,241,.08) 0%, transparent 60%)" }} />
          <div className="relative z-10">
            <p className="text-xs text-[#94A3B8] text-center mb-5">Our Numbers</p>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-5">
              {metrics.map(m => (
                <div key={m.label} className="rounded-xl p-4 sm:p-5 text-center"
                  style={{ background: "rgba(99,102,241,.04)", border: "1px solid rgba(99,102,241,.15)" }}>
                  <div className="text-2xl sm:text-3xl font-bold text-[#6366F1]">{m.num}</div>
                  <div className="text-[10px] sm:text-xs text-[#94A3B8] mt-1">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Team */}
            <div className="border border-[#1E293B] rounded-xl p-4">
              <p className="text-xs text-[#94A3B8] text-center mb-4">Our Founders</p>
              <div className="flex justify-center gap-6 sm:gap-8">
                {TEAM_MEMBERS.map(m => (
                  <div key={m.nameAr} className="text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl mx-auto mb-2"
                      style={{ background: m.gradient }}>
                      {m.emoji}
                    </div>
                    <div className="text-xs font-semibold">{m.nameAr}</div>
                    <div className="text-[10px] text-[#94A3B8] mt-0.5">{m.roleEn.split(",")[0]}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
