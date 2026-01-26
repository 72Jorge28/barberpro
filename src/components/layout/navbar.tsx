"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/config/site";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/i18n/locales";
import { locales } from "@/i18n/locales";
import { useT } from "@/i18n/provider";
import { useState } from "react";

export function Navbar({ locale }: { locale: Locale }) {
  const t = useT();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function withLocale(nextLocale: Locale, href: string) {
    if (href === "/") return `/${nextLocale}`;
    return `/${nextLocale}${href}`;
  }

  function switchLocale(nextLocale: Locale) {
    // cambia el primer segmento /es/... -> /en/...
    const parts = (pathname ?? `/${locale}`).split("/");
    parts[1] = nextLocale;
    return parts.join("/") || `/${nextLocale}`;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[hsl(var(--bg))]/70 backdrop-blur">
      <Container className="flex h-14 items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <Link href={`/${locale}`} className="text-sm font-semibold tracking-tight no-underline">
            {site.brand.name}
          </Link>

          <nav className="hidden md:flex items-center gap-4 text-sm">
            {site.nav.items.map((it) => {
              const href = withLocale(locale, it.href);
              return (
                <Link
                  key={it.href}
                  href={href}
                  className="text-[hsl(var(--muted-fg))] hover:text-[hsl(var(--fg))] no-underline transition-colors"
                >
                  {t(it.labelKey)}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          {/* Language switch */}
          <div className="hidden sm:flex items-center gap-1">
            {locales.map((l) => (
              <Link
                key={l}
                href={switchLocale(l)}
                className={`px-2 py-1 text-xs rounded-md border border-white/10 ${
                  l === locale
                    ? "bg-white/10 text-[hsl(var(--fg))]"
                    : "text-[hsl(var(--muted-fg))] hover:text-[hsl(var(--fg))]"
                }`}
              >
                {l.toUpperCase()}
              </Link>
            ))}
          </div>

          <Button href={site.links.whatsapp} variant="secondary" className="hidden sm:inline-flex">
            {t("nav.cta.whatsapp")}
          </Button>

          <Button href={`/${locale}/booking`} variant="primary" className="hidden sm:inline-flex">
            {t("nav.cta.booking")}
          </Button>

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-[hsl(var(--fg))]"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </Container>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[hsl(var(--bg))]/95 backdrop-blur">
          <Container className="py-3 flex flex-col gap-2">
            <div className="flex gap-2">
              {locales.map((l) => (
                <Link key={l} href={switchLocale(l)} className="text-xs px-2 py-1 rounded-md border border-white/10">
                  {l.toUpperCase()}
                </Link>
              ))}
            </div>

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

            <div className="flex gap-2 pt-2">
              <Button href={site.links.whatsapp} variant="secondary" className="flex-1">
                {t("nav.cta.whatsapp")}
              </Button>
              <Button href={`/${locale}/booking`} variant="primary" className="flex-1">
                {t("nav.cta.booking")}
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
