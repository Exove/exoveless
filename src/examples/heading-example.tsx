import ContentSection from "../components/containers/content-section";
import Heading from "../components/heading/heading";
import CodeBlock from "./code-block/code-block";
import CodeHighlight from "./code-block/code-highlight";

export default function HeadingExample() {
  return (
    <ContentSection>
      <div className="mb-20 border-b pb-4">
        <Heading level="h2" size="lg" className="mb-0">
          Heading
        </Heading>
      </div>
      <div className="gap-5 lg:flex">
        <div className="lg:w-72"></div>
        <div className="flex-1">
          <Heading level="h1" size="xl">
            Heading XL
          </Heading>
          <Heading level="h2" size="lg">
            Heading Large
          </Heading>
          <Heading level="h3" size="md">
            Heading Medium
          </Heading>
          <Heading level="h4" size="sm">
            Heading Small
          </Heading>
        </div>
      </div>
      <CodeBlock>
        <CodeHighlight title="heading-example.tsx">
          {`
<Heading level="h1" size="xl">
  Heading XL
</Heading>
<Heading level="h2" size="lg">
  Heading Large
</Heading>
<Heading level="h3" size="md">
  Heading Medium
</Heading>
<Heading level="h4" size="sm">
  Heading Small
</Heading>
          `}
        </CodeHighlight>
      </CodeBlock>
    </ContentSection>
  );
}
