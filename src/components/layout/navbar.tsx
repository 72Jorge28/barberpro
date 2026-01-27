"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { site } from "@/config/site";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/i18n/locales";
import { locales } from "@/i18n/locales";
import { useT } from "@/i18n/provider";

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

export function Navbar({ locale }: { locale: Locale }) {
  const t = useT();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const currentPath = pathname ?? `/${locale}`;

  const withLocale = (nextLocale: Locale, href: string) =>
    href === "/" ? `/${nextLocale}` : `/${nextLocale}${href}`;

  const switchLocaleHref = (nextLocale: Locale) => {
    const parts = currentPath.split("/");
    parts[1] = nextLocale;
    const out = parts.join("/");
    return out === "" ? `/${nextLocale}` : out;
  };

  const isActive = (href: string) => {
    const target = withLocale(locale, href);
    if (!pathname) return false;
    if (href === "/") return pathname === `/${locale}`;
    return pathname.startsWith(target);
  };

  function closeAll() {
    setOpen(false);
    setLangOpen(false);
  }

  const desktopCtas = useMemo(
    () => (
      <>
        <Button
          href={site.links.whatsapp}
          variant="secondary"
          className="hidden sm:inline-flex"
        >
          {t("nav.cta.whatsapp")}
        </Button>
        <Button
          href={`/${locale}/booking`}
          variant="primary"
          className="hidden sm:inline-flex"
        >
          {t("nav.cta.booking")}
        </Button>
      </>
    ),
    [locale, t]
  );

  return (
    <header className="sticky top-0 z-50 border-b border-[hsl(var(--border))] bg-[hsl(var(--bg))]/75 backdrop-blur">
      <Container className="flex h-14 items-center justify-between gap-3">
        {/* Left */}
        <div className="flex items-center gap-4">
          <Link
            href={`/${locale}`}
            className="text-sm font-semibold tracking-tight no-underline"
            onClick={closeAll}
          >
            {site.brand.name}
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-4 text-sm">
            {site.nav.items.map((it) => {
              const href = withLocale(locale, it.href);
              const active = isActive(it.href);

              return (
                <Link
                  key={it.href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  onClick={closeAll}
                  className={cx(
                    "no-underline transition-colors",
                    active
                      ? "text-[hsl(var(--fg))]"
                      : "text-[hsl(var(--muted-fg))] hover:text-[hsl(var(--fg))]"
                  )}
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

        {/* Right */}
        <div className="flex items-center gap-2">
          {/* Desktop language dropdown */}
          <div className="relative hidden sm:block">
            <button
              type="button"
              onClick={() => setLangOpen((v) => !v)}
              className={cx(
                "inline-flex items-center gap-2 rounded-md border border-[hsl(var(--border))] px-2 py-1 text-xs",
                "text-[hsl(var(--muted-fg))] hover:text-[hsl(var(--fg))] transition"
              )}
              aria-haspopup="menu"
              aria-expanded={langOpen}
            >
              {locale.toUpperCase()}
              <span className="opacity-70">▾</span>
            </button>

            {langOpen && (
              <div
                className="absolute right-0 mt-2 w-32 overflow-hidden rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--bg))] shadow-[var(--shadow-md)]"
                role="menu"
              >
                {locales.map((l) => (
                  <Link
                    key={l}
                    href={switchLocaleHref(l)}
                    role="menuitem"
                    onClick={() => setLangOpen(false)}
                    className={cx(
                      "block px-3 py-2 text-xs transition",
                      l === locale
                        ? "bg-[hsl(var(--muted))] text-[hsl(var(--fg))]"
                        : "text-[hsl(var(--muted-fg))] hover:bg-[hsl(var(--muted))] hover:text-[hsl(var(--fg))]"
                    )}
                  >
                    {l.toUpperCase()}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {desktopCtas}

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-[hsl(var(--border))] text-[hsl(var(--fg))]"
            onClick={() => {
              setOpen((v) => !v);
              setLangOpen(false);
            }}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </Container>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden">
          {/* backdrop */}
          <button
            aria-label="Close menu"
            className="fixed inset-0 z-40 bg-black/40"
            onClick={closeAll}
          />

          {/* panel */}
          <div className="fixed inset-x-0 top-14 z-50 border-t border-[hsl(var(--border))] bg-[hsl(var(--bg))]/98 backdrop-blur">
            <Container className="py-4 flex flex-col gap-4">
              {/* Language row */}
              <div className="flex items-center gap-2">
                {locales.map((l) => (
                  <Link
                    key={l}
                    href={switchLocaleHref(l)}
                    onClick={closeAll}
                    className={cx(
                      "text-xs px-2 py-1 rounded-md border transition",
                      l === locale
                        ? "border-[hsl(var(--border))] bg-[hsl(var(--muted))] text-[hsl(var(--fg))]"
                        : "border-[hsl(var(--border))] text-[hsl(var(--muted-fg))] hover:text-[hsl(var(--fg))]"
                    )}
                  >
                    {l.toUpperCase()}
                  </Link>
                ))}
              </div>

              {/* Nav items */}
              <div className="flex flex-col">
                {site.nav.items.map((it) => {
                  const href = withLocale(locale, it.href);
                  const active = isActive(it.href);

                  return (
                    <Link
                      key={it.href}
                      href={href}
                      onClick={closeAll}
                      className={cx(
                        "py-2 text-sm transition",
                        active
                          ? "text-[hsl(var(--fg))]"
                          : "text-[hsl(var(--muted-fg))] hover:text-[hsl(var(--fg))]"
                      )}
                    >
                      {t(it.labelKey)}
                    </Link>
                  );
                })}
              </div>

              {/* Mobile CTAs */}
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href={site.links.whatsapp}
                  onClick={closeAll}
                  className={cx(
                    "h-11 px-4 text-sm font-semibold rounded-[var(--radius-sm)] inline-flex items-center justify-center",
                    "bg-[hsl(var(--accent))] text-[hsl(var(--accent-fg))] border border-[hsl(var(--border))] hover:bg-[hsl(var(--muted))] transition"
                  )}
                >
                  {t("nav.cta.whatsapp")}
                </Link>

                <Link
                  href={`/${locale}/booking`}
                  onClick={closeAll}
                  className={cx(
                    "h-11 px-4 text-sm font-semibold rounded-[var(--radius-sm)] inline-flex items-center justify-center",
                    "bg-[hsl(var(--primary))] text-[hsl(var(--primary-fg))] hover:opacity-95 transition"
                  )}
                >
                  {t("nav.cta.booking")}
                </Link>
              </div>
            </Container>
          </div>
        </div>
      )}
    </header>
  );
}
