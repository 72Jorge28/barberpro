import * as React from "react";

type OrnamentProps = React.SVGProps<SVGSVGElement> & {
  tone?: "soft" | "solid";
};

export function OrnCornerA({ tone = "soft", ...props }: OrnamentProps) {
  const o = tone === "solid" ? 1 : 0.35;

  return (
    <svg
      viewBox="0 0 220 220"
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
        {/* Main frame curve */}
        <path
          d="M24 196 C24 120 26 70 60 50 C88 34 124 34 150 52 C176 70 188 102 190 134 C192 162 180 188 150 196"
          strokeWidth="10"
        />
        {/* Inner guide curve */}
        <path
          d="M40 190 C40 124 42 82 70 64 C94 48 124 48 144 62 C164 76 174 102 176 130 C178 154 168 174 144 190"
          strokeWidth="5"
          opacity="0.75"
        />
        {/* Spiral (volute) */}
        <path
          d="M148 90 C132 78 112 86 112 106 C112 124 128 132 144 122 C160 112 156 92 140 90"
          strokeWidth="4"
          opacity="0.7"
        />
        <path
          d="M142 104 C136 100 130 104 130 110 C130 116 136 118 140 114 C144 110 144 106 142 104"
          strokeWidth="3"
          opacity="0.6"
        />
        {/* Leaf */}
        <path
          d="M90 150 C104 130 132 128 150 144 C132 162 104 166 90 150 Z"
          strokeWidth="5"
          opacity="0.7"
        />
        <path
          d="M98 150 C112 146 128 146 142 150"
          strokeWidth="3"
          opacity="0.55"
        />
        {/* Pearl dots */}
        <circle cx="64" cy="176" r="3.5" fill="currentColor" opacity="0.6" />
        <circle cx="84" cy="188" r="2.8" fill="currentColor" opacity="0.55" />
        <circle cx="110" cy="196" r="2.4" fill="currentColor" opacity="0.5" />
      </g>
    </svg>
  );
}
