import SidePanel from "@/components/side-panel/side-panel";
import ContentSection from "../components/containers/content-section";
import Heading from "../components/heading/heading";
import CodeBlock from "./code-block/code-block";
import CodeHighlight from "./code-block/code-highlight";
import Button from "@/components/button/button";

export default function SidePanelExample() {
  return (
    <ContentSection>
      <div className="mb-20 border-b pb-4">
        <Heading level="h2" size="lg" className="mb-0">
          Side Panel
        </Heading>
      </div>
      <div className="gap-5 lg:flex">
        <div className="lg:w-72"></div>
        <SidePanel
          openLabel="Open side panel left"
          position="left"
          title="Header title"
          footer={<Button fullWidth>Footer button</Button>}
        >
          <div className="px-7">
            <p className="mt-20 text-center">Your cart is empty</p>
          </div>
        </SidePanel>
        <SidePanel
          openLabel="Open side panel right"
          position="right"
          title="Header title"
          footer={<Button fullWidth>Footer button</Button>}
        >
          <div className="px-7">
            <p className="mt-20 text-center">Your cart is empty</p>
          </div>
        </SidePanel>
      </div>
      <CodeBlock>
        <CodeHighlight title="side-panel-example.tsx">
          {`
<SidePanel
  openLabel="Open side panel right"
  position="right"
  title="Shopping Cart"
  footer={<Button fullWidth>Footer button</Button>}
>
  <div className="px-7">
    <p className="mt-20 text-center">Your cart is empty</p>
  </div>
</SidePanel>
          `}
        </CodeHighlight>
      </CodeBlock>
    </ContentSection>
  );
}
