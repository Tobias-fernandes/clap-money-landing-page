// Merges Tailwind class names, same helper as the app (shared/lib/cn):
// clsx for conditionals, tailwind-merge for conflicts (cn("px-4", "px-0")
// keeps "px-0"). The app's custom tokens are registered so text-13 (size)
// and text-content (color) are not mistaken for each other.
import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: ["11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "22", "24", "26", "30", "32", "34", "38", "40", "42", "44", "52", "60", "64", "68"],
      radius: ["control", "tag"],
      shadow: ["float", "float-dark", "segment", "fab", "crop-mask", "mockup"],
      tracking: ["heading", "display", "section", "hero"],
      ease: ["drawer", "out"],
    },
  },
});

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
