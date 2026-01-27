// src/app/[locale]/gallery/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";

import { site } from "@/config/site";
import { isLocale } from "@/i18n/locales";
import { getMessages } from "@/i18n/getMessages";
import { createT } from "@/i18n/t";

import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const messages = await getMessages(locale);
  const t = createT(messages);

  const gallery = site.media.gallery;
  const items = gallery?.enabled ? gallery.items : [];

  return (
    <main>
      <Section title={t("gallery.page.title")} subtitle={t("gallery.page.subtitle")}>
        <Card className="p-6">
          <p className="text-sm text-[hsl(var(--muted-fg))]">{t("gallery.page.note")}</p>
        </Card>

        {items.length ? (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((it, i) => {
              const titleKey = `gallery.items.${i}.title`;
              const descKey = `gallery.items.${i}.desc`;

              const title = t(titleKey);
              const desc = t(descKey);

              // Fallback si falta traducción
              const safeTitle = title === titleKey ? `Gallery item ${i + 1}` : title;
              const safeDesc = desc === descKey ? "" : desc;

              const alt = it.altKey ? t(it.altKey) : safeTitle;

              return (
                <Card key={it.src + i} className="overflow-hidden">
                  <div className="relative aspect-[4/3] bg-[hsl(var(--muted))]">
                    <Image
                      src={it.src}
                      alt={alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                    {/* Overlay premium sutil */}
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/0 via-black/0 to-black/35" />
                  </div>

                  <div className="p-5">
                    <div className="text-sm font-semibold text-[hsl(var(--fg))]">
                      {safeTitle}
                    </div>
                    {safeDesc ? (
                      <p className="mt-1 text-sm text-[hsl(var(--muted-fg))]">{safeDesc}</p>
                    ) : null}
                  </div>
                </Card>
              );
            })}
          </div>
        ) : (
          <Card className="mt-6 p-6">
            <p className="text-sm text-[hsl(var(--muted-fg))]">
              {t("gallery.page.empty")}
            </p>
          </Card>
        )}
      </Section>
    </main>
  );
}
