// src/components/ui/card.tsx
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: Props) {
  return (
    <div
      className={[
        "rounded-[var(--radius-md)]",
        "bg-[hsl(var(--card))] text-[hsl(var(--card-fg))]",
        "border border-[hsl(var(--border))]",
        "shadow-[var(--shadow-sm)]",
        "ring-1 ring-white/5", // en dark se ve más premium
        className ?? "",
      ].join(" ")}
    >
      {children}
    </div>
  );
}
