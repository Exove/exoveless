import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Modal from "./Modal";
import Button from "../Button/Button";

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
          This is the default modal content. It demonstrates the basic functionality of the modal component.
        </p>
        <p className="mt-4">You can put any content here, including forms, images, or other components.</p>
      </div>
    ),
    openButton: <Button>Open Modal</Button>,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Modal id="demo-sm" title="Small" size="sm" openButton={<Button>Small</Button>}>
        <p>Small modal content</p>
      </Modal>
      <Modal id="demo-md" title="Medium" size="md" openButton={<Button>Medium</Button>}>
        <p>Medium modal content with more space for information.</p>
      </Modal>
      <Modal id="demo-lg" title="Large" size="lg" openButton={<Button>Large</Button>}>
        <div className="space-y-4">
          <p>Large modal with plenty of space.</p>
          <div className="rounded bg-gray-100 p-4">
            <p>Additional content section.</p>
          </div>
        </div>
      </Modal>
      <Modal id="demo-xl" title="Extra Large" size="xl" openButton={<Button>Extra Large</Button>}>
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
