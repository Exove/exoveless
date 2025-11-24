"use client";

import { cn } from "@/lib/utils";
import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import { ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
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
}: MenuDialogProps) {
  const t = useTranslations();
  const [internalIsOpen, setInternalIsOpen] = useState(false);

  // Use controlled state if provided, otherwise use internal state
  const isOpen = open !== undefined ? open : internalIsOpen;
  const setIsOpen = open !== undefined ? () => {} : setInternalIsOpen;

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
  };

  // Check if openLabel is a button element
  const isButtonLabel = React.isValidElement(openLabel) && openLabel.type === "button";

  const Trigger = isButtonLabel ? "div" : "button";

  return (
    <>
      <Trigger
        onClick={() => setIsOpen(true)}
        className={cn("flex items-center", fullWidthButton && "w-full")}
        id={buttonId}
      >
        {openLabel}
      </Trigger>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog className="relative z-50" onClose={handleClose}>
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
                    <DialogPanel className="relative flex h-full w-full flex-col overflow-hidden rounded-lg bg-stone-800 p-5 shadow-lg">
                      <div className="flex h-full max-w-[500px] flex-col">
                        <div className="mb-4 flex items-end justify-between">
                          {showBackButton ? (
                            <button
                              className="flex items-center gap-2 text-lg text-stone-100"
                              onClick={onBack}
                              aria-label={t("mainMenu.backAccessibility")}
                            >
                              <ChevronRightIcon className="h-6 w-6 rotate-180 stroke-2" />
                              {t("mainMenu.back")}
                            </button>
                          ) : title ? (
                            <h2 className="text-2xl font-bold text-stone-100">{title}</h2>
                          ) : (
                            <div />
                          )}

                          <button onClick={handleClose}>
                            <span className="sr-only">{t("common.close")}</span>
                            <XMarkIcon className="h-10 w-10 rounded-full bg-stone-700 p-2 hover:bg-stone-600 active:bg-stone-500" />
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
