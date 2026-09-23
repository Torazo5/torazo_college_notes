---
name: study-lab
description: Generate source-grounded practice sets from this Obsidian vault for the local Study Lab app. Use when the user asks for questions, a quiz, exam practice, fundamentals, or practice focused on weak areas from their course notes.
---

# Study Lab

Turn selected vault material into a practice set for the local Study Lab app. Do not edit source notes while generating practice.

## Resolve the request

`$study-lab` switches the conversation into this workflow. Everything after the skill name is free-form natural language, not a command syntax or form. The user may ramble, use shorthand, link a note, refer to “this file,” name a course imperfectly, describe how they feel, mention an exam casually, or mix several preferences in one sentence. Interpret the intent rather than requiring labeled fields or a particular order.

Resolve the source from, in order: an explicitly linked file, the currently open/attached note, a natural-language filename or course reference, then recent conversation context. From the resolved material, infer the course, assessment title, coverage, useful supporting notes, and any exam date recorded in frontmatter or content. Do not ask the user to repeat information already present in the vault. Ask a question only when no source can be identified after checking context, or when two equally plausible sources would materially change the set.

Apply these settings:

- mode: `exam`
- question count: exactly 10 for every set; do not vary the count
- coverage: the full named source, weighted by its learning objectives and documented assessment emphasis
- difficulty: a realistic mixed progression appropriate to the material
- outside knowledge: excluded rather than added as extension material
- visuals: chosen automatically wherever they improve the authenticity of the assessment
- output: write, validate, and sync the finished set without asking for another confirmation

### Mathematical presentation

Study Lab renders question text as plain text, not a TeX document. Use polished Unicode mathematics that displays directly: `⅗c`, `5⁄4`, `D₀`, `Δx′`, `c²`, `×`, and `≠`. Use line breaks to lay out multi-step working in answer keys. Do not place raw TeX delimiters or commands in set content.

Supported mode overrides:

- **exam**: realistic mixed assessment questions. Include fundamental recall where it naturally supports exam performance, but emphasize application, explanation, synthesis, and worked reasoning.
- **fundamentals**: definitions, distinctions, vocabulary, rules, symbols, and short single-step checks. Keep prompts focused and answers compact.
- **weak-spots**: target evidence of incomplete understanding. Read the named overview first. If it contains too little evidence, inspect supporting course notes selectively.

Treat ordinary phrases as settings without demanding keywords. For example, “small basic stuff” implies fundamentals; “what I keep getting wrong” implies weak-spots; “make it brutal” raises difficulty; “quick one” suggests fewer or shorter questions; and “I have the exam Friday” supplies urgency and an assessment date. These examples illustrate interpretation, not phrases the user must copy. Override only what their language changes and retain the remaining defaults.

### Exam-set structure

For `exam` mode, make each of the ten questions standalone by default, with its own complete setup. Give each question two or more linked parts that require the student to choose principles, move between representations or frames, and reconcile results; avoid formula-only substitutions. Use one connected scenario across the full set only when the user explicitly asks for it.

Use fresh names, numbers, and causal events. A past assessment may inform the overall format and level of reasoning, but never reuse its questions, wording, answer sequence, or a merely renamed version of its setup. Keep `fundamentals` mode compact rather than forcing this narrative structure.

### Exam prompt discipline

Do not give away the intended method in an exam question's topic label, stem, or default hint. Use neutral observer-and-event wording such as “distance measured by observers riding on the platform” rather than “proper length,” and “which clock is at both events?” rather than “identify proper time.” Keep named principles, formulas, and technical vocabulary for the answer key and self-marking rubric. Hints may direct attention to relevant observations, but must not name the target rule or supply its formula.

## Weak-spot evidence

Prioritize observable evidence rather than guessing what the student is bad at:

1. Explicit corrections, `AI note:` flags, warning/todo callouts, or “fix from self-test” sections.
2. The student's own uncertainty language: not sure, confused, might be wrong, don't get, revisit, or similar phrasing.
3. Unanswered `Questions for AI / Follow-up` items and incomplete explanations.
4. Mistakes recorded in study guides, practice attempts, homework, or review notes.
5. Concepts used repeatedly without a clear definition or reasoning chain.

For every weak-spots question, store a concise `weakSpotEvidence` statement explaining the note-based signal. Do not diagnose weakness from missing notes alone, and do not treat an AI-authored correction as proof that the student personally made that mistake unless the note says so.

## Source fidelity

- Ground every answer in the selected vault material.
- Add at least one `sourceRefs` entry to every question, including the exact file and best available heading.
- Label outside knowledge as extension material; do not silently mix it into ordinary questions.
- Match assessment formats documented in the source when present.
- Avoid testing quarantined, uncertain, or contradicted claims as settled fact.
- Avoid near-duplicates within a set.

## Use the webpage as an assessment medium

Do not default to chat-shaped, text-only questions. The local webpage exists so a set can present evidence and interactions that ordinary chat renders poorly. For each question, decide whether the student would be assessed more authentically or clearly with a plot, spectrum, diagram, table, labeled image, spatial layout, or other web-native visual.

Use a visual when interpretation of its shape, scale, relationships, regions, or annotations is part of the knowledge being tested. Examples include spectra, graphs, geometric figures, free-body diagrams, reaction schemes, code traces, timelines, argument maps, and comparison tables. These are examples, not a checklist and not chemistry-only requirements.

- Choose the representation from the source material and learning objective; never add a decorative visual merely to make a set look varied.
- Mix visual and text-only questions naturally. A definition check rarely needs a figure; data interpretation often does.
- Prefer a structured `plot`, `diagram`, or `table` visual when the supported schema can express the question faithfully.
- Use a custom local SVG/PNG asset when a structured visual would lose important subject-specific detail. Add useful alt text and keep all labels legible.
- A visual must contain enough information to solve the question, must not reveal the answer accidentally, and must be cited to the same standard as the prompt.
- Recreate or transform source visuals only when permitted. Otherwise produce an original schematic grounded in the source rather than copying protected artwork.

Read [references/visuals.md](references/visuals.md) whenever one or more questions would benefit from a visual.

## Self-marking only

Never grade a student's free response. Provide an answer, a short explanation, and a concrete rubric for self-marking. Each rubric criterion must describe an observable idea, step, distinction, calculation, or justification. Do not use vague criteria such as “shows understanding.”

## Write the set

Read [references/format.md](references/format.md) before writing files. Create the question file and separate answer-key file under `Study Lab/Sets/<course>/` using the same slug for `<slug>.set.json` and `<slug>.answers.json`. Put custom visual assets under `Study Lab/Assets/<set-id>/`. Preserve existing sets. Then run:

```bash
cd .study-lab && npm run sync
```

Report the mode, question count, source files, output filenames, and any extension material. Tell the user to refresh the local Study Lab page if it is already open.
