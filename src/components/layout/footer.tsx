"use client";

import Link from "next/link";
import { site } from "@/config/site";
import type { Locale } from "@/i18n/locales";
import { useT } from "@/i18n/provider";
import { Container } from "@/components/layout/container";

function withLocale(locale: Locale, href: string) {
  return href === "/" ? `/${locale}` : `/${locale}${href}`;
}

export function Footer({ locale }: { locale: Locale }) {
  const t = useT();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[hsl(var(--border))]">
      <Container className="py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="font-semibold">{site.brand.name}</div>
            <p className="mt-2 text-sm text-[hsl(var(--muted-fg))]">{site.brand.slogan}</p>

            <div className="mt-4 text-sm space-y-1">
              <p>
                <span className="text-[hsl(var(--muted-fg))]">{t("footer.phone")}: </span>
                <span>{site.business.phone}</span>
              </p>
              <p>
                <span className="text-[hsl(var(--muted-fg))]">{t("footer.address")}: </span>
                <span>{site.business.address}</span>
              </p>
            </div>
          </div>

          <div className="grid gap-2 text-sm">
            {site.nav.items.map((item) => (
              <Link
                key={item.href}
                href={withLocale(locale, item.href)}
                className="text-[hsl(var(--muted-fg))] hover:text-[hsl(var(--fg))] transition"
              >
                {t(item.labelKey)}
              </Link>
            ))}
          </div>

          <div className="text-sm text-[hsl(var(--muted-fg))]">
            <div className="font-medium text-[hsl(var(--fg))]">{t("footer.hoursTitle")}</div>
            <ul className="mt-2 space-y-1">
              {site.business.hours.map((h) => (
                <li key={h.day}>
                  <span className="text-[hsl(var(--muted-fg))]">{h.day}:</span> {h.time}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-[hsl(var(--muted-fg))]">
          <div>
            © {year} {site.brand.name}. {t("footer.rights")}
          </div>
          <div className="flex gap-3">
            <Link href={withLocale(locale, "/legal/privacy")} className="hover:text-[hsl(var(--fg))] transition">
              {t("footer.privacy")}
            </Link>
            <Link href={withLocale(locale, "/legal/terms")} className="hover:text-[hsl(var(--fg))] transition">
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
