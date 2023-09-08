import Heading from "components/heading/heading";

interface ComponentExampleSecondProps {
  content: string;
}

export default function ComponentExampleSecond({
  content,
}: ComponentExampleSecondProps) {
  return (
    <div className="p-5 m-3 bg-violet-200">
      <Heading level="h3" size="medium">
        Paragraph component two
      </Heading>
      <div>{content}</div>
    </div>
  );
}
