---
type: study-lab
---
# Study Lab

Generated practice sets live in `Study Lab/Sets/`. Open the local Study Lab website to answer them, reveal rubrics, self-mark, and track confidence.

To start it later, double-click `Start Study Lab.command` in Finder. Keep the Terminal window open while studying; close it or press `Control-C` when finished.

## Generation modes

| Mode | Use it for |
| --- | --- |
| **Exam style** | Mixed, realistic assessment questions. Includes fundamental knowledge where an actual exam would require it. |
| **Fundamentals** | Definitions, distinctions, rules, symbols, and short single-step checks. |
| **Weak spots** | Questions built from explicit errors, uncertainty, unanswered questions, incomplete explanations, and low-confidence material in the named overview or its supporting notes. |

## Example requests

- `$study-lab use the chem midterm guide, exam is friday and make this one pretty hard`
- `$study-lab this relativity lecture, just small basic stuff so I know the definitions`
- `$study-lab use that chem overview and focus on the things I seem shaky on`

There is no required structure after `$study-lab`. Talk normally, link a note if convenient, or refer to the open file. Study Lab infers what it can from the vault and uses the normal 10-question exam defaults for anything you do not mention.

Answers are never graded by AI. Each question includes a source-grounded answer and concrete rubric for self-marking.

The generator may use the webpage as a richer assessment surface when the material benefits from it: quantitative plots and spectra, diagrams, tables, or custom local SVG/PNG figures. Visuals are chosen from the learning objective rather than added by quota, so direct definition checks can stay text-only while interpretation questions can present realistic evidence.
