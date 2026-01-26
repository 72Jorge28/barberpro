/**
 * Buyer-editable file.
 * Branding + business info + navigation structure.
 * Text labels come from src/messages/*.json via labelKey.
 */
export const site = {
  /**
   * Public base URL of the deployed site (no trailing slash).
   * Used for canonical URLs, OpenGraph, Twitter cards, sitemap, and robots.txt.
   * Example: "https://barberpro.vercel.app" or "https://www.yourdomain.com"
   */
  url: "https://example.com",

  /**
   * Default OpenGraph image path (must exist in /public).
   * Recommended size: 1200x630.
   */
  ogImage: "/images/og.svg",
  
  brand: {
    name: "BarberPro",
    slogan: "Cortes premium. Estilo impecable. Confianza total.",
    logoText: "BarberPro",
  },
  business: {
    phone: "+1 (000) 000-0000",
    address: "123 Main St, City, Country",
    hours: [
      { day: "Mon–Fri", time: "9:00–18:00" },
      { day: "Sat", time: "10:00–16:00" },
      { day: "Sun", time: "Closed" },
    ],
  },
  links: {
    whatsapp: "https://wa.me/10000000000",
    calendly: "https://calendly.com/",
    maps: "https://maps.google.com/",
    instagram: "https://instagram.com/",
  },
  features: {
    blog: {
      enabled: true, // buyer can disable blog easily
    },
  },
  nav: {
    items: [
      { href: "/", labelKey: "nav.home" },
      { href: "/services", labelKey: "nav.services" },
      { href: "/pricing", labelKey: "nav.pricing" },
      { href: "/team", labelKey: "nav.team" },
      { href: "/gallery", labelKey: "nav.gallery" },
      { href: "/contact", labelKey: "nav.contact" },
      { href: "/blog", labelKey: "nav.blog" },
    ],
  },
} as const;

export type SiteConfig = typeof site;
