import { Locale, locales } from "./locales";

// src/i18n/locales.ts
export function isLocale(v: unknown): v is Locale {
  return typeof v === "string" && locales.includes(v as Locale);
}
