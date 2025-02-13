import SidePanel from "@/components/side-panel/side-panel";
import ContentSection from "../components/containers/content-section";
import Heading from "../components/heading/heading";
import CodeBlock from "./code-block/code-block";
import CodeHighlight from "./code-block/code-highlight";

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
        <SidePanel openLabel="Open side panel left" position="left">
          <div className="px-7">
            <Heading size="lg" level="h2">
              Shopping Cart
            </Heading>
            <p>Your cart is empty</p>
          </div>
        </SidePanel>
        <SidePanel openLabel="Open side panel right">
          <div className="px-7">
            <Heading size="lg" level="h2">
              Shopping Cart
            </Heading>
            <p>Your cart is empty</p>
          </div>
        </SidePanel>
      </div>
      <CodeBlock>
        <CodeHighlight title="side-panel-example.tsx">
          {`
<SidePanel openLabel="Open side panel">
  <div className="px-7">
    <Heading size="lg" level="h2">
      Shopping Cart
    </Heading>
    <p>Your cart is empty</p>
  </div>
</SidePanel>
          `}
        </CodeHighlight>
      </CodeBlock>
    </ContentSection>
  );
}
