import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { toast } from "sonner";

import { Toaster } from "./Toaster";

const meta: Meta<typeof Toaster> = {
  title: "Components/Toaster",
  component: Toaster,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Dark theme Sonner preset that keeps success/error colours consistent with the rest of the UI.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <button
        onClick={() => toast("Background sync is running")}
        className="rounded-md bg-purple-700 px-4 py-2 text-white"
      >
        Trigger toast
      </button>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-3">
      <Toaster />
      <button onClick={() => toast.success("Data saved")} className="rounded-md bg-emerald-600 px-4 py-2 text-white">
        Success
      </button>
      <button onClick={() => toast.error("Action failed")} className="rounded-md bg-red-600 px-4 py-2 text-white">
        Error
      </button>
      <button onClick={() => toast.warning("Heads up")} className="rounded-md bg-purple-700 px-4 py-2 text-white">
        Warning
      </button>
      <button onClick={() => toast.info("Informational message")} className="rounded-md bg-blue-600 px-4 py-2 text-white">
        Info
      </button>
    </div>
  ),
};

export const PromiseExample: Story = {
  render: () => {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
      const promise = new Promise((resolve) => setTimeout(resolve, 1500));
      setLoading(true);
      toast.promise(promise, {
        loading: "Syncing data…",
        success: "All set!",
        error: "Something went wrong",
      });
      promise.finally(() => setLoading(false));
    };

    return (
      <div className="space-y-4">
        <Toaster />
        <button
          onClick={handleClick}
          disabled={loading}
          className="rounded-md bg-purple-700 px-4 py-2 text-white disabled:opacity-50"
        >
          Sync content
        </button>
      </div>
    );
  },
};
