import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";

import ImageModal from "./ImageModal";
import Image from "next/image";

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
        <button onClick={() => setOpen(true)} className="block w-full cursor-zoom-in">
          <Image 
            src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80" 
            alt="City skyline" 
            width={1200} 
            height={800} 
            className="aspect-3/2 w-full rounded-lg object-cover"
          />
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

