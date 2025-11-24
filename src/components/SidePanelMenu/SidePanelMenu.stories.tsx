import type { Meta, StoryObj } from "@storybook/react";

import SidePanelMenu from "./SidePanelMenu";

const meta: Meta<typeof SidePanelMenu> = {
  title: "Components/SidePanelMenu",
  component: SidePanelMenu,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Multi-level navigation using the SidePanel drawer.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const menuItems = [
  {
    title: "Company",
    url: "/company",
    sublinks: [
      { title: "About", url: "/company/about" },
      { title: "Careers", url: "/company/careers" },
    ],
  },
  {
    title: "Services",
    url: "/services",
    sublinks: [
      {
        title: "Consulting",
        url: "/services/consulting",
        sublinks: [
          { title: "Design systems", url: "/services/consulting/design-systems" },
          { title: "Accessibility", url: "/services/consulting/accessibility" },
        ],
      },
      { title: "Training", url: "/services/training" },
    ],
  },
  { title: "Blog", url: "/blog" },
];

export const Default: Story = {
  args: {
    items: menuItems,
  },
};

