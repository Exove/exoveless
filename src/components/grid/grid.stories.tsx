import type { Meta, StoryObj } from "@storybook/react";
import { Grid } from "./grid";

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
    ],
  },
};

export const AllColumnSizes: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-lg font-semibold">2 Columns</h3>
        <Grid cols={2}>
          <SampleCard color="bg-blue-100">Item 1</SampleCard>
          <SampleCard color="bg-green-100">Item 2</SampleCard>
          <SampleCard color="bg-purple-100">Item 3</SampleCard>
          <SampleCard color="bg-yellow-100">Item 4</SampleCard>
        </Grid>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">3 Columns</h3>
        <Grid cols={3}>
          <SampleCard color="bg-red-100">Item 1</SampleCard>
          <SampleCard color="bg-blue-100">Item 2</SampleCard>
          <SampleCard color="bg-green-100">Item 3</SampleCard>
          <SampleCard color="bg-purple-100">Item 4</SampleCard>
          <SampleCard color="bg-yellow-100">Item 5</SampleCard>
          <SampleCard color="bg-pink-100">Item 6</SampleCard>
        </Grid>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">4 Columns</h3>
        <Grid cols={4}>
          {Array.from({ length: 8 }, (_, i) => (
            <SampleCard
              key={i}
              color={`bg-${["red", "blue", "green", "purple", "yellow", "pink", "indigo", "teal"][i]}-100`}
            >
              {i + 1}
            </SampleCard>
          ))}
        </Grid>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Comparison of different column configurations to show responsive behavior.",
      },
    },
  },
};
