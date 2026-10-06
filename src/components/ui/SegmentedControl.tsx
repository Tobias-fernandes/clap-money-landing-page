// Segmented control, same markup and classes as the app's shared
// SegmentedControl.
import { cn } from "@/lib/cn";

interface SegmentedControlProps<T extends string> {
  options: ReadonlyArray<{ value: T; label: string }>;
  value: T;
  onChange: (value: T) => void;
  label: string;
  className?: string;
}

export function SegmentedControl<T extends string>({ options, value, onChange, label, className }: SegmentedControlProps<T>) {
  return (
    <div role="group" aria-label={label} className={cn("flex w-fit gap-0.5 rounded-control border border-border bg-surface-strong p-0.75", className)}>
      {options.map((option) => {
        const isSelected = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={isSelected}
            onClick={() => onChange(option.value)}
            className={cn(
              "cursor-pointer rounded-tag px-3 py-1.25 text-14 font-medium whitespace-nowrap transition-colors focus-visible:ring-3 focus-visible:ring-brand-ring focus-visible:outline-none",
              isSelected ? "bg-surface text-brand-emphasis shadow-segment" : "text-content-muted hover:text-content",
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
