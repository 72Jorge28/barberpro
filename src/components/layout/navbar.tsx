import Link from "next/link";
import { site } from "@/config/site";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[hsl(var(--border))] bg-[hsl(var(--bg))]/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-bold tracking-tight">
            {site.brand.logoText}
          </Link>

          <nav className="hidden md:flex items-center gap-4">
            {site.nav.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[hsl(var(--muted-fg))] hover:text-[hsl(var(--fg))] transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button href={site.links.whatsapp} variant="secondary" size="sm">
            WhatsApp
          </Button>
          <Button href={site.links.calendly} variant="primary" size="sm">
            Book
          </Button>
        </div>
      </Container>
    </header>
  );
}
