import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";

export default function Page() {
  return (
    <main>
      <Section title="Coming soon" subtitle="Stub page (will be localized next).">
        <Card className="p-6">
          <p className="text-sm text-[hsl(var(--muted-fg))]">
            Replace this with real content later.
          </p>
        </Card>
      </Section>
    </main>
  );
}
