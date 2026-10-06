// Privacy: what happens to money data, shown as the app's settings rows
// (Configurações › Dados e conta). Every row is backed by the privacy policy.
import Link from "next/link";
import { ArrowRight, Download, Lock } from "lucide-react";
import { SECTION_IDS } from "@/constants/site";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buttonClasses } from "@/components/ui/buttonClasses";

const ROWS = [
  { title: "Conexão com o banco", body: "Nenhuma. Você envia o extrato em OFX e nenhuma senha bancária é pedida.", status: "Desligada" },
  { title: "Arquivo do extrato", body: "Lido apenas para extrair as transações. Depois, descartado.", status: "Não fica guardado" },
  { title: "Anúncios e venda de dados", body: "Seus dados não são vendidos nem usados para publicidade.", status: "Nunca" },
] as const;

export function DataPrivacy() {
  return (
    <section id={SECTION_IDS.privacy} aria-labelledby="privacy-title" className="border-t border-border">
      <div className="mx-auto grid max-w-300 gap-10 px-4 py-20 md:px-6 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-5">
          <SectionHeading
            id="privacy-title"
            title="Sua senha do banco nunca passa por aqui."
            intro="Os dados são seus: dá para levar tudo embora ou apagar a conta quando quiser."
          />
          <Link
            href="/privacidade"
            className="mt-6 inline-flex items-center gap-1.5 rounded-md text-15 font-medium text-brand-emphasis hover:underline focus-visible:ring-3 focus-visible:ring-brand-ring focus-visible:outline-none"
          >
            Ler a política de privacidade
            <ArrowRight aria-hidden className="size-4" strokeWidth={2} />
          </Link>
        </div>

        <Card className="overflow-hidden lg:col-span-7">
          <div className="flex items-center gap-2 border-b border-border px-5 py-4">
            <Lock aria-hidden className="size-4 text-brand-emphasis" strokeWidth={1.8} />
            <p className="text-16 font-semibold">Dados e privacidade</p>
          </div>
          <ul>
            {ROWS.map((row) => (
              <li key={row.title} className="flex flex-col gap-2 border-b border-border px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                <div className="min-w-0">
                  <h3 className="text-15 font-medium">{row.title}</h3>
                  <p className="mt-0.5 text-14 leading-relaxed text-content-muted">{row.body}</p>
                </div>
                <span className="w-fit flex-none rounded-md bg-brand-50 px-2 py-0.75 text-13 font-medium text-brand-emphasis">{row.status}</span>
              </li>
            ))}
            <li className="flex flex-col gap-3 border-b border-border px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <div>
                <h3 className="text-15 font-medium">Exportar transações</h3>
                <p className="mt-0.5 text-14 leading-relaxed text-content-muted">Em CSV, pronto para planilhas, ou em PDF.</p>
              </div>
              <span aria-hidden className="flex flex-none gap-2">
                {["CSV", "PDF"].map((format) => (
                  <span key={format} className={buttonClasses("secondary", "md", "pointer-events-none h-10 px-3.5")}>
                    <Download className="size-3.75" strokeWidth={1.8} />
                    {format}
                  </span>
                ))}
              </span>
            </li>
            <li className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <div>
                <h3 className="text-15 font-medium">Excluir conta</h3>
                <p className="mt-0.5 text-14 leading-relaxed text-content-muted">Apaga a conta e todos os seus dados.</p>
              </div>
              <span
                aria-hidden
                className={buttonClasses("secondary", "md", "pointer-events-none w-fit flex-none border-expense bg-transparent text-expense hover:bg-expense-tint")}
              >
                Excluir conta
              </span>
            </li>
          </ul>
        </Card>
      </div>
    </section>
  );
}
