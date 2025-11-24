"use client";

import { cn } from "@/lib/utils";
import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import { ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { Fragment, useState } from "react";

export type MenuDialogProps = {
  openLabel: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  fullWidthButton?: boolean;
  position?: "left" | "right";
  open?: boolean;
  title?: string;
  buttonId?: string;
  showBackButton?: boolean;
  onBack?: () => void;
  onClose?: () => void;
  closeLabel?: string;
  backLabel?: string;
};

export default function SidePanel({
  children,
  openLabel,
  fullWidthButton = false,
  position = "right",
  footer,
  title,
  buttonId = "open-side-panel",
  showBackButton = false,
  onBack,
  onClose,
  open,
  closeLabel = "Close",
  backLabel = "Back",
}: MenuDialogProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = typeof open === "boolean";
  const isOpen = isControlled ? (open as boolean) : internalOpen;

  const closePanel = () => {
    if (!isControlled) {
      setInternalOpen(false);
    }
    onClose?.();
  };

  const triggerProps = {
    onClick: () => {
      if (!isControlled) setInternalOpen(true);
    },
    className: cn("inline-flex items-center", fullWidthButton && "w-full"),
    id: buttonId,
  };

  const Trigger = React.isValidElement(openLabel) && openLabel.type === "button" ? "div" : "button";

  return (
    <>
      <Trigger {...triggerProps}>{openLabel}</Trigger>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog className="relative z-50" onClose={closePanel}>
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

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div
                className={cn(
                  "pointer-events-none fixed inset-y-0 flex max-w-full",
                  position === "left" ? "left-0" : "right-0",
                )}
              >
                <TransitionChild
                  as={Fragment}
                  enter="transform transition ease-out duration-200"
                  enterFrom={position === "left" ? "-translate-x-full" : "translate-x-full"}
                  enterTo="translate-x-0"
                  leave="transform transition ease-in duration-200"
                  leaveFrom="translate-x-0"
                  leaveTo={position === "left" ? "-translate-x-full" : "translate-x-full"}
                >
                  <div className="pointer-events-auto w-screen max-w-[500px] p-2">
                    <DialogPanel className="relative flex h-full w-full flex-col overflow-hidden rounded-lg bg-white p-5 shadow-lg">
                      <div className="flex h-full max-w-[500px] flex-col">
                        <div className="mb-4 flex items-end justify-between">
                          {showBackButton ? (
                            <button
                              className="flex items-center gap-2 text-lg text-gray-900"
                              onClick={onBack}
                              aria-label={backLabel}
                            >
                              <ChevronRightIcon className="h-6 w-6 rotate-180 stroke-2" />
                              {backLabel}
                            </button>
                          ) : title ? (
                            <h2 className="text-2xl font-bold text-black">{title}</h2>
                          ) : (
                            <div />
                          )}

                          <button onClick={closePanel}>
                            <span className="sr-only">{closeLabel}</span>
                            <XMarkIcon className="h-10 w-10 rounded-full bg-gray-200 p-2 hover:bg-gray-300 text-gray-900" />
                          </button>
                        </div>
                        <div className="flex-1 overflow-y-auto overscroll-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                          {children}
                        </div>
                        {footer && <div>{footer}</div>}
                      </div>
                    </DialogPanel>
                  </div>
                </TransitionChild>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
