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
    layout: "padded",
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

const Slide = ({ title, description, gradient }: { title: string; description: string; gradient: string }) => (
  <div className={`flex min-h-[220px] items-center justify-center rounded-xl ${gradient} p-8 text-white`}>
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
    gradient: "bg-gradient-to-br from-slate-900 to-indigo-800",
  },
  {
    title: "Usage split",
    description: "Understand which journeys drive the most value.",
    gradient: "bg-gradient-to-br from-emerald-900 to-teal-700",
  },
  {
    title: "Performance",
    description: "Latency, error rates, and cache hit ratios at a glance.",
    gradient: "bg-gradient-to-br from-purple-700 to-purple-900",
  },
];

export const Default: Story = {
  render: () => (
    <div className="relative">
      <Carousel className="w-full max-w-4xl">
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

export const Vertical: Story = {
  render: () => (
    <div className="relative h-[360px]">
      <Carousel orientation="vertical" className="h-full w-full max-w-xl">
        <CarouselContent className="pr-4">
          {slides.map((slide) => (
            <CarouselItem key={slide.title} className="pt-4">
              <Slide {...slide} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-10 rotate-0" />
        <CarouselNext className="-right-10 rotate-0" />
      </Carousel>
    </div>
  ),
};
