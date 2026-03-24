interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export function Logo({ width = 32, height = 32, className }: LogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 140 80"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M65.1485 50.05L39.974 79.4839L0 0H39.974L65.1485 50.05Z" />
      <path d="M114.652 50.05L89.4831 79.4839L49.5039 0H89.4831L114.652 50.05Z" />
      <path d="M119.149 39.7419H118.994L99.0068 0H119.149C130.122 0 139.022 8.8951 139.022 19.8735C139.022 30.8468 130.127 39.7471 119.149 39.7471V39.7419Z" />
    </svg>
  );
}
