// src/app/[locale]/blog/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { locales, isLocale, type Locale } from "@/i18n/locales";
import { site } from "@/config/site";
import { getAllPosts } from "@/content/blog/posts";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams(): Array<{ locale: Locale }> {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  return buildMetadata({
    locale,
    title: "Blog",
    description:
      locale === "es"
        ? "Consejos de estilo, cuidado y tendencias."
        : "Style tips, grooming, and trends.",
    path: `/${locale}/blog`,
    noIndex: !site.features.blog.enabled,
  });
}

export default async function BlogIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const safeLocale: Locale = locale;

  if (!site.features.blog.enabled) notFound();

  const posts = getAllPosts(safeLocale);

  return (
    <main>
      <Section
        title="Blog"
        subtitle={safeLocale === "es" ? "Artículos y consejos." : "Articles and tips."}
        className="pt-10"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {posts.map((p) => (
            <Link key={p.slug} href={`/${safeLocale}/blog/${p.slug}`}>
              <Card className="p-6 transition hover:opacity-95">
                <div className="text-xs text-[hsl(var(--muted-fg))]">{p.date}</div>
                <div className="mt-2 text-lg font-semibold">{p.title}</div>
                <p className="mt-2 text-sm text-[hsl(var(--muted-fg))]">{p.excerpt}</p>
              </Card>
            </Link>
          ))}

          {posts.length === 0 && (
            <Card className="p-6">
              <p className="text-sm text-[hsl(var(--muted-fg))]">
                {safeLocale === "es" ? "No hay posts aún." : "No posts yet."}
              </p>
            </Card>
          )}
        </div>
      </Section>
    </main>
  );
}
