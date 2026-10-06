// Button look of the app, copied verbatim from shared/ui/Button.variants
// (base, variants and sizes), so links and buttons here match it exactly.
import { cn } from "@/lib/cn";

const BASE =
  "inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-control font-medium whitespace-nowrap transition-[background-color,color,filter] focus-visible:ring-3 focus-visible:ring-brand-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";

const VARIANTS = {
  primary: "bg-brand-solid text-on-brand hover:brightness-108",
  secondary: "border border-border bg-surface text-content hover:bg-surface-hover",
  ghost: "text-content hover:bg-surface-hover",
  danger: "bg-expense-solid text-on-expense hover:brightness-108",
  success: "bg-income-solid text-on-income hover:brightness-108",
} as const;

const SIZES = {
  sm: "h-8 px-3 text-14",
  md: "h-9.5 px-4 text-14",
  lg: "h-10.5 px-5.5 text-15",
  /** Square button for a single icon (always pass aria-label). */
  icon: "size-8.5 p-0",
} as const;

export type ButtonVariant = keyof typeof VARIANTS;
export type ButtonSize = keyof typeof SIZES;

export function buttonClasses(variant: ButtonVariant = "primary", size: ButtonSize = "md", className?: string) {
  return cn(BASE, VARIANTS[variant], SIZES[size], className);
}
