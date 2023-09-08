import { useId } from "react";

interface RadioProps {
  label: string;
  name: string;
  value: string;
  onChange: any;
  activeValue: any;
  props?: any;
}

export default function Radio({
  label,
  name,
  value,
  onChange,
  activeValue,
  props,
}: RadioProps) {
  const id = useId();

  return (
    <div className="flex items-center gap-2 mb-4">
      <input
        id={id}
        onChange={onChange}
        name={name}
        value={value}
        checked={value === activeValue}
        type="radio"
        {...props}
      />
      <label htmlFor={id} className="font-medium">
        {label}
      </label>
    </div>
  );
}
