"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { DotButton, useDotButton } from "./carousel-dot-button";
import { useCallback, useRef } from "react";
import clsx from "clsx";

interface CarouselProps {
  children: React.ReactNode;
}

export function Carousel({ children }: CarouselProps) {
  const ref = useRef<HTMLInputElement>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, duration: 20 }, [
    WheelGesturesPlugin(),
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div>
      <div className="mb-2 flex justify-end">
        <div className="flex gap-4">
          <button onClick={scrollPrev}>
            <ChevronLeftIcon className="h-6 w-6 stroke-2" />
            <span className="sr-only">Scroll left</span>
          </button>
          <button onClick={scrollNext}>
            <ChevronRightIcon className="h-6 w-6 stroke-2" />
            <span className="sr-only">Scroll right</span>
          </button>
        </div>
      </div>
      <div className="overflow-x-hidden" ref={emblaRef}>
        <div className="flex">{children}</div>
      </div>
      <div className="flex justify-center gap-2 py-4">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={clsx(
              "h-3.5 w-3.5 rounded-full bg-slate-300",
              index === selectedIndex && "!bg-slate-500",
            )}
          >
            Slide {index + 1}
          </DotButton>
        ))}
      </div>
    </div>
  );
}

export function CarouselSlide({ children }: CarouselProps) {
  return (
    <div className="min-w-0" style={{ flex: "0 0 80%" }}>
      {children}
    </div>
  );
}
