// src/app/[locale]/services/page.tsx
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/locales";
import { getMessages } from "@/i18n/getMessages";
import { createT } from "@/i18n/t";

import { ServicesHero } from "@/blocks/services/hero";
import { ServicesCategories } from "@/blocks/services/categories";
import { ServicesFaq } from "@/blocks/services/faq";
import { ServicesCta } from "@/blocks/services/cta";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const messages = await getMessages(locale as Locale);
  const t = createT(messages);

  return (
    <main>
      <ServicesHero locale={locale as Locale} t={t} />
      <ServicesCategories t={t} />
      <ServicesFaq t={t} />
      <ServicesCta locale={locale as Locale} t={t} />
    </main>
  );
}
