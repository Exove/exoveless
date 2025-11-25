import type { Meta, StoryObj } from "@storybook/react";

import Card from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Media first card that elevates on hover and reveals CTA hit area.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "How we ship multi-brand design systems",
    text: "Practical lessons learned from rolling out a reusable design system across several domains.",
    href: "/articles/design-systems",
    image: {
      src: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=900&q=80",
      alt: "Laptop on a desk",
    },
  },
};

export const WithoutImage: Story = {
  args: {
    title: "Fallback layout",
    text: "When no media is provided the card still keeps dimensions without visual jump.",
    href: "/articles/fallback",
  },
};
