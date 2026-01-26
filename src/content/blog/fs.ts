import fs from "node:fs";
import path from "node:path";
import type { Locale } from "@/i18n/locales";

function blogDir(locale: Locale) {
  return path.join(process.cwd(), "src", "content", "blog", locale);
}

export function getAllBlogSlugs(locale: Locale): string[] {
  const dir = blogDir(locale);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
