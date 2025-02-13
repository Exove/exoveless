"use client";

import { ChevronRightIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import SidePanel from "../side-panel/side-panel";
import Link from "next/link";

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
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const [isFirstRender, setIsFirstRender] = useState(true);

  const handleClose = () => {
    setTimeout(() => {
      setCurrentItems(items);
      setNavigationStack([]);
      setDirection("forward");
      setIsFirstRender(true);
    }, 200); // 200ms delay to ensure the animation is complete
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

  const title =
    navigationStack.length > 0
      ? navigationStack[navigationStack.length - 1].title
      : undefined;

  return (
    <SidePanel
      openLabel={
        <div className="flex items-center gap-2">
          <Bars3Icon className="h-6 w-6 stroke-2" />
          <span className="hidden md:inline-block">Menu</span>
        </div>
      }
      position="left"
      showBackButton={navigationStack.length > 0}
      onBack={handleBack}
      onClose={handleClose}
    >
      <AnimatePresence mode="popLayout">
        <motion.div
          key={navigationStack.length}
          initial={
            isFirstRender
              ? false
              : { opacity: 0, x: direction === "forward" ? 300 : -300 }
          }
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
        >
          <div className="flex w-full flex-col">
            {title && (
              <>
                <h2 className="my-6 text-2xl font-bold">{title}</h2>
                {navigationStack.length > 0 && (
                  <Link
                    href={
                      navigationStack[navigationStack.length - 1].items.find(
                        (item) => item.title === title,
                      )?.url || "#"
                    }
                    className="block border-t border-slate-200 p-3 text-lg text-slate-700 transition-all duration-200 hover:bg-slate-100"
                  >
                    All
                  </Link>
                )}
              </>
            )}

            <ul className="w-full divide-y divide-slate-200 overflow-scroll break-words border-y border-slate-200 text-lg text-slate-700">
              {currentItems?.map((item, index) => (
                <li key={`${item.url}-${index}`}>
                  {!item.sublinks ? (
                    <Link
                      href={item.url}
                      className="block p-3 transition-all duration-200 hover:bg-slate-100"
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <button
                      onClick={() =>
                        handleSubmenuClick(item.sublinks!, item.title)
                      }
                      className="flex w-full items-center justify-between p-3 text-lg text-slate-700 transition-all duration-200 hover:bg-slate-100"
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
