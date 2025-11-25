import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Dropdown from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A dropdown menu component built with Headless UI. Features smooth animations and keyboard navigation support.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: { type: "text" },
      description: "Text label for the dropdown button",
    },
    items: {
      control: { type: "object" },
      description: "Array of menu items with title and url",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Menu",
    items: [
      { title: "Home", url: "/" },
      { title: "About", url: "/about" },
      { title: "Contact", url: "/contact" },
    ],
  },
};

export const LongLabels: Story = {
  args: {
    label: "Very Long Dropdown Label",
    items: [
      { title: "Short", url: "/short" },
      { title: "Medium Length Item", url: "/medium" },
      {
        title: "Very Long Menu Item That Might Wrap to Multiple Lines",
        url: "/long",
      },
      { title: "Another Extremely Long Menu Item Name", url: "/another-long" },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example with long labels to test text wrapping and layout behavior.",
      },
    },
  },
};
