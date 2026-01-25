import type { Messages } from "./messages";

export function createT(messages: Messages) {
  return function t(key: string) {
    return messages[key] ?? key; // fallback seguro
  };
}
