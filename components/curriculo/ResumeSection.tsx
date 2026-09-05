import type { ReactNode } from "react";
import Reveal from "@/components/ui/Reveal";

export default function ResumeSection({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <Reveal as="section" className="border-t border-neutral-200 py-14 first:border-t-0 first:pt-0">
      <div className="grid gap-6 md:grid-cols-[minmax(0,220px)_1fr] md:gap-12">
        <div className="flex items-baseline gap-3 md:flex-col md:items-start md:gap-2">
          <span className="font-mono text-xs text-neutral-600">{index}</span>
          <h2 className="font-serif text-2xl text-ink md:text-3xl">
            {title}
          </h2>
        </div>
        <div>{children}</div>
      </div>
    </Reveal>
  );
}
