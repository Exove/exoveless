import clsx from "clsx";

interface HeadingProps {
  level: "h1" | "h2" | "h3" | "h4";
  size?: "xl" | "large" | "medium" | "small";
  children: string;
  zeroMargin?: boolean;
}

export default function Heading({
  level,
  size,
  children,
  zeroMargin,
}: HeadingProps) {
  const Tag = level;

  return (
    <Tag
      className={clsx(
        "font-bold break-words",
        size === "xl" && "text-3xl lg:leading-tight lg:text-5xl mb-10",
        size === "large" && "text-2xl lg:text-3xl mb-6",
        size === "medium" && "text-xl lg:text-2xl mb-6",
        size === "small" && "text-xl",
        zeroMargin && "!mb-0"
      )}
    >
      {children}
    </Tag>
  );
}
