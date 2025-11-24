import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function Select({ className, children, ...props }: React.ComponentProps<"select">) {
  return (
    <div className="relative">
      <select
        data-slot="select"
        className={cn(
          "h-10 w-full appearance-none rounded-md bg-white px-3 py-2 pr-9 text-stone-900 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDownIcon
        aria-hidden
        className="pointer-events-none absolute right-2 top-1/2 h-5 w-5 -translate-y-1/2 stroke-2 text-black"
      />
    </div>
  );
}
export { Select };
