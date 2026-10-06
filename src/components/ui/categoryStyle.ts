// Category look of the app: the 10 tag color pairs and the 16 icons, in the
// same order as ../clapMoney (categoryStyles.constants, tag.constants).
import {
  Book,
  Briefcase,
  Car,
  Coffee,
  Ellipsis,
  Gift,
  Heart,
  House,
  Laptop,
  Plane,
  Receipt,
  Shirt,
  ShoppingCart,
  Smartphone,
  Star,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import type { Category } from "@/constants/sampleData";

const TAG_CLASSES = [
  "bg-tag-0 text-on-tag-0",
  "bg-tag-1 text-on-tag-1",
  "bg-tag-2 text-on-tag-2",
  "bg-tag-3 text-on-tag-3",
  "bg-tag-4 text-on-tag-4",
  "bg-tag-5 text-on-tag-5",
  "bg-tag-6 text-on-tag-6",
  "bg-tag-7 text-on-tag-7",
  "bg-tag-8 text-on-tag-8",
  "bg-tag-9 text-on-tag-9",
] as const;

const CATEGORY_ICONS: LucideIcon[] = [
  Briefcase,
  Laptop,
  TrendingUp,
  ShoppingCart,
  Car,
  House,
  Receipt,
  Star,
  Heart,
  Ellipsis,
  Gift,
  Plane,
  Book,
  Smartphone,
  Shirt,
  Coffee,
];

export function getCategoryStyle(category: Category) {
  return {
    tagClassName: TAG_CLASSES[category.tag],
    Icon: CATEGORY_ICONS[category.icon] ?? Ellipsis,
  };
}
