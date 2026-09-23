---
description: Generate a source-grounded practice set for the local Study Lab website
argument-hint: [say what you want in ordinary language]
---

Generate a practice set from this Obsidian vault and add it to the local Study Lab website.

**Source/request:** $ARGUMENTS

Everything after `/problem-set` is free-form natural language, not a fixed argument list. The user may ramble, use shorthand, refer to an open file, link a note, or mix their source and preferences in any order. Interpret intent rather than requiring labeled fields.

Resolve sources from linked or open notes, natural-language references, and recent conversation context. Infer everything available from the resolved material and vault. Do not ask the user to restate the course, assessment title, coverage, or exam date when those are already available. Interpret phrases such as “basic little things,” “stuff I keep messing up,” “make it hard,” or “quick review” as natural overrides rather than requiring exact mode names.

Unless explicitly overridden, use exam mode, create 10 questions, cover the full named source according to its learning objectives and assessment emphasis, use a realistic difficulty progression, exclude outside knowledge, choose useful visual formats automatically, and write plus sync the finished set without another confirmation. Ask only when no source can be identified or two equally plausible matches would materially change the result.

## Modes

- `exam`: realistic mixed assessment questions. Include fundamental knowledge where it naturally belongs, while emphasizing application, explanation, synthesis, and worked reasoning.
- `fundamentals`: definitions, distinctions, vocabulary, rules, symbols, and short single-step checks.
- `weak-spots`: read the named overview first. Target explicit corrections, self-test fixes, uncertainty, unanswered questions, incomplete explanations, warnings, and recorded mistakes. If the overview has too little evidence, inspect supporting course notes selectively. Each question must include a concise `weakSpotEvidence` field tied to something actually found in the notes.

Do not infer weakness merely because a note is missing or short. Do not treat AI-written material as proof of a student mistake unless the note explicitly records that connection.

## Rules

- Ground every answer in the selected vault material.
- Give every question a vault-relative source file and best available heading.
- Label outside knowledge as extension material.
- Match documented exam formats when present.
- Do not test quarantined or uncertain claims as settled facts.
- Do not modify source notes.
- Do not grade the user. Create a model answer, short explanation, and concrete self-marking rubric for every question.
- Treat the webpage as an assessment canvas, not a chat transcript. For each question, decide whether a plot, spectrum, diagram, table, labeled image, spatial layout, or other web-native visual would test the objective more authentically or clearly than prose alone.
- Use visuals because the learning objective needs them, not by quota. Definition questions can remain text-only; interpretation questions should receive faithful visual evidence when appropriate.
- Prefer the structured visual formats supported by `.agents/skills/study-lab/references/visuals.md`. Use an original custom local SVG/PNG when those formats cannot express the material accurately.

Follow `.agents/skills/study-lab/references/format.md` and read `.agents/skills/study-lab/references/visuals.md` when a question benefits from visual evidence. Write matching files under `Study Lab/Sets/<course>/`: `<slug>.set.json` and `<slug>.answers.json`. Put custom visual assets under `Study Lab/Assets/<set-id>/`. Preserve existing sets. Run `cd .study-lab && npm run sync` afterward. Report the mode, count, sources, output files, visual question types, and any extension material. Tell the user to refresh Study Lab if it is open.
