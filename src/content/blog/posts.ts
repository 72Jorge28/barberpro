import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Locale } from "@/i18n/locales";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  locale: Locale;
  filePath: string;
};

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

function getLocaleDir(locale: Locale) {
  return path.join(BLOG_DIR, locale);
}

export function getAllPosts(locale: Locale): BlogPost[] {
  const dir = getLocaleDir(locale);
  if (!fs.existsSync(dir)) return [];

  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"));

  const posts = files.map((file) => {
    const fullPath = path.join(dir, file);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(raw);

    const slug = file.replace(/\.mdx$/, "");

    return {
      slug,
      title: String(data.title ?? slug),
      date: String(data.date ?? ""),
      excerpt: String(data.excerpt ?? ""),
      locale,
      filePath: fullPath,
    } satisfies BlogPost;
  });

  // newest first (simple string sort works if ISO dates)
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  return posts;
}

export function getPostBySlug(locale: Locale, slug: string): BlogPost | null {
  const posts = getAllPosts(locale);
  return posts.find((p) => p.slug === slug) ?? null;
}
