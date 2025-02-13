import ContentSection from "../components/containers/content-section";
import Dropdown from "../components/dropdown/dropdown";
import Heading from "../components/heading/heading";
import CodeBlock from "./code-block/code-block";
import CodeHighlight from "./code-block/code-highlight";

export default function DropdownExample() {
  return (
    <ContentSection>
      <div className="mb-20 border-b pb-4">
        <Heading level="h2" size="lg" className="mb-0">
          Dropdown Menu
        </Heading>
      </div>
      <div className="gap-5 lg:flex">
        <div className="lg:w-72"></div>
        <div className="flex-1">
          <Dropdown
            label="Dropdown menu"
            items={[
              { title: "Link one", url: "#" },
              { title: "Link two", url: "#" },
              { title: "Link three", url: "#" },
            ]}
          />
        </div>
      </div>
      <CodeBlock>
        <CodeHighlight title="dropdown-example.tsx">
          {`
<Dropdown
  label="Dropdown menu"
  items={[
    { title: "Link one", url: "#" },
    { title: "Link two", url: "#" },
    { title: "Link three", url: "#" },
  ]}
/>
          `}
        </CodeHighlight>
      </CodeBlock>
    </ContentSection>
  );
}
