import * as React from "react";

type Props = React.SVGProps<SVGSVGElement>;

export function CornerOrnament01(props: Props) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M18 18h64c38 0 68 30 68 68v64"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M18 48h44c28 0 50 22 50 50v44"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M18 78h24c18 0 32 14 32 32v24"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M44 44c10 6 18 14 24 24"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.5"
      />
      <circle cx="18" cy="18" r="4" fill="currentColor" opacity="0.9" />
    </svg>
  );
}
