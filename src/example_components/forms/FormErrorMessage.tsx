import { cn } from "@/lib/utils";

type FormErrorMessageProps = {
  id: string;
  message?: string;
  className?: string;
  ariaLive?: "polite" | "assertive" | "off";
};

export default function FormErrorMessage({
  id,
  message,
  className,
  ariaLive = "polite",
}: FormErrorMessageProps) {
  if (!message) return null;

  return (
    <p
      id={id}
      role="alert"
      aria-live={ariaLive}
      className={cn("mt-1 text-sm text-red-600", className)}
    >
      {message}
    </p>
  );
}

export { FormErrorMessage };
