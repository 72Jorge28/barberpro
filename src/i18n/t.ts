import type { Messages } from "./getMessages";

export function createT(messages: Messages) {
  return (key: string, vars?: Record<string, string | number>) => {
    let out = messages[key] ?? key;
    if (vars) {
      for (const [k, v] of Object.entries(vars)) {
        out = out.replaceAll(`{${k}}`, String(v));
      }
    }
    return out;
  };
}
