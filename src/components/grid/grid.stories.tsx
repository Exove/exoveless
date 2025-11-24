import type { Meta, StoryObj } from "@storybook/react";
import { Grid } from "./grid";

const meta: Meta<typeof Grid> = {
  title: "Components/Containers/Grid",
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
    children: (
      <>
        <SampleCard color="bg-blue-100">Item 1</SampleCard>
        <SampleCard color="bg-green-100">Item 2</SampleCard>
        <SampleCard color="bg-purple-100">Item 3</SampleCard>
        <SampleCard color="bg-yellow-100">Item 4</SampleCard>
      </>
    ),
  },
};

export const ThreeColumns: Story = {
  args: {
    cols: 3,
    children: (
      <>
        <SampleCard color="bg-red-100">Item 1</SampleCard>
        <SampleCard color="bg-blue-100">Item 2</SampleCard>
        <SampleCard color="bg-green-100">Item 3</SampleCard>
        <SampleCard color="bg-purple-100">Item 4</SampleCard>
        <SampleCard color="bg-yellow-100">Item 5</SampleCard>
        <SampleCard color="bg-pink-100">Item 6</SampleCard>
      </>
    ),
  },
};

export const FourColumns: Story = {
  args: {
    cols: 4,
    children: (
      <>
        {Array.from({ length: 8 }, (_, i) => (
          <SampleCard
            key={i}
            color={`bg-${["red", "blue", "green", "purple", "yellow", "pink", "indigo", "teal"][i]}-100`}
          >
            Item {i + 1}
          </SampleCard>
        ))}
      </>
    ),
  },
};

export const FiveColumns: Story = {
  args: {
    cols: 5,
    children: (
      <>
        {Array.from({ length: 10 }, (_, i) => (
          <SampleCard
            key={i}
            color={`bg-${["red", "blue", "green", "purple", "yellow", "pink", "indigo", "teal", "orange", "gray"][i]}-100`}
          >
            Item {i + 1}
          </SampleCard>
        ))}
      </>
    ),
  },
};

export const SixColumns: Story = {
  args: {
    cols: 6,
    children: (
      <>
        {Array.from({ length: 12 }, (_, i) => (
          <SampleCard
            key={i}
            color={`bg-${["red", "blue", "green", "purple", "yellow", "pink"][i % 6]}-100`}
          >
            {i + 1}
          </SampleCard>
        ))}
      </>
    ),
  },
};

export const ProductGrid: Story = {
  args: {
    cols: 3,
    children: (
      <>
        <div className="rounded-lg border bg-white p-4 shadow-sm">
          <div className="mb-3 flex h-32 items-center justify-center rounded bg-gray-200">
            📱
          </div>
          <h3 className="mb-1 font-semibold">iPhone 15</h3>
          <p className="mb-2 text-sm text-gray-600">
            Latest smartphone with advanced features
          </p>
          <p className="text-lg font-bold">$999</p>
        </div>
        <div className="rounded-lg border bg-white p-4 shadow-sm">
          <div className="mb-3 flex h-32 items-center justify-center rounded bg-gray-200">
            💻
          </div>
          <h3 className="mb-1 font-semibold">MacBook Pro</h3>
          <p className="mb-2 text-sm text-gray-600">
            Professional laptop for developers
          </p>
          <p className="text-lg font-bold">$1,999</p>
        </div>
        <div className="rounded-lg border bg-white p-4 shadow-sm">
          <div className="mb-3 flex h-32 items-center justify-center rounded bg-gray-200">
            🎧
          </div>
          <h3 className="mb-1 font-semibold">AirPods Pro</h3>
          <p className="mb-2 text-sm text-gray-600">
            Wireless earbuds with noise cancellation
          </p>
          <p className="text-lg font-bold">$249</p>
        </div>
        <div className="rounded-lg border bg-white p-4 shadow-sm">
          <div className="mb-3 flex h-32 items-center justify-center rounded bg-gray-200">
            ⌚
          </div>
          <h3 className="mb-1 font-semibold">Apple Watch</h3>
          <p className="mb-2 text-sm text-gray-600">
            Smartwatch with health tracking
          </p>
          <p className="text-lg font-bold">$399</p>
        </div>
        <div className="rounded-lg border bg-white p-4 shadow-sm">
          <div className="mb-3 flex h-32 items-center justify-center rounded bg-gray-200">
            📷
          </div>
          <h3 className="mb-1 font-semibold">Camera</h3>
          <p className="mb-2 text-sm text-gray-600">Professional DSLR camera</p>
          <p className="text-lg font-bold">$1,299</p>
        </div>
        <div className="rounded-lg border bg-white p-4 shadow-sm">
          <div className="mb-3 flex h-32 items-center justify-center rounded bg-gray-200">
            🖥️
          </div>
          <h3 className="mb-1 font-semibold">Monitor</h3>
          <p className="mb-2 text-sm text-gray-600">
            4K display for professionals
          </p>
          <p className="text-lg font-bold">$599</p>
        </div>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example of a product grid layout commonly used in e-commerce applications.",
      },
    },
  },
};

export const TeamGrid: Story = {
  args: {
    cols: 4,
    children: (
      <>
        {[
          { name: "John Doe", role: "CEO", avatar: "👨‍💼" },
          { name: "Jane Smith", role: "CTO", avatar: "👩‍💻" },
          { name: "Mike Johnson", role: "Designer", avatar: "👨‍🎨" },
          { name: "Sarah Wilson", role: "Developer", avatar: "👩‍💻" },
          { name: "Tom Brown", role: "Marketing", avatar: "👨‍💼" },
          { name: "Lisa Davis", role: "Sales", avatar: "👩‍💼" },
          { name: "Chris Lee", role: "Support", avatar: "👨‍💻" },
          { name: "Amy Chen", role: "HR", avatar: "👩‍💼" },
        ].map((person, index) => (
          <div
            key={index}
            className="rounded-lg border bg-white p-6 text-center shadow-sm"
          >
            <div className="mb-3 text-4xl">{person.avatar}</div>
            <h3 className="mb-1 font-semibold">{person.name}</h3>
            <p className="text-sm text-gray-600">{person.role}</p>
          </div>
        ))}
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example of a team member grid layout for about pages or team sections.",
      },
    },
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
