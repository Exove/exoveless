import cx from "classix";
interface FieldsetProps {
  children: any;
  legend?: string;
  screenReadersOnly?: boolean;
}

export default function Fieldset({
  legend,
  children,
  screenReadersOnly,
}: FieldsetProps) {
  return (
    <fieldset>
      <legend className={cx("mb-5 font-bold", screenReadersOnly && "sr-only")}>
        {legend}
      </legend>
      <div>{children}</div>
    </fieldset>
  );
}
