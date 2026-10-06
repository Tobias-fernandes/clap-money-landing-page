// /termos: legal document page (indexable, canonical on the landing domain).
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LegalDocument } from "@/components/layout/LegalDocument";
import { TERMS_OF_SERVICE } from "@/constants/legal";

export const metadata: Metadata = {
  title: TERMS_OF_SERVICE.title,
  description: "Regras de uso da ClapMoney: sua conta, seus dados, planos e responsabilidades.",
  alternates: { canonical: "/termos" },
  openGraph: { url: "/termos", title: TERMS_OF_SERVICE.title, description: "Regras de uso da ClapMoney: sua conta, seus dados, planos e responsabilidades." },
};

export default function Page() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <LegalDocument document={TERMS_OF_SERVICE} />
      </main>
      <Footer />
    </>
  );
}
