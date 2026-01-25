import Link from "next/link";
import { site } from "@/config/site";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/i18n/locales";

type Props = {
  locale: Locale;
  t: (key: string) => string;
};

function withLocale(locale: Locale, href: string) {
  if (href === "/") return `/${locale}`;
  return `/${locale}${href}`;
}

export function Navbar({ locale, t }: Props) {
  return (
    <header className="sticky top-0 z-40 border-b border-[hsl(var(--border))] bg-[hsl(var(--bg))]/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href={`/${locale}`} className="font-bold tracking-tight">
            {site.brand.logoText}
          </Link>

          <nav className="hidden md:flex items-center gap-4">
            {site.nav.items.map((item) => (
              <Link
                key={item.href}
                href={withLocale(locale, item.href)}
                className="text-sm text-[hsl(var(--muted-fg))] hover:text-[hsl(var(--fg))] transition"
              >
                {t(item.labelKey)}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button href={site.links.whatsapp} variant="secondary" size="sm">
            WhatsApp
          </Button>
          <Button href={site.links.calendly} variant="primary" size="sm">
            {locale === "es" ? "Reservar" : "Book"}
          </Button>
        </div>
      </Container>
    </header>
  );
}
