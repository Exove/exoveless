import { cn } from "@/lib/utils";

function Radio({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type="radio"
      data-slot="radio"
      className={cn(
        "h-4 w-4 rounded-full border-gray-300 text-gray-900 focus:ring-2 focus:ring-gray-900",
        className,
      )}
      {...props}
    />
  );
}

export { Radio };
