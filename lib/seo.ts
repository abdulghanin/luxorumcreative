// lib/seo.ts
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/constants";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
  publishedTime?: string;
};

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_CONFIG.url).toString();
}

export function createPageMetadata({
  title,
  description,
  path = "/",
  type = "website",
  publishedTime,
}: MetadataInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type,
      title,
      description,
      url,
      siteName: SITE_CONFIG.name,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: SITE_CONFIG.name }],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}
