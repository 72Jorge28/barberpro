// src/blocks/team/values.tsx
import Image from "next/image";
import { site } from "@/config/site";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";

type TFunction = (key: string, vars?: Record<string, string | number>) => string;

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

export function TeamValues({ t }: { t: TFunction }) {
  const bullets = [0, 1, 2] as const;

  return (
    <Section
      title={t("team.values.sectionTitle")}
      subtitle={t("team.values.sectionSubtitle")}
      className="py-10 sm:py-12"
    >
      <Card
        className={cx(
          "relative overflow-hidden",
          "border border-[hsl(var(--border))]",
          "shadow-[var(--shadow-sm)]"
        )}
      >
        <div className="grid lg:grid-cols-12">
          {/* Left: content area */}
          <div className="relative lg:col-span-7 p-6 sm:p-8 lg:p-10">
            {/* Floating left image (CENTERED vertically, with margin) */}
            <div className="pointer-events-none absolute left-6 top-1/2 hidden -translate-y-1/2 lg:block">
              <div className="relative h-56 w-48 overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--muted))] shadow-[var(--shadow-md)]">
                <Image
                  src={site.media.teamSideA}
                  alt={t("team.values.leftImageAlt")}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 ring-1 ring-white/10" />
              </div>
            </div>

            {/* Text block (se separa de la imagen flotante con padding) */}
            <div className="relative lg:pl-56">
              <p className="text-xs uppercase tracking-[0.25em] text-[hsl(var(--muted-fg))]">
                {t("team.values.kicker")}
              </p>

              <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-[hsl(var(--fg))]">
                {t("team.values.title")}
              </h2>

              <p className="mt-3 max-w-2xl text-sm sm:text-base text-[hsl(var(--muted-fg))] leading-relaxed">
                {t("team.values.body")}
              </p>

              <ul className="mt-5 space-y-2 text-sm text-[hsl(var(--muted-fg))]">
                {bullets.map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--ring))]" />
                    <span>{t(`team.values.bullets.${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: image FULL HEIGHT */}
          <div className="relative lg:col-span-5 min-h-[340px] lg:min-h-[520px]">
            <Image
              src={site.media.teamSideB}
              alt={t("team.values.rightImageAlt")}
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>
      </Card>
    </Section>
  );
}
