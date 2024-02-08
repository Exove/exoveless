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
      container.scrollLeft = container.scrollWidth;
    }
  }, []);

  return (
    <nav aria-label="breadcrumbs">
      <ol id="breadcrumbsContainer" className="flex gap-2 text-vdGrey-700">
        <li>
          <Link href={"/"}>Home</Link>
        </li>

        {path.map((pathItem, index) => {
          return (
            <li key={index + pathItem.title} className="flex gap-2">
              <span aria-hidden="true">/</span>
              <Link href={pathItem.url}>{pathItem.title}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
