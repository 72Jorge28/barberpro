import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/locales";
import { getMessages } from "@/i18n/getMessages";
import { createT } from "@/i18n/t";

import { TeamHero } from "@/blocks/team/hero";
import { TeamValues } from "@/blocks/team/values";
import { TeamMembers } from "@/blocks/team/members";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const messages = await getMessages(locale);
  const t = createT(messages);

  return (
    <main>
      <TeamHero locale={locale} t={t} />
      <TeamValues t={t} />
      <TeamMembers t={t} />
    </main>
  );
}
