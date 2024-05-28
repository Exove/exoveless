"use client";

import Link from "next/link";
import { useState } from "react";
import SidePanel from "../side-panel/side-panel";
import SidePanelSubmenu from "./side-panel-submenu";

interface SidePanelMenuProps {
  items: Array<{
    title: string;
    url: string;
    sublinks?: Array<{ title: string; url: string }>;
  }>;
}

export default function SidePanelMenu({ items }: SidePanelMenuProps) {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <SidePanel openLabel="Open menu">
      <ul className="w-full divide-y overflow-scroll break-words p-2 text-lg">
        {items?.map((item, index) => (
          <li key={index}>
            {!item.sublinks ? (
              <Link href={item.url} className="block p-3">
                {item.title}
              </Link>
            ) : (
              <SidePanelSubmenu
                item={item.sublinks}
                title={item.title}
                setParentMenuOpen={setIsOpen}
              />
            )}
          </li>
        ))}
      </ul>
    </SidePanel>
  );
}
