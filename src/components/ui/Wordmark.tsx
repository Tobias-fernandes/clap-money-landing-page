// Brand lockup used in the app's top bar: wallet mark + "ClapMoney".
import Link from "next/link";
import { BrandIcon } from "./BrandIcon";

export function Wordmark({ large = false }: { large?: boolean }) {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 rounded-lg text-brand-emphasis focus-visible:ring-3 focus-visible:ring-brand-ring focus-visible:outline-none"
    >
      <BrandIcon className={large ? "size-6.5" : undefined} />
      <span className={large ? "text-19 font-semibold tracking-heading" : "text-18 font-semibold tracking-heading"}>ClapMoney</span>
    </Link>
  );
}
