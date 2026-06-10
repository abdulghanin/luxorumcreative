// app/blog/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/constants";
import { formatDate } from "@/lib/utils";
import { CTASection } from "@/components/home/CTASection";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Blog | Luxorum Creative",
  description: "Insights and expertise in digital design, web development, and AI solutions for Gulf businesses.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      {/* Header */}
      <div className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(99,102,241,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,.06) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center top, rgba(99,102,241,.12) 0%, transparent 60%)" }} />
        <div className="relative max-w-2xl mx-auto">
          <span className="inline-block text-xs font-semibold text-[#6366F1] tracking-[3px] uppercase mb-4">Blog</span>
          <h1 className="text-[clamp(2rem,5vw,4rem)] font-bold leading-tight mb-4">
            Insights &amp; Ideas<br />
            <span style={{ background: "linear-gradient(135deg,#6366F1,#a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              for Digital Leaders
            </span>
          </h1>
          <p className="text-[#94A3B8] text-base sm:text-lg">
            Expert articles on design, development, and AI for Gulf businesses.
          </p>
        </div>
      </div>

      {/* Posts */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Featured post */}
          {BLOG_POSTS[0] && (
            <Link href={`/blog/${BLOG_POSTS[0].slug}`} className="block group mb-5 sm:mb-8">
              <div className="bg-[#111827] border border-[#1E293B] rounded-2xl overflow-hidden hover:border-[#6366F1]/30 hover:-translate-y-1 transition-all duration-300 grid grid-cols-1 lg:grid-cols-2">
                <div className="h-48 sm:h-64 lg:h-auto flex items-center justify-center text-5xl sm:text-6xl"
                  style={{ background: BLOG_POSTS[0].gradient }} />
                <div className="p-5 sm:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#6366F1]">{BLOG_POSTS[0].categoryAr}</span>
                    <span className="text-xs text-[#475569]">{BLOG_POSTS[0].readTime} read</span>
                    <span className="hidden sm:inline text-xs text-[#475569]">· Featured</span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-[#6366F1] transition-colors leading-snug">
                    {BLOG_POSTS[0].titleAr}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-4 line-clamp-3">{BLOG_POSTS[0].excerptAr}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#475569]">{formatDate(BLOG_POSTS[0].date)}</span>
                    <span className="text-sm text-[#6366F1] font-medium">Read Article →</span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Other posts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {BLOG_POSTS.slice(1).map(post => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="block group">
                <div className="bg-[#111827] border border-[#1E293B] rounded-2xl overflow-hidden hover:border-[#6366F1]/30 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  <div className="h-40 sm:h-48 flex items-center justify-center text-4xl sm:text-5xl flex-shrink-0"
                    style={{ background: post.gradient }} />
                  <div className="p-4 sm:p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-2 sm:mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#6366F1]">{post.categoryAr}</span>
                      <span className="text-xs text-[#475569]">{post.readTime} read</span>
                    </div>
                    <h2 className="font-semibold text-sm sm:text-base mb-2 group-hover:text-[#6366F1] transition-colors leading-snug flex-1">
                      {post.titleAr}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-4 line-clamp-2">{post.excerptAr}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-xs text-[#475569]">{formatDate(post.date)}</span>
                      <span className="text-xs text-[#6366F1] font-medium">Read More →</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
