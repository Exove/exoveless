import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AdjustmentsVerticalIcon, ChartPieIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Radix Tabs skin with soft focus ring and neutral palette.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-full max-w-xl">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="details">Details</TabsTrigger>
        <TabsTrigger value="config">Config</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-black">Snapshot</h3>
          <p className="text-sm text-gray-600">
            High-level view for the current release, including key KPIs and risk indicators.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="details">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Details</h3>
          <p className="text-sm text-gray-600">
            Dive deeper into the data set, compare metrics, and export structured reports.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="config">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Configuration</h3>
          <p className="text-sm text-gray-600">Fine tune inputs, thresholds, and automation logic.</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="analytics" className="w-full max-w-xl">
      <TabsList>
        <TabsTrigger value="analytics">
          <ChartPieIcon /> Analytics
        </TabsTrigger>
        <TabsTrigger value="filters">
          <AdjustmentsVerticalIcon /> Filters
        </TabsTrigger>
        <TabsTrigger value="settings">
          <Cog6ToothIcon /> Settings
        </TabsTrigger>
      </TabsList>
      <TabsContent value="analytics">
        <div className="text-sm text-gray-700">
          Visualise adoption, engagement, and retention with built-in charts.
        </div>
      </TabsContent>
      <TabsContent value="filters">
        <div className="text-sm text-gray-700">Use saved filters to switch context quickly.</div>
      </TabsContent>
      <TabsContent value="settings">
        <div className="text-sm text-gray-700">Adjust pipeline owners, exports, and alerts.</div>
      </TabsContent>
    </Tabs>
  ),
};
