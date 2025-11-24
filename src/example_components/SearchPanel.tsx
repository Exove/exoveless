"use client";

import SidePanel from "@/components/SidePanel";
import { Link, useRouter } from "@/i18n/routing";
import { getAlgoliaSearchClient } from "@/lib/algolia-utils";
import { ALGOLIA_INDEX_NAME } from "@/lib/constants";
import { useSearchHistory } from "@/lib/useSearchHistory";
import { ClockIcon, MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { InstantSearch, useHits, useSearchBox, useStats } from "react-instantsearch";

type Hit = {
  title: string;
  slug: string;
  collection?: string;
};

const SearchContext = createContext<{
  query: string;
  setSearchQuery: (query: string) => void;
  history: string[];
  addToHistory: (query: string) => void;
  clearHistory: () => void;
  removeFromHistory: (query: string) => void;
  closePanel: () => void;
}>({
  query: "",
  setSearchQuery: () => {},
  history: [],
  addToHistory: () => {},
  clearHistory: () => {},
  removeFromHistory: () => {},
  closePanel: () => {},
});

function SearchContextProvider({
  children,
  closePanel,
}: {
  children: React.ReactNode;
  closePanel: () => void;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const { history, addToHistory, clearHistory, removeFromHistory } = useSearchHistory();
  return (
    <SearchContext.Provider
      value={{
        query: searchQuery,
        setSearchQuery,
        history,
        addToHistory,
        clearHistory,
        removeFromHistory,
        closePanel,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

const algoliaClient = getAlgoliaSearchClient();

// Custom search client that prevents empty queries
const searchClient = {
  ...algoliaClient,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  search(requests: any[]) {
    if (requests.every(({ params }) => !params.query)) {
      return Promise.resolve({
        results: requests.map(() => ({
          hits: [],
          nbHits: 0,
          nbPages: 0,
          page: 0,
          processingTimeMS: 0,
          hitsPerPage: 0,
          exhaustiveNbHits: false,
          query: "",
          params: "",
        })),
      });
    }

    return algoliaClient.search(requests);
  },
} as typeof algoliaClient;

// Only used for screen readers
function SearchStats() {
  const { nbHits } = useStats();
  const t = useTranslations("search");

  return (
    <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">
      {nbHits} {nbHits === 1 ? t("result") : t("results")}
    </div>
  );
}

function CustomHits({ showHistory }: { showHistory: boolean }) {
  const { items } = useHits<Hit>();
  const { query, refine } = useSearchBox();
  const t = useTranslations("search");
  const [showNoResults, setShowNoResults] = useState(false);
  const { addToHistory, closePanel } = useContext(SearchContext);

  // Delay showing "no results" message to prevent flash while search results are loading
  useEffect(() => {
    if (query && (!items || items.length === 0)) {
      const timer = setTimeout(() => {
        setShowNoResults(true);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setShowNoResults(false);
    }
  }, [query, items]);

  // Show search history when no query
  if (!query && showHistory) {
    return <SearchHistory onSelectQuery={refine} />;
  }

  if (!items || items.length === 0) {
    if (query && showNoResults) {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="p-4 text-center text-stone-400"
        >
          {t("noResults")}
        </motion.div>
      );
    }
    return null;
  }

  return (
    <ol>
      <AnimatePresence mode="popLayout">
        {items.map((hit: Hit) => (
          <motion.li
            key={hit.slug}
            layout
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="group relative flex items-center justify-between gap-3 rounded-lg p-4 hover:bg-stone-700">
              <Link
                href={`/${hit.collection}/${hit.slug}`}
                className="block"
                onClick={() => {
                  addToHistory(query);
                  closePanel();
                }}
              >
                <h2 className="font-medium">{hit.title}</h2>
                <span className="absolute inset-x-0 inset-y-0 z-10"></span>
              </Link>
              <div className="text-xs uppercase text-stone-400 group-hover:text-stone-300">
                {hit.collection}
              </div>
            </div>
          </motion.li>
        ))}
      </AnimatePresence>
    </ol>
  );
}

function CustomSearchBox({ inSidePanel = false }: { inSidePanel?: boolean }) {
  const { query, refine } = useSearchBox();
  const inputRef = useRef<HTMLInputElement>(null);
  const { setSearchQuery, addToHistory, closePanel } = useContext(SearchContext);
  const router = useRouter();
  const t = useTranslations("search");

  useEffect(() => {
    // Focus the search box when the side panel is opened
    if (inSidePanel && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.click();
    }
  }, [inSidePanel]);

  useEffect(() => {
    setSearchQuery(query);
  }, [query, setSearchQuery]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query) {
      addToHistory(query);
      router.push(`/search${query ? `?q=${encodeURIComponent(query)}` : ""}`);
      closePanel();
    }
  };

  return (
    <div className="relative mt-2">
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => refine(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={t("searchPlaceholder")}
        className="search-panel-input w-full rounded-lg border border-stone-700 bg-stone-900 px-4 py-3 text-white placeholder-stone-400 focus:border-amber-500 focus:outline-none"
      />
      {query && (
        <button
          onClick={() => refine("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-white"
          aria-label={t("clearSearch")}
          tabIndex={-1}
        >
          <XMarkIcon className="h-5 w-5 stroke-2" />
        </button>
      )}
    </div>
  );
}

function SearchHistory({ onSelectQuery }: { onSelectQuery: (query: string) => void }) {
  const { history, clearHistory, removeFromHistory } = useContext(SearchContext);
  const t = useTranslations("search");

  if (history.length === 0) {
    return;
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between px-4 pt-4">
        <h3 className="text-sm font-medium uppercase text-stone-400">{t("recentSearches")}</h3>
        <button
          onClick={clearHistory}
          className="text-xs text-amber-500 hover:text-amber-400 hover:underline"
        >
          {t("clearHistory")}
        </button>
      </div>
      <ol>
        <AnimatePresence>
          {history.map((query) => (
            <motion.li
              key={query}
              layout
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                x: -20,
                transition: { duration: 0.15, ease: "easeOut" },
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div className="group relative flex items-center gap-3 rounded-lg hover:bg-stone-700">
                <button
                  onClick={() => onSelectQuery(query)}
                  className="flex flex-1 items-center gap-3 p-4 text-left"
                >
                  <ClockIcon className="h-5 w-5 text-stone-400 group-hover:text-stone-300" />
                  <span className="font-medium">{query}</span>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFromHistory(query);
                  }}
                  className="mr-4 rounded-full p-1 text-stone-400 opacity-0 transition-opacity hover:bg-stone-600 hover:text-white group-hover:opacity-100"
                  aria-label={`${t("clearSearch")}: ${query}`}
                >
                  <XMarkIcon className="h-4 w-4 stroke-2" />
                </button>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </ol>
    </div>
  );
}

function AdvancedSearchLink() {
  const { query, addToHistory, closePanel } = useContext(SearchContext);
  const t = useTranslations("search");

  const handleClick = () => {
    if (query) {
      addToHistory(query);
    }
    closePanel();
  };

  return (
    <div className="pb-10 pt-4 text-center">
      <Link
        href={`/search${query ? `?q=${encodeURIComponent(query)}` : ""}`}
        className="p-4 text-amber-500 underline-offset-2 hover:underline"
        onClick={handleClick}
      >
        {t("advancedSearch")}
      </Link>
    </div>
  );
}

function SearchContent() {
  return (
    <>
      <SearchStats />
      <CustomHits showHistory={true} />
    </>
  );
}

export default function SearchSidePanel() {
  const t = useTranslations("search");
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SearchContextProvider closePanel={() => setIsOpen(false)}>
      <SidePanel
        open={isOpen}
        onClose={() => setIsOpen(false)}
        openLabel={
          <button
            onClick={() => setIsOpen(true)}
            className="group flex items-center gap-2 rounded-full bg-stone-800 py-2 pl-4 pr-10 hover:ring-1 hover:ring-amber-500"
          >
            <MagnifyingGlassIcon className="h-5 w-5 text-stone-400" />
            <div className="sr-only text-xs font-medium uppercase xl:not-sr-only">
              {t("search")}
            </div>
          </button>
        }
        title={t("search")}
        footer={<AdvancedSearchLink />}
      >
        <div className="flex flex-col gap-2">
          <InstantSearch searchClient={searchClient} indexName={`${ALGOLIA_INDEX_NAME}_${locale}`}>
            <div className="sticky top-0 z-10 bg-stone-800 pb-2 pt-4">
              <CustomSearchBox inSidePanel={true} />
            </div>
            <SearchContent />
          </InstantSearch>
        </div>
      </SidePanel>
    </SearchContextProvider>
  );
}
