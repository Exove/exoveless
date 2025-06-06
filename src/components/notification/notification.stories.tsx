import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import Notification from "./notification";

const meta: Meta<typeof Notification> = {
  title: "Components/Notification",
  component: Notification,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A notification component with different types (standard, success, warning, error). Features dismissible functionality and appropriate ARIA attributes for accessibility.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["standard", "success", "warning", "error"],
      description: "Type of notification affecting color and icon",
    },
    children: {
      control: { type: "text" },
      description: "Content of the notification",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    type: "standard",
    children: "This is a standard notification with important information.",
  },
};

export const Success: Story = {
  args: {
    type: "success",
    children: "Your action was completed successfully!",
  },
};

export const Warning: Story = {
  args: {
    type: "warning",
    children: "Please review your settings before proceeding.",
  },
};

export const Error: Story = {
  args: {
    type: "error",
    children: "An error occurred while processing your request.",
  },
};

export const LongContent: Story = {
  args: {
    type: "standard",
    children:
      "This is a notification with much longer content to demonstrate how the component handles text wrapping and maintains proper layout with extended messages that might span multiple lines.",
  },
};

export const WithRichContent: Story = {
  args: {
    type: "success",
    children: (
      <div>
        <strong>Account Created!</strong>
        <p className="mt-1 text-sm">
          Welcome to our platform. You can now access all premium features.
        </p>
      </div>
    ),
  },
};

export const AllTypes: Story = {
  render: () => (
    <div className="space-y-4">
      <Notification type="standard">
        Standard notification for general information
      </Notification>
      <Notification type="success">
        Success notification for completed actions
      </Notification>
      <Notification type="warning">
        Warning notification for important notices
      </Notification>
      <Notification type="error">
        Error notification for failed operations
      </Notification>
    </div>
  ),
};

export const FormValidation: Story = {
  render: () => (
    <div className="max-w-md space-y-4">
      <div>
        <label className="mb-1 block text-sm font-medium">Email</label>
        <input
          type="email"
          className="w-full rounded-md border border-gray-300 px-3 py-2"
          placeholder="Enter your email"
        />
        <div className="mt-2">
          <Notification type="error">
            Please enter a valid email address
          </Notification>
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Password</label>
        <input
          type="password"
          className="w-full rounded-md border border-gray-300 px-3 py-2"
          placeholder="Enter your password"
        />
        <div className="mt-2">
          <Notification type="warning">
            Password must be at least 8 characters long
          </Notification>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Example of using notifications for form validation feedback.",
      },
    },
  },
};

export const SystemMessages: Story = {
  render: () => (
    <div className="space-y-4">
      <Notification type="success">
        <div>
          <strong>Update Available</strong>
          <p className="mt-1 text-sm">
            A new version of the application is ready to install.
          </p>
        </div>
      </Notification>

      <Notification type="warning">
        <div>
          <strong>Maintenance Scheduled</strong>
          <p className="mt-1 text-sm">
            System maintenance is scheduled for tonight at 2:00 AM EST.
          </p>
        </div>
      </Notification>

      <Notification type="error">
        <div>
          <strong>Connection Lost</strong>
          <p className="mt-1 text-sm">
            Unable to connect to the server. Please check your internet
            connection.
          </p>
        </div>
      </Notification>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Examples of system-level notifications with rich content.",
      },
    },
  },
};

export const ShoppingCart: Story = {
  render: () => (
    <div className="space-y-4">
      <Notification type="success">
        Item added to cart successfully
      </Notification>

      <Notification type="warning">Only 2 items left in stock</Notification>

      <Notification type="error">
        This item is currently out of stock
      </Notification>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "E-commerce related notification examples.",
      },
    },
  },
};

export const Interactive: Story = {
  render: () => {
    type NotificationType = "standard" | "success" | "warning" | "error";
    const [notifications, setNotifications] = React.useState<
      Array<{ id: number; type: NotificationType; message: string }>
    >([
      {
        id: 1,
        type: "success",
        message: "File uploaded successfully",
      },
      {
        id: 2,
        type: "warning",
        message: "Storage space is running low",
      },
      { id: 3, type: "error", message: "Failed to save changes" },
    ]);

    const addNotification = (type: NotificationType) => {
      const messages = {
        standard: "New notification added",
        success: "Operation completed successfully",
        warning: "Please review this warning",
        error: "An error has occurred",
      };

      const newNotification = {
        id: Date.now(),
        type,
        message: messages[type],
      };

      setNotifications((prev) => [...prev, newNotification]);
    };

    return (
      <div>
        <div className="mb-4 flex gap-2">
          <button
            onClick={() => addNotification("standard")}
            className="rounded bg-purple-600 px-3 py-1 text-sm text-white"
          >
            Add Standard
          </button>
          <button
            onClick={() => addNotification("success")}
            className="rounded bg-green-600 px-3 py-1 text-sm text-white"
          >
            Add Success
          </button>
          <button
            onClick={() => addNotification("warning")}
            className="rounded bg-yellow-600 px-3 py-1 text-sm text-white"
          >
            Add Warning
          </button>
          <button
            onClick={() => addNotification("error")}
            className="rounded bg-red-600 px-3 py-1 text-sm text-white"
          >
            Add Error
          </button>
        </div>

        <div className="space-y-2">
          {notifications.map((notification) => (
            <Notification key={notification.id} type={notification.type}>
              {notification.message}
            </Notification>
          ))}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive example showing how notifications can be dynamically added and dismissed.",
      },
    },
  },
};
