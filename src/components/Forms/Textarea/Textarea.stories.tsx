import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Textarea } from "./Textarea";
import { Label } from "../Label/Label";

const meta: Meta<typeof Textarea> = {
  title: "Forms/Textarea",
  component: Textarea,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Accessible textarea component for multi-line text input. Supports resizing and all standard textarea attributes.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    rows: {
      control: { type: "number" },
      description: "Number of visible text lines.",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disables the textarea.",
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
    placeholder: "Enter your message...",
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="space-y-2">
      <Label htmlFor="textarea-example">Message</Label>
      <Textarea id="textarea-example" {...args} />
    </div>
  ),
  args: {
    placeholder: "Enter your message here...",
  },
  parameters: {
    docs: {
      description: {
        story: "Textarea with associated label for accessibility.",
      },
    },
  },
};
