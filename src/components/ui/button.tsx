import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
};

type ButtonProps = CommonProps & {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

type LinkProps = CommonProps & {
  href: string;
};

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

function getClasses(variant: Variant, size: Size) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold " +
    "rounded-[var(--radius-sm)] transition " +
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 " +
    "focus-visible:outline-[hsl(var(--ring))]";

  const sizes: Record<Size, string> = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-4 text-sm",
  };

  const variants: Record<Variant, string> = {
    primary:
      "bg-[hsl(var(--primary))] text-[hsl(var(--primary-fg))] hover:opacity-95",
    secondary:
      "bg-[hsl(var(--accent))] text-[hsl(var(--accent-fg))] border border-[hsl(var(--border))] hover:bg-[hsl(var(--muted))]",
    ghost:
      "bg-transparent text-[hsl(var(--fg))] hover:bg-[hsl(var(--muted))] border border-transparent",
  };

  return cx(base, sizes[size], variants[variant]);
}

export function Button(props: ButtonProps): JSX.Element;
export function Button(props: LinkProps): JSX.Element;
export function Button(props: ButtonProps | LinkProps): JSX.Element {
  const {
    children,
    className,
    variant = "primary",
    size = "md",
  } = props;

  const cls = cx(getClasses(variant, size), className);

  if ("href" in props) {
    return (
      <Link href={props.href} className={cls}>
        {children}
      </Link>
    );
  }

  const { onClick, type = "button", disabled } = props;

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}
