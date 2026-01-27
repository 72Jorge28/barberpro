// src/blocks/services/hero.tsx
import { site } from "@/config/site";
import type { Locale } from "@/i18n/locales";
import { HeroShell } from "@/components/blocks/hero/hero-shell";

type TFunction = (key: string, vars?: Record<string, string | number>) => string;

function toSafeLocale(locale: Locale | undefined | null): Locale {
  return locale === "en" ? "en" : "es";
}

export function ServicesHero({ locale, t }: { locale: Locale; t: TFunction }) {
  const safeLocale = toSafeLocale(locale);

  return (
    <HeroShell
      locale={safeLocale}
      imageSrc={site.media.heroServices}
      imageAlt={t("services.hero.imageAlt")}
      badgeText={t("services.hero.badge")}
      kickerText={`${t("services.hero.kicker")} • ${safeLocale.toUpperCase()}`}
      title={t("services.hero.title")}
      subtitle={t("services.hero.subtitle")}
      ctas={[
        { label: t("services.hero.ctaPrimary"), href: `/${safeLocale}/booking`, variant: "primary" },
        { label: t("services.hero.ctaSecondary"), href: site.links.whatsapp, variant: "secondary" },
        { label: t("services.hero.ctaTertiary"), href: `/${safeLocale}/contact`, variant: "ghost" },
      ]}
      pills={[
        t("services.hero.pills.0"),
        t("services.hero.pills.1"),
        t("services.hero.pills.2"),
      ]}
      rightPanel={{
        title: t("services.hero.sideTitle"),
        bullets: [
          t("services.hero.sideBullets.0"),
          t("services.hero.sideBullets.1"),
          t("services.hero.sideBullets.2"),
        ],
        stats: [
          { value: t("services.hero.stats.0.value"), label: t("services.hero.stats.0.label") },
          { value: t("services.hero.stats.1.value"), label: t("services.hero.stats.1.label") },
          { value: t("services.hero.stats.2.value"), label: t("services.hero.stats.2.label") },
        ],
        cta: { label: t("services.hero.sideCta"), href: `/${safeLocale}/booking`, variant: "secondary" },
      }}
    />
  );
}
