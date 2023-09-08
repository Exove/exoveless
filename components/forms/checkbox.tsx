import { useId } from "react";
interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: any;
  name?: string;
  required?: boolean;
  props?: any;
}

export default function Checkbox({
  label,
  onChange,
  checked,
  name,
  required = false,
  props,
}: CheckboxProps) {
  const id = useId();

  return (
    <div className="flex items-center gap-2 mb-4">
      <input
        id={id}
        name={name}
        onChange={onChange}
        checked={checked}
        type="checkbox"
        aria-required={required}
        {...props}
      />
      <label htmlFor={id} className="font-medium">
        {label}
      </label>
    </div>
  );
}
