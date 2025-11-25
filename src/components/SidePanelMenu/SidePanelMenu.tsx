"use client";

import { ChevronRightIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import SidePanel from "../SidePanel/SidePanel";
import Link from "next/link";

type MenuItem = {
  title: string;
  url: string;
  sublinks?: MenuItem[];
};

interface SidePanelMenuProps {
  items: MenuItem[];
  rootLabel?: string;
  backLabel?: string;
}

export default function SidePanelMenu({ items, rootLabel = "Menu", backLabel = "Back" }: SidePanelMenuProps) {
  const [currentItems, setCurrentItems] = useState<MenuItem[]>(items);
  const [navigationStack, setNavigationStack] = useState<{ items: MenuItem[]; title: string }[]>([]);
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const [isFirstRender, setIsFirstRender] = useState(true);

  const handleClose = () => {
    setTimeout(() => {
      setCurrentItems(items);
      setNavigationStack([]);
      setDirection("forward");
      setIsFirstRender(true);
    }, 200);
  };

  const handleSubmenuClick = (submenuItems: MenuItem[], title: string) => {
    setIsFirstRender(false);
    setDirection("forward");
    setNavigationStack([...navigationStack, { items: currentItems, title }]);
    setCurrentItems(submenuItems);
  };

  const handleBack = () => {
    if (navigationStack.length > 0) {
      setIsFirstRender(false);
      setDirection("back");
      const previousState = navigationStack[navigationStack.length - 1];
      setCurrentItems(previousState.items);
      setNavigationStack(navigationStack.slice(0, -1));
    }
  };

  const title = navigationStack.length > 0 ? navigationStack[navigationStack.length - 1].title : rootLabel;

  return (
    <SidePanel
      openLabel={
        <div className="flex items-center gap-2">
          <Bars3Icon className="h-6 w-6 stroke-2" />
          <span className="hidden md:inline-block">{rootLabel}</span>
        </div>
      }
      position="left"
      showBackButton={navigationStack.length > 0}
      onBack={handleBack}
      onClose={handleClose}
      backLabel={backLabel}
    >
      <AnimatePresence mode="popLayout">
        <motion.div
          key={navigationStack.length}
          initial={isFirstRender ? false : { opacity: 0, x: direction === "forward" ? 300 : -300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
        >
          <div className="flex w-full flex-col">
            {title && <h2 className="my-6 text-2xl font-bold text-black">{title}</h2>}

            <ul className="w-full divide-y divide-gray-300 border-y border-gray-300 text-lg text-gray-900">
              {currentItems?.map((item, index) => (
                <li key={`${item.url}-${index}`}>
                  {!item.sublinks || item.sublinks.length === 0 ? (
                    <Link
                      href={item.url}
                      className="block p-3 transition-all duration-200 hover:bg-gray-100"
                      onClick={handleClose}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleSubmenuClick(item.sublinks!, item.title)}
                      className="flex w-full items-center justify-between p-3 transition-all duration-200 hover:bg-gray-100"
                    >
                      {item.title}
                      <ChevronRightIcon className="h-6 w-6 stroke-2" />
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>
    </SidePanel>
  );
}
