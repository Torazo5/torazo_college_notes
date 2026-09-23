---
description: Scan the vault for anything flagged wrong, unfinished, or unanswered and report what needs re-studying or redoing
argument-hint: [course code, folder, or timeframe — blank scans the whole vault]
---

Scan the user's notes and coursework and report back what still needs attention: things marked wrong, things left unfinished, questions never answered, and work not done.

**Scope:** $ARGUMENTS

If no scope was given, scan all of `Courses/` plus `Daily/` and `Inbox/`. If a course code (`CHEM 042`), folder, or timeframe was given, limit to that.

This is a **reminder**, not a tutoring session. The output is a list of things to go do. Do not re-teach the material, do not re-derive the chemistry, do not fix anything during the scan.

## Step 1 — get the date

Run `date` first. Everything below depends on knowing today. Never assume the date from note filenames or frontmatter.

## Step 2 — scan for signals

Run these from the vault root. Read the surrounding lines of every hit before judging it — a raw grep match is not a finding.

```bash
# things flagged as possibly wrong (by me, in a previous cleanup)
grep -rn "AI note:" --include="*.md" Courses Daily Inbox

# things the user flagged themselves
grep -rn "> \[!warning\]\|> \[!todo\]" --include="*.md" Courses Daily Inbox

# uncertainty in their own voice
grep -rni "lowk\|not sure\|idk\|i think\|might be wrong\|feel like\|confus\|don't get\|dont get\|(right?)\|???\|check this\|where do i check\|later\|come back\|revisit\|todo\|wait," --include="*.md" Courses Daily Inbox

# work with a status or a due date
grep -rn "^status:\|^due:" --include="*.md" Courses

# unchecked task boxes
grep -rn "^\s*- \[ \]" --include="*.md" Courses Daily

# notes that were never filled in — empty scaffold sections
grep -rn -A1 "^## Summary$\|^## Notes$\|^## Key Terms$" --include="*.md" Courses
```

**Always exclude:** `Templates/`, `Prompts/`, `.claude/`, `.obsidian/`, `.smart-env/`, and any file whose name starts with `_` (`_New Homework.md`, `_Course Info.md`). Those are blank template stubs — `_New Homework.md` carries `status: not-started` in every course and is never a real task. Reporting one is a false positive and makes the whole list untrustworthy.

## Step 3 — sort into priority bands

Report in this order. Within each band, most overdue / oldest first.

**1. Marked wrong — re-study**
An `*(AI note: ...)*` flag still sitting in a note, or their own `> [!warning]` about something being wrong. These are the highest value: a specific known-wrong belief with a specific place to check it.

**2. Due or overdue work**
`type: homework` / `type: assignment` with `status: not-started` or `in-progress`. Compare `due:` against today. Say "due in 2 days" or "3 days overdue", not the raw date. Unchecked `- [ ]` items in a Problem List count here.

**3. Questions never answered**
Bullets under `## Questions for AI / Follow-up` with nothing resolving them. A question is **answered** if a reply follows it in the note — the user's convention for this is `-> NEW ANSWER BY ME` on the next line (see [[Lecture 3 - Sep 3]]). Skip answered ones.

**4. Left unfinished**
`> [!todo]` callouts, "lowk work on this", a practice image with no worked solution under it, a truncated sentence.

**5. Notes that never got written**
A lecture or reading note that is all empty sections while notes on either side of it have real content — meaning the class happened but nothing got captured, or nothing got cleaned up. Suggest `/cleanup-note` for ones with raw content but an empty Summary/Key Terms.

## Step 4 — report

Group by course, bands in order. One line per item:

```
- [[Lecture 4 - Sep 8]] L78 — "$k_b = 3/2 k_a$ ... i feel like this mithgt be quite wrong" → check the Sep 8 force-constant slide *(12 days old)*
```

Each line needs: the note as a `[[wikilink]]`, roughly where in it, a **short verbatim quote** of the marker so they recognize their own words, and the concrete next action. Add age in days when an item is over a week old — a flag that's been sitting for two weeks is the actual signal.

Rules for the report:
- **Quote, don't paraphrase.** They recognize their own phrasing instantly; a summary of it reads like someone else's homework.
- **Cap at 12 items.** If more qualify, show the top 12 and end with "+ N more, mostly [band]". A 40-item list gets ignored.
- If a note has five flags, report the note once with the count, not five lines.
- If nothing qualifies, say so in one line. Do not pad with "consider reviewing your notes."
- Open with a single line of shape: how many items, how many are overdue, which course is worst. Then the list.

## Step 5 — offer to clear

After the report, ask which items they've handled. Then, **only for the ones they name**:

| Item type | How to clear it |
|---|---|
| `*(AI note: ...)*` flag | Delete **only** the italic parenthetical. Their sentence stays byte-identical — including whatever was wrong in it, unless they tell you the correction. |
| They give the correct answer | Append their correction to the note in their words, using their existing `-> NEW ANSWER BY ME` convention. |
| Unchecked `- [ ]` | Change to `- [x]`. |
| Homework `status:` | Update the frontmatter field (`not-started` → `in-progress` / `done`). Touch nothing else in the file. |
| `> [!todo]` / `> [!warning]` | Remove the callout wrapper only if they say it's resolved; keep the text inside as normal body lines. |

Never edit a note they did not name. Never clear a flag because it *looks* handled. Confirm the exact list back to them before editing, then report which files changed.

## Boundaries

- Do not invent work that isn't marked in a note somewhere
- Do not judge their understanding or add new corrections during a scan — this skill reports existing flags, it does not create new ones (that's `/cleanup-note`)
- Do not open every file in the vault; grep first, then read only the notes that had hits
- Do not reorganize, reformat, or "improve" any note while scanning
