// First viewport: the offer and the sign-up action on the left, a working
// slice of the dashboard on the right.
import { ArrowRight } from "lucide-react";
import { HERO_BUTTON_ARROW_CLASSES, HERO_BUTTON_CLASSES, HERO_LINK_CLASSES } from "@/components/ui/heroButton";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { APP_LINKS, SECTION_IDS } from "@/constants/site";
import { DashboardPreview } from "./DashboardPreview";

export function Hero() {
  return (
    <section aria-labelledby="hero-title">
      <div className="mx-auto grid max-w-300 items-center gap-x-12 gap-y-12 xl:gap-x-20 px-4 pt-10 pb-16 md:px-6 md:pt-14 lg:min-h-[calc(100dvh-4rem)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:py-8">
        <div>
          <h1 id="hero-title" className="text-44 leading-[1.04] font-bold tracking-hero md:text-60 lg:text-52 xl:text-60">
            Veja o mês que vem antes dele chegar.
          </h1>
          <p className="mt-6 max-w-130 text-18 leading-relaxed text-content-muted md:text-20">
            Importe o extrato do banco, o ClapMoney organiza tudo e já mostra as parcelas e mensalidades dos próximos meses.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <ButtonLink href={APP_LINKS.signUp} className={HERO_BUTTON_CLASSES}>
              Criar conta grátis
              <ArrowRight aria-hidden className={HERO_BUTTON_ARROW_CLASSES} />
            </ButtonLink>
            <a href={`#${SECTION_IDS.howItWorks}`} className={HERO_LINK_CLASSES}>
              Como funciona
            </a>
          </div>
        </div>
        <div>
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}
