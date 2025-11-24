import type { Meta, StoryObj } from "@storybook/react";

import TopBanner from "./TopBanner";

const meta: Meta<typeof TopBanner> = {
  title: "Components/TopBanner",
  component: TopBanner,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Lightweight announcement bar.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "New research report available now",
  },
};

