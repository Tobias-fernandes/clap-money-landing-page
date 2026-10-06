// Feature: "Evolução do saldo", drawn like the app's chart (blue line, light
// fill, dashed grid) from the October sample series.
import { BALANCE_SERIES, OPENING_BALANCE_CENTS } from "@/constants/sampleData";
import { Card } from "@/components/ui/Card";
import { formatMoney } from "@/lib/money";

const W = 320;
const H = 120;

function buildPath() {
  const points = [OPENING_BALANCE_CENTS, ...BALANCE_SERIES];
  const max = Math.max(...points);
  const min = Math.min(...points);
  const step = W / (points.length - 1);
  const y = (v: number) => H - 6 - ((v - min) / (max - min)) * (H - 14);
  const line = points.map((v, i) => `${i === 0 ? "M" : "L"}${(i * step).toFixed(1)} ${y(v).toFixed(1)}`).join(" ");
  return { line, area: `${line} L${W} ${H} L0 ${H} Z` };
}

export function BalanceChartCell() {
  const { line, area } = buildPath();
  const first = OPENING_BALANCE_CENTS;
  const last = BALANCE_SERIES[BALANCE_SERIES.length - 1] ?? 0;
  const delta = last - first;

  return (
    <Card className="flex h-full flex-col gap-4 p-5 md:p-6">
      <div>
        <h3 className="text-20 font-semibold tracking-heading">Evolução do saldo</h3>
        <p className="mt-1 text-14 text-content-muted tabular-nums">
          01/10/2026 a 31/10/2026 <span className="font-medium text-income">+ {formatMoney(delta)} no período</span>
        </p>
      </div>
      <figure className="mt-auto">
        <svg viewBox={`0 0 ${W} ${H}`} className="h-32 w-full" preserveAspectRatio="none" role="img" aria-label="Gráfico do saldo de outubro: sobe no dia 1 com o salário e desce aos poucos com os gastos.">
          {[0.25, 0.5, 0.75].map((f) => (
            <line key={f} x1="0" x2={W} y1={H * f} y2={H * f} stroke="var(--color-border)" strokeDasharray="3 4" vectorEffect="non-scaling-stroke" />
          ))}
          <path d={area} fill="var(--color-balance-line)" opacity="0.08" />
          <path d={line} fill="none" stroke="var(--color-balance-line)" strokeWidth="2" vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
        </svg>
        <figcaption className="mt-2 flex justify-between text-12 text-content-faint">
          <span>1 out</span>
          <span>15 out</span>
          <span>31 out</span>
        </figcaption>
      </figure>
    </Card>
  );
}
