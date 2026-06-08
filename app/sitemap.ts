// app/sitemap.ts
import { MetadataRoute } from "next";
import { SITE_CONFIG, BLOG_POSTS } from "@/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages = [
    { url: SITE_CONFIG.url,                         priority: 1.0, changeFrequency: "weekly"  as const },
    { url: `${SITE_CONFIG.url}/services`,           priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${SITE_CONFIG.url}/ai-solutions`,       priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${SITE_CONFIG.url}/portfolio`,          priority: 0.8, changeFrequency: "weekly"  as const },
    { url: `${SITE_CONFIG.url}/about`,              priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${SITE_CONFIG.url}/blog`,               priority: 0.8, changeFrequency: "weekly"  as const },
    { url: `${SITE_CONFIG.url}/contact`,            priority: 0.8, changeFrequency: "monthly" as const },
  ];
  const blogPages = BLOG_POSTS.map(post => ({
    url: `${SITE_CONFIG.url}/blog/${post.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
    lastModified: new Date(post.date),
  }));
  return [
    ...staticPages.map(p => ({ ...p, lastModified: now })),
    ...blogPages,
  ];
}
