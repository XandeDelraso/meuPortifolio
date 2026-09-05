export default function Tag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-300 px-3 py-1 text-xs font-medium tracking-wide text-neutral-600">
      {label}
    </span>
  );
}
