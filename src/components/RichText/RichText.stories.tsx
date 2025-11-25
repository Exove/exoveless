import type { Meta, StoryObj } from "@storybook/react";
import RichText from "./RichText";

const meta: Meta<typeof RichText> = {
  title: "Components/RichText",
  component: RichText,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A rich text component that applies Tailwind CSS Typography styles to content. Perfect for rendering markdown content or formatted text.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <h1>Welcome to Our Platform</h1>
        <p>
          This is a sample rich text content that demonstrates the typography
          styling capabilities of the RichText component.
        </p>
        <p>
          You can include <strong>bold text</strong>, <em>italic text</em>, and{" "}
          <a href="#">links</a> in your content.
        </p>
      </>
    ),
  },
};

export const BlogPost: Story = {
  args: {
    children: (
      <>
        <h1>Getting Started with React</h1>
        <p className="lead">
          React is a JavaScript library for building user interfaces. In this
          guide, we'll explore the fundamentals of React development.
        </p>

        <h2>What is React?</h2>
        <p>
          React is a declarative, efficient, and flexible JavaScript library for
          building user interfaces. It lets you compose complex UIs from small
          and isolated pieces of code called "components".
        </p>

        <h3>Key Features</h3>
        <ul>
          <li>
            <strong>Component-Based:</strong> Build encapsulated components that
            manage their own state
          </li>
          <li>
            <strong>Declarative:</strong> React makes it painless to create
            interactive UIs
          </li>
          <li>
            <strong>Learn Once, Write Anywhere:</strong> Develop new features
            without rewriting existing code
          </li>
        </ul>

        <h3>Getting Started</h3>
        <p>
          To get started with React, you'll need to have Node.js installed on
          your machine. Then you can create a new React application using:
        </p>

        <pre>
          <code>npx create-react-app my-app cd my-app npm start</code>
        </pre>

        <blockquote>
          <p>
            React has been designed from the start for gradual adoption, and you
            can use as little or as much React as you need.
          </p>
        </blockquote>

        <h2>Conclusion</h2>
        <p>
          React is a powerful tool for building modern web applications. With
          its component-based architecture and declarative approach, it makes
          building complex UIs much more manageable.
        </p>
      </>
    ),
  },
};

export const ListsAndTables: Story = {
  args: {
    children: (
      <>
        <h1>Lists and Tables</h1>

        <h2>Unordered List</h2>
        <ul>
          <li>First item</li>
          <li>
            Second item with <strong>bold text</strong>
          </li>
          <li>
            Third item with <em>italic text</em>
          </li>
          <li>
            Fourth item with a <a href="#">link</a>
          </li>
        </ul>

        <h2>Ordered List</h2>
        <ol>
          <li>Step one: Install dependencies</li>
          <li>Step two: Configure settings</li>
          <li>Step three: Run the application</li>
          <li>Step four: Test functionality</li>
        </ol>

        <h2>Nested Lists</h2>
        <ul>
          <li>
            Frontend Technologies
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </li>
          <li>
            Backend Technologies
            <ul>
              <li>Node.js</li>
              <li>Python</li>
              <li>PHP</li>
            </ul>
          </li>
        </ul>

        <h2>Table Example</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Experience</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>Frontend Developer</td>
              <td>5 years</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>Backend Developer</td>
              <td>7 years</td>
            </tr>
            <tr>
              <td>Mike Johnson</td>
              <td>Full Stack Developer</td>
              <td>3 years</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
};
