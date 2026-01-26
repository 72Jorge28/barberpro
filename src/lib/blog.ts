import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Locale } from "@/i18n/locales";

export type BlogFrontmatter = {
  title: string;
  description: string;
  date?: string; // ISO string recommended
  ogImage?: string; // e.g. "/images/blog/first-cut-og.jpg"
};

function blogDir(locale: Locale) {
  return path.join(process.cwd(), "src", "content", "blog", locale);
}

function postPath(locale: Locale, slug: string) {
  return path.join(blogDir(locale), `${slug}.mdx`);
}

export function getAllBlogSlugs(locale: Locale): string[] {
  const dir = blogDir(locale);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getBlogFrontmatter(locale: Locale, slug: string): BlogFrontmatter | null {
  const p = postPath(locale, slug);
  if (!fs.existsSync(p)) return null;

  const raw = fs.readFileSync(p, "utf8");
  const { data } = matter(raw);

  // Minimal validation + safe fallbacks
  const title = typeof data.title === "string" ? data.title : slug;
  const description = typeof data.description === "string" ? data.description : "";

  const fm: BlogFrontmatter = {
    title,
    description,
  };

  if (typeof data.date === "string") fm.date = data.date;
  if (typeof data.ogImage === "string") fm.ogImage = data.ogImage;

  return fm;
}

export function getAllBlogIndex(locale: Locale) {
  return getAllBlogSlugs(locale)
    .map((slug) => {
      const fm = getBlogFrontmatter(locale, slug);
      return {
        slug,
        title: fm?.title || slug,
        description: fm?.description || "",
        date: fm?.date,
        ogImage: fm?.ogImage,
      };
    })
    .sort((a, b) => (b.date || "").localeCompare(a.date || ""));
}
