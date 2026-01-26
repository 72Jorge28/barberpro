"use client";

import type { ComponentType } from "react";

type Props = {
  Content: ComponentType;
};

export function MdxRenderer({ Content }: Props) {
  return <Content />;
}
