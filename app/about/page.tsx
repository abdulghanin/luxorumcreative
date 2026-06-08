// app/about/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { TEAM_MEMBERS, SITE_CONFIG } from "@/constants";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "About Us | Luxorum Creative",
  description: "Meet the team behind Luxorum Creative — the premium digital agency in the UAE and Gulf.",
  openGraph: { title: "About Us — Luxorum Creative", url: `${SITE_CONFIG.url}/about` },
};

const values = [
  { icon: "✨", title: "Excellence",          desc: "We refuse mediocrity in everything we deliver. Every detail reflects our high standard of quality." },
  { icon: "🤝", title: "True Partnership",    desc: "We treat every client as a strategic partner, not just a source of revenue. Your success is our success." },
  { icon: "💡", title: "Continuous Innovation",desc: "We follow the latest technologies and trends and apply them intelligently to exceed expectations." },
  { icon: "🌍", title: "Cultural Understanding",desc: "Deep knowledge of the Gulf market, its values and characteristics, makes our solutions more effective." },
];

const stats = [
  { num: "50+",  label: "Projects Delivered", icon: "🎯" },
  { num: "30+",  label: "Happy Clients",       icon: "🤝" },
  { num: "3",    label: "Years Experience",    icon: "⭐" },
  { num: "100%", label: "Client Satisfaction", icon: "✅" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(99,102,241,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,.06) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% top, rgba(99,102,241,.1) 0%, transparent 60%)" }} />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 items-center">
          <div>
            <span className="inline-block text-xs font-semibold text-[#6366F1] tracking-[3px] uppercase mb-4">About Us</span>
            <h1 className="text-[clamp(2rem,5vw,4rem)] font-bold leading-tight mb-5 sm:mb-6">
              A Digital Agency Bridging<br />
              <span style={{ background: "linear-gradient(135deg,#6366F1,#a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Creativity & Technology
              </span>
            </h1>
            <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed mb-5">
              Luxorum Creative is a specialized digital agency founded with one mission: helping Gulf businesses build a powerful digital presence that truly reflects their identity and achieves their commercial goals.
            </p>
            <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed mb-7 sm:mb-8">
              We combine premium creative design with advanced technical capability in web development and AI solutions, backed by a genuine, deep understanding of the Gulf market and its culture.
            </p>
            <Link href="/contact">
              <button className="w-full sm:w-auto bg-[#6366F1] hover:bg-[#818CF8] text-white px-7 sm:px-8 py-3.5 rounded-xl text-base font-semibold transition-colors"
                style={{ boxShadow: "0 8px 25px rgba(99,102,241,.3)" }}>
                Get in Touch →
              </button>
            </Link>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {stats.map(stat => (
              <div key={stat.label}
                className="bg-[#111827] border border-[#1E293B] rounded-2xl p-4 sm:p-6 text-center hover:border-[#6366F1]/30 transition-colors">
                <div className="text-xl sm:text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl font-bold text-[#6366F1] mb-1">{stat.num}</div>
                <div className="text-[11px] sm:text-xs text-[#94A3B8] leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8" style={{ borderTop: "1px solid #1E293B" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block text-xs font-semibold text-[#6366F1] tracking-[3px] uppercase mb-4">The Team</span>
            <h2 className="text-2xl sm:text-3xl font-bold">Our Founders</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8">
            {TEAM_MEMBERS.map(member => (
              <div key={member.nameAr}
                className="bg-[#111827] border border-[#1E293B] rounded-2xl p-6 sm:p-8 hover:border-[#6366F1]/30 transition-all">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center text-3xl sm:text-4xl mb-5 sm:mb-6"
                  style={{ background: member.gradient }}>
                  {member.emoji}
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-1">{member.nameAr}</h3>
                <p className="text-sm text-[#6366F1] font-medium mb-1">{member.roleEn.split(",")[0]}</p>
                <p className="text-xs sm:text-sm text-[#94A3B8] mb-5">{member.roleAr}</p>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map(skill => (
                    <span key={skill} className="text-xs px-2.5 py-1 rounded-lg font-medium"
                      style={{ background: "rgba(99,102,241,.08)", border: "1px solid rgba(99,102,241,.2)", color: "#818CF8" }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: "rgba(17,24,39,.5)", borderTop: "1px solid #1E293B" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block text-xs font-semibold text-[#6366F1] tracking-[3px] uppercase mb-4">Our Values</span>
            <h2 className="text-2xl sm:text-3xl font-bold">What Sets Us Apart</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {values.map(v => (
              <div key={v.title}
                className="bg-[#111827] border border-[#1E293B] rounded-2xl p-5 sm:p-7 hover:border-[#6366F1]/30 transition-all">
                <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">{v.icon}</div>
                <h3 className="font-semibold mb-2 text-sm sm:text-base">{v.title}</h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
