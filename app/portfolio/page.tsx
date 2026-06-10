// app/portfolio/page.tsx
import type { Metadata } from "next";
import { PortfolioClient } from "@/components/portfolio/PortfolioClient";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Portfolio | Luxorum Creative",
  description: "Selected branding, web development, e-commerce, and AI projects delivered for clients across the UAE and Gulf.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return <PortfolioClient />;
}
