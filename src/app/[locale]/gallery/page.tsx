// src/app/[locale]/gallery/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";

import { site } from "@/config/site";
import { isLocale, type Locale } from "@/i18n/locales";
import { getMessages } from "@/i18n/getMessages";
import { createT } from "@/i18n/t";

import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
// import { OrnamentMask } from "@/components/ornaments/ornament-mask";

// import { CornerOrnament01 } from "@/components/ornaments/corner-01";
// import { CornerOrnament02 } from "@/components/ornaments/corner-02";
// import { FlourishOrnament01 } from "@/components/ornaments/flourish-01";
// import { OrnCornerA } from "@/components/ornaments/orn-corner-a";
// import { OrnFlourishA } from "@/components/ornaments/orn-flourish-a";
// import { OrnDividerA } from "@/components/ornaments/orn-divider-a";

type Params = { locale: string } | Promise<{ locale: string }>;

type GalleryItem = {
  src: string;
  altKey?: string;
};

type GalleryConfig =
  | { enabled: boolean; items: readonly GalleryItem[] }
  | { items: readonly GalleryItem[] }
  | undefined;

function getGalleryItems(gallery: GalleryConfig): readonly GalleryItem[] {
  if (!gallery) return [];
  if ("enabled" in gallery) return gallery.enabled ? gallery.items : [];
  return gallery.items ?? [];
}

export default async function Page({ params }: { params: Params }) {
  const { locale } = await Promise.resolve(params);
  if (!isLocale(locale)) notFound();

  const safeLocale: Locale = locale;

  const messages = await getMessages(safeLocale);
  const t = createT(messages);

  const gallery = site.media.gallery as unknown as GalleryConfig;
  const items = getGalleryItems(gallery);

  // const ORN = {
  //   cornerA: "/ornaments/corner-01.svg",
  //   cornerB: "/ornaments/corner-02.svg",
  //   flourish: "/ornaments/flourish-01.svg",
  // } as const;

  return (
    <main>
      <Section title={t("gallery.page.title")} subtitle={t("gallery.page.subtitle")}>
        <Card className="p-6">
          <p className="text-sm text-[hsl(var(--muted-fg))]">{t("gallery.page.note")}</p>
        </Card>

        {/* (tu bloque de ornamentos no lo toqué; está bien) */}

        {items.length ? (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((it, i) => {
              const titleKey = `gallery.items.${i}.title`;
              const descKey = `gallery.items.${i}.desc`;

              const title = t(titleKey);
              const desc = t(descKey);

              const safeTitle = title === titleKey ? `Gallery item ${i + 1}` : title;
              const safeDesc = desc === descKey ? "" : desc;

              const alt = it.altKey ? t(it.altKey) : safeTitle;

              return (
                <Card key={`${it.src}-${i}`} className="overflow-hidden">
                  <div className="relative aspect-[4/3] bg-[hsl(var(--muted))]">
                    <Image
                      src={it.src}
                      alt={alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/0 via-black/0 to-black/35" />

                    {/* <div className="absolute inset-0 text-white">
                      <OrnamentMask
                        src={ORN.cornerA}
                        className="left-[-20px] top-[-20px] h-32 w-32"
                        style={{ opacity: 0.35 }}
                      />
                    </div> */}
                  </div>

                  <div className="relative p-5">
                    <div className="text-sm font-semibold text-[hsl(var(--fg))]">{safeTitle}</div>
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
            <p className="text-sm text-[hsl(var(--muted-fg))]">{t("gallery.page.empty")}</p>
          </Card>
        )}
      </Section>
    </main>
  );
}
