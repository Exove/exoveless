import type { Meta, StoryObj } from "@storybook/react";

import { Radio } from "./Radio";
import { Label } from "../Label/Label";

const meta: Meta<typeof Radio> = {
  title: "Forms/Radio",
  component: Radio,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Accessible radio button component with consistent styling. Should be used within a fieldset with a legend for groups.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: { type: "boolean" },
      description: "Whether the radio is checked.",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disables the radio button.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "radio-default",
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Radio id="radio-label" {...args} />
      <Label htmlFor="radio-label" className="mb-0">
        Option 1
      </Label>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Radio button with associated label for accessibility.",
      },
    },
  },
};

export const Group: Story = {
  render: () => (
    <fieldset className="space-y-3">
      <legend className="mb-2 text-sm font-medium">Choose an option</legend>
      <div className="flex items-center space-x-2">
        <Radio id="radio-1" name="options" value="option1" defaultChecked />
        <Label htmlFor="radio-1" className="mb-0">
          Option 1
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <Radio id="radio-2" name="options" value="option2" />
        <Label htmlFor="radio-2" className="mb-0">
          Option 2
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <Radio id="radio-3" name="options" value="option3" />
        <Label htmlFor="radio-3" className="mb-0">
          Option 3
        </Label>
      </div>
    </fieldset>
  ),
  parameters: {
    docs: {
      description: {
        story: "Group of radio buttons with a fieldset and legend.",
      },
    },
  },
};
