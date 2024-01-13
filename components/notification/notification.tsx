import clsx from "clsx";

interface NotificationProps {
  message: string;
  type?: "standard" | "error" | "success" | "warning";
}

export default function Notification({
  message,
  type = "standard",
}: NotificationProps) {
  return (
    <div
      className={clsx(
        "p-4 mb-4 text-sm rounded-lg",
        type === "standard" && "bg-gray-200 text-gray-900",
        type === "error" && "bg-red-200 text-red-900",
        type === "success" && "bg-green-200 text-green-900",
        type === "warning" && "bg-yellow-200 text-yellow-900"
      )}
    >
      {message}
    </div>
  );
}
