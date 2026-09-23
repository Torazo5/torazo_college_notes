# Study set format

Create two valid JSON files with matching slugs. Use UTF-8 and two-space indentation.

## Question file

Filename: `<slug>.set.json`

Required top-level fields: `id`, `course`, `title`, `mode`, `generatedAt`, `estimatedMinutes`, `sources`, and `questions`. Optional `examDate` uses `YYYY-MM-DD`.

- `mode`: `exam`, `fundamentals`, or `weak-spots`
- `generatedAt`: ISO 8601 timestamp
- `estimatedMinutes`: positive integer
- `sources`: non-empty array of vault-relative paths

Each question requires:

```json
{
  "id": "q1",
  "type": "worked-response",
  "topic": "Mass spectrometry",
  "difficulty": 4,
  "points": 5,
  "prompt": "Question text",
  "hints": ["A useful first hint"],
  "sourceRefs": [{
    "file": "Courses/CHEM 042 - Chemistry in the Modern World/example.md",
    "heading": "Relevant heading"
  }]
}
```

Allowed `type` values are `multiple-choice`, `short-answer`, and `worked-response`. Multiple-choice questions also require `choices` with at least two strings. `difficulty` is 1–5. `points` is positive. Weak-spots questions require `weakSpotEvidence`.

Questions may include a `visual` object. Read [visuals.md](visuals.md) for supported visual types and selection guidance.

## Answer file

Filename: `<slug>.answers.json`

```json
{
  "setId": "same-id-as-question-file",
  "answers": {
    "q1": {
      "answer": "A complete model answer",
      "rubric": [
        "Identifies the relevant principle.",
        "Applies it correctly to the given evidence."
      ],
      "explanation": "A concise explanation of why the answer works."
    }
  }
}
```

Every question ID needs exactly one answer entry. Keep answers out of the question file so exam prompts remain separately inspectable.
