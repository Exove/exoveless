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

  // ID is used for anchor links.
  const id = children
    .toLowerCase()
    .replace(/\u00e4/g, "a")
    .replace(/\u00f6/g, "o")
    .replace(/\W/g, "-");

  return (
    <Tag
      className={clsx(
        "break-words font-bold",
        size === "xl" && "mb-10 text-3xl lg:text-5xl lg:leading-tight",
        size === "large" && "mb-6 text-2xl lg:text-3xl",
        size === "medium" && "mb-6 text-xl lg:text-2xl",
        size === "small" && "text-xl",
        zeroMargin && "!mb-0",
      )}
      id={id}
    >
      {children}
    </Tag>
  );
}
