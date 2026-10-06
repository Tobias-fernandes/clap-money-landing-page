// "Recursos": six cells, each a small working piece of the app.
import { SECTION_IDS } from "@/constants/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BalanceChartCell } from "@/components/features/BalanceChartCell";
import { CategoriesCell } from "@/components/features/CategoriesCell";
import { ExportCell } from "@/components/features/ExportCell";
import { HideValuesCell } from "@/components/features/HideValuesCell";
import { MonthStartCell } from "@/components/features/MonthStartCell";
import { ShortcutCell } from "@/components/features/ShortcutCell";

export function Features() {
  return (
    <section id={SECTION_IDS.features} aria-labelledby="features-title" className="border-t border-border">
      <div className="mx-auto max-w-300 px-4 py-20 md:px-6 lg:py-28">
        <SectionHeading id="features-title" title="Os detalhes que fazem voltar todo mês." />
        <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-6">
          <div className="md:col-span-2 lg:col-span-3 lg:row-span-2">
            <HideValuesCell />
          </div>
          <div className="lg:col-span-3">
            <MonthStartCell />
          </div>
          <div className="lg:col-span-3">
            <BalanceChartCell />
          </div>
          <div className="lg:col-span-2">
            <ExportCell />
          </div>
          <div className="lg:col-span-2">
            <CategoriesCell />
          </div>
          <div className="md:col-span-2 lg:col-span-2">
            <ShortcutCell />
          </div>
        </div>
        <p className="mt-4 text-13 text-content-faint">Dados de exemplo</p>
      </div>
    </section>
  );
}
