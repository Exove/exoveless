import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Heading from "./Heading";

const meta: Meta<typeof Heading> = {
  title: "Components/Heading",
  component: Heading,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Semantic heading that generates an anchor ID from the label and scales typography per size.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    level: "h1",
    size: "lg",
    children: "Section starts here",
  },
};

export const ContentExample: Story = {
  render: () => (
    <div className="space-y-20">
      <Heading level="h1" size="lg">
        Accessible Web Components
      </Heading>
      <div className="rounded-lg border border-dashed border-gray-300 p-8 text-center text-gray-700">
        Content goes here
      </div>

      <Heading level="h2" size="md">
        Latest Articles
      </Heading>
      <div className="rounded-lg border border-dashed border-gray-300 p-8 text-center text-gray-700">
        Content goes here
      </div>

      <Heading level="h3" size="sm">
        Top Picks from the Editor
      </Heading>
      <div className="rounded-lg border border-dashed border-gray-300 p-8 text-center text-gray-700">
        Content goes here
      </div>
    </div>
  ),
};

export const LongHeadings: Story = {
  render: () => (
    <div className="max-w-2xl space-y-12">
      <div>
        <Heading level="h1" size="lg">
          This is an Extraordinarily Long Heading That Demonstrates How Line Heights Work
        </Heading>
        <div className="rounded-lg border border-dashed border-gray-300 p-8 text-center text-gray-700">
          Content goes here
        </div>
      </div>

      <div>
        <Heading level="h2" size="md">
          A Comprehensive Guide to Understanding Complex Multi-Line Heading Behavior in Modern Web Applications and
          Design Systems
        </Heading>
        <div className="rounded-lg border border-dashed border-gray-300 p-8 text-center text-gray-700">
          Content goes here
        </div>
      </div>

      <div>
        <Heading level="h3" size="sm">
          Smaller Heading Size That Can Still Wrap Across Multiple Lines When the Content is Sufficiently Long Enough
        </Heading>
        <div className="rounded-lg border border-dashed border-gray-300 p-8 text-center text-gray-700">
          Content goes here
        </div>
      </div>
    </div>
  ),
};
