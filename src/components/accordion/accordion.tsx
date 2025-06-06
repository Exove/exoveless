import { ChevronDownIcon } from "@heroicons/react/24/outline";

export function AccordionItem({ children }: { children: React.ReactNode }) {
  return <details className="group">{children}</details>;
}

export function AccordionTrigger({ children }: { children: React.ReactNode }) {
  return (
    <summary
      role="button"
      className="mt-2 flex w-full cursor-pointer items-center justify-between gap-3 border-b border-purple-600 px-8 py-6 text-base font-bold leading-tight hover:underline group-open:bg-gray-100"
    >
      <div>{children}</div>
      <ChevronDownIcon className="h-6 w-6 shrink-0 stroke-2 text-purple-600 transition-transform duration-200 group-open:rotate-180" />
    </summary>
  );
}

export function AccordionContent({ children }: { children: React.ReactNode }) {
  return <div className="overflow-hidden px-8 py-8">{children}</div>;
}
