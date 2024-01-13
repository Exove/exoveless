import clsx from "clsx";
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
      <legend
        className={clsx("mb-5 font-bold", screenReadersOnly && "sr-only")}
      >
        {legend}
      </legend>
      <div>{children}</div>
    </fieldset>
  );
}
