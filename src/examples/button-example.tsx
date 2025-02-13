import { BellAlertIcon } from "@heroicons/react/24/outline";
import Button from "../components/button/button";
import ButtonContainer from "../components/containers/button-container";
import ContentSection from "../components/containers/content-section";
import Heading from "../components/heading/heading";
import CodeBlock from "./code-block/code-block";
import CodeHighlight from "./code-block/code-highlight";

export default function ButtonExample() {
  return (
    <ContentSection>
      <div className="mb-20 border-b pb-4">
        <Heading level="h2" size="lg" className="mb-0">
          Button
        </Heading>
      </div>
      <div className="mb-24 gap-5 lg:flex">
        <div className="lg:w-72">Medium</div>
        <div className="flex-1">
          <div className="mb-10">
            <ButtonContainer>
              <Button style="primary">Primary Button</Button>
            </ButtonContainer>
          </div>
          <ButtonContainer>
            <Button style="secondary">Secondary Button</Button>
          </ButtonContainer>
        </div>
      </div>
      <div className="gap-5 lg:flex">
        <div className="lg:w-72">Small</div>
        <div className="flex-1">
          <div className="mb-10">
            <ButtonContainer>
              <Button style="primary" size="sm">
                Primary Button
              </Button>
            </ButtonContainer>
          </div>
          <ButtonContainer>
            <Button style="secondary" size="sm">
              Secondary Button
            </Button>
          </ButtonContainer>
        </div>
      </div>
      <CodeBlock>
        <CodeHighlight title="button-example.tsx">
          {`
<Button style="primary">Primary</Button>
<Button style="secondary" size="sm">Small button</Button>
<Button style="secondary-outlined" url="#">Button as link</Button>
          `}
        </CodeHighlight>
      </CodeBlock>
    </ContentSection>
  );
}
