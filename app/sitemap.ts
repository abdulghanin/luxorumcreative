// app/sitemap.ts
import { MetadataRoute } from "next";
import { SITE_CONFIG, BLOG_POSTS, SERVICES, PROJECTS } from "@/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Core static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_CONFIG.url, priority: 1.0, changeFrequency: "weekly" },
    { url: `${SITE_CONFIG.url}/services`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${SITE_CONFIG.url}/ai-solutions`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${SITE_CONFIG.url}/portfolio`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${SITE_CONFIG.url}/about`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${SITE_CONFIG.url}/blog`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${SITE_CONFIG.url}/contact`, priority: 0.8, changeFrequency: "monthly" },
  ];

  // NOTE: Only include these if they are ACTUAL dedicated pages (e.g., /services/seo).
  // Do NOT use `/services#slug` - Google will ignore it.
  // Assuming you create dynamic routes for them:
  const servicePages: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${SITE_CONFIG.url}/services/${service.slug}`,
    priority: 0.8,
    changeFrequency: "monthly",
    lastModified: now,
  }));

  const projectPages: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
    url: `${SITE_CONFIG.url}/portfolio/${project.id}`,
    priority: 0.7,
    changeFrequency: "monthly",
    lastModified: now,
  }));

  // Blog pages
  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE_CONFIG.url}/blog/${post.slug}`,
    priority: 0.75,
    changeFrequency: "weekly",
    lastModified: new Date(post.date),
  }));

  return [
    ...staticPages.map((p) => ({ ...p, lastModified: now })),
    ...servicePages, // Remove this line if you don't have dedicated routes
    ...projectPages, // Remove this line if you don't have dedicated routes
    ...blogPages,
  ];
}