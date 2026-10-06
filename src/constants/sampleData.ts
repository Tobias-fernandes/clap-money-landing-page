// Demonstration data shown in the interactive previews. It is synthetic
// (labelled "Dados de exemplo" on the page) and mirrors how the app behaves:
// October is the current month, November and December only hold what is
// already certain (monthly charges and installments), printed as projections.

export type CategoryTag = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export interface Category {
  name: string;
  tag: CategoryTag;
  /** Index in CATEGORY_ICONS (same list and order as the app). */
  icon: number;
}

export interface PassbookEntry {
  date: string;
  description: string;
  category: Category;
  /** Signed cents: positive is income (entrada), negative is expense (saída). */
  cents: number;
  recurrence?: "mensal" | "parcela";
}

export interface PassbookMonth {
  id: string;
  tab: string;
  label: string;
  projected: boolean;
  entries: PassbookEntry[];
}

export const CATEGORIES = {
  salary: { name: "Salário", tag: 0, icon: 0 },
  housing: { name: "Moradia", tag: 3, icon: 5 },
  market: { name: "Mercado", tag: 5, icon: 3 },
  home: { name: "Casa", tag: 8, icon: 5 },
  subscriptions: { name: "Contas", tag: 6, icon: 6 },
  health: { name: "Saúde", tag: 2, icon: 8 },
  transfers: { name: "Transferências", tag: 4, icon: 13 },
  food: { name: "Alimentação", tag: 3, icon: 15 },
  freelance: { name: "Freelas", tag: 1, icon: 1 },
  leisure: { name: "Lazer", tag: 7, icon: 7 },
} as const satisfies Record<string, Category>;

/** Balance carried from September into the October page. */
export const OPENING_BALANCE_CENTS = 128450;

const recurring = (month: string, installment: number): PassbookEntry[] => [
  { date: `01/${month}`, description: "Salário", category: CATEGORIES.salary, cents: 520000, recurrence: "mensal" },
  { date: `02/${month}`, description: "Aluguel", category: CATEGORIES.housing, cents: -165000, recurrence: "mensal" },
  {
    date: `06/${month}`,
    description: `Geladeira ${installment}/10`,
    category: CATEGORIES.home,
    cents: -23990,
    recurrence: "parcela",
  },
  { date: `08/${month}`, description: "Streaming", category: CATEGORIES.subscriptions, cents: -3990, recurrence: "mensal" },
];

export const PASSBOOK_MONTHS: PassbookMonth[] = [
  {
    id: "2026-10",
    tab: "Out",
    label: "Outubro de 2026",
    projected: false,
    entries: [
      ...recurring("10", 4).slice(0, 2),
      { date: "04/10", description: "Mercado Bom Preço", category: CATEGORIES.market, cents: -31247 },
      ...recurring("10", 4).slice(2),
      { date: "11/10", description: "Farmácia Vida", category: CATEGORIES.health, cents: -6430 },
      { date: "15/10", description: "Pix de Júlia", category: CATEGORIES.transfers, cents: 15000 },
    ],
  },
  { id: "2026-11", tab: "Nov", label: "Novembro de 2026", projected: true, entries: recurring("11", 5) },
  { id: "2026-12", tab: "Dez", label: "Dezembro de 2026", projected: true, entries: recurring("12", 6) },
];

/** Rows of the bank statement before and after "Importar extrato". */
export interface ImportRow {
  raw: string;
  date: string;
  cents: number;
  description: string;
  category: Category;
  source: "aprendida" | "sugerida" | "revisar" | "duplicada";
  /** For duplicates: the transaction already in the ledger. */
  match?: string;
  /** For rows to review: the category the person picks. */
  resolved?: Category;
}

export const IMPORT_ROWS: ImportRow[] = [
  {
    raw: "COMPRA CARTAO MERCADO BOM PRECO",
    date: "04/10",
    cents: -31247,
    description: "Mercado Bom Preço",
    category: CATEGORIES.market,
    source: "aprendida",
  },
  {
    raw: "PAGTO STREAMING PLAY*MENSAL",
    date: "08/10",
    cents: -3990,
    description: "Streaming",
    category: CATEGORIES.subscriptions,
    source: "duplicada",
    match: "Já está no ClapMoney: Streaming, 08/10",
  },
  {
    raw: "COMPRA CARTAO FARMACIA VIDA",
    date: "11/10",
    cents: -6430,
    description: "Farmácia Vida",
    category: CATEGORIES.health,
    source: "sugerida",
  },
  {
    raw: "COMPRA CARTAO PADARIA SOL",
    date: "12/10",
    cents: -1890,
    description: "Padaria Sol",
    category: CATEGORIES.food,
    source: "aprendida",
  },
  {
    raw: "TED RECEBIDA 0341 R SOUZA",
    date: "14/10",
    cents: 48000,
    description: "TED de R. Souza",
    category: CATEGORIES.freelance,
    source: "revisar",
    resolved: CATEGORIES.freelance,
  },
  {
    raw: "PIX RECEBIDO JULIA M SANTOS",
    date: "15/10",
    cents: 15000,
    description: "Pix de Júlia",
    category: CATEGORIES.transfers,
    source: "sugerida",
  },
];

/** Month labels for the installments preview, starting at the current month. */
export const MONTHS_AHEAD = [
  "out/26",
  "nov/26",
  "dez/26",
  "jan/27",
  "fev/27",
  "mar/27",
  "abr/27",
  "mai/27",
  "jun/27",
  "jul/27",
  "ago/27",
  "set/27",
] as const;

/** Daily balance of October (cents), derived from the October entries. */
export const BALANCE_SERIES: number[] = (() => {
  const october = PASSBOOK_MONTHS[0]?.entries ?? [];
  let balance = OPENING_BALANCE_CENTS;
  return Array.from({ length: 31 }, (_, index) => {
    const day = String(index + 1).padStart(2, "0");
    for (const entry of october) if (entry.date.startsWith(`${day}/`)) balance += entry.cents;
    return balance;
  });
})();

/** Expenses (saídas) of the October sample, shown by the hero and the goal demo. */
export const OCTOBER_EXPENSES_CENTS = (PASSBOOK_MONTHS[0]?.entries ?? []).reduce((sum, e) => (e.cents < 0 ? sum - e.cents : sum), 0);
