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
    <main>
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-[hsl(var(--border))]">
        <div className="absolute inset-0 z-10">
          <Image
            src="/images/demo/hero.jpg"
            alt={t("home.hero.imageAlt")}
            fill
            className="object-cover"
            priority
          />
          {/* overlays */}
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/70 to-[hsl(var(--bg))]" />
        </div>

        <div className=" mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="py-16 sm:py-20 lg:py-24">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs text-white/90 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[hsl(var(--ring))]" />
              <span className="tracking-wide">{t("home.hero.badge")}</span>
            </div>

            {/* Kicker */}
            <p className="mt-4 text-xs tracking-[0.2em] uppercase text-white/70">
              {t("home.hero.kicker")} • {locale.toUpperCase()}
            </p>

            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              {site.brand.name}
            </h1>

            <p className="mt-4 max-w-2xl text-sm sm:text-base text-white/75">
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

            {/* Trust row */}
            <div className="mt-10 flex flex-wrap gap-2">
              {[
                `${t("home.stats.one.value")} ${t("home.stats.one.label")}`,
                `${t("home.stats.two.value")} ${t("home.stats.two.label")}`,
                `${t("home.stats.three.value")} ${t("home.stats.three.label")}`,
              ].map((txt) => (
                <span
                  key={txt}
                  className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs text-white/80 backdrop-blur"
                >
                  {txt}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <Section title={t("home.services.title")} subtitle={t("home.services.subtitle")} className="py-12 sm:py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <Card
              key={i}
              className="p-6 border border-[hsl(var(--border))] hover:-translate-y-0.5 hover:shadow-lg transition"
            >
              <div className="text-lg font-semibold">{t(`home.services.items.${i}.title`)}</div>
              <p className="mt-2 text-sm text-[hsl(var(--muted-fg))]">
                {t(`home.services.items.${i}.desc`)}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* GALLERY (layout variado) */}
      <Section title={t("home.gallery.title")} subtitle={t("home.gallery.subtitle")} className="py-12 sm:py-16">
        <div className="grid gap-3 lg:grid-cols-12">
          {/* 1 grande */}
          <Card className="overflow-hidden p-0 border border-[hsl(var(--border))] lg:col-span-6">
            <div className="relative aspect-[16/10]">
              <Image
                src="/images/demo/g1.jpg"
                alt={t("home.gallery.imageAlt")}
                fill
                className="object-cover"
              />
            </div>
          </Card>

          {/* 2 medianas */}
          <div className="grid gap-3 lg:col-span-6 sm:grid-cols-2 lg:grid-cols-2">
            {[2, 3].map((idx) => (
              <Card key={idx} className="overflow-hidden p-0 border border-[hsl(var(--border))]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={`/images/demo/g${(idx % 3) + 1}.jpg`}
                    alt={t("home.gallery.imageAlt")}
                    fill
                    className="object-cover"
                  />
                </div>
              </Card>
            ))}
          </div>

          {/* 3 normales */}
          {[4, 5, 6].map((idx) => (
            <Card key={idx} className="overflow-hidden p-0 border border-[hsl(var(--border))] lg:col-span-4">
              <div className="relative aspect-[4/3]">
                <Image
                  src={`/images/demo/g${(idx % 3) + 1}.jpg`}
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
      <Section title={t("home.cta.title")} subtitle={t("home.cta.subtitle")} className="py-12 sm:py-16">
        <Card className="p-6 sm:p-8 border border-[hsl(var(--border))] flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-[hsl(var(--muted-fg))]">{t("home.cta.note")}</div>
          <div className="flex flex-col sm:flex-row gap-3">
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
