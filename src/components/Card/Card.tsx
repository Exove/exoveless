"use client";

import Heading from "@/components/Heading/Heading";
import { cn } from "@/lib/utils";
import { PhotoIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

type CardImage = {
  src: string;
  alt: string;
  focalX?: number;
  focalY?: number;
};

export type CardProps = {
  image?: CardImage;
  title: string;
  text?: string;
  href: string;
  className?: string;
};

export default function Card({ image, title, text, href, className }: CardProps) {
  if (!href || !title) return null;

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:ring-1 hover:ring-purple-700",
        className,
      )}
    >
      <div className="relative h-64 w-full">
        {image?.src ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 320px"
            style={{
              objectPosition: `${image.focalX ?? 50}% ${image.focalY ?? 50}%`,
            }}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-100">
            <PhotoIcon className="h-12 w-12 text-gray-400" />
          </div>
        )}
      </div>
      <div className="space-y-2 p-6">
        <Link
          href={href}
          className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-700"
        >
          <span className="absolute inset-0" aria-hidden="true" />
          <Heading level="h2" size="sm" className="mb-0 text-black">
            {title}
          </Heading>
        </Link>
        {text && <p className="line-clamp-2 text-sm text-gray-700">{text}</p>}
      </div>
    </article>
  );
}

export { Card };
