"use client";
// components/layout/Navbar.tsx
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, SITE_CONFIG } from "@/constants";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setIsMobileOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 h-16 sm:h-[72px] flex items-center justify-between transition-all duration-300",
        isScrolled ? "bg-[#0B0F19]/90 backdrop-blur-xl border-b border-[#1E293B]" : "bg-transparent"
      )}>
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/logos/icon-mark.svg"
            alt={SITE_CONFIG.name}
            width={44}
            height={44}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8 list-none">
          {NAV_ITEMS.filter(i => i.href !== "/").map(item => (
            <li key={item.href}>
              <Link href={item.href} className={cn(
                "text-sm transition-colors duration-200 whitespace-nowrap",
                pathname === item.href ? "text-[#6366F1] font-medium" : "text-[#94A3B8] hover:text-[#F8FAFC]"
              )}>
                {item.labelEn}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-[#F8FAFC] p-2 -mr-2 touch-manipulation"
          onClick={() => setIsMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[998] bg-[#0B0F19]/60 backdrop-blur-sm lg:hidden"
            onClick={() => setIsMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 z-[999] w-[280px] sm:w-[320px] bg-[#0B0F19] border-l border-[#1E293B] flex flex-col lg:hidden"
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#1E293B]">
              <Link href="/" className="flex items-center gap-3">
                <Image src="/logos/icon-mark.svg" alt={SITE_CONFIG.name} width={36} height={36} priority />
                <span className="text-base font-bold" style={{
                  background: "linear-gradient(135deg,#6366F1,#818CF8)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                }}>{SITE_CONFIG.name}</span>
              </Link>
              <button
                onClick={() => setIsMobileOpen(false)}
                className="text-[#94A3B8] hover:text-[#F8FAFC] p-1 touch-manipulation"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Drawer links */}
            <nav className="flex-1 overflow-y-auto py-4 px-3">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center px-4 py-3.5 rounded-xl text-base font-medium transition-colors mb-1",
                      pathname === item.href
                        ? "bg-[#6366F1]/10 text-[#6366F1]"
                        : "text-[#94A3B8] hover:bg-[#111827] hover:text-[#F8FAFC]"
                    )}
                  >
                    {item.labelEn}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Drawer CTA */}
            <div className="px-5 py-5 border-t border-[#1E293B]">
              <Link href="/contact" onClick={() => setIsMobileOpen(false)}>
                <button className="w-full bg-[#6366F1] hover:bg-[#818CF8] text-white py-3.5 rounded-xl text-base font-semibold transition-colors">
                  Start Your Project
                </button>
              </Link>
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full mt-3 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] py-3 rounded-xl text-sm font-medium transition-colors border border-[#25D366]/20"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
