import { useId } from "react";
import Label from "./label";

interface TextareaProps {
  label: string;
  value: string;
  rows?: number;
  onChange: Function;
  required?: boolean;
  props?: any;
}

export default function Textarea({
  label,
  value,
  rows = 4,
  onChange,
  required = false,
  props,
}: TextareaProps) {
  const id = useId();

  return (
    <div>
      <Label id={id}>{label}</Label>
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        rows={rows}
        className="w-full"
        placeholder="Write your thoughts here..."
        aria-required={required}
        {...props}
      ></textarea>
    </div>
  );
}
