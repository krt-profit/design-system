repo: krt-profit/design-system
branch: main

Related repositories (read-only sources for this design system):
- krt-profit/basetool (main) — web app; implementation in `frontend/src/main/resources/static/css/styles.css` + per-feature CSS + `keycloak-theme/krt-theme/`
- krt-profit/basetool-sc-extractor (main) — desktop extractor, KRT theme in `src/main/kotlin/com/basetool/bpextractor/ui/Theme.kt`

## File map
| DS file | Counterpart in the app |
| :-- | :-- |
| tokens.css · colors_and_type.css | basetool: static/css/styles.css (`:root` tokens, @font-face, element defaults) |
| krt-components.css | basetool: static/css/styles.css (component layer) |
| keycloak/* | basetool: keycloak-theme/krt-theme/login/resources/css/krt-login-v3.css |
| components/EntryAssign · components/HerkunftPicker | basetool: styles.css `.assoc-*` / `.herkunft-*` |
| components/ConfirmDialog | basetool: styles.css `.krt-confirm-*` (fragments/toast.html) |
| components/FilterBar | basetool: styles.css `.search-form*` / `.datetime-split-*` / `select.association-select` |
| components/AppChrome | basetool: styles.css `.krt-footer*` / `.krt-fankit-*` / `.admin-mode-chip` |
| README "Platform implementations" | basetool-sc-extractor: ui/Theme.kt |
