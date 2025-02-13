import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Fragment } from "react";

interface DropdownProps {
  label: string;
  items: Array<{ title: string; url: string }>;
}

export default function Dropdown({ label, items }: DropdownProps) {
  return (
    <Menu>
      <MenuButton>
        <div className="flex items-center gap-2">
          {label}
          <ChevronDownIcon className="h-5 w-5 stroke-2 transition-transform ui-open:rotate-180" />
        </div>
      </MenuButton>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-300"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems
          anchor="bottom"
          className="absolute z-20 mt-2 w-56 origin-top-right divide-y-2 divide-gray-100 rounded-md border bg-white shadow-lg"
        >
          {items.map((item, index) => (
            <div className="p-1" key={index}>
              <MenuItem>
                <Link
                  href={item.url}
                  className="flex w-full items-center rounded-md py-2 pl-7 pr-2 ui-active:bg-neutral-200"
                >
                  {item.title}
                </Link>
              </MenuItem>
            </div>
          ))}
        </MenuItems>
      </Transition>
    </Menu>
  );
}
