import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Container from "./Container";

const meta: Meta<typeof Container> = {
  title: "Components/Container",
  component: Container,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Simple wrapper that centers content and constrains width.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Container>
      <div className="rounded-lg border border-dashed border-gray-300 p-8 text-center text-gray-700">
        Content stays centered up to the max width.
      </div>
    </Container>
  ),
};

export const Narrow: Story = {
  render: () => (
    <Container className="max-w-3xl">
      <div className="rounded-lg border border-dashed border-gray-300 p-8 text-center text-gray-700">
        Custom width via className.
      </div>
    </Container>
  ),
};

