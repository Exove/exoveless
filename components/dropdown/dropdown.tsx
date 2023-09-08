import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import cx from "classix";

interface DropdownProps {
  label: string;
  items: any;
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
        <Menu.Button className="inline-flex items-center w-full px-4 py-2">
          {label}
          <FaChevronDown className="w-3 h-3 ml-3" aria-hidden="true" />
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
          className={cx(
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
