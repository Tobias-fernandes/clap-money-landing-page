"use client";
// Feature: "Início do mês financeiro". Pick payday and see the dates the
// month covers.
import { useId, useState } from "react";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

const DAYS = [1, 5, 10, 15, 20, 25] as const;

export function MonthStartCell() {
  const [day, setDay] = useState<number>(5);
  const titleId = useId();
  const range = day === 1 ? "de 1/10 a 31/10" : `de ${day}/10 a ${day - 1}/11`;

  return (
    <Card className="flex h-full flex-col gap-5 p-5 md:p-6">
      <div>
        <h3 id={titleId} className="text-20 font-semibold tracking-heading">
          O mês começa quando o salário cai
        </h3>
        <p className="mt-2 text-15 leading-relaxed text-content-muted">Recebe dia 5? Faça o mês financeiro começar no dia 5.</p>
      </div>
      <div className="mt-auto">
        <div role="radiogroup" aria-labelledby={titleId} className="flex w-fit gap-0.5 rounded-control border border-border bg-surface-strong p-0.75 max-sm:grid max-sm:w-full max-sm:grid-cols-6">
          {DAYS.map((d) => (
            <button
              key={d}
              type="button"
              role="radio"
              aria-checked={d === day}
              onClick={() => setDay(d)}
              className={cn(
                "cursor-pointer rounded-tag px-3 py-1.25 max-sm:px-0 sm:min-w-10 text-14 font-medium tabular-nums transition-colors focus-visible:ring-3 focus-visible:ring-brand-ring focus-visible:outline-none",
                d === day ? "bg-surface text-brand-emphasis shadow-segment" : "text-content-muted hover:text-content",
              )}
            >
              {d}
            </button>
          ))}
        </div>
        <p className="mt-3 text-14 text-content-muted" aria-live="polite">
          Outubro vai <span className="font-medium text-content">{range}</span>.
        </p>
      </div>
    </Card>
  );
}
