// src/blocks/home/hero.tsx
import Image from "next/image";
import { site } from "@/config/site";
import type { Locale } from "@/i18n/locales";
import { Button } from "@/components/ui/button";

type Props = {
  locale: Locale;
  t: (key: string) => string;
};

export function HomeHero({ locale, t }: Props) {
  return (
    <section className="relative isolate overflow-hidden border-b border-[hsl(var(--border))]">
      {/* Background (siempre detrás) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/images/demo/hero.jpg"
          alt={t("home.hero.imageAlt")}
          fill
          priority
          className="object-cover object-center"
        />

        {/* Overlay premium: radial + vignette + gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_20%_10%,rgba(255,255,255,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_80%_0%,rgba(0,0,0,0.55),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/60 to-[hsl(var(--bg))]" />
      </div>

      {/* Content */}
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="py-14 sm:py-18 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left */}
            <div className="lg:col-span-7">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs text-white/90 backdrop-blur">
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

              {/* CTAs (mobile-first: columna) */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button href={`/${locale}/booking`} variant="primary" className="w-full sm:w-auto">
                  {t("home.hero.ctaPrimary")}
                </Button>
                <Button href={`/${locale}/services`} variant="secondary" className="w-full sm:w-auto">
                  {t("home.hero.ctaSecondary")}
                </Button>
                <Button href={site.links.instagram} variant="ghost" className="w-full sm:w-auto">
                  Instagram
                </Button>
              </div>

              {/* Trust pills (perfecto para móvil) */}
              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  `${t("home.stats.one.value")} ${t("home.stats.one.label")}`,
                  `${t("home.stats.two.value")} ${t("home.stats.two.label")}`,
                  `${t("home.stats.three.value")} ${t("home.stats.three.label")}`,
                ].map((txt) => (
                  <span
                    key={txt}
                    className="rounded-full border border-white/15 bg-black/25 px-3 py-1 text-xs text-white/80 backdrop-blur"
                  >
                    {txt}
                  </span>
                ))}
              </div>
            </div>

            {/* Right (solo desktop para “premium look”) */}
            <div className="hidden lg:block lg:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-black/25 p-5 backdrop-blur">
                <div className="text-sm font-semibold text-white">
                  {t("home.hero.title")}
                </div>

                <ul className="mt-3 space-y-2 text-sm text-white/75">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[hsl(var(--ring))]" />
                    {t("home.hero.bullet1")}
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[hsl(var(--ring))]" />
                    {t("home.hero.bullet2")}
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[hsl(var(--ring))]" />
                    {t("home.hero.bullet3")}
                  </li>
                </ul>

                <div className="mt-5 grid grid-cols-3 gap-2">
                  <div className="rounded-xl border border-white/10 bg-black/25 p-3 text-center">
                    <div className="text-white font-semibold">{t("home.stats.one.value")}</div>
                    <div className="mt-1 text-xs text-white/70">{t("home.stats.one.label")}</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/25 p-3 text-center">
                    <div className="text-white font-semibold">{t("home.stats.two.value")}</div>
                    <div className="mt-1 text-xs text-white/70">{t("home.stats.two.label")}</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/25 p-3 text-center">
                    <div className="text-white font-semibold">{t("home.stats.three.value")}</div>
                    <div className="mt-1 text-xs text-white/70">{t("home.stats.three.label")}</div>
                  </div>
                </div>

                <div className="mt-5">
                  <Button href={site.links.whatsapp} variant="secondary" className="w-full">
                    {t("nav.cta.whatsapp")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fade abajo para que “cierre” bonito en móvil */}
        <div className="h-10 sm:h-14" />
      </div>
    </section>
  );
}
