// Category chip with icon, same as the app's CategoryTag.
import type { Category } from "@/constants/sampleData";
import { cn } from "@/lib/cn";
import { getCategoryStyle } from "./categoryStyle";

export function CategoryTag({ category, className }: { category: Category; className?: string }) {
  const { tagClassName, Icon } = getCategoryStyle(category);
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.25 rounded-md px-2 py-0.75 text-13 font-medium whitespace-nowrap",
        tagClassName,
        className,
      )}
    >
      <Icon aria-hidden="true" className="size-3" strokeWidth={2} />
      {category.name}
    </span>
  );
}
