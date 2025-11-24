import { cn } from "@/lib/utils";

function Legend({ className, ...props }: React.ComponentProps<"legend">) {
  return (
    <legend
      data-slot="legend"
      className={cn("mb-1 block text-sm font-medium", className)}
      {...props}
    />
  );
}
export { Legend };
