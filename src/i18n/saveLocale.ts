import { isLocale, type Locale } from "@/i18n/locales";

export function toSafeLocale(input: unknown): Locale {
  return isLocale(input) ? input : "es";
}
