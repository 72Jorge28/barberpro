import Image from "next/image";
import { site } from "@/config/site";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type TFunction = (key: string, vars?: Record<string, string | number>) => string;

export function TeamMembers({ t }: { t: TFunction }) {
  const members = site.team.members;

  return (
    <Section title={t("team.members.title")} subtitle={t("team.members.subtitle")} className="py-10 sm:py-12">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((m) => (
          <Card key={m.name} className="overflow-hidden">
            <div className="aspect-[4/3] relative bg-[hsl(var(--muted))]">
              <Image src={m.image} alt={m.name} fill className="object-cover" />
            </div>

            <div className="p-5">
              <div className="text-sm font-semibold text-[hsl(var(--fg))]">{m.name}</div>
              <div className="mt-1 text-sm text-[hsl(var(--muted-fg))]">{t(m.roleKey)}</div>
              <p className="mt-3 text-sm text-[hsl(var(--muted-fg))]">{t(m.bioKey)}</p>

              {/* Centered button */}
              <div className="mt-5 flex justify-center">
                {m.socials?.instagram ? (
                  <Button href={m.socials.instagram} variant="secondary" className="w-full sm:w-auto">
                    {t("team.members.cta")}
                  </Button>
                ) : null}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
