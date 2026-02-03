// src/components/layout/footer.tsx
"use client";

import Link from "next/link";
import { site } from "@/config/site";
import type { Locale } from "@/i18n/locales";
import { useT } from "@/i18n/provider";
import { Container } from "@/components/layout/container";

function withLocale(locale: Locale, href: string) {
  return href === "/" ? `/${locale}` : `/${locale}${href}`;
}

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

export function Footer({ locale }: { locale: Locale }) {
  const t = useT();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[hsl(var(--border))]">
      {/* background sutil */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
        <div className="absolute inset-0 bg-[hsl(var(--bg))]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(var(--muted))]/35 to-transparent" />
      </div>

      <Container className="py-8 sm:py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand + info */}
          <div className="max-w-xl">
            <div className="text-sm font-semibold tracking-tight">
              {site.brand.name}
            </div>

            {/* ✅ slogan traducible */}
            {site.brand.sloganKey ? (
              <p className="mt-2 text-sm text-[hsl(var(--muted-fg))]">
                {t(site.brand.sloganKey)}
              </p>
            ) : null}

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[hsl(var(--muted-fg))]">
              <span className="opacity-80">{t("footer.phoneLabel")}</span>

              <span className="hidden sm:inline opacity-40">•</span>

              <span className="opacity-80">{t("footer.addressLabel")}</span>

            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                href={site.links.instagram}
                className={cx(
                  "text-xs rounded-md border border-[hsl(var(--border))] px-2.5 py-1 transition",
                  "text-[hsl(var(--muted-fg))] hover:text-[hsl(var(--fg))] hover:bg-[hsl(var(--muted))]",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[hsl(var(--ring))]"
                )}
              >
                Instagram
              </Link>

              <Link
                href={site.links.maps}
                className={cx(
                  "text-xs rounded-md border border-[hsl(var(--border))] px-2.5 py-1 transition",
                  "text-[hsl(var(--muted-fg))] hover:text-[hsl(var(--fg))] hover:bg-[hsl(var(--muted))]",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[hsl(var(--ring))]"
                )}
              >
                {t("footer.map")}
              </Link>
            </div>
          </div>

          {/* Hours */}
          <div>
            <div className="text-xs font-medium text-[hsl(var(--fg))]">
              {t("footer.hoursTitle")}
            </div>

            <ul className="mt-3 space-y-2 text-sm text-[hsl(var(--muted-fg))]">
              {site.business.hours.slice(0, 3).map((h) => (
                <li
                  key={h.dayKey} // ✅ limpio y estable con tu config actual
                  className="flex items-center justify-between gap-4"
                >
                  <span className="whitespace-nowrap">{t(h.dayKey)}</span>
                  <span className="text-[hsl(var(--fg))]">{t(h.timeKey)}</span>
                </li>
              ))}
            </ul>

            <Link
              href={withLocale(locale, "/contact")}
              className={cx(
                "mt-3 inline-flex text-xs font-semibold transition",
                "text-[hsl(var(--fg))] hover:opacity-90"
              )}
            >
              {t("footer.contactLink")} <span className="ml-1 opacity-70">→</span>
            </Link>
          </div>
        </div>

        <div className="my-6 h-px w-full bg-[hsl(var(--border))]" />

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs text-[hsl(var(--muted-fg))]">
            © {year} {site.brand.name}. {t("footer.rights")}
          </div>

          <div className="flex flex-wrap gap-4 text-xs">
            <Link
              href={withLocale(locale, "/legal/privacy")}
              className={cx(
                "transition text-[hsl(var(--muted-fg))] hover:text-[hsl(var(--fg))]",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[hsl(var(--ring))]"
              )}
            >
              {t("footer.privacy")}
            </Link>

            <Link
              href={withLocale(locale, "/legal/terms")}
              className={cx(
                "transition text-[hsl(var(--muted-fg))] hover:text-[hsl(var(--fg))]",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[hsl(var(--ring))]"
              )}
            >
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
