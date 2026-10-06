"use client";
// "Parcelas": the app's "Repetir" field (same SegmentedControl, same "Em [n]
// parcelas mensais" input and summary) driving one row of months. Rules are
// the app's: the leftover cents of the split go in the first installment.
import { useId, useState } from "react";
import { Laptop } from "lucide-react";
import { MONTHS_AHEAD } from "@/constants/sampleData";
import { SECTION_IDS } from "@/constants/site";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SegmentedControl } from "@/components/ui/SegmentedControl";
import { formatMoney, splitInstallments } from "@/lib/money";
import { cn } from "@/lib/cn";

type Repeat = "none" | "installments" | "monthly";

const REPEAT_OPTIONS = [
  { value: "none", label: "Não repete" },
  { value: "installments", label: "Parcelado" },
  { value: "monthly", label: "Mensal" },
] as const satisfies ReadonlyArray<{ value: Repeat; label: string }>;

const AMOUNT_LABELS: Record<Repeat, string> = { none: "Valor", installments: "Valor total", monthly: "Valor por mês" };

const PURCHASE_CENTS = 239999;
const MAX_INSTALLMENTS = 72;
/** Months shown in the row (3 on phones); the rest are summarised as "+N". */
const VISIBLE_MONTHS = 6;
const MOBILE_MONTHS = 3;
const MONTH_SHORT = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];

/** "última em jul/2027": the first installment is in October 2026. */
function lastMonthLabel(count: number) {
  const index = 9 + count - 1;
  return `${MONTH_SHORT[index % 12]}/${2026 + Math.floor(index / 12)}`;
}

function buildRow(repeat: Repeat, count: number) {
  if (repeat === "none") return { values: [PURCHASE_CENTS], total: 1 };
  if (repeat === "monthly") return { values: Array<number>(VISIBLE_MONTHS).fill(PURCHASE_CENTS), total: Infinity };
  return { values: splitInstallments(PURCHASE_CENTS, count), total: count };
}

export function Installments() {
  const [repeat, setRepeat] = useState<Repeat>("installments");
  const [count, setCount] = useState(10);
  const countId = useId();
  const safeCount = Math.min(MAX_INSTALLMENTS, Math.max(2, count || 2));
  const row = buildRow(repeat, safeCount);
  const shown = row.values.slice(0, VISIBLE_MONTHS);
  const parts = splitInstallments(PURCHASE_CENTS, safeCount);
  const regular = parts[parts.length - 1] ?? 0;
  const firstNote = parts[0] !== regular ? ` (1ª de ${formatMoney(parts[0] ?? 0)})` : "";
  const summary =
    repeat === "installments"
      ? `${safeCount}x de ${formatMoney(regular)}${firstNote} · última em ${lastMonthLabel(safeCount)}`
      : repeat === "monthly"
        ? "Todo mês no dia 6, até você encerrar"
        : "";
  const rowLabel = (index: number) => (repeat === "installments" ? `${index + 1}/${safeCount}` : repeat === "monthly" ? "Mensal" : "Uma vez");

  function renderMore(visible: number, className: string) {
    if (row.total !== Infinity && row.total <= visible) return null;
    const rest = row.total === Infinity ? null : row.total - visible;
    return (
      <li className={className}>
        <span className="text-16 font-semibold">{rest === null ? "…" : `+${rest}`}</span>
        <span className="text-13">{rest === null ? "todo mês" : rest === 1 ? "mês" : "meses"}</span>
      </li>
    );
  }

  return (
    <section id={SECTION_IDS.installments} aria-labelledby="installments-title" className="border-t border-border">
      <div className="mx-auto max-w-300 px-4 py-20 md:px-6 lg:py-28">
        <SectionHeading
          id="installments-title"
          title="Parcelou? Os próximos meses já sabem."
          intro="Informe o total e o número de parcelas. Cada mês recebe a sua, e o saldo previsto já conta com ela."
        />

        <Card className="mt-12 p-5 md:p-7">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[auto_1fr] md:gap-10">
            <div className="flex items-center gap-3 md:self-start">
              <span className="flex size-9 items-center justify-center rounded-control bg-tag-1 text-on-tag-1">
                <Laptop aria-hidden className="size-4.25" strokeWidth={1.8} />
              </span>
              <div>
                <p className="text-15 font-semibold">Notebook</p>
                <p className="text-14 text-content-muted tabular-nums">
                  {AMOUNT_LABELS[repeat]}: {formatMoney(PURCHASE_CENTS)}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 md:justify-self-end">
              <span className="text-14 font-medium text-content-muted">Repetir</span>
              <SegmentedControl label="Repetir" options={REPEAT_OPTIONS} value={repeat} onChange={setRepeat} fullWidthOnPhones />
              {repeat === "installments" && (
                <label htmlFor={countId} className="flex items-center gap-2.5 text-14 text-content-muted">
                  Em
                  <input
                    id={countId}
                    type="number"
                    inputMode="numeric"
                    aria-label="Número de parcelas"
                    min={2}
                    max={MAX_INSTALLMENTS}
                    value={count || ""}
                    onChange={(event) => setCount(Number(event.target.value))}
                    className="h-9.5 w-18 rounded-control border border-border bg-surface px-2.5 text-center text-15 text-content tabular-nums outline-none focus-visible:border-brand-emphasis focus-visible:ring-3 focus-visible:ring-brand-ring"
                  />
                  parcelas mensais
                </label>
              )}
              {summary && <span className="text-14 text-content-faint tabular-nums">{summary}</span>}
            </div>
          </div>

          <ol aria-label="Valor em cada mês" className="mt-7 grid grid-cols-3 gap-y-6 border-t border-border pt-6 sm:grid-cols-7">
            {shown.map((cents, index) => (
              <li key={MONTHS_AHEAD[index]} className={cn("flex flex-col gap-1 px-1", index >= MOBILE_MONTHS && "max-sm:hidden")}>
                <span className={cn("text-13 font-medium capitalize", index === 0 ? "text-brand-emphasis" : "text-content-muted")}>
                  {MONTHS_AHEAD[index]}
                </span>
                <span className="text-13 text-content-faint tabular-nums">{rowLabel(index)}</span>
                <span className="text-15 font-semibold text-expense tabular-nums sm:text-16">{formatMoney(cents)}</span>
              </li>
            ))}
            {renderMore(MOBILE_MONTHS, "col-span-3 flex items-baseline gap-1.5 px-1 text-content-muted sm:hidden")}
            {renderMore(VISIBLE_MONTHS, "hidden flex-col justify-center gap-1 px-1 text-content-muted sm:flex")}
          </ol>
          <p className="mt-6 text-13 text-content-faint">Dados de exemplo</p>
        </Card>
      </div>
    </section>
  );
}
