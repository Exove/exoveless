import { useId } from "react";
import Label from "./label";

interface InputProps {
  label: string;
  value: string;
  onChange: Function;
  required?: boolean;
  props?: any;
}

export default function Input({
  label,
  value,
  onChange,
  required = false,
  props,
}: InputProps) {
  const id = useId();

  return (
    <div className="mb-6">
      <Label id={id}>{label}</Label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={onChange}
        className="w-full"
        aria-required={required}
        {...props}
      />
    </div>
  );
}
