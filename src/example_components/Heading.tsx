"use client";

import { cn } from "@/lib/utils";
import { useId } from "react";
export type HeadingProps = {
  level: "h1" | "h2" | "h3" | "h4";
  size?: "xl" | "lg" | "md" | "sm" | "xs";
  children: string;
  className?: string;
};

export default function Heading({ level, size = "md", children, className }: HeadingProps) {
  const Tag = level;
  const idBase = useId();

  if (!children) {
    return null;
  }

  // Create id from the text
  const id =
    children
      .toLowerCase()
      .replace(/\u00e4/g, "a")
      .replace(/\u00f6/g, "o")
      .replace(/\W/g, "-") +
    "-" +
    idBase;

  return (
    <Tag
      className={cn(
        size === "xl" && "mb-10 text-3xl font-bold lg:text-4xl xl:text-5xl",
        size === "lg" && "mb-8 text-2xl font-bold lg:text-3xl xl:text-4xl",
        size === "md" && "mb-6 text-xl font-semibold xl:text-2xl",
        size === "sm" && "mb-4 text-xl font-semibold",
        size === "xs" && "mb-4 text-base font-medium",
        className,
      )}
      id={id}
    >
      {children}
    </Tag>
  );
}
