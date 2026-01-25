import type { Locale } from "./locales";

export type Messages = Record<string, string>;

export async function getMessages(locale: Locale): Promise<Messages> {
  switch (locale) {
    case "es":
      return (await import("@/messages/es.json")).default as Messages;
    case "en":
      return (await import("@/messages/en.json")).default as Messages;
  }
}
