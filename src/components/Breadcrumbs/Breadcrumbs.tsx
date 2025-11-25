"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

type BreadcrumbItem = { label: string; href: string };

type BreadcrumbsProps = {
  items?: BreadcrumbItem[];
  homeLabel?: string;
};

export default function Breadcrumbs({ items = [], homeLabel = "Home" }: BreadcrumbsProps) {
  const containerRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.scrollTo({ left: containerRef.current.scrollWidth, behavior: "smooth" });
  }, [items]);

  const crumbs = [{ label: homeLabel, href: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="w-full">
      <ol
        ref={containerRef}
        className="flex items-center gap-2 overflow-x-auto text-sm text-gray-600 scrollbar-none"
      >
        {crumbs.map((item, index) => {
          const isLast = index === crumbs.length - 1;
          return (
            <li key={`${item.href}-${item.label}`} className="flex items-center gap-2 whitespace-nowrap">
              {index !== 0 && <span aria-hidden="true" className="text-gray-400">/</span>}
              <Link
                href={item.href}
                className={cn(
                  "transition-colors hover:text-black",
                  isLast ? "font-medium text-black" : "text-gray-600",
                )}
                aria-current={isLast ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
