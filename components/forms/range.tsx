import { useId } from "react";
import Label from "./label";

interface RangeProps {
  label: string;
  min?: number;
  max?: number;
  value: any;
  onChange: any;
  props?: any;
}

export default function Range({
  label,
  value,
  min = 0,
  max = 100,
  onChange,
  props,
}: RangeProps) {
  const id = useId();

  return (
    <div>
      <Label id={id}>{label}</Label>
      <input
        id={id}
        type="range"
        value={value}
        min={min}
        max={max}
        onChange={onChange}
        className="w-full"
        {...props}
      />
    </div>
  );
}
