import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Heading from "./Heading";

const meta: Meta<typeof Heading> = {
  title: "Components/Heading",
  component: Heading,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Semantic heading that generates an anchor ID from the label and scales typography per size.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    level: "h2",
    size: "lg",
    children: "Section starts here",
  },
};

export const ArticleExample: Story = {
  render: () => (
    <article className="max-w-2xl space-y-6">
      <Heading level="h1" size="lg">
        Building Accessible Web Components
      </Heading>
      <p className="text-gray-700">
        Accessibility is not optional—it's essential. Every web component should be built with accessibility in mind
        from the start. This ensures that all users, regardless of their abilities, can interact with your application
        effectively.
      </p>

      <Heading level="h2" size="md">
        Semantic HTML and ARIA
      </Heading>
      <p className="text-gray-700">
        Using semantic HTML elements provides meaning to assistive technologies. When semantic HTML isn't sufficient,
        ARIA attributes can enhance accessibility without changing visual appearance.
      </p>

      <Heading level="h3" size="sm">
        Keyboard Navigation
      </Heading>
      <p className="text-gray-700">
        All interactive elements must be keyboard accessible. Users should be able to navigate through your application
        using only a keyboard, with clear focus indicators and logical tab order.
      </p>

      <Heading level="h3" size="sm">
        Screen Reader Support
      </Heading>
      <p className="text-gray-700">
        Screen readers rely on proper markup and ARIA labels to convey information to users. Test your components with
        screen readers to ensure they work correctly.
      </p>

      <Heading level="h2" size="md">
        Testing and Validation
      </Heading>
      <p className="text-gray-700">
        Regular testing with accessibility tools and real users is crucial. Automated tools can catch many issues, but
        manual testing provides insights that tools might miss.
      </p>

      <Heading level="h3" size="sm">
        Automated Testing Tools
      </Heading>
      <p className="text-gray-700">
        Tools like axe, Lighthouse, and WAVE can help identify accessibility issues during development. Integrate these
        into your development workflow for continuous improvement.
      </p>
    </article>
  ),
};

export const LongHeadings: Story = {
  render: () => (
    <div className="max-w-2xl space-y-8">
      <div>
        <Heading level="h1" size="lg">
          This is an Extraordinarily Long Heading That Demonstrates How Line Heights Work
        </Heading>
        <p className="mt-4 text-gray-700">
          This paragraph follows a very long heading to show how spacing works. The heading above should wrap nicely
          across multiple lines while maintaining proper line height and spacing.
        </p>
      </div>

      <div>
        <Heading level="h2" size="md">
          A Comprehensive Guide to Understanding Complex Multi-Line Heading Behavior in Modern Web Applications and
          Design Systems
        </Heading>
        <p className="mt-4 text-gray-700">
          Medium headings need careful attention to line height to ensure readability. When headings wrap, each line
          should have appropriate spacing both within the heading itself and between the heading and following content.
        </p>
      </div>

      <div>
        <Heading level="h3" size="sm">
          Smaller Heading Size That Can Still Wrap Across Multiple Lines When the Content is Sufficiently Long Enough
        </Heading>
        <p className="mt-4 text-gray-700">
          Even smaller headings need proper line height when they wrap. This ensures consistent typography throughout
          the document.
        </p>
      </div>
    </div>
  ),
};
