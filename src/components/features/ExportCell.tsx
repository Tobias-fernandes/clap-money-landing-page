// Feature: export. The app's two export actions and a preview of the CSV it
// writes (semicolon separator, decimal comma, ready for Brazilian sheets).
import { Download } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { buttonClasses } from "@/components/ui/buttonClasses";

const CSV = [
  "data;descrição;categoria;valor",
  "04/10/2026;Mercado Bom Preço;Mercado;-312,47",
  "06/10/2026;Geladeira 4/10;Casa;-239,90",
  "15/10/2026;Pix de Júlia;Transferências;150,00",
] as const;

export function ExportCell() {
  return (
    <Card className="flex h-full flex-col gap-5 p-5 md:p-6">
      <div>
        <h3 className="text-20 font-semibold tracking-heading">CSV e PDF quando quiser</h3>
        <p className="mt-2 text-15 leading-relaxed text-content-muted">Pronto para planilhas em português. Os dados são seus.</p>
      </div>
      <pre aria-label="Exemplo de arquivo CSV exportado" className="overflow-x-auto rounded-lg bg-surface-strong px-3.5 py-3 font-sans text-12 leading-6 text-content-muted tabular-nums">
        {CSV.join("\n")}
      </pre>
      <div className="mt-auto flex flex-wrap gap-2" aria-hidden>
        {["CSV", "PDF"].map((format) => (
          <span key={format} className={buttonClasses("secondary", "md", "pointer-events-none h-10 px-3.5")}>
            <Download className="size-3.75" strokeWidth={1.8} />
            {format}
          </span>
        ))}
      </div>
    </Card>
  );
}
