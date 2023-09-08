interface PlusMinusIconProps {
  verticalClassName?: string;
  horizontalClassName?: string;
}

export default function PlusMinusIcon({
  verticalClassName,
  horizontalClassName,
}: PlusMinusIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160">
      <rect
        className={`duration-200 origin-center ${verticalClassName}`}
        x="70"
        width="20"
        height="160"
      />
      <rect
        className={`duration-200 origin-center ${horizontalClassName}`}
        y="70"
        width="160"
        height="20"
      />
    </svg>
  );
}
