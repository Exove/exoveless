"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-red-500/20 aria-invalid:border-red-500",
  {
    variants: {
      variant: {
        default: "bg-purple-700 hover:bg-purple-800 active:bg-purple-700 text-white",
        secondary:
          "text-gray-900 outline outline-2 outline-offset-[-2px] outline-gray-300 hover:bg-gray-100 active:bg-gray-200",
        link: "text-purple-700 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-6 has-[>svg]:px-4",
        sm: "h-9 px-4 py-2 has-[>svg]:px-3 text-sm",
        lg: "h-12 rounded-md px-8 text-lg has-[>svg]:px-5",
        icon: "size-9",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    fullWidth?: boolean;
  };

export default function Button({ className, variant, size, asChild = false, fullWidth, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className, fullWidth: fullWidth ? "true" : undefined }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
