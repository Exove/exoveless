import { CgChevronRight, CgChevronLeft } from "react-icons/cg";
import { Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Link from "next/link";
import Heading from "components/heading/heading";

interface MobileSubmenuProps {
  item: any;
  title: string;
}

export default function MobileSubmenu({ item, title }: MobileSubmenuProps) {
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <div>
      <div>
        <button
          className="flex items-center justify-between w-full py-2 text-lg border-t border-gray-700"
          onClick={() => setSubMenuOpen(true)}
        >
          {title}
          <CgChevronRight className="mx-3 text-yellow-500 w-9 h-9" />
        </button>
        <Transition
          as={Fragment}
          show={subMenuOpen}
          enter="transition-all duration-[400ms]"
          enterFrom="ml-[700px]"
          enterTo="ml-0"
          leave="transition-all duration-[400ms]"
          leaveFrom="ml-0"
          leaveTo="ml-[700px]"
        >
          <div className="fixed top-0 left-0 z-10 w-screen h-screen bg-white">
            <button className="p-3 mt-2" onClick={() => setSubMenuOpen(false)}>
              <div className="flex items-center gap-4">
                <CgChevronLeft className="w-10 h-10" />
                Main navigation
              </div>
            </button>
            <div className="px-4 py-10">
              <Heading level="h2" size="medium">
                {title}
              </Heading>
            </div>
            <div className="w-full h-screen px-4 overflow-scroll break-words">
              {item.map((sublink, index) => (
                <div key={index}>
                  <Link
                    href={sublink.url}
                    className="block py-3 text-lg border-t border-gray-700"
                  >
                    {sublink.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
}
