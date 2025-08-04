function Hamburger({ size }: { size: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={2}
      width={size || '100%'}
      height={size || '100%'}
    >
      <line x1={2} x2={22} y1={6} y2={6} />
      <line x1={2} x2={22} y1={12} y2={12} />
      <line x1={2} x2={22} y1={18} y2={18} />
    </svg>
  );
}

export { Hamburger };
