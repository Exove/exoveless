"use client";

import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { DotButton, useDotButton } from "./carousel-dot-button";
import { NavigationButton } from "./carousel-navigation-button";
import { useCallback } from "react";
import clsx from "clsx";

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
  hideNavigationButtons?: boolean;
  hideDotButtons?: boolean;
}

export function Carousel({
  children,
  className,
  hideNavigationButtons = false,
  hideDotButtons = false,
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      duration: 20,
    },
    [WheelGesturesPlugin()],
  );

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className={className}>
      {!hideNavigationButtons && (
        <div className="mb-2 flex justify-end">
          <div className="flex gap-4">
            <NavigationButton direction="prev" onClick={scrollPrev} />
            <NavigationButton direction="next" onClick={scrollNext} />
          </div>
        </div>
      )}

      <div className="overflow-x-hidden" ref={emblaRef}>
        <div className="flex">{children}</div>
      </div>

      {!hideDotButtons && (
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
      )}
    </div>
  );
}

export function CarouselSlide({ children, className }: CarouselProps) {
  return (
    <div className={clsx("min-w-0", className)} style={{ flex: "0 0 80%" }}>
      {children}
    </div>
  );
}
