"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useRef, useState } from "react";
import { useScrollContainer } from "react-indiana-drag-scroll";

interface ScrollerProps {
  children: any;
}

export function Scroller({ children }: ScrollerProps) {
  const scrollContainer = useScrollContainer();
  const ref = useRef<HTMLInputElement>(null);
  const [scrollRef, setScrollRef] = useState(true); // Same element uses two different refs

  async function scroll(scrollOffset: number) {
    await setScrollRef(false);
    if (!ref.current) return;
    ref.current.scrollLeft += scrollOffset;
    setScrollRef(true);
  }

  return (
    <div>
      <div className="mb-2 flex justify-end">
        <div className="flex gap-4">
          <button
            onClick={() => {
              scroll(-600); // Change this if needed
            }}
          >
            <ChevronLeftIcon className="h-6 w-6 stroke-2" />
            <span className="sr-only">Scroll left</span>
          </button>
          <button onClick={() => scroll(600)}>
            <ChevronRightIcon className="h-6 w-6 stroke-2" />
            <span className="sr-only">Scroll right</span>
          </button>
        </div>
      </div>
      <div
        className={clsx(
          "flex overflow-x-scroll",
          !scrollRef && "scroll-smooth"
        )}
        tabIndex={0}
        ref={scrollRef ? scrollContainer.ref : ref}
      >
        {children}
      </div>
    </div>
  );
}

export function ScrollerSlide({ children }: any) {
  return <div className="w-[300px] flex-shrink-0">{children}</div>;
}
