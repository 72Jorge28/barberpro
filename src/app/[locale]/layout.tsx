// src/app/[locale]/layout.tsx
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/locales";
import { getMessages } from "@/i18n/getMessages";
import { I18nProvider } from "@/i18n/provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

type Params = { locale: string };

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<Params>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  const safeLocale: Locale = locale;
  const messages = await getMessages(safeLocale);

  return (
    <I18nProvider locale={safeLocale} messages={messages}>
      <div className="min-h-dvh bg-[hsl(var(--bg))] text-[hsl(var(--fg))]">
        <Navbar locale={safeLocale} />
        {children}
        <Footer locale={safeLocale} />
      </div>
    </I18nProvider>
  );
}
