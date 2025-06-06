import type { Meta, StoryObj } from "@storybook/react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./navigation-menu";

const meta: Meta<typeof NavigationMenu> = {
  title: "Components/UI/NavigationMenu",
  component: NavigationMenu,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A navigation menu component built with Radix UI. Features dropdown menus with smooth animations and keyboard navigation support.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple-500/50 to-purple-700 p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium text-white">
                      Welcome
                    </div>
                    <p className="text-sm leading-tight text-purple-100">
                      Get started with our comprehensive guide and examples.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100"
                    href="/docs"
                  >
                    <div className="text-sm font-medium leading-none">
                      Documentation
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                      Complete API reference and guides.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100"
                    href="/examples"
                  >
                    <div className="text-sm font-medium leading-none">
                      Examples
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                      Browse our collection of examples and templates.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100"
                    href="/tutorials"
                  >
                    <div className="text-sm font-medium leading-none">
                      Tutorials
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                      Step-by-step tutorials for common use cases.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {[
                {
                  title: "Button",
                  href: "/docs/components/button",
                  description:
                    "Displays a button or a component that looks like a button.",
                },
                {
                  title: "Modal",
                  href: "/docs/components/modal",
                  description:
                    "A window overlaid on either the primary window or another modal.",
                },
                {
                  title: "Tabs",
                  href: "/docs/components/tabs",
                  description:
                    "A set of layered sections of content—known as tab panels.",
                },
                {
                  title: "Accordion",
                  href: "/docs/components/accordion",
                  description:
                    "A vertically stacked set of interactive headings.",
                },
                {
                  title: "Dropdown",
                  href: "/docs/components/dropdown",
                  description:
                    "Displays a menu to the user — such as a set of actions or functions.",
                },
                {
                  title: "Notification",
                  href: "/docs/components/notification",
                  description:
                    "A succinct message that is displayed temporarily.",
                },
              ].map((component) => (
                <li key={component.title}>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100"
                      href={component.href}
                    >
                      <div className="text-sm font-medium leading-none">
                        {component.title}
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                        {component.description}
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 disabled:pointer-events-none disabled:opacity-50"
            href="/about"
          >
            About
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

export const SimpleMenu: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-3 p-4">
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100"
                    href="/products/laptops"
                  >
                    <div className="text-sm font-medium">Laptops</div>
                    <p className="text-sm text-gray-600">
                      High-performance laptops
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100"
                    href="/products/phones"
                  >
                    <div className="text-sm font-medium">Phones</div>
                    <p className="text-sm text-gray-600">Latest smartphones</p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100"
                    href="/products/tablets"
                  >
                    <div className="text-sm font-medium">Tablets</div>
                    <p className="text-sm text-gray-600">Portable tablets</p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100"
            href="/support"
          >
            Support
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100"
            href="/contact"
          >
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

export const EcommerceMenu: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500/50 to-blue-700 p-6 no-underline outline-none focus:shadow-md"
                    href="/featured"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium text-white">
                      Featured Products
                    </div>
                    <p className="text-sm leading-tight text-blue-100">
                      Discover our handpicked selection of premium items.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li className="space-y-3">
                <NavigationMenuLink asChild>
                  <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100"
                    href="/categories/electronics"
                  >
                    <div className="text-sm font-medium">Electronics</div>
                    <p className="text-sm text-gray-600">
                      Latest gadgets and devices
                    </p>
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100"
                    href="/categories/clothing"
                  >
                    <div className="text-sm font-medium">Clothing</div>
                    <p className="text-sm text-gray-600">Fashion and apparel</p>
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100"
                    href="/categories/home"
                  >
                    <div className="text-sm font-medium">Home & Garden</div>
                    <p className="text-sm text-gray-600">
                      Everything for your home
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-3 p-4">
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100"
                    href="/services/delivery"
                  >
                    <div className="text-sm font-medium">Delivery</div>
                    <p className="text-sm text-gray-600">
                      Fast and reliable shipping
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100"
                    href="/services/installation"
                  >
                    <div className="text-sm font-medium">Installation</div>
                    <p className="text-sm text-gray-600">
                      Professional setup service
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100"
                    href="/services/warranty"
                  >
                    <div className="text-sm font-medium">Warranty</div>
                    <p className="text-sm text-gray-600">
                      Extended protection plans
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100"
            href="/deals"
          >
            Deals
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};
