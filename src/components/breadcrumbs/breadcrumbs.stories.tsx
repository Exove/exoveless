import type { Meta, StoryObj } from "@storybook/react";
import Breadcrumbs from "./breadcrumbs";

const meta: Meta<typeof Breadcrumbs> = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A breadcrumb navigation component that shows the current page's location within a navigational hierarchy. Automatically scrolls to show the current page on mobile devices.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    path: {
      control: { type: "object" },
      description: "Array of breadcrumb items with title and url",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const HomeOnly: Story = {
  args: {
    path: [],
  },
  parameters: {
    docs: {
      description: {
        story: "When no path is provided, only the Home link is shown.",
      },
    },
  },
};

export const SingleLevel: Story = {
  args: {
    path: [{ title: "Products", url: "/products" }],
  },
};

export const TwoLevels: Story = {
  args: {
    path: [
      { title: "Products", url: "/products" },
      { title: "Laptops", url: "/products/laptops" },
    ],
  },
};

export const ThreeLevels: Story = {
  args: {
    path: [
      { title: "Products", url: "/products" },
      { title: "Laptops", url: "/products/laptops" },
      { title: "MacBook Pro", url: "/products/laptops/macbook-pro" },
    ],
  },
};

export const DeepNavigation: Story = {
  args: {
    path: [
      { title: "Categories", url: "/categories" },
      { title: "Electronics", url: "/categories/electronics" },
      { title: "Computers", url: "/categories/electronics/computers" },
      { title: "Laptops", url: "/categories/electronics/computers/laptops" },
      {
        title: "Gaming Laptops",
        url: "/categories/electronics/computers/laptops/gaming",
      },
      {
        title: "ASUS ROG Series",
        url: "/categories/electronics/computers/laptops/gaming/asus-rog",
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example of deep navigation hierarchy. The component automatically scrolls to show the current page on mobile devices.",
      },
    },
  },
};

export const BlogNavigation: Story = {
  args: {
    path: [
      { title: "Blog", url: "/blog" },
      { title: "Technology", url: "/blog/technology" },
      { title: "Web Development", url: "/blog/technology/web-development" },
      {
        title: "React Best Practices",
        url: "/blog/technology/web-development/react-best-practices",
      },
    ],
  },
};

export const EcommerceNavigation: Story = {
  args: {
    path: [
      { title: "Shop", url: "/shop" },
      { title: "Clothing", url: "/shop/clothing" },
      { title: "Men's Clothing", url: "/shop/clothing/mens" },
      { title: "Shirts", url: "/shop/clothing/mens/shirts" },
      { title: "Casual Shirts", url: "/shop/clothing/mens/shirts/casual" },
    ],
  },
};

export const DocumentationNavigation: Story = {
  args: {
    path: [
      { title: "Documentation", url: "/docs" },
      { title: "Components", url: "/docs/components" },
      { title: "Navigation", url: "/docs/components/navigation" },
      { title: "Breadcrumbs", url: "/docs/components/navigation/breadcrumbs" },
    ],
  },
};

export const LongTitles: Story = {
  args: {
    path: [
      {
        title: "Very Long Category Name That Might Wrap",
        url: "/long-category",
      },
      {
        title: "Another Extremely Long Subcategory Name",
        url: "/long-category/long-subcategory",
      },
      {
        title:
          "Final Page With An Even Longer Title That Demonstrates Text Wrapping",
        url: "/long-category/long-subcategory/final-page",
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example with long titles to demonstrate how the component handles text wrapping and overflow.",
      },
    },
  },
};

export const AllExamples: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="mb-2 text-lg font-semibold">Home Only</h3>
        <Breadcrumbs path={[]} />
      </div>

      <div>
        <h3 className="mb-2 text-lg font-semibold">Single Level</h3>
        <Breadcrumbs path={[{ title: "Products", url: "/products" }]} />
      </div>

      <div>
        <h3 className="mb-2 text-lg font-semibold">Multiple Levels</h3>
        <Breadcrumbs
          path={[
            { title: "Products", url: "/products" },
            { title: "Laptops", url: "/products/laptops" },
            { title: "MacBook Pro", url: "/products/laptops/macbook-pro" },
          ]}
        />
      </div>

      <div>
        <h3 className="mb-2 text-lg font-semibold">Deep Navigation</h3>
        <Breadcrumbs
          path={[
            { title: "Categories", url: "/categories" },
            { title: "Electronics", url: "/categories/electronics" },
            { title: "Computers", url: "/categories/electronics/computers" },
            {
              title: "Laptops",
              url: "/categories/electronics/computers/laptops",
            },
            {
              title: "Gaming",
              url: "/categories/electronics/computers/laptops/gaming",
            },
          ]}
        />
      </div>
    </div>
  ),
};
