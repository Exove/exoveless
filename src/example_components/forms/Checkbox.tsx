import { cn } from "@/lib/utils";

function Checkbox({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type="checkbox"
      data-slot="checkbox"
      className={cn(
        "h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-2 focus:ring-gray-900",
        className,
      )}
      {...props}
    />
  );
}
export { Checkbox };
