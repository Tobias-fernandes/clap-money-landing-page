// "3/6" or "Mensal" badge of a recurring transaction, same as the app's.
import { Repeat } from "lucide-react";
import { cn } from "@/lib/cn";

export function RecurrenceBadge({ label, accessibleLabel, className }: { label: string; accessibleLabel: string; className?: string }) {
  return (
    <span
      title={accessibleLabel}
      className={cn(
        "inline-flex flex-none items-center gap-1 rounded-md bg-surface-strong px-1.5 py-px text-12 font-medium whitespace-nowrap text-content-muted tabular-nums",
        className,
      )}
    >
      <Repeat aria-hidden="true" className="size-3" strokeWidth={2} />
      <span aria-hidden="true">{label}</span>
      <span className="sr-only">{accessibleLabel}</span>
    </span>
  );
}
