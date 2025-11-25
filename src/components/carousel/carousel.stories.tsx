import type { Meta, StoryObj } from "@storybook/react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./Carousel";

const meta: Meta<typeof Carousel> = {
  title: "Components/Carousel",
  component: Carousel,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "Embla based carousel with slot-aware controls and keyboard support.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const Slide = ({ title, description, bg }: { title: string; description: string; bg: string }) => (
  <div className={`flex min-h-[220px] items-center justify-center rounded-xl ${bg} p-8 text-white`}>
    <div className="max-w-sm space-y-2 text-center">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-sm opacity-90">{description}</p>
    </div>
  </div>
);

const slides = [
  {
    title: "Launch overview",
    description: "Monitor adoption metrics for the current release train.",
    bg: "bg-purple-700",
  },
  {
    title: "Usage split",
    description: "Understand which journeys drive the most value.",
    bg: "bg-emerald-700",
  },
  {
    title: "Performance",
    description: "Latency, error rates, and cache hit ratios at a glance.",
    bg: "bg-blue-700",
  },
  {
    title: "Last slide",
    description: "This is the last slide.",
    bg: "bg-violet-700",
  }
];

export const Default: Story = {
  render: () => (
    <div className="relative px-20">
      <Carousel className="w-full max-w-3xl">
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.title} className="pl-4 md:basis-1/2">
              <Slide {...slide} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
};