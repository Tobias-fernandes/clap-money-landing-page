// Plans shown in "Planos".
//
// TODO(pricing): every value marked TODO is a PLACEHOLDER. Names, prices and
// what each plan includes are not decided yet. Replace them here (this is the
// only place they live) before publishing. Values in [brackets] render on the
// page as-is, so a forgotten placeholder is easy to spot.

export interface Plan {
  id: "free" | "pro";
  name: string;
  /** Display price, e.g. "R$ 0" or "R$ 14,90". */
  price: string;
  /** Text after the price, e.g. "/mês". */
  period: string;
  summary: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

export const PLANS: Plan[] = [
  {
    id: "free",
    name: "Grátis", // TODO(pricing): confirm the plan name.
    price: "R$ 0",
    period: "",
    summary: "Para organizar o mês e ver o que vem pela frente.", // TODO(pricing)
    // TODO(pricing): confirm which features the free plan includes.
    features: [
      "Entradas, saídas e categorias com cor",
      "Importar extrato OFX",
      "Parcelas e mensalidades nos próximos meses",
      "Meta de gastos com avisos",
      "Exportar em CSV e PDF",
    ],
    cta: "Criar conta grátis",
    highlighted: false,
  },
  {
    id: "pro",
    name: "Pro", // TODO(pricing): confirm the plan name.
    price: "[R$ 00,00]", // TODO(pricing): set the price.
    period: "/mês", // TODO(pricing): monthly, yearly or both?
    summary: "[Resumo do plano pago]", // TODO(pricing)
    // TODO(pricing): list what the paid plan adds.
    features: ["Tudo do plano Grátis", "[Recurso do plano Pro]", "[Recurso do plano Pro]", "[Recurso do plano Pro]"],
    cta: "[Assinar o Pro]", // TODO(pricing): label and link of the paid sign-up.
    highlighted: true,
  },
];
