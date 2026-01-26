import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { site } from "@/config/site";

export function Hero({ locale }: { locale: string }) {
  return (
    <section className="pt-10 sm:pt-14">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <Badge>Barbería moderna • {locale.toUpperCase()}</Badge>

            <div className="mt-4">
              <Heading
                title={site.brand.name}
                subtitle={site.brand.slogan}
              />
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={`/${locale}/booking`} variant="primary">
                Reservar ahora
              </Button>
              <Button href={`/${locale}/services`} variant="secondary">
                Ver servicios
              </Button>
              <Link
                href={site.links.instagram}
                className="text-sm text-[hsl(var(--muted-fg))] underline underline-offset-4"
              >
                Instagram
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 text-xs text-[hsl(var(--muted-fg))]">
              <div className="rounded-xl border border-[hsl(var(--border))] p-3">
                <div className="text-[hsl(var(--fg))] font-semibold">+10</div>
                <div>años</div>
              </div>
              <div className="rounded-xl border border-[hsl(var(--border))] p-3">
                <div className="text-[hsl(var(--fg))] font-semibold">4.9★</div>
                <div>reseñas</div>
              </div>
              <div className="rounded-xl border border-[hsl(var(--border))] p-3">
                <div className="text-[hsl(var(--fg))] font-semibold">100%</div>
                <div>estilo</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))]">
            <div className="absolute inset-0 opacity-70" />
            <Image
              src="/images/demo/hero.jpg"
              alt="BarberPro hero"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
