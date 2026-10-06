// Section title and intro, one scale for every section of the page.
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  id: string;
  title: string;
  intro?: string;
  className?: string;
}

export function SectionHeading({ id, title, intro, className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-180", className)}>
      <h2 id={id} className="text-32 leading-[1.08] font-bold tracking-section md:text-42">
        {title}
      </h2>
      {intro && <p className="mt-4 max-w-150 text-17 leading-relaxed text-content-muted md:text-18">{intro}</p>}
    </div>
  );
}
