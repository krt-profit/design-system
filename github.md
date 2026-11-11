repo: krt-profit/design-system
branch: main

Related repository (read-only source for this design system):
- krt-profit/basetool (main) — web app; implementation in `frontend/src/main/resources/static/css/kernel/styles.css` (cascade layers) + page CSS under `static/css/pages/<domain>/` + `keycloak-theme/krt-theme/`; app shell templates in `frontend/src/main/resources/templates/kernel/fragments/`

## File map
| DS file | Counterpart in the app |
| :-- | :-- |
| tokens.css · colors_and_type.css | basetool: static/css/kernel/styles.css (`:root` tokens, @font-face, element defaults) |
| krt-components.css | basetool: static/css/kernel/styles.css (component layer) |
| keycloak/* | basetool: keycloak-theme/krt-theme/login/resources/css/krt-login-v3.css |
| components/EntryAssign · components/HerkunftPicker | basetool: styles.css `.assoc-*` / `.herkunft-*` |
| components/ConfirmDialog | basetool: styles.css `.krt-confirm-*` (fragments/toast.html) |
| components/FilterBar | basetool: styles.css `.search-form*` / `.datetime-split-*` / `select.association-select` |
| components/AppChrome | basetool: styles.css `.krt-footer*` / `.krt-fankit-*` / `.admin-mode-chip` |
| krt-components.css navigation rules · components/AppHeader · NavDrawer · NavRail · MobileTabBar · QuickAccess | basetool: kernel/styles.css `body > header`, `.sidebar` / `.nav-*`, `.nav-rail*`, `.mobile-tab*`, `.palette*`, `.notification-bell*`; templates `kernel/fragments/header.html`, `sidebar.html`, `nav-entries.html`, `nav-favourites.html`, `nav-rail.html`, `mobile-nav.html`, `palette.html` |
| components/PageHead · `.page-head` · `.tab-nav` | basetool: kernel/styles.css `.page-head*` / `.page-eyebrow` / `.page-title` / `.page-actions`, `.tab-nav`; `kernel/fragments/page-head.html` (`pageHead`, `tabsKey`), `nav-start-page.html` |
| krt-components.css `.data-table*` / `.sort-header*` · components/DataTable · DataTableStack | basetool: kernel/styles.css `.data-table*`, `.sort-header*` |
| assets/krt-icons.svg | basetool: `templates/kernel/fragments/icons.html` (sprite) |

Last synced with basetool `main` @ e3acfc3bc (2026-11-11): navigation (REQ-UI-026/032) and list tables.
