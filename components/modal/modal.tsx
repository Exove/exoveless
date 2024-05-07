"use client";

import { Dialog, Transition } from "@headlessui/react";
import Button from "components/button/button";
import { Fragment, useEffect, useState } from "react";

interface ModalProps {
  children: any;
  id: string;
  title?: string;
  closeButtonText?: string;
  openButton?: any;
  height?: string;
  open?: boolean;
  saveStateToLocalStorage?: boolean; // Use only if open is set to true
}

export default function Modal({
  title,
  children,
  closeButtonText = "Close",
  openButton = "Open",
  height = "auto",
  open = false,
  saveStateToLocalStorage = false,
  id,
}: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  function onClose() {
    setIsOpen(false);
    saveStateToLocalStorage &&
      window.localStorage.setItem("modal-" + id, "false");
  }

  // Wait till page is loaded for the modal to open
  useEffect(() => {
    open ? setIsOpen(open) : setIsOpen(false);
  }, [open]);

  return (
    <div>
      {openButton && (
        <button onClick={() => setIsOpen(true)}>{openButton}</button>
      )}

      <Transition
        appear
        show={isOpen && window.localStorage.getItem("modal-" + id) !== "false"}
        as={Fragment}
      >
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-md transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6"
                  >
                    {title}
                  </Dialog.Title>
                  <div className="mt-2" style={{ height: height }}>
                    {children}
                  </div>

                  <div className="mt-4 flex justify-center">
                    <Button style="primary" onClick={onClose}>
                      {closeButtonText}
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
