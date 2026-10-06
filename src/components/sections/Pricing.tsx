// "Planos": the plans from constants/plans.ts (placeholders until pricing is
// decided). Heading in the first column, one card per plan beside it.
import { Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PLANS } from "@/constants/plans";
import { APP_LINKS, SECTION_IDS } from "@/constants/site";
import { cn } from "@/lib/cn";

export function Pricing() {
  return (
    <section id={SECTION_IDS.pricing} aria-labelledby="pricing-title" className="border-t border-border">
      <div className="mx-auto grid max-w-300 gap-10 px-4 py-20 md:px-6 lg:grid-cols-3 lg:gap-3 lg:py-28">
        <SectionHeading
          id="pricing-title"
          title="Comece grátis."
          intro="Crie a conta, importe o primeiro extrato e veja o seu mês organizado."
          className="lg:pr-8"
        />
        {PLANS.map((plan) => (
          <Card
            as="article"
            key={plan.id}
            aria-labelledby={`plan-${plan.id}`}
            className={cn("flex flex-col p-6 md:p-7", plan.highlighted && "border-brand-solid ring-1 ring-brand-solid")}
          >
            <h3 id={`plan-${plan.id}`} className="text-18 font-semibold">
              {plan.name}
            </h3>
            <p className="mt-3 flex items-baseline gap-1.5 tabular-nums">
              <span className="text-42 leading-none font-bold tracking-display">{plan.price}</span>
              {plan.period && <span className="text-15 text-content-muted">{plan.period}</span>}
            </p>
            <p className="mt-3 text-15 leading-relaxed text-content-muted">{plan.summary}</p>
            <ul className="mt-6 mb-8 flex flex-col gap-3 border-t border-border pt-6 text-15">
              {plan.features.map((feature, index) => (
                <li key={`${feature}-${index}`} className="flex gap-2.5">
                  <Check aria-hidden className="mt-0.5 size-4 flex-none text-brand-emphasis" strokeWidth={2.4} />
                  {feature}
                </li>
              ))}
            </ul>
            <ButtonLink href={APP_LINKS.signUp} variant={plan.highlighted ? "primary" : "secondary"} size="lg" className="mt-auto h-11.5 w-full text-16">
              {plan.cta}
            </ButtonLink>
          </Card>
        ))}
      </div>
    </section>
  );
}
