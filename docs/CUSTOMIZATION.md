# CUSTOMIZATION — BarberPro (Buyer Guide)

This document explains how to customize the template **without touching components**.
BarberPro is designed to be customized from **1–3 files** (plus optional blog posts).

---

## 🛠 What you edit (buyer-friendly)

### Required (most buyers only edit these)

1. `src/config/site.ts` — Brand + business info + nav + links + SEO base.
2. `src/config/theme.ts` — Theme presets + design tokens + fonts.
3. `src/messages/es.json` and `src/messages/en.json` — All text content (bilingual).

### Optional

- `src/content/blog/*/*.mdx` — Blog posts (MDX).
- `public/images/*` — Images (safe placeholders by default).

---

## 🚀 0) Quick start (5 minutes)

✅ Do these 3 edits first:

- Set your real domain in `site.url`
- Change `brand.name` + `brand.slogan`
- Update `links.whatsapp`

**Then run:**

```bash
pnpm dev

```

> **Open:** `http://localhost:3000`
> _The site redirects `/` → `/es` by default._

---

## 1) Branding + business info (`src/config/site.ts`)

### 1.1 Set your real site URL (IMPORTANT for SEO)

Find and replace with your real domain (no trailing slash):

```ts
url: "https://yourdomain.com",

```

This is used for canonical URLs, OpenGraph cards, sitemaps, and `robots.txt`.

### 1.2 OpenGraph image (social sharing preview)

```ts
ogImage: "/images/og.svg",

```

_Recommended: Replace with a 1200×630px `.jpg` or `.png` in `public/images/`._

### 1.3 Brand & Business details

Edit these objects to match your business:

```ts
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

```

### 1.4 Links + integrations

```ts
links: {
  whatsapp: "https://wa.me/10000000000",
  calendly: "https://calendly.com/your-page",
  maps: "https://goo.gl/maps/your-link",
  instagram: "https://instagram.com/yourprofile",
},

```

---

## 2) Theme presets (`src/config/theme.ts`)

### 2.1 Switch preset

Change the `activePreset` to update the entire UI instantly:

```ts
activePreset: "gold", // Options: "classic", "dark", "gold"

```

---

## 3) Text content (Bilingual)

Edit `src/messages/es.json` (Spanish) and `src/messages/en.json` (English).

**Important:** Keep the same keys in both files. Only change the values.

```json
{
  "nav.home": "Inicio",
  "home.hero.title": "Cortes premium",
  "home.hero.subtitle": "Estilo impecable para tu día a día."
}
```

---

## 4) Blog (MDX)

Blog posts are located in `src/content/blog/[locale]/*.mdx`.

**Recommended frontmatter:**

```mdx
---
title: "Primer corte"
date: "2026-01-25"
description: "Guía rápida para tu primer corte premium."
ogImage: "/images/og.svg"
---

# Your post content here...
```

---

## 5) Images

All images live in `public/images/`. Replace placeholders with your own photos using the same file names or updating the paths in `site.ts`.

---

## 6) Validate (Recommended before deploy)

Run these commands to ensure everything is perfect:

```bash
pnpm lint
pnpm typecheck
pnpm build

```

---

## ⚠️ Common issues

- **404 Errors:** Ensure your custom pages are inside `src/app/[locale]/`.
- **Missing Labels:** If a text doesn't show, check that the key exists in **both** JSON files.
- **Social Preview:** `site.url` must be your real domain for images to show on WhatsApp/Twitter.

 **Note:** Most users should **not** edit `src/components/*` or `src/lib/*`. All basic customization is handled via config files.