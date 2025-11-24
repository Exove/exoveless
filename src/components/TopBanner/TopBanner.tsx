type TopBannerProps = {
  label: string;
  className?: string;
};

export default function TopBanner({ label, className }: TopBannerProps) {
  if (!label) return null;

  return (
    <div
      role="status"
      className={`w-full bg-purple-700 py-2 text-center text-sm font-semibold text-white shadow ${className ?? ""}`}
    >
      {label}
    </div>
  );
}

export { TopBanner };

