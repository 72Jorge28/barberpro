// src/blocks/home/services.tsx
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";

type TFunction = (key: string, vars?: Record<string, string | number>) => string;

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

function Icon({ i, className }: { i: number; className?: string }) {
  // 3 íconos simples (inline) para no depender de lucide/heroicons
  const cls = cx("h-5 w-5", className);

  if (i === 0) {
    // Scissors-ish
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" aria-hidden="true">
        <path
          d="M4.5 6.5c1.2-1.2 3.1-1.2 4.2 0 1.2 1.2 1.2 3.1 0 4.2-1.2 1.2-3.1 1.2-4.2 0-1.2-1.2-1.2-3.1 0-4.2Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M4.5 13.3c1.2-1.2 3.1-1.2 4.2 0 1.2 1.2 1.2 3.1 0 4.2-1.2 1.2-3.1 1.2-4.2 0-1.2-1.2-1.2-3.1 0-4.2Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M8.3 9.7 20 4.2M8.3 14.3 20 19.8"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (i === 1) {
    // Beard / razor-ish
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" aria-hidden="true">
        <path
          d="M8.5 6.5c0-1.7 1.5-3 3.5-3s3.5 1.3 3.5 3v2.2c0 2.3-1.8 4.1-4 4.1s-4-1.8-4-4.1V6.5Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M6.2 11.5c.6 5 2.6 8 5.8 8s5.2-3 5.8-8"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M7 20.2h10"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // Styling / hair-ish
  return (
    <svg viewBox="0 0 24 24" className={cls} fill="none" aria-hidden="true">
      <path
        d="M6 10.5c0-4 3.2-7.2 7.2-7.2S20.4 6.5 20.4 10.5c0 4.7-3.2 9-8.1 9-4.8 0-6.3-2.7-6.3-5.1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M6 12.2c1.2-1 2.7-1.6 4.4-1.6 2.2 0 4.2 1 5.6 2.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HomeServices({ t }: { t: TFunction }) {
  const items = [0, 1, 2].map((i) => ({
    i,
    title: t(`home.services.items.${i}.title`),
    desc: t(`home.services.items.${i}.desc`),

    // opcionales (si no existen en messages, devolverá la key y lo detectamos)
    from: t(`home.services.items.${i}.from`), // ej: "Desde $20"
    duration: t(`home.services.items.${i}.duration`), // ej: "30–45 min"
    b1: t(`home.services.items.${i}.bullets.0`),
    b2: t(`home.services.items.${i}.bullets.1`),
  }));

  const isKey = (v: string) => v.includes("home.services.items.");

  return (
    <Section
      title={t("home.services.title")}
      subtitle={t("home.services.subtitle")}
      className="py-12 sm:py-16"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <Card
            key={it.i}
            className={cx(
              "group relative overflow-hidden border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6",
              "transition will-change-transform hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]"
            )}
          >
            {/* subtle shine */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
              <div className="absolute -left-24 -top-24 h-48 w-48 rounded-full bg-[hsl(var(--ring))]/12 blur-2xl" />
              <div className="absolute -right-24 -bottom-24 h-48 w-48 rounded-full bg-[hsl(var(--primary))]/10 blur-2xl" />
            </div>

            {/* header */}
            <div className="relative flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div
                  className={cx(
                    "mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl",
                    "border border-[hsl(var(--border))] bg-[hsl(var(--muted))] text-[hsl(var(--fg))]"
                  )}
                >
                  <Icon i={it.i} className="opacity-90" />
                </div>

                <div className="min-w-0">
                  <div className="text-base font-semibold leading-tight text-[hsl(var(--fg))]">
                    {it.title}
                  </div>
                  <p className="mt-2 text-sm text-[hsl(var(--muted-fg))]">
                    {it.desc}
                  </p>
                </div>
              </div>

              {/* meta pills */}
              <div className="hidden sm:flex flex-col items-end gap-2">
                {!isKey(it.from) && (
                  <span className="rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--muted))] px-2 py-1 text-[11px] text-[hsl(var(--fg))]">
                    {it.from}
                  </span>
                )}
                {!isKey(it.duration) && (
                  <span className="rounded-full border border-[hsl(var(--border))] bg-transparent px-2 py-1 text-[11px] text-[hsl(var(--muted-fg))]">
                    {it.duration}
                  </span>
                )}
              </div>
            </div>

            {/* bullets */}
            {(!isKey(it.b1) || !isKey(it.b2)) && (
              <ul className="relative mt-5 space-y-2 text-sm text-[hsl(var(--muted-fg))]">
                {!isKey(it.b1) && (
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--ring))]" />
                    <span>{it.b1}</span>
                  </li>
                )}
                {!isKey(it.b2) && (
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--ring))]" />
                    <span>{it.b2}</span>
                  </li>
                )}
              </ul>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}
