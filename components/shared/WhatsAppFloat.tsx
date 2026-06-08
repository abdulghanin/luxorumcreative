"use client";
// components/shared/WhatsAppFloat.tsx
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/constants";
import { trackEvent } from "@/components/shared/Analytics";

export function WhatsAppFloat() {
  return (
    <motion.a
      href={SITE_CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      onClick={() => trackEvent("whatsapp_click", { event_category: "float_button" })}
      initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] rounded-full flex items-center justify-center text-xl sm:text-2xl shadow-lg touch-manipulation"
      style={{ boxShadow: "0 4px 20px rgba(37,211,102,.4)" }}
    >
      💬
    </motion.a>
  );
}
