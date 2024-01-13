interface ParagraphProps {
  fields: any;
}

export default function Paragraph({ fields }: ParagraphProps) {
  return (
    <>
      {fields.type === "paragraph--infobox" && (
        // Use real components here instead of divs.
        <div>
          <div>{fields.field_title}</div>
          <div>{fields.field_body}</div>
        </div>
      )}
      {fields.type === "paragraph--liftup" && (
        <div>
          <div>{fields.field_title}</div>
          <div>{fields.field_body}</div>
        </div>
      )}
    </>
  );
}
