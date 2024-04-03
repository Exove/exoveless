import { BellAlertIcon } from "@heroicons/react/24/outline";
import Button from "components/button/button";
import ButtonContainer from "components/containers/button-container";
import ContentSection from "components/containers/content-section";
import Heading from "components/heading/heading";
import CodeBlock from "pages/components/code-block";

export default function ButtonExample() {
  return (
    <ContentSection>
      <div className="mb-20 border-b pb-4">
        <Heading level="h2" size="large" zeroMargin>
          Button
        </Heading>
      </div>
      <div className="mb-24 gap-5 lg:flex">
        <div className="lg:w-72">Medium</div>
        <div className="flex-1">
          <div className="mb-10">
            <ButtonContainer>
              <Button style="primary">Primary Button</Button>
              <Button style="primary-outlined">Outlined Button</Button>
            </ButtonContainer>
          </div>
          <ButtonContainer>
            <Button style="secondary">Secondary Button</Button>
            <Button style="secondary-outlined">
              <div className="flex items-center gap-3">
                <BellAlertIcon className="h-5 w-5 stroke-2" />
                Outlined with Icon
              </div>
            </Button>
          </ButtonContainer>
        </div>
      </div>
      <div className="gap-5 lg:flex">
        <div className="lg:w-72">Small</div>
        <div className="flex-1">
          <div className="mb-10">
            <ButtonContainer>
              <Button style="primary" size="small">
                Primary Button
              </Button>
              <Button style="primary-outlined" size="small">
                Outlined Button
              </Button>
            </ButtonContainer>
          </div>
          <ButtonContainer>
            <Button style="secondary" size="small">
              Secondary Button
            </Button>
            <Button style="secondary-outlined" size="small">
              Outlined Button
            </Button>
          </ButtonContainer>
        </div>
      </div>
      <CodeBlock>
        {`
<Button style="primary">Primary</Button>
<Button style="secondary" size="small">Small button</Button>
<Button style="secondary-outlined" url="#">Button as link</Button>
          `}
      </CodeBlock>
    </ContentSection>
  );
}
