// src/app/[locale]/page.tsx
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/locales";
import { getMessages } from "@/i18n/getMessages";
import { createT } from "@/i18n/t";

import { HomeHero } from "@/blocks/home/hero";
import { HomeServices } from "@/blocks/home/services";
import { HomeGallery } from "@/blocks/home/gallery";
import { HomeCta } from "@/blocks/home/cta";

type Params = { locale: string } | Promise<{ locale: string }>;

export default async function HomePage({ params }: { params: Params }) {
  const { locale } = await Promise.resolve(params);
  if (!isLocale(locale)) notFound();

  const safeLocale: Locale = locale;

  const messages = await getMessages(safeLocale);
  const t = createT(messages);

  return (
    <main>
      <HomeHero locale={safeLocale} t={t} />
      <HomeServices t={t} />
      <HomeGallery t={t} />
      <HomeCta locale={safeLocale} t={t} />
    </main>
  );
}
