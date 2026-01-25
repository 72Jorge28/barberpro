import { site } from "@/config/site";
import { Container } from "@/components/ui/container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[hsl(var(--border))]">
      <Container className="py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="font-bold">{site.brand.name}</div>
            <p className="mt-2 text-sm text-[hsl(var(--muted-fg))]">
              {site.brand.slogan}
            </p>
            <p className="mt-4 text-sm">
              <span className="text-[hsl(var(--muted-fg))]">Phone: </span>
              <span>{site.business.phone}</span>
            </p>
            <p className="mt-1 text-sm">
              <span className="text-[hsl(var(--muted-fg))]">Address: </span>
              <span>{site.business.address}</span>
            </p>
          </div>

          <div className="grid gap-2 text-sm">
            {site.nav.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[hsl(var(--muted-fg))] hover:text-[hsl(var(--fg))] transition"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 text-xs text-[hsl(var(--muted-fg))]">
          © {year} {site.brand.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
