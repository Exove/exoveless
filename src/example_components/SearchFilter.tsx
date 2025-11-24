import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import { Fragment } from "react";
import { useRefinementList } from "react-instantsearch";

export type SearchFilterProps = {
  attribute: string;
  operator: "or" | "and";
  placeholder?: string;
  title: string;
};

export default function SearchFilter({
  attribute = "categories",
  operator = "or",
  placeholder,
  title,
}: SearchFilterProps) {
  const { items, refine } = useRefinementList({
    attribute: attribute,
    operator: operator,
  });
  const t = useTranslations("search");
  const defaultPlaceholder = t("select");

  // Sort items alphabetically by label to maintain consistent order
  const sortedItems = [...items].sort((a, b) => a.label.localeCompare(b.label));
  const selectedItems = sortedItems.filter((item) => item.isRefined);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      <Listbox
        value={selectedItems}
        onChange={(selected) => {
          // Compare selected categories and update refinements
          items.forEach((item) => {
            const isSelected = selected.some((s) => s.value === item.value);
            if (isSelected !== item.isRefined) {
              refine(item.value);
            }
          });
        }}
        multiple
      >
        <div className="relative mt-1">
          <ListboxButton className="relative w-full cursor-pointer rounded-lg border border-stone-700 bg-stone-900 py-3 pl-4 pr-10 text-left text-white">
            <span className="block truncate">
              {selectedItems.length === 0
                ? placeholder || defaultPlaceholder
                : `${selectedItems.length} ${t("selected")}`}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon className="h-5 w-5 text-stone-400" aria-hidden="true" />
            </span>
          </ListboxButton>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ListboxOptions className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md border border-stone-700 bg-stone-900 py-1 text-base shadow-lg focus:outline-none">
              {sortedItems.length === 0 ? (
                <div className="px-4 py-2 text-stone-400">{t("no_options")}</div>
              ) : (
                sortedItems.map((item) => (
                  <ListboxOption
                    key={item.value}
                    value={item}
                    className="group relative cursor-pointer select-none py-2 pl-10 pr-4 font-normal group-data-[selected]:font-medium"
                  >
                    <span className="block truncate font-normal capitalize group-hover:text-amber-500 group-data-[selected]:font-medium">
                      {item.label}
                    </span>

                    <span className="invisible absolute inset-y-0 left-0 flex items-center pl-3 text-amber-500 group-data-[selected]:visible">
                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </ListboxOption>
                ))
              )}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
