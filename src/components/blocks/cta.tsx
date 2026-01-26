import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { site } from "@/config/site";

export function CTA({ locale }: { locale: string }) {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <Card className="p-6 sm:p-10">
          <div className="grid gap-6 sm:grid-cols-2 sm:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Listo para tu próximo corte
              </h2>
              <p className="mt-2 text-sm text-[hsl(var(--muted-fg))]">
                Reserva en 30 segundos. Diseño limpio, rápido y traducido.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 sm:justify-end">
              <Button href={`/${locale}/booking`} variant="primary">Reservar</Button>
              <Button href={site.links.whatsapp} variant="secondary">WhatsApp</Button>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
