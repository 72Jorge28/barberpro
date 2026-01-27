import type { ReactNode } from "react";
import { Container } from "@/components/layout/container";

type Props = {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ title, subtitle, children, className }: Props) {
  return (
    <section className={["py-12 sm:py-16", className ?? ""].join(" ")}>
      <Container>
        {(title || subtitle) && (
          <header className="mb-6 sm:mb-8">
            {title && (
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-2 text-sm sm:text-base text-[hsl(var(--muted-fg))]">
                {subtitle}
              </p>
            )}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
