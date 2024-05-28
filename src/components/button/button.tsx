import clsx from "clsx";

interface ButtonProps {
  style:
    | "primary"
    | "primary-outlined"
    | "secondary"
    | "secondary-outlined"
    | "disabled";
  children: React.ReactNode;
  url?: string;
  onClick?: any;
  size?: "small" | "medium";
  tag?: "button" | "a" | "div";
  type?: "button" | "submit" | "reset";
}

export default function Button({
  type,
  style,
  children,
  url,
  onClick,
  size = "medium",
  tag = "button",
}: ButtonProps) {
  const Tag = tag;

  return (
    <Tag href={url || "#"} onClick={onClick} className="text-white" type={type}>
      <div
        className={clsx(
          "max-w-[270px] break-words rounded-lg px-8 py-4 text-center font-bold",
          style == "primary" &&
            "bg-purple-600 hover:bg-purple-700 active:bg-purple-800",
          style == "secondary" &&
            "bg-zinc-600 hover:bg-zinc-700 active:bg-zinc-800",
          style == "primary-outlined" &&
            "text-purple-600 outline outline-2 outline-offset-[-2px] outline-purple-600 hover:bg-purple-600 hover:text-white active:bg-purple-800",
          style == "secondary-outlined" &&
            "text-zinc-600 outline outline-2 outline-offset-[-2px] outline-zinc-600 hover:bg-zinc-600 hover:text-white active:bg-zinc-800",
          style == "disabled" && "cursor-not-allowed bg-gray-500",
          size == "small" && "!px-6 !py-3.5 !text-sm leading-tight",
        )}
      >
        {children}
      </div>
    </Tag>
  );
}
