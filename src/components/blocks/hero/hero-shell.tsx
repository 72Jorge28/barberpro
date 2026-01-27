// src/components/blocks/hero/hero-shell.tsx
import Image from "next/image";
import type { Locale } from "@/i18n/locales";
import { Button } from "@/components/ui/button";

type Cta = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
};

type Stat = { value: string; label: string };

type RightPanel = {
  title: string;
  bullets: string[];
  stats?: Stat[];
  cta?: Cta;
};

type Props = {
  locale: Locale;

  imageSrc: string;
  imageAlt: string;

  badgeText: string;
  kickerText?: string;
  title: string;
  subtitle: string;

  ctas: Cta[];
  pills?: string[];
  rightPanel?: RightPanel;
};

function toSafeLocale(locale: Locale | undefined | null): Locale {
  // Si en tu app soportas más locales, ajusta esto.
  return locale === "en" ? "en" : "es";
}

export function HeroShell({
  locale,
  imageSrc,
  imageAlt,
  badgeText,
  kickerText,
  title,
  subtitle,
  ctas,
  pills,
  rightPanel,
}: Props) {
  const safeLocale = toSafeLocale(locale);

  return (
    <section className="relative isolate overflow-hidden border-b border-[hsl(var(--border))]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_20%_10%,rgba(255,255,255,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_80%_0%,rgba(0,0,0,0.55),transparent_60%)]" />
        <div className="absolute inset-0 bg-linear-to-b from-black/25 via-black/60 to-[hsl(var(--bg))]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="py-14 sm:py-18 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs text-white/90 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-[hsl(var(--ring))]" />
                <span className="tracking-wide">{badgeText}</span>
              </div>

              <p className="mt-4 text-xs tracking-[0.2em] uppercase text-white/70">
                {kickerText ?? safeLocale.toUpperCase()}
              </p>

              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
                {title}
              </h1>

              <p className="mt-4 max-w-2xl text-sm sm:text-base text-white/75">
                {subtitle}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                {ctas.slice(0, 3).map((c) => (
                  <Button
                    key={c.href + c.label}
                    href={c.href}
                    variant={c.variant ?? "primary"}
                    className="w-full sm:w-auto"
                  >
                    {c.label}
                  </Button>
                ))}
              </div>

              {pills?.length ? (
                <div className="mt-8 flex flex-wrap gap-2">
                  {pills.slice(0, 6).map((txt) => (
                    <span
                      key={txt}
                      className="rounded-full border border-white/15 bg-black/25 px-3 py-1 text-xs text-white/80 backdrop-blur"
                    >
                      {txt}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>

            {rightPanel ? (
              <div className="hidden lg:block lg:col-span-5">
                <div className="rounded-2xl border border-white/10 bg-black/25 p-5 backdrop-blur">
                  <div className="text-sm font-semibold text-white">
                    {rightPanel.title}
                  </div>

                  <ul className="mt-3 space-y-2 text-sm text-white/75">
                    {rightPanel.bullets.slice(0, 5).map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[hsl(var(--ring))]" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {rightPanel.stats?.length ? (
                    <div className="mt-5 grid grid-cols-3 gap-2">
                      {rightPanel.stats.slice(0, 3).map((s) => (
                        <div
                          key={s.value + s.label}
                          className="rounded-xl border border-white/10 bg-black/25 p-3 text-center"
                        >
                          <div className="text-white font-semibold">{s.value}</div>
                          <div className="mt-1 text-xs text-white/70">{s.label}</div>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {rightPanel.cta ? (
                    <div className="mt-5">
                      <Button
                        href={rightPanel.cta.href}
                        variant={rightPanel.cta.variant ?? "secondary"}
                        className="w-full"
                      >
                        {rightPanel.cta.label}
                      </Button>
                    </div>
                  ) : null}
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div className="h-10 sm:h-14" />
      </div>
    </section>
  );
}
