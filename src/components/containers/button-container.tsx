interface ButtonContainerProps {
  children: React.ReactNode;
}

export default function ButtonContainer({ children }: ButtonContainerProps) {
  return <div className="flex flex-wrap items-center gap-8">{children}</div>;
}
