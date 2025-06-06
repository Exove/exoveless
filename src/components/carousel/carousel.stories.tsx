import type { Meta, StoryObj } from "@storybook/react";
import { Carousel, CarouselSlide } from "./carousel";

const meta: Meta<typeof Carousel> = {
  title: "Components/Carousel",
  component: Carousel,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A carousel component built with Embla Carousel. Supports navigation buttons, dot indicators, and wheel gestures.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    hideNavigationButtons: {
      control: { type: "boolean" },
      description: "Hide the navigation arrows",
    },
    hideDotButtons: {
      control: { type: "boolean" },
      description: "Hide the dot indicators",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const SampleSlide = ({
  children,
  color = "bg-blue-100",
}: {
  children: React.ReactNode;
  color?: string;
}) => (
  <div
    className={`${color} mx-2 flex min-h-[200px] items-center justify-center rounded-lg p-8 text-center`}
  >
    {children}
  </div>
);

export const Default: Story = {
  args: {
    children: (
      <>
        <CarouselSlide>
          <SampleSlide color="bg-blue-100">
            <div>
              <h3 className="mb-2 text-xl font-bold">Slide 1</h3>
              <p>This is the first slide with some content.</p>
            </div>
          </SampleSlide>
        </CarouselSlide>
        <CarouselSlide>
          <SampleSlide color="bg-green-100">
            <div>
              <h3 className="mb-2 text-xl font-bold">Slide 2</h3>
              <p>This is the second slide with different content.</p>
            </div>
          </SampleSlide>
        </CarouselSlide>
        <CarouselSlide>
          <SampleSlide color="bg-purple-100">
            <div>
              <h3 className="mb-2 text-xl font-bold">Slide 3</h3>
              <p>This is the third slide completing the carousel.</p>
            </div>
          </SampleSlide>
        </CarouselSlide>
      </>
    ),
  },
};

export const WithoutNavigationButtons: Story = {
  args: {
    hideNavigationButtons: true,
    children: (
      <>
        <CarouselSlide>
          <SampleSlide color="bg-red-100">
            <div>
              <h3 className="mb-2 text-xl font-bold">No Navigation</h3>
              <p>
                This carousel has no navigation buttons. Use dots or wheel
                gestures.
              </p>
            </div>
          </SampleSlide>
        </CarouselSlide>
        <CarouselSlide>
          <SampleSlide color="bg-yellow-100">
            <div>
              <h3 className="mb-2 text-xl font-bold">Slide 2</h3>
              <p>Navigate using the dot indicators below.</p>
            </div>
          </SampleSlide>
        </CarouselSlide>
        <CarouselSlide>
          <SampleSlide color="bg-pink-100">
            <div>
              <h3 className="mb-2 text-xl font-bold">Slide 3</h3>
              <p>Or use wheel gestures if supported.</p>
            </div>
          </SampleSlide>
        </CarouselSlide>
      </>
    ),
  },
};

export const WithoutDotButtons: Story = {
  args: {
    hideDotButtons: true,
    children: (
      <>
        <CarouselSlide>
          <SampleSlide color="bg-indigo-100">
            <div>
              <h3 className="mb-2 text-xl font-bold">No Dots</h3>
              <p>
                This carousel has no dot indicators. Use navigation buttons.
              </p>
            </div>
          </SampleSlide>
        </CarouselSlide>
        <CarouselSlide>
          <SampleSlide color="bg-teal-100">
            <div>
              <h3 className="mb-2 text-xl font-bold">Slide 2</h3>
              <p>Navigate using the arrow buttons above.</p>
            </div>
          </SampleSlide>
        </CarouselSlide>
        <CarouselSlide>
          <SampleSlide color="bg-orange-100">
            <div>
              <h3 className="mb-2 text-xl font-bold">Slide 3</h3>
              <p>Clean interface without dot indicators.</p>
            </div>
          </SampleSlide>
        </CarouselSlide>
      </>
    ),
  },
};

export const MinimalCarousel: Story = {
  args: {
    hideNavigationButtons: true,
    hideDotButtons: true,
    children: (
      <>
        <CarouselSlide>
          <SampleSlide color="bg-gray-100">
            <div>
              <h3 className="mb-2 text-xl font-bold">Minimal</h3>
              <p>This carousel has no controls. Only wheel gestures work.</p>
            </div>
          </SampleSlide>
        </CarouselSlide>
        <CarouselSlide>
          <SampleSlide color="bg-slate-100">
            <div>
              <h3 className="mb-2 text-xl font-bold">Slide 2</h3>
              <p>Perfect for touch devices or when you want minimal UI.</p>
            </div>
          </SampleSlide>
        </CarouselSlide>
      </>
    ),
  },
};

export const ManySlides: Story = {
  args: {
    children: (
      <>
        {Array.from({ length: 8 }, (_, i) => (
          <CarouselSlide key={i}>
            <SampleSlide
              color={`bg-${["blue", "green", "purple", "red", "yellow", "pink", "indigo", "teal"][i]}-100`}
            >
              <div>
                <h3 className="mb-2 text-xl font-bold">Slide {i + 1}</h3>
                <p>
                  This carousel has many slides to demonstrate scrolling
                  behavior.
                </p>
              </div>
            </SampleSlide>
          </CarouselSlide>
        ))}
      </>
    ),
  },
};

export const ImageCarousel: Story = {
  args: {
    children: (
      <>
        <CarouselSlide>
          <div className="mx-2">
            <div className="flex min-h-[300px] items-center justify-center rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 p-8 text-center text-white">
              <div>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                  📸
                </div>
                <h3 className="mb-2 text-2xl font-bold">Image Placeholder 1</h3>
                <p>Beautiful landscape photography</p>
              </div>
            </div>
          </div>
        </CarouselSlide>
        <CarouselSlide>
          <div className="mx-2">
            <div className="flex min-h-[300px] items-center justify-center rounded-lg bg-gradient-to-br from-green-400 to-green-600 p-8 text-center text-white">
              <div>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                  🌅
                </div>
                <h3 className="mb-2 text-2xl font-bold">Image Placeholder 2</h3>
                <p>Stunning sunrise views</p>
              </div>
            </div>
          </div>
        </CarouselSlide>
        <CarouselSlide>
          <div className="mx-2">
            <div className="flex min-h-[300px] items-center justify-center rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 p-8 text-center text-white">
              <div>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                  🏔️
                </div>
                <h3 className="mb-2 text-2xl font-bold">Image Placeholder 3</h3>
                <p>Majestic mountain ranges</p>
              </div>
            </div>
          </div>
        </CarouselSlide>
      </>
    ),
  },
};
