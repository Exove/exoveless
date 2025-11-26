"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

type BreadcrumbItem = { label: string; href: string };

type BreadcrumbsProps = {
  items?: BreadcrumbItem[];
  homeLabel?: string;
};

export default function Breadcrumbs({ items = [], homeLabel = "Home" }: BreadcrumbsProps) {
  // Ensure the home link is the first segment rendered.
  const crumbs = [{ label: homeLabel, href: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="w-full">
      <ol className="scrollbar-none flex flex-col gap-1 text-sm text-gray-600 sm:flex-row sm:items-center sm:gap-2 sm:overflow-x-auto">
        {crumbs.map((item, index) => {
          const isLast = index === crumbs.length - 1;
          const isHome = index === 0;
          return (
            <li
              key={`${item.href}-${item.label}`}
              className="flex gap-1 wrap-break-word whitespace-normal sm:items-center sm:gap-2 sm:whitespace-nowrap"
            >
              {index !== 0 && (
                <span aria-hidden="true">
                  <ChevronRightIcon className="h-4 w-4 text-gray-400" />
                </span>
              )}
              {isLast && !isHome ? (
                <span className="font-medium text-black" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className={cn("text-gray-600 transition-colors hover:text-black")}>
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
