import classNames from "classnames";

interface HeadingProps {
  level: "h1" | "h2" | "h3" | "h4";
  size?: "xl" | "large" | "medium" | "small";
  children: any;
  uppercase?: boolean;
  zeroMargin?: boolean;
}

export default function Heading({
  level,
  size,
  uppercase,
  children,
  zeroMargin,
}: HeadingProps) {
  const Tag = level;

  return (
    <Tag
      className={classNames(
        "font-bold",
        "break-words",
        {
          uppercase: uppercase,
        },
        {
          "text-3xl lg:leading-tight lg:text-5xl mb-10": size === "xl",
        },
        {
          "text-2xl lg:text-4xl mb-6": size === "large",
        },
        {
          "text-2xl lg:text-3xl mb-6": size === "medium",
        },
        {
          "text-xl": size === "small",
        },
        {
          "mb-0": zeroMargin,
        }
      )}
    >
      {children}
    </Tag>
  );
}
