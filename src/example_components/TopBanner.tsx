type TopBannerProps = {
  label: string;
};

export default function TopBanner({ label }: TopBannerProps) {
  return (
    <div
      role="status"
      className="fw-full bg-gray-400 py-2 text-center text-sm font-medium text-black shadow-md"
    >
      {label}
    </div>
  );
}
