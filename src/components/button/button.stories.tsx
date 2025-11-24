import type { Meta, StoryObj } from "@storybook/react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Composable button built on top of CVA variants. Supports link-style rendering via `asChild`.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "link"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
    asChild: {
      control: "boolean",
    },
    fullWidth: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Continue",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const WithIcon: Story = {
  args: {
    variant: "default",
    children: (
      <>
        Seuraava
        <ArrowRightIcon className="size-4" />
      </>
    ),
  },
};

export const FullWidth: Story = {
  args: {
    children: "Full width action",
    fullWidth: true,
  },
  parameters: {
    layout: "padded",
  },
};

export const LinkVariant: Story = {
  args: {
    variant: "link",
    children: "Show details",
  },
};
