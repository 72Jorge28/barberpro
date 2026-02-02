// src/app/[locale]/pricing/page.tsx
import { notFound } from "next/navigation";

import { site } from "@/config/site";
import { isLocale, type Locale } from "@/i18n/locales";
import { getMessages } from "@/i18n/getMessages";
import { createT } from "@/i18n/t";

import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Params = { locale: string } | Promise<{ locale: string }>;

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

function Check() {
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

type TFunction = (
  key: string,
  vars?: Record<string, string | number>,
) => string;

function safeText(v: string, key: string) {
  if (!v) return "";
  if (v === key) return "";
  return v.trim();
}

function readList(t: TFunction, base: string, count: number) {
  const out: string[] = [];
  for (let i = 0; i < count; i++) {
    const k = `${base}.${i}`;
    const v = safeText(t(k), k);
    if (v) out.push(v);
  }
  return out;
}

function PriceCard({
  locale,
  t,
  index,
  featured,
}: {
  locale: Locale;
  t: TFunction;
  index: number;
  featured?: boolean;
}) {
  const base = `pricing.plans.${index}`;

  const titleKey = `${base}.title`;
  const subtitleKey = `${base}.subtitle`;
  const priceKey = `${base}.price`;
  const periodKey = `${base}.period`;
  const badgeKey = `${base}.badge`;
  const ctaPrimaryKey = `${base}.ctaPrimary`;
  const ctaSecondaryKey = `${base}.ctaSecondary`;

  const title = safeText(t(titleKey), titleKey) || `Plan ${index + 1}`;
  const subtitle = safeText(t(subtitleKey), subtitleKey);
  const price = safeText(t(priceKey), priceKey);
  const period = safeText(t(periodKey), periodKey);
  const badge = safeText(t(badgeKey), badgeKey);

  const features = readList(t, `${base}.features`, 8);

  const primaryLabel =
    safeText(t(ctaPrimaryKey), ctaPrimaryKey) || t("pricing.cta.primary");
  const secondaryLabel =
    safeText(t(ctaSecondaryKey), ctaSecondaryKey) || t("pricing.cta.secondary");

  const primaryHref =
    site.features?.booking?.mode === "calendly"
      ? site.links.calendly
      : `/${locale}/booking`;

  return (
    <Card
      className={cx(
        "relative overflow-hidden p-6 sm:p-7",
        "border border-[hsl(var(--border))]",
        "shadow-[var(--shadow-sm)]",
        featured && "ring-1 ring-[hsl(var(--ring))]/40",
      )}
    >
      <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[hsl(var(--ring))]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-[hsl(var(--primary))]/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />

      <div className="relative">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-lg font-semibold tracking-tight text-[hsl(var(--fg))]">
              {title}
            </h3>
            {subtitle ? (
              <p className="mt-2 text-sm text-[hsl(var(--muted-fg))]">
                {subtitle}
              </p>
            ) : null}
          </div>

          {badge ? (
            <span
              className={cx(
                "shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold",
                "border border-[hsl(var(--border))] bg-[hsl(var(--muted))] text-[hsl(var(--fg))]",
              )}
            >
              {badge}
            </span>
          ) : null}
        </div>

        <div className="mt-5 flex items-baseline gap-2">
          <div className="text-3xl font-bold tracking-tight text-[hsl(var(--fg))]">
            {price || t("pricing.planFallback.price")}
          </div>
          {period ? (
            <div className="text-sm text-[hsl(var(--muted-fg))]">{period}</div>
          ) : null}
        </div>

        {features.length ? (
          <ul className="mt-6 space-y-2 text-sm text-[hsl(var(--muted-fg))]">
            {features.slice(0, 8).map((f, idx) => (
              <li key={`${base}-feature-${idx}`} className="flex gap-2">
                <span className="mt-0.5">
                  <Check />
                </span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-6 text-sm text-[hsl(var(--muted-fg))]">
            {t("pricing.planFallback.features")}
          </p>
        )}

        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          <Button
            href={primaryHref}
            variant={featured ? "primary" : "secondary"}
            className="w-full"
          >
            {primaryLabel}
          </Button>

          <Button href={site.links.whatsapp} variant="ghost" className="w-full">
            {secondaryLabel}
          </Button>
        </div>

        <p className="mt-4 text-xs text-[hsl(var(--muted-fg))]">
          {t("pricing.disclaimer")}
        </p>
      </div>
    </Card>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details
      className={cx(
        "group rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))]",
        "shadow-[var(--shadow-sm)] open:shadow-[var(--shadow-md)]",
        "transition",
      )}
    >
      <summary className="cursor-pointer list-none px-5 py-4">
        <div className="flex items-start justify-between gap-4">
          <span className="text-sm font-semibold text-[hsl(var(--fg))]">
            {q}
          </span>
          <span
            aria-hidden="true"
            className={cx(
              "mt-0.5 grid h-8 w-8 place-items-center rounded-full",
              "border border-[hsl(var(--border))] bg-[hsl(var(--muted))]",
              "text-[hsl(var(--muted-fg))] transition",
              "group-open:rotate-45",
            )}
          >
            +
          </span>
        </div>
      </summary>
      <div className="px-5 pb-5 text-sm leading-relaxed text-[hsl(var(--muted-fg))]">
        {a}
      </div>
    </details>
  );
}

export default async function Page({ params }: { params: Params }) {
  const { locale } = await Promise.resolve(params);
  if (!isLocale(locale)) notFound();

  const safeLocale: Locale = locale;

  const messages = await getMessages(safeLocale);
  const t = createT(messages);

  const plans = [0, 1, 2] as const;

  const included = readList(t, "pricing.included", 6);
  const faqQ = readList(t, "pricing.faq.items.q", 4);
  const faqA = readList(t, "pricing.faq.items.a", 4);

  return (
    <main>
      <Section
        title={t("pricing.page.title")}
        subtitle={t("pricing.page.subtitle")}
      >
        <Card className="p-6">
          <p className="text-sm text-[hsl(var(--muted-fg))]">
            {t("pricing.page.note")}
          </p>
        </Card>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {plans.map((i) => (
            <PriceCard
              key={`plan-${i}`}
              locale={safeLocale}
              t={t}
              index={i}
              featured={i === 1}
            />
          ))}
        </div>
      </Section>

      <Section
        title={t("pricing.includedTitle")}
        subtitle={t("pricing.includedSubtitle")}
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {(included.length ? included : [t("pricing.includedFallback")]).map(
            (item, idx) => (
              <Card key={`included-${idx}`} className="p-5">
                <div className="flex gap-2">
                  <span className="mt-0.5">
                    <Check />
                  </span>
                  <p className="text-sm text-[hsl(var(--muted-fg))]">{item}</p>
                </div>
              </Card>
            ),
          )}
        </div>
      </Section>

      {/* <Section
        title={t("pricing.faq.title")}
        subtitle={t("pricing.faq.subtitle")}
      >
        <div className="grid gap-3 lg:grid-cols-2">
          {faqItems.map((it, i) => (
            <FAQItem key={`faq-${i}`} q={it.q} a={it.a} />
          ))}

          <Card className="p-6">
            <p className="text-sm text-[hsl(var(--muted-fg))]">
              {t("pricing.faqFallback")}
            </p>
          </Card>
        </div>
      </Section> */}
    </main>
  );
}
