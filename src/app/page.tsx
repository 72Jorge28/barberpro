import { theme } from "@/config/theme";
import { site } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/layout/section";

export default function Home() {
  return (
    <main>
      <Section
        title={site.brand.name}
        subtitle={site.brand.slogan}
        className="pt-10"
      >
        <Card className="p-6 sm:p-8">
          <p className="text-sm text-[hsl(var(--muted-fg))]">
            Preset activo: <strong className="text-[hsl(var(--fg))]">{theme.activePreset}</strong>
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <Button href="/test" variant="primary">
              Ver /test
            </Button>
            <Button href="#" variant="secondary">
              Reserva (placeholder)
            </Button>
            <Button href="#" variant="ghost">
              Ver servicios
            </Button>
          </div>
        </Card>
      </Section>
    </main>
  );
}
