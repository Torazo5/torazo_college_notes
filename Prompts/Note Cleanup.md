---
type: prompt
tags: [prompt, workflow]
---
# Note Cleanup Prompt

Works on **any** class note — readings, lectures, homework — in any course.

> [!tip] Fastest way: just type `/cleanup-note`
> It's a slash command now, so you don't need this file at all day-to-day. Link or open the note, type `/cleanup-note`, done. This note is the copy-paste fallback and the record of what the command actually does.

---

## The Prompt

> [!quote] Copy from here
> Clean this note up so it's easier to understand and easier to scan when I come back to it.
>
> **Keep most of my original words and phrasing** — that's how I restart the memories when I see them. Don't rewrite my notes into textbook language. Reformat and reorganize, don't replace.
>
> Specifically:
> - Add `###` subheadings to break the body into topics
> - Fix any markdown that's rendering wrong (stray `#` making headings/tags, broken LaTeX, etc.)
> - Turn step-by-step processes into numbered steps
> - Turn definition lists and symbol keys into tables
> - Use callouts (`> [!warning]`, `> [!note]`, `> [!important]`) for things I flagged as mistakes or emphasized
> - Keep all `![[image]]` embeds exactly where they are relative to the text
> - Populate the **Key Terms** table with every term I defined, and make each term a `[[wikilink]]` so it shows up in the graph — reuse the exact spelling already used elsewhere in the vault, and **don't create the note files**
> - Link the first mention of each term in the body too, using an alias (`[[Bond dissociation energy|bond disassociation energy]]`) so my wording doesn't change
> - Add a **Related** section linking the lectures/readings this note actually builds on
> - Write the **Summary** as one paragraph tying the whole note together
> - Add 2–3 **Questions for AI / Follow-up** based on gaps or things I seemed unsure about
> - Add relevant `tags:` to the frontmatter
> - If something looks factually wrong, garbled, or unfinished, **don't fix it** — leave my words alone and drop an inline flag right there: `*(AI note: X may be wrong — check <specific slide/reading> for detail)*`
>
> Don't add new content I didn't write. Don't correct my understanding silently — flag it inline as an `*(AI note: ...)*` where it happens, put the longer version in Questions for AI, and tell me in your reply.

---

## Variations

| Want | Add to the prompt |
|---|---|
| Lighter pass | *"Only do the subheadings and Key Terms, skip the tables."* |
| Just fix formatting | *"Don't populate Key Terms or Summary, just fix structure and broken markdown."* |
| Multiple notes | *"Do this for every note in `Courses/<name>/Readings/`."* |
| Exam prep | *"Also add a Practice Questions section based on the material."* |
| No inline flags | *"Skip the AI notes, just put anything that looks wrong in Questions for AI."* |
| No new links | *"Don't add any wikilinks, keep Key Terms as plain text."* |

## Related
- [[00 Start Here]] — how the vault is organized
- `Templates/` — the blank note scaffolds this prompt fills in
