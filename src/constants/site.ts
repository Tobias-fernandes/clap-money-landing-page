// Public URLs and identity of the site. Every absolute URL of the landing
// (canonical, sitemap, Open Graph, JSON-LD, app links) is built from here.

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://clapmoney.com.br"
).replace(/\/$/, "");

export const APP_URL = (
  process.env.NEXT_PUBLIC_APP_URL ?? "https://app.clapmoney.com.br"
).replace(/\/$/, "");

export const APP_LINKS = {
  signUp: `${APP_URL}/criar-conta`,
  login: `${APP_URL}/entrar`,
} as const;

export const SITE = {
  name: "ClapMoney",
  title: "ClapMoney — Controle financeiro que já mostra o mês que vem",
  shortDescription:
    "Importe o extrato, organize por categoria e veja as próximas parcelas.",
  description:
    "Importe o extrato OFX do seu banco, organize entradas e saídas por categoria e veja as parcelas e mensalidades dos próximos meses. Crie sua conta grátis.",
  locale: "pt_BR",
  language: "pt-BR",
} as const;

/** Anchors of the page sections, shared by the header and the sections. */
export const SECTION_IDS = {
  howItWorks: "como-funciona",
  installments: "parcelas",
  features: "recursos",
  privacy: "privacidade-dos-dados",
  pricing: "planos",
  faq: "perguntas",
} as const;

export const NAV_LINKS = [
  { href: `/#${SECTION_IDS.howItWorks}`, label: "Como funciona" },
  { href: `/#${SECTION_IDS.features}`, label: "Recursos" },
  { href: `/#${SECTION_IDS.pricing}`, label: "Planos" },
  { href: `/#${SECTION_IDS.faq}`, label: "Perguntas" },
] as const;
