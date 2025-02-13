import { Carousel } from "../components/carousel/carousel";
import ContentSection from "../components/containers/content-section";
import Heading from "../components/heading/heading";
import { Scroller, ScrollerSlide } from "../components/scroller/scroller";
import CodeBlock from "./code-block/code-block";
import CodeHighlight from "./code-block/code-highlight";

const slides = [
  { color: "bg-orange-300", text: "Slide 1" },
  { color: "bg-blue-300", text: "Slide 2" },
  { color: "bg-yellow-300", text: "Slide 3" },
  { color: "bg-green-300", text: "Slide 4" },
  { color: "bg-pink-300", text: "Slide 5" },
  { color: "bg-purple-300", text: "Slide 6" },
  { color: "bg-orange-300", text: "Slide 7" },
  { color: "bg-blue-300", text: "Slide 8" },
  { color: "bg-yellow-300", text: "Slide 9" },
  { color: "bg-green-300", text: "Slide 10" },
  { color: "bg-pink-300", text: "Slide 11" },
  { color: "bg-purple-300", text: "Slide 12" },
];

export default function ScrollerExample() {
  return (
    <ContentSection>
      <div className="mb-20 border-b pb-4">
        <Heading level="h2" size="lg" className="mb-0">
          Scroller
        </Heading>
      </div>

      <div className="flex gap-5">
        <div className="min-w-0 flex-1">
          <Scroller>
            {slides.map((slide, index) => (
              <ScrollerSlide key={index}>
                <div className={`${slide.color} px-10 py-32`}>
                  <a href="https://www.google.com">{slide.text}</a>
                </div>
              </ScrollerSlide>
            ))}
          </Scroller>
        </div>
      </div>

      <CodeBlock>
        <CodeHighlight title="scroller-example.tsx">
          {`
<Scroller>
  <ScrollerSlide>
    <a href="#">Title</a>
    // ...
  </ScrollerSlide>
</Scroller>
          `}
        </CodeHighlight>
      </CodeBlock>
    </ContentSection>
  );
}
