// src/blocks/home/gallery.tsx
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/layout/section";

type TFunction = (key: string, vars?: Record<string, string | number>) => string;

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

type Tile = {
  src: string;
  altKey?: string;
  colSpan: string;
  rowSpan: string;
  priority?: boolean;
  pos?: string; // object-position opcional
};

function TileCard({
  src,
  alt,
  colSpan,
  rowSpan,
  priority,
  pos,
}: {
  src: string;
  alt: string;
  colSpan: string;
  rowSpan: string;
  priority?: boolean;
  pos?: string;
}) {
  return (
    <div
      className={cx(
        "group relative overflow-hidden rounded-2xl",
        "border border-[hsl(var(--border))] bg-[hsl(var(--card))]",
        "shadow-[var(--shadow-sm)] transition",
        "hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]",
        "focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[hsl(var(--ring))]",
        colSpan,
        rowSpan
      )}
      tabIndex={0}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={cx(
          "object-cover",
          pos ?? "object-center",
          "transition-transform duration-700 ease-out",
          "group-hover:scale-[1.035]"
        )}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      {/* overlay MUY sutil (solo para contraste, no para oscurecer) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/5 opacity-80" />
        <div className="absolute inset-0 ring-1 ring-white/10" />
      </div>

      {/* icono sutil hover */}
      <div className="pointer-events-none absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-black/25 text-white/80 opacity-0 backdrop-blur transition group-hover:opacity-100">
        <span className="text-sm">↗</span>
      </div>
    </div>
  );
}

export function HomeGallery({ t, locale }: { t: TFunction; locale?: string }) {
  const fallbackAlt = t("home.gallery.imageAlt");

  const tiles: Tile[] = [
    { src: "/images/demo/g1.jpg", colSpan: "col-span-2 lg:col-span-7", rowSpan: "row-span-2", priority: true },
    { src: "/images/demo/g2.jpg", colSpan: "col-span-1 lg:col-span-5", rowSpan: "row-span-1" },
    { src: "/images/demo/g3.jpg", colSpan: "col-span-1 lg:col-span-5", rowSpan: "row-span-1" },
    { src: "/images/demo/g2.jpg", colSpan: "col-span-1 lg:col-span-4", rowSpan: "row-span-1" },
    { src: "/images/demo/g3.jpg", colSpan: "col-span-1 lg:col-span-4", rowSpan: "row-span-1" },
    { src: "/images/demo/g1.jpg", colSpan: "col-span-2 lg:col-span-4", rowSpan: "row-span-1" },
  ];

  return (
    <Section title={t("home.gallery.title")} subtitle={t("home.gallery.subtitle")} className="py-12 sm:py-16">
      <div
        className={cx(
          "grid gap-3",
          "grid-cols-2 lg:grid-cols-12",
          "auto-rows-[140px] sm:auto-rows-[170px] lg:auto-rows-[200px]"
        )}
      >
        {tiles.map((tile, idx) => {
          const alt = tile.altKey ? t(tile.altKey) : fallbackAlt;
          return (
            <TileCard
              key={`${tile.src}-${idx}`}
              src={tile.src}
              alt={alt}
              colSpan={tile.colSpan}
              rowSpan={tile.rowSpan}
              priority={tile.priority}
              pos={tile.pos}
            />
          );
        })}
      </div>

      {locale && (
        <div className="mt-6 flex justify-center">
          <Link
            href={`/${locale}/gallery`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--fg))] hover:opacity-90 transition"
          >
            {t("home.gallery.viewMore")}
            <span className="opacity-70">→</span>
          </Link>
        </div>
      )}
    </Section>
  );
}
