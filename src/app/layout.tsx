import "./globals.css";
import { theme } from "@/config/theme";

export const metadata = {
  title: "BarberPro",
  description: "Next.js template",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" data-theme={theme.activePreset}>
      <body>{children}</body>
    </html>
  );
}
