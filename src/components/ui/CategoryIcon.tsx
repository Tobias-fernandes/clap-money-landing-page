// Square category icon, same as the app's CategoryIcon (size "lg").
import type { Category } from "@/constants/sampleData";
import { cn } from "@/lib/cn";
import { getCategoryStyle } from "./categoryStyle";

export function CategoryIcon({ category, className }: { category: Category; className?: string }) {
  const { tagClassName, Icon } = getCategoryStyle(category);
  return (
    <span aria-hidden="true" className={cn("flex size-8 flex-none items-center justify-center rounded-lg", tagClassName, className)}>
      <Icon className="size-4" strokeWidth={1.8} />
    </span>
  );
}
