import clsx from "clsx";

interface GridProps {
  children: React.ReactNode;
  cols: 2 | 3 | 4 | 5 | 6;
}

export function Grid({ children, cols }: GridProps) {
  return (
    <div
      className={clsx(
        "grid grid-cols-1 gap-3",
        cols === 2 && "lg:grid-cols-2",
        cols === 3 && "md:grid-cols-2 lg:grid-cols-3",
        cols === 4 && "md:grid-cols-2 lg:grid-cols-4",
        cols === 5 && "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
        cols === 6 && "sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6",
      )}
    >
      {children}
    </div>
  );
}
