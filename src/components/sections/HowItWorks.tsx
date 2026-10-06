"use client";
// "Como funciona": the four steps of "Importar extrato". On wide screens the
// import dialog stays pinned while the steps scroll past, changing one thing
// per step; on phones each step shows its own dialog state.
import { useEffect, useRef, useState } from "react";
import { SECTION_IDS } from "@/constants/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImportPreview } from "./ImportPreview";
import { cn } from "@/lib/cn";

const STEPS = [
  {
    title: "Envie o arquivo OFX",
    body: "No app ou no internet banking, abra o extrato e exporte em OFX. O arquivo é lido para extrair as transações e não fica guardado.",
  },
  {
    title: "As categorias aprendem com você",
    body: "O que você já categorizou antes volta categorizado. O resto ganha uma sugestão pela descrição.",
  },
  {
    title: "O que já existe fica de fora",
    body: "Se uma transação já está no ClapMoney, ela aparece como duplicada e sai da importação.",
  },
  {
    title: "Você revisa e confirma",
    body: "Linhas sem palpite pedem a sua escolha. Confirme, e cada transação vai para o mês certo.",
  },
] as const;

export function HowItWorks() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.step));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    stepRefs.current.forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <section id={SECTION_IDS.howItWorks} aria-labelledby="how-title" className="border-t border-border">
      <div className="mx-auto max-w-300 px-4 py-20 md:px-6 lg:py-28">
        <SectionHeading
          id="how-title"
          title="Mande o extrato. O mês se organiza sozinho."
          intro="Nada de senha bancária e nada de digitar linha por linha. Quatro passos, uma vez por mês."
        />

        <div className="mt-14 grid grid-cols-1 gap-x-14 lg:mt-16 lg:grid-cols-12">
          <ol className="lg:col-span-5">
            {STEPS.map((step, index) => (
              <li
                key={step.title}
                ref={(node) => {
                  stepRefs.current[index] = node;
                }}
                data-step={index}
                className="border-t border-border py-10 first:border-t-0 first:pt-0 lg:flex lg:min-h-[60vh] lg:flex-col lg:justify-center lg:border-t-0 lg:py-0"
              >
                <div>
                  <span
                    className={cn(
                      "inline-flex size-7 items-center justify-center rounded-lg text-14 font-semibold tabular-nums transition-colors duration-300",
                      index === active ? "bg-brand-solid text-on-brand" : "bg-brand-50 text-brand-emphasis",
                    )}
                    aria-hidden
                  >
                    {index + 1}
                  </span>
                  <h3 className={cn("mt-3 text-24 leading-tight font-semibold tracking-heading transition-colors duration-300 md:text-26", index !== active && "lg:text-content-muted")}>
                    {step.title}
                  </h3>
                  <p className="mt-2.5 max-w-115 text-16 leading-relaxed text-content-muted">{step.body}</p>
                </div>
                <ImportPreview step={index} static className="mt-8 lg:hidden" />
              </li>
            ))}
          </ol>

          <div className="hidden lg:col-span-7 lg:block">
            <div className="sticky top-[calc(50vh-15rem)]">
              <ImportPreview step={active} />
              <p className="mt-4 text-center text-13 text-content-faint">Dados de exemplo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
