import clsx from "clsx";

interface ButtonProps {
  type:
    | "primary"
    | "primary-outlined"
    | "secondary"
    | "secondary-outlined"
    | "disabled";
  children: any;
  url?: string;
  onClick?: any;
  size?: "small" | "medium";
  tag?: "button" | "a" | "div";
}

export default function Button({
  type,
  children,
  url,
  onClick,
  size = "medium",
  tag = "button",
}: ButtonProps) {
  const Tag = tag;

  return (
    <Tag href={url || "#"} onClick={onClick} className="text-white">
      <div
        className={clsx(
          "max-w-[270px] break-words rounded-lg px-8 py-4 text-center font-bold",
          type == "primary" &&
            "bg-purple-600 hover:bg-purple-700 active:bg-purple-800",
          type == "secondary" &&
            "bg-zinc-600 hover:bg-zinc-700 active:bg-zinc-800",
          type == "primary-outlined" &&
            "text-purple-600 outline outline-2 outline-offset-[-2px] outline-purple-600 hover:bg-purple-600 hover:text-white active:bg-purple-800",
          type == "secondary-outlined" &&
            "text-zinc-600 outline outline-2 outline-offset-[-2px] outline-zinc-600 hover:bg-zinc-600 hover:text-white active:bg-zinc-800",
          type == "disabled" && "cursor-not-allowed bg-gray-500",
          size == "small" && "!px-6 !py-3.5 !text-sm leading-tight",
        )}
      >
        {children}
      </div>
    </Tag>
  );
}
