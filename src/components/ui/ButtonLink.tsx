// Link with the app's button look. External URLs (the app) render a plain <a>.
import Link from "next/link";
import { buttonClasses, type ButtonSize, type ButtonVariant } from "./buttonClasses";

interface ButtonLinkProps extends Omit<React.ComponentPropsWithoutRef<"a">, "href"> {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function ButtonLink({ href, variant, size, className, ...rest }: ButtonLinkProps) {
  const classes = buttonClasses(variant, size, className);
  if (href.startsWith("http")) return <a href={href} className={classes} {...rest} />;
  return <Link href={href} className={classes} {...rest} />;
}
