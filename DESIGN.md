---
name: ClapMoney Landing
description: The ClapMoney app, opened early. A marketing surface built from the app's own tokens and screen fragments.
colors:
  brand-solid: "#0f6b5a"
  brand-emphasis: "#0f6b5a"
  brand-700: "#0b5547"
  brand-50: "#e2efeb"
  on-brand: "#ffffff"
  brand-ring: "rgb(15 107 90 / 0.22)"
  income: "#16a34a"
  income-tint: "#e7f6ec"
  expense: "#dc2626"
  expense-solid: "#c81e1e"
  expense-tint: "#fdeeee"
  balance-line: "#2563eb"
  warn: "#d97706"
  warn-text: "#92500a"
  warn-tint: "#fdf4e4"
  surface: "#ffffff"
  surface-muted: "#f5f8f6"
  surface-strong: "#f0f4f1"
  surface-hover: "#f1f5f2"
  track: "#edf1ee"
  content: "#111a15"
  content-muted: "#5b6961"
  content-faint: "#7e8b84"
  border: "#e2e8e4"
  border-strong: "#cbd5cf"
  tag-0: "#e4eee1"
  on-tag-0: "#3b5735"
  tag-1: "#ece8f6"
  on-tag-1: "#54497a"
  tag-2: "#e2edf5"
  on-tag-2: "#2f5672"
  tag-3: "#f7eadc"
  on-tag-3: "#7a4c22"
  tag-4: "#e7ebf0"
  on-tag-4: "#3e4b5d"
  tag-5: "#f1ece0"
  on-tag-5: "#645432"
  tag-6: "#f4e6ed"
  on-tag-6: "#7a3e5b"
  tag-7: "#f5f0d8"
  on-tag-7: "#685a1c"
  tag-8: "#dff0ec"
  on-tag-8: "#2c5d56"
  tag-9: "#ecedea"
  on-tag-9: "#53554f"
typography:
  display:
    fontFamily: "Outfit, ui-sans-serif, system-ui, sans-serif"
    fontSize: "3.75rem"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Outfit, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.625rem"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  figure:
    fontFamily: "Outfit, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.375rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontFeature: "\"tnum\""
  title:
    fontFamily: "Outfit, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  body-lead:
    fontFamily: "Outfit, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Outfit, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Outfit, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
  caption:
    fontFamily: "Outfit, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
rounded:
  md: "6px"
  tag: "7px"
  lg: "8px"
  control: "10px"
  xl: "12px"
  2xl: "16px"
  full: "9999px"
spacing:
  gutter-sm: "16px"
  gutter-md: "24px"
  grid-gap: "12px"
  section-sm: "80px"
  section-lg: "112px"
  container: "1200px"
components:
  button-primary:
    backgroundColor: "{colors.brand-solid}"
    textColor: "{colors.on-brand}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    height: "38px"
    padding: "0 16px"
  button-primary-lg:
    backgroundColor: "{colors.brand-solid}"
    textColor: "{colors.on-brand}"
    rounded: "{rounded.control}"
    height: "42px"
    padding: "0 22px"
  button-icon:
    rounded: "{rounded.control}"
    size: "34px"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.content}"
    rounded: "{rounded.control}"
    height: "38px"
    padding: "0 16px"
  button-secondary-hover:
    backgroundColor: "{colors.surface-hover}"
  button-ghost:
    textColor: "{colors.content}"
    rounded: "{rounded.control}"
    height: "38px"
    padding: "0 16px"
  button-ghost-hover:
    backgroundColor: "{colors.surface-hover}"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
    padding: "20px"
  app-window:
    backgroundColor: "{colors.surface-muted}"
    rounded: "{rounded.2xl}"
    padding: "14px"
  segmented-control:
    backgroundColor: "{colors.surface-strong}"
    rounded: "{rounded.control}"
    padding: "3px"
  segmented-control-selected:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.brand-emphasis}"
    rounded: "{rounded.tag}"
    padding: "5px 12px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.content}"
    rounded: "{rounded.control}"
    height: "42px"
    padding: "0 12px"
  checkbox:
    rounded: "{rounded.md}"
    size: "18px"
  checkbox-checked:
    backgroundColor: "{colors.brand-solid}"
    textColor: "{colors.on-brand}"
  review-tab:
    textColor: "{colors.content-muted}"
    rounded: "{rounded.lg}"
    height: "34px"
    padding: "0 12px"
  review-tab-active:
    backgroundColor: "{colors.content}"
    textColor: "{colors.surface}"
  goal-preview:
    backgroundColor: "{colors.surface-strong}"
    rounded: "{rounded.control}"
    padding: "14px 16px"
  month-nav-button:
    textColor: "{colors.content-muted}"
    rounded: "{rounded.lg}"
    size: "32px"
  month-nav-button-hover:
    backgroundColor: "{colors.surface-hover}"
    textColor: "{colors.content}"
  category-tag:
    typography: "{typography.caption}"
    rounded: "{rounded.md}"
    padding: "3px 8px"
  category-icon:
    rounded: "{rounded.lg}"
    size: "32px"
  recurrence-badge:
    backgroundColor: "{colors.surface-strong}"
    textColor: "{colors.content-muted}"
    rounded: "{rounded.md}"
    padding: "1px 6px"
  status-chip:
    backgroundColor: "{colors.brand-50}"
    textColor: "{colors.brand-emphasis}"
    rounded: "{rounded.md}"
    padding: "4px 8px"
  nav-link:
    textColor: "{colors.content-muted}"
    typography: "{typography.label}"
    rounded: "{rounded.lg}"
    padding: "8px 12px"
  nav-link-hover:
    backgroundColor: "{colors.surface-hover}"
    textColor: "{colors.content}"
---

# Design System: ClapMoney Landing

**Source of truth.** Every token in `src/app/globals.css` is copied verbatim from the app, `../clapMoney/src/app/styles/global.css`, which already carries the landing-only tokens (`--text-68`, `--tracking-hero`, `--shadow-mockup`, the landing header spacing). Change tokens there first and copy them here; never fork a value on the landing. The only intentional differences: dark mode here follows `prefers-color-scheme` (the app uses a `.dark` class), and Outfit is loaded through `next/font` (`--font-outfit`) instead of the app's `"Outfit Variable"` package. The app's `--animate-pop` is not copied because the landing does not use it.

## Overview

**Creative North Star: "The App, Opened Early"**

The landing is not a marketing skin over the product; it is the product's own visual world, rebuilt fragment by fragment. Pale green-grey page, white cards with one hairline border, a single deep teal for action and selection, and money colors (green in, red out) that mean exactly what they mean inside the app. Every demonstration on the page is a working ClapMoney screen fragment with labelled sample data, so the visitor learns the interface before signing up.

Density is the app's: compact 13 to 15px interface text inside cards, set against a larger marketing layer (section headlines at 42px, hero at 60px) that lives outside the cards. Depth is flat by default; shadows are reserved for things that float. Interactive fragments copy the app's own controls (MonthNav, RepeatField, GoalPreview, CategoryFormModal pickers, TypeToggle, ImportReviewTabs) class for class. Motion is small and purposeful: rows rise into lists, balance digits roll, the pinned import dialog changes one state per scroll step, and all of it stands down under reduced motion.

**Key Characteristics:**
- Tokens, type, radii and icons identical to the ClapMoney app; the landing adds only a heading scale and the hero frame.
- Flat white cards on a muted green-grey page; one border, no shadow.
- Deep teal brand used for primary actions, selection and focus, never as a large fill except the soft brand-50 tint.
- Money semantics are fixed: income green, expense red, warn amber, balance-line blue.
- Every demo is labelled "Dados de exemplo".
- Dark theme is the app's dark token set, switched by the device setting.

## Colors

A quiet, green-tinted neutral system with one teal accent and a strict set of money semantics.

### Primary
- **ClapMoney Teal** (brand-solid / brand-emphasis): primary buttons, the active step number, checked checkboxes, the goal-preview bar fill in the safe zone, links and selected text. In dark mode it lifts to a lighter mint teal (brand-solid #4fb09c, brand-emphasis #5db8a5) with near-black text on it.
- **Deep Teal** (brand-700): the wallet mark's clasp in light mode; the numbered 600/700 steps never change in dark mode.
- **Mint Wash** (brand-50): soft brand background for the "Mês atual" chip, the inactive step numbers, the upload drop zone, the highlighted month arrow, the final CTA panel and text selection.
- **Focus Halo** (brand-ring): the 3px focus ring on every interactive element.

### Secondary
- **Income Green** (income, income-solid, income-tint): positive amounts, the "entradas" review chip, and the selected "Entrada" option of the type toggle (income-solid).
- **Expense Red** (expense, expense-solid, expense-tint): negative amounts, "Saídas do mês", installment amounts, the over-goal bar and banner, and the selected "Saída" option of the type toggle (expense-solid).
- **Balance Blue** (balance-line): the balance line in the chart cell only.

### Tertiary
- **Alert Amber** (warn, warn-text, warn-tint): the 80%-of-goal bar, status label and banner, and the "Revisar" chip and attention dot in the import review.

### Neutral
- **Card White** (surface): cards, inputs, controls, the selected segment, header buttons.
- **Page Mist** (surface-muted): page background, header background, the app-window frame.
- **Inset Grey** (surface-strong): segmented-control and type-toggle tracks, recurrence badges, the "Previsto" chip, projection notes, the goal preview and the category "Prévia" row.
- **Row Hover** (surface-hover): hover on rows, nav links, secondary and ghost buttons.
- **Track** (track): progress and goal-preview tracks.
- **Ink** (content), **Muted Ink** (content-muted), **Faint Ink** (content-faint): main text, secondary text, captions and dates. Ink also fills the active import-review tab, with surface-colored text.
- **Hairline** (border) and **Strong Hairline** (border-strong): every border and divider is `border`; `border-strong` marks unchecked or excluded states.
- **Category Pairs** (tag-0 to tag-9 with on-tag-0 to on-tag-9): ten fixed background/text pairs for category tags and icons. In dark mode the background becomes the text color at about 33% alpha and the text becomes the light background.

### Named Rules
**The Verbatim Rule.** A color exists on the landing only if it exists in `../clapMoney/src/app/styles/global.css`. No landing-only hues.

**The Money Means Money Rule.** Green and red mark income and expense, amber marks a warning. They are never decoration, never section accents.

**The Ten Pairs Rule.** Categories pick one of the ten tag pairs by index; no custom category colors.

## Typography

**Display Font:** Outfit (with ui-sans-serif, system-ui, sans-serif)
**Body Font:** Outfit
**Label/Mono Font:** Outfit with tabular figures for every amount, date and count

**Character:** One geometric sans carries everything, as in the app. Hierarchy comes from size, weight and negative tracking, never from a second family.

The scale is named by pixel size (`text-11` through `text-68`) and copied from the app. Four tracking steps tighten as size grows: heading -0.01em, display -0.02em, section -0.025em, hero -0.035em.

### Hierarchy
- **Display** (700, 44px on phones, 60px at md, 52px at lg, 60px at xl, line-height 1.04, hero tracking): the hero h1 only.
- **Headline** (700, 32px rising to 42px at md, line-height 1.08, section tracking): every section h2, through SectionHeading, plus the FAQ and final-CTA titles at the same scale.
- **Figure** (700, 26 to 38px, display tracking, tabular): the hero balance inside its card; plan prices at 42px.
- **Title** (600, 20px in feature cells, 24 to 26px for import steps, heading tracking): card and step titles. Interface card titles inside fragments use 15 to 18px semibold.
- **Body lead** (400, 17 to 20px, line-height 1.625, content-muted): hero subtext (max 460px) and section intros (max 600px).
- **Body** (400, 15 to 16px, line-height 1.625): step bodies, plan summaries, feature descriptions; input text is 15px.
- **Label** (500, 14px, content-muted for field labels): button text (15px at lg), nav links, field labels, card labels like "Saldo atual", segment options. The month name in the month nav is 15px medium.
- **Caption** (400, 12 to 13px, content-faint): dates, meta lines, chip text, and the "Dados de exemplo" notes.

### Named Rules
**The One Family Rule.** Outfit only. Contrast comes from 400/500/600/700 and size, not from a second face.

**The Tabular Money Rule.** Every money value, date and count uses tabular figures so digits align and rolling digits do not jitter.

**The Balanced Heading Rule.** h1 to h3 use balanced wrapping and paragraphs use pretty wrapping (set globally).

## Layout

- **Container:** one 1200px max-width container centered, with 16px side gutters on phones and 24px from md. The header uses the same container.
- **Breakpoints:** the app's own, md at 720px (phone/tablet) and lg at 1000px (tablet/desktop); Tailwind's sm and xl are used only for small refinements (full-width buttons below sm, hero size at xl).
- **Section rhythm:** each section is separated by a top hairline and padded 80px vertically, 112px from lg (the final CTA uses 96px at lg). Heading-to-content gap is 48 to 64px.
- **Grids:** two-column sections use a 12-column grid at lg, split 5/7 (heading or steps left, live fragment right) with 40 to 56px column gaps. Pricing uses three columns (heading plus two plan cards, 12px gap). Features use a 6-column bento at lg (one 3x2 cell, two 3-wide cells, three 2-wide cells) with 12px gaps, collapsing to 2 columns at md and 1 on phones.
- **Hero:** fills the viewport below the 64px header at lg (min-height `calc(100dvh - 4rem)`), two columns at 1fr / 1.15fr (text / preview), 48px gap rising to 80px at xl, vertically centered, 32px vertical padding; on phones it stacks at its natural height.
- **Sticky import steps:** in "Como funciona" each step is at least 60vh tall at lg and the import dialog sits sticky at the vertical center of the right 7 columns; on phones each step shows its own dialog state inline.
- **Header:** sticky, 64px tall, page-mist background with a bottom hairline; section links centered at lg, collapsing to a mobile menu.

## Elevation & Depth

Flat by default, layered by tone: cards are white on the muted page with one hairline border. Shadows appear only on things that float above the page or on a selected segment. Dark mode cannot redefine a shadow, so a floating element pairs the light shadow with its dark variant.

### Shadow Vocabulary
- **Float** (`box-shadow: 0 12px 32px rgb(16 30 22 / 0.1), 0 2px 6px rgb(16 30 22 / 0.05)`): popovers, drawers, toasts, and the import dialogs and drawer fragments shown on the page.
- **Float dark** (`box-shadow: 0 12px 32px rgb(0 0 0 / 0.45)`): the dark-mode pair of Float and Mockup.
- **Mockup** (`box-shadow: 0 30px 60px -20px rgb(16 30 22 / 0.18)`): landing only, the hero's app-window frame floating over the page.
- **Segment** (`box-shadow: 0 1px 2px rgb(0 0 0 / 0.08)`): the selected segment in a segmented control only.
- **Focus ring** (`box-shadow: 0 0 0 3px` brand-ring): focus on every interactive element; outlines are disabled globally in its favor.

### Named Rules
**The Only Floaters Cast Shadows Rule.** A resting card never has a shadow. If it does not float, it gets a border instead.

## Shapes

Soft, consistent rounding, stepped by element size: 6px for chips, badges and checkboxes, 7px for segments, 8px for category icons, icon-picker cells, row hovers, month-nav buttons, review tabs and type-toggle options, 10px for buttons, inputs, segmented tracks, the goal preview and banners, 12px for cards, the type-toggle track and inner drawer fragments, 16px for the outer app-window frame and the final CTA panel, full round for bars, dots and color swatches. Borders are always 1px hairlines; the one exception is the 2px dashed brand border on the upload drop zone, copied from the app. Icons are lucide line icons at 1.8 stroke (category icons, decorative icons) or 2 stroke (controls, badges, chips).

## Components

### Buttons
Compact, app-weight buttons; the landing never inflates them into marketing pills.
- **Shape:** gently rounded (10px).
- **Primary:** teal background, white text, medium weight. Sizes copied from the app's Button variants: sm 32px (12px padding, 14px text), md 38px (16px padding, 14px text), lg 42px (22px padding, 15px text), icon 34px square. There is no larger size; hero, pricing and final CTA buttons use lg.
- **Hover / Focus:** primary brightens slightly (brightness 1.08); secondary and ghost take the row-hover tint, with a color transition only and no press scale. Focus shows the 3px brand ring.
- **Secondary:** white surface with a hairline border and ink text. **Ghost:** no background until hover.
- **Disabled:** 50% opacity, no pointer events.
- **Icons:** always before the label, 16px (15px on the CSV/PDF export buttons); on secondary buttons the icon is brand teal at 1.9 stroke, as in the app's "Importar extrato". "Excluir conta" is the app's secondary button with an expense-red border and text.
- **Landing sizes (from the app's own public page, features/landing):** header "Entrar" is a ghost button and "Criar conta grátis" a primary one, both 40px tall with 16px text; header nav links 16px; wordmark 19px with a 26px mark. The hero and closing CTA use the app landing's hero button: primary, 48px (52px at md), 12px radius, 16px text (17px at md), trailing arrow that nudges 2px right on hover, lift of 2px on fine-pointer hover, 97% press. Its companion is a muted 15 to 17px text link ("Como funciona"). Pricing and mobile-menu buttons are lg at 46px with 16px text.

### Chips
- **Category tag:** tag-pair background and text, 13px medium, 12px lucide icon, 6px radius.
- **Recurrence badge:** inset-grey background, muted text, repeat icon, "3/6" or "Mensal" in 12px tabular.
- **Status chip:** mint wash with teal text ("Mês atual", "Este mês"); the projected state switches to inset grey with a calendar icon ("Previsto"). Import-review chips use warn tint ("Revisar") or a strong-hairline outline ("Já existe").
- **Import header chips:** 14px medium, 8px radius: total on page mist with a hairline, entradas on income tint, saídas on expense tint, aprendidas on mint wash.
- **Import review tabs:** 34px tall bordered tabs with 8px radius and 14px medium text plus a 13px count; the active tab is filled ink with surface text, the others hairline-bordered and muted. An amber dot marks a tab that needs attention.

### Cards / Containers
- **Corner Style:** 12px.
- **Background:** card white (surface).
- **Shadow Strategy:** none at rest (see Elevation & Depth).
- **Border:** 1px hairline.
- **Internal Padding:** 14 to 20px inside interface fragments, 20 to 28px for feature and plan cards. The highlighted plan swaps the hairline for a teal border plus a 1px teal ring.

### Inputs / Fields
- **Input:** the app's Input: 42px tall, white surface, hairline border, 10px radius, 12px padding, 15px text, faint placeholder. Focus turns the border teal and adds the 3px brand ring. Labels sit 8px above in 14px medium muted text. Amount fields use the app's currency mask (digits fill from the cents). The compact installment-count field is 38px tall and 72px wide, centered and tabular.
- **Segmented control:** the app's shared SegmentedControl: inset-grey track, 10px radius, 3px padding, 2px gaps, hairline border; options are 14px medium muted text, and the selected one is white with teal text and the segment shadow (7px radius).
- **Repeat field:** the app's RepeatField: a "Repetir" label, the segmented control (Não repete / Parcelado / Mensal), the inline sentence "Em [count] parcelas mensais", and a faint 14px tabular summary of the installment values and last month.
- **Type toggle:** the app's TypeToggle: two options in a 12px-radius inset-grey track with 4px padding and a hairline; options are 38px tall with 8px radius; the selected "Entrada" fills income-solid and "Saída" fills expense-solid, each with on-color text.
- **Checkbox:** 18px, 6px radius, 2px border; checked is teal fill and border with a white check, unchecked a strong hairline.
- **Category pickers:** the app's CategoryFormModal pickers: an 8-column grid of square, hairline-bordered icon buttons (8px radius, 17px icon at 1.8 stroke); the selected one takes the current tag pair with a border in the current color. Color swatches are 30px circles in each tag pair; the selected one gets a current-color border plus a 2px ring offset 2px from the surface. A "Prévia" row on inset grey shows the resulting CategoryTag.
- **Goal preview:** the app's GoalPreview: an inset-grey box (10px radius, 14px by 16px padding) with the month's spending and a status label ("Dentro da meta" in teal, "Atenção" in amber text, "Meta ultrapassada" in expense red, each with its percentage), an 8px fully rounded track bar filled teal, amber or red, a 2px marker at 80%, and 12px faint labels 0 / 80% / goal.
- **Banners:** the app's SpendingAlert: 10px radius, 14px text with a 16px warning icon, warn tint at 80% of the goal and expense tint past it.

### FAQ (outlined)
Each question is an outlined box: transparent background, 12px radius, 1px hairline border that strengthens on hover and turns brand teal while open. Question 17px (18px at md) medium; answer 16px (17px at md) muted, relaxed. A plus icon rotates 45 degrees into a close mark and turns teal when open. Items share `name="faq"`, so one opens at a time; the first starts open.

### Navigation
- **Header links:** 14px medium, muted ink, 8px radius, 8px by 12px padding; hover shows row-hover tint and ink text. "Entrar" is a secondary button, "Criar conta grátis" a primary one (shrinking to 34px tall on phones).
- **Mobile:** links move into a menu below lg.

### Section Heading (landing addition)
One scale for every section: 32px bold rising to 42px at md, line-height 1.08, section tracking, max width 720px; optional intro at 17 to 18px relaxed muted text, max 600px, 16px below.

### App Window (landing addition)
The hero dashboard sits in a frame that reads as the app's window: page-mist background, hairline border, 16px radius, 10 to 14px padding, the Mockup shadow (Float dark in dark mode). Inside it, ordinary Cards repeat the dashboard: the app's MonthNav (plain 32px chevron buttons with 8px radius, muted icons at 1.8 stroke, row-hover tint on hover, a 15px medium month name between them, 50% opacity and disabled at either end), balance and expense cards, and a fixed-height transaction list showing five rows.

### Transaction Row
52px tall: 32px category icon (tag-pair square, 8px radius, 16px icon at 1.8 stroke), description in 14px with an optional recurrence badge, a 13px faint tabular meta line, and the signed amount in income or expense color.

### Installment Strip
One row of months below a hairline: up to six months (three on phones) plus a "+N meses" cell. Each month shows a 13px medium month name (the current one in teal), a faint 13px "n/N" line, and the 16px semibold tabular amount in expense red.

### Motion
- **Row-in:** list rows fade and rise 6px over 320ms on the ease-out curve (`cubic-bezier(0.23, 1, 0.32, 1)`), staggered 45ms per row. They only animate when the user has not asked for reduced motion.
- **Rolling digits:** balance digits roll vertically to the new value, 460 to 640ms per digit on ease-out, varying by position; screen readers get the plain value. Instant under reduced motion.
- **Import steps:** the pinned dialog crossfades between states with opacity, a 4px blur and 98% scale over 300ms; step numbers and titles change color over 300ms. Transitions are off under reduced motion.
- **Indeterminate bar:** 1.1s ease-in-out loop while "Lendo seu extrato…", only when motion is allowed.
- **FAQ:** native details open by animating height over 240ms; no transition under reduced motion. Smooth anchor scrolling is also turned off under reduced motion.

## Do's and Don'ts

### Do:
- **Do** take every color, size, radius and shadow from `../clapMoney/src/app/styles/global.css`, and add new landing tokens there first.
- **Do** build demonstrations from the app's primitives (Card, button classes, SegmentedControl, input classes, CategoryTag, CategoryIcon, RecurrenceBadge), copying the app's classes rather than restyling them, with labelled sample data ("Dados de exemplo").
- **Do** keep resting cards flat: white surface, 1px hairline, 12px radius.
- **Do** use the 1200px container, 80px/112px section padding and the 12-column 5/7 split for two-column sections.
- **Do** use tabular figures for every amount and keep income green, expense red.
- **Do** gate every animation on reduced motion, and give animated values a plain screen-reader text.
- **Do** use lucide icons at 1.8 or 2 stroke.

### Don't:
- **Don't** introduce a color, font or radius that the app does not have.
- **Don't** put shadows on resting cards; Float, Mockup and Segment are the only shadows, each for its own role.
- **Don't** add button sizes or press effects the app's Button variants do not have.
- **Don't** use green, red or amber as decoration or section accents.
- **Don't** give categories colors outside the ten tag pairs.
- **Don't** add a second typeface.
- **Don't** show a demo without its "Dados de exemplo" label.
