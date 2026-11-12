# Profit Basetool — UI Kit

An interactive, high-fidelity recreation of the **DAS KARTELL Profit Basetool** in the
current system: Design 3.0 surfaces and radii, the app shell of REQ-UI-026 (header with quick
access and bell, the drawer with task groups and admin mode) and the page patterns of
REQ-UI-027 (page head with tabs, list panel, list tables). Built with React + Babel
(in-browser) on top of `krt-components.css`; a *cosmetic* recreation for prototyping with
fictional data and no backend. Copy is German, as in the app's default locale.

> Source of truth: `krt-profit/basetool` · `frontend/src/main/resources/templates/` +
> `static/css/kernel/styles.css`. The live app is Thymeleaf server-rendered; this kit reproduces
> the look in React and uses the system's class names 1 : 1.

## Run it

Open `../../components/BasetoolUiKit/preview.html`. It loads `../../colors_and_type.css`,
`../../krt-components.css` and `app.css`, then the JSX modules. Icons come from the system's
sprite `assets/krt-icons.svg`, the mark from `assets/basetool-logo.svg`.

## Flow

Login → dashboard → navigate through the hamburger drawer (the default navigation mode):

1. **Login** — HUD box on the canvas bloom, one CTA.
2. **Dashboard** — `.greeting`, a stale-data `.alert`, the box „Nächster Einsatz" with four
   tiles (`.card--inset`) and the open-ended attendance (angemeldet / eingecheckt), the box
   „Staffelstatus" with KPI tiles.
3. **Missionen** — page head with count and CTA, tabs Missionen · Operationen, `.list-panel`
   with search and a `.krt-segmented` period switch, `.data-table--stack` rows (row link,
   department tag, tinted status label, chevron), `.empty-state` when nothing matches.
4. **Hangar** — list table in a flush card, LTI chip, readiness label, icon-only row actions.
5. **Lager** — tabs Lager · Mindestbestände, the Mein Lager | Einheitslager switch and the
   tree table with quality gauges and order / mission chips.
6. **Material** — tabs and the price matrix in a box with a collapsible category row.
7. **Mission** (Missionen → a row) — back link, facts bar, collapsible panels with the action
   hierarchy: one CTA per context, `.btn-outline` for Crew zuweisen, ghost, quiet danger.
8. **Administration** — „Administration" in the drawer switches it to admin mode
   („Hauptmenü" back, ADMIN chip); Mitgliederverwaltung is a list table, the other admin pages
   are labelled stubs. On admin pages the body gets `.admin-mode`.

## Files

| File | Role |
| :-- | :-- |
| `../../components/BasetoolUiKit/preview.html` | App shell — auth, routing and admin state, mounts everything; the header is portalled into a `<header>` that is a direct child of `body`, as the shell's `body > header` rules expect. |
| `app.css` | Kit layout only: main column, login, dashboard grid, matrix and mission-detail extras, toasts. |
| `icons.jsx` | `<Icon>` over the system sprite. |
| `data.jsx` | Fictional sample data and the navigation groups. |
| `components.jsx` | `Header`, `Sidebar`, `Footer`, `PageHead`, `Card`, `HudBox`, `Btn`, `Badge`, `StatusPill`, toasts. |
| `screens.jsx` | `LoginScreen`, `Dashboard`, `MissionsScreen`, `HangarScreen`, `LagerScreen`, `MaterialsScreen`, `MembersScreen`, `PlaceholderScreen`. |
| `screen-mission-detail.jsx` | `MissionDetailScreen` — the applied action hierarchy. |

## Notes & fidelity

- Components are simplified cosmetic versions — not the app's logic. The icon rail, the pinned
  sidebar, the phone tab bar and the quick access are shown as specimens
  (`components/NavRail`, `MobileTabBar`, `QuickAccess`), not in the kit.
- Department tags use the official manual names as filled `.dept-tag--<slug>` chips.
- Pages that depend on real data (Raffinerie, Aufträge, Materialbörse, Beschaffung, Meine
  Einheit, admin data) are labelled stubs rather than invented.
