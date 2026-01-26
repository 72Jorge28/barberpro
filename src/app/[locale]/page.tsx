// src/app/[locale]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/locales";
import { getMessages } from "@/i18n/getMessages";
import { createT } from "@/i18n/t";
import { site } from "@/config/site";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const messages = await getMessages(locale);
  const t = createT(messages);

  return (
    <main className="bg-shell">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 -z-10 opacity-30">
          <Image
            src="/images/demo/hero.jpg"
            alt={t("home.hero.imageAlt")}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black" />
        </div>

        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="py-16 sm:py-20 lg:py-24">
            <p className="text-xs tracking-widest uppercase text-[hsl(var(--muted-fg))]">
              {t("home.hero.kicker")} • {locale.toUpperCase()}
            </p>

            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
              {site.brand.name}
            </h1>

            <p className="mt-4 max-w-2xl text-sm sm:text-base text-[hsl(var(--muted-fg))]">
              {t("home.hero.subtitle")}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={`/${locale}/booking`} variant="primary">
                {t("home.hero.ctaPrimary")}
              </Button>
              <Button href={`/${locale}/services`} variant="secondary">
                {t("home.hero.ctaSecondary")}
              </Button>
              <Button href={site.links.instagram} variant="ghost">
                Instagram
              </Button>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <Card className="p-5">
                <div className="text-2xl font-semibold">{t("home.stats.one.value")}</div>
                <div className="mt-1 text-sm text-[hsl(var(--muted-fg))]">
                  {t("home.stats.one.label")}
                </div>
              </Card>
              <Card className="p-5">
                <div className="text-2xl font-semibold">{t("home.stats.two.value")}</div>
                <div className="mt-1 text-sm text-[hsl(var(--muted-fg))]">
                  {t("home.stats.two.label")}
                </div>
              </Card>
              <Card className="p-5">
                <div className="text-2xl font-semibold">{t("home.stats.three.value")}</div>
                <div className="mt-1 text-sm text-[hsl(var(--muted-fg))]">
                  {t("home.stats.three.label")}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <Section title={t("home.services.title")} subtitle={t("home.services.subtitle")}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <Card key={i} className="p-6">
              <div className="text-lg font-semibold">{t(`home.services.items.${i}.title`)}</div>
              <p className="mt-2 text-sm text-[hsl(var(--muted-fg))]">{t(`home.services.items.${i}.desc`)}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* GALLERY */}
      <Section title={t("home.gallery.title")} subtitle={t("home.gallery.subtitle")}>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} className="overflow-hidden p-0">
              <div className="relative aspect-[4/3]">
                <Image
                  src={`/images/demo/g${(i % 3) + 1}.jpg`}
                  alt={t("home.gallery.imageAlt")}
                  fill
                  className="object-cover"
                />
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section title={t("home.cta.title")} subtitle={t("home.cta.subtitle")}>
        <Card className="p-6 sm:p-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-[hsl(var(--muted-fg))]">{t("home.cta.note")}</div>
          <div className="flex gap-3">
            <Button href={`/${locale}/booking`} variant="primary">
              {t("home.cta.primary")}
            </Button>
            <Button href={site.links.whatsapp} variant="secondary">
              WhatsApp
            </Button>
          </div>
        </Card>
      </Section>
    </main>
  );
}
