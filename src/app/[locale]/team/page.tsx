// src/app/[locale]/team/page.tsx
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/locales";
import { getMessages } from "@/i18n/getMessages";
import { createT } from "@/i18n/t";

import { TeamHero } from "@/blocks/team/hero";
import { TeamValues } from "@/blocks/team/values";
import { TeamMembers } from "@/blocks/team/members";

type Params = { locale: string };

export default async function Page({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const safeLocale: Locale = locale;

  const messages = await getMessages(safeLocale);
  const t = createT(messages);

  return (
    <main>
      <TeamHero locale={safeLocale} t={t} />
      <TeamValues t={t} />
      <TeamMembers t={t} />
    </main>
  );
}
