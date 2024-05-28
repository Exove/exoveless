"use client";

import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { Fragment, useState } from "react";

interface MenuDialogProps {
  openLabel: React.ReactNode;
  children: React.ReactNode;
  fullWidthButton?: boolean;
  position?: "left" | "right";
}

export default function SidePanel({
  children,
  openLabel,
  fullWidthButton = false,
  position = "right",
}: MenuDialogProps) {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={clsx(fullWidthButton && "w-full")}
      >
        {openLabel}
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog className="relative z-50" onClose={() => setIsOpen(false)}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <TransitionChild
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom={`opacity-0 ${position === "left" ? "left-[-500px]" : "right-[-500px]"}`}
            enterTo="opacity-100 right-0"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 right-0"
            leaveTo={`opacity-0 ${position === "left" ? "left-[-500px]" : "right-[-500px]"}`}
          >
            <div
              className={clsx(
                "fixed top-0 h-screen w-full max-w-[500px] p-2",
                position === "left" && "left-0",
                position === "right" && "right-0",
              )}
            >
              <DialogPanel className="h-full w-full max-w-[500px] rounded-lg bg-white">
                <div className="flex justify-end p-4">
                  <button onClick={() => setIsOpen(false)}>
                    <span className="sr-only">Close mobile menu</span>
                    <XMarkIcon className="size-7" />
                  </button>
                </div>

                {children}
              </DialogPanel>
            </div>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  );
}
