// Money formatting in Brazilian Portuguese. Amounts are integer cents, like
// in the app, so sums never drift.

const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

export function formatMoney(cents: number): string {
  // Intl uses a non-breaking space after "R$"; keep it so values never wrap.
  return brl.format(cents / 100);
}

/** "+ R$ 6.200,00" / "− R$ 699,00", like the app's amounts. */
export function formatSigned(cents: number): string {
  const sign = cents > 0 ? "+ " : cents < 0 ? "− " : "";
  return `${sign}${formatMoney(Math.abs(cents))}`;
}

/** Splits "R$ 42.782,40" into "R$", "42.782" and ",40" (big balance display). */
export function splitAmount(cents: number) {
  const [prefix = "R$", rest = ""] = formatMoney(cents).split(/\s/);
  const comma = rest.lastIndexOf(",");
  return { prefix, integer: rest.slice(0, comma), decimals: rest.slice(comma) };
}

/** Splits a total into installments; leftover cents go in the first one (app rule). */
export function splitInstallments(totalCents: number, count: number): number[] {
  const base = Math.floor(totalCents / count);
  const remainder = totalCents - base * count;
  return Array.from({ length: count }, (_, i) => (i === 0 ? base + remainder : base));
}
