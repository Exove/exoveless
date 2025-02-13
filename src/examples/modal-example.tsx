import Button from "../components/button/button";
import ContentSection from "../components/containers/content-section";
import Heading from "../components/heading/heading";
import Modal from "../components/modal/modal";
import CodeBlock from "./code-block/code-block";
import CodeHighlight from "./code-block/code-highlight";

export default function ModalExample() {
  return (
    <ContentSection>
      <div className="mb-20 border-b pb-4">
        <Heading level="h2" size="lg">
          Modal
        </Heading>
      </div>
      <div className="gap-5 lg:flex">
        <div className="lg:w-72"></div>
        <div className="flex-1">
          <Modal
            title="Title"
            id="example"
            openButton={<Button style="primary">Open</Button>}
          >
            Your payment has been successfully submitted. We’ve sent you an
            email with all of the details of your order.
          </Modal>
        </div>
      </div>
      <CodeBlock>
        <CodeHighlight title="modal-example.tsx">
          {`
<Modal
  title="Title"
  id="example"
  openButton={
    <Button style="primary" tag="div">
      Open
    </Button>
  }
>
  Your payment has been successfully submitted. We’ve sent you an
  email with all of the details of your order.
</Modal>
          `}
        </CodeHighlight>
      </CodeBlock>
    </ContentSection>
  );
}
