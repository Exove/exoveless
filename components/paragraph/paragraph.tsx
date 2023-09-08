import ComponentExampleFirst from "components/component-example-first/component-example-first";
import ComponentExampleSecond from "components/component-example-second/component-example-second";

interface ParagraphProps {
  fields: any;
}

export default function Paragraph({ fields }: ParagraphProps) {
  return (
    <>
      {fields.type === "paragraph--infobox" && (
        <ComponentExampleFirst
          title={fields.field_title}
          body={fields.field_body}
        />
      )}
      {fields.type === "paragraph--liftup" && (
        <ComponentExampleSecond content={fields.field_content} />
      )}
    </>
  );
}
