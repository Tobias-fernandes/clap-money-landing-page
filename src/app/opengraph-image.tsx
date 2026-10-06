// Open Graph / social card (1200x630), rendered at build time in the app's
// look: the hero line next to a "Já previsto para o mês" card.
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "ClapMoney: veja o mês que vem antes dele chegar.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ROWS = [
  { text: "Salário", badge: "Mensal", value: "+ R$ 5.200,00", income: true },
  { text: "Aluguel", badge: "Mensal", value: "− R$ 1.650,00", income: false },
  { text: "Geladeira", badge: "5/10", value: "− R$ 239,90", income: false },
  { text: "Streaming", badge: "Mensal", value: "− R$ 39,90", income: false },
];

export default async function OpengraphImage() {
  const [regular, bold] = await Promise.all([
    readFile(join(process.cwd(), "assets/outfit-400.ttf")),
    readFile(join(process.cwd(), "assets/outfit-700.ttf")),
  ]);

  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#f5f8f6", padding: 64, fontFamily: "Outfit", color: "#111a15" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: 600 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, color: "#0f6b5a", fontSize: 36, fontWeight: 700 }}>
            <svg viewBox="0 0 32 32" width={44} height={44}>
              <g fill="#0f6b5a">
                <rect x="7" y="3" width="4" height="8" rx="2" />
                <rect x="14" y="3" width="4" height="8" rx="2" />
                <rect x="21" y="3" width="4" height="8" rx="2" />
                <path
                  fillRule="evenodd"
                  d="M9 7h13a6 6 0 0 1 6 6v2h-3.5a5.5 5.5 0 0 0 0 11H28a6 6 0 0 1-6 4H9a6 6 0 0 1-6-6V13a6 6 0 0 1 6-6Zm-.5 7.5a1.5 1.5 0 0 0 0 3h7a1.5 1.5 0 0 0 0-3h-7Z"
                />
              </g>
              <path fill="#0b5547" fillRule="evenodd" d="M25 17h3a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-3a3 3 0 0 1-3-3v-1a3 3 0 0 1 3-3Zm1.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
            </svg>
            ClapMoney
          </div>
          <div style={{ display: "flex", fontSize: 72, fontWeight: 700, lineHeight: 1.04, letterSpacing: -2.5 }}>Veja o mês que vem antes dele chegar.</div>
          <div style={{ display: "flex", fontSize: 26, color: "#5b6961" }}>clapmoney.com.br</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "auto",
            width: 440,
            alignSelf: "center",
            background: "#ffffff",
            border: "1px solid #e2e8e4",
            borderRadius: 18,
            padding: 28,
            boxShadow: "0 12px 32px rgba(16,30,22,0.1)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 22, fontWeight: 700, marginBottom: 10 }}>
            <span>Novembro 2026</span>
            <span style={{ fontSize: 17, fontWeight: 400, color: "#5b6961", background: "#f0f4f1", borderRadius: 8, padding: "4px 10px" }}>Previsto</span>
          </div>
          {ROWS.map((row) => (
            <div key={row.text} style={{ display: "flex", alignItems: "center", fontSize: 21, padding: "13px 0", borderTop: "1px solid #e2e8e4" }}>
              <span>{row.text}</span>
              <span style={{ marginLeft: 10, fontSize: 15, color: "#5b6961", background: "#f0f4f1", borderRadius: 6, padding: "2px 8px" }}>{row.badge}</span>
              <span style={{ marginLeft: "auto", color: row.income ? "#16a34a" : "#dc2626" }}>{row.value}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Outfit", data: regular, weight: 400, style: "normal" },
        { name: "Outfit", data: bold, weight: 700, style: "normal" },
      ],
    },
  );
}
