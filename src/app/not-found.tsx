// 404 page with the way back to the landing.
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ButtonLink } from "@/components/ui/ButtonLink";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="conteudo" className="mx-auto flex max-w-300 flex-col items-start px-4 py-24 md:px-6 lg:py-32">
        <p className="rounded-md bg-expense-tint px-2 py-0.5 text-13 font-medium text-expense">Erro 404</p>
        <h1 className="mt-4 max-w-160 text-38 leading-[1.08] font-bold tracking-section md:text-52">Não encontramos esta página.</h1>
        <p className="mt-4 max-w-120 text-17 leading-relaxed text-content-muted">O endereço pode ter mudado ou ter sido digitado errado.</p>
        <ButtonLink href="/" size="lg" className="mt-8">
          Voltar para o início
        </ButtonLink>
      </main>
      <Footer />
    </>
  );
}
