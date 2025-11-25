import type { Meta, StoryObj } from "@storybook/react";
import { ArrowUpRightIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";

import Heading from "@/components/Heading/Heading";
import Button from "@/components/Button/Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Accessible button component built with Radix Slot and class-variance-authority. Supports semantic variants, size presets, and `asChild` rendering for anchors or custom elements.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "secondary", "text"],
      description: "Visual variant that maps to semantic intent.",
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg", "icon"],
      description: "Predefined size tokens for consistent spacing.",
    },
    asChild: {
      control: { type: "boolean" },
      description: "Renders the underlying element as a Slot child.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Call to action",
  },
};

export const WithIcon: Story = {
  args: {
    variant: "default",
    size: "default",
  },
  render: (args) => (
    <Button {...args}>
      Continue
      <ArrowUpRightIcon className="size-4" />
    </Button>
  ),
  parameters: {
    docs: {
      description: {
        story: "Combine text and icons. Icons inherit sizing through the shared utility classes.",
      },
    },
  },
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-6">
      <section className="space-y-3">
        <Heading level="h3" size="sm">
          Variants
        </Heading>
        <div className="flex flex-wrap gap-4">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="text">Text</Button>
        </div>
      </section>
      <section className="space-y-3">
        <Heading level="h3" size="sm">
          Sizes
        </Heading>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small</Button>
          <Button>Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon" aria-label="Settings">
            <Cog6ToothIcon className="size-4" />
          </Button>
        </div>
      </section>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Overview of semantic variants and size presets.",
      },
    },
  },
};
