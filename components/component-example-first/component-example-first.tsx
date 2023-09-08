import Heading from "components/heading/heading";

interface ComponentExampleFirstProps {
  title: string;
  body: string;
}

export default function ComponentExampleFirst({
  title,
  body,
}: ComponentExampleFirstProps) {
  return (
    <div className="p-5 m-3 bg-orange-200">
      <Heading level="h3" size="medium">
        Paragraph component one
      </Heading>
      <div className="font-bold ">{title}</div>
      <div>{body}</div>
    </div>
  );
}
