import React from "react";

type Props = {
  src: string;
  className?: string;
  style?: React.CSSProperties;
};

export function OrnamentMask({ src, className = "", style }: Props) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
      style={{
        // IMPORTANTE: si no hay width/height visibles, no se pinta nada.
        // Con Tailwind h-*/w-* ya se setea, pero esto ayuda si algo falla:
        display: "block",

        backgroundColor: "currentColor",

        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskPosition: "center",
        maskPosition: "center",

        ...style,
      }}
    />
  );
}
