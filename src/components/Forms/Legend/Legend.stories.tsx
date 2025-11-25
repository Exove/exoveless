import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Legend } from "./Legend";
import { Radio } from "../Radio/Radio";
import { Label } from "../Label/Label";
import { Checkbox } from "../Checkbox/Checkbox";

const meta: Meta<typeof Legend> = {
  title: "Forms/Legend",
  component: Legend,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Accessible legend component for fieldset elements. Provides a caption for groups of form controls.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <fieldset>
      <Legend>Fieldset legend</Legend>
    </fieldset>
  ),
};

export const WithRadioGroup: Story = {
  render: () => (
    <fieldset className="space-y-3">
      <Legend>Choose your preferred contact method</Legend>
      <div className="flex items-center space-x-2">
        <Radio id="contact-email" name="contact" value="email" defaultChecked />
        <Label htmlFor="contact-email" className="mb-0">
          Email
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <Radio id="contact-phone" name="contact" value="phone" />
        <Label htmlFor="contact-phone" className="mb-0">
          Phone
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <Radio id="contact-mail" name="contact" value="mail" />
        <Label htmlFor="contact-mail" className="mb-0">
          Mail
        </Label>
      </div>
    </fieldset>
  ),
  parameters: {
    docs: {
      description: {
        story: "Legend used with a group of radio buttons.",
      },
    },
  },
};

export const WithCheckboxGroup: Story = {
  render: () => (
    <fieldset className="space-y-3">
      <Legend>Select your interests</Legend>
      <div className="flex items-center space-x-2">
        <Checkbox id="interest-tech" name="interests" value="technology" />
        <Label htmlFor="interest-tech" className="mb-0">
          Technology
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="interest-design" name="interests" value="design" />
        <Label htmlFor="interest-design" className="mb-0">
          Design
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="interest-business" name="interests" value="business" />
        <Label htmlFor="interest-business" className="mb-0">
          Business
        </Label>
      </div>
    </fieldset>
  ),
  parameters: {
    docs: {
      description: {
        story: "Legend used with a group of checkboxes.",
      },
    },
  },
};
