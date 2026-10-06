# ClapMoney · Landing page

Site público da ClapMoney (`clapmoney.com.br`), em **Next.js 16 + Tailwind CSS 4**. O app em si é outro projeto (`../clapMoney`, React + Vite) e fica em `app.clapmoney.com.br`; os botões "Entrar" e "Criar conta grátis" levam para lá.

O visual segue o design system do app: os tokens de `src/app/globals.css` são copiados de `../clapMoney/src/app/styles/global.css`, e a fonte é a mesma (Outfit). Os ícones vêm do mesmo pacote (lucide). Se o app mudar cores, raios ou fonte, atualize aqui também.

## Rodando

Pré-requisitos: Node 24 e pnpm (veja `.nvmrc` e `packageManager`).

```bash
pnpm install
cp .env.example .env.local   # opcional: os padrões já apontam para produção
pnpm dev                     # http://localhost:3000
```

| Comando          | O que faz                                    |
| ---------------- | -------------------------------------------- |
| `pnpm dev`       | Servidor de desenvolvimento                  |
| `pnpm build`     | Build de produção (todas as páginas estáticas) |
| `pnpm start`     | Serve o build                                |
| `pnpm lint`      | ESLint (regras do Next.js)                   |
| `pnpm typecheck` | TypeScript                                   |

## Variáveis de ambiente

| Variável               | Padrão                         | Para quê                                                   |
| ---------------------- | ------------------------------ | ---------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | `https://clapmoney.com.br`     | URL canônica, sitemap, robots.txt, Open Graph e JSON-LD    |
| `NEXT_PUBLIC_APP_URL`  | `https://app.clapmoney.com.br` | Destino de "Entrar" (`/entrar`) e "Criar conta grátis" (`/criar-conta`) |

## Deploy na Vercel

1. Importe o repositório na Vercel. O framework é detectado sozinho, sem `vercel.json`.
2. Em **Settings › Domains**, adicione `clapmoney.com.br` (e `www`, redirecionando para o domínio sem `www`).
3. As variáveis acima são opcionais; defina-as só se os domínios mudarem.

Deploys de **preview** respondem `Disallow: /` no `robots.txt` (pela variável `VERCEL_ENV`), para não competir com o domínio real nas buscas.

## SEO incluído

- Metadados por página (título, descrição, canonical, Open Graph, Twitter) em `src/app/layout.tsx` e nas páginas.
- `/sitemap.xml`, `/robots.txt` e `/manifest.webmanifest` gerados por `src/app/sitemap.ts`, `robots.ts` e `manifest.ts`.
- Imagem social 1200×630 gerada no build (`src/app/opengraph-image.tsx`, fontes em `assets/`).
- Dados estruturados: Organization, WebSite, SoftwareApplication (com a oferta grátis) e FAQPage.
- Ícones: `icon.svg`, `favicon.ico`, `apple-icon` e PNGs 192/512 para o manifest.
- Cabeçalhos de segurança em `next.config.ts`.

## Antes de publicar

- **Planos:** os valores do plano pago são marcadores (`[R$ 00,00]`, `[Recurso do plano Pro]`, `[Assinar o Pro]`) em `src/constants/plans.ts`. Procure por `TODO(pricing)`.
- **Textos legais:** `/privacidade` e `/termos` vêm de `src/constants/legal.ts`, a única cópia dos textos (o app aponta para estas páginas). Peça a revisão de um advogado e troque o e-mail de contato. Procure por `TODO(legal)`.
- **Dados de exemplo:** todas as demonstrações usam dados fictícios (`src/constants/sampleData.ts`) e estão marcadas como "Dados de exemplo" na página.

## Estrutura

```
src/
├── app/            → páginas, layout, metadados, sitemap, robots, manifest, imagens sociais
├── components/
│   ├── layout/     → Header, MobileMenu, Footer, LegalDocument
│   ├── hero/       → Hero e a prévia do painel com troca de mês
│   ├── sections/   → seções da página (Como funciona, Parcelas, Meta, Recursos…)
│   ├── features/   → células interativas de "Recursos"
│   └── ui/         → primitivos copiados do visual do app (Card, botões, tags…)
├── constants/      → URLs, planos, FAQ, textos legais, dados de exemplo
└── lib/            → fonte, formatação de dinheiro, cn, JSON-LD
```
