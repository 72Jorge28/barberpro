import * as React from "react";

type OrnamentProps = React.SVGProps<SVGSVGElement> & {
  tone?: "soft" | "solid";
};

export function OrnFlourishA({ tone = "soft", ...props }: OrnamentProps) {
  const o = tone === "solid" ? 1 : 0.28;

  return (
    <svg
      viewBox="0 0 520 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <g
        opacity={o}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* center medallion */}
        <path
          d="M260 48 C236 48 220 64 220 80 C220 100 238 112 260 112 C282 112 300 100 300 80 C300 64 284 48 260 48 Z"
          strokeWidth="10"
        />
        <path
          d="M260 62 C248 62 240 70 240 80 C240 90 250 98 260 98 C270 98 280 90 280 80 C280 70 272 62 260 62 Z"
          strokeWidth="5"
          opacity="0.75"
        />

        {/* left wing */}
        <path
          d="M214 78 C168 78 132 60 110 40 C90 22 60 20 44 36 C30 50 36 72 58 80 C82 88 110 86 128 76"
          strokeWidth="8"
        />
        <path
          d="M176 86 C150 100 120 104 90 98"
          strokeWidth="4"
          opacity="0.7"
        />
        <path
          d="M150 64 C132 58 112 58 96 66"
          strokeWidth="3"
          opacity="0.6"
        />
        <path
          d="M118 54 C112 46 100 42 92 46 C84 50 84 60 92 64 C100 68 112 64 118 54 Z"
          strokeWidth="4"
          opacity="0.7"
        />

        {/* right wing (mirror) */}
        <path
          d="M306 78 C352 78 388 60 410 40 C430 22 460 20 476 36 C490 50 484 72 462 80 C438 88 410 86 392 76"
          strokeWidth="8"
        />
        <path
          d="M344 86 C370 100 400 104 430 98"
          strokeWidth="4"
          opacity="0.7"
        />
        <path
          d="M370 64 C388 58 408 58 424 66"
          strokeWidth="3"
          opacity="0.6"
        />
        <path
          d="M402 54 C408 46 420 42 428 46 C436 50 436 60 428 64 C420 68 408 64 402 54 Z"
          strokeWidth="4"
          opacity="0.7"
        />

        {/* baseline */}
        <path d="M60 124 H460" strokeWidth="3" opacity="0.45" />
        <circle cx="90" cy="124" r="3" fill="currentColor" opacity="0.5" />
        <circle cx="430" cy="124" r="3" fill="currentColor" opacity="0.5" />
      </g>
    </svg>
  );
}
