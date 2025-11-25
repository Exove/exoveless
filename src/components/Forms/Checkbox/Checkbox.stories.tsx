import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Checkbox } from "./Checkbox";
import { Label } from "../Label/Label";

const meta: Meta<typeof Checkbox> = {
  title: "Forms/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Accessible checkbox input component with consistent styling and focus states.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: { type: "boolean" },
      description: "Whether the checkbox is checked.",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disables the checkbox.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "checkbox-default",
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="checkbox-label" {...args} />
      <Label htmlFor="checkbox-label" className="mb-0">
        Accept terms and conditions
      </Label>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Checkbox with associated label for accessibility.",
      },
    },
  },
};

export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="checkbox-unchecked" />
        <Label htmlFor="checkbox-unchecked" className="mb-0">
          Unchecked
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="checkbox-checked" defaultChecked />
        <Label htmlFor="checkbox-checked" className="mb-0">
          Checked
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="checkbox-disabled" disabled />
        <Label htmlFor="checkbox-disabled" className="mb-0">
          Disabled
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="checkbox-disabled-checked" defaultChecked disabled />
        <Label htmlFor="checkbox-disabled-checked" className="mb-0">
          Disabled (checked)
        </Label>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different checkbox states: unchecked, checked, disabled, and disabled checked.",
      },
    },
  },
};

export const Group: Story = {
  render: () => (
    <fieldset className="space-y-3">
      <legend className="mb-2 text-sm font-medium">Select your interests</legend>
      <div className="flex items-center space-x-2">
        <Checkbox id="interest-1" name="interests" value="technology" />
        <Label htmlFor="interest-1" className="mb-0">
          Technology
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="interest-2" name="interests" value="design" defaultChecked />
        <Label htmlFor="interest-2" className="mb-0">
          Design
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="interest-3" name="interests" value="business" />
        <Label htmlFor="interest-3" className="mb-0">
          Business
        </Label>
      </div>
    </fieldset>
  ),
  parameters: {
    docs: {
      description: {
        story: "Group of checkboxes with a fieldset and legend.",
      },
    },
  },
};

