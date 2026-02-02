import * as React from "react";

type Props = React.SVGProps<SVGSVGElement>;

export function FlourishOrnament01(props: Props) {
  return (
    <svg
      viewBox="0 0 520 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M75 310c95-150 275-150 370 0"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M120 320c70-110 210-110 280 0"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M95 290c45-65 90-95 165-95 75 0 120 30 165 95"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M260 170c-22 20-34 44-34 74 0 30 12 54 34 74 22-20 34-44 34-74 0-30-12-54-34-74Z"
        stroke="currentColor"
        strokeWidth="5"
        opacity="0.65"
      />
      <circle cx="260" cy="260" r="6" fill="currentColor" opacity="0.8" />
      <path
        d="M75 310c-20 18-36 24-55 26"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M445 310c20 18 36 24 55 26"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}
