// "Importar extrato" as it looks in the app, at a given step:
// 0 the upload dialog reading the file, 1 the review with categories,
// 2 duplicates unchecked, 3 everything reviewed and ready to import.
// Changes are CSS transitions, so scrolling back and forth retargets.
// Decorative: the step texts carry the same information.
import { Check, Copy, FileText, Lock, Sparkles, Upload, X } from "lucide-react";
import { IMPORT_ROWS, type ImportRow } from "@/constants/sampleData";
import { Card } from "@/components/ui/Card";
import { CategoryTag } from "@/components/ui/CategoryTag";
import { buttonClasses } from "@/components/ui/buttonClasses";
import { formatSigned } from "@/lib/money";
import { cn } from "@/lib/cn";

const IMPORTED = IMPORT_ROWS.filter((row) => row.source !== "duplicada").length;

function Source({ row, step }: { row: ImportRow; step: number }) {
  if (row.source === "duplicada" && step >= 2) {
    return (
      <span className="inline-flex flex-none items-center gap-1 rounded-md border border-border-strong bg-surface-muted px-1.75 py-0.75 text-12 font-medium text-content-muted">
        <Copy aria-hidden className="size-3" strokeWidth={2} />
        Já existe
      </span>
    );
  }
  if (row.source === "revisar") {
    return step >= 3 ? null : (
      <span className="flex flex-none items-center gap-1 rounded-md bg-warn-tint px-1.75 py-0.5 text-12 font-medium whitespace-nowrap text-warn-text">
        <span aria-hidden className="size-1.5 rounded-full bg-warn" />
        Revisar
      </span>
    );
  }
  if (row.source === "aprendida" || row.source === "duplicada") {
    return (
      <span className="flex flex-none items-center gap-0.75 text-12 font-medium whitespace-nowrap text-brand-emphasis">
        <Sparkles aria-hidden className="size-3" strokeWidth={2} />
        aprendida
      </span>
    );
  }
  return <span className="flex-none text-12 whitespace-nowrap text-content-faint">sugerida</span>;
}

function UploadDialog({ visible }: { visible: boolean }) {
  return (
    <div
      className="col-start-1 row-start-1 transition-[opacity,filter,scale] duration-300 ease-out motion-reduce:transition-none"
      style={{ opacity: visible ? 1 : 0, filter: visible ? "blur(0)" : "blur(4px)", scale: visible ? "1" : "0.98" }}
    >
      <Card className="mx-auto max-w-130 p-5.5 shadow-float dark:shadow-float-dark">
        <div className="flex items-center justify-between">
          <p className="text-18 font-semibold">Importar extrato</p>
          <X aria-hidden className="size-4.5 text-content-muted" strokeWidth={2} />
        </div>
        <div className="mt-4 flex flex-col items-center gap-3 rounded-xl border-2 border-dashed border-brand-emphasis bg-brand-50 px-5 py-8 text-center">
          <span className="flex size-11.5 items-center justify-center rounded-xl bg-surface text-brand-emphasis">
            <Upload className="size-5.5" strokeWidth={1.8} />
          </span>
          <span className="max-w-70 text-15 font-medium">
            Arraste seu extrato aqui ou <span className="text-brand-emphasis">clique para escolher</span>
          </span>
          <span className="rounded-md bg-surface px-2 py-0.75 text-12 font-semibold tracking-wide text-brand-emphasis">Arquivo OFX</span>
        </div>
        <div className="mt-4 rounded-xl border border-border p-3.5">
          <div className="flex items-center gap-2.5 text-14">
            <FileText className="size-4 text-brand-emphasis" strokeWidth={1.8} />
            <span className="font-medium">extrato-outubro.ofx</span>
            <span className="ml-auto text-13 text-content-faint">Lendo seu extrato…</span>
          </div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-track">
            <div className="h-full w-2/5 rounded-full bg-brand-solid motion-safe:animate-indeterminate" />
          </div>
        </div>
        <p className="mt-4 flex items-start gap-2 text-13 text-content-muted">
          <Lock className="mt-0.5 size-3.5 flex-none" strokeWidth={1.8} />O arquivo é lido apenas para extrair as transações e não fica armazenado.
        </p>
      </Card>
    </div>
  );
}

function ReviewDialog({ step }: { step: number }) {
  const visible = step >= 1;
  return (
    <div
      className="col-start-1 row-start-1 transition-[opacity,filter,scale] duration-300 ease-out motion-reduce:transition-none"
      style={{ opacity: visible ? 1 : 0, filter: visible ? "blur(0)" : "blur(4px)", scale: visible ? "1" : "0.98" }}
    >
      <Card className="overflow-hidden shadow-float dark:shadow-float-dark">
        <header className="flex flex-col gap-3.5 border-b border-border px-5 pt-5 pb-3">
          <div className="flex items-start justify-between gap-3">
            <div className="flex min-w-0 flex-col gap-1">
              <p className="text-18 font-semibold tracking-heading md:text-20">Revisar importação</p>
              <span className="truncate text-14 text-content-muted">extrato-outubro.ofx</span>
            </div>
            <span className="flex size-8.5 flex-none items-center justify-center rounded-lg text-content-muted">
              <X className="size-4.5" strokeWidth={1.8} />
            </span>
          </div>
          <ul className="flex flex-wrap gap-1.5 text-14 font-medium">
            <li className="rounded-lg border border-border bg-surface-muted px-2.5 py-1">6 transações</li>
            <li className="rounded-lg bg-income-tint px-2.5 py-1 text-income-solid">2 entradas</li>
            <li className="rounded-lg bg-expense-tint px-2.5 py-1 text-expense">4 saídas</li>
            <li className="rounded-lg bg-brand-50 px-2.5 py-1 text-brand-emphasis">2 aprendidas</li>
          </ul>
          <div className="-mx-1 flex [scrollbar-width:none] gap-1 overflow-x-auto px-1">
            {[
              { label: "Todas", count: 6, active: step === 1 || step === 3, dot: false },
              { label: "Precisam de atenção", count: step >= 3 ? 0 : 1, active: false, dot: step < 3 },
              { label: "Duplicadas", count: 1, active: step === 2, dot: false },
            ].map((tab) => (
              <span
                key={tab.label}
                className={cn(
                  "flex h-8.5 flex-none items-center gap-1.75 rounded-lg border px-3 text-14 font-medium whitespace-nowrap transition-colors duration-200",
                  tab.active ? "border-content bg-content text-surface" : "border-border text-content-muted",
                )}
              >
                {tab.dot && <span className="size-1.75 rounded-full bg-warn" />}
                {tab.label}
                <span className={cn("text-13 font-normal", tab.active ? "text-surface" : "text-content-faint")}>{tab.count}</span>
              </span>
            ))}
          </div>
        </header>
        <ul>
          {IMPORT_ROWS.map((row, index) => {
            const excluded = step >= 2 && row.source === "duplicada";
            const category = step >= 3 && row.resolved ? row.resolved : row.category;
            return (
              <li
                key={row.raw}
                className={cn(
                  "grid min-h-13 grid-cols-[1.25rem_2.75rem_1fr_auto] items-center gap-x-2.5 border-b border-border px-5 py-2 transition-colors duration-300 last:border-b-0",
                  excluded && "bg-surface-muted",
                )}
              >
                <span
                  className={cn(
                    "flex size-4.5 flex-none items-center justify-center rounded-md border-2 text-on-brand transition-colors duration-200",
                    excluded ? "border-border-strong bg-transparent" : "border-brand-solid bg-brand-solid",
                  )}
                >
                  <Check className={cn("size-3", excluded && "invisible")} strokeWidth={3} />
                </span>
                <span className="text-13 text-content-muted tabular-nums">{row.date}</span>
                <span className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1" style={{ transitionDelay: `${index * 40}ms` }}>
                  <span className={cn("truncate text-14 transition-opacity duration-300", excluded && "text-content-muted line-through")}>
                    {row.description}
                  </span>
                  <CategoryTag category={category} className={cn("transition-opacity duration-300", excluded && "opacity-50")} />
                  <Source row={row} step={step} />
                </span>
                <span
                  className={cn(
                    "text-14 font-medium whitespace-nowrap tabular-nums transition-opacity duration-300",
                    row.cents < 0 ? "text-expense" : "text-income",
                    excluded && "opacity-45",
                  )}
                >
                  {formatSigned(row.cents)}
                </span>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center justify-between gap-3 border-t border-border bg-surface px-5 py-3.5">
          <span className="text-13 text-content-muted">
            {step >= 2 ? `${IMPORTED} de 6 selecionadas` : "6 de 6 selecionadas"}
          </span>
          <span className={buttonClasses("primary", "md", cn("pointer-events-none transition-opacity", step < 3 && "opacity-50"))}>
            {step >= 3 && <Check className="size-4" strokeWidth={2} />}
            Importar {step >= 2 ? IMPORTED : 6} transações
          </span>
        </div>
      </Card>
    </div>
  );
}

/**
 * `static` renders only the dialog of this step (phones, one preview per
 * step); otherwise both dialogs stay mounted and crossfade (pinned preview).
 */
export function ImportPreview({ step, className, static: isStatic = false }: { step: number; className?: string; static?: boolean }) {
  return (
    <div aria-hidden="true" className={cn("grid grid-cols-[minmax(0,1fr)]", className)}>
      {(!isStatic || step === 0) && <UploadDialog visible={step === 0} />}
      {(!isStatic || step > 0) && <ReviewDialog step={step} />}
    </div>
  );
}
