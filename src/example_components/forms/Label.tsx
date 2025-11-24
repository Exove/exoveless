import { cn } from "@/lib/utils";

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn("mb-1 block text-sm font-medium", className)}
      {...props}
    />
  );
}
export { Label };
