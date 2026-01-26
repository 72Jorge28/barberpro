// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { theme } from "@/config/theme";

export const metadata: Metadata = {
  title: "BarberPro",
  description: "BarberPro template",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" data-theme={theme.activePreset}>
      <body>{children}</body>
    </html>
  );
}
