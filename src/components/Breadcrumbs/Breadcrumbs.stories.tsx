import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Breadcrumbs from "./Breadcrumbs";

const meta: Meta<typeof Breadcrumbs> = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Scrollable breadcrumb trail that keeps typography compact and legible.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ProductDetail: Story = {
  args: {
    items: [],
  },
};
