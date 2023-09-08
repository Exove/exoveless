import classNames from "classnames";

interface NotificationProps {
  message: string;
  type?: "standard" | "error" | "success" | "warning";
}

export default function Notification({
  message,
  type = "standard",
}: NotificationProps) {
  return (
    <>
      <div
        className={classNames(
          "p-4",
          "mb-4",
          "text-sm",
          "rounded-lg",
          {
            "bg-gray-200": type === "standard",
            "text-gray-900": type === "standard",
          },
          {
            "bg-red-200": type === "error",
            "text-red-900": type === "error",
          },
          {
            "bg-green-200": type === "success",
            "text-green-900": type === "success",
          },
          {
            "bg-yellow-200": type === "warning",
            "text-yellow-900": type === "warning",
          }
        )}
      >
        {message}
      </div>
    </>
  );
}
