// Closing call to action.
import { ArrowRight } from "lucide-react";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { HERO_BUTTON_ARROW_CLASSES, HERO_BUTTON_CLASSES } from "@/components/ui/heroButton";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { APP_LINKS } from "@/constants/site";

export function FinalCta() {
  return (
    <section aria-labelledby="final-title" className="border-t border-border px-4 py-20 md:px-6 lg:py-24">
      <div className="mx-auto flex max-w-300 flex-col items-start gap-8 rounded-2xl bg-brand-50 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-12 md:py-14">
        <div>
          <span className="flex size-12 items-center justify-center rounded-xl bg-surface">
            <BrandIcon className="size-7" />
          </span>
          <h2 id="final-title" className="mt-6 text-32 leading-[1.08] font-bold tracking-section md:text-42">
            Seu próximo mês, organizado hoje.
          </h2>
          <p className="mt-3 max-w-120 text-17 leading-relaxed text-content-muted">
            Leva um minuto para criar a conta. Importar o primeiro extrato, mais um.
          </p>
        </div>
        <ButtonLink href={APP_LINKS.signUp} className={cn(HERO_BUTTON_CLASSES, "max-md:w-full")}>
          Criar conta grátis
          <ArrowRight aria-hidden className={HERO_BUTTON_ARROW_CLASSES} />
        </ButtonLink>
      </div>
    </section>
  );
}
