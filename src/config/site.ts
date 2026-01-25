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
    items: [
      { href: "/", label: "Home" },
      { href: "/services", label: "Services" },
      { href: "/pricing", label: "Pricing" },
      { href: "/team", label: "Team" },
      { href: "/gallery", label: "Gallery" },
      { href: "/contact", label: "Contact" },
      { href: "/blog", label: "Blog" }
    ],
  },
} as const;

export type SiteConfig = typeof site;
