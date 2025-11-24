import type { Meta, StoryObj } from "@storybook/react";

import Breadcrumbs from "./breadcrumbs";

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

export const HomeOnly: Story = {
  args: {
    items: [],
  },
};

export const ProductDetail: Story = {
  args: {
    items: [
      { label: "Products", href: "/products" },
      { label: "Laptops", href: "/products/laptops" },
      { label: "Pro 16", href: "/products/laptops/pro-16" },
    ],
  },
};

export const DeepNavigation: Story = {
  args: {
    items: [
      { label: "Docs", href: "/docs" },
      { label: "Components", href: "/docs/components" },
      { label: "Navigation", href: "/docs/components/navigation" },
      { label: "Breadcrumbs", href: "/docs/components/navigation/breadcrumbs" },
    ],
  },
};
