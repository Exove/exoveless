"use client";

import Link from "next/link";
import SidePanel from "@/components/side-panel";
import { ChevronRightIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface MenuItem {
  title: string;
  url: string;
  sublinks?: MenuItem[];
}

interface SidePanelMenuProps {
  items: MenuItem[];
}

export default function SidePanelMenu({ items }: SidePanelMenuProps) {
  const [currentItems, setCurrentItems] = useState<MenuItem[]>(items);
  const [navigationStack, setNavigationStack] = useState<
    { items: MenuItem[]; title: string }[]
  >([]);

  const handleSubmenuClick = (submenuItems: MenuItem[], title: string) => {
    setNavigationStack([...navigationStack, { items: currentItems, title }]);
    setCurrentItems(submenuItems);
  };

  const handleBack = () => {
    if (navigationStack.length > 0) {
      const previousState = navigationStack[navigationStack.length - 1];
      setCurrentItems(previousState.items);
      setNavigationStack(navigationStack.slice(0, -1));
    }
  };

  const title =
    navigationStack.length > 0
      ? navigationStack[navigationStack.length - 1].title
      : undefined;

  return (
    <SidePanel
      openLabel={
        <div className="flex items-center gap-2">
          <Bars3Icon className="h-6 w-6 stroke-2" />
          <span className="hidden md:inline-block">Selaa tuotteita</span>
        </div>
      }
      position="left"
      showBackButton={navigationStack.length > 0}
      onBack={handleBack}
    >
      <div className="flex w-full flex-col">
        {title && <h2 className="my-6 text-2xl font-bold">{title}</h2>}
        <ul className="w-full divide-y divide-slate-700 overflow-scroll break-words border-y border-slate-700 text-lg">
          {currentItems?.map((item, index) => (
            <li key={`${item.url}-${index}`}>
              {!item.sublinks ? (
                <Link href={item.url} className="block p-3">
                  {item.title}
                </Link>
              ) : (
                <button
                  onClick={() => handleSubmenuClick(item.sublinks!, item.title)}
                  className="flex w-full items-center justify-between p-3 text-lg"
                >
                  {item.title}
                  <ChevronRightIcon className="h-6 w-6 stroke-2" />
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </SidePanel>
  );
}
