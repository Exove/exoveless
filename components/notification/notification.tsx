import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useState } from "react";

interface NotificationProps {
  children: any;
  type?: "standard" | "error" | "success" | "warning";
}

export default function Notification({
  children,
  type = "standard",
}: NotificationProps) {
  const [open, setOpen] = useState(true);

  if (open)
    return (
      <div
        className={clsx(
          "rounded-lg border px-8 py-4",
          type === "standard" && " border-purple-600",
          type === "success" && " border-emerald-500",
          type === "warning" && " border-amber-500",
          type === "error" && " border-pink-600",
        )}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {type === "standard" && (
              <ExclamationCircleIcon className="h-7 w-7  text-purple-600" />
            )}
            {type === "success" && (
              <CheckCircleIcon className="h-7 w-7  text-emerald-500" />
            )}
            {type === "warning" && (
              <ExclamationCircleIcon className="h-7 w-7  text-amber-500" />
            )}
            {type === "error" && (
              <ExclamationTriangleIcon className="h-7 w-7  text-pink-600" />
            )}
            {children}
          </div>
          <button onClick={() => setOpen(false)}>
            <XMarkIcon className="h-7 w-7" />
          </button>
        </div>
      </div>
    );
}
