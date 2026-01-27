// src/app/[locale]/contact/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";

import { site } from "@/config/site";
import { isLocale } from "@/i18n/locales";
import { getMessages } from "@/i18n/getMessages";
import { createT } from "@/i18n/t";

import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

type SocialId = "whatsapp" | "instagram" | "facebook";

type SocialItem = {
  id: SocialId;
  href: string;
  className: string;
  labelKey: string; // i18n aria/title
  icon: (props: { className?: string }) => React.ReactNode;
};

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

// Minimal inline icons (no extra libs, no sprite dependency)
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.53 15.2L2 22l4.95-1.37A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.18-1.13l-.3-.18-2.94.82.8-2.86-.2-.31A8.2 8.2 0 1 1 12 20.2Zm4.78-6.18c-.26-.13-1.52-.75-1.75-.84-.24-.09-.41-.13-.58.13-.17.26-.67.84-.82 1.01-.15.17-.3.2-.56.07-.26-.13-1.1-.4-2.1-1.27-.78-.7-1.31-1.56-1.46-1.82-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.58-1.4-.8-1.92-.21-.5-.42-.43-.58-.44h-.5c-.17 0-.45.07-.68.32-.24.26-.9.88-.9 2.14 0 1.26.92 2.48 1.05 2.65.13.17 1.8 2.74 4.35 3.84.61.26 1.08.41 1.45.52.61.19 1.16.16 1.6.1.49-.07 1.52-.62 1.74-1.22.22-.6.22-1.12.15-1.22-.06-.1-.24-.16-.5-.29Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9A3.5 3.5 0 0 0 20 16.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.75-2.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.87.24-1.46 1.5-1.46H16.7V5.1c-.3-.04-1.35-.13-2.56-.13-2.53 0-4.26 1.54-4.26 4.36V11H7.3v3h2.58v8h3.62Z" />
    </svg>
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const messages = await getMessages(locale);
  const t = createT(messages);

  const socials: SocialItem[] = [
    {
      id: "whatsapp",
      href: site.links.whatsapp,
      labelKey: "contact.social.whatsapp",
      className:
        "bg-emerald-500/10 text-emerald-200 border-emerald-500/20 hover:border-emerald-400/40 hover:bg-emerald-500/15 focus-visible:ring-emerald-400/40",
      icon: ({ className }) => <WhatsAppIcon className={className} />,
    },
    {
      id: "instagram",
      href: site.links.instagram,
      labelKey: "contact.social.instagram",
      className:
        "bg-pink-500/10 text-pink-200 border-pink-500/20 hover:border-pink-400/40 hover:bg-pink-500/15 focus-visible:ring-pink-400/40",
      icon: ({ className }) => <InstagramIcon className={className} />,
    },
    {
      id: "facebook",
      href: site.links.facebook ?? "https://facebook.com/",
      labelKey: "contact.social.facebook",
      className:
        "bg-blue-500/10 text-blue-200 border-blue-500/20 hover:border-blue-400/40 hover:bg-blue-500/15 focus-visible:ring-blue-400/40",
      icon: ({ className }) => <FacebookIcon className={className} />,
    },
  ];

  const hoursText = site.business.hours
    .map((h) => `${h.day}: ${h.time}`)
    .join(" · ");

  const whatsappHref =
    site.links.whatsappMessage ??
    site.links.whatsapp;

  return (
    <main>
      {/* Header (premium, consistente con tu look) */}
      <section className="border-b border-[hsl(var(--border))] bg-[hsl(var(--bg))]">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-xs uppercase tracking-[0.25em] text-[hsl(var(--muted-fg))]">
            {t("contact.page.kicker")}
          </p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[hsl(var(--fg))] sm:text-4xl">
            {t("contact.page.title")}
          </h1>

          <p className="mt-3 max-w-2xl text-sm text-[hsl(var(--muted-fg))]">
            {t("contact.page.subtitle")}
          </p>
        </div>
      </section>

      <Section title={t("contact.section.title")} subtitle={t("contact.section.subtitle")} className="py-10 sm:py-12">
        {/* Social icons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {socials.map((s) => {
            const label = t(s.labelKey);
            return (
              <a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className={cx(
                  "inline-flex h-12 w-12 items-center justify-center rounded-full",
                  "border shadow-[var(--shadow-sm)] transition-transform",
                  "hover:scale-110 hover:shadow-[var(--shadow-md)]",
                  "focus-visible:outline-none focus-visible:ring-2",
                  s.className
                )}
              >
                {s.icon({ className: "h-6 w-6" })}
              </a>
            );
          })}
        </div>

        {/* Info card */}
        <article className="relative mt-8 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] shadow-[var(--shadow-sm)] overflow-hidden">
          {/* Decorative bar */}
          <span className="pointer-events-none absolute inset-y-0 left-0 w-1.5 bg-[hsl(var(--ring))]/80" />

          {/* subtle glow */}
          <div className="pointer-events-none absolute -top-28 -right-28 h-72 w-72 rounded-full bg-[hsl(var(--ring))]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-[hsl(var(--primary))]/10 blur-3xl" />

          <div className="relative p-6 sm:p-8 pl-8 space-y-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-[hsl(var(--fg))]">
                {t("contact.card.title")}
              </h2>
              <p className="mt-1 text-sm text-[hsl(var(--muted-fg))]">
                {t("contact.card.subtitle")}
              </p>
            </div>

            <ul className="space-y-2 text-sm text-[hsl(var(--muted-fg))]">
              <li>
                <span className="font-semibold text-[hsl(var(--fg))]">
                  {t("contact.lines.addressLabel")}
                </span>{" "}
                {site.business.address}
              </li>
              <li>
                <span className="font-semibold text-[hsl(var(--fg))]">
                  {t("contact.lines.hoursLabel")}
                </span>{" "}
                {hoursText}
              </li>
              <li>
                <span className="font-semibold text-[hsl(var(--fg))]">
                  {t("contact.lines.phoneLabel")}
                </span>{" "}
                {site.business.phone}
              </li>
              {site.business.email ? (
                <li>
                  <span className="font-semibold text-[hsl(var(--fg))]">
                    {t("contact.lines.emailLabel")}
                  </span>{" "}
                  {site.business.email}
                </li>
              ) : null}
            </ul>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                href={whatsappHref}
                variant="primary"
                className="w-full sm:w-auto"
              >
                {t("contact.cta.whatsapp")}
              </Button>

              <Link
                className="inline-flex items-center justify-center rounded-full border border-[hsl(var(--border))] bg-transparent px-6 py-2 text-sm font-medium text-[hsl(var(--fg))] hover:bg-[hsl(var(--muted))]"
                href={`/${locale}/gallery`}
              >
                {t("contact.cta.gallery")}
              </Link>
            </div>

            <p className="text-xs text-[hsl(var(--muted-fg))]">
              {t("contact.note")}
            </p>
          </div>
        </article>
      </Section>
    </main>
  );
}
