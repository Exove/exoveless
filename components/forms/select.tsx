import { useId } from "react";
import Label from "./label";

interface SelectProps {
  label?: string;
  value: string;
  onChange: any;
  options: any;
  required?: boolean;
  props?: any;
}

export default function Select({
  label,
  onChange,
  value,
  options,
  required = false,
  props,
}: SelectProps) {
  const id = useId();

  return (
    <div>
      {label && <Label id={id}>{label}</Label>}
      <select
        id={id}
        onChange={onChange}
        value={value}
        className="block w-full"
        aria-required={required}
        {...props}
      >
        {options.map((option, index) => (
          <option value={option.value} key={index}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
