import {
  Accordion,
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
        <Heading level="h2" size="large" zeroMargin>
          Accordion
        </Heading>
      </div>
      <div className="gap-5 lg:flex">
        <div className="lg:w-72"></div>

        <div className="flex-1">
          <Accordion type="multiple">
            {accordionItems.map((item, index) => (
              <AccordionItem
                value={index + item.title}
                key={index + item.title}
              >
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>{item.body}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <CodeBlock>
        <CodeHighlight title="accordion-example.tsx">
          {`
<Accordion type="multiple">
  <AccordionItem value="item-1">
    <AccordionTrigger>Title content</AccordionTrigger>
    <AccordionContent>Body content</AccordionContent>
  </AccordionItem>
</Accordion>
              `}
        </CodeHighlight>
      </CodeBlock>
    </ContentSection>
  );
}
