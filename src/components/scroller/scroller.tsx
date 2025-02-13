"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useRef, useState } from "react";

const SLIDE_WIDTH = 300; // Pixels

interface ScrollerProps {
  children: React.ReactNode;
  slideWidth?: number;
}

export function Scroller({
  children,
  slideWidth = SLIDE_WIDTH,
}: ScrollerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSmooth, setIsSmooth] = useState(false);

  const getVisibleSlidesWidth = () => {
    if (!containerRef.current) return slideWidth;
    const containerWidth = containerRef.current.clientWidth;
    const visibleSlides = Math.floor(containerWidth / slideWidth);
    return visibleSlides * slideWidth;
  };

  function scroll(scrollOffset: number) {
    if (!containerRef.current) return;
    setIsSmooth(true);
    containerRef.current.scrollLeft += scrollOffset;
    setTimeout(() => setIsSmooth(false), 500);
  }

  return (
    <div>
      <div className="mb-2 flex justify-end">
        <div className="flex gap-4">
          <button
            onClick={() => {
              scroll(-getVisibleSlidesWidth());
            }}
          >
            <ChevronLeftIcon className="h-6 w-6 stroke-2" />
            <span className="sr-only">Scroll left</span>
          </button>
          <button onClick={() => scroll(getVisibleSlidesWidth())}>
            <ChevronRightIcon className="h-6 w-6 stroke-2" />
            <span className="sr-only">Scroll right</span>
          </button>
        </div>
      </div>
      <div
        className={clsx(
          "flex overflow-x-scroll [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          isSmooth && "scroll-smooth",
        )}
        style={{ scrollBehavior: "smooth" }}
        tabIndex={0}
        ref={containerRef}
      >
        {children}
      </div>
    </div>
  );
}

export function ScrollerSlide({
  children,
  slideWidth = SLIDE_WIDTH,
}: ScrollerProps) {
  return (
    <div style={{ width: `${slideWidth}px` }} className="flex-shrink-0">
      {children}
    </div>
  );
}
