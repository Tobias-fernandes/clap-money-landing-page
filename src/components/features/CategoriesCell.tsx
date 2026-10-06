"use client";
// Feature: categories. The icon and color pickers of the app's "Nova
// categoria" form (same classes), with its "Prévia" row.
import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { CategoryTag } from "@/components/ui/CategoryTag";
import { getCategoryStyle } from "@/components/ui/categoryStyle";
import type { CategoryTag as TagIndex } from "@/constants/sampleData";
import { cn } from "@/lib/cn";

const COLORS: TagIndex[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const ICONS = [11, 15, 7, 12, 14, 10, 13, 1] as const;

export function CategoriesCell() {
  const [tag, setTag] = useState<TagIndex>(2);
  const [icon, setIcon] = useState<number>(11);
  const selectedTag = getCategoryStyle({ name: "", tag, icon }).tagClassName;

  return (
    <Card className="flex h-full flex-col gap-5 p-5 md:p-6">
      <div>
        <h3 className="text-20 font-semibold tracking-heading">Categorias do seu jeito</h3>
        <p className="mt-2 text-15 leading-relaxed text-content-muted">Crie as suas, com ícone e uma das dez cores.</p>
      </div>
      <fieldset className="flex flex-col gap-2">
        <legend className="mb-2 text-14 font-medium text-content-muted">Ícone</legend>
        <div className="grid grid-cols-8 gap-1.5">
          {ICONS.map((i) => {
            const { Icon } = getCategoryStyle({ name: "", tag, icon: i });
            return (
              <button
                key={i}
                type="button"
                aria-label={`Ícone ${i + 1}`}
                aria-pressed={i === icon}
                onClick={() => setIcon(i)}
                className={cn(
                  "flex aspect-square cursor-pointer items-center justify-center rounded-lg border hover:border-border-strong focus-visible:ring-3 focus-visible:ring-brand-ring focus-visible:outline-none",
                  i === icon ? cn(selectedTag, "border-current") : "border-border text-content-muted",
                )}
              >
                <Icon aria-hidden className="size-4.25" strokeWidth={1.8} />
              </button>
            );
          })}
        </div>
      </fieldset>
      <fieldset className="flex flex-col gap-2">
        <legend className="mb-2 text-14 font-medium text-content-muted">Cor</legend>
        <div className="flex flex-wrap gap-2">
          {COLORS.map((c) => (
            <button
              key={c}
              type="button"
              aria-label={`Cor ${c + 1}`}
              aria-pressed={c === tag}
              onClick={() => setTag(c)}
              className={cn(
                "size-7.5 cursor-pointer rounded-full border-2 border-transparent focus-visible:ring-3 focus-visible:ring-brand-ring focus-visible:outline-none",
                getCategoryStyle({ name: "", tag: c, icon }).tagClassName,
                c === tag && "border-current ring-2 ring-current ring-offset-2 ring-offset-surface",
              )}
            />
          ))}
        </div>
      </fieldset>
      <div className="mt-auto flex items-center gap-2.5 rounded-control bg-surface-strong px-3.5 py-3">
        <span className="text-14 text-content-muted">Prévia</span>
        <CategoryTag category={{ name: "Viagem", tag, icon }} className="text-14" />
      </div>
    </Card>
  );
}
