import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";
import { Label } from "../Label/Label";

const meta: Meta<typeof Input> = {
  title: "Forms/Input",
  component: Input,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Accessible input component with consistent styling. Supports all standard input types and states.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "number", "tel", "url", "search"],
      description: "Input type attribute.",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disables the input.",
    },
    placeholder: {
      control: { type: "text" },
      description: "Placeholder text.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "Enter text...",
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="space-y-2">
      <Label htmlFor="input-example">Email address</Label>
      <Input id="input-example" {...args} />
    </div>
  ),
  args: {
    type: "email",
    placeholder: "name@example.com",
  },
  parameters: {
    docs: {
      description: {
        story: "Input with associated label for accessibility.",
      },
    },
  },
};

export const Types: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="text-input">Text</Label>
        <Input id="text-input" type="text" placeholder="Enter text" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email-input">Email</Label>
        <Input id="email-input" type="email" placeholder="name@example.com" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password-input">Password</Label>
        <Input id="password-input" type="password" placeholder="Enter password" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="number-input">Number</Label>
        <Input id="number-input" type="number" placeholder="Enter number" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="tel-input">Telephone</Label>
        <Input id="tel-input" type="tel" placeholder="+1 (555) 000-0000" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different input types with appropriate placeholders.",
      },
    },
  },
};

export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="normal-input">Normal</Label>
        <Input id="normal-input" placeholder="Normal state" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="disabled-input">Disabled</Label>
        <Input id="disabled-input" placeholder="Disabled state" disabled />
      </div>
      <div className="space-y-2">
        <Label htmlFor="value-input">With value</Label>
        <Input id="value-input" defaultValue="Pre-filled value" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different input states: normal, disabled, and with value.",
      },
    },
  },
};

