interface ContentSectionProps {
  children: any;
}

export default function ContentSection({ children }: ContentSectionProps) {
  return <div className="my-16 ">{children}</div>;
}
