"use client";

import React, { createContext, useContext, useMemo } from "react";
import type { Locale } from "./locales";
import type { Messages } from "./getMessages";
import { createT } from "./t";

type I18nCtx = {
  locale: Locale;
  messages: Messages;
  t: (key: string, vars?: Record<string, string | number>) => string;
};

const Ctx = createContext<I18nCtx | null>(null);

export function I18nProvider({
  locale,
  messages,
  children,
}: {
  locale: Locale;
  messages: Messages;
  children: React.ReactNode;
}) {
  const value = useMemo(() => {
    const t = createT(messages);
    return { locale, messages, t };
  }, [locale, messages]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useI18n() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}

export function useT() {
  return useI18n().t;
}
