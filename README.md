# DAS KARTELL — Profit Basetool · Design System

The design system of the **Profit Basetool**, the squadron-management web app of the
**„DAS KARTELL"** organization in *Star Citizen*. It defines the brand's
dark sci-fi "technical HUD" look: house orange on a dark gray canvas, **Lato** as the
only typeface, the surfaces and radii of the website's **Design 3.0** (boxes 10 px, tiles
8 px, controls 6 px), corner-bracket HUD frames and a fixed department color system.

> **In one line:** a dark space-organization HUD — geometric, built from *rings
> (planets)* and *triangles (ships/stars)*, lit by a single signature orange
> `#E77E23`, on the same blue-gray surfaces as das-kartell.org (Design 3.0).

---

## Sources

- **GitHub — `krt-profit/basetool`** · <https://github.com/krt-profit/basetool>
  The Spring Boot + Thymeleaf app. Its kernel stylesheet
  (`frontend/src/main/resources/static/css/kernel/styles.css`, cascade layers
  `base, components, page, utilities`) plus the page CSS under `static/css/pages/<domain>/`
  implement this system; the app shell (header, drawer, rail, tab bar, quick access, page head)
  lives in `templates/kernel/fragments/`, copy in `messages_de.properties` /
  `messages_en.properties`, Keycloak theme in `keycloak-theme/krt-theme/`. Navigation rules:
  `docs/specs/ui-design-system.md` REQ-UI-026 / REQ-UI-032, page patterns REQ-UI-027.
- **GitHub — `krt-profit/design-system`** · this project.
- **das-kartell.org — Design 3.0** (WoltLab style „Das Kartell - 3.0", individual CSS
  „Entwurf 4", status 11.11.2026, test forum only and awaiting sign-off by the
  Organisationsleitung). Surfaces, text colours, border, box/tile/control radii, the box title
  with its 36 px orange mark, tinted labels and the tile hover come from its style colour set
  (ACP) and section 10 of its individual CSS; the values are copied, not measured. Until the
  sign-off the live forum still runs style 2.0. Never derive colours from screenshots: with
  Windows HDR on, the Snipping Tool lifts dark grays and the orange.
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

From the Design 3.0 style colour set (ACP, RGB in brackets).

| Role | Token | Hex | Use |
| :-- | :-- | :-- | :-- |
| Canvas | `--color-canvas` → `--surface-canvas` | `#0D0F12` (13,15,18) | page background, page head |
| Leiste (bar) | `--color-surface-input` → `--surface-bar`, `--surface-inset` | `#14171C` (20,23,28) | header, footer, drawer, tab bar, table head, input fields; the sunken third level |
| Box (Grau 4) | `--color-gray-4` / `--color-bg-dark-gray` → `--surface-panel` | `#1A1E24` (26,30,36) | cards, tables, `.list-panel`, modals, toasts |
| Kachel (tile) | `--surface-card` | `#20252C` | a tile inside a box: `.card--inset`, KPI tiles, list tiles |
| Kachel-Hover | `--surface-card-hover` → `--table-row-hover` | `#272D35` | tile hover; row hover of a table on a box |
| Control | `--color-control` → `--control-bg` | `#2F3640` (47,54,64) | resting fill of every non-CTA control |
| Control hover | `--color-control-hover` → `--control-bg-hover` | `#353C48` | hover fill of controls (control × 1.12, the 3.0 button hover) |
| Tabellen-Zebra | `--table-stripe-bg` | `#1E2329` | every second visible row of a table on a box |
| Zebra / Hover auf Kachel | `--table-stripe-tile` / `--table-row-hover-tile` | `#242930` / `#2C323A` | the same for a table that sits on a tile |
| Rahmen (Grau 3) | `--color-gray-3` → `--surface-raised` | `#2A3038` (42,48,56) | box and tile frames, row dividers, title rules; `.btn-secondary` fill |
| Control-Rand (Grau 2) | `--color-gray-2` → `--control-border` | `#8F9399` | border of every control (5.4 : 1 on a box, 4.0 : 1 on a control fill), scrollbar thumb, status dots |
| Zähler-Badge | `--color-count-badge` | `#2F394C` | title counter `.count-badge`, white digits 11.6 : 1 |
| Text (Grau 1) | `--color-gray-1` | `#D7DADE` (215,218,222) | body text, labels, table text |
| Box-Titel | `--color-title` | `#C9CED5` | upper-case box and section titles |
| Gedämpfter Text | `--color-gray-2-text` | `#9AA1AB` (154,161,171) | hints, placeholders, field caps, units, inactive tabs |

Contrast of the text tokens:

| Text | Canvas `#0D0F12` | Bar `#14171C` | Box `#1A1E24` | Tile `#20252C` | Control `#2F3640` |
| :-- | --: | --: | --: | --: | --: |
| `#D7DADE` text | 13.7 | 12.8 | 11.9 | 11.0 | 8.7 |
| `#9AA1AB` muted | 7.4 | 6.9 | 6.4 | 5.9 | 4.7 |
| `#FFFFFF` data | 19.2 | 18.0 | 16.7 | 15.4 | 12.2 |
| `#E77E23` orange | 6.8 | 6.3 | 5.9 | 5.4 | 4.3 (bold/large only; small text takes `--color-accent-light`, 6.6) |

Muted text is not used on the control-hover fill (4.3 : 1) — hovered controls switch
their text to Grau 1 or white.

**Deliberate departures from Design 3.0.** The website draws controls without a visible
frame (fill `#2F3640` on a box is 1.4 : 1); the Basetool keeps the `#8F9399` control border,
because its many inputs need 3 : 1 (WCAG 1.4.11). The website's tinted label style is used for
status labels with the Basetool text tints; department tags stay filled, because Sub-Radar,
Forschung and Marinekorps fall to 2.0–2.7 : 1 as tinted text. Navigation and the HUD corner
brackets stay Basetool-specific.

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
`--color-info-text` `#8FB2F5` (all ≥ 6.5 : 1 on a box, ≥ 6.0 : 1 on a tile).

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
`--krt-item-class-<c>-text` tint is the label (≥ 7.7:1 on its fill over a box, ≥ 6.4:1 over the
row hover `--table-row-hover`, ≥ 9.0:1 over the canvas). The hues are muted on purpose, so they
never read as a status, a department or an action — and they carry **item-class identity only**.
A class chip always shows its translated label: the colour is a second cue, never the only one.

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

**Rule 1 — surface ladder (Design 3.0).** A page is canvas → box → tile → sunken level:

| Level | Token | Value | Role |
| :-- | :-- | :-- | :-- |
| 0 | `--surface-canvas` | `#0D0F12` | page background; page head (eyebrow, title, CTA) |
| bar | `--surface-bar` | `#14171C` | header, footer, drawer, tab bar, table head |
| 1 | `--surface-panel` | `#1A1E24` | box: `.card`, `.list-panel` (toolbar + table + footer), modals |
| 2 | `--surface-card` | `#20252C` | tile inside a box: `.card--inset`, `.kpi-total--inset`, `.kpi-card--inset` |
| 3 | `--surface-inset` | `#14171C` | something set into a tile, a table inside a padded card — it sinks instead of lifting again |

- **Never the fill of the parent level.** Each step changes the fill; a tile on a box is
  lighter, the third level is darker. More than three levels inside one box are a case for a
  modal or a page of their own.
- **Every level also carries the `#2A3038` frame.** The steps are small (1.06–1.17 : 1), so
  the fill alone does not separate them.
- **Zebra and hover depend on the surface the table sits on:** on a box `#1E2329` / `#272D35`,
  on a tile `#242930` / `#2C323A`; the head is always one step darker than its surface.
  Selection is never the fill alone: orange tint plus a 3 px orange bar.

Specimen: `components/SurfaceLadder/preview.html`.

**Rule 2 — every control has a fill and a visible border.** `--control-bg` `#2F3640`,
`--control-border` `#8F9399` (5.4 : 1 on a box, 5.8 : 1 on the bar), text
`--control-fg` = Grau 1. Applies to `.btn-ghost`, `.btn-quiet-danger`, inputs/selects,
checkbox/radio, pagination, `.chip-select`, `.krt-segmented`, `.krt-switch`. The
frame colour `#2A3038` is decoration only (rows, box frames), never a control border.

**Rule 3 — selection is not a CTA.** A selected segment/view is never filled orange.
Selected = `--control-selected-bg` (orange tint) + orange border + 3 px orange underline
+ white bold text. The underline is the color-independent cue.

**Rule 4 — muted text is `--color-gray-2-text`.** Grau 2 is a border color, never text.

**Rule 5 — radius by role (Design 3.0).** `--radius-box` 10 px on boxes (cards,
`.list-panel`, modals, toasts, detail panes, tree tables, empty states, KPI cards, scroll
boxes `.hud-scroll`);
`--radius-tile` 8 px on tiles (`.card--inset`, KPI tiles, alerts, flyouts, dropdown lists);
`--radius-control` 6 px on controls (buttons, inputs, selects, segmented controls,
pagination, menu filter, quick-access trigger); `--radius-sm` 4 px on inner elements
(chips, labels, badges). `--radius-pill` only for squadron badges, the bell and the drag
handle; circles for radio and status dots; `--radius-none` for table cells, accent bars and
gauges. **A child never paints over its box's rounded frame:** the child that fills a corner
takes the inner radius `calc(var(--radius-box) - 1px)` — in a `.card--flush` the table head
and the last visible row (stacked: the sort bar or the first row, and the last row), in a
`.tree-table` the head and the last visible row or note, in a `.master-list` the first and last
visible row — and that last row drops its own bottom rule. Visible means `:not([hidden])`, so
collapsed or filtered rows carry `hidden`. A table in a `.card--flush` has no fill of its own; a
`.hud-scroll` clips its content to its own rounded edge. **Panes are not boxes:** a
`.master-list` and a `.detail-pane` that share one framed box as frameless panes, split by a
straight divider, take no radius and no fill, and the box paints. The list pane is then the scroll
list: it fills the box's height, takes the inner radius in the box corners it fills (the left ones
beside the detail pane, all four when it stands alone in the stacked layout, where the page shows
one pane at a time) and clips its rows, which take none; its last visible row drops its rule.
`.master-detail--panes` is this composition, inside a `.card--flush` that is the box. The
HUD brackets follow the rounded corner. This replaces the former 4 px rule; the Basetool's
REQ-UI-007 („4 px radius") has to be amended with the adoption.

List-page building blocks (`krt-components.css`, block „LIST PAGE"):

| Class | Purpose |
| :-- | :-- |
| `.page-head` (`__main`) + `.page-eyebrow` · `.page-title` · `.page-actions` | page head: area (or back link), title with favourite star / start-page toggle / count, one CTA; `.tab-nav` follows (see Navigation) |
| `.count-badge` | total next to the title — filled `#2F394C`, white digits |
| `.list-panel` (`__toolbar`, `__search`, `__chips`, `__footer`) | working surface grouping toolbar, table, footer |
| `.card.card--flush > table.data-table.data-table--stack` | the list table of every list page (see List table) |
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

- **`.card`** — box surface with a `#2A3038` frame and 10 px radius, lighter than the
  bracketed `.hud-box`. Variants `--inset` (tile `#20252C`, 8 px), `--accent` (orange top
  bar), `--flush` (no padding, wraps a table/list). Compose with `.card-head` / `.card-title`,
  `.kv-list`, `.section-title`.
- **Box title (Design 3.0).** `.card-head`, a leading `.card-title` and `.section-title` are a
  title bar: 0.8125 rem bold upper-case, 0.08 em tracking, `--color-title`, a `#2A3038` rule
  below and a 36 × 2 px orange mark at its left end. Page titles (`h1`) stay orange.
- **Status labels (Design 3.0).** `.status-pill` and `.status-badge` show their colour as
  text, a 38 % frame and a 14 % fill (`color-mix` with `currentColor`); the text uses the
  Basetool text tints (`#8FB2F5`, `#4CCB5C`, `#FF7A70`; on the tinted fill ≥ 5.2 : 1 on a box,
  ≥ 4.8 : 1 on a tile). Alerts carry a 1 px tinted frame on an 8 px tile instead of the 4 px
  left bar.
- **`.chip`** — inline data label (order kind, quality, claim, count), 4 px radius. Tone
  variants `--primary/--success/--danger/--warning/--info/--muted` (border + text take
  the hue, faint tint fill), plus `--data` for "key: value" chips (`ALP: 1,200 SCU`).

Specimen: `components/CardChip/preview.html`.

### Navigation (app shell)

One model on every device (REQ-UI-026, REQ-UI-032), rendered from one entry registry; rights stay
on the server. Specimens: `components/AppHeader`, `components/NavDrawer`, `components/NavRail`,
`components/MobileTabBar`, `components/QuickAccess`, `components/PageHead`.

- **Header** (`body > header`, sticky on every page, `--z-header`): hamburger, Basetool mark +
  `appTitle` (leads to the start page), `.palette-trigger` „Seite oder Aktion suchen …" with
  `STRG K` (`.nav-kbd`), the bell `.notification-bell-btn` with the orange `.notification-badge`
  in the flex row, `.admin-mode-chip` only in `body.admin-mode`. No stylesheet makes `html` or
  `body` a scroll container; sticky content below stops at `--krt-header-height`.
- **Drawer** (default, ≥ 769 px): `.sidebar` 320 px on `--surface-bar` over a 80 % + blur scrim,
  0.4 s slide, `inert` when closed. Zones: head (mark, title, close) · context (org-unit switcher
  only with > 1 unit, menu filter, „Anpassen") · list (only zone that scrolls) · foot
  („Administration", personal panel, user row with name, `<unit> · <role>`, language, logout).
- **Groups by task**, at most four for members: Einsatz & Flotte (`wedge`), Logistik (`crate`),
  Handel (`swap`), Staffel (`users`), + Kartellbank (`bank`) for bank staff; ~9 links, sibling
  pages are tabs of one page. Group heads upper-case 0.7 rem / 0.12 em with a 16 px icon, links in
  normal case (Lato 400, 0.9 rem) — an approved exception to „navigation is upper-case". Current
  page: `.nav-link.is-active` + `aria-current="page"` (bar fill, white bold, 3 px inset orange
  bar); its group is always open (`.nav-group.is-active`, orange head).
- **Favourites** (star `.nav-star` in the page head, max 12) form the top group; one the active
  unit does not offer is `.is-unavailable` with „In … nicht verfügbar". **„Anpassen"**
  (`.sidebar.is-editing`): star + eye per link, arrow reorder (`.krt-reorder`, Alt + ↑/↓), hidden
  pages under „Mehr" (`more`), resets per section. **Administration is a mode**
  (`.sidebar.is-admin-mode`, „Hauptmenü" back + ADMIN chip, three admin groups collapsed).
- **Three desktop modes** (`body[data-nav-mode]`, switch „Darstellung" = `.krt-segmented--sm`
  Schublade · Leiste · Angeheftet, stored per user): drawer ≥ 769 px · **icon rail** ≥ 1025 px
  (`.nav-rail` 64 px on `--surface-panel`, 48 px `.nav-rail-btn`s, one per group, `.is-current`
  orange + inset bar; `.nav-rail-flyout` 280 px, 3 px orange top, disclosure: hover ~200 ms /
  click, closes ~300 ms after leave or on Esc; foot: shield = admin mode, avatar flyout = user,
  unit, personal, shortcuts, „Anpassen", mode switch, language, logout) · **pinned sidebar**
  ≥ 1280 px (the drawer docked at 300 px, no head/close/scrim; 1025–1279 px renders the rail).
  Both set `--krt-nav-width`, `padding-inline-start` and `scroll-padding-inline-start`.
- **Phone** (≤ 768 px): 56 px header (mark, title, `.header-search-btn`); fixed
  `.mobile-tabbar` (64 px + safe area, `--z-tabbar`) with five `.mobile-tab`s — three chosen slots
  (default Missionen · Lager · Aufträge; `.is-standin` at 75 %), „Meldungen" with
  `.mobile-tab-badge`, „Menü" opening the drawer as a sheet (accordion groups, 44–48 px rows,
  `.nav-group-count`). The footer hides; `main` reserves `--krt-tabbar-height`.
- **Quick access** (`Strg`/`⌘ K`, the header trigger, the phone search): `.krt-modal.palette-modal`
  of the one dialog shape — `.palette-input-row` (combobox) over `.palette-results` (listbox,
  `aria-activedescendant`), `.palette-group-label`, `.palette-row(.is-selected)` with icon,
  label with `<mark>` hit, `.palette-row-crumb`, favourite star, `↵`; empty state „Keine Treffer.
  Signal verloren."; `.palette-foot` key hints. Full screen with „Abbrechen" on phones. Folded
  matching (case, diacritics, ß/ss, ä/ae) in the menu filter and here.
- **Page tabs** (`.tab-nav` below `.page-head`, only with ≥ 2 permitted tabs; `.is-clipped-start`
  / `-end` fade a scrolled edge). Options inside a tab are a `.krt-segmented` switch, not tabs
  (e.g. Lager: Mein Lager | Globales Lager).
- **Accessibility & motion:** focus returns to the opener; Escape closes drawer, flyouts and the
  quick access; group heads are `<button aria-expanded>`; only colour transitions and the drawer
  slide move, `prefers-reduced-motion` removes both. Touch floor 44 px up to 1024 px or with a
  coarse pointer, 32 px (`--touch-target-dense`) for dense controls on the mouse classes.

### List table

Every list page renders `.card.card--flush > table.data-table.data-table--stack` (REQ-UI-027
rule 6). Specimens: `components/DataTable`, `components/DataTableStack`.

- Rows ≥ 56 px (`.data-table--compact` 44 px). The first column is an `a.row-link` with
  `.cell-title` (white bold) and `.cell-sub` (muted, `--fs-xs`) — the whole row is the link and
  shows the focus ring; numbers `.num`, status `.cell-status`, actions `.cell-actions`
  (`.btn-xs` ghost / success / quiet-danger, never `.btn--cta`), a `.row-chevron` at the end; no
  column holding only „Öffnen".
- Head: `--surface-bar`, `--fs-2xs` upper-case, 0.06 em, 2 px orange rule. Sortable columns carry
  a `.sort-header` button in the `th` with `aria-sort`; `.sort-header__mark` shows ↕ muted, ▲ / ▼
  orange.
- Zebra on every second **visible** row (`:nth-child(even of :not([hidden], .detail-row))`,
  `--table-stripe-bg`), hover `--control-bg` — also on plain tables.
- A table inside a padded `.card` sits on `--surface-inset`, never on the card's gray; inside
  `.card--flush` it has no margin, frame or fill of its own, and its head and last visible row
  take the card's corners (Rule 5).
- **≤ 768 px** the row stacks: title + status on line 1, the other cells as one muted meta line
  separated by `·`, `data-label` prefixes its value, a lone chevron centred right; the head is
  visually hidden unless it holds `.sort-header`s, which stay as a sort bar. Nothing scrolls
  sideways. An empty list is an `.empty-state`, never a `colspan` row.

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
- **Collapsed rows carry `hidden`.** The head and the last visible row or note take the frame's
  rounded corners, and that last row drops its bottom rule (Rule 5).
- **One width for header and rows:** the table is never narrower than its columns
  (`min-width: min-content`), and the header row carries the bar fill and the orange rule, so
  header and rows always end at the same edge. In a narrow container wrap it in
  `.hud-scroll.scroll-x`; the scroll box is then the frame and the table drops its own.

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

Specimen: `components/EntryAssign/preview.html`.

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
  mobile; two boxes side by side, or frameless panes inside one box with
  `.master-detail--panes`, rule 5) and `.quality-block` / `.quality-row` / `.quality-affects` (quality 0–1000 scales
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

`.kpi-total` (+ `--inset` inside a panel) / `.kpi-card` (+ `--closed`, `--inset` inside a panel, `.kpi-value`, `.kpi-delta--pos/--neg`; sparkline
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

- **Header** — sticky on every page, bar surface, 2 px orange bottom rule; quick-access trigger
  and bell inside it (see Navigation); in admin mode (`body.admin-mode`) the rule is Zierfarbe
  dunkel and `.admin-mode-chip` names the context.
- **Footer** `.krt-footer` (+ `-links/-meta/-github/-version`) — fixed, bar surface, one row;
  legal links, Handbuch, Star-Citizen-Links, GitHub mark, build version. `<main>` reserves
  `--krt-footer-height`. Hidden on phones while the tab bar shows.
- **Fan-Kit band** `.krt-fankit-band/-logo/-trademark` — Star Citizen Fan Kit compliance at
  the end of the home `<main>`; logo unchanged, trademark notice ≥ 10 pt.
  Asset: `assets/made-by-the-community.png`.

Specimen: `components/AppChrome/preview.html`.

### Button icons

One hand-curated SVG sprite (`assets/krt-icons.svg`; in the app `fragments/icons.html`) —
no icon library (the CSP forbids CDNs). 24×24, stroke-only, `stroke-width: 2`, round
caps, `fill: none`, `currentColor`; used as `<svg class="krt-icon"><use href="#krt-icon-NAME"/></svg>`
(1em; `.krt-icon-lg` 1.5em, `.krt-icon-xl` 2em).

- **Navigation icons** (`wedge`, `crate`, `swap`, `users`, `bank`, `database`, `gear`, `shield`, `more`, `user`, `bell`, `eye-off`) mark navigation groups, rail entries and tab-bar slots; `star` (outline) and `star-filled` (same geometry, `fill: currentColor`) are the two states of a favourite toggle.
- **Icon + text** for primary, rare or ambiguous actions.
- **Icon-only** (`.btn-icon`, 32×32) for repeated row actions with a universal meaning
  (edit, trash, check-in, check-out, bookout, close) — always with `aria-label` + `title`.

Rules of thumb: repeated + universal + labelled → icon-only; primary, rare or ambiguous →
icon + text; when in doubt, keep the text. One icon per button, always left of the label; the
same action uses the same icon everywhere; „Abbrechen“ carries no icon (a ghost text button,
so it is never mistaken for close). Destructive icon-only actions use `.btn-quiet-danger` and a
confirm dialog. A new icon is a new `<symbol>` in the sprite, never an icon library.

| Action (i18n example) | Icon | Mode |
| :-- | :-- | :-- |
| Speichern (`general.save`) | `save` | icon + text |
| Löschen (`info.delete`) | `trash` | icon-only in a row, icon + text in a footer |
| Bearbeiten (`members.edit`) | `edit` | icon-only in a row |
| Anmelden (`mission.participant.add`) | `user-plus` | icon + text |
| Check-In / Check-Out (`mission.participant.checkin` / `.checkout`) | `login` / `logout` | icon-only in a row |
| Ausbuchen (`inventory.bookout`) | `bookout` | icon-only in a row |
| Hinzufügen, Neuer Eintrag, Schiff hinzufügen | `plus` | icon + text |
| Zurück (`general.back`) | `arrow-left` | icon + text |
| Details (`general.details`) | `eye` | icon + text, or icon-only in a row |
| Öffnen (external) | `external-link` | icon + text |
| Jetzt (`general.now`) | `clock` | icon + text |
| Bestätigen (`*.confirm`) | `check` | icon + text |
| Abbrechen (`general.cancel`) | — | text only (ghost) |
| Filtern / Filter zurücksetzen | `filter` / `filter-off` | icon + text |
| Suche (`general.search`) | `search` | icon + text |
| Home-Location setzen | `map-pin` | icon + text |
| Übergabe protokollieren | `clipboard-check` | icon + text |
| Herunterladen / Import | `download` / `upload` | icon + text |
| Sammelübersicht | `list` | icon + text |
| Entfernen (clear a field) | `minus` | icon + text |
| Schließen (dialog ✕) | `close` | icon-only |

Specimens: `components/IconSet/preview.html`, `components/Iconography/preview.html`.

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
- **No emoji.** Warnings use `⚠`; the page-level `.status-badge` carries a small square dot.
- **Vibe.** An operator at a console on a capital ship — efficient, a little classified, never playful.

---

## Visual foundations

- **Palette.** `#0D0F12` canvas, `#1A1E24` boxes, `#20252C` tiles, `#14171C` bars, text
  `#D7DADE`. One accent — house orange `#E77E23` — for headings, links, focus and the primary
  action.
  Department/semantic hues appear only as tags, row tints and status.
- **Type.** One typeface: **Lato**. Headlines uppercase, bold 700/900, tracking `0.05em`,
  orange. Body Lato Light 300, Bold 700 for emphasis/labels, Grau 1.
- **Backgrounds.** Flat canvas; no photographic heroes in-app. Optional technical markers:
  a faint orange 24 px HUD grid, a soft radial orange bloom (login). The `.greeting`
  banner fades panel → transparent; gradients are otherwise avoided.
- **Containers.** `.list-panel` / `.card` are boxes (`#1A1E24`, `#2A3038` frame, 10 px), tiles
  inside them `#20252C` at 8 px, box titles a title bar with a 36 px orange mark (Design 3.0).
  The signature **`.hud-box`** keeps its two diagonal orange corner brackets (top-left,
  bottom-right, 18 px, following the rounded corner) — a Basetool mark the website does not have.
- **Radius.** 10 px boxes, 8 px tiles, 6 px controls, 4 px inner elements (see Rule 5); pills
  only for squadron badges and the bell; circles for radio and dots; square table cells and
  accent bars.
- **Borders.** Frames and dividers `1px #2A3038`; control borders `1px #8F9399`; accent
  borders `1px #E77E23`; table heads and the page header on a **2 px orange** rule; box titles
  on a `#2A3038` rule with a 36 × 2 px orange mark; alerts and status labels with a tinted
  1 px frame.
- **Elevation.** No soft drop shadows for depth. The only glow is the orange bloom —
  `--glow-primary` (focus, CTA) and `--glow-primary-lg` (toasts, modals). Drawers and
  dropdowns use plain dark shadows for separation.
- **Hover.** Orange elements lighten to `#EEB64B`; controls fill to `#353C48`; tiles and
  table rows on a box fill to `#272D35` (on a tile `#2C323A`); navigation links turn orange.
- **Focus.** `:focus-visible` → 2 px orange outline, 2 px offset (white on the orange CTA).
- **Motion.** `0.2s` color/background transitions; sidebar drawer `0.4s
  cubic-bezier(0.4,0,0.2,1)`; toast translate + fade `0.5s`. No bounces or parallax;
  `prefers-reduced-motion` neutralizes all motion.
- **Scrim & blur.** The drawer scrim is black at 80 % + `backdrop-filter: blur(4px)`; the
  dialog overlay (`.krt-modal-overlay`, also the quick access) uses `blur(2px)`. There is no
  floating context chip any more: the org unit is switched in the drawer or the rail's avatar
  flyout.
- **Tables.** Box body, uppercase Grau-1 headers on the bar surface with a 2 px orange
  under-rule, zebra `--table-stripe-bg` (`#1E2329`) on every second visible row, row hover
  `--table-row-hover` (`#272D35`); on a tile the tile pair `#242930` / `#2C323A`; inside a
  padded card the table takes `--surface-inset`. List pages use `.data-table` (see List table).
- **Scrollbars.** 12 px (`.scroll-thin` 8 px), track on the panel with a leading
  hairline, thumb `#8F9399` → `#EEB64B` on hover → `#E77E23` while dragging; buttons
  suppressed. Wrap regions in `.hud-scroll` + `.scroll-y/-x/-both`; `.scroll-accent` for
  log/console panes. Firefox via `scrollbar-color`.
- **Layout.** Sticky header; navigation as drawer (320 px), icon rail (64 px) or pinned
  sidebar (300 px) on desktop and a tab bar on phones (see Navigation); fixed footer; the active
  org unit is chosen in the drawer's context zone. Content ≤ 1200 px (`--content-max`), list
  pages up to 1600 px (`--content-max-data`), forms ≤ 760 px (`--content-max-form`), side gutter
  `--page-gutter`, paragraphs ≤ 80ch, touch targets ≥ 44 px.
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
  | Smartphone | ≤ 768 px | touch-first; 44 px targets; single column; 56 px header + tab bar; list tables stack (`.data-table--stack`), other wide tables scroll inside their box |
  | Tablet | 768–1024 px | touch-first; 44 px targets; collapse multi-column grids; drawer only |
  | Desktop | 1024–1600 px | auto-fit card grids; drawer, icon rail (≥ 1025 px) or pinned sidebar (≥ 1280 px) |
  | Ultra-wide | 1600 px+ | text capped at 80ch; content column ≤ 1200 px |

- **i18n.** Every user-visible string comes from `messages*.properties` (German default,
  English complete); no hardcoded text in templates, JS or Java. Umlauts in `.properties`
  are `\uXXXX`-escaped. German compounds run long — don't pin label widths.
- **Typeface.** Lato only, self-hosted WOFF2 (TTF fallback); no Google Fonts or CDNs at runtime.

---

## Scope

This system serves one product: the **Profit Basetool web app** (`krt-profit/basetool`,
`frontend/.../static/css/`, class names 1 : 1 with this system) and its **Keycloak login
theme**, which mirrors the tokens in `keycloak/krt-keycloak-tokens.css`.

---

## Tokens & files

- **One source for every value:** colors, type sizes/weights, tracking, line height,
  spacing, layout widths and breakpoints, the stacking layers (`zIndex`), radii, glows and the
  Lato `@font-face` live in [`tokens.json`](tokens.json) and compile to [`tokens.css`](tokens.css).
  Token name = CSS variable without `--`. Every `z-index` goes through a `--z-*` token. The
  breakpoint and nav-width tokens document values that media queries and the shell use literally
  (`--krt-nav-width`, `--krt-tabbar-height` are runtime variables in `krt-components.css`).
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
| `assets/` | brand mark, lockup, favicon, Basetool logo (SVG + PNG 16/32/64/512), icon sprite, Fan-Kit logo |
| `keycloak/` | Keycloak theme token mirror and notes |
| `ui_kits/basetool/` | interactive recreation of the app in Design 3.0 with the current shell (header, drawer, page heads, list tables; see its README) |
| `uploads/KRT_Styleguide_V2.pdf` | Corporate Design Manual (logo, typeface, department colours) |
