import type { Meta, StoryObj } from "@storybook/react";

import Heading from "./heading";

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
    level: "h2",
    size: "lg",
    children: "Section starts here",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Heading level="h2" size="xl">
        Extra large
      </Heading>
      <Heading level="h2" size="lg">
        Large
      </Heading>
      <Heading level="h2" size="md">
        Medium
      </Heading>
      <Heading level="h2" size="sm">
        Small
      </Heading>
      <Heading level="h2" size="xs">
        Extra small
      </Heading>
    </div>
  ),
};

export const Levels: Story = {
  render: () => (
    <div className="space-y-3">
      <Heading level="h1" size="xl">
        First level
      </Heading>
      <Heading level="h2" size="lg">
        Second level
      </Heading>
      <Heading level="h3" size="md">
        Third level
      </Heading>
      <Heading level="h4" size="sm">
        Fourth level
      </Heading>
    </div>
  ),
};
