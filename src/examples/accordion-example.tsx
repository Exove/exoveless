import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/accordion/accordion";
import ContentSection from "../components/containers/content-section";
import Heading from "../components/heading/heading";
import CodeBlock from "./code-block/code-block";
import CodeHighlight from "./code-block/code-highlight";

const accordionItems = [
  {
    title: "Accordion title number one",
    body: "This is the accordion body with text content. Auto-height adjusted by the lenght of the text.",
  },
  {
    title: "Accordion title number two",
    body: "This is the accordion body with text content. Auto-height adjusted by the lenght of the text. This is the accordion body with text content. Auto-height adjusted by the lenght of the text",
  },
  {
    title: "Accordion title number three",
    body: "This is the accordion body with text content. Auto-height adjusted by the lenght of the text.",
  },
];

export default function AccordionExample() {
  return (
    <ContentSection>
      <div className="mb-20 border-b pb-4">
        <Heading level="h2" size="lg" className="mb-0">
          Accordion
        </Heading>
      </div>
      <div className="gap-5 lg:flex">
        <div className="lg:w-72"></div>

        <div className="flex-1">
          <AccordionItem>
            <AccordionTrigger>Title content</AccordionTrigger>
            <AccordionContent>
              <p className="mb-4">
                Body content. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionTrigger>Second title</AccordionTrigger>
            <AccordionContent>
              <p className="mb-4">
                Body content. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionTrigger>Third title</AccordionTrigger>
            <AccordionContent>
              <p className="mb-4">
                Body content. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
            </AccordionContent>
          </AccordionItem>
        </div>
      </div>
      <CodeBlock>
        <CodeHighlight title="accordion-example.tsx">
          {`
<AccordionItem>
  <AccordionTrigger>Title content</AccordionTrigger>
  <AccordionContent>Body content</AccordionContent>
</AccordionItem>
              `}
        </CodeHighlight>
      </CodeBlock>
    </ContentSection>
  );
}
