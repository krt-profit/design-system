# DAS KARTELL — Profit Basetool · Design System

The design system of the **Profit Basetool**, the squadron-management web app of the
**„DAS KARTELL"** organization in *Star Citizen*. It defines the brand's
dark sci-fi "technical HUD" look: house orange on a dark gray canvas, **Lato** as the
only typeface, panels and controls with a **4 px radius**, corner-bracket HUD frames
and a fixed department color system.

> **In one line:** a dark space-organization HUD — geometric, built from *rings
> (planets)* and *triangles (ships/stars)*, lit by a single signature orange
> `#E77E23`, on the same dark gray surfaces as das-kartell.org.

---

## Sources

- **GitHub — `krt-profit/basetool`** · <https://github.com/krt-profit/basetool>
  The Spring Boot + Thymeleaf app. Its stylesheets
  (`frontend/src/main/resources/static/css/styles.css` plus the per-feature CSS) implement
  this system; templates under `frontend/.../templates/`, copy in
  `messages_de.properties` / `messages_en.properties`, Keycloak theme in
  `keycloak-theme/krt-theme/`.
- **GitHub — `krt-profit/basetool-sc-extractor`** · <https://github.com/krt-profit/basetool-sc-extractor>
  Desktop extractor (Compose Desktop), KRT theme in `src/main/kotlin/.../ui/Theme.kt`.
- **GitHub — `krt-profit/design-system`** · this project.
- **das-kartell.org** — the org website. The surface grays, the text colours and the 4 px
  radius are taken from it, measured as computed CSS values in the browser (DevTools / the
  colour picker). Never measure colours from screenshots: with Windows HDR on, the Snipping
  Tool lifts dark grays and the orange, and the values come out wrong.
- **Corporate Design Manual V2** (`uploads/KRT_Styleguide_V2.pdf`, *Restricted —
  internal use only*). Authoritative for the logo, the typeface and the
  **Bereichsfarben** (department colors).

---

## What the product is

The Profit Basetool is an internal tool for an *org* (player organization) in
*Star Citizen*. Members plan operations and earn/track in-game profit together.

- **Missions & Operations** — plan, brief, crew and review missions („Einsätze"); roll
  them up into operations with shared finances and payouts.
- **Hangar & Inventory** — ships (manufacturer, insurance, fitted status) and
  personal/squadron material inventories („Lager").
- **Refinery & Materials** — refinery job orders, the price/material matrix across
  trade terminals, profit per ship/route.
- **Job Orders** („Aufträge") — cross-squadron commodity requests with handover logging.
- **Bank** — org-unit accounts, custody per holder, permissions.
- **Members & Admin** — roles/permissions, UEX data sync, system settings.

The tenant unit is the **OrgUnit** — a **Staffel** (squadron) or a
**Spezialkommando (SK)**. German is the default language; English is fully translated.

---

## Color system

All values live in [`tokens.json`](tokens.json) → [`tokens.css`](tokens.css).

### House colors

| Role | Token | Hex | Use |
| :-- | :-- | :-- | :-- |
| Hausfarbe (house orange) | `--color-primary` | `#E77E23` | CTA fill, headings, links, focus, HUD brackets, 2 px header/table rule; the same orange the website uses |
| Zierfarbe hell | `--color-accent-light` | `#EEB64B` | hover of every orange element; orange-family text on control fills |
| Zierfarbe dunkel | `--color-accent-dark` | `#C45C00` | admin-mode chrome, deep accents (not as text) |
| Schwarz | `--color-bg-black` | `#000000` | text on orange (7.4 : 1) and on the light department fills, shadows — **not** a page background |
| Weiß | `--color-white` | `#FFFFFF` | data values, selected-control text, text on dark fills |

**Text on orange is always dark.** White on `#E77E23` reaches only 2.8 : 1 and is not allowed.

### Surfaces & neutrals

| Role | Token | Hex | Use |
| :-- | :-- | :-- | :-- |
| Canvas | `--color-canvas` → `--surface-canvas` | `#0F0F0F` | page background, page head, inset boxes inside a panel (`--surface-inset`) |
| Leiste (bar) | `--color-surface-input` → `--surface-bar` | `#1A1D21` | header, footer, tab bar, table head, inset fields (code, meters, facts bar) |
| Panel (Grau 4) | `--color-gray-4` / `--color-bg-dark-gray` → `--surface-panel` | `#282C30` | cards, tables, `.list-panel`, modals, sidebar, toasts |
| Control | `--color-control` → `--control-bg` | `#373E43` | resting fill of every non-CTA control; table-row hover |
| Control hover | `--color-control-hover` → `--control-bg-hover` | `#434B51` | hover fill of controls and segments |
| Trennlinie (Grau 3) | `--color-gray-3` → `--surface-raised` | `#36373B` | decorative hairlines and panel frames only; `.btn-secondary` fill |
| Control-Rand (Grau 2) | `--color-gray-2` → `--control-border` | `#8F9399` | border of every control (4.6 : 1 on panel, 3.5 : 1 on a control fill), scrollbar thumb, status dots |
| Zähler-Badge | `--color-count-badge` | `#2F394C` | title counter `.count-badge`, white digits 11.6 : 1 |
| Text (Grau 1) | `--color-gray-1` | `#D1D2D3` | body text, labels, table text |
| Gedämpfter Text | `--color-gray-2-text` | `#A2A5A9` | hints, placeholders, field caps, units, inactive tabs |

Contrast of the text tokens:

| Text | Canvas `#0F0F0F` | Bar `#1A1D21` | Panel `#282C30` | Control `#373E43` |
| :-- | --: | --: | --: | --: |
| `#D1D2D3` text | 12.7 | 11.2 | 9.3 | 7.2 |
| `#A2A5A9` muted | 7.7 | 6.8 | 5.7 | 4.4 (bold/large only) |
| `#FFFFFF` data | 19.2 | 16.9 | 14.1 | 10.9 |
| `#E77E23` orange | 6.8 | 6.0 | 5.0 | 3.8 (bold/large only; small text takes `--color-accent-light`, 5.9) |

Muted text is not used on the control-hover fill (3.6 : 1) — hovered controls switch
their text to Grau 1 or white.

### Bereichsfarben (departments)

Each Kartell department owns one fixed hue. **The values are prescribed and are never
altered**, and never used for the logo.

| Department | Token | Hex | Tag text |
| :-- | :-- | :-- | :-- |
| Raumüberlegenheit | `--color-dept-raumueberlegenheit` | `#37BBC0` | black `--color-bg-black` |
| Forschung | `--color-dept-forschung` | `#355DDC` | white |
| Sub-Radar | `--color-dept-sub-radar` | `#A3000A` | white |
| Marinekorps | `--color-dept-marinekorps` | `#7A5E96` | white |
| Profit | `--color-dept-profit` | `#239E33` | black `--color-bg-black` |
| Search and Rescue | `--color-dept-search-rescue` | `#FFD23F` | black `--color-bg-black` |

On the gray surfaces several department hues are too dark to be read as text or as a
thin border, so a department tag is a **filled** chip in the department color with the
text color from the table (all ≥ 5.4 : 1): `.dept-tag.dept-tag--<slug>`. Aliases
`--color-dept-combat` / `-research` / `-marine` (and the matching tag modifiers) resolve
to Raumüberlegenheit / Forschung / Marinekorps.

### Status

Fills and borders reuse the department values: danger `#A3000A`, success `#239E33`,
warning `#FFD23F`, info `#355DDC`. **As text** use the text tints:
`--color-danger-text` `#FF7A70`, `--color-success-text` `#4CCB5C`,
`--color-info-text` `#8FB2F5` (all ≥ 5.5 : 1 on the panel).

### Planet-system tints

The categorical palette of the price matrix. A terminal column is tinted by its UEX
planet: the `--krt-planet-<p>` fill sits behind the column header, the
`--krt-planet-<p>-stripe` hue is the 2 px left stripe of its body cells. `hash-0` …
`hash-11` are the twelve buckets for unknown planets. They carry **planet identity
only** — never status, department or action.

| Planet | Header fill | Hex | Cell stripe | Hex |
| :-- | :-- | :-- | :-- | :-- |
| `hurston` | `--krt-planet-hurston` | `#3A2519` | `--krt-planet-hurston-stripe` | `#7A4A2E` |
| `crusader` | `--krt-planet-crusader` | `#3A2C26` | `--krt-planet-crusader-stripe` | `#C97A6A` |
| `arccorp` | `--krt-planet-arccorp` | `#3A2C1A` | `--krt-planet-arccorp-stripe` | `#B5722B` |
| `microtech` | `--krt-planet-microtech` | `#1F2C3A` | `--krt-planet-microtech-stripe` | `#5A8FB8` |
| `pyro-1` | `--krt-planet-pyro-1` | `#3A3019` | `--krt-planet-pyro-1-stripe` | `#B89538` |
| `pyro-2` | `--krt-planet-pyro-2` | `#2A2018` | `--krt-planet-pyro-2-stripe` | `#8A6F4A` |
| `pyro-3` | `--krt-planet-pyro-3` | `#3A1F1A` | `--krt-planet-pyro-3-stripe` | `#B8503A` |
| `pyro-4` | `--krt-planet-pyro-4` | `#1A2A2A` | `--krt-planet-pyro-4-stripe` | `#4A8A8A` |
| `pyro-5` | `--krt-planet-pyro-5` | `#2A1A2A` | `--krt-planet-pyro-5-stripe` | `#8A4A8A` |
| `pyro-6` | `--krt-planet-pyro-6` | `#2A2A18` | `--krt-planet-pyro-6-stripe` | `#8A8A3A` |
| `terra` | `--krt-planet-terra` | `#1A323A` | `--krt-planet-terra-stripe` | `#3A8AA8` |
| `delamar` | `--krt-planet-delamar` | `#262626` | `--krt-planet-delamar-stripe` | `#7A7A7A` |
| `hash-0` | `--krt-planet-hash-0` | `#3A2020` | `--krt-planet-hash-0-stripe` | `#A85050` |
| `hash-1` | `--krt-planet-hash-1` | `#3A2C20` | `--krt-planet-hash-1-stripe` | `#A87850` |
| `hash-2` | `--krt-planet-hash-2` | `#3A3A20` | `--krt-planet-hash-2-stripe` | `#A8A850` |
| `hash-3` | `--krt-planet-hash-3` | `#2C3A20` | `--krt-planet-hash-3-stripe` | `#78A850` |
| `hash-4` | `--krt-planet-hash-4` | `#203A20` | `--krt-planet-hash-4-stripe` | `#50A850` |
| `hash-5` | `--krt-planet-hash-5` | `#203A2C` | `--krt-planet-hash-5-stripe` | `#50A878` |
| `hash-6` | `--krt-planet-hash-6` | `#203A3A` | `--krt-planet-hash-6-stripe` | `#50A8A8` |
| `hash-7` | `--krt-planet-hash-7` | `#202C3A` | `--krt-planet-hash-7-stripe` | `#5078A8` |
| `hash-8` | `--krt-planet-hash-8` | `#20203A` | `--krt-planet-hash-8-stripe` | `#5050A8` |
| `hash-9` | `--krt-planet-hash-9` | `#2C203A` | `--krt-planet-hash-9-stripe` | `#7850A8` |
| `hash-10` | `--krt-planet-hash-10` | `#3A203A` | `--krt-planet-hash-10-stripe` | `#A850A8` |
| `hash-11` | `--krt-planet-hash-11` | `#3A202C` | `--krt-planet-hash-11-stripe` | `#A85078` |

**Item-class tints** — the categorical palette of a ship component's class, the in-game
„Military / Civilian / Industrial / Stealth / Competition" label shown beside size and grade. The
`--krt-item-class-<c>` hue is the chip border and, mixed to 15 %, its fill; the
`--krt-item-class-<c>-text` tint is the label (≥ 6.5:1 on its fill over a panel, ≥ 5.1:1 over the
row hover `--control-bg`, ≥ 8.9:1 over the canvas). The hues are muted on purpose, so they never read as a status, a department or an
action — and they carry **item-class identity only**. A class chip always shows its translated
label: the colour is a second cue, never the only one.

| Class | Hue (border, fill) | Hex | Text tint | Hex |
| :-- | :-- | :-- | :-- | :-- |
| `military` | `--krt-item-class-military` | `#8A9455` | `--krt-item-class-military-text` | `#C3CA96` |
| `civilian` | `--krt-item-class-civilian` | `#5C84A8` | `--krt-item-class-civilian-text` | `#ACC5DC` |
| `industrial` | `--krt-item-class-industrial` | `#A8643F` | `--krt-item-class-industrial-text` | `#E2B59C` |
| `stealth` | `--krt-item-class-stealth` | `#9C6688` | `--krt-item-class-stealth-text` | `#D9B5CB` |
| `competition` | `--krt-item-class-competition` | `#449C80` | `--krt-item-class-competition-text` | `#91D2BC` |

Component: `.chip.chip--item-class-<c>` (e.g. `<span class="chip chip--item-class-military">Militär</span>`),
next to a neutral `.chip.chip--data` carrying size and grade (`S1 · A`). An item without a known
class gets no class chip. Specimen: `components/ItemClassChip/preview.html`.

---

## Surfaces & controls

**Rule 1 — surface ladder.** A page is canvas → panel → inset:

| Token | Value | Role |
| :-- | :-- | :-- |
| `--surface-canvas` | `#0F0F0F` | page background; page head (eyebrow, title, CTA) |
| `--surface-bar` | `#1A1D21` | header, footer, tab bar, table head |
| `--surface-panel` | `#282C30` | working surface: `.list-panel` holds toolbar + table + footer together; cards, modals |
| `--surface-inset` | `#0F0F0F` | a box set *into* a panel (HUD box, module tile) |
| `--surface-raised` | `#36373B` | `.btn-secondary` fill |

**Rule 2 — every control has a fill and a visible border.** `--control-bg` `#373E43`,
`--control-border` `#8F9399` (4.6 : 1 on the panel, 6.2 : 1 on the canvas), text
`--control-fg` = Grau 1. Applies to `.btn-ghost`, `.btn-quiet-danger`, inputs/selects,
checkbox/radio, pagination, `.chip-select`, `.krt-segmented`, `.krt-switch`. The
hairline `#36373B` is decoration only (table rows, panel frames), never a control border.

**Rule 3 — selection is not a CTA.** A selected segment/view is never filled orange.
Selected = `--control-selected-bg` (orange tint) + orange border + 3 px orange underline
+ white bold text. The underline is the color-independent cue.

**Rule 4 — muted text is `--color-gray-2-text`.** Grau 2 is a border color, never text.

**Rule 5 — 4 px radius.** `--radius-sm` (4 px) on buttons, inputs, selects, segments,
cards, panels, modals, alerts, chips, badges, toasts, dropdowns. `--radius-pill` only
for squadron badges and the drag handle; circles for radio and status dots;
`--radius-none` for table cells, accent bars and gauges.

List-page building blocks (`krt-components.css`, block „LIST PAGE"):

| Class | Purpose |
| :-- | :-- |
| `.page-head` (`__eyebrow`, `__title`, `__actions`) | page head: area, title, one CTA |
| `.count-badge` | total next to the title — filled `#2F394C`, white digits |
| `.list-panel` (`__toolbar`, `__search`, `__chips`, `__footer`) | working surface grouping toolbar, table, footer |
| `.krt-segmented` (`__item`, `__count`) | period/status/view switch; active via `aria-current` / `aria-pressed` / `aria-checked` |
| `.btn.is-filtered` + `.filter-count` | filter button with active filters; square count badge |
| `.filter-chip` (`__remove`) | removable active filter |
| `.krt-switch` | on/off switch (position + color) |

Specimen: [`components/ListPanel/preview.html`](components/ListPanel/preview.html).

---

## Action hierarchy

**The filled orange accent marks the ONE primary action per context.** Orange is for
**action + identity** (logo, headings) — never for plain data values or every label.

| Class | Look | Use |
| :-- | :-- | :-- |
| `.btn.btn--cta` | filled orange, dark text, restrained bloom | the single primary action per panel — Anmelden, Speichern |
| `.btn-success` | filled green | status change — Check-In |
| `.btn-outline` | orange outline | emphasized secondary — Crew zuweisen |
| `.btn-ghost` | control fill + control border → orange on hover | routine repeated actions — Edit, Check-Out, Filter |
| `.btn-quiet-danger` | control fill + border, muted text → red on hover | destructive — Delete |

- **Form labels are neutral** (`--color-gray-1`); the input values are the brightest thing in a form.
- **Panel headers** use `.panel-header`: bar fill, one orange left bar, light heading;
  orange only for the chevron and the active state.
- **Data values** (names, frequencies, IDs) use `.data-value` — white on a bar chip.
- Named tokens: `--action-primary`, `--action-emphasis`, `--action-neutral`, `--data-fg`.

Specimen: `components/ActionHierarchy/preview.html`.

---

## Components

### Card & chip

- **`.card`** — panel surface with hairline border and 4 px radius, lighter than the
  bracketed `.hud-box`. Variants `--inset` (bar fill), `--accent` (orange top bar),
  `--flush` (no padding, wraps a table/list). Compose with `.card-head` / `.card-title`,
  `.kv-list`, `.section-title`.
- **`.chip`** — inline data label (order kind, quality, claim, count), 4 px radius. Tone
  variants `--primary/--success/--danger/--warning/--info/--muted` (border + text take
  the hue, faint tint fill), plus `--data` for "key: value" chips (`IRI: 1,200 SCU`).

Specimen: `components/CardChip/preview.html`.

### Tree table (nested data)

For deeply nested data (inventory: Material → Nutzer/Stack → Eintrag) use `.tree-table`
instead of nested tables:

- **One sticky header** (`.tree-head`); depth is shown by indentation + left rails
  (`.tree-row--group/--mid/--leaf`), never by repeated column headers.
- All rows share one grid template (`--tree-cols`); numeric columns right-aligned + `tabular-nums`.
- **Quality** = 0–1000 gauge (`.tree-gauge`); **amounts** = bright value + dimmed unit (`.tree-amount` / `.tree-unit`).
- **Leaf controls** sit in `.tree-leaf-main`, spanning the name/context/quality columns.
- **Actions** use `.btn-xs`; `.tree-cell--actions` has a left gutter. One emphasized action per row.
- **Notes render only when a note exists** — an indented `.tree-note` block (~80ch).
- **One width for header and rows:** the table is never narrower than its columns
  (`min-width: min-content`), and the header row carries the bar fill and the orange rule, so
  header and rows always end at the same edge. In a narrow container wrap it in
  `.hud-scroll.scroll-x`.

Specimen: `components/TreeTable/preview.html`.

### Entry associations (split quantities)

The Auftrag/Einsatz control on a Lager-Eintrag. One entry carries **several** Aufträge
*and* several Einsätze; its quantity is split separately per Auftrag and per Einsatz.
Per `.tree-field` an **`.assoc-split`** group shows clickable **`.assoc-chip`** tokens
(**`--order`** orange, **`--mission`** blue) with label + **`.assoc-chip__amt`**, a dashed
**`.assoc-add`** (in `.assoc-add-wrap`) opening an **`.assoc-pop`** popover
(`position: fixed`) — a `.krt-combobox` to add, or `.assoc-pop__menge` (amount + remove)
for a clicked chip — and a trailing **`.chip`** rest indicator.

- **Reconciliation:** amounts sum against the entry total. Rest 0 = `.chip--success`;
  rest > 0 = `.chip--muted` („… frei", allowed); over-allocation = `.chip--danger`, rejected.
- Auftrag suggestions: only orders whose `requiredMaterialIds` contain the material, plus assigned ones.
- **Read-only** without `LOGISTICIAN/OFFICER/ADMIN`: chips not clickable, no add button.
- **Personal entries** carry no association.
- **Data:** two join tables per entry — `{ jobOrderId, amount }`, `{ missionId, amount }`;
  changes carry `version` (optimistic lock).

Specimens: `components/EntryAssign/preview.html`, `components/EntryQuantitySplitVariants/preview.html`.

### Herkunft-Picker (Ausbuchen/Umbuchen)

When booking out or rebooking, one amount input per earmark tag and dimension
(Auftrag/Einsatz) sets where the deduction comes from; the rest comes from the
unallocated share. Rest chip in the `.chip` tones, danger warning when the free rest is
not enough, proceeds coupling (SELL only) as an info box. Classes:
`.herkunft-help/-body/-dim(-cap)/-tag(-name/-max)/-input(--auto)/-auto/-restline/-warn/-proceeds(*)`.
Specimen: `components/HerkunftPicker/preview.html`.

### Mission page (tabs, modal, assign board)

- **`.tab-nav` / `.tab` / `.tab-count`** — page tabs on the bar surface (active = white +
  3 px orange underline; `role="tablist"`, arrow keys, `?tab=` / `#tab=` deeplink) and
  **`.facts-bar`** — quick-fact strip under a sticky page head. Specimen: `components/TabNav/preview.html`.
- **`.krt-modal*`** — modal on the panel surface (orange top edge + HUD corner brackets on a
  blurred scrim; `--danger` variant; `--wide` = 600 px; ONE filled CTA, ghost cancel,
  focus trap + Esc; destructive modals name the consequence). Specimen: `components/Modal/preview.html`.
- **Assign board** — `.person-row` (+ `.row-grip` / `.row-sub` / `.is-selected`),
  `.status-dot(--on)`, `.drop-zone` (+ `.is-over`, `.drop-hint`) and **`.chip-select`**.
  Units are open-ended (no slots); always a click + keyboard fallback beside drag & drop.
  HVU marking = `.chip.chip--warning`. Specimen: `components/AssignBoard/preview.html`.
- **Master-detail & ingredient quality** — `.master-detail` / `.master-list` /
  `.master-row(.is-active)` / `.detail-pane` (list → detail, ↑/↓ + deeplink; collapses on
  mobile) and `.quality-block` / `.quality-row` / `.quality-affects` (quality 0–1000 scales
  only its mapped stats, live ×-factor on the stat chips). Specimen: `components/MasterDetail/preview.html`.

### Einsatz overview

The participant-facing overview of an Einsatz, readable in ~10 s:
`.status-badge` (+ `status-planned/-active/-briefing/-completed/-cancelled`) is the
page-level lifecycle marker (louder than the row-level `.status-pill`);
`.attendance` / `.attendance-meter` shows registered vs. checked-in (participation is
open-ended — no maximum, no slots, no name list; green = eingecheckt, gray = ausstehend);
`.ablauf` / `.step` (+ `--done` / `--now`) renders the run order as a numbered `<ol>`
checklist. One `.btn--cta` („Anmelden") in the header only. The briefing „Mission auf
einen Blick" is a fixed 6-field table: Ziel (max 250), Teamspeak, Serverjoin,
Treffpunkt, Dauer (= Ende − Teamspeak), Einsatzleiter.
Specimen: `components/EinsatzOverview/preview.html`.

### Bank

`.kpi-total` / `.kpi-card` (+ `--closed`, `.kpi-value`, `.kpi-delta--pos/--neg`; sparkline
= server-rendered inline SVG), `.holder-row` / `.holder-bar` / `.holder-sum` and
`.stack-bar` + `.stack-legend` (custody per holder, sums to the balance),
`.matrix-flag(.on)` + `tr.is-inert` (permission matrix — the row's existence is the view
right) and `.krt-modal .confirm-input` (type-to-confirm, only for wipe-reset-grade actions).
Specimens: `components/KpiCard/preview.html`, `components/BankPatterns/preview.html`.

### Filters, search, inputs

- **Filter row** `.search-form`: columns aligned via `align-items: flex-end`, label columns
  (`:has(> label)`) have a fixed height, `.datetime-split-inputs` pairs date + time,
  `.search-form-flex-1` lets the text search dominate; `select.association-select`
  (inventory assignment dropdown, orange border). Specimen: `components/FilterBar/preview.html`.
- **Multi-select** `.multi-select-*` (checkbox filter), **autocomplete** `.autocomplete-items`
  and **searchable combobox** `.krt-combobox*` (type-to-filter with `<mark>` matches,
  flip-up `--above`, notice rows, `__option--clear`, `__label`).
  Specimen: `components/FilterSearch/preview.html`.
- **Number inputs** keep their up/down buttons as a separate block: `--space-2` (8 px) gap
  between the value and the buttons, a Grau-2 divider, buttons 1.5rem wide, orange on hover.
  The value never touches the buttons. Firefox shows no spinner (arrow keys still work).
- **SCU hint** `.scu-hint` + `.scu-hint__bubble` — the inline-help idiom („?" disc → HUD tooltip).

### Feedback & presence

- **Confirm dialog** — `showKrtConfirm` replaces `window.confirm()`: JS-generated overlay
  (`.krt-confirm-overlay/-dialog/-title/-message/-actions`, z-index 10000, column-reverse
  on mobile). Specimen: `components/ConfirmDialog/preview.html`.
- **Toast** `.notification-toast` (+ `.error-toast`) — panel surface, corner brackets + bloom.
  Specimen: `components/Toast/preview.html`.
- **Loading** `.krt-loading-indicator` + `.krt-spinner`; **presence** `.krt-presence-indicator`
  (pulsing dot + count) and the fixed `.mission-livesync-pill` — awareness only, never
  blocks input. Specimen: `components/Presence/preview.html`.
- **Rendered Markdown** `.markdown-content` for server-rendered user prose.
  Specimen: `components/MarkdownContent/preview.html`.

### App chrome

- **Header** — sticky, bar surface, 2 px orange bottom rule; in admin mode
  (`body.admin-mode`) the rule is Zierfarbe dunkel and `.admin-mode-chip` names the context.
- **Footer** `.krt-footer` (+ `-links/-meta/-github/-version`) — fixed, bar surface;
  legal links, Handbuch, GitHub mark, build version. `<main>` reserves
  `--krt-footer-height`.
- **Fan-Kit band** `.krt-fankit-band/-logo/-trademark` — Star Citizen Fan Kit compliance at
  the end of the home `<main>`; logo unchanged, trademark notice ≥ 10 pt.
  Asset: `assets/made-by-the-community.png`.

Specimen: `components/AppChrome/preview.html`.

### Button icons

One hand-curated SVG sprite (`assets/krt-icons.svg`; in the app `fragments/icons.html`) —
no icon library (the CSP forbids CDNs). 24×24, stroke-only, `stroke-width: 2`, round
caps, `fill: none`, `currentColor`; used as `<svg class="krt-icon"><use href="#krt-icon-NAME"/></svg>`
(1em; `.krt-icon-lg` 1.5em, `.krt-icon-xl` 2em).

- **Icon + text** for primary, rare or ambiguous actions.
- **Icon-only** (`.btn-icon`, 32×32) for repeated row actions with a universal meaning
  (edit, trash, check-in, check-out, bookout, close) — always with `aria-label` + `title`.

Specimens: `components/IconSet/preview.html`, `components/Iconography/preview.html`;
action → icon dictionary in [`proposals/button-icons-guidelines.md`](proposals/button-icons-guidelines.md).

---

## Content fundamentals

- **Voice & tone.** Functional, military/technical, terse. The UI speaks plainly
  ("Add Ship", "Log Handover", "Mark as read"); **system/error states lean into the fiction**:
  - 403 → *"Access Denied — Insufficient security clearance. This incident has been logged."*
  - 404 → *"Signal Lost — The requested coordinates are invalid or the sector has been redacted."*
  - 500 → *"System Malfunction — Critical system failure detected. Technical personnel notified."*
  - Error CTA: *"Return to Base."*
- **Person.** Addresses the user as **you**. Confirmations are matter-of-fact: *"Ship successfully added."*
- **Casing.** Labels, table headers, nav, buttons and headings are **UPPERCASE**; sentence
  case for body/help text. Status enums: `PLANNED`, `ACTIVE`, `COMPLETED`, `CANCELLED`.
- **Buttons.** Imperative verbs. Destructive actions always confirm ("Really delete ship?").
- **Bilingual & domain-loaded.** German is primary; Staffel, Spezialkommando/SK, Auftrag,
  Raffinerie, Lager keep their German names. Star Citizen jargon is assumed (SCU, UEX, LTI).
- **Numbers.** Integers with thousands separators; buy prices red with `−`, sell prices green with `+`.
- **No emoji.** Warnings use `⚠`; status uses small square dots.
- **Vibe.** An operator at a console on a capital ship — efficient, a little classified, never playful.

---

## Visual foundations

- **Palette.** `#0F0F0F` canvas, `#282C30` panels, `#1A1D21` bars, text `#D1D2D3`. One
  accent — house orange `#E77E23` — for headings, links, focus and the primary action.
  Department/semantic hues appear only as tags, row tints and status.
- **Type.** One typeface: **Lato**. Headlines uppercase, bold 700/900, tracking `0.05em`,
  orange. Body Lato Light 300, Bold 700 for emphasis/labels, Grau 1.
- **Backgrounds.** Flat canvas; no photographic heroes in-app. Optional technical markers:
  a faint orange 24 px HUD grid, a soft radial orange bloom (login). The `.greeting`
  banner fades panel → transparent; gradients are otherwise avoided.
- **Containers.** `.list-panel` / `.card` on the panel surface with a `#36373B` hairline
  and 4 px radius. The signature **`.hud-box`** adds two diagonal orange corner brackets
  (top-left, bottom-right) via `::before` / `::after`.
- **Radius.** 4 px (`--radius-sm`) on controls and surfaces; pills only for squadron
  badges; circles for radio and dots; square table cells and accent bars.
- **Borders.** Decorative hairlines `1px #36373B`; control borders `1px #8F9399`; accent
  borders `1px #E77E23`; headings and table heads on a **2 px orange** rule; alerts with a
  4 px left border in the status color over a 20 % tint.
- **Elevation.** No soft drop shadows for depth. The only glow is the orange bloom —
  `--glow-primary` (focus, CTA) and `--glow-primary-lg` (toasts, modals). Drawers and
  dropdowns use plain dark shadows for separation.
- **Hover.** Orange elements lighten to `#EEB64B`; controls fill to `#434B51`; table rows
  fill to `#373E43`; sidebar links shift right and turn orange.
- **Focus.** `:focus-visible` → 2 px orange outline, 2 px offset (white on the orange CTA).
- **Motion.** `0.2s` color/background transitions; sidebar drawer `0.4s
  cubic-bezier(0.4,0,0.2,1)`; toast translate + fade `0.5s`. No bounces or parallax;
  `prefers-reduced-motion` neutralizes all motion.
- **Scrim & blur.** Overlays `rgba(0,0,0,0.75–0.8)` + `backdrop-filter: blur(4px)`; the
  squadron context chip uses `blur(2px)`.
- **Tables.** Panel body, uppercase Grau-1 headers on the bar surface with a 2 px orange
  under-rule, subtle zebra `rgba(255,255,255,0.02)`, row hover `#373E43`.
- **Scrollbars.** 12 px (`.scroll-thin` 8 px), track on the panel with a leading
  hairline, thumb `#8F9399` → `#EEB64B` on hover → `#E77E23` while dragging; buttons
  suppressed. Wrap regions in `.hud-scroll` + `.scroll-y/-x/-both`; `.scroll-accent` for
  log/console panes. Firefox via `scrollbar-color`.
- **Layout.** Sticky header; off-canvas sidebar drawer (380 px) as primary nav; fixed
  footer; squadron context chip top-right. Content ≤ 1200 px, paragraphs ≤ 80ch, touch
  targets ≥ 44 px.
- **Logos.** The brand mark is the **wedge-through-ring** (planet ring + four-point star +
  star-destroyer triangle): `assets/krt.webp`, `assets/krt-favicon.webp`,
  `assets/Kartelllogo.jpg` (full lockup on `#282828`). App marks: `assets/basetool-*.svg/png`.
  Logos appear only in orange `#E77E23`, white or black.

---

## Interaction & responsive rules

- **No native browser dialogs.** Never `confirm()`, `alert()` or `prompt()` — use
  `showKrtConfirm`, `.krt-modal` and `.notification-toast`.
- **Department colors are semantic** — only where that department applies, never as decoration.
- **Responsive across four classes:**

  | Class | Width | Rules |
  | :-- | :-- | :-- |
  | Smartphone | ≤ 768 px | touch-first; 44 px targets; single column; wide tables scroll horizontally; context chip collapses to shorthand |
  | Tablet | 768–1024 px | touch-first; 44 px targets; collapse multi-column grids |
  | Desktop | 1024–1600 px | auto-fit card grids; off-canvas drawer nav |
  | Ultra-wide | 1600 px+ | text capped at 80ch; content column ≤ 1200 px |

- **i18n.** Every user-visible string comes from `messages*.properties` (German default,
  English complete); no hardcoded text in templates, JS or Java. Umlauts in `.properties`
  are `\uXXXX`-escaped. German compounds run long — don't pin label widths.
- **Typeface.** Lato only, self-hosted WOFF2 (TTF fallback); no Google Fonts or CDNs at runtime.

---

## Platform implementations

This repository is the specification; the platforms mirror it.

| Platform | Repo · path | Notes |
| :-- | :-- | :-- |
| **Web** (Thymeleaf/CSS) | `krt-profit/basetool` · `frontend/.../static/css/` | reference implementation; class names 1 : 1 with this system |
| **Desktop** (Compose Desktop) | `krt-profit/basetool-sc-extractor` · `src/main/kotlin/.../ui/Theme.kt` | palette subset (`Krt.*`); must use the text tints for muted/danger text — see `proposals/bp-extractor-audit.md` |
| **Keycloak** | `keycloak/krt-keycloak-tokens.css` | token mirror for the login theme |

Platform deviations are allowed only where the platform forces them (e.g. ripple
instead of hover) — never for color, shape or type.

---

## Tokens & files

- **One source for every value:** colors, type sizes/weights, tracking, line height,
  spacing, radii, glows and the Lato `@font-face` live in [`tokens.json`](tokens.json) and
  compile to [`tokens.css`](tokens.css). Token name = CSS variable without `--`.
- [`colors_and_type.css`](colors_and_type.css) imports `tokens.css` first and adds what
  cannot be a token: composite borders (`--border-hairline`, `--border-accent`,
  `--border-heading`), `--measure: 80ch` and the element defaults.
- [`krt-components.css`](krt-components.css) — the component layer.
- [`components/bundle.css`](components/bundle.css) — self-contained stylesheet (no
  `@import`) = `colors_and_type.css` without its import + `krt-components.css`.
  Edit the two sources, then regenerate it. Load order: `tokens.css` → `components/bundle.css`.
- **To adopt the system, copy `tokens.css` + `colors_and_type.css` + `krt-components.css`
  together** (plus `fonts/` and `assets/`).

| Path | What |
| :-- | :-- |
| `tokens.json` / `tokens.css` | all design tokens |
| `colors_and_type.css` | composite borders, `--measure`, element defaults |
| `krt-components.css` | component CSS |
| `components/<Name>/preview.html` | specimen cards; helper styles in `preview/_card.css` |
| `fonts/` | Lato Thin → Black, each + italic (WOFF2 + TTF) |
| `assets/` | brand mark, lockup, favicon, Basetool logo family (SVG + PNG 16/32/64/512), icon sprite, Fan-Kit logo |
| `keycloak/` | Keycloak theme token mirror and notes |
| `ui_kits/basetool/` | interactive recreation of the app (see its README) |
| `slides/` | 1280×720 HUD slide template (`deck-stage.js`) |
| `proposals/` | design explorations and implementation orders for the app repo |
