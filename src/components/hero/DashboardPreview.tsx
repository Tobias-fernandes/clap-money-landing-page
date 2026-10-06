"use client";
// Hero demo: a slice of the ClapMoney dashboard. The month switcher works
// like the app's; November and December only hold what is already certain
// (monthly charges and installments), so their balance is a projection.
import { useState } from "react";
import { CalendarClock, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { OPENING_BALANCE_CENTS, PASSBOOK_MONTHS, type PassbookMonth } from "@/constants/sampleData";
import { Card } from "@/components/ui/Card";
import { CategoryIcon } from "@/components/ui/CategoryIcon";
import { RecurrenceBadge } from "@/components/ui/RecurrenceBadge";
import { RollingDigits } from "@/components/ui/RollingAmount";
import { formatMoney, formatSigned, splitAmount } from "@/lib/money";
import { cn } from "@/lib/cn";

function computeTotals(months: PassbookMonth[]) {
  const totals: Array<{ closing: number; expenses: number }> = [];
  let balance = OPENING_BALANCE_CENTS;
  for (const month of months) {
    let expenses = 0;
    for (const entry of month.entries) {
      balance += entry.cents;
      if (entry.cents < 0) expenses -= entry.cents;
    }
    totals.push({ closing: balance, expenses });
  }
  return totals;
}

const TOTALS = computeTotals(PASSBOOK_MONTHS);
/** MonthNav arrow, same classes as the app (plus the disabled state at the ends of the sample). */
const NAV_BUTTON =
  "flex size-8 cursor-pointer items-center justify-center rounded-lg text-content-muted hover:bg-surface-hover hover:text-content focus-visible:ring-3 focus-visible:ring-brand-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";

/** Rows shown in the list; the header still counts every transaction. */
const VISIBLE_ROWS = 5;
const LAST_DAY: Record<string, string> = { "10": "31", "11": "30", "12": "31" };

function recurrenceLabel(description: string, recurrence?: "mensal" | "parcela") {
  if (recurrence === "mensal") return { label: "Mensal", accessible: "Cobrança mensal" };
  const match = description.match(/(\d+)\/(\d+)$/);
  if (recurrence === "parcela" && match) return { label: `${match[1]}/${match[2]}`, accessible: `Parcela ${match[1]} de ${match[2]}` };
  return null;
}

export function DashboardPreview() {
  const [index, setIndex] = useState(0);
  const month = PASSBOOK_MONTHS[index] ?? PASSBOOK_MONTHS[0]!;
  const totals = TOTALS[index] ?? TOTALS[0]!;
  const monthNumber = month.id.slice(5);
  const balance = splitAmount(totals.closing);
  const isLast = index === PASSBOOK_MONTHS.length - 1;

  return (
    <figure className="relative">
      <div className="rounded-2xl border border-border bg-surface-muted p-2.5 shadow-mockup md:p-3.5 dark:shadow-float-dark">
      <div className="mb-2.5 flex items-center justify-between gap-3 md:mb-3">
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            disabled={index === 0}
            aria-label="Mês anterior"
            className={NAV_BUTTON}
          >
            <ChevronLeft aria-hidden className="size-4.5" strokeWidth={1.8} />
          </button>
          <p aria-live="polite" className="min-w-33 text-center text-15 font-medium">
            {month.label.replace(" de ", " ")}
          </p>
          <button
            type="button"
            onClick={() => setIndex((i) => Math.min(PASSBOOK_MONTHS.length - 1, i + 1))}
            disabled={isLast}
            aria-label="Próximo mês"
            className={NAV_BUTTON}
          >
            <ChevronRight aria-hidden className="size-4.5" strokeWidth={1.8} />
          </button>
        </div>
        <span
          className={cn(
            "inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-13 font-medium transition-colors duration-200",
            month.projected ? "bg-surface-strong text-content-muted" : "bg-brand-50 text-brand-emphasis",
          )}
        >
          {month.projected ? (
            <CalendarClock aria-hidden className="size-3.5" strokeWidth={2} />
          ) : (
            <span aria-hidden className="size-1.5 rounded-full bg-brand-emphasis" />
          )}
          {month.projected ? "Previsto" : "Mês atual"}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2.5 md:grid-cols-[1.4fr_1fr] md:gap-3">
        <Card className="flex flex-col gap-2.5 p-3.5 md:p-5">
          <span className="text-14 font-medium text-content-muted">{month.projected ? "Saldo previsto" : "Saldo atual"}</span>
          <p className="flex items-baseline gap-1 whitespace-nowrap">
            <span className="text-14 font-medium md:text-18">{balance.prefix}</span>
            <RollingDigits text={balance.integer} className="text-26 leading-none font-bold tracking-display md:text-38" />
            <span className="text-14 font-semibold md:text-18">{balance.decimals}</span>
          </p>
          <span className="text-13 text-content-faint">
            Até {LAST_DAY[monthNumber]}/{monthNumber}/2026
          </span>
        </Card>
        <Card className="flex flex-col gap-2.5 p-3.5 md:p-5">
          <div className="flex items-center justify-between gap-2">
            <span className="text-14 font-medium text-content-muted">Saídas do mês</span>
            <span aria-hidden className="flex size-5.5 items-center justify-center rounded-md bg-expense-tint text-expense">
              <ArrowUpRight className="size-3.5" strokeWidth={2} />
            </span>
          </div>
          <p className="text-18 font-semibold tracking-heading whitespace-nowrap text-expense tabular-nums md:text-24">
            {formatMoney(totals.expenses)}
          </p>
          <span className="text-13 text-content-faint">{month.projected ? "Parcelas e mensalidades" : `${month.entries.length} transações`}</span>
        </Card>
      </div>

      <Card className="mt-2.5 p-4 md:mt-3 md:p-5">
        <div className="flex items-baseline justify-between gap-3">
          <p className="text-16 font-semibold">{month.projected ? "Já previsto para o mês" : "Transações do mês"}</p>
          <span className="text-14 text-content-muted">{month.entries.length} transações</span>
        </div>
        <ul key={month.id} className="mt-1.5 flex h-[16.75rem] flex-col">
          {month.entries.slice(0, VISIBLE_ROWS).map((entry, i) => {
            const badge = recurrenceLabel(entry.description, entry.recurrence);
            return (
              <li
                key={`${month.id}-${i}`}
                className="-mx-2 flex h-13 flex-none items-center gap-3 rounded-lg px-2 animate-row-in"
                style={{ ["--i" as string]: i }}
              >
                <CategoryIcon category={entry.category} />
                <span className="flex min-w-0 flex-1 flex-col gap-px">
                  <span className="flex min-w-0 items-center gap-1.5">
                    <span className="truncate text-14">{entry.description.replace(/ \d+\/\d+$/, "")}</span>
                    {badge && <RecurrenceBadge label={badge.label} accessibleLabel={badge.accessible} />}
                  </span>
                  <span className="text-13 text-content-faint tabular-nums">
                    {entry.date}/2026 · {entry.category.name}
                  </span>
                </span>
                <span
                  className={cn(
                    "flex-none text-14 font-medium whitespace-nowrap tabular-nums",
                    entry.cents < 0 ? "text-expense" : "text-income",
                  )}
                >
                  {formatSigned(entry.cents)}
                </span>
              </li>
            );
          })}
          {month.projected && (
            <li className="mt-auto rounded-lg bg-surface-strong px-3 py-2 text-13 text-content-muted animate-row-in" style={{ ["--i" as string]: month.entries.length }}>
              Só mensalidades e parcelas já registradas.
            </li>
          )}
        </ul>
      </Card>
      </div>
      <figcaption className="mt-3 text-center text-13 text-content-faint">Dados de exemplo. Use as setas para ver os próximos meses.</figcaption>
    </figure>
  );
}
