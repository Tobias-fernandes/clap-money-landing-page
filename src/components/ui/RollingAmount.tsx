"use client";
// A money value whose digits roll to the new figure when it changes (used
// when the hero changes month). Screen readers get the plain value.
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

export function RollingDigits({ text, className }: { text: string; className?: string }) {
  const reduce = useReducedMotion();
  const chars = [...text];
  return (
    <span className={cn("relative inline-flex tabular-nums", className)}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="inline-flex">
        {chars.map((char, index) => {
          const key = chars.length - index;
          if (!/\d/.test(char)) return <span key={`s${key}`}>{char}</span>;
          return (
            <span key={`d${key}`} className="relative inline-block h-[1em] w-[0.6em] overflow-hidden">
              <span
                className="absolute inset-x-0 top-0 flex flex-col"
                style={{
                  transform: `translateY(-${Number(char)}em)`,
                  transition: reduce ? "none" : `transform ${460 + (index % 4) * 60}ms var(--ease-out)`,
                }}
              >
                {DIGITS.map((d) => (
                  <span key={d} className="block h-[1em] text-center leading-[1em]">
                    {d}
                  </span>
                ))}
              </span>
            </span>
          );
        })}
      </span>
    </span>
  );
}
