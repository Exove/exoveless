import OutsideClickHandler from "react-outside-click-handler";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import QuickSearch from "./quick-search";

export default function QuickSearchModal() {
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);

  // Let's not use Headless UI's Dialog here 'cause of the focusing issues on iOS.

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  useEffect(() => {
    open
      ? document.body.classList.add("fixed", "w-full")
      : document.body.classList.remove("fixed", "w-full");
  }, [open]);

  return (
    <div>
      <button
        onClick={async function () {
          await setOpen(true);
          inputRef.current?.focus();
        }}
        className="inline-flex items-center py-3 pl-4 pr-12 text-white bg-gray-700 border border-gray-400"
      >
        <BiSearch className="w-5 h-5 mr-3 text-white" /> Quick search
      </button>

      <div className={classNames("relative z-10", { hidden: !open })}>
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm" />

        <div className="fixed inset-0">
          <div className="flex items-center justify-center min-h-full md:p-4">
            <OutsideClickHandler
              onOutsideClick={() => {
                setOpen(false);
              }}
            >
              <div className="absolute inset-0 w-full overflow-scroll sm:static sm:w-[600px] bg-gray-800 sm:rounded-xl">
                <QuickSearch setOpen={setOpen} inputRef={inputRef} />
              </div>
            </OutsideClickHandler>
          </div>
        </div>
      </div>
    </div>
  );
}
