import type { Meta, StoryObj } from "@storybook/react";
import Heading from "./heading";

const meta: Meta<typeof Heading> = {
  title: "Components/Heading",
  component: Heading,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A semantic heading component that automatically generates IDs from text content. Supports different HTML heading levels and visual sizes.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    level: {
      control: { type: "select" },
      options: ["h1", "h2", "h3", "h4"],
      description: "HTML heading level for semantic structure",
    },
    size: {
      control: { type: "select" },
      options: ["xl", "lg", "md", "sm", "xs"],
      description: "Visual size of the heading",
    },
    children: {
      control: { type: "text" },
      description: "Text content of the heading",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    level: "h1",
    size: "xl",
    children: "Default Heading",
  },
};

export const AllLevels: Story = {
  render: () => (
    <div className="space-y-4">
      <Heading level="h1" size="xl">
        H1 Heading Level
      </Heading>
      <Heading level="h2" size="lg">
        H2 Heading Level
      </Heading>
      <Heading level="h3" size="md">
        H3 Heading Level
      </Heading>
      <Heading level="h4" size="sm">
        H4 Heading Level
      </Heading>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Heading level="h2" size="xl">
        Extra Large Size
      </Heading>
      <Heading level="h2" size="lg">
        Large Size
      </Heading>
      <Heading level="h2" size="md">
        Medium Size
      </Heading>
      <Heading level="h2" size="sm">
        Small Size
      </Heading>
      <Heading level="h2" size="xs">
        Extra Small Size
      </Heading>
    </div>
  ),
};

export const ExtraLarge: Story = {
  args: {
    level: "h1",
    size: "xl",
    children: "Extra Large Heading",
  },
};

export const Large: Story = {
  args: {
    level: "h1",
    size: "lg",
    children: "Large Heading",
  },
};

export const Medium: Story = {
  args: {
    level: "h2",
    size: "md",
    children: "Medium Heading",
  },
};

export const Small: Story = {
  args: {
    level: "h3",
    size: "sm",
    children: "Small Heading",
  },
};

export const ExtraSmall: Story = {
  args: {
    level: "h4",
    size: "xs",
    children: "Extra Small Heading",
  },
};

export const WithSpecialCharacters: Story = {
  args: {
    level: "h2",
    size: "lg",
    children: "Heading with äöå and Special Characters!",
  },
  parameters: {
    docs: {
      description: {
        story:
          "The component automatically generates URL-friendly IDs from text content, handling special characters like Finnish letters.",
      },
    },
  },
};

export const CustomClassName: Story = {
  args: {
    level: "h2",
    size: "md",
    children: "Custom Styled Heading",
    className: "text-purple-600 border-b-2 border-purple-200 pb-2",
  },
  parameters: {
    docs: {
      description: {
        story:
          "You can add custom styling with the className prop while maintaining the base heading styles.",
      },
    },
  },
};

export const ContentHierarchy: Story = {
  render: () => (
    <div className="max-w-2xl">
      <Heading level="h1" size="xl">
        Article Title
      </Heading>
      <p className="mb-6 text-gray-600">
        This demonstrates how headings work in a content hierarchy with proper
        semantic structure.
      </p>

      <Heading level="h2" size="lg">
        Main Section
      </Heading>
      <p className="mb-4">
        This is the main section content that follows the h2 heading.
      </p>

      <Heading level="h3" size="md">
        Subsection
      </Heading>
      <p className="mb-4">
        This subsection provides more detailed information under the main
        section.
      </p>

      <Heading level="h4" size="sm">
        Sub-subsection
      </Heading>
      <p className="mb-4">
        Even more specific content can be organized under h4 headings.
      </p>

      <Heading level="h2" size="lg">
        Another Main Section
      </Heading>
      <p>
        This shows how multiple main sections can be structured in a document.
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Example of proper heading hierarchy in a content structure, showing how different levels and sizes work together.",
      },
    },
  },
};
