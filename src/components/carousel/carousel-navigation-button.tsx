import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface NavigationButtonProps {
  direction: "prev" | "next";
  onClick: () => void;
}

export const NavigationButton = ({
  direction,
  onClick,
}: NavigationButtonProps) => {
  const Icon = direction === "prev" ? ChevronLeftIcon : ChevronRightIcon;
  const label = direction === "prev" ? "Scroll left" : "Scroll right";

  return (
    <button onClick={onClick} aria-label={label}>
      <Icon className="h-6 w-6 stroke-2" />
    </button>
  );
};
