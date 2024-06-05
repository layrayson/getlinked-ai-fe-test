type Props = {
  strokeWidth?: number;
  radius?: number;
  progress: number;
};
export const CircularProgress = ({
  strokeWidth = 2,
  radius = 16.5,
  progress,
}: Props) => {
  const diameter = radius * 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;
  return (
    <div className="relative flex items-center justify-center w-4 h-4 bg-transparent">
      <svg
        width={diameter + strokeWidth}
        height={diameter + strokeWidth}
        className="absolute top-0 left-0"
      >
        <circle
          className="text-transparent"
          strokeWidth={strokeWidth}
          stroke="transparent"
          fill="transparent"
          r={radius}
          cx={radius + strokeWidth / 2}
          cy={radius + strokeWidth / 2}
        />
        <circle
          className={progress < 30 ? "text-red-500" : "text-primary-500"}
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={radius + strokeWidth / 2}
          cy={radius + strokeWidth / 2}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
            transition: "stroke-dashoffset 0.35s",
            transform: "rotate(-90deg)",
            transformOrigin: "50% 50%",
          }}
        />
      </svg>
    </div>
  );
};
