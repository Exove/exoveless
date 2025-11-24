"use client";

import { Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react";
import { CheckIcon, LanguageIcon } from "@heroicons/react/24/outline";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Fragment } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("languageSwitcher");
  const locale = useLocale();

  const handleLocaleChange = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton
        className="group inline-flex items-center justify-center gap-2 py-2"
        aria-label={t("switchLanguage")}
      >
        <LanguageIcon
          className="h-5 w-5 text-stone-400 group-hover:text-amber-500"
          aria-hidden="true"
        />
        <div className="sr-only text-xs font-medium uppercase xl:not-sr-only">
          {locale.toUpperCase()}
        </div>
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
        <MenuItems className="absolute right-0 z-20 mt-2 w-32 origin-top-right rounded-md border border-stone-700 bg-stone-800 shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <MenuItem>
              <button
                onClick={() => handleLocaleChange("fi")}
                className="flex w-full items-center gap-2 px-4 py-2 text-sm data-[focus]:bg-stone-700"
              >
                <div className="w-4">
                  {locale === "fi" && <CheckIcon className="h-4 w-4 text-amber-500" />}
                </div>
                <span lang="fi">Suomi</span>
              </button>
            </MenuItem>
            <MenuItem>
              <button
                onClick={() => handleLocaleChange("en")}
                className="flex w-full items-center gap-2 px-4 py-2 text-sm data-[focus]:bg-stone-700"
              >
                <div className="w-4">
                  {locale === "en" && <CheckIcon className="h-4 w-4 text-amber-500" />}
                </div>
                <span lang="en">English</span>
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  );
}
