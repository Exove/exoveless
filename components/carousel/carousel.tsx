"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { useCallback, useRef } from "react";

interface CarouselProps {
  propertyName?: string;
}

export default function Carousel({}: CarouselProps) {
  const ref = useRef<HTMLInputElement>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, duration: 20 }, [
    WheelGesturesPlugin(),
  ]);

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
        <div className="flex">
          <div
            className="min-w-0 bg-orange-300 px-10 py-32"
            style={{ flex: "0 0 80%" }}
          >
            <a href="https://www.google.com">Slide 1</a>
          </div>
          <div
            className="min-w-0 bg-blue-300 px-10 py-32"
            style={{ flex: "0 0 80%" }}
          >
            <a href="https://www.google.com">Slide 1</a>
          </div>
          <div
            className="min-w-0 bg-yellow-300 px-10 py-32"
            style={{ flex: "0 0 80%" }}
          >
            <a href="https://www.google.com">Slide 1</a>
          </div>
          <div
            className="min-w-0 bg-red-300 px-10 py-32"
            style={{ flex: "0 0 80%" }}
          >
            <a href="https://www.google.com">Slide 1</a>
          </div>
        </div>
      </div>
    </div>
  );
}
