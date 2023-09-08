interface LabelProps {
  children: string;
  id: string;
}

export default function Label({ children, id }: LabelProps) {
  return (
    <label htmlFor={id} className="block mb-2 font-medium">
      {children}
    </label>
  );
}
