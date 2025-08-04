function ArrowDown({ size }: { size: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width={size || '100%'}
      height={size || '100%'}
    >
      <path d="M12 14L8 10H16L12 14Z"></path>
    </svg>
  );
}

export { ArrowDown };
