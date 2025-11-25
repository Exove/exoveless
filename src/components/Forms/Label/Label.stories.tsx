import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "./Label";
import { Input } from "../Input/Input";

const meta: Meta<typeof Label> = {
  title: "Forms/Label",
  component: Label,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Accessible label component for form inputs. Should be associated with form controls using the htmlFor attribute.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    htmlFor: {
      control: { type: "text" },
      description: "ID of the associated form control.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Label text",
  },
};

export const WithInput: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="example-input">Email address</Label>
      <Input id="example-input" type="email" placeholder="name@example.com" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Label properly associated with an input using htmlFor.",
      },
    },
  },
};

export const MultipleFields: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="first-name">First name</Label>
        <Input id="first-name" type="text" placeholder="John" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="last-name">Last name</Label>
        <Input id="last-name" type="text" placeholder="Doe" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="john.doe@example.com" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Multiple form fields with labels.",
      },
    },
  },
};

