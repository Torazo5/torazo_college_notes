---
type: readme
---
# How this vault works

## Folder structure
- `Daily/` — one note per day (auto-created by the calendar/daily-note command, uses `Templates/Daily Note`)
- `Courses/<Course Name>/` — one folder per class
  - `_Course Info.md` — syllabus, professor, schedule
  - `Lectures/` — for a new lecture note, just create a new note here (`Cmd+N`, or right-click folder → New note). Templater auto-names it "Lecture N - date" and auto-links the course — nothing to fill in but the content.
  - `Homework/_New Homework.md` — pre-filled, course already linked, `type: homework`. For routine problem sets/readings. Duplicate, rename, fill in.
  - `Assignments/` — for the bigger stuff: papers, projects, anything that isn't routine homework. No pre-filled file here yet — duplicate `Templates/Assignment.md` and set `type: assignment` (frontmatter already does this), then link the `course` yourself.
  - `Readings/` — notes on assigned readings
- `Templates/` — the generic, unfilled versions (Daily Note, Lecture Note, Course Info, Homework, Assignment). Only needed when setting up a *new* course — day-to-day, duplicate the pre-filled files above instead.
- `Prompts/` — reusable AI prompts that aren't tied to one course. Currently: **`Note Cleanup.md`**
- `Inbox/` — quick, unsorted capture; sort into the right place later
- `Attachments/` — images, PDFs, etc.
- `Coursework.base` — a live dashboard across every course, with four views: **All Coursework**, **Not Done**, **Homework** only, **Assignments** only

## Day-to-day: new lectures name themselves, homework you duplicate
Two different mechanisms, because they need different things:
- **Lectures** — the **Templater** plugin auto-names new notes in any course's `Lectures/` folder as "Lecture N - date" and auto-links the course, just by creating a new note there (`Cmd+N`). No template to pick, nothing to fill in but content.
- **Homework** — still the duplicate-based approach: `Homework/_New Homework.md` in each course is pre-filled with the course link and `type: homework`. Duplicate it (`Cmd+D`), rename, fill in `due`. (Didn't need auto-naming here since homework doesn't have a natural "N in a row" like lectures do.)

## Homework vs. Assignments
These are deliberately two different `type`s, not two folders for the same thing:
- **`type: homework`** — routine, recurring work (problem sets, short readings). Lives in `Homework/`.
- **`type: assignment`** — bigger, one-off work (papers, projects, labs write-ups). Lives in `Assignments/`.

Both need a `course` link, a `due` date, and a `status` (`not-started` / `in-progress` / `done`) in frontmatter — that's what makes them show up in `Coursework.base`, and what the "Homework" vs "Assignments" views filter on. Homework also has optional `source` (textbook chapter / problem-set #) and `est_time` fields, plus a "Problem List" checklist section — leave blank if you don't use them.

## This semester
Six course folders are set up under `Courses/`, pulled from your Fall 2026 schedule screenshot — see **`Fall 2026 Schedule.md`** for the full weekly grid and links into each course. A few room numbers/exact minutes got clipped in that screenshot; those are flagged inline in the relevant `_Course Info.md` and the schedule note — worth a quick confirm against the registrar portal.

To add another course later, duplicate any existing `Courses/<name>/` folder, rename it, and fill in `_Course Info.md`.

## AI access to this vault
1. **Smart Connections (in-app)** — installed as a community plugin. Enable it in Settings → Community plugins, then open its sidebar to see semantically related notes as you write, or use it as a chat panel over your vault. Uses a local embedding model by default — no API key required to start.
2. **Ask AI sections** — every template has one. Drop a prompt there and hand it to whichever AI surface you're using; keeps the ask and the note it's about in the same place.
3. **`/cleanup-note`** — a slash command available from any note in the vault. Open or link a messy note, type `/cleanup-note`, and it restructures the note *in your own words*: adds subheadings, fixes markdown that's rendering wrong (stray `#` turning into tags, broken LaTeX), converts processes to numbered steps and definitions to tables, then fills in the Key Terms, Summary, Related, and Questions sections. It also **links your key terms as `[[wikilinks]]`** (without creating the note files) and links notes to the lectures/readings they build on — that's what actually populates the graph view. It won't rewrite your phrasing or silently fix your understanding — anything that looks wrong is left exactly as you wrote it with an inline `*(AI note: ...)*` flag pointing you at what to double-check. Lives in `.claude/commands/`; the copy-paste version and its variations are in [[Prompts/Note Cleanup]].

Delete this note once the structure feels natural, or keep it as your vault's front page.
