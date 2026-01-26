// src/app/[locale]/layout.tsx
import { notFound } from "next/navigation";
import { isLocale, Locale } from "@/i18n/locales";
import { getMessages } from "@/i18n/getMessages";
import { I18nProvider } from "@/i18n/provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const messages = await getMessages(locale);

  return (
    <I18nProvider locale={locale} messages={messages}>
      <div className="min-h-dvh bg-[hsl(var(--bg))] text-[hsl(var(--fg))]">
        <Navbar locale={locale as Locale} />
        {children}
        <Footer locale={locale as Locale} />
      </div>
    </I18nProvider>
  );
}
