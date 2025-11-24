import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import ImageModal from "./ImageModal";

const meta: Meta<typeof ImageModal> = {
  title: "Components/ImageModal",
  component: ImageModal,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Lightweight image zoom using Headless UI dialog transitions.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button onClick={() => setOpen(true)} className="rounded-md bg-purple-700 px-4 py-2 text-white">
          Show preview
        </button>
        <ImageModal
          isOpen={open}
          onClose={() => setOpen(false)}
          src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80"
          alt="City skyline"
          caption="San Francisco – Photo by Patrick Perkins"
        />
      </>
    );
  },
};

