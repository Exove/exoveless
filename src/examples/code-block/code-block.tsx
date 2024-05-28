"use client";

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function CodeBlock({ children }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-5 overflow-hidden">
      <button onClick={() => setOpen(!open)}>
        {open ? (
          <div className="flex items-center gap-1 text-sm">
            Code <ChevronUpIcon className="h-5 w-5" />
          </div>
        ) : (
          <div className="flex items-center gap-1 text-sm">
            Code <ChevronDownIcon className="h-5 w-5" />
          </div>
        )}
      </button>
      {open && <code className="">{children}</code>}
    </div>
  );
}
