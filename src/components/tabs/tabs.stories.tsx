import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A tabs component built with Radix UI. Provides accessible tab navigation with keyboard support.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div className="p-4">
          <h3 className="mb-2 text-lg font-semibold">First Tab Content</h3>
          <p>
            This is the content for the first tab. It can contain any React
            components or HTML elements.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div className="p-4">
          <h3 className="mb-2 text-lg font-semibold">Second Tab Content</h3>
          <p>
            This is the content for the second tab. Each tab can have completely
            different content and layout.
          </p>
          <ul className="mt-4 list-inside list-disc space-y-1">
            <li>Feature one</li>
            <li>Feature two</li>
            <li>Feature three</li>
          </ul>
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div className="p-4">
          <h3 className="mb-2 text-lg font-semibold">Third Tab Content</h3>
          <div className="rounded bg-gray-100 p-4">
            <p>
              This tab contains a highlighted section with important
              information.
            </p>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const ManyTabs: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-full max-w-4xl">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="features">Features</TabsTrigger>
        <TabsTrigger value="pricing">Pricing</TabsTrigger>
        <TabsTrigger value="documentation">Documentation</TabsTrigger>
        <TabsTrigger value="support">Support</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <div className="p-4">
          <h3 className="mb-4 text-xl font-bold">Product Overview</h3>
          <p className="mb-4">
            Welcome to our comprehensive product overview. Here you'll find
            everything you need to know about our solution.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded bg-blue-50 p-4">
              <h4 className="font-semibold text-blue-800">Key Benefits</h4>
              <p className="text-blue-700">
                Discover the main advantages of using our product.
              </p>
            </div>
            <div className="rounded bg-green-50 p-4">
              <h4 className="font-semibold text-green-800">Getting Started</h4>
              <p className="text-green-700">
                Quick start guide to begin using our solution.
              </p>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="features">
        <div className="p-4">
          <h3 className="mb-4 text-xl font-bold">Features</h3>
          <div className="space-y-4">
            {[
              "Advanced Analytics",
              "Real-time Collaboration",
              "Secure Data Storage",
              "API Integration",
              "Mobile Support",
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </TabsContent>
      <TabsContent value="pricing">
        <div className="p-4">
          <h3 className="mb-4 text-xl font-bold">Pricing Plans</h3>
          <div className="grid grid-cols-3 gap-4">
            {["Basic", "Pro", "Enterprise"].map((plan, index) => (
              <div key={index} className="rounded-lg border p-4 text-center">
                <h4 className="text-lg font-semibold">{plan}</h4>
                <p className="text-2xl font-bold text-purple-600">
                  ${(index + 1) * 10}/mo
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Perfect for {plan.toLowerCase()} users
                </p>
              </div>
            ))}
          </div>
        </div>
      </TabsContent>
      <TabsContent value="documentation">
        <div className="p-4">
          <h3 className="mb-4 text-xl font-bold">Documentation</h3>
          <div className="space-y-3">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold">API Reference</h4>
              <p className="text-gray-600">
                Complete API documentation with examples
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold">Tutorials</h4>
              <p className="text-gray-600">Step-by-step guides and tutorials</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold">Best Practices</h4>
              <p className="text-gray-600">
                Recommended patterns and practices
              </p>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="support">
        <div className="p-4">
          <h3 className="mb-4 text-xl font-bold">Support</h3>
          <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4">
            <h4 className="mb-2 font-semibold text-yellow-800">Need Help?</h4>
            <p className="mb-3 text-yellow-700">
              Our support team is here to help you succeed.
            </p>
            <div className="space-y-2">
              <p>
                <strong>Email:</strong> support@example.com
              </p>
              <p>
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
              <p>
                <strong>Hours:</strong> Mon-Fri 9AM-6PM EST
              </p>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="settings">
        <div className="p-4">
          <h3 className="mb-4 text-xl font-bold">Settings</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Email Notifications</span>
              <input type="checkbox" className="rounded" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span>Dark Mode</span>
              <input type="checkbox" className="rounded" />
            </div>
            <div className="flex items-center justify-between">
              <span>Auto-save</span>
              <input type="checkbox" className="rounded" defaultChecked />
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const DisabledTab: Story = {
  render: () => (
    <Tabs defaultValue="available" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="available">Available</TabsTrigger>
        <TabsTrigger value="disabled" disabled>
          Disabled
        </TabsTrigger>
        <TabsTrigger value="another">Another</TabsTrigger>
      </TabsList>
      <TabsContent value="available">
        <div className="p-4">
          <h3 className="mb-2 text-lg font-semibold">Available Tab</h3>
          <p>This tab is available and can be clicked.</p>
        </div>
      </TabsContent>
      <TabsContent value="disabled">
        <div className="p-4">
          <h3 className="mb-2 text-lg font-semibold">Disabled Tab</h3>
          <p>This tab is disabled and cannot be accessed.</p>
        </div>
      </TabsContent>
      <TabsContent value="another">
        <div className="p-4">
          <h3 className="mb-2 text-lg font-semibold">Another Tab</h3>
          <p>This is another available tab.</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const ControlledTabs: Story = {
  render: () => {
    const [activeTab, setActiveTab] = React.useState("first");

    return (
      <div className="w-full max-w-md">
        <div className="mb-4">
          <p className="mb-2 text-sm text-gray-600">External controls:</p>
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("first")}
              className="rounded bg-blue-500 px-3 py-1 text-sm text-white"
            >
              Go to First
            </button>
            <button
              onClick={() => setActiveTab("second")}
              className="rounded bg-green-500 px-3 py-1 text-sm text-white"
            >
              Go to Second
            </button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="first">First</TabsTrigger>
            <TabsTrigger value="second">Second</TabsTrigger>
          </TabsList>
          <TabsContent value="first">
            <div className="p-4">
              <h3 className="mb-2 text-lg font-semibold">
                Controlled First Tab
              </h3>
              <p>
                This tab is controlled by external state. Current tab:{" "}
                <strong>{activeTab}</strong>
              </p>
            </div>
          </TabsContent>
          <TabsContent value="second">
            <div className="p-4">
              <h3 className="mb-2 text-lg font-semibold">
                Controlled Second Tab
              </h3>
              <p>
                You can control which tab is active programmatically. Current
                tab: <strong>{activeTab}</strong>
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    );
  },
};
