import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "./Select";
import { Label } from "../Label/Label";

const meta: Meta<typeof Select> = {
  title: "Forms/Select",
  component: Select,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Accessible select dropdown component with custom chevron icon. Supports all standard select attributes.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: { type: "boolean" },
      description: "Disables the select.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Select>
      <option value="">Choose an option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="select-example">Country</Label>
      <Select id="select-example">
        <option value="">Select a country</option>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="ca">Canada</option>
        <option value="au">Australia</option>
      </Select>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Select with associated label for accessibility.",
      },
    },
  },
};

export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="select-normal">Normal</Label>
        <Select id="select-normal">
          <option value="">Choose an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="select-disabled">Disabled</Label>
        <Select id="select-disabled" disabled>
          <option value="">Choose an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="select-selected">With selected value</Label>
        <Select id="select-selected" defaultValue="2">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </Select>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different select states: normal, disabled, and with selected value.",
      },
    },
  },
};
