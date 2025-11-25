import type { Meta, StoryObj } from "@storybook/react";

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

export const MultipleFieldsets: Story = {
  render: () => (
    <div className="space-y-6">
      <fieldset className="space-y-3">
        <Legend>Personal Information</Legend>
        <div className="space-y-2">
          <Label htmlFor="first-name">First name</Label>
          <input
            id="first-name"
            type="text"
            className="h-10 w-full rounded-md bg-white px-3 py-2 text-stone-900"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="last-name">Last name</Label>
          <input
            id="last-name"
            type="text"
            className="h-10 w-full rounded-md bg-white px-3 py-2 text-stone-900"
          />
        </div>
      </fieldset>
      <fieldset className="space-y-3">
        <Legend>Preferences</Legend>
        <div className="flex items-center space-x-2">
          <Checkbox id="newsletter" name="preferences" value="newsletter" />
          <Label htmlFor="newsletter" className="mb-0">
            Subscribe to newsletter
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="updates" name="preferences" value="updates" />
          <Label htmlFor="updates" className="mb-0">
            Receive product updates
          </Label>
        </div>
      </fieldset>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Multiple fieldsets with legends organizing form sections.",
      },
    },
  },
};

