import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: Props) {
  return (
    <div
      className={[
        "rounded-[var(--radius-md)] border border-[hsl(var(--border))]",
        "bg-[hsl(var(--card))] text-[hsl(var(--card-fg))]",
        "shadow-[var(--shadow-sm)]",
        className ?? "",
      ].join(" ")}
    >
      {children}
    </div>
  );
}
