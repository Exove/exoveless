import { cn } from "@/lib/utils";

function Legend({ className, ...props }: React.ComponentProps<"legend">) {
  return (
    <legend
      data-slot="legend"
      className={cn("mb-4 block text-sm font-medium text-gray-500", className)}
      {...props}
    />
  );
}
export { Legend };
