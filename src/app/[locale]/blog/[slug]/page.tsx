// src/app/[locale]/blog/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { isLocale, locales, type Locale } from "@/i18n/locales";
import { site } from "@/config/site";
import { getPostBySlug } from "@/content/blog/posts";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";

import { buildMetadata } from "@/lib/seo";
import { getBlogFrontmatter, getAllBlogSlugs } from "@/lib/blog";

export const dynamicParams = false;

export function generateStaticParams(): Array<{ locale: Locale; slug: string }> {
  const all: Array<{ locale: Locale; slug: string }> = [];
  for (const locale of locales) {
    const slugs = getAllBlogSlugs(locale);
    for (const slug of slugs) all.push({ locale, slug });
  }
  return all;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};

  if (!site.features.blog.enabled) {
    return buildMetadata({
      locale,
      title: "Blog",
      description: "",
      path: `/${locale}/blog/${slug}`,
      noIndex: true,
    });
  }

  const fm = getBlogFrontmatter(locale, slug);
  if (!fm) {
    return buildMetadata({
      locale,
      title: locale === "es" ? "Post no encontrado" : "Post not found",
      description: "",
      path: `/${locale}/blog/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    locale,
    title: fm.title,
    description: fm.description,
    path: `/${locale}/blog/${slug}`,
    ogImagePath: fm.ogImage,
  });
}

type Params = { locale: string; slug: string };

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) notFound();
  const safeLocale: Locale = locale;

  if (!site.features.blog.enabled) notFound();

  const post = getPostBySlug(safeLocale, slug);
  if (!post) notFound();

  const mod = await import(`@/content/blog/${safeLocale}/${slug}.mdx`);
  const Content = mod.default;

  return (
    <main>
      <Section title={post.title} subtitle={post.date} className="pt-10">
        <Card className="p-6 sm:p-8">
          <article className="prose max-w-none">
            <Content />
          </article>
        </Card>
      </Section>
    </main>
  );
}
