import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./modal";
import Button from "../button/button";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A modal dialog component built with Headless UI. Supports different sizes and can be controlled or uncontrolled.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
      description: "Size of the modal",
    },
    open: {
      control: { type: "boolean" },
      description: "Whether modal is open (controlled mode)",
    },
    saveStateToLocalStorage: {
      control: { type: "boolean" },
      description: "Save modal state to localStorage",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "default-modal",
    title: "Default Modal",
    children: (
      <div>
        <p>
          This is the default modal content. It demonstrates the basic
          functionality of the modal component.
        </p>
        <p className="mt-4">
          You can put any content here, including forms, images, or other
          components.
        </p>
      </div>
    ),
    openButton: <Button>Open Modal</Button>,
  },
};

export const Small: Story = {
  args: {
    id: "small-modal",
    title: "Small Modal",
    size: "sm",
    children: (
      <div>
        <p>This is a small modal with limited content space.</p>
      </div>
    ),
    openButton: <Button>Open Small Modal</Button>,
  },
};

export const Large: Story = {
  args: {
    id: "large-modal",
    title: "Large Modal",
    size: "lg",
    children: (
      <div className="space-y-4">
        <p>This is a large modal that can accommodate more content.</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded bg-gray-100 p-4">
            <h4 className="font-semibold">Section 1</h4>
            <p>Content for the first section.</p>
          </div>
          <div className="rounded bg-gray-100 p-4">
            <h4 className="font-semibold">Section 2</h4>
            <p>Content for the second section.</p>
          </div>
        </div>
        <p>
          Large modals are perfect for complex forms or detailed information
          displays.
        </p>
      </div>
    ),
    openButton: <Button>Open Large Modal</Button>,
  },
};

export const ExtraLarge: Story = {
  args: {
    id: "xl-modal",
    title: "Extra Large Modal",
    size: "xl",
    children: (
      <div className="space-y-6">
        <p>This is an extra large modal for maximum content space.</p>
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded bg-gray-100 p-4">
              <h4 className="font-semibold">Section {i}</h4>
              <p>Content for section {i}.</p>
            </div>
          ))}
        </div>
        <div className="rounded bg-blue-50 p-4">
          <h4 className="font-semibold text-blue-800">Important Information</h4>
          <p className="text-blue-700">
            Extra large modals are ideal for dashboards, detailed forms, or
            comprehensive data displays.
          </p>
        </div>
      </div>
    ),
    openButton: <Button>Open XL Modal</Button>,
  },
};

export const WithCustomCloseButton: Story = {
  args: {
    id: "custom-close-modal",
    title: "Custom Close Button",
    closeButtonText: "Got it!",
    children: (
      <div>
        <p>This modal has a custom close button text.</p>
        <p className="mt-4">
          You can customize the close button text to match your use case.
        </p>
      </div>
    ),
    openButton: <Button>Open Modal</Button>,
  },
};

export const NoTitle: Story = {
  args: {
    id: "no-title-modal",
    children: (
      <div>
        <h3 className="mb-4 text-lg font-semibold">
          Custom Title Inside Content
        </h3>
        <p>
          This modal doesn't use the title prop, instead the title is part of
          the content.
        </p>
        <p className="mt-4">
          This gives you more control over the title styling and layout.
        </p>
      </div>
    ),
    openButton: <Button>Open Modal Without Title</Button>,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Modal
        id="demo-sm"
        title="Small"
        size="sm"
        openButton={<Button size="sm">Small</Button>}
      >
        <p>Small modal content</p>
      </Modal>
      <Modal
        id="demo-md"
        title="Medium"
        size="md"
        openButton={<Button>Medium</Button>}
      >
        <p>Medium modal content with more space for information.</p>
      </Modal>
      <Modal
        id="demo-lg"
        title="Large"
        size="lg"
        openButton={<Button>Large</Button>}
      >
        <div className="space-y-4">
          <p>Large modal with plenty of space.</p>
          <div className="rounded bg-gray-100 p-4">
            <p>Additional content section.</p>
          </div>
        </div>
      </Modal>
      <Modal
        id="demo-xl"
        title="Extra Large"
        size="xl"
        openButton={<Button>Extra Large</Button>}
      >
        <div className="space-y-4">
          <p>Extra large modal for maximum content.</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded bg-gray-100 p-4">Section 1</div>
            <div className="rounded bg-gray-100 p-4">Section 2</div>
          </div>
        </div>
      </Modal>
    </div>
  ),
};
