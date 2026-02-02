import * as React from "react";

type OrnamentProps = React.SVGProps<SVGSVGElement> & {
  tone?: "soft" | "solid";
};

export function OrnDividerA({ tone = "soft", ...props }: OrnamentProps) {
  const o = tone === "solid" ? 1 : 0.35;

  return (
    <svg
      viewBox="0 0 720 80"
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
        {/* lines */}
        <path d="M40 40 H280" strokeWidth="3" opacity="0.55" />
        <path d="M440 40 H680" strokeWidth="3" opacity="0.55" />

        {/* center flourish */}
        <path
          d="M360 20 C340 20 328 30 328 40 C328 52 342 60 360 60 C378 60 392 52 392 40 C392 30 380 20 360 20 Z"
          strokeWidth="6"
        />
        <path
          d="M332 40 C320 32 304 34 300 46 C296 58 310 66 324 60"
          strokeWidth="4"
          opacity="0.7"
        />
        <path
          d="M388 40 C400 32 416 34 420 46 C424 58 410 66 396 60"
          strokeWidth="4"
          opacity="0.7"
        />

        {/* pearls */}
        <circle cx="280" cy="40" r="3" fill="currentColor" opacity="0.55" />
        <circle cx="440" cy="40" r="3" fill="currentColor" opacity="0.55" />
        <circle cx="360" cy="40" r="2.5" fill="currentColor" opacity="0.6" />
      </g>
    </svg>
  );
}
