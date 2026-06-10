// app/ai-solutions/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/home/CTASection";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "AI Solutions | Luxorum Creative",
  description: "Advanced AI solutions for Gulf businesses: chatbots, automation, data analytics, content generation, and AI consultation.",
  path: "/ai-solutions",
});

const aiServices = [
  { icon: "🤖", title: "Multilingual AI Chatbot", desc: "Sophisticated chatbots in Arabic and English operating 24/7, integrating with your website, WhatsApp, and social platforms.", features: ["Arabic & English support","WhatsApp integration","Auto-learning","Detailed analytics"] },
  { icon: "⚙️", title: "Business Process Automation", desc: "Smart automation systems that convert routine operations into automatic workflows, saving time and reducing human errors.", features: ["Sales automation","CRM integration","Smart invoicing","Auto-reporting"] },
  { icon: "📊", title: "Data Analytics & Forecasting", desc: "AI models that analyze your business data and predict sales trends and future market movements.", features: ["Interactive dashboards","Sales forecasting","Customer behavior analysis","Real-time reports"] },
  { icon: "✍️", title: "AI Content Generation", desc: "Custom AI tools for generating Arabic marketing content that aligns with your brand identity and voice.", features: ["Social media content","Email marketing","Product descriptions","SEO articles"] },
  { icon: "🔍", title: "Sentiment & Brand Monitoring", desc: "Continuous monitoring of what's being said about your brand online with real-time customer sentiment analysis.", features: ["Social media monitoring","Review analysis","Instant alerts","Monthly reports"] },
  { icon: "🎯", title: "Customer Experience Personalization", desc: "Smart recommendation algorithms that deliver a personalized experience for each visitor based on behavior.", features: ["Personalized recommendations","Audience segmentation","Targeted campaigns","Conversion uplift"] },
];

export default function AISolutionsPage() {
  return (
    <>
      <div className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(99,102,241,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,.06) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center top, rgba(168,85,247,.12) 0%, transparent 60%)" }} />
        <div className="relative max-w-3xl mx-auto">
          <span className="inline-block text-xs font-semibold text-[#6366F1] tracking-[3px] uppercase mb-4">AI Solutions</span>
          <h1 className="text-[clamp(2rem,5vw,4rem)] font-bold leading-tight mb-4">
            Enter the Age of<br />
            <span style={{ background: "linear-gradient(135deg,#6366F1,#a855f7,#ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Artificial Intelligence
            </span>
          </h1>
          <p className="text-[#94A3B8] text-base sm:text-lg max-w-xl mx-auto mb-6 sm:mb-8">
            We help UAE and Gulf businesses adopt the latest AI technologies to achieve operational efficiency and competitive advantage.
          </p>
          <Link href="/contact">
            <button className="bg-[#6366F1] hover:bg-[#818CF8] text-white px-7 sm:px-8 py-3.5 rounded-xl text-base font-semibold transition-colors"
              style={{ boxShadow: "0 8px 25px rgba(99,102,241,.4)" }}>
              Book a Free Consultation →
            </button>
          </Link>
        </div>
      </div>

      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {aiServices.map(s => (
            <div key={s.title} className="bg-[#111827] border border-[#1E293B] rounded-2xl p-5 sm:p-7 hover:border-[#6366F1]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="text-2xl sm:text-3xl mb-4">{s.icon}</div>
              <h2 className="text-sm sm:text-base font-semibold mb-3">{s.title}</h2>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-4 sm:mb-5 flex-1">{s.desc}</p>
              <ul className="flex flex-col gap-2">
                {s.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-xs text-[#94A3B8]">
                    <span className="w-1.5 h-1.5 bg-[#6366F1] rounded-full flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8" style={{ background: "rgba(17,24,39,.5)", borderTop: "1px solid #1E293B", borderBottom: "1px solid #1E293B" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Why AI Now?</h2>
          <p className="text-[#94A3B8] mb-8 sm:mb-12 text-sm sm:text-base">Companies that adopt AI today will lead the market tomorrow</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              { num: "40%", label: "Reduction in operating costs" },
              { num: "3x",  label: "Increase in team productivity" },
              { num: "60%", label: "Improvement in customer satisfaction" },
            ].map(stat => (
              <div key={stat.label} className="rounded-2xl p-5 sm:p-6 text-center"
                style={{ background: "rgba(99,102,241,.04)", border: "1px solid rgba(99,102,241,.2)" }}>
                <div className="text-3xl sm:text-4xl font-bold text-[#6366F1] mb-2">{stat.num}</div>
                <div className="text-xs sm:text-sm text-[#94A3B8]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
