import ContentSection from "components/containers/content-section";
import Dropdown from "components/dropdown/dropdown";
import Heading from "components/heading/heading";
import CodeBlock from "pages/components/code-block";

export default function DropdownExample() {
  return (
    <ContentSection>
      <div className="mb-20 border-b pb-4">
        <Heading level="h2" size="large" zeroMargin>
          Dropdown Menu
        </Heading>
      </div>
      <div className="gap-5 lg:flex">
        <div className="lg:w-72"></div>
        <div>
          <Dropdown
            label="Dropdown menu"
            items={[
              { title: "Finnish", url: "#" },
              { title: "English", url: "#" },
              { title: "Swedish", url: "#" },
            ]}
          />
        </div>
      </div>
      <CodeBlock>
        {`
<Dropdown
  label="Language"
  items={[
    { title: "Finnish", url: "/" },
    { title: "English", url: "/en" },
    { title: "Swedish", url: "/sv" },
  ]}
/>
          `}
      </CodeBlock>
    </ContentSection>
  );
}
