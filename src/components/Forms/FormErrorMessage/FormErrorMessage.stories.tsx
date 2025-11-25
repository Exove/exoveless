import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { FormErrorMessage } from "./FormErrorMessage";
import { Input } from "../Input/Input";
import { Label } from "../Label/Label";

const meta: Meta<typeof FormErrorMessage> = {
  title: "Forms/FormErrorMessage",
  component: FormErrorMessage,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Accessible error message component for form validation. Uses ARIA live regions to announce errors to screen readers.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    message: {
      control: { type: "text" },
      description: "Error message to display.",
    },
    ariaLive: {
      control: { type: "select" },
      options: ["polite", "assertive", "off"],
      description: "ARIA live region politeness level.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "error-message",
    message: "This field is required",
  },
};

export const WithInput: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="email-with-error">Email address</Label>
      <Input
        id="email-with-error"
        type="email"
        placeholder="name@example.com"
        aria-invalid="true"
        aria-describedby="email-error"
      />
      <FormErrorMessage id="email-error" message="Please enter a valid email address" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Error message associated with an input field using aria-describedby.",
      },
    },
  },
};

export const AriaLiveVariants: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="input-polite">Polite (default)</Label>
        <Input id="input-polite" aria-invalid="true" aria-describedby="error-polite" />
        <FormErrorMessage id="error-polite" message="This error is announced politely" ariaLive="polite" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="input-assertive">Assertive</Label>
        <Input id="input-assertive" aria-invalid="true" aria-describedby="error-assertive" />
        <FormErrorMessage id="error-assertive" message="This error is announced assertively" ariaLive="assertive" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="input-off">Off</Label>
        <Input id="input-off" aria-invalid="true" aria-describedby="error-off" />
        <FormErrorMessage id="error-off" message="This error is not announced" ariaLive="off" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different ARIA live region politeness levels.",
      },
    },
  },
};
