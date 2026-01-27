// src/app/[locale]/page.tsx  (tu Home está bien; lo dejo igual, solo consistente con safeLocale)
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/locales";
import { getMessages } from "@/i18n/getMessages";
import { createT } from "@/i18n/t";

import { HomeHero } from "@/blocks/home/hero";
import { HomeServices } from "@/blocks/home/services";
import { HomeGallery } from "@/blocks/home/gallery";
import { HomeCta } from "@/blocks/home/cta";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const safeLocale = locale as Locale;
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
