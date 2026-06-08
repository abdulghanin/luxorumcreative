import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background:       "#0B0F19",
        card:             "#111827",
        "primary-text":   "#F8FAFC",
        "secondary-text": "#94A3B8",
        accent:           "#6366F1",
        "accent-hover":   "#818CF8",
        border:           "#1E293B",
        success:          "#10B981",
        warning:          "#F59E0B",
      },
      fontFamily: {
        sans:    ["Inter", "sans-serif"],
        arabic:  ["IBM Plex Sans Arabic", "sans-serif"],
      },
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      animation: {
        "fade-up":  "fadeUp 0.8s ease forwards",
        "fade-in":  "fadeIn 0.6s ease forwards",
        "spin-slow":"spin 2s linear infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
      },
      height: { screen: "100dvh" },
      minHeight: { screen: "100dvh" },
    },
  },
  plugins: [],
};

export default config;
