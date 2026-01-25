import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { isLocale, type Locale } from "@/i18n/locales";
import { getMessages } from "@/i18n/messages";
import { createT } from "@/i18n/t";
import { notFound } from "next/navigation";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  const messages = await getMessages(locale as Locale);
  const t = createT(messages);

  return (
    <>
      <Navbar locale={locale as Locale} t={t} />
      {children}
      <Footer locale={locale as Locale} t={t} />
    </>
  );
}
