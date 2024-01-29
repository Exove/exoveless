import ContentSection from "components/containers/content-section";
import Heading from "components/heading/heading";
import MobileMenu from "components/mobile-menu/mobile-menu";
import CodeBlock from "pages/components/code-block";

export default function MobileMenuExample() {
  return (
    <ContentSection>
      <div className="mb-20 border-b pb-4">
        <Heading level="h2" size="large" zeroMargin>
          Mobile Menu
        </Heading>
      </div>
      <div className="gap-5 lg:flex">
        <div className="lg:w-72"></div>
        <div>
          <MobileMenu
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
              { title: "Blog", url: "#" },
              { title: "Login", url: "#" },
            ]}
          />
        </div>
      </div>
      <CodeBlock>
        {`
<MobileMenu
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
    { title: "Blog", url: "#" },
    { title: "Login", url: "#" },
  ]}
/>
          `}
      </CodeBlock>
    </ContentSection>
  );
}
