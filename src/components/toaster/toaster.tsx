"use client";

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
      {...props}
    />
  );
};

export { Toaster };
