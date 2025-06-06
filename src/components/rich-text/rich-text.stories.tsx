import type { Meta, StoryObj } from "@storybook/react";
import RichText from "./rich-text";

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

export const Documentation: Story = {
  args: {
    children: (
      <>
        <h1>API Documentation</h1>
        <p>This documentation covers the main API endpoints and their usage.</p>

        <h2>Authentication</h2>
        <p>
          All API requests require authentication using an API key. Include your
          API key in the request headers:
        </p>

        <pre>
          <code>Authorization: Bearer YOUR_API_KEY</code>
        </pre>

        <h2>Endpoints</h2>

        <h3>GET /api/users</h3>
        <p>Retrieves a list of all users.</p>

        <h4>Parameters</h4>
        <ul>
          <li>
            <code>page</code> (optional) - Page number for pagination
          </li>
          <li>
            <code>limit</code> (optional) - Number of items per page
          </li>
        </ul>

        <h4>Response</h4>
        <pre>
          <code>{`{
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    }
  ],
  "total": 100,
  "page": 1
}`}</code>
        </pre>

        <h3>POST /api/users</h3>
        <p>Creates a new user.</p>

        <h4>Request Body</h4>
        <pre>
          <code>{`{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "password": "securepassword"
}`}</code>
        </pre>

        <h2>Error Handling</h2>
        <p>
          The API uses conventional HTTP response codes to indicate success or
          failure:
        </p>

        <ul>
          <li>
            <code>200</code> - Success
          </li>
          <li>
            <code>400</code> - Bad Request
          </li>
          <li>
            <code>401</code> - Unauthorized
          </li>
          <li>
            <code>404</code> - Not Found
          </li>
          <li>
            <code>500</code> - Internal Server Error
          </li>
        </ul>
      </>
    ),
  },
};

export const Article: Story = {
  args: {
    children: (
      <>
        <h1>The Future of Web Development</h1>
        <p className="lead">
          Exploring emerging trends and technologies that are shaping the future
          of web development.
        </p>

        <p>
          Web development has evolved dramatically over the past decade. From
          simple static websites to complex, interactive applications, the
          landscape continues to change at a rapid pace.
        </p>

        <h2>Current Trends</h2>

        <h3>1. Component-Based Architecture</h3>
        <p>
          Modern frameworks like React, Vue, and Angular have popularized
          component-based development, making code more reusable and
          maintainable.
        </p>

        <h3>2. JAMstack</h3>
        <p>
          JavaScript, APIs, and Markup (JAMstack) architecture is gaining
          popularity for its performance benefits and developer experience.
        </p>

        <h3>3. Serverless Computing</h3>
        <p>
          Serverless functions are changing how we think about backend
          development, offering scalability and cost-effectiveness.
        </p>

        <h2>Looking Ahead</h2>
        <p>
          As we look to the future, several technologies are poised to make
          significant impacts:
        </p>

        <ol>
          <li>
            <strong>WebAssembly:</strong> Bringing near-native performance to
            web applications
          </li>
          <li>
            <strong>Progressive Web Apps:</strong> Bridging the gap between web
            and native applications
          </li>
          <li>
            <strong>AI Integration:</strong> Making applications smarter and
            more personalized
          </li>
        </ol>

        <blockquote>
          <p>
            "The best way to predict the future is to invent it." - Alan Kay
          </p>
        </blockquote>

        <p>
          The future of web development is bright, with new technologies and
          methodologies constantly emerging to solve complex problems and
          improve user experiences.
        </p>
      </>
    ),
  },
};

export const SimpleContent: Story = {
  args: {
    children: (
      <>
        <h2>Simple Content Example</h2>
        <p>This is a simple example showing basic typography elements.</p>
        <ul>
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
        </ul>
        <p>
          You can also include <a href="#">links</a> and{" "}
          <strong>bold text</strong> in your content.
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
