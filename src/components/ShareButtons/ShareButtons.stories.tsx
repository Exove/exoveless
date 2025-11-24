import type { Meta, StoryObj } from "@storybook/react";

import ShareButtons from "./ShareButtons";

const meta: Meta<typeof ShareButtons> = {
  title: "Components/ShareButtons",
  component: ShareButtons,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Dropdown share menu with copy-to-clipboard support.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    url: "https://example.com/case-study",
  },
};

