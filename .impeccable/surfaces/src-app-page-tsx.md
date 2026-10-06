---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: []
---

# Surface: ClapMoney landing (src/app/page.tsx)

Mode: Persuade. Visitor: Brazilian adult managing personal money, on phone or laptop. Action: create account at app.clapmoney.com.br/criar-conta. Proof: the product itself, rebuilt live from the app's own components with labelled sample data; no testimonials, counts or logos exist. Constraints: pt-BR, prices are placeholders in src/constants/plans.ts, logo/brand fixed.

User decision (2026-10-05): the first direction (passbook world, DotGothic16, guilloche) was rejected: "it does not follow the aesthetic of the system; use the same font". The landing is a surface inside the app's established world.

## Direction contract

THESIS: The landing is the app, opened early: every demonstration is a real ClapMoney screen fragment (dashboard cards, transaction list, import review, drawer fields) that the visitor can operate. Refuses invented marketing visuals and generic feature icon grids.

OWN-WORLD: The app's tokens copied verbatim from ../clapMoney/src/app/styles/global.css (surface / surface-muted / content / brand-solid #0F6B5A, income green, expense red, balance-line blue, 10 tag pairs), Outfit, lucide icons at 1.8-2 stroke, Card = rounded-xl + 1px border + surface, rounded-control buttons, SegmentedControl, CategoryTag/CategoryIcon, RecurrenceBadge. Dark theme = the app's dark tokens via prefers-color-scheme.

STORY: Understand that ClapMoney imports the statement and organises the month; believe it because the page runs the app's own screens, including next month already projected; act by creating a free account.

FIRST VIEWPORT: Left 6/12: h1 "Veja o mês que vem antes dele chegar." (text-64 bold tracking-hero), 19-word subtext, "Criar conta grátis" + "Ver como funciona". Right 6/12: month switcher, Saldo atual + Saídas do mês cards, "Transações do mês" list; next arrow highlighted; November/December show "Previsto" projections.

FORM: Surface inside the established app world (no concept roll needed after the user's pin). Signature interaction: month switcher with rolling balance digits and staggered row entrance; pinned import dialog changing one state per scroll step.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
