import { Code } from "bright";

interface CodeHighlightProps {
  children?: React.ReactNode;
  title?: string;
}

export default function CodeHighlight({ children, title }: CodeHighlightProps) {
  return (
    <Code lang="js" title={title}>
      {children}
    </Code>
  );
}
