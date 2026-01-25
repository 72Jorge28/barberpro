/**
 * Buyer-editable file.
 * Change branding, business info, nav, links here (no components needed).
 */
export const site = {
  brand: {
    name: "BarberPro",
    slogan: "Cortes premium. Estilo impecable.",
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
  nav: {
    // todavía sin i18n real: esto luego lo traducimos por messages
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
