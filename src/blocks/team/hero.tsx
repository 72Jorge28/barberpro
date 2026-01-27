// src/blocks/team/hero.tsx
import Image from "next/image";
import type { Locale } from "@/i18n/locales";
import { site } from "@/config/site";
import { Button } from "@/components/ui/button";

type TFunction = (key: string, vars?: Record<string, string | number>) => string;

export function TeamHero({ locale, t }: { locale: Locale; t: TFunction }) {
  return (
    <section className="relative isolate overflow-hidden border-b border-[hsl(var(--border))]">
      {/* Background image FULL */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src={site.media.teamHero}
          alt={t("team.hero.imageAlt")}
          fill
          priority
          className="object-cover object-center"
        />
        {/* Oscurecer + overlay premium */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_20%_10%,rgba(255,255,255,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/45 to-[hsl(var(--bg))]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="py-14 sm:py-18 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left: photo area + inset */}
            <div className="lg:col-span-6">
              <div className="relative">
                {/* Main photo block (editorial) */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-[var(--shadow-md)]">
                  <Image
                    src={site.media.teamHero}
                    alt={t("team.hero.imageAlt")}
                    fill
                    className="object-cover object-center"
                  />
                  {/* Light overlay so text side feels coherent */}
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* Inset small image (same as reference) */}
                <div className="absolute -top-6 right-6 w-[46%] sm:w-[40%]">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/15 bg-black/20 shadow-[var(--shadow-lg)]">
                    <Image
                      src={site.media.teamHeroInset}
                      alt={t("team.hero.insetAlt")}
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 ring-1 ring-white/10" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: copy */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-white/10 bg-black/25 p-6 sm:p-8 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.25em] text-white/70">
                  {t("team.hero.kicker")}
                </p>

                <h1 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                  {t("team.hero.title")}
                </h1>

                <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/75">
                  {t("team.hero.subtitle")}
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button
                    href={`/${locale}/booking`}
                    variant="primary"
                    className="w-full sm:w-auto"
                  >
                    {t("team.hero.ctaPrimary")}
                  </Button>

                  <Button
                    href={site.links.instagram}
                    variant="secondary"
                    className="w-full sm:w-auto"
                  >
                    {t("team.hero.ctaSecondary")}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Espacio abajo como tu HomeHero */}
          <div className="h-8 sm:h-12" />
        </div>
      </div>
    </section>
  );
}
