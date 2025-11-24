"use client";

import { FacebookIcon, LinkedInIcon } from "@/components/Icons";
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react";
import { ArrowUpOnSquareIcon, ClipboardIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import { Fragment, useEffect, useState } from "react";
import { toast } from "sonner";

export type ShareButtonsProps = {
  url?: string;
};

export default function ShareButtons({ url }: ShareButtonsProps) {
  const [currentUrl, setCurrentUrl] = useState<string>(url || "");
  const [copySuccess, setCopySuccess] = useState(false);
  const t = useTranslations("share");

  useEffect(() => {
    // If no URL is provided, use the current URL
    if (!url) {
      setCurrentUrl(window.location.href);
    }
  }, [url]);

  const encodedUrl = encodeURIComponent(currentUrl);

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  };

  const handleShare = (platform: string) => {
    const shareUrl = shareUrls[platform as keyof typeof shareUrls];
    window.open(shareUrl, "_blank", "width=600,height=400");
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
      toast.success(t("copied"));
    } catch (err) {
      console.error("Failed to copy URL:", err);
    }
  };

  const menuItems = [
    {
      id: "copy",
      icon: <ClipboardIcon className="h-5 w-5" />,
      label: copySuccess ? t("copied") : t("copyLink"),
      onClick: copyToClipboard,
    },
    {
      id: "facebook",
      icon: <FacebookIcon className="h-5 w-5" />,
      label: "Facebook",
      onClick: () => handleShare("facebook"),
    },
    {
      id: "linkedin",
      icon: <LinkedInIcon className="h-5 w-5" />,
      label: "LinkedIn",
      onClick: () => handleShare("linkedin"),
    },
  ];

  return (
    <Menu as="div" className="relative mt-4 inline-block text-left">
      <MenuButton className="flex items-center gap-2 text-sm text-stone-400 hover:text-stone-300">
        <span className="flex items-center gap-2">
          <ArrowUpOnSquareIcon className="h-5 w-5" />
          {t("title")}
        </span>
      </MenuButton>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems
          anchor="bottom start"
          className="absolute left-0 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="py-1">
            {menuItems.map((item) => (
              <MenuItem key={item.id}>
                <button
                  onClick={item.onClick}
                  className="flex w-full items-center gap-2 px-4 py-2 text-sm text-stone-700 data-[focus]:bg-stone-100"
                >
                  {item.icon}
                  {item.label}
                </button>
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  );
}
