"use client";
// components/home/ContactForm.tsx
import { useRef, useState, useTransition } from "react";
import { motion, useInView } from "framer-motion";
import { submitContactForm } from "@/actions/contact";
import { SERVICES, SITE_CONFIG } from "@/constants";
import { trackEvent } from "@/components/shared/Analytics";
import { SectionLabel } from "@/components/shared/SectionLabel";

export function ContactForm() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [isPending, startTransition] = useTransition();
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setError(null);
    startTransition(async () => {
      const result = await submitContactForm(formData);
      if (result.success) {
        setIsSuccess(true);
        trackEvent("contact_form_submit", { event_category: "conversion" });
      } else {
        setError(result.message);
      }
    });
  };

  const input = "w-full bg-[#0B0F19] border border-[#1E293B] rounded-xl px-4 py-3 text-sm text-[#F8FAFC] placeholder:text-[#475569] outline-none focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/10 transition-all";

  return (
    <section ref={ref} id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-8 sm:mb-12">
          <SectionLabel>Contact Us</SectionLabel>
          <h2 className="text-[clamp(1.7rem,4vw,3rem)] font-bold leading-tight">
            Start Your Project<br />With Us Today
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14">

          {/* Form */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
            {isSuccess ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 sm:py-16 px-6 sm:px-8 rounded-2xl border"
                style={{ background: "rgba(16,185,129,.04)", borderColor: "rgba(16,185,129,.2)" }}>
                <div className="text-4xl sm:text-5xl mb-4">✅</div>
                <h3 className="text-lg font-semibold text-[#10B981] mb-2">Message sent successfully!</h3>
                <p className="text-sm text-[#94A3B8]">We&apos;ll get back to you within 24 hours. Thank you for trusting Luxorum Creative.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-[#94A3B8]">Full Name *</label>
                    <input name="fullName" required placeholder="John Smith" className={input} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-[#94A3B8]">Email Address *</label>
                    <input name="email" type="email" required placeholder="name@company.com" className={input} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-[#94A3B8]">Phone Number</label>
                    <input name="phone" type="tel" placeholder="+971 50 000 0000" className={input} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-[#94A3B8]">Company Name</label>
                    <input name="company" placeholder="Your company" className={input} />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#94A3B8]">Service Required *</label>
                  <select name="service" required defaultValue="" className={input}
                    style={{ appearance: "none", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%2394A3B8' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center", paddingRight: "40px" }}>
                    <option value="" disabled>Select a service...</option>
                    {SERVICES.map(s => (
                      <option key={s.id} value={s.nameEn} style={{ background: "#111827" }}>{s.nameEn}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#94A3B8]">Project Details *</label>
                  <textarea name="details" required rows={4} placeholder="Tell us about your project, goals, and any important details..."
                    className={`${input} resize-none`} />
                </div>

                {error && (
                  <p className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">{error}</p>
                )}

                <motion.button type="submit" disabled={isPending}
                  whileHover={{ scale: isPending ? 1 : 1.02, y: isPending ? 0 : -1 }} whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#6366F1] hover:bg-[#818CF8] disabled:opacity-60 disabled:cursor-not-allowed text-white py-3.5 rounded-xl text-base font-semibold transition-colors"
                  style={{ boxShadow: "0 8px 25px rgba(99,102,241,.3)" }}>
                  {isPending ? "Sending..." : "Send Message →"}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6 sm:gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-5 sm:mb-6">Contact Information</h3>
              <div className="flex flex-col gap-4 sm:gap-5">
                {[
                  { icon: "📧", label: "Email",        value: SITE_CONFIG.email },
                  { icon: "💬", label: "WhatsApp",     value: SITE_CONFIG.whatsapp },
                  { icon: "📍", label: "Location",     value: SITE_CONFIG.location },
                  { icon: "⏰", label: "Working Hours", value: "Sun – Thu, 9 AM – 6 PM (GST)" },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[#6366F1]/10 rounded-xl flex items-center justify-center text-base sm:text-lg flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-[11px] sm:text-xs text-[#94A3B8] mb-0.5">{item.label}</div>
                      <div className="text-sm font-medium break-all sm:break-normal">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp card */}
            <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-5 sm:p-6">
              <h4 className="font-semibold text-sm mb-2">Free 30-Minute Consultation</h4>
              <p className="text-xs text-[#94A3B8] mb-4 leading-relaxed">
                We offer a free consultation to understand your needs and propose a tailored solution for your project.
              </p>
              <motion.a href={SITE_CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer"
                onClick={() => trackEvent("whatsapp_click", { event_category: "contact_page" })}
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1da851] text-white py-3 rounded-xl text-sm font-semibold text-center transition-colors">
                💬 Chat on WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
