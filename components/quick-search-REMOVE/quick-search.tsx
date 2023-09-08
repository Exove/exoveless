import { RefObject, useState } from "react";
import { InstantSearch } from "react-instantsearch-hooks-web";
import Link from "next/link";
import algoliasearch from "algoliasearch/lite";
import { SearchBox } from "./search-box";
import Hits from "./hits";

interface QuickSearchProps {
  setOpen?: Function;
  inputRef?: RefObject<HTMLInputElement>;
}

export default function QuickSearch({ setOpen, inputRef }: QuickSearchProps) {
  const [showHits, setShowHits] = useState(false);

  const searchClient = algoliasearch(
    process.env.ALGOLIA_APPLICATION_ID,
    process.env.ALGOLIA_API_KEY
  );

  return (
    <InstantSearch
      indexName="dev_drupal"
      searchClient={searchClient}
      searchFunction={(search) => {
        if (search.state.query) return search.search();
      }}
    >
      <div className="sticky top-0 p-6 bg-gray-800">
        <div className="flex items-center gap-6">
          <SearchBox
            placeholder="Quick Search"
            inputRef={inputRef}
            setShowHits={setShowHits}
          />
          <div>
            <button onClick={() => setOpen(false)}>Cancel</button>
          </div>
        </div>
      </div>

      <div className="sm:h-[500px] px-6 mb-10">{showHits && <Hits />}</div>
    </InstantSearch>
  );
}
