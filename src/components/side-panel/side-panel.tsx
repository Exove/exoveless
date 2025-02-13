"use client";

import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { Fragment, useState } from "react";
import { useTranslations } from "next-intl";
import React from "react";

interface MenuDialogProps {
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
}

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
}: MenuDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("common");

  // Check if openLabel is a button element
  const isButtonLabel =
    React.isValidElement(openLabel) && openLabel.type === "button";

  const Trigger = isButtonLabel ? "div" : "button";

  return (
    <>
      <Trigger
        onClick={() => setIsOpen(true)}
        className={clsx(fullWidthButton && "w-full")}
        id={buttonId}
      >
        {openLabel}
      </Trigger>

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

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div
                className={clsx(
                  "pointer-events-none fixed inset-y-0 flex max-w-full",
                  position === "left" ? "left-0" : "right-0",
                )}
              >
                <TransitionChild
                  as={Fragment}
                  enter="transform transition ease-out duration-200"
                  enterFrom={
                    position === "left"
                      ? "-translate-x-full"
                      : "translate-x-full"
                  }
                  enterTo="translate-x-0"
                  leave="transform transition ease-in duration-200"
                  leaveFrom="translate-x-0"
                  leaveTo={
                    position === "left"
                      ? "-translate-x-full"
                      : "translate-x-full"
                  }
                >
                  <div className="pointer-events-auto w-screen max-w-[500px] p-2">
                    <DialogPanel className="relative flex h-full w-full flex-col overflow-hidden rounded-lg bg-slate-800 p-5">
                      <div className="flex h-full max-w-[500px] flex-col">
                        <div className="mb-4 flex items-end justify-between">
                          {showBackButton ? (
                            <button
                              className="flex items-center gap-2 text-lg"
                              onClick={onBack}
                            >
                              <ChevronRightIcon className="h-6 w-6 rotate-180 stroke-2" />
                              {t("back")}
                            </button>
                          ) : title ? (
                            <h2 className="text-2xl font-bold">{title}</h2>
                          ) : (
                            <div />
                          )}

                          <button onClick={() => setIsOpen(false)}>
                            <span className="sr-only">{t("closeMenu")}</span>
                            <XMarkIcon className="h-10 w-10 rounded-full bg-slate-700 p-2 hover:bg-slate-600 active:bg-slate-700" />
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
