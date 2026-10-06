// /privacidade: legal document page (indexable, canonical on the landing domain).
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LegalDocument } from "@/components/layout/LegalDocument";
import { PRIVACY_POLICY } from "@/constants/legal";

export const metadata: Metadata = {
  title: PRIVACY_POLICY.title,
  description: "Como a ClapMoney coleta, usa e protege seus dados pessoais, de acordo com a LGPD.",
  alternates: { canonical: "/privacidade" },
  openGraph: { url: "/privacidade", title: PRIVACY_POLICY.title, description: "Como a ClapMoney coleta, usa e protege seus dados pessoais, de acordo com a LGPD." },
};

export default function Page() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <LegalDocument document={PRIVACY_POLICY} />
      </main>
      <Footer />
    </>
  );
}
