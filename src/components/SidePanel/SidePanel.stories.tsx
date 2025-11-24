import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import SidePanel from "./SidePanel";

const meta: Meta<typeof SidePanel> = {
  title: "Components/SidePanel",
  component: SidePanel,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "HeadlessUI dialog styled as a sliding drawer.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <SidePanel
      openLabel={<button className="rounded-md bg-purple-700 px-4 py-2 text-white">Open filters</button>}
      title="Filters"
    >
      <div className="space-y-4 text-gray-900">
        <p>Place any content inside the panel.</p>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" className="rounded border-gray-300" /> Include archived items
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" className="rounded border-gray-300" defaultChecked /> Notify team
        </label>
      </div>
    </SidePanel>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button className="rounded-md bg-purple-700 px-4 py-2 text-white" onClick={() => setOpen(true)}>
          Show panel
        </button>
        <SidePanel
          open={open}
          onClose={() => setOpen(false)}
          openLabel={<span className="sr-only">Hidden trigger</span>}
          title="Controlled example"
          footer={<div className="mt-6 text-sm text-gray-600">Footer actions go here.</div>}
        >
          <p className="text-gray-900">Panel content managed from parent state.</p>
        </SidePanel>
      </>
    );
  },
};

