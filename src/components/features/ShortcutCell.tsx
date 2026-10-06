"use client";
// Feature: the N shortcut. Pressing N on this page (or the app's "Nova
// transação" button) opens a fragment of the transaction drawer: the same
// Entrada/Saída toggle and amount field as the app. Ignored while typing.
import { useEffect, useRef, useState } from "react";
import { ArrowDownLeft, ArrowUpRight, Plus } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { buttonClasses } from "@/components/ui/buttonClasses";
import { INPUT_CLASSES, LABEL_CLASSES } from "@/components/ui/inputClasses";
import { cn } from "@/lib/cn";

const TYPE_OPTION =
  "flex h-9.5 cursor-pointer items-center justify-center gap-1.5 rounded-lg text-14 font-medium transition-colors duration-150 focus-visible:ring-3 focus-visible:ring-brand-ring focus-visible:outline-none";

export function ShortcutCell() {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<"in" | "out">("out");
  const amountRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const isTyping = (target: EventTarget | null) =>
      target instanceof HTMLElement && (target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName));
    const onKey = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "n" && !event.metaKey && !event.ctrlKey && !event.altKey && !isTyping(event.target)) {
        setOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <Card className="flex h-full flex-col gap-5 p-5 md:p-6">
      <div>
        <h3 className="text-20 font-semibold tracking-heading">Aperte N para lançar</h3>
        <p className="mt-2 text-15 leading-relaxed text-content-muted">No computador, a tecla N abre uma nova transação. Experimente aqui.</p>
      </div>
      <button
        type="button"
        onClick={() => {
          setOpen(true);
          amountRef.current?.focus();
        }}
        aria-keyshortcuts="N"
        title="Nova transação (N)"
        className={buttonClasses("primary", "md", "w-fit")}
      >
        <Plus aria-hidden className="size-4" strokeWidth={2} />
        Nova transação
      </button>
      <div className={cn("mt-auto flex flex-col gap-3 rounded-xl border border-border bg-surface-muted p-3.5 transition-shadow duration-200", open && "ring-3 ring-brand-ring")}>
        <div role="group" aria-label="Tipo da transação" className="grid grid-cols-2 gap-1 rounded-xl border border-border bg-surface-strong p-1">
          <button type="button" aria-pressed={type === "in"} onClick={() => setType("in")} className={cn(TYPE_OPTION, type === "in" ? "bg-income-solid text-on-income" : "text-content-muted hover:text-content")}>
            <ArrowDownLeft aria-hidden className="size-3.5" strokeWidth={2} />
            Entrada
          </button>
          <button type="button" aria-pressed={type === "out"} onClick={() => setType("out")} className={cn(TYPE_OPTION, type === "out" ? "bg-expense-solid text-on-expense" : "text-content-muted hover:text-content")}>
            <ArrowUpRight aria-hidden className="size-3.5" strokeWidth={2} />
            Saída
          </button>
        </div>
        <label className="flex flex-col gap-2">
          <span className={LABEL_CLASSES}>Valor</span>
          <input ref={amountRef} inputMode="decimal" placeholder="R$ 0,00" className={INPUT_CLASSES} />
        </label>
      </div>
    </Card>
  );
}
