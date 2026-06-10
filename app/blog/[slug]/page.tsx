// app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/constants";
import { formatDate } from "@/lib/utils";
import { createPageMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return BLOG_POSTS.map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);
  if (!post) return {};
  return createPageMetadata({
    title: `${post.titleAr} | Luxorum Creative`,
    description: post.excerptAr,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
  });
}

const postContent: Record<string, { intro: string; sections: { heading: string; body: string }[] }> = {
  "ai-business-gulf": {
    intro: "The Arab world is experiencing an accelerating digital transformation, with the UAE leading the charge through a clear strategic vision toward an AI-powered economy.",
    sections: [
      { heading: "The Numbers Don't Lie", body: "Gulf companies that have adopted AI report productivity gains of up to 40%, alongside significant reductions in operational costs. From automated customer service to predictive inventory management, AI is no longer a luxury — it's a competitive necessity." },
      { heading: "What We're Seeing in the Market", body: "At Luxorum Creative, we work with businesses across the UAE, Saudi Arabia, and the wider Gulf to integrate AI solutions into the core of their operations. The most impactful applications we see: AI-powered customer service chatbots in Arabic and English, automated sales and CRM workflows, consumer behavior analytics, and personalized e-commerce experiences." },
      { heading: "The Window of Opportunity", body: "Companies that move today will be in a leadership position tomorrow — this isn't hyperbole, it's a reality proven by data every single day. The Gulf market is uniquely positioned to leapfrog traditional digital maturity stages and adopt AI-first approaches from the ground up." },
      { heading: "How Luxorum Can Help", body: "We don't just consult — we build and implement. Whether you need a custom chatbot, a business automation workflow, or a full AI strategy, our team handles everything from architecture to deployment, with full Arabic language support." },
    ],
  },
  "web-design-trends-2025": {
    intro: "2025 brings a revolution in web design — from AI-powered user interfaces to hyper-personalized experiences tailored to each individual visitor.",
    sections: [
      { heading: "Key Trends Shaping the Year", body: "The biggest shifts we're tracking: interactive 3D elements that respond to user input, micro-animations that guide attention without distraction, and inclusive design systems that serve all users regardless of ability or device." },
      { heading: "The Gulf Market Perspective", body: "In the Gulf market specifically, we're seeing growing demand for designs that blend Arabic cultural identity with a modern, premium aesthetic — exactly what we specialize in at Luxorum. Bilingual experiences that feel native in both directions, not just translated." },
      { heading: "Performance Is Non-Negotiable", body: "Performance and load speed remain top priorities, especially as mobile usage continues to dominate in our region. Google's Core Web Vitals are now a direct ranking factor, meaning beautiful design must be paired with technical excellence." },
      { heading: "Design Systems & Scalability", body: "Data-driven design has become a standard, not a luxury — every design decision should be grounded in real user behavior. We help clients instrument their sites from day one, building a feedback loop that continuously improves conversion." },
    ],
  },
  "brand-identity-importance": {
    intro: "Brand identity isn't just a pretty logo — it's the complete system that determines how the world perceives your brand, your pricing power, and your ability to attract the right customers and partners.",
    sections: [
      { heading: "A Real-World Case Study", body: "In a genuine case study with one of our clients in Dubai, rebuilding the visual identity achieved a 180% increase in conversion rates within 6 months — without changing a single word of their marketing copy. The product didn't change. The perception did." },
      { heading: "The Investment Argument", body: "Investing in brand identity builds trust, raises acceptable price points, and attracts higher-quality partners and employees. It reduces the cost of customer acquisition over time and creates a moat that competitors can't easily replicate." },
      { heading: "The Core Components", body: "The essential components of a strong visual identity: the logo (primary, secondary, icon variants), color palette with usage rules, typography system, image and photography style, and brand voice and tone guidelines. Each element must work harmoniously across every touchpoint." },
      { heading: "Our Approach at Luxorum", body: "We build complete visual identities backed by a clear strategy — because we believe beauty alone isn't enough without purpose. Our process starts with discovery, moves through concept and refinement, and ends with a comprehensive brand guidelines document your whole team can use." },
    ],
  },
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);
  if (!post) notFound();

  const content = postContent[slug];

  return (
    <article className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#94A3B8] mb-6 sm:mb-8 flex-wrap">
          <Link href="/" className="hover:text-[#6366F1] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#6366F1] transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-[#F8FAFC]">{post.categoryAr}</span>
        </nav>

        {/* Meta */}
        <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-6 flex-wrap">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[2px] text-[#6366F1]">{post.categoryAr}</span>
          <span className="text-xs text-[#475569]">·</span>
          <span className="text-xs text-[#475569]">{post.readTime} read</span>
          <span className="text-xs text-[#475569]">·</span>
          <span className="text-xs text-[#475569]">{formatDate(post.date)}</span>
        </div>

        {/* Title */}
        <h1 className="text-[clamp(1.7rem,4vw,2.8rem)] font-bold leading-tight mb-6">{post.titleAr}</h1>

        {/* Thumbnail */}
        <div className="w-full h-48 sm:h-64 rounded-2xl flex items-center justify-center text-6xl sm:text-7xl mb-8 sm:mb-10 overflow-hidden"
          style={{ background: post.gradient }} />

        {/* Content */}
        {content ? (
          <div>
            <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 text-lg">
              {content.intro}
            </p>
            {content.sections.map((section, i) => (
              <div key={i} className="mb-6 sm:mb-8">
                <h2 className="text-base sm:text-lg font-semibold mb-3 text-[#F8FAFC]">{section.heading}</h2>
                <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed">{post.excerptAr}</p>
        )}

        {/* CTA box */}
        <div className="mt-10 sm:mt-12 p-6 sm:p-8 rounded-2xl text-center border"
          style={{ background: "rgba(99,102,241,.05)", borderColor: "rgba(99,102,241,.2)" }}>
          <h3 className="font-semibold mb-2 text-sm sm:text-base">Want to apply these ideas to your project?</h3>
          <p className="text-xs sm:text-sm text-[#94A3B8] mb-5">Book a free consultation with the Luxorum team</p>
          <Link href="/contact">
            <button className="w-full sm:w-auto bg-[#6366F1] hover:bg-[#818CF8] text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors">
              Book Free Consultation →
            </button>
          </Link>
        </div>

        {/* Back */}
        <div className="mt-6 sm:mt-8">
          <Link href="/blog" className="text-sm text-[#94A3B8] hover:text-[#6366F1] transition-colors flex items-center gap-1.5">
            ← Back to Blog
          </Link>
        </div>
      </div>
    </article>
  );
}
