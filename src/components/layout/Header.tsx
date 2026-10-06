// Sticky top bar in the app's style: wordmark, section links, "Entrar" and
// the sign-up action. On phones the links move into MobileMenu.
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Wordmark } from "@/components/ui/Wordmark";
import { APP_LINKS, NAV_LINKS } from "@/constants/site";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface-muted">
      <div className="mx-auto flex h-16 max-w-300 items-center gap-4 px-4 md:gap-6 md:px-6">
        <Wordmark large />

        <nav aria-label="Seções" className="hidden flex-1 justify-center lg:flex">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-lg px-2.5 py-2 text-16 text-content-muted transition-colors duration-160 hover:text-content focus-visible:ring-3 focus-visible:ring-brand-ring focus-visible:outline-none xl:px-3"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <ButtonLink href={APP_LINKS.login} variant="ghost" className="h-10 text-16 hover:bg-transparent hover:text-brand-emphasis max-md:hidden">
            Entrar
          </ButtonLink>
          <ButtonLink href={APP_LINKS.signUp} className="h-10 text-16 max-sm:h-8 max-sm:px-3 max-sm:text-14">
            Criar conta grátis
          </ButtonLink>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
