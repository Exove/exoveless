"use client";

import { FacebookIcon, LinkedInIcon } from "@/components/Icons/Icons";
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react";
import { ArrowUpOnSquareIcon, ClipboardIcon } from "@heroicons/react/24/outline";
import { Fragment, useEffect, useState } from "react";
import { toast } from "sonner";

export type ShareButtonsProps = {
  url?: string;
  label?: string;
  copyLabel?: string;
  copiedLabel?: string;
};

export default function ShareButtons({
  url,
  label = "Share",
  copyLabel = "Copy link",
  copiedLabel = "Copied",
}: ShareButtonsProps) {
  const [currentUrl, setCurrentUrl] = useState(url || "");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (url) {
      setCurrentUrl(url);
      return;
    }

    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, [url]);

  const encodedUrl = encodeURIComponent(currentUrl);
  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      toast.success("Link copied");
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy URL", error);
      toast.error("Copy failed");
    }
  };

  const openShare = (platform: keyof typeof shareUrls) => {
    window.open(shareUrls[platform], "_blank", "width=600,height=400");
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="flex items-center gap-2 text-sm text-gray-600 transition hover:text-black">
        <ArrowUpOnSquareIcon className="h-5 w-5" />
        {label}
      </MenuButton>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <MenuItems className="absolute left-0 z-20 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <MenuItem>
              {({ active }) => (
                <button
                  onClick={copyToClipboard}
                  className={`flex w-full items-center gap-2 px-4 py-2 text-sm ${
                    active ? "bg-stone-100 text-stone-900" : "text-stone-700"
                  }`}
                >
                  <ClipboardIcon className="h-5 w-5" />
                  {copied ? copiedLabel : copyLabel}
                </button>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <button
                  onClick={() => openShare("facebook")}
                  className={`flex w-full items-center gap-2 px-4 py-2 text-sm ${
                    active ? "bg-stone-100 text-stone-900" : "text-stone-700"
                  }`}
                >
                  <FacebookIcon className="h-5 w-5" />
                  Facebook
                </button>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <button
                  onClick={() => openShare("linkedin")}
                  className={`flex w-full items-center gap-2 px-4 py-2 text-sm ${
                    active ? "bg-stone-100 text-stone-900" : "text-stone-700"
                  }`}
                >
                  <LinkedInIcon className="h-5 w-5" />
                  LinkedIn
                </button>
              )}
            </MenuItem>
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  );
}

export { ShareButtons };

