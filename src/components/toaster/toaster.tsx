"use client";

import { CheckCircleIcon } from "@heroicons/react/24/outline";
import {
  ExclamationCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      toastOptions={{
        classNames: {
          toast: "bg-gray-100 border border-gray-500 text-gray-900",
          error: "border-red-500 bg-red-50 text-red-900",
          success: "border-green-500 bg-green-50 text-green-900",
          warning: "border-yellow-500 bg-yellow-50 text-yellow-900",
          info: "border-blue-500 bg-blue-50 text-blue-900",
        },
      }}
      icons={{
        success: <CheckCircleIcon className="h-5 w-5 text-green-500" />,
        error: <ExclamationCircleIcon className="h-5 w-5 text-red-500" />,
        warning: (
          <ExclamationTriangleIcon className="h-5 w-5 text-yellow-500" />
        ),
        info: <InformationCircleIcon className="h-5 w-5 text-blue-500" />,
        loading: (
          <ArrowPathIcon className="h-5 w-5 animate-spin text-blue-500" />
        ),
      }}
      {...props}
    />
  );
};

export { Toaster };
