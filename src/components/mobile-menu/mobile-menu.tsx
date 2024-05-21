"use client";

import { Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Fragment, useEffect, useId, useState } from "react";
import MobileSubmenu from "./mobile-submenu";

interface MobileMenuProps {
  items: Array<{
    title: string;
    url: string;
    sublinks?: Array<{ title: string; url: string }>;
  }>;
}

export default function MobileMenu({ items }: MobileMenuProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const id = useId();

  useEffect(() => {
    const html = document.documentElement;
    html.classList.toggle("overflow-hidden", menuOpen);
  }, [menuOpen]);

  return (
    <div>
      <div className={menuOpen ? "fixed right-3 top-3 z-20" : undefined}>
        <button
          className="inline-flex items-center border px-3 py-2 text-white"
          onClick={() => {
            menuOpen ? setMenuOpen(false) : setMenuOpen(true);
          }}
          aria-expanded={menuOpen ? "true" : "false"}
          aria-controls={id}
          id={id + "button"}
        >
          {menuOpen ? (
            <>
              <span className="sr-only">Close mobile menu</span>
              <XMarkIcon className="h-7 w-7 text-black" />
            </>
          ) : (
            <>
              <span className="sr-only">Open mobile menu</span>
              <Bars3Icon className="h-7 w-7 text-black" />
            </>
          )}
        </button>
      </div>

      <Transition as={Fragment} show={menuOpen}>
        <nav
          id={id}
          className="fixed left-0 top-0 z-10 h-screen w-screen bg-white"
        >
          <ul className="w-full overflow-scroll break-words px-4 pt-20">
            {items.map((item, index: number) => (
              <li key={index}>
                {!item.sublinks && (
                  <Link
                    href={item.url}
                    className="block border-t border-gray-300 py-3 text-lg"
                  >
                    {item.title}
                  </Link>
                )}

                {item.sublinks && (
                  <MobileSubmenu item={item.sublinks} title={item.title} />
                )}

                {/* Last item */}
                {items[index + 1] ? null : (
                  <div className="mb-10 border-b border-gray-300" />
                )}
              </li>
            ))}
          </ul>
        </nav>
      </Transition>
    </div>
  );
}
