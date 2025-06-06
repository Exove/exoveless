import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./dropdown";

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

export const NavigationMenu: Story = {
  args: {
    label: "Navigation",
    items: [
      { title: "Dashboard", url: "/dashboard" },
      { title: "Projects", url: "/projects" },
      { title: "Team", url: "/team" },
      { title: "Settings", url: "/settings" },
      { title: "Help", url: "/help" },
    ],
  },
};

export const ProductCategories: Story = {
  args: {
    label: "Categories",
    items: [
      { title: "Electronics", url: "/categories/electronics" },
      { title: "Clothing", url: "/categories/clothing" },
      { title: "Books", url: "/categories/books" },
      { title: "Home & Garden", url: "/categories/home-garden" },
      { title: "Sports", url: "/categories/sports" },
      { title: "Toys", url: "/categories/toys" },
    ],
  },
};

export const UserActions: Story = {
  args: {
    label: "Account",
    items: [
      { title: "Profile", url: "/profile" },
      { title: "Orders", url: "/orders" },
      { title: "Wishlist", url: "/wishlist" },
      { title: "Settings", url: "/account/settings" },
      { title: "Logout", url: "/logout" },
    ],
  },
};

export const SingleItem: Story = {
  args: {
    label: "More",
    items: [{ title: "Documentation", url: "/docs" }],
  },
};

export const ManyItems: Story = {
  args: {
    label: "All Pages",
    items: [
      { title: "Home", url: "/" },
      { title: "About Us", url: "/about" },
      { title: "Services", url: "/services" },
      { title: "Portfolio", url: "/portfolio" },
      { title: "Blog", url: "/blog" },
      { title: "News", url: "/news" },
      { title: "Events", url: "/events" },
      { title: "Careers", url: "/careers" },
      { title: "Support", url: "/support" },
      { title: "FAQ", url: "/faq" },
      { title: "Privacy Policy", url: "/privacy" },
      { title: "Terms of Service", url: "/terms" },
      { title: "Contact", url: "/contact" },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example with many items to demonstrate scrolling behavior and performance.",
      },
    },
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

export const LanguageSelector: Story = {
  args: {
    label: "Language",
    items: [
      { title: "English", url: "/en" },
      { title: "Suomi", url: "/fi" },
      { title: "Svenska", url: "/sv" },
      { title: "Deutsch", url: "/de" },
      { title: "Français", url: "/fr" },
      { title: "Español", url: "/es" },
    ],
  },
};

export const AdminMenu: Story = {
  args: {
    label: "Admin",
    items: [
      { title: "Dashboard", url: "/admin/dashboard" },
      { title: "Users", url: "/admin/users" },
      { title: "Content", url: "/admin/content" },
      { title: "Analytics", url: "/admin/analytics" },
      { title: "Settings", url: "/admin/settings" },
      { title: "Logs", url: "/admin/logs" },
    ],
  },
};

export const MultipleDropdowns: Story = {
  render: () => (
    <div className="flex gap-8">
      <Dropdown
        label="Products"
        items={[
          { title: "Laptops", url: "/products/laptops" },
          { title: "Phones", url: "/products/phones" },
          { title: "Tablets", url: "/products/tablets" },
        ]}
      />
      <Dropdown
        label="Services"
        items={[
          { title: "Consulting", url: "/services/consulting" },
          { title: "Support", url: "/services/support" },
          { title: "Training", url: "/services/training" },
        ]}
      />
      <Dropdown
        label="Company"
        items={[
          { title: "About", url: "/about" },
          { title: "Team", url: "/team" },
          { title: "Careers", url: "/careers" },
          { title: "Contact", url: "/contact" },
        ]}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Example showing multiple dropdowns side by side to demonstrate how they work together.",
      },
    },
  },
};
