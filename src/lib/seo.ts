import type { Metadata } from "next";
import type { Locale } from "@/i18n/locales";
import { site } from "@/config/site";

type SeoInput = {
  locale: Locale;
  title: string;
  description: string;
  path: string; // "/es", "/en/blog"
  ogImagePath?: string;
  noIndex?: boolean;
};

function baseUrl() {
  return (site.url || "https://example.com").replace(/\/$/, "");
}

function absoluteUrl(path: string) {
  const base = baseUrl();
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildMetadata(input: SeoInput): Metadata {
  const url = absoluteUrl(input.path);
  const ogImage = absoluteUrl(input.ogImagePath || site.ogImage || "/images/og.jpg");

  const title = `${input.title} | ${site.brand.name}`;
  const description = input.description;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        es: absoluteUrl(input.path.replace(/^\/(en|es)/, "/es")),
        en: absoluteUrl(input.path.replace(/^\/(en|es)/, "/en")),
      },
    },
    robots: input.noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: input.locale,
      url,
      title,
      description,
      siteName: site.brand.name,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
