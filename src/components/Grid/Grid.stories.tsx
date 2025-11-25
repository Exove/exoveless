import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Grid } from "./Grid";

const meta: Meta<typeof Grid> = {
  title: "Components/Grid",
  component: Grid,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A responsive grid container component that automatically adjusts column count based on screen size. Supports 2-6 columns with mobile-first responsive breakpoints.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    cols: {
      control: { type: "select" },
      options: [2, 3, 4, 5, 6],
      description: "Number of columns in the grid",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const SampleCard = ({
  children,
  color = "bg-blue-100",
}: {
  children: React.ReactNode;
  color?: string;
}) => (
  <div
    className={`${color} flex min-h-[100px] items-center justify-center rounded-lg p-4 text-center`}
  >
    {children}
  </div>
);

export const TwoColumns: Story = {
  args: {
    cols: 2,
    children: [
      <SampleCard key="1" color="bg-blue-100">
        Item 1
      </SampleCard>,
      <SampleCard key="2" color="bg-green-100">
        Item 2
      </SampleCard>,
      <SampleCard key="3" color="bg-purple-100">
        Item 3
      </SampleCard>,
      <SampleCard key="4" color="bg-yellow-100">
        Item 4
      </SampleCard>,
      <SampleCard key="3" color="bg-orange-100">
        Item 3
      </SampleCard>,
      <SampleCard key="4" color="bg-red-100">
        Item 4
      </SampleCard>,
    ],
  },
};
