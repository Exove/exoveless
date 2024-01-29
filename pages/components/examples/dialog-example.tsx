import ContentSection from "components/containers/content-section";
import Heading from "components/heading/heading";
import Modal from "components/modal/modal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "components/ui/dialog";
import CodeBlock from "pages/components/code-block";

export default function DialogExample() {
  return (
    <ContentSection>
      <Heading level="h2" size="large">
        Dialog
      </Heading>
      <Modal title="Title" buttonText="Close">
        Your payment has been successfully submitted. We’ve sent you an email
        with all of the details of your order.
      </Modal>
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <CodeBlock>
        {`
<Modal title="Title" buttonText="Close">
  Your payment has been successfully submitted. We’ve sent you an email
  with all of the details of your order.
</Modal>
          `}
      </CodeBlock>
    </ContentSection>
  );
}
