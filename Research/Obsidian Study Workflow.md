# Obsidian-Centered Study Workflow

## Recommendation

Use a **two-layer system**, not one application for every kind of learning:

1. **Obsidian is the durable course library and thinking layer.** Keep course notes, assignments, reading notes, links, clean summaries, and the original slide/PDF files in the vault.
2. **An ink/PDF app is the lecture-capture layer.** Annotate the actual slides with a Pencil/stylus, then put the annotated PDF back in the matching lecture folder and create a short linked Obsidian note for what matters.

For an Apple-first setup, use **Goodnotes** for all serious slide/PDF handwriting and annotation, with **Obsidian + Excalidraw** for durable visual explanations and cross-course concept maps. Use **Preview** on Mac for quick markups. This keeps the lecture artifact portable as a PDF while Obsidian remains the searchable, linkable home base.

Apple Notes is a good lower-friction alternative if notes and PDFs need to live together, but it is less natural as a file-based companion to Obsidian. Freeform is best reserved for brainstorming or planning boards, not as the canonical location of course material.

## Why this division works

| Need | Primary tool | What is saved in the vault |
| --- | --- | --- |
| Take handwritten, slide-by-slide lecture notes | Goodnotes | Original and annotated PDFs |
| Quick Mac markup / form fill | Preview | Annotated PDF |
| Diagram an explanation, draw a concept model, or brainstorm connections | Excalidraw in Obsidian | Excalidraw Markdown drawing plus exported SVG/PNG |
| Organize a unit, connect lectures/readings/problems | Obsidian Canvas | `.canvas` map and linked source notes |
| Review and retrieval | Obsidian Markdown | One concise lecture companion note |
| Tutoring, drills, feedback, and study-plan creation | ChatGPT Study Mode | Only the useful results, rewritten/verified in Obsidian |

[Obsidian Canvas](https://obsidian.md/help/plugins/canvas) is an infinite visual workspace that can connect notes, attachments, web pages, and files (including PDFs), and it stores boards in the open JSON Canvas format. It is an organizer, however—not a handwriting or PDF-annotation surface. [Obsidian embeds](https://obsidian.md/help/embeds) let notes show a PDF inline and target a page, for example `![[Lecture 03.pdf#page=4]]`.

The author-maintained [Obsidian Excalidraw plugin](https://github.com/zsviczian/obsidian-excalidraw-plugin) is the best fit for freeform diagrams inside the vault: its drawings are vault files, can use links/backlinks, and can export synced SVG/PNG copies. Use it for *your explanation* of a mechanism, proof, lab setup, or argument—not for trying to write an entire annotated slide deck.

For actual lecture slides, [Goodnotes can import PDFs and, on iPad/iPhone, PowerPoint files converted to PDF](https://support.goodnotes.com/hc/en-us/articles/7353717816463-Import-files-into-Goodnotes), then export an [editable or flattened PDF](https://support.goodnotes.com/hc/en-us/articles/8537070839183-Differences-between-Editable-and-Flattened-PDF-Formats). Export a PDF back into the vault after class; native `.goodnotes` files are not a cross-app archival format. If you do not want Goodnotes, [Apple Notes can annotate and sketch on attached PDFs](https://support.apple.com/en-lamr/guide/ipad/ipad6c8f7f84/ipados), and [Preview can highlight, sketch, write, and sign PDFs](https://support.apple.com/en-mide/guide/preview/prvw11580/mac).

## The repeatable lecture workflow

Before class:

1. Download instructor slides into `Courses/<course>/Lectures/Slides/` using a predictable name such as `2026-09-04 - Lecture 03 - Topic.pdf`.
2. Duplicate the Lecture Note template and link/embed the source file.
3. If the lecture is visual or mathematical, make an empty Excalidraw drawing next to the note for diagrams worth recreating later.

In class:

1. Annotate the slides in Goodnotes; do not force every thought into Markdown.
2. Mark only high-value material: instructor emphasis, confusion points, worked steps, and likely assessment cues.
3. Draw freely in Excalidraw only when a diagram needs to be reusable or connected to other ideas.

After class (10–15 minutes):

1. Export/sync the annotated PDF to `Lectures/Annotated/` and keep the original slide deck untouched.
2. In the matching Obsidian note, write three small things: **core idea**, **what I still cannot explain**, and **links to prior concepts/problems**.
3. Embed the relevant annotated PDF page(s), and attach links to the PDF, drawing, homework, and reading.
4. Once per unit, make a Canvas that connects the few notes and artifacts that actually belong together.

This gives you a freely drawn primary record plus a compact, searchable “index of understanding.”

## AI: make it a study loop, not an auto-notes machine

Use AI after you have the slides/notes, to make your own understanding stronger. ChatGPT [Study Mode](https://help.openai.com/en/articles/11780217-using-study-mode-in-chatgpt) can work from uploaded notes, slides, PDFs, images, worksheets, and syllabus material; it is designed to question, explain in layers, check understanding, and create practice questions/flashcard-style review. It can make mistakes, so verify it against course material and follow each course’s AI policy.

| Moment | Give AI | Ask for | Save in Obsidian |
| --- | --- | --- | --- |
| After lecture | Annotated slide PDF + companion note | “Ask me 5 diagnostic questions, one at a time. Do not reveal the answer immediately.” | Corrections and weak spots |
| When stuck | A screenshot of one step + your attempted reasoning | “Find the first unjustified step; give only a hint, then wait.” | The repaired explanation |
| Before homework | Notes/slides + problem set | “List the prerequisite ideas and create 3 analogous practice problems; label assumptions.” | Problem-solving checklist |
| Weekly review | That week’s compact lecture notes | “Create a retrieval-practice quiz and a misconception checklist; cite the note/page for each answer.” | Quiz, errors, and next-review date |
| Exam prep | A unit Canvas export/screenshots plus notes | “Make a 45-minute study sequence that alternates recall, problem-solving, and feedback.” | A short study plan |

### Guardrails that preserve learning

- Ask for questions, hints, error-finding, counterexamples, rubrics, and generated practice before asking for a finished answer.
- Always say the course, level, source page/slide, and what you already tried. The Study Mode guide specifically recommends this context and identifies uploaded course material as useful input.
- Treat AI output as a draft. Check equations, citations, definitions, and especially anything you will submit.
- Keep the *verified conclusion* in the course note, not a full pasted chat transcript. Add source links/page numbers so future-you can audit it.
- Do not upload course material or research data if its licensing, privacy, lab, or instructor policy forbids it.

## File conventions to add now

```text
Courses/<course>/
  Lectures/
    Slides/                 # instructor originals, never edited
    Annotated/              # date-matched exported PDFs
    Drawings/               # Excalidraw source + SVG/PNG export
    2026-09-04 - Lecture 03 - Topic.md
  Study/
    Unit 01 Canvas.canvas
    Unit 01 Review.md
```

Name the three files with the same date/topic prefix. An Obsidian lecture note can then link to the original slides, annotated slides, and drawing without guessing which version belongs together.

## Alternatives, briefly

- **Notability:** a solid PDF/handwriting option with audio recording and two-note view; it imports PDFs/PowerPoints and exports PDF/native files. Its native format preserves editability; PDF is the cross-app handoff. See [Notability’s getting-started guide](https://support.gingerlabs.com/hc/en-us/articles/4867633230234-Getting-Started-with-Notability) and [export guide](https://support.gingerlabs.com/hc/en-us/articles/205228298-Sharing-Notes).
- **OneNote:** a strong cross-platform notebook if that matters more than a local-file vault. It can insert documents as annotatable printouts, but exports are static PDFs and its storage/sharing model is OneDrive/SharePoint-centered. See [Microsoft’s file/printout guide](https://support.microsoft.com/en-US/OneNote/onenote-help-and-learning/insert-or-attach-files-to-notes).
- **Freeform:** excellent for genuinely open-ended boards, Pencil input, and collaboration, but boards live in iCloud and the portable export is PDF. See [Apple’s Freeform overview](https://support.apple.com/en-gb/guide/iphone/iphb86e84e2b/ios) and [export documentation](https://support.apple.com/en-eg/guide/freeform/frfm201900c07/mac).

## One setup rule

Never let a proprietary app be the only copy of a semester’s work. Keep original source files plus periodic exported PDFs in the vault; keep Obsidian notes as the navigable index and your personal explanation of the material.
