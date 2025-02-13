"use client";

import Link from "next/link";
import { useEffect } from "react";

interface BreadcrumbsProps {
  path: Array<{ title: string; url: string }>;
}

export default function Breadcrumbs({ path = [] }: BreadcrumbsProps) {
  useEffect(() => {
    // Scroll to the end of the breadcrumb container on mobile view.
    const container = document.getElementById("breadcrumbsContainer");

    if (container) {
      container.scrollTo({
        left: container.scrollWidth,
        behavior: "smooth",
      });
    }
  }, []);

  if (!path.length) {
    return (
      <nav aria-label="breadcrumbs">
        <ol id="breadcrumbsContainer" className="text-vdGrey-700 flex gap-2">
          <li>
            <Link href="/" aria-current="page">
              Home
            </Link>
          </li>
        </ol>
      </nav>
    );
  }

  return (
    <nav aria-label="breadcrumbs">
      <ol id="breadcrumbsContainer" className="text-vdGrey-700 flex gap-2">
        <li>
          <Link href="/">Home</Link>
        </li>

        {path.map((pathItem, index) => {
          const isLast = index === path.length - 1;
          return (
            <li
              key={`${pathItem.url}-${pathItem.title}`}
              className="flex gap-2"
            >
              <span aria-hidden="true">/</span>
              <Link
                href={pathItem.url}
                {...(isLast ? { "aria-current": "page" } : {})}
              >
                {pathItem.title}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
