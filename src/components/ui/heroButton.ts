// The app landing's main call to action (features/landing/components/Hero):
// primary Button, 48px (52px at md), rounded-xl, 16-17px text, trailing arrow
// that nudges right on hover. Used by the hero and the closing section.
export const HERO_BUTTON_CLASSES =
  "group h-12 rounded-xl px-5 text-16 transition-[background-color,color,translate,scale] duration-160 ease-out motion-safe:active:scale-97 motion-reduce:transition-colors md:h-13 md:px-6 md:text-17 motion-safe:pointer-fine:hover:-translate-y-0.5";

export const HERO_BUTTON_ARROW_CLASSES =
  "size-4 transition-transform duration-160 ease-out motion-reduce:transition-none motion-safe:pointer-fine:group-hover:translate-x-0.5";

/** The text link beside it ("Como funciona"). */
export const HERO_LINK_CLASSES =
  "rounded-lg py-2 text-15 font-medium text-content-muted transition-colors duration-160 hover:text-brand-emphasis focus-visible:ring-3 focus-visible:ring-brand-ring focus-visible:outline-none md:text-17";
