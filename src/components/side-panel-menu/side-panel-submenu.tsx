import { Transition, TransitionChild } from "@headlessui/react";
import { Fragment, useState } from "react";
import Link from "next/link";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Heading from "../heading/heading";
import SidePanel from "../side-panel/side-panel";

interface SidePanelSubmenuProps {
  item: Array<{ title: string; url: string }>;
  title: string;
  setParentMenuOpen?: any;
}

export default function SidePanelSubmenu({
  item,
  title,
  setParentMenuOpen,
}: SidePanelSubmenuProps) {
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <SidePanel
      openLabel={
        <span
          className="flex w-full items-center justify-between p-3 text-lg"
          onClick={() => setSubMenuOpen(true)}
        >
          {title}
          <ChevronRightIcon className="h-6 w-6 stroke-2 " />
        </span>
      }
      fullWidthButton
    >
      <div className="px-4 py-5">
        <Heading level="h2" size="medium">
          {title}
        </Heading>
      </div>
      <ul className="w-full divide-y break-words px-4">
        {item.map((sublink, index) => (
          <li key={index}>
            <Link href={sublink.url} className="block py-3 text-lg">
              {sublink.title}
            </Link>
          </li>
        ))}
      </ul>
    </SidePanel>
  );
}
