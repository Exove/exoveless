"use client";

import Link from "next/link";
import { clsx } from "clsx";

interface ButtonProps {
  style?: "primary" | "secondary" | "text" | "disabled";
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  size?: "sm" | "md";
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  id?: string;
  disabled?: boolean;
}

export default function Button({
  type,
  style = "primary",
  children,
  href,
  onClick,
  size = "md",
  fullWidth = false,
  id,
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "rounded-lg px-8 py-4 text-center break-words flex justify-center font-bold max-w-[270px]";
  const sizeStyles = size === "sm" ? "px-3 py-2 text-sm leading-tight" : "";
  const widthStyles = fullWidth ? "w-full max-w-full" : "";

  const styleVariants = {
    primary:
      "bg-purple-700 hover:bg-purple-600 active:bg-purple-700 text-white",
    secondary:
      "text-purple-600 outline outline-2 outline-offset-[-2px] outline-purple-600 hover:bg-purple-600 hover:text-white active:bg-purple-800",
    text: "text-slate-300 hover:text-slate-200 active:text-slate-300",
    disabled: "cursor-not-allowed bg-gray-500 text-white",
  };

  const buttonStyle = disabled ? "disabled" : style;

  if (href && !disabled) {
    return (
      <Link href={href} id={id}>
        <div
          className={clsx(
            baseStyles,
            sizeStyles,
            widthStyles,
            styleVariants[buttonStyle],
          )}
        >
          {children}
        </div>
      </Link>
    );
  }

  return (
    <button
      onClick={disabled ? undefined : onClick}
      type={type}
      className={clsx(
        baseStyles,
        sizeStyles,
        widthStyles,
        styleVariants[buttonStyle],
      )}
      id={id}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
