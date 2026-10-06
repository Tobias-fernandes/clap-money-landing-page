"use client";
// Feature: "Ocultar valores". The same ghost button as the app hides every
// amount of the summary cards ("••••").
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { CategoryIcon } from "@/components/ui/CategoryIcon";
import { PASSBOOK_MONTHS } from "@/constants/sampleData";
import { formatMoney, formatSigned, splitAmount } from "@/lib/money";

const RECENT = (PASSBOOK_MONTHS[0]?.entries ?? []).slice(2, 5);
import { cn } from "@/lib/cn";

export function HideValuesCell() {
  const [hidden, setHidden] = useState(false);
  const balance = splitAmount(432793);

  return (
    <Card className="flex h-full flex-col gap-6 p-5 md:p-6">
      <div>
        <h3 className="text-20 font-semibold tracking-heading">Valores escondidos com um toque</h3>
        <p className="mt-2 max-w-105 text-15 leading-relaxed text-content-muted">
          Abriu o app no ônibus? Esconda os números e continue usando normalmente.
        </p>
      </div>
      <div className="mt-auto rounded-xl bg-surface-muted p-4">
        <div className="flex justify-end">
          <button
            type="button"
            aria-pressed={hidden}
            onClick={() => setHidden((v) => !v)}
            className="flex cursor-pointer items-center gap-1.5 rounded-lg px-2 py-1 text-14 font-medium text-content-muted hover:bg-surface-hover hover:text-content focus-visible:ring-3 focus-visible:ring-brand-ring focus-visible:outline-none"
          >
            {hidden ? <Eye aria-hidden className="size-4" strokeWidth={1.8} /> : <EyeOff aria-hidden className="size-4" strokeWidth={1.8} />}
            {hidden ? "Mostrar valores" : "Ocultar valores"}
          </button>
        </div>
        <div className="mt-2 grid gap-3 sm:grid-cols-2">
          <Card className="flex flex-col gap-2 p-4">
            <span className="text-14 font-medium text-content-muted">Saldo atual</span>
            <p className="flex items-baseline gap-1 whitespace-nowrap tabular-nums">
              <span className="text-16 font-medium">{balance.prefix}</span>
              <span className="text-30 leading-none font-bold tracking-display">{hidden ? "••••" : balance.integer}</span>
              {!hidden && <span className="text-16 font-semibold">{balance.decimals}</span>}
            </p>
          </Card>
          <Card className="flex flex-col gap-2 p-4">
            <span className="text-14 font-medium text-content-muted">Entradas do mês</span>
            <p className={cn("text-22 font-semibold tracking-heading tabular-nums", hidden ? "text-content-muted" : "text-income")}>
              {hidden ? "R$ ••••" : formatMoney(535000)}
            </p>
          </Card>
        </div>
        <Card as="div" className="mt-3 px-4 py-2">
          <ul>
            {RECENT.map((entry) => (
              <li key={entry.description} className="flex items-center gap-3 py-2">
                <CategoryIcon category={entry.category} />
                <span className="flex min-w-0 flex-1 flex-col">
                  <span className="truncate text-14">{entry.description}</span>
                  <span className="text-13 text-content-faint">{entry.date}/2026 · {entry.category.name}</span>
                </span>
                <span className={cn("text-14 font-medium tabular-nums", hidden ? "text-content-muted" : entry.cents < 0 ? "text-expense" : "text-income")}>
                  {hidden ? "R$ ••••" : formatSigned(entry.cents)}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Card>
  );
}
