/**
 * Buyer-editable file.
 * Structural configuration only (no translated copy).
 * All visible labels must come from messages/*.json via labelKey.
 */
export const site = {
  // ---------------------------------------------------------------------------
  // Meta / i18n routing (structural)
  // ---------------------------------------------------------------------------
  url: "https://example.com", // no trailing slash
  defaultLocale: "es",
  locales: ["es", "en"] as const,

  // ---------------------------------------------------------------------------
  // SEO (structural)
  // ---------------------------------------------------------------------------
  seo: {
    ogImage: "/images/og.svg", // must exist in /public
    twitterHandle: "@yourhandle", // optional
  },

  // ---------------------------------------------------------------------------
  // Brand (structural)
  // NOTE: If you render this as visible copy, prefer i18n key brand.slogan
  // ---------------------------------------------------------------------------
  brand: {
    name: "BarberPro",
    logoText: "BarberPro",
    slogan: "Cortes premium. Estilo impecable. Confianza total.",
  },

  // ---------------------------------------------------------------------------
  // Business info (structural; labels are i18n)
  // ---------------------------------------------------------------------------
  business: {
    phone: "+1 (000) 000-0000",
    address: "123 Main St, City, Country",
    email: "hello@barberpro.com",
    hours: [
      { day: "Mon–Fri", time: "9:00–18:00" },
      { day: "Sat", time: "10:00–16:00" },
      { day: "Sun", time: "Closed" },
    ],
  },

  // ---------------------------------------------------------------------------
  // External links (structural)
  // ---------------------------------------------------------------------------
  links: {
    whatsapp: "https://wa.me/10000000000",
    whatsappMessage:
      "https://wa.me/10000000000?text=Hola%2C%20quiero%20hacer%20una%20consulta.",
    calendly: "https://calendly.com/",
    maps: "https://maps.google.com/",
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },

  // ---------------------------------------------------------------------------
  // Feature flags (buyer friendly)
  // ---------------------------------------------------------------------------
  features: {
    blog: { enabled: true },
    booking: {
      mode: "whatsapp" as "whatsapp" | "calendly" | "internal",
    },
    gallery: { enabled: true },
  },

  // ---------------------------------------------------------------------------
  // Media (all paths in /public)
  // ---------------------------------------------------------------------------
  media: {
    heroHome: "/images/demo/hero.jpg",
    heroServices: "/images/demo/services-hero.jpg",

    // Team page
    teamHero: "/images/demo/team-hero.jpg",
    teamHeroInset: "/images/demo/team-hero-inset.jpg",
    teamSideA: "/images/demo/team-side-a.jpg",
    teamSideB: "/images/demo/team-side-b.jpg",

    // Gallery demo items
    gallery: {
      enabled: true,
      items: [
        { src: "/images/demo/gallery/01.jpg", altKey: "gallery.items.0.title" },
        { src: "/images/demo/gallery/02.jpg", altKey: "gallery.items.1.title" },
        { src: "/images/demo/gallery/03.jpg", altKey: "gallery.items.2.title" },
        { src: "/images/demo/gallery/04.jpg", altKey: "gallery.items.3.title" },
        { src: "/images/demo/gallery/05.jpg", altKey: "gallery.items.4.title" },
        { src: "/images/demo/gallery/06.jpg", altKey: "gallery.items.5.title" },
      ],
    },
  },

  // ---------------------------------------------------------------------------
  // Team (structural)
  // ---------------------------------------------------------------------------
  team: {
    members: [
      {
        name: "Alex Rivera",
        image: "/images/demo/team/member-1.jpg",
        roleKey: "team.members.items.0.role",
        bioKey: "team.members.items.0.bio",
        socials: { instagram: "https://instagram.com/" },
      },
      {
        name: "Sofía Martinez",
        image: "/images/demo/team/member-2.jpg",
        roleKey: "team.members.items.1.role",
        bioKey: "team.members.items.1.bio",
        socials: { instagram: "https://instagram.com/" },
      },
      {
        name: "Diego Gómez",
        image: "/images/demo/team/member-3.jpg",
        roleKey: "team.members.items.2.role",
        bioKey: "team.members.items.2.bio",
        socials: { instagram: "https://instagram.com/" },
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Navigation (href is locale-agnostic)
  // ---------------------------------------------------------------------------
  nav: {
    items: [
      { href: "/", labelKey: "nav.home", enabled: true },
      { href: "/services", labelKey: "nav.services", enabled: true },
      { href: "/pricing", labelKey: "nav.pricing", enabled: true },
      { href: "/team", labelKey: "nav.team", enabled: true },
      { href: "/gallery", labelKey: "nav.gallery", enabled: true },
      { href: "/contact", labelKey: "nav.contact", enabled: true },
      { href: "/blog", labelKey: "nav.blog", enabled: true },
    ],
    cta: {
      labelKey: "nav.cta.booking",
      href: "/booking",
      enabled: true,
      variant: "primary" as "primary" | "secondary" | "ghost",
    },
  },

  // ---------------------------------------------------------------------------
  // Legal (structural, labels in i18n)
  // ---------------------------------------------------------------------------
  legal: {
    privacyHref: "/privacy",
    termsHref: "/terms",
  },
} as const;

export type SiteConfig = typeof site;
