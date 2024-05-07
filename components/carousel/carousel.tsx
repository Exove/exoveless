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
  const ref2 = useRef<HTMLInputElement>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, duration: 20 }, [
    WheelGesturesPlugin(),
  ]);

  const [emblaRef2, emblaApi2] = useEmblaCarousel(
    { loop: false, duration: 20, skipSnaps: true, slidesToScroll: 3 },
    [WheelGesturesPlugin()],
  );

  const scroll = (scrollOffset, ref) => {
    if (!ref.current) return;
    ref.current.scrollLeft += scrollOffset;
  };

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollPrev2 = useCallback(() => {
    if (emblaApi2) emblaApi2.scrollPrev();
  }, [emblaApi2]);

  const scrollNext2 = useCallback(() => {
    if (emblaApi2) emblaApi2.scrollNext();
  }, [emblaApi2]);

  return (
    <div className="flex flex-col gap-8">
      <div>
        Embla Carousel
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
          <div className="flex touch-pan-y touch-pinch-zoom">
            <div
              className="min-w-0 bg-orange-300 px-10 py-32"
              style={{ flex: "0 0 80%" }}
            >
              Slide 1
            </div>
            <div
              className="min-w-0 bg-blue-300 px-10 py-32"
              style={{ flex: "0 0 80%" }}
            >
              Slide 2
            </div>
            <div
              className="min-w-0 bg-yellow-300 px-10 py-32"
              style={{ flex: "0 0 80%" }}
            >
              Slide 3
            </div>
            <div
              className="min-w-0 bg-red-300 px-10 py-32"
              style={{ flex: "0 0 80%" }}
            >
              Slide 4
            </div>
          </div>
        </div>
      </div>
      <div>
        1. Slider done with Embla carousel
        <div className="mb-2 flex justify-end">
          <div className="flex gap-4">
            <button onClick={scrollPrev2}>
              <ChevronLeftIcon className="h-6 w-6 stroke-2" />
              <span className="sr-only">Scroll left</span>
            </button>
            <button onClick={scrollNext2}>
              <ChevronRightIcon className="h-6 w-6 stroke-2" />
              <span className="sr-only">Scroll right</span>
            </button>
          </div>
        </div>
        <div className="overflow-x-hidden" ref={emblaRef2}>
          <div className="flex touch-pan-y touch-pinch-zoom">
            <div
              className="min-w-0 bg-orange-300 px-10 py-32"
              style={{ flex: "0 0 30%" }}
            >
              Slide 1
            </div>
            <div
              className="min-w-0 bg-blue-300 px-10 py-32"
              style={{ flex: "0 0 30%" }}
            >
              Slide 2
            </div>
            <div
              className="min-w-0 bg-yellow-300 px-10 py-32"
              style={{ flex: "0 0 30%" }}
            >
              Slide 3
            </div>
            <div
              className="min-w-0 bg-red-300 px-10 py-32"
              style={{ flex: "0 0 30%" }}
            >
              Slide 4
            </div>
            <div
              className="min-w-0 bg-orange-300 px-10 py-32"
              style={{ flex: "0 0 30%" }}
            >
              Slide 5
            </div>
            <div
              className="min-w-0 bg-blue-300 px-10 py-32"
              style={{ flex: "0 0 30%" }}
            >
              Slide 6
            </div>
            <div
              className="min-w-0 bg-yellow-300 px-10 py-32"
              style={{ flex: "0 0 30%" }}
            >
              Slide 7
            </div>
            <div
              className="min-w-0 bg-red-300 px-10 py-32"
              style={{ flex: "0 0 30%" }}
            >
              Slide 8
            </div>
          </div>
        </div>
      </div>
      <div>
        2. Slider with native scroll
        <div className="mb-2 flex justify-end">
          <div className="flex gap-4">
            <button onClick={() => scroll(-921, ref)}>
              <ChevronLeftIcon className="h-6 w-6 stroke-2" />
              <span className="sr-only">Scroll left</span>
            </button>
            <button onClick={() => scroll(921, ref)}>
              <ChevronRightIcon className="h-6 w-6 stroke-2" />
              <span className="sr-only">Scroll right</span>
            </button>
          </div>
        </div>
        <div
          className="flex touch-pan-y overflow-x-scroll scroll-smooth"
          ref={ref}
        >
          <div
            className="min-w-0 snap-center bg-orange-300 px-10 py-32"
            style={{ flex: "0 0 30%" }}
          >
            Slide 1
          </div>
          <div
            className="min-w-0 snap-center bg-blue-300 px-10 py-32"
            style={{ flex: "0 0 30%" }}
          >
            Slide 2
          </div>
          <div
            className="min-w-0 snap-center bg-yellow-300 px-10 py-32"
            style={{ flex: "0 0 30%" }}
          >
            Slide 3
          </div>
          <div
            className="min-w-0 snap-center bg-red-300 px-10 py-32"
            style={{ flex: "0 0 30%" }}
          >
            Slide 4
          </div>
          <div
            className="min-w-0 snap-center bg-orange-300 px-10 py-32"
            style={{ flex: "0 0 30%" }}
          >
            Slide 5
          </div>
          <div
            className="min-w-0 snap-center bg-blue-300 px-10 py-32"
            style={{ flex: "0 0 30%" }}
          >
            Slide 6
          </div>
          <div
            className="min-w-0 snap-center bg-yellow-300 px-10 py-32"
            style={{ flex: "0 0 30%" }}
          >
            Slide 7
          </div>
          <div
            className="min-w-0 snap-center bg-red-300 px-10 py-32"
            style={{ flex: "0 0 30%" }}
          >
            Slide 8
          </div>
        </div>
      </div>
      <div>
        3. Slider with native scroll and css scroll snap
        <div className="mb-2 flex justify-end">
          <div className="flex gap-4">
            <button onClick={() => scroll(-921, ref2)}>
              <ChevronLeftIcon className="h-6 w-6 stroke-2" />
              <span className="sr-only">Scroll left</span>
            </button>
            <button onClick={() => scroll(921, ref2)}>
              <ChevronRightIcon className="h-6 w-6 stroke-2" />
              <span className="sr-only">Scroll right</span>
            </button>
          </div>
        </div>
        <div
          className="flex touch-pan-y snap-x overflow-x-scroll scroll-smooth"
          ref={ref2}
        >
          <div
            className="min-w-0 snap-center bg-orange-300 px-10 py-32"
            style={{ flex: "0 0 30%" }}
          >
            Slide 1
          </div>
          <div
            className="min-w-0 snap-center bg-blue-300 px-10 py-32"
            style={{ flex: "0 0 30%" }}
          >
            Slide 2
          </div>
          <div
            className="min-w-0 snap-center bg-yellow-300 px-10 py-32"
            style={{ flex: "0 0 30%" }}
          >
            Slide 3
          </div>
          <div
            className="min-w-0 snap-center bg-red-300 px-10 py-32"
            style={{ flex: "0 0 30%" }}
          >
            Slide 4
          </div>
          <div
            className="min-w-0 snap-center bg-orange-300 px-10 py-32"
            style={{ flex: "0 0 30%" }}
          >
            Slide 5
          </div>
          <div
            className="min-w-0 snap-center bg-blue-300 px-10 py-32"
            style={{ flex: "0 0 30%" }}
          >
            Slide 6
          </div>
          <div
            className="min-w-0 snap-center bg-yellow-300 px-10 py-32"
            style={{ flex: "0 0 30%" }}
          >
            Slide 7
          </div>
          <div
            className="min-w-0 snap-center bg-red-300 px-10 py-32"
            style={{ flex: "0 0 30%" }}
          >
            Slide 8
          </div>
        </div>
      </div>
    </div>
  );
}
