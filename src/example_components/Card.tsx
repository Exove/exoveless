import Heading from "@/components/Heading";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { Media } from "@/payload-types";
import { PhotoIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export type CardProps = {
  image?: Media;
  title: string;
  text?: string | null;
  href: string;
  className?: string;
};

export default function Card({ image, title, text, href, className }: CardProps) {
  if (!href || !title) return null;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg bg-stone-800 transition-all duration-300 hover:ring-1 hover:ring-amber-500",
        className,
      )}
    >
      <div className="relative h-64 w-full">
        {image?.url ? (
          <Image
            src={image.url}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 320px"
            style={{ objectPosition: `${image.focalX}% ${image.focalY}%` }}
          />
        ) : (
          // Empty image placeholder
          <div className="flex h-full w-full items-center justify-center bg-stone-700">
            <PhotoIcon className="h-12 w-12 text-stone-500" />
          </div>
        )}
      </div>
      <div className="p-6">
        <Link href={href} className="block">
          <span className="absolute inset-x-0 inset-y-0 z-10"></span>
          <Heading level="h2" size="sm" className="mb-2">
            {title}
          </Heading>
        </Link>
        {text && <p className="mb-4 line-clamp-2 text-stone-300">{text}</p>}
      </div>
    </div>
  );
}
