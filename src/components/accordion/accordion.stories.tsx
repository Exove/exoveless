import type { Meta, StoryObj } from "@storybook/react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "Accessible accordion built on top of Radix primitives. To enable animations, see Tailwind configuration in global.css",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = Omit<StoryObj<typeof meta>, "args"> & { args?: never };

const items = [
  {
    title: "What is React?",
    content: "React lets you build UIs from small, focused components that stay easy to maintain.",
  },
  {
    title: "Why use Next.js?",
    content: "Next.js ships routing, rendering strategies, and performance optimisations out of the box.",
  },
  {
    title: "How does Tailwind help?",
    content: "Utility classes keep styling predictable and avoid context switching when iterating on layouts.",
  },
];

export const OpenSingle: Story = {
  render: () => (
    <Accordion type="single" collapsible>
      {items.map((item, index) => (
        <AccordionItem key={item.title} value={`item-${index}`}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
};

export const OpenMultiple: Story = {
  render: () => (
    <Accordion type="multiple">
      {items.map((item, index) => (
        <AccordionItem key={item.title} value={`item-${index}`}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
};
