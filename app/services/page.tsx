// app/services/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES, SITE_CONFIG } from "@/constants";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Services | Luxorum Creative",
  description: "Premium digital services including brand identity, web design, web development, e-commerce, AI solutions, and digital marketing for Gulf businesses.",
  openGraph: { title: "Services — Luxorum Creative", url: `${SITE_CONFIG.url}/services` },
};

export default function ServicesPage() {
  return (
    <>
      <div className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(99,102,241,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,.06) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center top, rgba(99,102,241,.12) 0%, transparent 60%)" }} />
        <div className="relative max-w-3xl mx-auto">
          <span className="inline-block text-xs font-semibold text-[#6366F1] tracking-[3px] uppercase mb-4">Our Services</span>
          <h1 className="text-[clamp(2rem,5vw,4rem)] font-bold leading-tight mb-4">
            Comprehensive Digital Solutions<br />
            <span style={{ background: "linear-gradient(135deg,#6366F1,#a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              for Your Growth
            </span>
          </h1>
          <p className="text-[#94A3B8] text-base sm:text-lg max-w-xl mx-auto">
            From creative design to technical development — a full spectrum of premium digital services built for the Gulf market.
          </p>
        </div>
      </div>

      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {SERVICES.map(service => (
            <div key={service.id} id={service.slug}
              className="bg-[#111827] border border-[#1E293B] rounded-2xl p-5 sm:p-8 hover:border-[#6366F1]/40 hover:-translate-y-1 transition-all duration-300 group flex flex-col">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#6366F1]/10 rounded-xl flex items-center justify-center text-2xl sm:text-3xl mb-5 sm:mb-6">{service.icon}</div>
              <h2 className="text-base sm:text-lg font-semibold mb-3">{service.nameEn}</h2>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-5 flex-1">{service.descEn}</p>
              <Link href="/contact" className="text-xs font-semibold text-[#6366F1] hover:text-[#818CF8] transition-colors flex items-center gap-1 mt-auto">
                Get a Quote →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8" style={{ borderTop: "1px solid #1E293B" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-10 sm:mb-12">How We Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: "💬", step: "01", title: "Free Consultation", desc: "We understand your needs and define the right strategy" },
              { icon: "🎨", step: "02", title: "Design & Build",    desc: "We execute with high quality and professionalism" },
              { icon: "🚀", step: "03", title: "Launch & Support",  desc: "We launch and continue to support your growth" },
            ].map(item => (
              <div key={item.step} className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#6366F1]/10 border border-[#6366F1]/20 rounded-full flex items-center justify-center font-bold text-[#6366F1] text-sm">
                  {item.step}
                </div>
                <div className="text-xl sm:text-2xl">{item.icon}</div>
                <h3 className="font-semibold text-sm sm:text-base">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
