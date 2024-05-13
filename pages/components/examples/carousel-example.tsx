import { Carousel, CarouselSlide } from "components/carousel/carousel";
import ContentSection from "components/containers/content-section";
import Heading from "components/heading/heading";
import CodeBlock from "pages/components/code-block";

const slides = [
  { color: "bg-orange-300", text: "Slide 1" },
  { color: "bg-blue-300", text: "Slide 2" },
  { color: "bg-yellow-300", text: "Slide 3" },
  { color: "bg-green-300", text: "Slide 4" },
  { color: "bg-pink-300", text: "Slide 5" },
  { color: "bg-purple-300", text: "Slide 6" },
];

export default function CarouselExample() {
  return (
    <ContentSection>
      <div className="mb-20 border-b pb-4">
        <Heading level="h2" size="large" zeroMargin>
          Carousel
        </Heading>
      </div>
      <div className="gap-5 lg:flex">
        <div className="lg:w-72"></div>
        <div className="flex-1">
          <Carousel>
            {slides.map((slide, index) => (
              <CarouselSlide key={index}>
                <div className={`${slide.color} px-10 py-32`}>
                  <a href="https://www.google.com">{slide.text}</a>
                </div>
              </CarouselSlide>
            ))}
          </Carousel>
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