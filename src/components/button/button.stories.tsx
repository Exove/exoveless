import type { Meta, StoryObj } from "@storybook/react";
import Button from "./button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A versatile button component with multiple styles, sizes, and states. Can render as a button or link.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    style: {
      control: { type: "select" },
      options: ["primary", "secondary", "text", "disabled"],
      description: "Visual style of the button",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md"],
      description: "Size of the button",
    },
    fullWidth: {
      control: { type: "boolean" },
      description: "Whether button should take full width",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether button is disabled",
    },
    type: {
      control: { type: "select" },
      options: ["button", "submit", "reset"],
      description: "HTML button type",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    style: "primary",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    style: "secondary",
    children: "Secondary Button",
  },
};

export const Text: Story = {
  args: {
    style: "text",
    children: "Text Button",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small Button",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    children: "Medium Button",
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: "Full Width Button",
  },
  parameters: {
    layout: "padded",
  },
};

export const AsLink: Story = {
  args: {
    href: "#",
    children: "Button as Link",
  },
};

export const WithClickHandler: Story = {
  args: {
    children: "Click Me",
    onClick: () => alert("Button clicked!"),
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <Button style="primary">Primary</Button>
        <Button style="secondary">Secondary</Button>
        <Button style="text">Text</Button>
        <Button disabled>Disabled</Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
      </div>
      <div>
        <Button fullWidth>Full Width Button</Button>
      </div>
    </div>
  ),
  parameters: {
    layout: "padded",
  },
};
