import type { MetadataRoute } from "next";
import { locales, type Locale } from "@/i18n/locales";
import { site } from "@/config/site";
import { getAllBlogSlugs } from "@/content/blog/fs";

function baseUrl() {
  return (site.url || "https://example.com").replace(/\/$/, "");
}

function absoluteUrl(path: string) {
  const base = baseUrl();
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/services",
    "/pricing",
    "/team",
    "/gallery",
    "/booking",
    "/contact",
    "/legal/privacy",
    "/legal/terms",
    "/blog",
  ];

  const now = new Date();
  const items: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const p of staticPaths) {
      items.push({
        url: absoluteUrl(`/${locale}${p}`),
        lastModified: now,
      });
    }

    const slugs = getAllBlogSlugs(locale as Locale);
    for (const slug of slugs) {
      items.push({
        url: absoluteUrl(`/${locale}/blog/${slug}`),
        lastModified: now,
      });
    }
  }

  return items;
}
