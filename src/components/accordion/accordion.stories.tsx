import type { Meta, StoryObj } from "@storybook/react";
import { AccordionItem, AccordionTrigger, AccordionContent } from "./accordion";

const meta: Meta<typeof AccordionItem> = {
  title: "Components/Accordion",
  component: AccordionItem,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A collapsible accordion component built with HTML details/summary elements.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[700px]">
      <AccordionItem>
        <AccordionTrigger>What is React?</AccordionTrigger>
        <AccordionContent>
          React is a JavaScript library for building user interfaces. It lets
          you compose complex UIs from small and isolated pieces of code called
          "components".
        </AccordionContent>
      </AccordionItem>
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div className="w-[700px] space-y-2">
      <AccordionItem>
        <AccordionTrigger>What is React?</AccordionTrigger>
        <AccordionContent>
          React is a JavaScript library for building user interfaces. It lets
          you compose complex UIs from small and isolated pieces of code called
          "components".
        </AccordionContent>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>What is Next.js?</AccordionTrigger>
        <AccordionContent>
          Next.js is a React framework that gives you building blocks to create
          web applications. By framework, we mean Next.js handles the tooling
          and configuration needed for React.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>What is Tailwind CSS?</AccordionTrigger>
        <AccordionContent>
          Tailwind CSS is a utility-first CSS framework packed with classes that
          can be composed to build any design, directly in your markup.
        </AccordionContent>
      </AccordionItem>
    </div>
  ),
};

export const LongContent: Story = {
  render: () => (
    <div className="w-[700px]">
      <AccordionItem>
        <AccordionTrigger>Long Content Example</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4">
            <p>
              This is an example of an accordion with longer content that
              demonstrates how the component handles more complex layouts.
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>First item in the list</li>
              <li>Second item with more details</li>
              <li>Third item that shows how lists work</li>
            </ul>
            <p>
              The accordion smoothly expands and contracts to accommodate
              different content lengths while maintaining a clean and accessible
              interface.
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </div>
  ),
};
