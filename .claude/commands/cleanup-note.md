---
description: Clean up and structure a class note, keeping the user's original words
argument-hint: [note name, or leave blank to use the linked/open note]
version: 1.4.0
updated: 2026-09-21
---

Clean up a class note so it's easier to scan and study from later.

**Target note:** $ARGUMENTS

If no target was given above, use the note linked in the conversation context (`<linked_content>`), the editor selection, or the currently open note. If none of those exist and nothing was named, ask which note — do not guess.

## Scope: lectures and readings only

This skill only edits notes inside a course's `Lectures/` or `Readings/` folder. Everything else is off-limits: homework, assignments, revision or review notes (e.g. `mid term revision`, `quiz prac`), study guides, quiz docs, and anything at the course root. **Never edit those files. That includes stamping them, fixing links in them, or adding a `## Related` section.** Linking *to* them from a lecture or reading's `## Related` is fine.

- If the target is outside `Lectures/`/`Readings/`, don't clean it. Say it's out of scope and stop.
- On a bulk run ("clean everything that hasn't been done"), only pick candidates from `Lectures/` and `Readings/`. Don't list other files as "skipped", just leave them out.
- `Concepts/` pages are still created and updated as described below, since that's part of cleaning a lecture or reading.

## First: is this actually a new note?

These templates get made by duplicating the previous lecture's note, so a "new" note is often still carrying the old one's content. **Check this before cleaning anything** — cleaning up a copy of last lecture and calling it done is worse than doing nothing, because it makes stale content look finished.

Compare the target against its siblings in the same folder — the previous lecture/reading by date, and any file with a suspiciously similar size:

```
ls -la "<folder>"
diff "<previous note>" "<target note>"
```

Then judge by what came back:

- **Essentially identical** (only the `date:` or title differs, body is the same) — **stop. Do not clean it.** They duplicated the file as a blank template and either haven't written this lecture's notes yet, or wrote them into the wrong file. Say which note it duplicates and what the only differences are, and ask whether they want it reset to an empty template, or whether the content really belongs here.
- **Partly carried over** (some new material, plus leftovers from the template) — clean the new material normally, and treat the carried-over parts as **not theirs for this note**: stale `## Reading / Prep` links, `tags:` describing the old lecture's topics, a filled-in Key Terms table, leftover body paragraphs from the previous lecture. Remove them or replace them with this note's equivalents rather than reformatting them. Call out in your reply exactly what you removed as carryover, so they can put it back if you judged wrong.
- **Genuinely new** — proceed as normal.

Placeholder junk they left while typing (`asd`, `TODO`, `xxx`, a lone stray line) isn't content — drop it, and mention that you did.

The core rule below applies to what they actually wrote for *this* lecture. Text that arrived by duplication isn't covered by it.

### Course identity comes from the folder, not the note

Templates also get duplicated **across courses**, so a MATH note can still say CHEM in its `course:` link and H1. The note's folder is the source of truth, not what the note claims about itself and not its filename. Always check and fix these, even when the body is genuinely new:

1. Course folder = the `Courses/<folder>/` the note sits in (e.g. `MATH 019 - Single and Multivariable Calculus`)
2. Read the `code:` field from that folder's `_Course Info.md` (e.g. `MATH 019 HM-04`)
3. Set `course: "[[<folder>/_Course Info|<code>]]"`
4. Set the H1 to `# <subject + number> — <Type>` (e.g. `# MATH 019 — Lecture`). Take the type from the subfolder (`Lectures/` → Lecture, `Readings/` → Reading, and so on). If the existing H1 already names the right course, leave its form alone.

This is a fix, not a flag. Report it in your reply as `course link: CHEM 042 → MATH 019`, and also say which course the stale values came from, since that tells you which template it was duplicated from.

## Core rule

**Keep the user's original words and phrasing.** This is the whole point: they restart the memory by re-reading their own voice. Reformat and reorganize — do not rewrite into textbook language, and do not substitute your own explanations for theirs. If a sentence is theirs and it's comprehensible, it stays as-is.

## What to do

**Structure**
- Break the main body into `###` subheadings by topic
- Turn step-by-step processes into numbered steps (`#### Step 1 — ...`)
- Turn definition lists, symbol keys, and comparisons into tables
- Use callouts for things they flagged themselves: `> [!warning]` for noted mistakes/gotchas, `> [!note]` for asides, `> [!important]` for anything they wrote in caps or emphasized
- Add `---` rules between major topics

**Fix broken markdown** (do this carefully, it's the highest-value part)
- Stray `#` at line start that became an unintended heading or tag — e.g. `#2` rendering as a tag instead of a step number, or `# valence electrons` becoming an H1. Escape as `\#` or rephrase.
- Broken or malformed LaTeX, stray subscripts, unclosed `$$`
- Keep every `![[image]]` embed in its original position relative to the surrounding text

**Populate the scaffold sections** (these templates all share the same skeleton)
- **Key Terms** — a table of every term they defined, in their words, with each term as a `[[wikilink]]` (see below)
- **Summary** — one paragraph tying the whole note together
- **Questions for AI / Follow-up** — 2–3 questions drawn from actual gaps, or things they seemed unsure about
- **Related** — links to the other notes this one connects to (see below). Add the `## Related` section just after `## Summary` if the note doesn't already have one.
- **Frontmatter** — add a relevant `tags:` list

**Stamp the trace** — every note you clean gets these two frontmatter fields, added or overwritten:

```yaml
cleaned_with: cleanup-note v1.3.0
cleaned_on: 2026-09-21
```

Use the `version:` from this file's own frontmatter, and today's real date from `date` — never a guessed one. If the fields already exist from an older run, overwrite them; the note reflects the most recent pass. This is what makes `grep -rl "cleaned_with" Courses` a reliable inventory of what's been processed and under which rules, so don't skip it even on a partial cleanup.

## Linking for the graph

Obsidian's graph is built **only** from `[[wikilinks]]`. A Key Terms table of plain text contributes nothing to it, so linking is what turns these notes into a connected map instead of a pile of files.

### Key Terms → wikilinks

Every term in the Key Terms table gets linked: `| [[Bond dissociation energy]] | how hard a bond is to break — ... |`

Terms that have only ever appeared in this one note stay as bare links with no file behind them. Unresolved links still render in the graph as faded nodes, so nothing is lost — and it avoids burying the vault in one-line stubs for terms that never come back. Terms that *do* recur get a real page; see below.

**Consistent naming is the whole game** — `[[bond dissociation energy]]` and `[[Bond Dissociation Energy]]` and `[[BDE]]` can end up as separate nodes, which defeats the point. So:
- **Before inventing a link name, search the vault for how that concept is already linked or titled** (`grep -ri "bond dissociation" --include="*.md"`) and reuse the existing spelling exactly.
- Otherwise: sentence case, singular, spelled out — `[[Molecular ion]]`, not `[[molecular ions]]` or `[[M+]]`.
- Link the concept, not the instance: `[[Isotope]]`, not `[[Chlorine-37]]`.
- Skip linking things that will never recur (a one-off problem number, a specific worked value).

In the **body**, link only the *first* meaningful mention of a term — not every occurrence. If their wording differs from the canonical name, use an alias so their text still reads exactly as they wrote it: `[[Bond dissociation energy|bond disassociation energy]]`. Never change the visible words to make a link fit.

### Recurring terms → real concept pages

A term that keeps coming back is the one worth having a page for. Those pages live in a single top-level **`Concepts/`** folder, shared across every course — `vector` in MATH and `vector` in PHYS must be the same node, or the graph splits and the whole point is lost.

**The threshold: create a page once the term appears in 2 or more notes.** Check before creating:

```
grep -rl "\[\[Dipole moment" --include="*.md" Courses | wc -l
```

One hit (just the note you're cleaning) → leave it as a bare link. Two or more → create or update `Concepts/<Term>.md`. Re-run this check on the terms already linked in *older* notes too, since cleaning today's note is often what pushes a term over the threshold for the first time.

**Page format.** Their own wording is still the goal — it's what makes re-reading restart the memory. But their notes are often partial or the term was never defined at all, and a page that's blank or half a sentence is useless to study from. So fill the gap and **label whose words these are**. Every concept page declares provenance in a `source:` frontmatter field, and anything not theirs is visibly marked in the body.

Three variants:

**1. `source: mine` — best case.** They defined it well enough to stand alone. Lift it verbatim, add nothing to the definition, no callout.

```markdown
---
type: concept
source: mine
tags: [concept, chem042]
created: 2026-09-17
cleaned_with: cleanup-note v1.3.0
---
# Dipole moment

how much a molecule pulls charge to one side — their exact wording, untouched

## Appears in
- [[Reading 3 - Sep 9]] — first defined here, with the $\vec{\mu}=q \times \vec{R}$ formula

## Notes
```

**2. `source: mixed` — they started it, you finished it.** Their definition exists but is incomplete, truncated, or too terse to study from. Write the fuller definition, then preserve their original underneath in `## My original wording` — never delete or silently absorb it. That section is the thing they'll actually recognize later, so it stays intact even if it's a fragment.

```markdown
---
source: mixed
---
# Electron domain

> [!note] Partly written by Claudian
> Your definition was incomplete, so the version above fills it in. Your original is kept below — check the completion against the lecture slide.

a region of electron density around the central atom — a lone pair, or a bond of any order, each counting as exactly one domain regardless of whether it's single, double or triple

## My original wording
lone pairs and bonds from the central atom only, thats why BeCl2 is 2

## Appears in
- [[Reading 3 - Sep 9]] — where the counting rule came from
```

**3. `source: claudian` — it was missing entirely.** The term recurs across notes but was never defined anywhere. Write the definition and say plainly that none of it is theirs. No `## My original wording` section, because there isn't one.

```markdown
---
source: claudian
---
# Chemical shift

> [!warning] Written by Claudian — you hadn't defined this
> This term shows up across your notes but was never defined in any of them. Nothing here is in your words, so check it against the lecture before trusting it.

the position of a signal on an NMR spectrum, measured in ppm ...

## Appears in
- [[Lecture 7- Sep 15]] — used in passing, not defined
```

The callout is the part that matters most — `source:` in frontmatter is easy to miss while reading, the callout is not. Never produce a page with AI-written content and no callout.

**Updating an existing concept page.** Never overwrite one. Append the new note to `## Appears in` with its one-line reason and leave everything else untouched — the `## Notes` section belongs to the user and may have their own writing in it. If the page exists but is empty (Obsidian creates a blank file when you click an unresolved link), fill in the appropriate template above.

**Provenance only moves toward `mine`.** A page written as `claudian` or `mixed` is a placeholder waiting to be replaced by their own understanding. So on later runs, if a newer note defines that term in their own words:

- `claudian` → `mixed` — keep your definition, add their wording in `## My original wording`, swap the `> [!warning]` for the `> [!note]` callout
- `mixed` → `mine` — if their definition now stands on its own, promote it to the main definition, drop the callout and the `## My original wording` section, set `source: mine`

Never demote. Once a definition is theirs, a later run must not replace it with a cleaner AI version — that silently destroys the thing the whole skill exists to protect. And if they've edited an AI-written definition by hand, treat the result as theirs: promote to `mine` rather than reasserting your wording.

**If a concept page already exists outside `Concepts/`** — most likely at the vault root from a stray click — move it in with `git mv`-style care rather than creating a second copy, then make sure the link spelling still resolves.

Naming follows the same rules as the Key Terms links above: sentence case, singular, spelled out, and **search the vault first** for how the term is already linked so the page title matches existing links exactly. A page whose title doesn't match the links pointing at it is worse than no page.

### Note → note links

In `## Related`, link the notes this one actually connects to, with a few words on why:
- The lecture or reading it builds on or continues (`[[Lecture 1 - Sep 1]] — where the mass spectrometer setup came from`)
- The reading that covers the same material
- Homework or assignments that use it

Only link notes that genuinely exist in the vault and genuinely relate — check first. A wrong link is worse than a missing one, and padding this section with everything in the course makes the graph useless.

## Flagging things that look wrong

When something in the note looks factually wrong, contradictory, garbled, or incomplete: **do not fix it, and do not delete it.** Leave their sentence exactly as written and drop an inline flag immediately after it, on the same line where possible:

```
you can see three peaks so its like all Cl - 35, one Cl - 37 and two Cl-39 *(AI note: Cl-39 may be wrong — the whole calc above uses Cl-35/Cl-37, check the lecture slide)*
```

Rules for these flags:
- Format is always `*(AI note: ...)*` — italic, parenthetical, starts with `AI note:` so it's obvious it isn't theirs and is easy to search for or strip out later
- Say **what** looks off and **where to check** — the specific slide, reading, textbook section, problem, or earlier line in their own note. "This may be wrong" with no pointer is not useful.
- Hedge, don't assert. It's their note and they were in the room. Use "may be", "looks like", "double-check".
- Keep it to one sentence. If it needs more than that, put the short flag inline and the longer version in **Questions for AI / Follow-up**.
- Flag it once, at the spot it appears. Don't repeat the same flag in every section it touches.
- Only flag real problems: wrong numbers, a term used in a way that contradicts how they defined it elsewhere, a conclusion that doesn't follow from what's above it, an unfinished/truncated sentence, a name or unit that looks mistyped. Do not flag style, informality, incomplete-but-fine shorthand, or things that are simply terse.

Genuine open questions they raised themselves ("where do i check?") still go in **Questions for AI / Follow-up** as before — inline flags are for things *you* noticed that they didn't.

## Boundaries

- Do not add subject content they didn't write
- Do not silently correct their understanding — flag it inline per the section above and mention it in your reply so they can check it against the source
- Preserve all frontmatter fields that already exist (`type`, `course`, `date`, `source`, `status`, `due`)

## After

Report what changed as a short bulleted list — especially anything you removed as duplicate/template carryover, any broken markdown you found, every inline `*(AI note: ...)*` you added, and any new `[[links]]` introduced, so they can review the flags and links without rereading the whole note.

Also report, separately from the note's own changes:
- **Concept pages created** in `Concepts/`, and which term crossed the 2-note threshold to trigger each one — each tagged with its `source:` so they can see at a glance how much was theirs
- **Concept pages updated** — whether that was just an `## Appears in` line, or a promotion (`claudian` → `mixed` → `mine`)
- **Anything written as `claudian`**, called out explicitly as a list. These are definitions they never wrote and haven't verified, so they're the highest-priority thing to check against the source.
- The **version stamp** applied, e.g. `cleaned_with: cleanup-note v1.3.0`

---

## Changelog

Bump `version:` in this file's frontmatter whenever the rules change, set `updated:` to today's real date from `date`, and add a line here. The version written into each note's `cleaned_with:` is what makes it possible to tell later which ruleset produced it — so a rule change without a version bump makes every note cleaned afterward untraceable.

- **1.4.0** — 2026-09-21 — Scope limited to `Lectures/` and `Readings/`. Homework, assignments, revision notes, study guides and quiz docs are never edited.
- **1.3.0** — 2026-09-21 — `course:` link and H1 are now derived from the note's folder and its `_Course Info.md` `code:`, fixing notes duplicated from another course's template.
- **1.2.0** — 2026-09-17 — Concept pages no longer have to be verbatim. Added three provenance variants (`source: mine` / `mixed` / `claudian`) with visible callouts on anything Claudian wrote, and a `## My original wording` section that preserves their raw text on mixed pages. Added the promotion path so pages upgrade toward `mine` as they define terms themselves.
- **1.1.0** — 2026-09-17 — Recurring terms (2+ notes) now get real pages in a shared top-level `Concepts/` folder instead of staying unresolved links. Added `cleaned_with:` / `cleaned_on:` frontmatter stamps to every cleaned note. Body linking stays first-mention-per-note.
- **1.0.0** — Initial version. Structure/markdown repair, scaffold population, Key Terms as unresolved wikilinks, inline `*(AI note: ...)*` flagging, template-duplication detection.
