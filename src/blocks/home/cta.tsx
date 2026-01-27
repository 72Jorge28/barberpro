// src/blocks/home/cta.tsx
import { site } from "@/config/site";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type TFunction = (key: string, vars?: Record<string, string | number>) => string;

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0 text-[hsl(var(--ring))]"
      fill="none"
    >
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HomeCta({ locale, t }: { locale: string; t: TFunction }) {
  return (
    <Section
      title={t("home.cta.title")}
      subtitle={t("home.cta.subtitle")}
      className="py-12 sm:py-16"
    >
      <Card
        className={cx(
          "bg-shell relative overflow-hidden",
          "p-6 sm:p-8",
          "border border-[hsl(var(--border))]",
          "shadow-[var(--shadow-sm)]"
        )}
      >
        {/* glow sutil */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[hsl(var(--ring))]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />

        <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Left */}
          <div className="max-w-xl">
            <p className="text-sm text-[hsl(var(--muted-fg))]">
              {t("home.cta.note")}
            </p>

            {/* Trust bullets */}
            <div className="mt-4 grid gap-2 text-xs text-[hsl(var(--muted-fg))] sm:grid-cols-3">
              <div className="flex items-center gap-2">
                <CheckIcon />
                <span>{t("home.cta.bullets.0")}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon />
                <span>{t("home.cta.bullets.1")}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon />
                <span>{t("home.cta.bullets.2")}</span>
              </div>
            </div>
          </div>

          {/* Right (CTAs) */}
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Button href={`/${locale}/booking`} variant="primary" className="w-full sm:w-auto">
              {t("home.cta.primary")}
            </Button>

            <Button href={site.links.whatsapp} variant="secondary" className="w-full sm:w-auto">
              {t("home.cta.whatsapp")}
            </Button>
          </div>
        </div>
      </Card>
    </Section>
  );
}
