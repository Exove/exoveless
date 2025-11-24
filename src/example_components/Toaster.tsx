"use client";

import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      toastOptions={{
        classNames: {
          toast:
            "bg-gray-900 border border-gray-700 text-gray-100 [&:not([data-type])]:bg-gray-900",
          error: "!bg-red-900 !border-red-700 !text-red-100",
          success: "!bg-emerald-900 !border-emerald-700 !text-emerald-100",
          warning: "!bg-yellow-900 !border-yellow-700 !text-yellow-100",
          info: "!bg-blue-900 !border-blue-700 !text-blue-100",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
