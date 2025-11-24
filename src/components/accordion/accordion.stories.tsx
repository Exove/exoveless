import type { Meta, StoryObj } from "@storybook/react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Accessible accordion built on top of Radix primitives with animated content.",
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

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-full max-w-xl rounded-lg bg-white px-4">
      <AccordionItem value="item-1">
        <AccordionTrigger>{items[0].title}</AccordionTrigger>
        <AccordionContent>{items[0].content}</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const MultipleItems: Story = {
  render: () => (
    <Accordion type="multiple" className="w-full max-w-xl rounded-lg bg-white px-4">
      {items.map((item, index) => (
        <AccordionItem key={item.title} value={`item-${index}`}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
};
