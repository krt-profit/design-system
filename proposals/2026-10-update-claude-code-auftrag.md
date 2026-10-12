# Claude-Code-Auftrag — Design-System-Update 2026-10 einspielen & Basetool anpassen

Du bekommst mit diesem Prompt das ZIP **`das-kartell-design-2026-10.zip`**. Darin liegt der
komplette neue Stand des KRT-Design-Systems (Ordner `das-kartell-design/`). Er bündelt
zwei Änderungen:

1. **Lesbarkeit (inhaltlich):** Bedienelemente bekommen eine Füllung und einen sichtbaren
   Rand, es gibt einen Segment-Umschalter, einen Titel-Zähler, eine gemeinsame
   Arbeitsfläche für Listen-Seiten, eckige Filter-Badges und einen Ein/Aus-Schalter.
   Gedämpfter Text wird überall lesbar.
2. **Migration (strukturell):** Alle Tokens stehen jetzt in `tokens.json` und werden zu
   `tokens.css` kompiliert. Die Specimen-Karten liegen unter
   `components/<Name>/preview.html`, `styles.css` heißt jetzt `components/bundle.css`.

Arbeite **in dieser Reihenfolge**: Teil 1 → Teil 2 → Teil 3. Kleine, prüfbare Commits.

---

## Vorab: verbindliche Regeln

- **Knowledge-Base-Regel:** Lies `das-kartell-design/CLAUDE.md`. Das Design-System-Repo
  verlangt, dass die Basetool Knowledge Base (Obsidian-Vault `basetool-knowledge`)
  **vor** der Arbeit gelesen und **in derselben Arbeitseinheit** aktualisiert wird.
  Findest du den Vault nicht, **frag mich zu Beginn**, wo er liegt. Rate den Pfad nicht.
- **Repo-Namen sind in den Dokumenten uneinheitlich** (`krt-iri/…` vs. `krt-profit/…`).
  Rate nicht: Nimm die tatsächlichen Remotes aus `git remote -v` im Basetool-Repo und
  im Submodule `.claude/skills/das-kartell-design`.
- **Nicht raten beim Code:** Bevor du eine Klasse ersetzt, such per `grep` im Repo,
  welche Klassen und Templates es heute wirklich gibt. Schreib die Fundliste in den
  Commit-Text.
- i18n (de/en) strikt, also keine hartcodierten Texte. CSP beachten: keine Inline-Styles,
  keine externen Ressourcen. Keine neuen Farbwerte, nur Tokens.
- Nach jedem Schritt `./gradlew check`.

---

## TEIL 1 — Design-System-Repo aktualisieren

1. Das Design-System-Repo klonen bzw. pullen (das Repo hinter dem Submodule).
2. Den **Inhalt** von `das-kartell-design/` aus dem ZIP in die Repo-Wurzel kopieren und
   vorhandene Dateien überschreiben.
3. **Diese Dateien gibt es nicht mehr. Lösche sie mit `git rm`, falls sie existieren:**
   - `styles.css` → ersetzt durch `components/bundle.css`
   - `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json` (Compiler-Artefakte
     des alten Editors)
   - alle `preview/*.html`, **außer** `preview/_card.css`, das bleibt.
     Ersetzt durch `components/<Name>/preview.html`.
   - `keycloak/keycloak-login-target.html` → `components/KeycloakLogin/preview.html`
   - `ui_kits/basetool/index.html` → `components/BasetoolUiKit/preview.html`
     (die `.jsx`-Dateien und `app.css` bleiben in `ui_kits/basetool/`)
   - `slides/index.html` → `components/SlideTemplate/preview.html`
     (`deck-stage.js` und `slides.css` bleiben)
   - `proposals/inventory-entry-multi-assign-varianten.html` →
     `components/EntryMultiAssignVariants/preview.html`
   - `proposals/inventory-entry-multi-assign-quantity-varianten.html` →
     `components/EntryQuantitySplitVariants/preview.html`
4. `git status` sichten. **Neu** sind unter anderem `tokens.json`, `tokens.css`,
   `components/*/preview.html`, `components/bundle.css`,
   `proposals/list-page-readability.html` und
   `proposals/list-readability-claude-code-auftrag.md`.
5. Commit, zum Beispiel:
   `Design system 2026-10: tokens.json/tokens.css, control readability (fill + Grau-2 border), list-panel, segmented control, switch; specimens → components/`
6. Pushen. Ein Tag ist optional (z. B. `ds-2026-10`).

> Hinweis: `proposals/DEPLOY-claude-code-auftrag.md` beschreibt noch die **alte**
> Dateistruktur (`styles.css`, `preview/`, `_ds_bundle.js`). Für die Struktur gilt
> **dieser** Auftrag. Aktualisiere die Struktur-Angaben in DEPLOY im selben Commit.

## TEIL 2 — Submodule im Basetool hochziehen

```
git submodule update --remote .claude/skills/das-kartell-design
git add .claude/skills/das-kartell-design
git commit -m "Bump design-system submodule to 2026-10 (tokens + readability)"
```
Prüf, dass der Pointer auf den neuen Commit aus Teil 1 zeigt.

---

## TEIL 3 — Basetool anpassen

Quelle der Wahrheit ist das aktualisierte Submodule. Lies dort zuerst:
- `README.md`, besonders die Abschnitte **„Flächen & Bedienelemente (Lesbarkeit, 2026-10)“**,
  „Action hierarchy“ und **„Tokens & Dateistruktur“**.
- `proposals/list-readability-claude-code-auftrag.md`: der **verbindliche Detail-Auftrag**
  für die Lesbarkeit, mit Schritten 1–6 und Definition of Done.
- `proposals/list-page-readability.html`: Vorher/Nachher-Mock und Befundliste.
- `components/ListPanel/preview.html`: das Specimen der neuen Bausteine.
- `tokens.json` / `tokens.css`, `colors_and_type.css`, `krt-components.css`.

### Schritt A — Token-Fundament angleichen
- Vergleiche das `:root` in `frontend/src/main/resources/static/css/styles.css` (bzw. wo
  die App ihre Tokens hält; per `grep` prüfen) mit `tokens.css`. Übernimm **neue** und
  **geänderte** Werte exakt:
  - neu: `--surface-canvas/-panel/-inset/-raised`,
    `--control-bg/-bg-hover/-border/-fg`,
    `--control-selected-bg/-border/-fg`
  - geändert: `--action-neutral` ist jetzt `var(--color-gray-2)` (vorher Grau 3)
- **Entscheide anhand des echten Build- und CSP-Setups**, ob die App `tokens.css` direkt
  lädt oder die Werte spiegelt. Begründe die Entscheidung im Commit. Wenn sie
  `colors_and_type.css` aus dem Skill übernimmt: Diese Datei importiert jetzt
  `tokens.css` als Erstes. Dann muss `tokens.css` mitkommen, sonst fehlen alle Tokens
  und die Lato-`@font-face`.
- Die Token-Namen bleiben identisch zu den bisherigen CSS-Variablen. Bestehende
  `var(--…)`-Referenzen brechen also nicht.

### Schritt B — Lesbarkeit app-weit (Kern dieses Updates)
Arbeite `proposals/list-readability-claude-code-auftrag.md` Schritt 1–6 vollständig ab.
Kurzfassung:
1. **Bedienelemente:** `.btn-ghost`, `.btn-quiet-danger`, `.btn-secondary`, Inputs,
   Selects, Checkbox/Radio, `.pagination .page-btn` und `.chip-select` bekommen
   Füllung `--control-bg` und Rand `--control-border` (#646464). Der Rand erreicht damit
   mindestens 3:1. Vorher war es ein #282828-Rand mit nur 1,42:1. Eigene schwarze
   Icon-Buttons auf `.btn.btn-ghost.btn-icon` zurückführen.
2. **Gedämpfter Text:** Jedes `color: var(--color-gray-2)` als Textfarbe wird zu
   `--color-gray-2-text` (#8A8A8A). Inaktive `.tab-nav`-Tabs ebenso.
3. **Umschalter:** Alle Zeitraum-, Status- und Ansichts-Umschalter werden zu
   `nav.krt-segmented`. Beispiele: Kommend/Vergangen/Alle;
   Läuft/Abholbereit/Abgeschlossen/Alle; Alle/Meine; **Globales/Mein Lager**. Letzteres
   ist heute ein gefüllter Orange-Button und muss weg. Den aktiven Zustand per
   `aria-current="page"` bzw. `aria-pressed` setzen. Zähler stehen in
   `.krt-segmented__count`.
4. **Listen-Seiten:** Der Kopf wird `.page-head`, mit Titel-Zähler `.count-badge` und
   genau einer `.btn--cta`. Darunter kommt **eine** `section.list-panel` mit Toolbar,
   optionaler Chip-Zeile, der Tabelle und der Fußzeile.
5. **Filter-Zustand:** Ist mindestens ein Filter aktiv, bekommt der Button
   `.btn.btn-ghost.is-filtered` und das eckige Zähl-Badge `.filter-count`. Die runde
   Pille fällt weg. Aktive Filter erscheinen als `.filter-chip`. „Meine Aufträge“ und
   ähnliche Toggles werden zu `label.krt-switch` mit `role="switch"`.
6. **Befunde klären, nicht blind umsetzen.** Begründe jeden davon im PR:
   - „Kommend“ zeigt Einsätze von vor 3 bzw. 7 Tagen.
   - Was das „≡“ in der Prio-Spalte bedeutet.
   - Das Format der Lager-Mengen („29,870 SCU“).
   - Orange Qualitätswerte in der Materialbörse.

Betroffen sind mindestens: Einsatzverwaltung, Operationen, Aufträge, Raffinerie,
Materialbörse, Lagerverwaltung, Hangar, Blueprints, Bank- und Org-Listen. Dazu jedes
Template mit Umschalter, Filter-Button oder Titel-Zähler. Die genaue Liste bekommst
du per `grep`.

### Schritt C — Querverweise im Basetool
Such im Basetool-Repo nach Verweisen auf alte Skill-Pfade: `preview/…`,
`styles.css` des Skills, `keycloak-login-target.html`, `ui_kits/basetool/index.html`,
z. B. in Doku, `CLAUDE.md` oder Tests. Stell sie auf die neuen `components/…`-Pfade um.

### Schritt D — Keycloak und Android (prüfen, nicht automatisch ändern)
- **Keycloak:** `keycloak/krt-keycloak-tokens.css` wurde in diesem Update **nicht**
  geändert. Das Theme spiegelt die Tokens nur. Prüfe, ob Sekundär-Buttons und Inputs
  im Theme denselben Kontrast-Mangel haben (Rand < 3:1 auf Schwarz). Wenn ja: mit
  `--control-border` angleichen, sonst nichts ändern.
- **Android:** Laut `CLAUDE.md` des Design-Systems baut auch die Android-App gegen
  dieses System. Die neuen `--control-*`- und `--surface-*`-Tokens und die geänderte
  Ghost-Optik betreffen die Parität. **Nicht** im Basetool-Repo umsetzen. Trag es in
  der Knowledge Base ein und melde es mir als offenen Punkt.

---

## Definition of Done
1. Das Design-System-Repo hat den neuen Stand, die alten Dateien sind entfernt.
   Das Basetool-Submodule zeigt auf diesen Commit.
2. Kein Bedienelement hat mehr einen Rand unter 3:1 gegen seinen Hintergrund.
   Stichprobe in den DevTools: Ghost-Button, Segment, Input, Pagination, Icon-Button.
3. Alle Umschalter sind `.krt-segmented`. Der aktive Zustand ist auch ohne Farbe
   erkennbar (Unterstrich). Kein gefüllter Orange-Block dient als Auswahl.
4. Listen-Seiten: Toolbar, Tabelle und Fußzeile liegen auf einer `.list-panel`-Fläche.
   Der Titel-Zähler ist `.count-badge`. Pro Seite gibt es genau eine CTA.
5. `--color-gray-2` wird nirgends mehr als Textfarbe benutzt.
6. Der Tastatur-Fokus ist auf Segmenten, Filter-Chips und Schaltern sichtbar.
7. i18n de/en ist vollständig, `./gradlew check` ist grün. Die Optik entspricht
   `proposals/list-page-readability.html`, auch bei ≤ 768 px.
8. Die Knowledge Base ist im selben Zug aktualisiert. Die offenen Punkte (Befunde aus
   Schritt B.6 und Android-Parität) sind mir gemeldet.
