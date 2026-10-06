// Home page: the landing, top to bottom, plus its structured data
// (SoftwareApplication with the free offer, FAQPage).
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/hero/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Installments } from "@/components/sections/Installments";
import { SpendingGoal } from "@/components/sections/SpendingGoal";
import { Features } from "@/components/sections/Features";
import { DataPrivacy } from "@/components/sections/DataPrivacy";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { FAQ } from "@/constants/faq";
import { APP_LINKS, SITE, SITE_URL } from "@/constants/site";
import { toJsonLd } from "@/lib/jsonLd";

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#app`,
      name: SITE.name,
      description: SITE.description,
      url: SITE_URL,
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      inLanguage: SITE.language,
      installUrl: APP_LINKS.signUp,
      publisher: { "@id": `${SITE_URL}/#organization` },
      featureList: [
        "Importação de extrato OFX",
        "Categorias aprendidas com o histórico",
        "Detecção de transações duplicadas",
        "Parcelas e mensalidades projetadas nos próximos meses",
        "Meta de gastos com alertas",
        "Exportação em CSV e PDF",
      ],
      // Only the free plan has a decided price (see constants/plans.ts).
      offers: { "@type": "Offer", price: "0", priceCurrency: "BRL", url: APP_LINKS.signUp },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: FAQ.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only z-50 rounded-control bg-brand-solid px-4 py-2 font-semibold text-on-brand focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <HowItWorks />
        <Installments />
        <SpendingGoal />
        <Features />
        <DataPrivacy />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(pageJsonLd) }} />
    </>
  );
}
