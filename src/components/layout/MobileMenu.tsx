"use client";
// Phone and tablet navigation: a panel under the top bar with the section
// links, "Entrar" and the sign-up action. Closes on Escape, on link click and
// when the screen gets wide.
import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { buttonClasses } from "@/components/ui/buttonClasses";
import { APP_LINKS, NAV_LINKS } from "@/constants/site";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    const wide = window.matchMedia("(min-width: 62.5rem)");
    const onWide = () => wide.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    wide.addEventListener("change", onWide);
    return () => {
      window.removeEventListener("keydown", onKey);
      wide.removeEventListener("change", onWide);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className={buttonClasses("secondary", "icon")}
      >
        <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
        {open ? <X aria-hidden className="size-4.5" strokeWidth={2} /> : <Menu aria-hidden className="size-4.5" strokeWidth={2} />}
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="absolute inset-x-0 top-16 border-b border-border bg-surface px-4 pt-2 pb-5 shadow-float transition-[opacity,translate] duration-200 ease-out starting:-translate-y-2 starting:opacity-0 dark:shadow-float-dark md:px-6"
      >
        <nav aria-label="Seções">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setOpen(false)} className="flex h-12 items-center border-b border-border text-16">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <a href={APP_LINKS.login} className={buttonClasses("secondary", "lg", "h-11.5")}>
            Entrar
          </a>
          <a href={APP_LINKS.signUp} className={buttonClasses("primary", "lg", "h-11.5")}>
            Criar conta grátis
          </a>
        </div>
      </div>
    </div>
  );
}
