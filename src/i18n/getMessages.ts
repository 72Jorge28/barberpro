import type { Locale } from "./locales";

export type Messages = Record<string, string>;

export async function getMessages(locale: Locale): Promise<Messages> {
  try {
    const mod = await import(`@/messages/${locale}.json`);
    return mod.default as Messages;
  } catch {
    const mod = await import(`@/messages/en.json`);
    return mod.default as Messages;
  }
}
