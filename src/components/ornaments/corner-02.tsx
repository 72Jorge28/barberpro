import * as React from "react";

type Props = React.SVGProps<SVGSVGElement>;

export function CornerOrnament02(props: Props) {
  return (
    <svg
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M20 20h70c44 0 80 36 80 80v70"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M28 28h52c36 0 64 28 64 64v52"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M36 36c34 6 62 34 68 68"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.45"
      />
      <path
        d="M58 58c18 10 32 24 42 42"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.45"
      />
    </svg>
  );
}
