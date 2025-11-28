"use client";

import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Fragment } from "react";

export type ImageModalProps = {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  closeLabel?: string;
};

export default function ImageModal({
  isOpen,
  onClose,
  src,
  alt,
  caption,
  width = 1920,
  height = 1080,
  closeLabel = "Close dialog",
}: ImageModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Overlay */}
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black" onClick={onClose} />
        </TransitionChild>

        <div className="fixed inset-0">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPanel className="relative flex h-full w-full items-center justify-center">
              <button
                type="button"
                className="absolute top-8 right-8 z-10 rounded-full bg-black/60 p-2 text-white transition hover:bg-black/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                onClick={onClose}
                aria-label={closeLabel}
              >
                <XMarkIcon className="h-6 w-6" />
              </button>

              <figure
                className="relative flex h-full w-full items-center justify-center p-4"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={src}
                  alt={alt}
                  width={width}
                  height={height}
                  className="max-h-full max-w-full cursor-zoom-out object-contain"
                  onClick={onClose}
                  priority
                />
                {caption && (
                  <figcaption className="absolute right-0 bottom-0 left-0 bg-black/70 p-4 text-center text-sm text-white">
                    {caption}
                  </figcaption>
                )}
              </figure>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
}

export { ImageModal };
