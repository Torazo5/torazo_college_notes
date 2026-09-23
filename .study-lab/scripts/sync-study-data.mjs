import { cp, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const setsRoot = resolve(projectRoot, "../Study Lab/Sets");
const assetsRoot = resolve(projectRoot, "../Study Lab/Assets");
const assetsOutput = join(projectRoot, "public/generated-assets");
const outputPath = join(projectRoot, "public/study-data.json");
const modes = new Set(["exam", "fundamentals", "weak-spots"]);
const types = new Set(["multiple-choice", "short-answer", "worked-response"]);

async function findSetFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const found = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) found.push(...(await findSetFiles(path)));
    else if (entry.name.endsWith(".set.json")) found.push(path);
  }
  return found.sort();
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function validateSet(set, path) {
  assert(typeof set.id === "string" && set.id, `${path}: missing id`);
  assert(typeof set.course === "string" && set.course, `${path}: missing course`);
  assert(typeof set.title === "string" && set.title, `${path}: missing title`);
  assert(modes.has(set.mode), `${path}: invalid mode`);
  assert(Array.isArray(set.sources) && set.sources.length > 0, `${path}: sources must not be empty`);
  assert(Array.isArray(set.questions) && set.questions.length > 0, `${path}: questions must not be empty`);
  const ids = new Set();
  for (const question of set.questions) {
    assert(typeof question.id === "string" && !ids.has(question.id), `${path}: question ids must be unique`);
    ids.add(question.id);
    assert(types.has(question.type), `${path}: invalid type for ${question.id}`);
    assert(typeof question.prompt === "string" && question.prompt, `${path}: missing prompt for ${question.id}`);
    assert(Number.isInteger(question.points) && question.points > 0, `${path}: invalid points for ${question.id}`);
    assert(Number.isInteger(question.difficulty) && question.difficulty >= 1 && question.difficulty <= 5, `${path}: invalid difficulty for ${question.id}`);
    assert(Array.isArray(question.sourceRefs) && question.sourceRefs.length > 0, `${path}: sourceRefs required for ${question.id}`);
    if (question.type === "multiple-choice") assert(Array.isArray(question.choices) && question.choices.length >= 2, `${path}: choices required for ${question.id}`);
    if (question.visual) {
      assert(["plot", "diagram", "table", "image"].includes(question.visual.type), `${path}: invalid visual type for ${question.id}`);
      if (question.visual.type === "plot") {
        assert(Array.isArray(question.visual.xDomain) && question.visual.xDomain.length === 2, `${path}: plot xDomain required for ${question.id}`);
        assert(question.visual.xDomain.every(Number.isFinite) && question.visual.xDomain[0] !== question.visual.xDomain[1], `${path}: plot xDomain must contain two distinct numbers for ${question.id}`);
        assert(Array.isArray(question.visual.traces) && question.visual.traces.length > 0, `${path}: plot traces required for ${question.id}`);
        for (const trace of question.visual.traces) {
          assert(["line", "peaks"].includes(trace.kind), `${path}: invalid plot trace kind for ${question.id}`);
          assert(Array.isArray(trace.points) && trace.points.length > 0, `${path}: plot trace points required for ${question.id}`);
          assert(trace.points.every((point) => Number.isFinite(point.x) && Number.isFinite(point.y)), `${path}: plot points must be numeric for ${question.id}`);
        }
      }
      if (question.visual.type === "diagram") assert(Array.isArray(question.visual.nodes) && question.visual.nodes.length > 0, `${path}: diagram nodes required for ${question.id}`);
      if (question.visual.type === "table") {
        assert(Array.isArray(question.visual.columns) && question.visual.columns.length > 0 && Array.isArray(question.visual.rows), `${path}: table columns and rows required for ${question.id}`);
        assert(question.visual.rows.every((row) => Array.isArray(row) && row.length === question.visual.columns.length), `${path}: table rows must match column count for ${question.id}`);
      }
      if (question.visual.type === "image") {
        assert(typeof question.visual.src === "string" && question.visual.src.startsWith("/generated-assets/"), `${path}: image src must use /generated-assets/ for ${question.id}`);
        assert(typeof question.visual.alt === "string" && question.visual.alt, `${path}: image alt required for ${question.id}`);
      }
    }
  }
}

async function loadSet(path) {
  const set = JSON.parse(await readFile(path, "utf8"));
  validateSet(set, path);
  const answerPath = path.replace(/\.set\.json$/, ".answers.json");
  const key = JSON.parse(await readFile(answerPath, "utf8"));
  const questions = set.questions.map((question) => {
    const answer = key.answers?.[question.id];
    assert(answer, `${answerPath}: missing answer for ${question.id}`);
    assert(Array.isArray(answer.rubric) && answer.rubric.length > 0, `${answerPath}: rubric required for ${question.id}`);
    return { ...question, ...answer };
  });
  return { ...set, questions };
}

const files = await findSetFiles(setsRoot);
const sets = await Promise.all(files.map(loadSet));
sets.sort((a, b) => b.generatedAt.localeCompare(a.generatedAt));
await mkdir(assetsRoot, { recursive: true });
await mkdir(assetsOutput, { recursive: true });
await cp(assetsRoot, assetsOutput, { recursive: true, force: true });
await writeFile(outputPath, `${JSON.stringify({ sets }, null, 2)}\n`);
console.log(`Synced ${sets.length} study sets to ${outputPath}`);
