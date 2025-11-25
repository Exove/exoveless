"use client";

import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      toastOptions={{
        classNames: {
          toast: "bg-white border border-gray-300 text-black [&:not([data-type])]:bg-white",
          error: "!bg-red-50 !border-red-300 !text-red-900",
          success: "!bg-emerald-50 !border-emerald-300 !text-emerald-900",
          warning: "!bg-amber-50 !border-amber-300 !text-amber-900",
          info: "!bg-blue-50 !border-blue-300 !text-blue-900",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
