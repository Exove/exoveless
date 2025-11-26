import { cn } from "@/lib/utils";

function Fieldset({ className, children, ...props }: React.ComponentProps<"fieldset">) {
  return (
    <fieldset data-slot="fieldset" className={cn("space-y-3", className)} {...props}>
      {children}
    </fieldset>
  );
}

export { Fieldset };
