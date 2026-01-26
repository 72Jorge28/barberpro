import { site } from "@/config/site";

type JsonLdProps = {
  /** Absolute URL of the page where this JSON-LD is rendered */
  pageUrl: string;
  /** Optional override for business type */
  type?: "LocalBusiness" | "BarberShop";
};

function pickSameAsFromLinks(links: Record<string, unknown> | undefined) {
  if (!links) return [];

  // Keep only string URLs. (Buyer-friendly: no strict social schema needed.)
  const urls = Object.values(links).filter((v): v is string => typeof v === "string");

  // Optional: exclude non-social links like maps/calendly/whatsapp from sameAs
  // (Schema "sameAs" is intended for social/profile URLs)
  return urls.filter((u) => {
    const lower = u.toLowerCase();
    if (lower.includes("wa.me") || lower.includes("whatsapp.com")) return false;
    if (lower.includes("calendly.com")) return false;
    if (lower.includes("maps.google")) return false;
    return true;
  });
}

export function JsonLd({ pageUrl, type = "BarberShop" }: JsonLdProps) {
  const base = (site.url || "https://example.com").replace(/\/$/, "");
  const businessName = site.brand.name;

  // Address is a buyer-friendly string; schema accepts it.
  const addressText = site.business.address;

  const sameAs = pickSameAsFromLinks(site.links as Record<string, unknown> | undefined);

  const data = {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${base}#business`,
    name: businessName,
    url: base,
    mainEntityOfPage: pageUrl,
    telephone: site.business.phone,
    address: addressText,
    sameAs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
