# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js (App Router), user's choice, deployed on Vercel. This repository is only the public marketing site for ClapMoney; the product app is a separate React + Vite project (`../clapMoney`) served at `app.clapmoney.com.br`.

## Users

Brazilian adults managing their own money (pt-BR, BRL by default) who want to know where their salary goes each month without keeping a spreadsheet by hand. They evaluate the product on a phone or laptop, usually after noticing the month ended with less money than expected.

## Product Purpose

ClapMoney is a personal finance manager: record or import income and expenses, see the month's balance, and get warned before overspending. Success for the landing: a visitor understands what ClapMoney does and creates an account at `app.clapmoney.com.br/criar-conta`.

## Positioning

The month is the unit. Import the bank's OFX statement and ClapMoney categorises it (learning from the user's previous choices), flags rows that already exist, and projects future installments ("parcelado") and monthly charges into the months ahead, so the balance of next month is already visible today.

## Operating Context

- Bank statements exported as OFX from the bank app or internet banking (the only accepted import format; max 5 MB). The file is read only to extract transactions and is not stored.
- Brazilian money habits: purchases split into installments, recurring monthly subscriptions, a financial month that may start on payday instead of day 1.
- Used on phone and desktop; light, dark, or system theme.

## Capabilities and Constraints

Confirmed (from the app code):
- Transactions with categories (custom categories, 10 colour tags), income/expense, filters by month and type kept in the URL.
- OFX import with review: categories "aprendida" (learned from history), "sugerida" (from the description) or "Revisar"; duplicates marked "Já existe".
- Recurrences: "Parcelado" (total value split into N installments, up to 72) and "Mensal" (same value monthly until "Encerrar"). Future months already show projected charges in balance, chart and totals.
- Dashboard: month balance, income/expense cards, balance chart, savings rate, top spending categories, recent transactions.
- Spending goal with alerts (amber at 80% of goal or when spending is above last month; red when exceeded).
- Preferences: currency (BRL, USD, EUR), financial month start day, hide values, home screen.
- Export: CSV (semicolon, decimal comma) and print-to-PDF.
- Keyboard shortcut N for new transaction.
- Account: profile photo, password change, full account deletion, "apagar todas as transações".
- LGPD-oriented privacy policy and terms; cookie notice with essential/all choice.

Undecided / do not invent:
- Plans and prices: there is a free plan and a paid plan, but names, prices and limits are NOT decided. The landing uses clearly marked placeholders in one constants file.
- No bank integration (Open Finance) exists; import is by OFX file only.
- No native mobile app exists.

## Brand Commitments

- Name: ClapMoney. Logo: `../clapMoney/public/logo.svg` (wordmark + wallet symbol), favicon wallet mark `../clapMoney/public/favicon.svg`. Do not redraw the logo.
- Brand greens: `#0F6B5A` (symbol, wordmark) and `#0B5547` (wallet clasp); dark-theme variants `#5DB8A5` / `#4FB09C`.
- Language pt-BR only. Plain, friendly, concrete wording (the app uses "Entradas", "Saídas", "Saldo", "Importar extrato").
- The user rejected the previous landing page design; the landing gets a new visual world, keeping only the logo and brand green.

## Evidence on Hand

- Real product behaviour and copy in `../clapMoney/src` (components and constants).
- Legal texts: `src/constants/legal.ts` in this repo is the only copy (the app links to /privacidade and /termos on this site). Must be reviewed by a lawyer before publishing; contact e-mail is a placeholder (`LEGAL_CONTACT_EMAIL`).
- No testimonials, user counts, press, ratings, or customer logos exist. Never fabricate them.
- No real screenshots exported; product UI may be rebuilt as live components with demonstration data clearly being sample data.

## Product Principles

1. Show next month today: projections of installments and subscriptions are the headline mechanism.
2. Less typing: import and learned categories replace manual entry.
3. Honest about money and data: no fabricated proof, clear privacy (file not stored, LGPD, account deletion).
4. Calm control, not guilt: alerts warn early instead of scolding late.

## Accessibility & Inclusion

WCAG AA contrast in both themes, keyboard reachable interactions, `prefers-reduced-motion` respected; values must be readable for users with low financial literacy (plain pt-BR, no jargon).
