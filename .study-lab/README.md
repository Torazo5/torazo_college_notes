# Study Lab app

Local practice interface for problem sets generated from the parent Obsidian vault.

## Commands

- `npm run dev` — sync vault sets and start the local app
- `npm run sync` — validate and merge question/answer files into the app manifest
- `npm run build` — sync and create a production build

Canonical content lives in `../Study Lab/Sets/`. Each set uses a matching `.set.json` question file and `.answers.json` answer-key file. The generated `public/study-data.json` manifest should not be edited by hand.

Questions can use responsive structured plots, diagrams, and tables, or custom assets from `../Study Lab/Assets/<set-id>/`. The sync command validates those specifications and copies local visual assets into the app.

Responses, self-marks, confidence, and current position are stored in the browser's local storage. The app does not send them to an AI or external service.
