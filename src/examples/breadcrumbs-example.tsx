import Breadcrumbs from "../components/breadcrumbs/breadcrumbs";
import ContentSection from "../components/containers/content-section";
import Heading from "../components/heading/heading";
import CodeBlock from "./code-block/code-block";
import CodeHighlight from "./code-block/code-highlight";

interface BreadcrumbsExampleProps {
  propertyName?: string;
}

export default function BreadcrumbsExample({}: BreadcrumbsExampleProps) {
  return (
    <ContentSection>
      <div className="mb-20 border-b pb-4">
        <Heading level="h2" size="large" zeroMargin>
          Breadcrumbs
        </Heading>
      </div>
      <div className="gap-5 lg:flex">
        <div className="lg:w-72"></div>
        <div className="flex-1">
          <Breadcrumbs
            path={[
              { title: "Products", url: "#" },
              { title: "Category", url: "#" },
            ]}
          />
        </div>
      </div>

      <CodeBlock>
        <CodeHighlight title="breadcrumbs-example.tsx">
          {`
<Breadcrumbs
  path={[
    { title: "Products", url: "#" },
    { title: "Category", url: "#" },
  ]}
/>
          `}
        </CodeHighlight>
      </CodeBlock>
    </ContentSection>
  );
}
