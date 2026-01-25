import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";

export default function Page() {
  return (
    <main>
      <Section title="Coming soon" subtitle="This is a stub page for the template.">
        <Card className="p-6">
          <p className="text-sm text-[hsl(var(--muted-fg))]">
            Replace this with real content later.
          </p>
        </Card>
      </Section>
    </main>
  );
}
