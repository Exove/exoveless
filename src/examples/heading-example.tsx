import ContentSection from "../components/containers/content-section";
import Heading from "../components/heading/heading";
import CodeBlock from "./code-block";

export default function HeadingExample() {
  return (
    <ContentSection>
      <div className="mb-20 border-b pb-4">
        <Heading level="h2" size="large" zeroMargin>
          Heading
        </Heading>
      </div>
      <div className="gap-5 lg:flex">
        <div className="lg:w-72"></div>
        <div className="flex-1">
          <Heading level="h1" size="xl">
            Heading XL
          </Heading>
          <Heading level="h2" size="large">
            Heading Large
          </Heading>
          <Heading level="h3" size="medium">
            Heading Medium
          </Heading>
          <Heading level="h4" size="small">
            Heading Small
          </Heading>
        </div>
      </div>
      <CodeBlock>
        {`
<Heading level="h1" size="xl">
  Heading XL
</Heading>
<Heading level="h2" size="large">
  Heading Large
</Heading>
<Heading level="h3" size="medium">
  Heading Medium
</Heading>
<Heading level="h4" size="small">
  Heading Small
</Heading>
          `}
      </CodeBlock>
    </ContentSection>
  );
}
