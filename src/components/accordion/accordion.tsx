"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import * as React from "react";

import { cn } from "@/lib/utils";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b border-gray-300", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left font-medium transition-all outline-none hover:underline [&[data-state=closed]_.minus-icon]:hidden [&[data-state=closed]_.plus-icon]:block [&[data-state=open]_.minus-icon]:block [&[data-state=open]_.plus-icon]:hidden",
          className,
        )}
        {...props}
      >
        {children}
        <div className="pointer-events-none size-5 shrink-0 translate-y-0.5 text-purple-700 transition-all duration-200">
          <PlusIcon className="plus-icon size-5" />
          <MinusIcon className="minus-icon size-5" />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-gray-600"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
