import ContentSection from "../components/containers/content-section";
import Heading from "../components/heading/heading";
import SidePanelMenu from "@/components/side-panel-menu/side-panel-menu";
import CodeHighlight from "./code-block/code-highlight";
import CodeBlock from "./code-block/code-block";

export default function SidePanelMenuExample() {
  return (
    <ContentSection>
      <div className="mb-20 border-b pb-4">
        <Heading level="h2" size="large" zeroMargin>
          Side Panel Menu / Mobile Menu
        </Heading>
      </div>
      <div className="gap-5 lg:flex">
        <div className="lg:w-72"></div>
        <SidePanelMenu
          items={[
            {
              title: "Products",
              url: "#",
              sublinks: [
                { title: "Link one", url: "#" },
                { title: "Link two", url: "#" },
                { title: "Link three", url: "#" },
              ],
            },
            {
              title: "Company",
              url: "#",
              sublinks: [
                { title: "Link one", url: "#" },
                { title: "Link two", url: "#" },
                { title: "Link three", url: "#" },
              ],
            },
            {
              title: "Contact",
              url: "#",
              sublinks: [
                { title: "Link one", url: "#" },
                { title: "Link two", url: "#" },
                { title: "Link three", url: "#" },
              ],
            },
            { title: "Blog", url: "/templates" },
            { title: "Login", url: "#" },
          ]}
        />
      </div>
      <CodeBlock>
        <CodeHighlight title="side-panel-menu-example.tsx">
          {`
<SidePanelMenu
  items={[
    {
      title: "Products",
      url: "#",
      sublinks: [
        { title: "Link one", url: "#" },
        { title: "Link two", url: "#" },
        { title: "Link three", url: "#" },
      ],
    },
    {
      title: "Company",
      url: "#",
      sublinks: [
        { title: "Link one", url: "#" },
        { title: "Link two", url: "#" },
        { title: "Link three", url: "#" },
      ],
    },
    {
      title: "Contact",
      url: "#",
      sublinks: [
        { title: "Link one", url: "#" },
        { title: "Link two", url: "#" },
        { title: "Link three", url: "#" },
      ],
    },
    { title: "Blog", url: "/templates" },
    { title: "Login", url: "#" },
  ]}
/>
          `}
        </CodeHighlight>
      </CodeBlock>
    </ContentSection>
  );
}
