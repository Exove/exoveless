import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { toast } from "sonner";
import { Toaster } from "./toaster";

const meta: Meta<typeof Toaster> = {
  title: "Components/Toaster",
  component: Toaster,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A toast notification system built with Sonner. Provides different types of notifications with custom styling and icons.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div>
      <Toaster />
      <div className="space-y-4">
        <button
          onClick={() => toast("This is a default toast message")}
          className="rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-700"
        >
          Show Default Toast
        </button>
      </div>
    </div>
  ),
};

export const AllTypes: Story = {
  render: () => (
    <div>
      <Toaster />
      <div className="grid max-w-md grid-cols-2 gap-4">
        <button
          onClick={() => toast.success("Operation completed successfully!")}
          className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
        >
          Success Toast
        </button>

        <button
          onClick={() => toast.error("Something went wrong!")}
          className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
        >
          Error Toast
        </button>

        <button
          onClick={() => toast.warning("Please check your input")}
          className="rounded bg-yellow-600 px-4 py-2 text-white hover:bg-yellow-700"
        >
          Warning Toast
        </button>

        <button
          onClick={() => toast.info("Here's some useful information")}
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Info Toast
        </button>

        <button
          onClick={() => toast.loading("Processing your request...")}
          className="rounded bg-purple-600 px-4 py-2 text-white hover:bg-purple-700"
        >
          Loading Toast
        </button>

        <button
          onClick={() => toast("Default message")}
          className="rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-700"
        >
          Default Toast
        </button>
      </div>
    </div>
  ),
};

export const WithActions: Story = {
  render: () => (
    <div>
      <Toaster />
      <div className="space-y-4">
        <button
          onClick={() =>
            toast.success("File uploaded successfully!", {
              action: {
                label: "View",
                onClick: () => alert("Opening file..."),
              },
            })
          }
          className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
        >
          Toast with Action
        </button>

        <button
          onClick={() =>
            toast.error("Failed to delete item", {
              action: {
                label: "Retry",
                onClick: () => toast.info("Retrying..."),
              },
            })
          }
          className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
        >
          Error with Retry
        </button>

        <button
          onClick={() =>
            toast("New message received", {
              description: "Click to read the full message",
              action: {
                label: "Read",
                onClick: () => alert("Opening message..."),
              },
            })
          }
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Toast with Description
        </button>
      </div>
    </div>
  ),
};

export const CustomDuration: Story = {
  render: () => (
    <div>
      <Toaster />
      <div className="space-y-4">
        <button
          onClick={() => toast("Quick message", { duration: 1000 })}
          className="rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-700"
        >
          1 Second Toast
        </button>

        <button
          onClick={() => toast.success("Normal duration", { duration: 4000 })}
          className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
        >
          4 Second Toast
        </button>

        <button
          onClick={() => toast.warning("Long message", { duration: 10000 })}
          className="rounded bg-yellow-600 px-4 py-2 text-white hover:bg-yellow-700"
        >
          10 Second Toast
        </button>

        <button
          onClick={() =>
            toast.info("Persistent message", { duration: Infinity })
          }
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Persistent Toast
        </button>
      </div>
    </div>
  ),
};

export const PromiseToast: Story = {
  render: () => (
    <div>
      <Toaster />
      <div className="space-y-4">
        <button
          onClick={() => {
            const promise = new Promise((resolve) => {
              setTimeout(() => resolve("Data loaded successfully"), 2000);
            });

            toast.promise(promise, {
              loading: "Loading data...",
              success: "Data loaded successfully!",
              error: "Failed to load data",
            });
          }}
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Promise Success
        </button>

        <button
          onClick={() => {
            const promise = new Promise((_, reject) => {
              setTimeout(() => reject(new Error("Network error")), 2000);
            });

            toast.promise(promise, {
              loading: "Saving changes...",
              success: "Changes saved!",
              error: "Failed to save changes",
            });
          }}
          className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
        >
          Promise Error
        </button>
      </div>
    </div>
  ),
};

export const EcommerceExample: Story = {
  render: () => (
    <div>
      <Toaster />
      <div className="space-y-4">
        <h3 className="mb-4 text-lg font-semibold">E-commerce Actions</h3>

        <button
          onClick={() =>
            toast.success("Added to cart!", {
              description: "iPhone 15 Pro - Space Black",
              action: {
                label: "View Cart",
                onClick: () => toast.info("Opening cart..."),
              },
            })
          }
          className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
        >
          Add to Cart
        </button>

        <button
          onClick={() =>
            toast.success("Added to wishlist", {
              description: "You can view it later in your wishlist",
            })
          }
          className="rounded bg-pink-600 px-4 py-2 text-white hover:bg-pink-700"
        >
          Add to Wishlist
        </button>

        <button
          onClick={() =>
            toast.warning("Low stock alert", {
              description: "Only 2 items left in stock",
              action: {
                label: "Buy Now",
                onClick: () => toast.info("Redirecting to checkout..."),
              },
            })
          }
          className="rounded bg-yellow-600 px-4 py-2 text-white hover:bg-yellow-700"
        >
          Stock Warning
        </button>

        <button
          onClick={() =>
            toast.error("Payment failed", {
              description: "Please check your payment method",
              action: {
                label: "Retry",
                onClick: () => toast.loading("Processing payment..."),
              },
            })
          }
          className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
        >
          Payment Error
        </button>
      </div>
    </div>
  ),
};

export const FormValidationExample: Story = {
  render: () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      if (!email) {
        toast.error("Email is required");
        return;
      }

      if (!email.includes("@")) {
        toast.error("Please enter a valid email address");
        return;
      }

      if (password.length < 8) {
        toast.error("Password must be at least 8 characters long");
        return;
      }

      toast.success("Account created successfully!", {
        description: "Welcome to our platform",
        action: {
          label: "Get Started",
          onClick: () => toast.info("Redirecting to dashboard..."),
        },
      });
    };

    return (
      <div>
        <Toaster />
        <form onSubmit={handleSubmit} className="max-w-sm space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-3 py-2"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-3 py-2"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Create Account
          </button>
        </form>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example of using toasts for form validation feedback in a registration form.",
      },
    },
  },
};
