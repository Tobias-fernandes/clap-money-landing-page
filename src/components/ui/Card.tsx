// Card surface, identical to the app's shared Card: rounded-xl, 1px border,
// surface background.
import { createElement } from "react";
import { cn } from "@/lib/cn";

type CardProps = React.HTMLAttributes<HTMLElement> & { as?: "div" | "section" | "article" | "li" };

export function Card({ as = "div", className, ...rest }: CardProps) {
  return createElement(as, { className: cn("min-w-0 rounded-xl border border-border bg-surface", className), ...rest });
}
