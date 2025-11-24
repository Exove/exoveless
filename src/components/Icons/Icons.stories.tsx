import type { Meta, StoryObj } from "@storybook/react";

import { FacebookIcon, GoogleIcon, InstagramIcon, LinkedInIcon, YoutubeIcon } from "./icons";

const meta: Meta = {
  title: "Components/Icons",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Social icons with shared sizing helpers.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const Social: Story = {
  render: () => (
    <div className="flex gap-4 text-white">
      <FacebookIcon />
      <InstagramIcon />
      <LinkedInIcon />
      <YoutubeIcon />
      <GoogleIcon />
    </div>
  ),
};

