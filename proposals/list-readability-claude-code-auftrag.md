# Claude-Code-Auftrag — Lesbarkeit: Bedienelemente, Arbeitsfläche, gedämpfter Text

Repo: `krt-profit/basetool`. Anlass (Stand v1.15.0, Screenshots 2026-10-12): Segment-
Umschalter („Kommend / Vergangen / Alle“, „Läuft / Abholbereit / …“, „Alle / Meine“),
der Filter-Button, der Titel-Zähler („Einsatzverwaltung 3“) und Zeilen-Icon-Buttons
stehen als **schwarze Kästen mit #282828-Haarlinie auf schwarzem Grund**. Kontrast
der Umrandung 1,42 : 1 (WCAG 1.4.11 verlangt ≥ 3 : 1) — sie sind kaum als
Bedienelement erkennbar. Das betrifft die ganze App.

## Quelle der Wahrheit
Das `das-kartell-design`-Skill (`.claude/skills/das-kartell-design/`) — zuerst mit
dem aktuellen Design-System-Stand synchronisieren:
- `colors_and_type.css` — neue Tokens `--surface-*` und `--control-*`;
  `--action-neutral` jetzt Grau 2.
- `krt-components.css` — geänderte `.btn-ghost`, `.btn-quiet-danger`,
  `.btn-secondary`, Inputs/Checkbox/Radio, `.pagination .page-btn`, `.chip-select`,
  `.tab-nav`; gedämpfte Textfarben auf `--color-gray-2-text`; **neuer Block**
  „LIST PAGE — Lesbarkeit & Gruppierung“ (`.page-head`, `.count-badge`,
  `.list-panel`, `.krt-segmented`, `.btn.is-filtered` + `.filter-count`,
  `.filter-chip`, `.krt-switch`).
- README → Abschnitt „Flächen & Bedienelemente“.
- Mock: `proposals/list-page-readability.html` (Vorher/Nachher + Befunde).
- Specimen: `components/ListPanel/preview.html`.

Betroffene Dateien im Repo (mindestens):
`static/css/styles.css`, `missions*.html`, `operations-index.html`,
`orders-index.html`, `refinery-orders-index.html`, `materialboerse*.html`,
`inventory-*.html`, `hangar.html`, `blueprints*.html`, Bank-/Org-Listen und jedes
weitere Template mit Zeitraum-/Status-Umschalter, Filter-Button oder Titel-Zähler.
Vor dem Umbau per `grep` alle Vorkommen der heutigen Umschalter-/Zähler-Klassen
sammeln und die Liste im ersten Commit-Text festhalten — **nicht raten**, welche
Klassen die App heute benutzt.

## Arbeitsweise
- Kleine, prüfbare Commits, ein Schritt pro Block, nach jedem Schritt `./gradlew check`.
- i18n strikt: kein neuer hartcodierter Text; neue `aria-label`s als Message-Keys (de/en).
- CSP: keine Inline-Styles, keine externen Ressourcen.
- Keine neuen Farbwerte — nur die Tokens aus `colors_and_type.css`.
- Optik gegen `proposals/list-page-readability.html` abgleichen, Desktop **und** ≤ 768 px.

---

## SCHRITT 1 — Tokens + globale Kontroll-Optik (größte Wirkung)
- `--surface-*` und `--control-*` in `styles.css` übernehmen, `--action-neutral` → Grau 2.
- `.btn-ghost`, `.btn-quiet-danger`, `.btn-secondary` (inkl. Hover) wie im DS.
- Inputs, Selects, Textareas, Checkbox/Radio: Rand `var(--control-border)`.
- `.pagination .page-btn`, `.chip-select`: Füllung + Grau-2-Rand.
- Prüfen, ob die App eigene Icon-Button-Klassen hat (z. B. Stift/Mülleimer in Hangar,
  Operationen) — die auf `.btn.btn-ghost.btn-icon` bzw. `.btn-quiet-danger.btn-icon`
  zurückführen statt eigene schwarze Kästen zu pflegen.

## SCHRITT 2 — Gedämpfter Text
- Jede Stelle, an der `--color-gray-2` (#646464) als **Textfarbe** dient
  (`color:`), auf `--color-gray-2-text` (#8A8A8A) umstellen. Grau 2 bleibt für
  Ränder, Scrollbar-Daumen, Status-Punkte, Hintergründe.
- `.tab-nav .tab` inaktiv → `--color-gray-2-text`; `.tab-count` grau, im aktiven Tab
  `--color-accent-light`.

## SCHRITT 3 — Segment-Umschalter vereinheitlichen
- Alle Zeitraum-/Status-/Ansichts-Umschalter → `nav.krt-segmented` mit
  `a.krt-segmented__item` und `aria-current="page"` am aktiven Link (bzw. Buttons mit
  `aria-pressed`, wenn per JS umgeschaltet wird). `aria-label` der Gruppe als Message-Key.
- Zähler im Segment → `.krt-segmented__count` (bei „Abholbereit“ zusätzlich
  `--success`).
- **Lagerverwaltung:** „Globales Lager“ / „Mein Lager“ sind heute zwei Buttons, der
  aktive gefüllt orange — das liest sich als CTA. Auf `.krt-segmented` umbauen.
- Gleiches für „Meine Schiffe / Org-Einheit“ (Hangar) nur, falls das heute **kein**
  `.tab-nav` ist; echte Seiten-Tabs bleiben `.tab-nav`.

## SCHRITT 4 — Seitenkopf + Arbeitsfläche
- Listen-Seiten: Kopf als `.page-head` (Eyebrow, `h1.page-head__title` + `.count-badge`,
  `.page-head__actions` mit genau einer `.btn--cta`).
- Darunter **eine** `section.list-panel`: `.list-panel__toolbar` (Suche in
  `.list-panel__search`, Umschalter, Filter, Schalter), optional `.list-panel__chips`
  (aktive Filter), die Tabelle bündig, `.list-panel__footer` („1–3 von 3“ + Pagination).
- Master-Detail (Materialbörse) und Detail-Seiten bekommen **kein** `.list-panel`
  um das Ganze — dort nur die Toolbar in ein `.list-panel` oder `.card` setzen.

## SCHRITT 5 — Filter-Zustand + Schalter
- Filter-Button mit aktiven Filtern: `.btn.btn-ghost.is-filtered` + `.filter-count`
  (eckig; die heutige runde Pille entfällt).
- Aktive Filter (z. B. „Offen ×“, „In Bearbeitung ×“) → `.filter-chip` mit
  `.filter-chip__remove` (Button, `aria-label` „Filter … entfernen“ als Message-Key).
- „Meine Aufträge“ (Raffinerie) und gleichartige Toggles → `label.krt-switch` mit
  `input[type=checkbox][role=switch]`.

## SCHRITT 6 — Befunde klären (nicht blind umsetzen)
Aus `proposals/list-page-readability.html`, Abschnitt 5 — jeweils erst prüfen, dann
im PR begründen:
1. **Einsatzverwaltung „Kommend“** zeigt Einsätze „vor 3/7 Tagen“ mit Status GEPLANT.
   Filter-Logik vs. nicht abgeschlossene Einsätze prüfen.
2. **Aufträge, Prio-Spalte „≡ 1“:** Ist ≡ ein Ziehgriff (Umsortieren) oder Deko?
   Ziehgriff → eigene Spalte, Icon + `aria-label`; sonst Symbol entfernen.
3. **Lager-Mengen** („29,870 SCU“): Formatierung prüfen; wenn Dezimal gemeint,
   Nullen am Ende weglassen.
4. **Materialbörse:** Qualitätswerte nicht orange, sondern `--data-fg`.

## Definition of Done
1. Kein Bedienelement mehr mit Rand < 3 : 1 gegen seinen Hintergrund (Stichprobe
   DevTools: Ghost-Button, Segment, Input, Pagination, Icon-Button).
2. Alle Umschalter = `.krt-segmented`; aktiver Zustand ohne Farbe allein erkennbar
   (Unterstrich); kein gefüllter Orange-Block als Auswahl.
3. Listen-Seiten: Toolbar + Tabelle + Fußzeile auf einer `.list-panel`-Fläche;
   Titel-Zähler = `.count-badge`; eine CTA pro Seite.
4. Kein `--color-gray-2` mehr als Textfarbe.
5. Tastatur: Fokus-Ring auf Segmenten, Filter-Chips, Schalter sichtbar.
6. i18n de/en vollständig; `./gradlew check` grün; Optik = Mock, auch ≤ 768 px.
