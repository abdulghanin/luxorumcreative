"use client";
// components/home/AISection.tsx
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SectionLabel } from "@/components/shared/SectionLabel";

const aiServices = [
  { icon: "🤖", text: "Multilingual AI Chatbot (Arabic & English)" },
  { icon: "📊", text: "Data Analytics & Sales Forecasting" },
  { icon: "⚙️", text: "Business Process Automation" },
  { icon: "✍️", text: "AI-Powered Content Generation" },
  { icon: "🔍", text: "Sentiment Analysis & Brand Monitoring" },
];

const chatReplies = [
  "Great question! Our pricing depends on project scope, custom features, and timeline. Want to schedule a free 30-min consultation? 📅",
  "We'd love to help! Our services are tailored for the Gulf market and delivered in both English and Arabic. 🌟",
  "Absolutely — we provide end-to-end solutions. Reach out via WhatsApp or fill in the contact form and we'll get back within 24h. ✅",
];

interface Msg { role: "bot" | "user"; text: string; }

export function AISection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "bot",  text: "Hi! I'm Luxorum's AI assistant. How can I help you today? 👋" },
    { role: "user", text: "How much does a website cost?" },
    { role: "bot",  text: "Great question! Our pricing depends on project scope, custom features, and timeline. Want to schedule a free 30-min consultation? 🚀" },
  ]);
  const [input, setInput] = useState("");
  const [replyIdx, setReplyIdx] = useState(0);
  const [typing, setTyping] = useState(false);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setMsgs(p => [...p, { role: "user", text }]);
    setInput(""); setTyping(true);
    setTimeout(() => {
      setMsgs(p => [...p, { role: "bot", text: chatReplies[replyIdx % chatReplies.length] }]);
      setReplyIdx(i => i + 1); setTyping(false);
    }, 900);
  };

  return (
    <section ref={ref} id="ai" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: "linear-gradient(135deg,rgba(99,102,241,.04) 0%,rgba(168,85,247,.04) 100%)", borderTop: "1px solid #1E293B", borderBottom: "1px solid #1E293B" }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 items-center">

        {/* Text */}
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <SectionLabel>AI Solutions</SectionLabel>
            <h2 className="text-[clamp(1.7rem,4vw,3rem)] font-bold leading-tight mb-4">
              The Future of Your Business<br />Starts with AI
            </h2>
            <p className="text-[#94A3B8] mb-7 sm:mb-8 text-sm sm:text-base max-w-lg">
              We help Gulf businesses leverage the latest AI technologies to gain a real competitive edge and scale operations intelligently.
            </p>
          </motion.div>

          <div className="flex flex-col gap-3">
            {aiServices.map((s, i) => (
              <motion.div key={s.text}
                initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="flex items-center gap-3 bg-[#111827] border border-[#1E293B] rounded-xl px-4 py-3.5 hover:border-[#6366F1]/40 transition-colors">
                <span className="text-lg sm:text-xl flex-shrink-0">{s.icon}</span>
                <span className="text-xs sm:text-sm font-medium">{s.text}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Chat demo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-[#111827] border border-[#1E293B] rounded-2xl p-4 sm:p-6">
          <p className="text-xs text-[#94A3B8] text-center mb-4">Preview — Luxorum AI Chatbot</p>

          {/* Messages */}
          <div className="flex flex-col gap-3 max-h-64 sm:max-h-72 overflow-y-auto mb-4 px-0.5">
            {msgs.map((m, i) => (
              <div key={i} className={`max-w-[82%] px-3.5 py-2.5 rounded-xl text-xs sm:text-sm leading-relaxed ${
                m.role === "bot"
                  ? "self-start bg-[#6366F1]/10 border border-[#6366F1]/20 text-[#F8FAFC] rounded-tl-sm"
                  : "self-end bg-[#6366F1] text-white rounded-tr-sm"
              }`}>
                {m.text}
              </div>
            ))}
            {typing && (
              <div className="self-start flex gap-1.5 px-3.5 py-2.5 bg-[#6366F1]/10 border border-[#6366F1]/20 rounded-xl">
                {[0,1,2].map(d => (
                  <motion.div key={d} animate={{ y:[0,-4,0], opacity:[.4,1,.4] }}
                    transition={{ repeat: Infinity, duration: 1.2, delay: d * 0.2 }}
                    className="w-1.5 h-1.5 bg-[#94A3B8] rounded-full" />
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="flex gap-2">
            <input value={input} onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && send()}
              placeholder="Type a message..."
              className="flex-1 bg-[#0B0F19] border border-[#1E293B] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#F8FAFC] placeholder:text-[#475569] outline-none focus:border-[#6366F1] transition-colors min-w-0" />
            <button onClick={send}
              className="bg-[#6366F1] hover:bg-[#818CF8] text-white px-3.5 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0">
              Send
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
