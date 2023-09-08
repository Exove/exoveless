import { GoSearch } from "react-icons/go";

import {
  ChangeEvent,
  FormEvent,
  RefObject,
  ComponentProps,
  Fragment,
  useEffect,
} from "react";

export type ControlledSearchBoxProps = ComponentProps<"div"> & {
  inputRef: RefObject<HTMLInputElement>;
  isSearchStalled: boolean;
  onChange(event: ChangeEvent): void;
  onReset(event: FormEvent): void;
  onSubmit?(event: FormEvent): void;
  placeholder?: string;
  value: string;
  setShowHits;
};

export function ControlledSearchBox({
  inputRef,
  isSearchStalled,
  onChange,
  onReset,
  onSubmit,
  placeholder,
  value,
  setShowHits,
  ...props
}: ControlledSearchBoxProps) {
  useEffect(() => {
    value ? setShowHits(true) : setShowHits(false), [onChange];
  });

  return (
    <Fragment {...props}>
      <form action="" className="relative w-full" noValidate>
        <input
          className="w-full px-12 py-3 bg-gray-700 border border-gray-400 rounded placeholder:text-white"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          enterKeyHint="go"
          placeholder={placeholder}
          spellCheck={false}
          maxLength={512}
          type="search"
          value={value}
          onChange={onChange}
          ref={inputRef}
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <GoSearch className="w-6 h-6 text-white" />
        </div>
      </form>
    </Fragment>
  );
}
