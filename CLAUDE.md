# CLAUDE.md

Working notes for Claude Code (and human contributors) in this repo.

## What this is

The **DAS KARTELL design system** — the visual source of truth for the *Profit Basetool*,
the squadron-management app of the „DAS KARTELL" Star Citizen organisation. A dark, sci-fi
„technical HUD" brand: house orange `#E77E23` on the blue-gray surfaces of das-kartell.org's
Design 3.0 (canvas `#0D0F12`, boxes `#1A1E24`, tiles `#20252C`, bars `#14171C`), **Lato** as the
single typeface (headlines bold + UPPERCASE), radii by role (boxes 10 px, tiles 8 px, controls
6 px, inner elements 4 px), corner-bracket HUD frames, and a fixed department colour system whose
values are prescribed and never altered.

`README.md` is the source of truth for colours, typography and components; `SKILL.md` is the skill
entry point. This repository is consumed by the `basetool` repo as a **git submodule** at
`.claude/skills/das-kartell-design/`, and the web frontend is built against it.

> [!IMPORTANT]
> **A change here changes the product.** The web frontend builds against this system: a colour, a
> spacing token or a component contract that moves here moves in the app as well.

## Conventions

- **Prose in English** — this file, `README.md`, commit messages, PR titles and bodies, issues. The
  brand's own German product words („Einsätze", „Lager", „Kartellbank") are quoted as they ship.
- **Only OFL-licensed fonts in the repository.** Lato (SIL OFL) is the whole type system; the
  commercial display face used in brand material ships nowhere.
- **No code comments besides documentation comments** (JSDoc in `.js`). No `/* */` in CSS, no
  `<!-- -->` in HTML, no commented-out code; tool directives without prose stay (e.g. the
  `<!-- @dsCard … -->` header a specimen card is registered by). The reasoning goes into the commit
  message and the PR body. Existing comments are removed when a file is reworked, not as a side
  effect of an unrelated change.
- **Colours are measured, never eyeballed from screenshots.** A value taken from das-kartell.org or the
  Basetool comes from the style's own colour set (WoltLab ACP) or the browser: DevTools computed
  style, the DevTools colour picker, or a console read-out of `getComputedStyle`. Screenshots
  taken with Windows HDR on (Snipping Tool) lift dark grays and the orange, and must not be used
  to derive a token.
- **`README.md` is the source of truth.** When a value appears both there and in a CSS file, the
  README is what a consumer is told to read — keep them in step, and change the README in the same
  commit.
