---
name: das-kartell-design
description: Use this skill to generate well-branded interfaces and assets for DAS KARTELL (the "Profit Basetool" Star Citizen squadron-management app), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

This is a dark, sci-fi "technical HUD" brand for a Star Citizen org: house orange
`#E77E23` on a dark gray canvas (`#0F0F0F`, panels `#282C30`, bars `#1A1D21` — the
surfaces of das-kartell.org), a single typeface **Lato** (headlines = bold + UPPERCASE,
body Light 300 / Bold 700), controls and panels with a **4 px radius**, diagonal corner
brackets on the `.hud-box`, and a fixed department color system.

Quick start:
- **Foundations:** `tokens.json` is the single source of every token (colours, type
  sizes/weights, spacing, radii, glows, Lato `@font-face`), compiled to `tokens.css`.
  `colors_and_type.css` imports `tokens.css` and adds composite borders + element
  defaults; `krt-components.css` is the component layer (buttons, hud-box, tables,
  forms, list-panel, segmented control, switch, alerts, badges, toasts).
  Load `tokens.css` → `colors_and_type.css` → `krt-components.css` (or
  `tokens.css` → `components/bundle.css`); build on the tokens — don't invent new colors.
- **Specimens:** `components/<Name>/preview.html` — one live card per component/foundation.
- **Real components & screens:** `ui_kits/basetool/` is an interactive React recreation
  of the app (header, sidebar drawer, dashboard, missions, hangar, price matrix, login).
  Copy patterns from `components.jsx` / `screens.jsx` / `app.css`.
- **Assets:** `fonts/` (Lato, self-hosted) and `assets/` (logo mark, full lockup,
  favicon, Basetool logo family). Logos appear ONLY in orange, white or black.

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out and
create static HTML files for the user to view. If working on production code, copy assets
and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without other guidance, ask them what they want to build
or design, ask some clarifying questions, and act as an expert designer who outputs HTML
artifacts _or_ production code, depending on the need.

Key brand rules (see `README.md` for the full content + visual foundations):
- Surfaces: canvas `#0F0F0F` → panel `#282C30` (lists, cards, modals) → inset `#0F0F0F`;
  bars (header, footer, tab bar, table head) `#1A1D21`. `#000` is never a page background.
- Color is functional and sparing — one hero orange; department/semantic hues only as
  tags, row tints and status. Text on orange is always dark (`#141414`/`#000`), never white.
- Colour used AS TEXT takes the text tints: `--color-danger-text` `#FF7A70`,
  `--color-info-text` `#8FB2F5`, `--color-success-text` `#4CCB5C`, muted
  `--color-gray-2-text` `#A2A5A9`; the canonical hues stay for fills/borders.
- Department colors (`#37BBC0`, `#355DDC`, `#A3000A`, `#7A5E96`, `#239E33`, `#FFD23F`)
  are prescribed and never altered; department tags are filled chips
  (`.dept-tag--<slug>`) with dark or white text.
- **Action hierarchy:** the filled orange CTA marks the ONE primary action per context
  (`.btn--cta`); routine actions use `.btn-ghost`/`.btn-outline`, destructive ones
  `.btn-quiet-danger`. Orange is for action + identity, never for plain data values or
  form labels (labels are neutral gray; data uses `.data-value`).
- Every non-CTA control (ghost/quiet buttons, inputs, segmented control, pagination,
  switch) has a fill `--control-bg` `#373E43` and a border `--control-border` `#8F9399`.
  The `#36373B` hairline is decoration only. Selected = orange tint + underline, never a
  solid orange block.
- Radius: 4 px (`--radius-sm`) on controls and surfaces; pills only for squadron badges;
  circles for radio and dots.
- Depth = hairlines + corner brackets + an orange bloom glow. No soft drop shadows.
- Headings & UI labels are UPPERCASE; system/error copy leans into the sci-fi fiction
  ("Signal Lost", "Return to Base"); no emoji.
- Department names follow the Corporate Design Manual (Raumüberlegenheit, Forschung,
  Sub-Radar, Marinekorps, Profit, Search and Rescue).
