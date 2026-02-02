// src/app/[locale]/services/page.tsx
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/locales";
import { getMessages } from "@/i18n/getMessages";
import { createT } from "@/i18n/t";

import { ServicesHero } from "@/blocks/services/hero";
import { ServicesCategories } from "@/blocks/services/categories";
import { ServicesFaq } from "@/blocks/services/faq";
import { ServicesCta } from "@/blocks/services/cta";

type Params = { locale: string } | Promise<{ locale: string }>;

export default async function ServicesPage({ params }: { params: Params }) {
  const { locale } = await Promise.resolve(params);
  if (!isLocale(locale)) notFound();

  const safeLocale: Locale = locale;

  const messages = await getMessages(safeLocale);
  const t = createT(messages);

  return (
    <main>
      <ServicesHero locale={safeLocale} t={t} />
      <ServicesCategories t={t} />
      <ServicesFaq t={t} />
      <ServicesCta locale={safeLocale} t={t} />
    </main>
  );
}
