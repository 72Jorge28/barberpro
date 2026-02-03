// src/blocks/services/faq.tsx
import { Section } from "@/components/layout/section";

type TFunction = (key: string, vars?: Record<string, string | number>) => string;

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

function isMissingTranslation(value: string, key: string) {
  // Si t() devuelve exactamente la misma key, asumimos traducción faltante
  return !value || value === key;
}

function Pill({ children }: { children: string }) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold",
        "border border-[hsl(var(--border))] bg-[hsl(var(--muted))] text-[hsl(var(--fg))]"
      )}
    >
      {children}
    </span>
  );
}

function FAQItem({ q, a, meta }: { q: string; a: string; meta?: string }) {
  return (
    <details
      className={cx(
        "group rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))]",
        "shadow-[var(--shadow-sm)] open:shadow-[var(--shadow-md)]",
        "transition"
      )}
    >
      <summary className="cursor-pointer list-none px-5 py-4">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-semibold text-[hsl(var(--fg))]">{q}</span>
              {meta ? <Pill>{meta}</Pill> : null}
            </div>
          </div>

          <span
            aria-hidden="true"
            className={cx(
              "mt-0.5 grid h-8 w-8 place-items-center rounded-full",
              "border border-[hsl(var(--border))] bg-[hsl(var(--muted))]",
              "text-[hsl(var(--muted-fg))] transition",
              "group-open:rotate-45"
            )}
          >
            +
          </span>
        </div>
      </summary>

      <div className="px-5 pb-5 text-sm leading-relaxed text-[hsl(var(--muted-fg))]">{a}</div>
    </details>
  );
}

export function ServicesFaq({ t }: { t: TFunction }) {
  // ✅ índices controlados (si cambias esto, cambia también fallback)
  const ids = [0, 1, 2, 3] as const;

  // ✅ fallback tipado como tupla (TS sabe que fallback[i] SIEMPRE existe)
  const fallback = [
    {
      q: "¿Los precios son exactos?",
      a: "Los precios se muestran como “Desde…”. Se ajustan fácil desde el contenido del sitio.",
      meta: "Pricing",
    },
    {
      q: "¿Cómo reservo?",
      a: "Puedes reservar por WhatsApp o desde la página de booking.",
      meta: "Booking",
    },
    {
      q: "¿Hacen diseños?",
      a: "Sí, líneas/diseños simples. Los más complejos se confirman antes.",
      meta: "Extras",
    },
    {
      q: "¿Atienden niños?",
      a: "Sí. Recomendamos horarios tranquilos para una mejor experiencia.",
      meta: "Family",
    },
  ] as const satisfies ReadonlyArray<{ q: string; a: string; meta: string }>;

  const items = ids.map((i) => {
    const qKey = `services.faq.items.${i}.q`;
    const aKey = `services.faq.items.${i}.a`;
    const metaKey = `services.faq.items.${i}.meta`;

    const qVal = t(qKey);
    const aVal = t(aKey);
    const metaVal = t(metaKey);

    const fb = fallback[i]; // ✅ ya no puede ser undefined

    return {
      q: isMissingTranslation(qVal, qKey) ? fb.q : qVal,
      a: isMissingTranslation(aVal, aKey) ? fb.a : aVal,
      meta: isMissingTranslation(metaVal, metaKey) ? fb.meta : metaVal,
    };
  });

  return (
    <Section
      title={t("services.faq.title")}
      subtitle={t("services.faq.subtitle")}
      className="py-10 sm:py-12"
    >
      <div className="grid gap-3 lg:grid-cols-2">
        {items.map((it, idx) => (
          <FAQItem key={`services-faq-${idx}`} q={it.q} a={it.a} meta={it.meta} />
        ))}
      </div>
    </Section>
  );
}
