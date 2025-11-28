import { cn } from "@/lib/utils";

export type HeadingProps = {
  level: "h1" | "h2" | "h3" | "h4";
  size?: "lg" | "md" | "sm";
  children: string;
  className?: string;
};

export default function Heading({ level, size = "md", children, className }: HeadingProps) {
  const Tag = level;

  const id = children
    .toLowerCase()
    .replace(/\u00e4/g, "a")
    .replace(/\u00f6/g, "o")
    .replace(/\W/g, "-");

  return (
    <Tag
      className={cn(
        size === "lg" && "mb-6 text-3xl font-extrabold sm:text-4xl lg:text-5xl",
        size === "md" && "mb-4 text-2xl font-semibold lg:text-3xl",
        size === "sm" && "mb-3 text-lg font-semibold",
        className,
      )}
      id={id}
    >
      {children}
    </Tag>
  );
}
