import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-red-500/20 aria-invalid:border-red-500",
  {
    variants: {
      variant: {
        default: "bg-stone-700 hover:bg-stone-600 active:bg-stone-700 text-white",
        secondary:
          "text-stone-100 outline outline-2 outline-offset-[-2px] outline-stone-600 hover:bg-stone-900 active:bg-stone-950",
        link: "text-blue-600 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 p-6 has-[>svg]:px-4",
        sm: "h-9 px-4 py-2 has-[>svg]:px-3 text-sm",
        lg: "h-12 rounded-md p-8 text-lg has-[>svg]:px-5",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export default function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
