"use client";

import SidePanel from "@/components/SidePanel";
import { Link } from "@/i18n/routing";
import { parseLink } from "@/lib/parse-link";
import { MenuItem as MainMenuItem } from "@/types/menu";
import { Bars3Icon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";
import { useState } from "react";

type MenuItem = {
  title: string;
  url: string;
  sublinks?: MenuItem[];
};

export type SidePanelMenuProps = {
  items: MenuItem[] | MainMenuItem[];
  isMainMenuItems?: boolean;
};

// Helper function to convert MainMenuItem type to MenuItem type
const convertMainMenuItems = (menuItems: MainMenuItem[]): MenuItem[] => {
  return menuItems.map((item) => {
    const { linkUrl } = parseLink(item.link);
    return {
      title: item.label,
      url: linkUrl ?? "",
      sublinks: item.children ? convertMainMenuItems(item.children) : undefined,
    };
  });
};

export default function SidePanelMenu({ items, isMainMenuItems = false }: SidePanelMenuProps) {
  const t = useTranslations("mainMenu");
  const processedItems: MenuItem[] = isMainMenuItems
    ? convertMainMenuItems(items as MainMenuItem[])
    : (items as MenuItem[]);

  const [currentItems, setCurrentItems] = useState<MenuItem[]>(processedItems);
  const [navigationStack, setNavigationStack] = useState<{ items: MenuItem[]; title: string }[]>(
    [],
  );
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const [isFirstRender, setIsFirstRender] = useState(true);

  const handleClose = () => {
    setTimeout(() => {
      setCurrentItems(processedItems);
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
    navigationStack.length > 0 ? navigationStack[navigationStack.length - 1].title : undefined;

  return (
    <SidePanel
      openLabel={
        <div className="flex items-center gap-2">
          <Bars3Icon className="h-6 w-6 stroke-2" />
          <span className="sr-only">{t("mainMenu")}</span>
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
          initial={isFirstRender ? false : { opacity: 0, x: direction === "forward" ? 300 : -300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
        >
          <div className="flex w-full flex-col">
            {title && <h2 className="my-6 text-2xl font-bold">{title}</h2>}

            <ul className="w-full divide-y divide-stone-700 overflow-scroll break-words border-y border-stone-700 text-lg text-stone-100">
              {currentItems?.map((item, index) => (
                <li key={`${item.url}-${index}`}>
                  {!item.sublinks || item.sublinks.length === 0 ? (
                    <Link
                      href={item.url}
                      className="block p-3 transition-all duration-200 hover:bg-stone-700"
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleSubmenuClick(item.sublinks!, item.title)}
                      className="flex w-full items-center justify-between p-3 text-lg text-stone-100 transition-all duration-200 hover:bg-stone-700"
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
