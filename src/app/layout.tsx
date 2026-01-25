import "./globals.css";
import { theme } from "@/config/theme";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "BarberPro",
  description: "Next.js template",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" data-theme={theme.activePreset}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
