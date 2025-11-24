"use client";

import { Popover, PopoverButton, PopoverPanel, Transition } from "@headlessui/react";
import { Fragment } from "react";

import SidePanelMenu from "@/components/SidePanelMenu";
import { Link } from "@/i18n/routing";
import { parseMenuLinks } from "@/lib/parse-link";
import { MenuItem } from "@/types/menu";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

export type MainMenuProps = {
  items: MenuItem[];
};

export function MainMenu({ items }: MainMenuProps) {
  const renderMenuItem = (item: MenuItem) => {
    const { linkUrl } = parseMenuLinks(item);

    // If the root level link has children, render a popover
    if (item.addLinks) {
      return (
        <li key={item.id}>
          <Popover className="relative px-3 py-2">
            <PopoverButton className="main-nav-item group flex items-center font-medium focus:outline-none data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-amber-500">
              <span className="transition-colors duration-200 group-data-[open]:text-amber-500">
                {item.label}
              </span>
              <ChevronDownIcon className="ml-2 h-4 w-4 stroke-[2.5] transition-transform duration-200 group-hover:text-amber-500 group-data-[open]:rotate-180 group-data-[open]:text-amber-500" />
            </PopoverButton>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <PopoverPanel className="absolute left-1/2 z-20 mt-3 -translate-x-1/2 transform px-2">
                <ul className="overflow-hidden rounded-lg border border-stone-700 shadow-lg ring-1 ring-black ring-opacity-5">
                  <div
                    // Check for different styling if children have grandchildren
                    className={clsx(
                      "bg-stone-800 *:relative",
                      item.children?.some(
                        (child) => child.grandchildren && child.grandchildren.length > 0,
                      )
                        ? "grid gap-x-4 gap-y-10 px-10 pb-10 pt-6"
                        : "flex min-w-[250px] flex-col gap-4 pb-8 pl-10 pr-6 pt-6",
                    )}
                    // Dynamically set grid columns based on number of children with grandchildren
                    // Maximum of 3 columns, each 200px wide
                    style={
                      item.children?.some(
                        (child) => child.grandchildren && child.grandchildren.length > 0,
                      )
                        ? {
                            gridTemplateColumns: `repeat(${Math.min(
                              3,
                              item.children?.filter(
                                (child) => child.grandchildren && child.grandchildren.length > 0,
                              ).length || 1,
                            )}, 200px)`,
                          }
                        : undefined
                    }
                  >
                    {/* Children with grandchildren */}
                    {item.children
                      ?.filter((child) => child.addLinks)
                      .map((child) => (
                        <li key={child.id} className="bg-stone-800">
                          <h3 className="mb-3 text-sm font-medium leading-snug tracking-wide text-stone-400">
                            {child.label}
                          </h3>
                          <ul className="space-y-4">
                            {child.grandchildren?.map((grandchild) => {
                              const { linkUrl, linkLabel } = parseMenuLinks(grandchild);
                              if (linkUrl) {
                                return (
                                  <li key={grandchild.id}>
                                    <Link
                                      href={linkUrl}
                                      className="inline-block leading-snug transition duration-150 ease-in-out hover:text-amber-500"
                                    >
                                      {linkLabel}
                                    </Link>
                                  </li>
                                );
                              }
                              return null;
                            })}
                          </ul>
                        </li>
                      ))}

                    {/* Children without grandchildren */}
                    {item.children
                      ?.filter((child) => !child.addLinks)
                      .map((child) => {
                        const { linkUrl } = parseMenuLinks(child);
                        return (
                          <li key={child.id} className="bg-stone-800">
                            <Link
                              href={linkUrl ?? ""}
                              className="inline-block leading-snug transition duration-150 ease-in-out hover:text-amber-500"
                            >
                              {child.label}
                            </Link>
                          </li>
                        );
                      })}
                  </div>
                </ul>
              </PopoverPanel>
            </Transition>
          </Popover>
        </li>
      );
    }

    // If the root level link has no children, render a link
    if (linkUrl && !item.addLinks) {
      return (
        <li key={item.id}>
          <Link
            href={linkUrl}
            className="px-3 py-2 text-base font-medium transition-colors hover:text-amber-500"
          >
            {item.label}
          </Link>
        </li>
      );
    }
    return null;
  };

  return (
    <nav>
      <ul className="flex items-center justify-center gap-4">{items?.map(renderMenuItem)}</ul>
    </nav>
  );
}

type SidePanelLink = {
  title: string;
  url: string;
};

type SidePanelSubLink = SidePanelLink & {
  sublinks?: SidePanelLink[];
};

type SidePanelItem = SidePanelLink & {
  sublinks?: SidePanelSubLink[];
};

export function MobileMenu({ items }: { items: MenuItem[] }) {
  const convertGrandchildToSidePanelLink = (grandchild: MenuItem): SidePanelLink => {
    const { linkUrl } = parseMenuLinks(grandchild);
    return {
      title: grandchild.label,
      url: linkUrl ?? "",
    };
  };

  const convertChildToSidePanelSubLink = (child: MenuItem): SidePanelSubLink => {
    const { linkUrl } = parseMenuLinks(child);
    return {
      title: child.label,
      url: linkUrl ?? "",
      sublinks: child.grandchildren?.map(convertGrandchildToSidePanelLink),
    };
  };

  const convertToSidePanelItems = (menuItems: MenuItem[]): SidePanelItem[] => {
    return menuItems?.map((item) => {
      const { linkUrl } = parseMenuLinks(item);
      return {
        title: item.label,
        url: linkUrl ?? "",
        sublinks: item.children?.map(convertChildToSidePanelSubLink),
      };
    });
  };

  const sidePanelItems = convertToSidePanelItems(items);
  return (
    <div className="flex items-center">
      <SidePanelMenu items={sidePanelItems} />
    </div>
  );
}
