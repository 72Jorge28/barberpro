// src/blocks/services/categories.tsx
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import type { ReactNode } from "react";


type TFunction = (key: string, vars?: Record<string, string | number>) => string;

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

type Service = {
  title: string;
  desc: string;
  from?: string;
  duration?: string;
  bullets?: string[];
  badge?: string;
};

type Category = {
  title: string;
  subtitle: string;
  services: Service[];
};

function isKey(v?: string) {
  if (!v) return true;
  // Heurística: si t() devuelve la misma key, asumimos que no existe traducción
  return v.includes("services.page.");
}

function Pill({ children, tone }: { children: ReactNode; tone?: "solid" | "ghost" }) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold",
        "border border-[hsl(var(--border))]",
        tone === "solid"
          ? "bg-[hsl(var(--muted))] text-[hsl(var(--fg))]"
          : "bg-transparent text-[hsl(var(--muted-fg))]"
      )}
    >
      {children}
    </span>
  );
}


function ServiceCard({ s }: { s: Service }) {
  return (
    <Card
      className={cx(
        "group relative overflow-hidden p-6",
        "transition will-change-transform hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]"
      )}
    >
      {/* Glow sutil */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -left-24 -top-24 h-48 w-48 rounded-full bg-[hsl(var(--ring))]/12 blur-2xl" />
        <div className="absolute -right-24 -bottom-24 h-48 w-48 rounded-full bg-[hsl(var(--primary))]/10 blur-2xl" />
      </div>

      <div className="relative">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="text-base font-semibold leading-tight text-[hsl(var(--fg))]">
                {s.title}
              </h3>

              {s.badge && (
                <span className="rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--muted))] px-2 py-0.5 text-[11px] text-[hsl(var(--fg))]">
                  {s.badge}
                </span>
              )}
            </div>

            <p className="mt-2 text-sm text-[hsl(var(--muted-fg))]">{s.desc}</p>
          </div>

          {/* Meta */}
          <div className="shrink-0 text-right">
            {s.from && <div className="text-sm font-semibold text-[hsl(var(--fg))]">{s.from}</div>}
            {s.duration && <div className="mt-1 text-xs text-[hsl(var(--muted-fg))]">{s.duration}</div>}
          </div>
        </div>

        {/* Bullets */}
        {s.bullets?.length ? (
          <ul className="mt-4 space-y-2 text-sm text-[hsl(var(--muted-fg))]">
            {s.bullets.slice(0, 3).map((b) => (
              <li key={b} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--ring))]" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </Card>
  );
}

function CategoryBlock({ c }: { c: Category }) {
  return (
    <section className="mt-10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[hsl(var(--fg))]">
            {c.title}
          </h2>
          <p className="mt-2 text-sm text-[hsl(var(--muted-fg))]">{c.subtitle}</p>
        </div>

        {/* Mini etiqueta “catálogo” (se ve premium y ordena visualmente) */}
        <div className="flex flex-wrap gap-2">
          <Pill tone="solid">{c.services.length.toString()} items</Pill>
          <Pill tone="ghost">Updated</Pill>
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {c.services.map((s) => (
          <ServiceCard key={s.title} s={s} />
        ))}
      </div>
    </section>
  );
}

function getCategoriesFromI18n(t: TFunction): Category[] {
  // Si luego cambias el número de categorías/servicios, solo ajustas estos arrays
  const categoryIdx = [0, 1, 2, 3] as const;
  const serviceIdx = [0, 1, 2] as const;

  return categoryIdx.map((ci) => {
    const title = t(`services.page.categories.${ci}.title`);
    const subtitle = t(`services.page.categories.${ci}.subtitle`);

    const services: Service[] = serviceIdx.map((si) => {
      const base = `services.page.categories.${ci}.items.${si}`;
      const title = t(`${base}.title`);
      const desc = t(`${base}.desc`);

      const from = t(`${base}.from`);
      const duration = t(`${base}.duration`);
      const badge = t(`${base}.badge`);

      const b0 = t(`${base}.bullets.0`);
      const b1 = t(`${base}.bullets.1`);
      const b2 = t(`${base}.bullets.2`);

      return {
        title: isKey(title) ? `Service ${ci + 1}.${si + 1}` : title,
        desc: isKey(desc) ? "" : desc,
        from: isKey(from) ? undefined : from,
        duration: isKey(duration) ? undefined : duration,
        badge: isKey(badge) ? undefined : badge,
        bullets: [b0, b1, b2].filter((x) => x && !isKey(x)) as string[],
      };
    });

    return {
      title: isKey(title) ? `Category ${ci + 1}` : title,
      subtitle: isKey(subtitle) ? "" : subtitle,
      services,
    };
  });
}

export function ServicesCategories({
  t,
  data,
}: {
  t: TFunction;
  data?: Category[];
}) {
  const categories = data ?? getCategoriesFromI18n(t);

  return (
    <Section
      title={t("services.page.title")}
      subtitle={t("services.page.subtitle")}
      className="py-10 sm:py-12"
    >
      {categories.map((c) => (
        <CategoryBlock key={c.title} c={c} />
      ))}
    </Section>
  );
}
