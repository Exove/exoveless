import { useEffect, useState, ChangeEvent } from "react";
import { useSearchBox } from "react-instantsearch-hooks";
import { ControlledSearchBox } from "./conrolled-search-box";

export function SearchBox(props) {
  const { query, refine, isSearchStalled } = useSearchBox(props);
  const [value, setValue] = useState(query);

  function onReset() {
    setValue("");
  }

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.currentTarget.value);
  }

  useEffect(() => {
    if (query !== value) {
      refine(value);
    }
    // We want to track when the value coming from the React state changes
    // to update the InstantSearch.js query, so we don't need to track the
    // InstantSearch.js query.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, refine]);

  return (
    <>
      <ControlledSearchBox
        inputRef={props.inputRef}
        isSearchStalled={isSearchStalled}
        onChange={onChange}
        onReset={onReset}
        placeholder={props.placeholder}
        value={value}
        setShowHits={props.setShowHits}
      />
    </>
  );
}
