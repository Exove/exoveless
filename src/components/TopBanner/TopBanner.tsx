import { cn } from "@/lib/utils";

type TopBannerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function TopBanner({ children, className }: TopBannerProps) {
  return (
    <div
      role="status"
      className={cn("w-full bg-purple-700 py-2 text-center text-sm font-semibold text-white shadow", className)}
    >
      {children}
    </div>
  );
}
