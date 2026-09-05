function Cross() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
      <line x1="10" y1="0" x2="10" y2="20" stroke="currentColor" strokeWidth="1" />
      <line x1="0" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

const markClass = "pointer-events-none fixed z-[90] text-neutral-400/85";

export default function RegistrationMarks() {
  return (
    <>
      <span aria-hidden className={`${markClass} left-2 top-2`}>
        <Cross />
      </span>
      <span aria-hidden className={`${markClass} right-2 top-2`}>
        <Cross />
      </span>
      <span aria-hidden className={`${markClass} bottom-2 left-2`}>
        <Cross />
      </span>
      <span aria-hidden className={`${markClass} bottom-2 right-2`}>
        <Cross />
      </span>
    </>
  );
}
