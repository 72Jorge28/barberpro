// src/blocks/home/hero.tsx
import { site } from "@/config/site";
import type { Locale } from "@/i18n/locales";
import { HeroShell } from "@/components/blocks/hero/hero-shell";

type Props = {
  locale: Locale;
  t: (key: string) => string;
};

function toSafeLocale(locale: Locale | undefined | null): Locale {
  return locale === "en" ? "en" : "es";
}

export function HomeHero({ locale, t }: Props) {
  const safeLocale = toSafeLocale(locale);

  return (
    <HeroShell
      locale={safeLocale}
      imageSrc={site.media.heroHome}
      imageAlt={t("home.hero.imageAlt")}
      badgeText={t("home.hero.badge")}
      kickerText={`${t("home.hero.kicker")} • ${safeLocale.toUpperCase()}`}
      title={site.brand.name}
      subtitle={t("home.hero.subtitle")}
      ctas={[
        { label: t("home.hero.ctaPrimary"), href: `/${safeLocale}/booking`, variant: "primary" },
        { label: t("home.hero.ctaSecondary"), href: `/${safeLocale}/services`, variant: "secondary" },
        { label: "Instagram", href: site.links.instagram, variant: "ghost" },
      ]}
      pills={[
        `${t("home.stats.one.value")} ${t("home.stats.one.label")}`,
        `${t("home.stats.two.value")} ${t("home.stats.two.label")}`,
        `${t("home.stats.three.value")} ${t("home.stats.three.label")}`,
      ]}
      rightPanel={{
        title: t("home.hero.title"),
        bullets: [t("home.hero.bullet1"), t("home.hero.bullet2"), t("home.hero.bullet3")],
        stats: [
          { value: t("home.stats.one.value"), label: t("home.stats.one.label") },
          { value: t("home.stats.two.value"), label: t("home.stats.two.label") },
          { value: t("home.stats.three.value"), label: t("home.stats.three.label") },
        ],
        cta: { label: t("nav.cta.whatsapp"), href: site.links.whatsapp, variant: "secondary" },
      }}
    />
  );
}
