// Site footer: brand, section links, account links and legal pages.
import Link from "next/link";
import { CookiePreferencesButton } from "@/components/consent/CookiePreferencesButton";
import { Wordmark } from "@/components/ui/Wordmark";
import { APP_LINKS, NAV_LINKS } from "@/constants/site";

const LINK =
  "text-14 text-content-muted transition-colors duration-150 hover:text-content";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid grid-cols-1 max-w-300 gap-10 px-4 py-12 md:grid-cols-12 md:px-6">
        <div className="md:col-span-5">
          <Wordmark />
          <p className="mt-3 max-w-80 text-14 leading-relaxed text-content-muted">
            Controle financeiro pessoal: importe o extrato, organize o mês e
            veja o que vem pela frente.
          </p>
        </div>
        <nav
          aria-label="Rodapé"
          className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7"
        >
          <div>
            <h2 className="text-14 font-semibold">Produto</h2>
            <ul className="mt-3 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={LINK}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-14 font-semibold">Conta</h2>
            <ul className="mt-3 flex flex-col gap-2">
              <li>
                <a href={APP_LINKS.signUp} className={LINK}>
                  Criar conta grátis
                </a>
              </li>
              <li>
                <a href={APP_LINKS.login} className={LINK}>
                  Entrar
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-14 font-semibold">Legal</h2>
            <ul className="mt-3 flex flex-col gap-2">
              <li>
                <Link href="/privacidade" className={LINK}>
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos" className={LINK}>
                  Termos de Uso
                </Link>
              </li>
              <li>
                <CookiePreferencesButton
                  className={`${LINK} cursor-pointer text-left`}
                />
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="mx-auto max-w-300 border-t border-border px-4 py-5 text-13 text-content-faint md:px-6">
        © {new Date().getFullYear()} ClapMoney. Todos os direitos reservados.
      </div>
    </footer>
  );
}
