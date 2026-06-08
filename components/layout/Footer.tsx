// components/layout/Footer.tsx
import Link from "next/link";
import { SITE_CONFIG, NAV_ITEMS, SERVICES } from "@/constants";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#111827] border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8">

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">

          {/* Brand — full width on mobile */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="block text-xl font-bold mb-3" style={{
              background: "linear-gradient(135deg,#6366F1,#818CF8)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>
              {SITE_CONFIG.name}
            </Link>
            <p className="text-sm text-[#94A3B8] leading-relaxed max-w-[280px] mb-5">
              {SITE_CONFIG.description}
            </p>
            <div className="flex gap-2.5">
              {[
                { icon: "📸", label: "Instagram", href: SITE_CONFIG.social.instagram },
                { icon: "💼", label: "LinkedIn",  href: SITE_CONFIG.social.linkedin },
                { icon: "🐦", label: "Twitter",   href: SITE_CONFIG.social.twitter },
                { icon: "🎨", label: "Behance",   href: SITE_CONFIG.social.behance },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-9 h-9 bg-white/5 border border-[#1E293B] rounded-lg flex items-center justify-center text-sm hover:bg-[#6366F1]/10 hover:border-[#6366F1]/40 transition-all">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[3px] text-[#94A3B8] mb-4">Services</h3>
            <ul className="flex flex-col gap-2.5">
              {SERVICES.slice(0, 5).map(s => (
                <li key={s.id}>
                  <Link href={`/services#${s.slug}`} className="text-sm text-[#94A3B8] hover:text-[#6366F1] transition-colors leading-snug">
                    {s.nameEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[3px] text-[#94A3B8] mb-4">AI Solutions</h3>
            <ul className="flex flex-col gap-2.5">
              {["AI Consultation","AI Chatbots","Business Automation","Data Analytics","Content Generation"].map(item => (
                <li key={item}>
                  <Link href="/ai-solutions" className="text-sm text-[#94A3B8] hover:text-[#6366F1] transition-colors leading-snug">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[3px] text-[#94A3B8] mb-4">Company</h3>
            <ul className="flex flex-col gap-2.5">
              {NAV_ITEMS.filter(i => ["/about","/portfolio","/blog","/contact"].includes(i.href)).map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-[#94A3B8] hover:text-[#6366F1] transition-colors">
                    {item.labelEn}
                  </Link>
                </li>
              ))}
              <li><Link href="/privacy" className="text-sm text-[#94A3B8] hover:text-[#6366F1] transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 sm:pt-8 border-t border-[#1E293B] flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-[#94A3B8]">© {year} {SITE_CONFIG.name}. All rights reserved.</p>
          <p className="text-xs text-[#94A3B8]">Made with ❤️ in Dubai, UAE</p>
        </div>
      </div>
    </footer>
  );
}
