import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string): string {
  const date = new Date(input);
  return date.toLocaleDateString("fi-FI", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function absoluteUrl(input: string) {
  return `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${input}`;
}
