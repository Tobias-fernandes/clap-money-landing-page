"use client";
// "Meta de gastos": the app's goal setting. Type a goal; the GoalPreview bar
// (same classes as the app) compares it with October's spending and the
// SpendingAlert banner follows: amber from 80% of the goal, red past it.
import { useId, useState } from "react";
import { TriangleAlert } from "lucide-react";
import { OCTOBER_EXPENSES_CENTS } from "@/constants/sampleData";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { INPUT_CLASSES, LABEL_CLASSES } from "@/components/ui/inputClasses";
import { formatMoney } from "@/lib/money";
import { cn } from "@/lib/cn";

const WARNING_RATIO = 0.8;
const INITIAL_GOAL_CENTS = 300000;
const percent = (ratio: number) => `${Math.round(ratio * 100)}%`;

function goalStatus(expense: number, goal: number) {
  if (goal <= 0) return { ratio: 0, tone: "none", label: "Defina uma meta" } as const;
  const ratio = expense / goal;
  if (ratio >= 1) return { ratio, tone: "danger", label: `Meta ultrapassada · ${percent(ratio)}` } as const;
  if (ratio >= WARNING_RATIO) return { ratio, tone: "warning", label: `Atenção · ${percent(ratio)} da meta` } as const;
  return { ratio, tone: "ok", label: `Dentro da meta · ${percent(ratio)}` } as const;
}

const BAR = { none: "bg-content-faint", ok: "bg-brand-solid", warning: "bg-warn", danger: "bg-expense" } as const;
const LABEL = { none: "text-content-faint", ok: "text-brand-emphasis", warning: "text-warn-text", danger: "text-expense" } as const;

/** Currency mask like the app's amount fields: digits fill from the cents. */
function parseCents(text: string) {
  const digits = text.replace(/\D/g, "").slice(0, 9);
  return digits ? Number(digits) : 0;
}

export function SpendingGoal() {
  const [goal, setGoal] = useState(INITIAL_GOAL_CENTS);
  const inputId = useId();
  const status = goalStatus(OCTOBER_EXPENSES_CENTS, goal);
  const alert =
    status.tone === "danger"
      ? `Você passou ${formatMoney(OCTOBER_EXPENSES_CENTS - goal)} da meta de outubro.`
      : status.tone === "warning"
        ? `Você já usou ${percent(status.ratio)} da meta de outubro.`
        : null;

  return (
    <section aria-labelledby="goal-title" className="border-t border-border">
      <div className="mx-auto grid grid-cols-1 max-w-300 gap-10 px-4 py-20 md:px-6 lg:grid-cols-12 lg:items-center lg:py-28">
        <SectionHeading
          id="goal-title"
          title="Um aviso antes do aperto."
          intro="Defina uma meta de gastos para o mês. Com 80% dela usados, o painel avisa. Se passar, avisa de novo, em vermelho."
          className="lg:col-span-5"
        />

        <Card className="flex flex-col gap-4 p-5 md:p-6 lg:col-span-7">
          <div className="flex flex-col gap-2">
            <label htmlFor={inputId} className={LABEL_CLASSES}>
              Meta de gastos do mês
            </label>
            <input
              id={inputId}
              inputMode="numeric"
              value={formatMoney(goal)}
              onChange={(event) => setGoal(parseCents(event.target.value))}
              className={cn(INPUT_CLASSES, "tabular-nums")}
            />
            <p className="text-13 text-content-faint">Experimente R$ 2.800,00 ou R$ 2.000,00.</p>
          </div>

          <div className="flex flex-col gap-2.5 rounded-control bg-surface-strong px-4 py-3.5">
            <div className="flex flex-wrap justify-between gap-3 text-14 tabular-nums">
              <span className="text-content-muted">
                Prévia · gasto em outubro: <span className="font-medium text-content">{formatMoney(OCTOBER_EXPENSES_CENTS)}</span>
              </span>
              <span className={cn("font-medium", LABEL[status.tone])}>{status.label}</span>
            </div>
            <div className="relative h-2 rounded-full bg-track">
              <div
                className={cn("absolute inset-y-0 left-0 rounded-full transition-[width] duration-250", BAR[status.tone])}
                style={{ width: `${Math.min(1, status.ratio) * 100}%` }}
              />
              <div className="absolute -inset-y-0.75 left-4/5 border-l-2 border-surface-strong" />
            </div>
            <div className="relative h-3.5 text-12 text-content-faint tabular-nums">
              <span className="absolute left-0">0</span>
              <span className="absolute left-4/5 hidden -translate-x-1/2 sm:block">80%</span>
              <span className="absolute right-0">{goal > 0 ? formatMoney(goal) : "—"}</span>
            </div>
          </div>

          <div aria-live="polite">
            {alert && (
              <p
                className={cn(
                  "flex items-center gap-2.5 rounded-control px-3.5 py-2.5 text-14",
                  status.tone === "danger" ? "bg-expense-tint text-expense" : "bg-warn-tint text-warn-text",
                )}
              >
                <TriangleAlert aria-hidden className={cn("size-4 flex-none", status.tone === "danger" ? "text-expense" : "text-warn")} strokeWidth={2} />
                {alert}
              </p>
            )}
          </div>
          <p className="text-13 text-content-faint">Dados de exemplo</p>
        </Card>
      </div>
    </section>
  );
}
