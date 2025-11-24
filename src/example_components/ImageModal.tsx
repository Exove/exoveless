"use client";

import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
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
};

export default function ImageModal({
  isOpen,
  onClose,
  src,
  alt,
  caption,
  width = 1920,
  height = 1080,
}: ImageModalProps) {
  const t = useTranslations();

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-90" onClick={onClose} />
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
              {/* Close button */}
              <button
                type="button"
                className="absolute right-4 top-4 z-10 rounded-full bg-black bg-opacity-50 p-2 text-white transition-colors hover:bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
                onClick={onClose}
                aria-label={t("common.close")}
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
                  <figcaption className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4 text-center text-sm text-white">
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
