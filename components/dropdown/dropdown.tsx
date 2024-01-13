import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Link from "next/link";
import clsx from "clsx";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface DropdownProps {
  label: string;
  items: Array<{ title: string; url: string; locale?: string }>;
  directionLeft?: boolean;
}

export default function Dropdown({
  label,
  items,
  directionLeft,
}: DropdownProps) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex gap-1 items-center w-full px-4 py-2">
          {label}
          <ChevronDownIcon className="w-6 h-6" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-500"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={clsx(
            "absolute w-56 mt-2 origin-top-right bg-white divide-y divide-gray-300 rounded-md shadow-lg",
            directionLeft && "right-0"
          )}
        >
          {items.map((item, index) => (
            <div className="p-1" key={index}>
              <Menu.Item>
                <Link
                  href={item.url}
                  locale={item.locale}
                  className="flex items-center w-full px-2 py-2 text-sm rounded-md ui-active:bg-stone-200"
                >
                  {item.title}
                </Link>
              </Menu.Item>
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
