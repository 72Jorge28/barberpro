"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/config/site";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/i18n/locales";
import { locales } from "@/i18n/locales";
import { useT } from "@/i18n/provider";

export function Navbar({ locale }: { locale: Locale }) {
  const t = useT();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function withLocale(nextLocale: Locale, href: string) {
    return href === "/" ? `/${nextLocale}` : `/${nextLocale}${href}`;
  }

  function switchLocaleHref(nextLocale: Locale) {
    const base = pathname ?? `/${locale}`;
    const parts = base.split("/");
    parts[1] = nextLocale;
    return parts.join("/") || `/${nextLocale}`;
  }

  function isActive(href: string) {
    const target = withLocale(locale, href);
    if (!pathname) return false;
    // Home exact, el resto prefix
    if (href === "/") return pathname === `/${locale}`;
    return pathname.startsWith(target);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[hsl(var(--border))] bg-[hsl(var(--bg))]/75 backdrop-blur">
      <Container className="flex h-14 items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <Link href={`/${locale}`} className="text-sm font-semibold tracking-tight no-underline">
            {site.brand.name}
          </Link>

          <nav className="hidden md:flex items-center gap-4 text-sm">
            {site.nav.items.map((it) => {
              const href = withLocale(locale, it.href);
              const active = isActive(it.href);

              return (
                <Link
                  key={it.href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "no-underline transition-colors",
                    active
                      ? "text-[hsl(var(--fg))]"
                      : "text-[hsl(var(--muted-fg))] hover:text-[hsl(var(--fg))]",
                  ].join(" ")}
                >
                  {t(it.labelKey)}
                  {active && (
                    <span className="block h-px mt-1 bg-[hsl(var(--ring))] opacity-80" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          {/* Language switch (desktop) */}
          <div className="hidden sm:flex items-center gap-1">
            {locales.map((l) => {
              const active = l === locale;
              return (
                <Link
                  key={l}
                  href={switchLocaleHref(l)}
                  onClick={() => setOpen(false)}
                  className={[
                    "px-2 py-1 text-xs rounded-md border transition",
                    active
                      ? "border-[hsl(var(--border))] bg-[hsl(var(--muted))] text-[hsl(var(--fg))]"
                      : "border-[hsl(var(--border))] text-[hsl(var(--muted-fg))] hover:text-[hsl(var(--fg))]",
                  ].join(" ")}
                >
                  {l.toUpperCase()}
                </Link>
              );
            })}
          </div>

          <Button href={site.links.whatsapp} variant="secondary" className="hidden sm:inline-flex">
            {t("nav.cta.whatsapp")}
          </Button>

          <Button href={`/${locale}/booking`} variant="primary" className="hidden sm:inline-flex">
            {t("nav.cta.booking")}
          </Button>

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-[hsl(var(--border))] text-[hsl(var(--fg))]"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </Container>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden border-t border-[hsl(var(--border))] bg-[hsl(var(--bg))]/95 backdrop-blur">
          <Container className="py-4 flex flex-col gap-3">
            <div className="flex gap-2">
              {locales.map((l) => (
                <Link
                  key={l}
                  href={switchLocaleHref(l)}
                  onClick={() => setOpen(false)}
                  className="text-xs px-2 py-1 rounded-md border border-[hsl(var(--border))]"
                >
                  {l.toUpperCase()}
                </Link>
              ))}
            </div>

            <div className="flex flex-col">
              {site.nav.items.map((it) => (
                <Link
                  key={it.href}
                  href={withLocale(locale, it.href)}
                  className="py-2 text-sm text-[hsl(var(--muted-fg))] hover:text-[hsl(var(--fg))]"
                  onClick={() => setOpen(false)}
                >
                  {t(it.labelKey)}
                </Link>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <Button href={site.links.whatsapp} variant="secondary" className="w-full" onClick={() => setOpen(false)}>
                {t("nav.cta.whatsapp")}
              </Button>
              <Button href={`/${locale}/booking`} variant="primary" className="w-full" onClick={() => setOpen(false)}>
                {t("nav.cta.booking")}
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
