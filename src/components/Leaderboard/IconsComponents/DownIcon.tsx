const TopIcon = ({
  width,
  height,
  color,
}: {
  width: number;
  height: number;
  color: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 15L1 9M7 15L13 9M7 15L7 0.999999"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TopIcon;
