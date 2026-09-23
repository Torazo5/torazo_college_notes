"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, BookOpen, Check, ChevronDown, CircleAlert, Clock3, Crosshair, FileText, Flame, GraduationCap, Lightbulb, ListChecks, Menu, RotateCcw, Target, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

type Mode = "exam" | "fundamentals" | "weak-spots";
type Mark = "correct" | "partial" | "incorrect";
type SourceRef = { file: string; heading?: string };
type PlotPoint = { x: number; y: number; label?: string };
type VisualSpec =
  | { type: "plot"; title?: string; xLabel: string; yLabel: string; xDomain: [number, number]; yDomain?: [number, number]; reverseX?: boolean; traces: { kind: "line" | "peaks"; color?: string; points: PlotPoint[] }[]; caption?: string }
  | { type: "diagram"; title?: string; nodes: { id: string; label: string; x: number; y: number; shape?: "box" | "circle" }[]; edges?: { from: string; to: string; label?: string }[]; caption?: string }
  | { type: "table"; title?: string; columns: string[]; rows: string[][]; caption?: string }
  | { type: "image"; title?: string; src: string; alt: string; caption?: string };
type Question = { id: string; type: "multiple-choice" | "short-answer" | "worked-response"; topic: string; difficulty: number; points: number; prompt: string; choices?: string[]; answer: string; rubric: string[]; hints: string[]; explanation: string; sourceRefs: SourceRef[]; weakSpotEvidence?: string; visual?: VisualSpec };
type StudySet = { id: string; course: string; title: string; mode: Mode; generatedAt: string; examDate?: string; estimatedMinutes: number; sources: string[]; questions: Question[] };
type StudyData = { sets: StudySet[] };
type SavedSession = { answers: Record<string, string>; marks: Record<string, Mark>; confidences: Record<string, number>; index: number };

const modeDetails: Record<Mode, { label: string; short: string; icon: typeof GraduationCap }> = {
  exam: { label: "Exam style", short: "Mixed, realistic questions", icon: GraduationCap },
  fundamentals: { label: "Fundamentals", short: "Definitions and small checks", icon: BookOpen },
  "weak-spots": { label: "Weak spots", short: "Built from gaps and mistakes", icon: Crosshair },
};

const storageKey = (setId: string) => `study-lab:${setId}`;

export default function Home() {
  const [data, setData] = useState<StudyData | null>(null);
  const [loadError, setLoadError] = useState(false);
  const [activeSetId, setActiveSetId] = useState("");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [marks, setMarks] = useState<Record<string, Mark>>({});
  const [confidences, setConfidences] = useState<Record<string, number>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    fetch("/study-data.json", { cache: "no-store" })
      .then((response) => { if (!response.ok) throw new Error("Study data not found"); return response.json() as Promise<StudyData>; })
      .then((nextData) => { setData(nextData); setActiveSetId(nextData.sets[0]?.id ?? ""); })
      .catch(() => setLoadError(true));
  }, []);

  const activeSet = useMemo(() => data?.sets.find((set) => set.id === activeSetId), [activeSetId, data]);
  const question = activeSet?.questions[index];

  useEffect(() => {
    if (!activeSetId) return;
    const saved = localStorage.getItem(storageKey(activeSetId));
    if (!saved) { setAnswers({}); setMarks({}); setConfidences({}); setIndex(0); return; }
    try {
      const session = JSON.parse(saved) as SavedSession;
      setAnswers(session.answers ?? {}); setMarks(session.marks ?? {}); setConfidences(session.confidences ?? {});
      setIndex(Math.min(session.index ?? 0, (activeSet?.questions.length ?? 1) - 1));
    } catch { localStorage.removeItem(storageKey(activeSetId)); }
  }, [activeSetId, activeSet?.questions.length]);

  useEffect(() => {
    if (!activeSetId) return;
    localStorage.setItem(storageKey(activeSetId), JSON.stringify({ answers, marks, confidences, index } satisfies SavedSession));
  }, [activeSetId, answers, confidences, index, marks]);

  if (loadError) return <EmptyState />;
  if (!activeSet || !question) return <main className="grid min-h-screen place-items-center bg-[#f3f1ed]"><p className="text-[#625e58]">Loading your study sets…</p></main>;

  const answeredCount = activeSet.questions.filter((item) => answers[item.id]?.trim() || marks[item.id]).length;
  const markedCount = Object.keys(marks).length;
  const score = activeSet.questions.reduce((total, item) => total + item.points * (marks[item.id] === "correct" ? 1 : marks[item.id] === "partial" ? 0.5 : 0), 0);
  const possible = activeSet.questions.reduce((total, item) => total + item.points, 0);
  const mode = modeDetails[activeSet.mode];
  const ModeIcon = mode.icon;

  function selectSet(id: string) { setActiveSetId(id); setRevealed({}); setSidebarOpen(false); }
  function resetSession() { localStorage.removeItem(storageKey(activeSet!.id)); setAnswers({}); setMarks({}); setConfidences({}); setRevealed({}); setIndex(0); }

  return (
    <main className="min-h-screen bg-[#f3f1ed] text-[#191815]">
      <header className="sticky top-0 z-40 flex h-16 items-center border-b border-[#d9d5ce] bg-[#f8f7f4]/95 px-4 backdrop-blur md:px-7">
        <Button variant="ghost" size="icon" className="mr-2 lg:hidden" aria-label="Open study sets" onClick={() => setSidebarOpen(true)}><Menu /></Button>
        <div className="flex min-w-0 items-center gap-3">
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#173f35] text-[#f4dd8a] shadow-sm"><Flame className="size-5" /></span>
          <div className="min-w-0"><p className="truncate font-serif text-xl font-semibold leading-none">Study Lab</p><p className="mt-1 hidden text-xs text-[#77716a] sm:block">Your vault, turned into practice</p></div>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Badge variant="outline" className="hidden border-[#cfc9c0] bg-white/70 text-[#655f57] sm:flex">Saved locally</Badge>
          <Button variant="ghost" size="sm" onClick={resetSession}><RotateCcw /><span className="hidden sm:inline">Reset</span></Button>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[310px_minmax(0,1fr)]">
        <aside className={sidebarOpen ? "fixed inset-0 z-50 block bg-black/30 lg:static" : "hidden lg:block"} onClick={() => setSidebarOpen(false)}>
          <div className="h-full w-[310px] border-r border-[#d9d5ce] bg-[#ece9e3] p-5 lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)]" onClick={(event) => event.stopPropagation()}>
            <div className="mb-5 flex items-center justify-between">
              <div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7b756d]">Practice sets</p><p className="mt-1 text-sm text-[#57524c]">{data?.sets.length ?? 0} ready to grind</p></div>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Close study sets" onClick={() => setSidebarOpen(false)}><X /></Button>
            </div>
            <div className="space-y-3">
              {data?.sets.map((set) => <SetCard key={set.id} set={set} active={set.id === activeSet.id} onClick={() => selectSet(set.id)} />)}
            </div>
            <div className="mt-6 rounded-2xl border border-dashed border-[#bbb4aa] p-4 text-sm leading-6 text-[#625e58]">
              <p className="font-semibold text-[#312e29]">Make another set</p><p className="mt-1">Tell Codex or Claude the course, source, mode, and question count. Refresh when it finishes.</p>
            </div>
          </div>
        </aside>

        <section className="min-w-0 px-4 py-6 md:px-8 md:py-9 xl:px-12">
          <div className="mx-auto max-w-5xl">
            <div className="mb-7 grid gap-5 border-b border-[#d9d5ce] pb-7 xl:grid-cols-[1fr_auto] xl:items-end">
              <div>
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <Badge className="bg-[#9b4e35] text-white hover:bg-[#9b4e35]"><ModeIcon /> {mode.label}</Badge>
                  <Badge variant="outline" className="border-[#cfc9c0] bg-[#f8f7f4]">{activeSet.course}</Badge>
                  {activeSet.examDate && <Badge variant="outline" className="border-[#cfc9c0] bg-[#f8f7f4]">Exam {activeSet.examDate}</Badge>}
                </div>
                <h1 className="max-w-3xl font-serif text-3xl font-semibold leading-tight tracking-[-0.025em] md:text-4xl">{activeSet.title}</h1>
                <p className="mt-2 text-[#6c665f]">{mode.short}</p>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center"><Stat label="Done" value={`${answeredCount}/${activeSet.questions.length}`} /><Stat label="Marked" value={`${markedCount}/${activeSet.questions.length}`} /><Stat label="Score" value={`${score}/${possible}`} /></div>
            </div>

            <div className="mb-5 flex items-center gap-4">
              <Progress value={((index + 1) / activeSet.questions.length) * 100} className="h-2 bg-[#dcd7cf] [&_[data-slot=progress-indicator]]:bg-[#9b4e35]" />
              <span className="shrink-0 text-sm font-semibold tabular-nums text-[#625e58]">{index + 1} / {activeSet.questions.length}</span>
            </div>

            <article className="overflow-hidden rounded-[1.75rem] border border-[#d4cfc7] bg-[#fcfbf8] shadow-[0_20px_60px_rgba(38,31,22,0.08)]">
              <div className="border-b border-[#e0dcd5] px-5 py-5 md:px-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2"><Badge variant="outline" className="border-[#cfc9c0] bg-white">{question.topic}</Badge><span className="text-sm text-[#77716a]">{question.points} {question.points === 1 ? "point" : "points"}</span></div>
                  <div className="flex items-center gap-1" aria-label={`Difficulty ${question.difficulty} out of 5`}>{[1,2,3,4,5].map((level) => <span key={level} className={`h-1.5 w-5 rounded-full ${level <= question.difficulty ? "bg-[#9b4e35]" : "bg-[#ded9d2]"}`} />)}</div>
                </div>
              </div>

              <div className="p-5 md:p-8 lg:p-10">
                {question.weakSpotEvidence && <div className="mb-7 flex gap-3 rounded-2xl border border-[#e0c8a4] bg-[#fff8e8] p-4 text-sm leading-6 text-[#5d4930]"><Target className="mt-0.5 size-5 shrink-0 text-[#9b4e35]" /><div><strong>Why this is here:</strong> {question.weakSpotEvidence}</div></div>}
                {question.visual && <QuestionVisual visual={question.visual} />}
                <p className="whitespace-pre-wrap font-serif text-[1.35rem] font-medium leading-[1.55] tracking-[-0.01em] md:text-[1.6rem]">{question.prompt}</p>
                <div className="mt-8">
                  {question.type === "multiple-choice" && question.choices ? (
                    <RadioGroup value={answers[question.id] ?? ""} onValueChange={(value) => setAnswers((current) => ({ ...current, [question.id]: value }))}>
                      {question.choices.map((choice, choiceIndex) => <label key={choice} className="flex cursor-pointer items-start gap-3 rounded-2xl border border-[#d9d5ce] bg-white p-4 transition hover:border-[#9f978e]"><RadioGroupItem value={choice} id={`${question.id}-${choiceIndex}`} className="mt-0.5" /><span className="leading-6"><strong className="mr-2 font-semibold">{String.fromCharCode(65 + choiceIndex)}.</strong>{choice}</span></label>)}
                    </RadioGroup>
                  ) : <Textarea aria-label="Your answer" placeholder={question.type === "worked-response" ? "Show your reasoning and final answer…" : "Write your answer…"} value={answers[question.id] ?? ""} onChange={(event) => setAnswers((current) => ({ ...current, [question.id]: event.target.value }))} className="min-h-40 resize-y rounded-2xl border-[#d3cec6] bg-white p-5 text-base leading-7 shadow-none focus-visible:border-[#173f35] focus-visible:ring-[#173f35]/15" />}
                </div>
                <div className="mt-6 flex flex-wrap items-start justify-between gap-4">
                  <Collapsible><CollapsibleTrigger asChild><Button variant="ghost" className="text-[#7a4a2d]"><Lightbulb /> Hint <ChevronDown /></Button></CollapsibleTrigger><CollapsibleContent className="mt-2 max-w-xl rounded-xl bg-[#f1eee8] p-4 text-sm leading-6 text-[#5f5a53]">{question.hints[0]}</CollapsibleContent></Collapsible>
                  <Button className="bg-[#173f35] text-white hover:bg-[#24594b]" onClick={() => setRevealed((current) => ({ ...current, [question.id]: true }))}><ListChecks /> Show rubric</Button>
                </div>
              </div>

              {revealed[question.id] && <RubricPanel question={question} mark={marks[question.id]} confidence={confidences[question.id]} onMark={(mark) => setMarks((current) => ({ ...current, [question.id]: mark }))} onConfidence={(value) => setConfidences((current) => ({ ...current, [question.id]: value }))} />}
            </article>

            <div className="mt-5 flex items-center justify-between gap-3">
              <Button variant="outline" size="lg" disabled={index === 0} onClick={() => setIndex((current) => current - 1)} className="border-[#c9c3ba] bg-[#f8f7f4]"><ArrowLeft /> Previous</Button>
              <div className="hidden items-center gap-2 text-sm text-[#77716a] sm:flex"><Clock3 className="size-4" /> Progress saves automatically</div>
              <Button size="lg" disabled={index === activeSet.questions.length - 1} onClick={() => setIndex((current) => current + 1)} className="bg-[#191815] text-white hover:bg-[#36332e]">Next <ArrowRight /></Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function EmptyState() { return <main className="grid min-h-screen place-items-center bg-[#f3f1ed] p-6"><section className="max-w-lg rounded-3xl border border-[#d9d5ce] bg-white p-8 shadow-sm"><CircleAlert className="mb-4 size-8 text-[#bc4d2d]" /><h1 className="font-serif text-3xl font-semibold">No study sets found</h1><p className="mt-3 leading-7 text-[#625e58]">Generate a set with the Study Lab skill, then refresh this page.</p></section></main>; }

function SetCard({ set, active, onClick }: { set: StudySet; active: boolean; onClick: () => void }) {
  const detail = modeDetails[set.mode]; const Icon = detail.icon;
  return <button onClick={onClick} className={`w-full rounded-2xl border p-4 text-left transition ${active ? "border-[#173f35] bg-[#173f35] text-white shadow-md" : "border-[#d6d1c9] bg-[#f8f7f4] hover:border-[#a9a198] hover:bg-white"}`}>
    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.11em]"><Icon className={`size-4 ${active ? "text-[#f4dd8a]" : "text-[#9b4e35]"}`} />{detail.label}</div>
    <p className="mt-3 line-clamp-2 font-serif text-lg font-semibold leading-snug">{set.title}</p>
    <div className={`mt-3 flex items-center gap-3 text-xs ${active ? "text-white/70" : "text-[#77716a]"}`}><span>{set.questions.length} questions</span><span>·</span><span>{set.estimatedMinutes} min</span></div>
  </button>;
}

function QuestionVisual({ visual }: { visual: VisualSpec }) {
  if (visual.type === "image") return <figure className="mb-8 overflow-hidden rounded-2xl border border-[#d7d2ca] bg-white"><div className="border-b border-[#e2ded7] px-4 py-3 text-sm font-semibold">{visual.title}</div><img src={visual.src} alt={visual.alt} className="max-h-[32rem] w-full object-contain p-4" />{visual.caption && <figcaption className="border-t border-[#e2ded7] px-4 py-3 text-sm text-[#6c665f]">{visual.caption}</figcaption>}</figure>;
  if (visual.type === "table") return <figure className="mb-8 overflow-hidden rounded-2xl border border-[#d7d2ca] bg-white">{visual.title && <div className="border-b border-[#e2ded7] px-4 py-3 text-sm font-semibold">{visual.title}</div>}<div className="overflow-x-auto"><table className="w-full border-collapse text-left text-sm"><thead className="bg-[#eeeae3]"><tr>{visual.columns.map((column) => <th key={column} className="border-b border-[#d7d2ca] px-4 py-3 font-semibold">{column}</th>)}</tr></thead><tbody>{visual.rows.map((row, rowIndex) => <tr key={rowIndex} className="odd:bg-white even:bg-[#faf9f6]">{row.map((cell, cellIndex) => <td key={cellIndex} className="border-b border-[#ebe7e0] px-4 py-3">{cell}</td>)}</tr>)}</tbody></table></div>{visual.caption && <figcaption className="px-4 py-3 text-sm text-[#6c665f]">{visual.caption}</figcaption>}</figure>;
  if (visual.type === "diagram") return <DiagramVisual visual={visual} />;
  return <PlotVisual visual={visual} />;
}

function PlotVisual({ visual }: { visual: Extract<VisualSpec, { type: "plot" }> }) {
  const width = 760, height = 300, left = 66, right = 24, top = 32, bottom = 56;
  const allY = visual.traces.flatMap((trace) => trace.points.map((point) => point.y));
  const yDomain: [number, number] = visual.yDomain ?? [0, Math.max(...allY, 1)];
  const xScale = (x: number) => { const ratio = (x - visual.xDomain[0]) / (visual.xDomain[1] - visual.xDomain[0]); return left + (visual.reverseX ? 1 - ratio : ratio) * (width - left - right); };
  const yScale = (y: number) => top + (1 - (y - yDomain[0]) / (yDomain[1] - yDomain[0])) * (height - top - bottom);
  const ticks = Array.from({ length: 6 }, (_, index) => visual.xDomain[0] + ((visual.xDomain[1] - visual.xDomain[0]) * index) / 5);
  return <figure className="mb-8 overflow-hidden rounded-2xl border border-[#d7d2ca] bg-white">{visual.title && <div className="border-b border-[#e2ded7] px-4 py-3 text-sm font-semibold">{visual.title}</div>}<div className="p-3 md:p-5"><svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label={`${visual.title ?? "Plot"}. ${visual.xLabel} by ${visual.yLabel}.`} className="h-auto w-full">
    <line x1={left} y1={height-bottom} x2={width-right} y2={height-bottom} stroke="#766f66" strokeWidth="1.5" /><line x1={left} y1={top} x2={left} y2={height-bottom} stroke="#766f66" strokeWidth="1.5" />
    {ticks.map((tick) => { const x = xScale(tick); return <g key={tick}><line x1={x} y1={height-bottom} x2={x} y2={height-bottom+7} stroke="#766f66" /><text x={x} y={height-bottom+24} textAnchor="middle" fontSize="12" fill="#625e58">{Number(tick.toFixed(2))}</text></g>; })}
    {visual.traces.map((trace, traceIndex) => trace.kind === "line" ? <polyline key={traceIndex} fill="none" stroke={trace.color ?? "#9b4e35"} strokeWidth="3" points={trace.points.map((point) => `${xScale(point.x)},${yScale(point.y)}`).join(" ")} /> : <g key={traceIndex}>{trace.points.map((point, pointIndex) => <g key={pointIndex}><line x1={xScale(point.x)} y1={height-bottom} x2={xScale(point.x)} y2={yScale(point.y)} stroke={trace.color ?? "#9b4e35"} strokeWidth="4" />{point.label && <text x={xScale(point.x)} y={Math.max(top+12,yScale(point.y)-8)} textAnchor="middle" fontSize="12" fontWeight="600" fill="#4d4943">{point.label}</text>}</g>)}</g>)}
    <text x={(left+width-right)/2} y={height-10} textAnchor="middle" fontSize="14" fontWeight="600" fill="#4d4943">{visual.xLabel}</text><text x="17" y={(top+height-bottom)/2} textAnchor="middle" transform={`rotate(-90 17 ${(top+height-bottom)/2})`} fontSize="14" fontWeight="600" fill="#4d4943">{visual.yLabel}</text>
  </svg></div>{visual.caption && <figcaption className="border-t border-[#e2ded7] px-4 py-3 text-sm text-[#6c665f]">{visual.caption}</figcaption>}</figure>;
}

function DiagramVisual({ visual }: { visual: Extract<VisualSpec, { type: "diagram" }> }) {
  const nodeById = new Map(visual.nodes.map((node) => [node.id, node]));
  return <figure className="mb-8 overflow-hidden rounded-2xl border border-[#d7d2ca] bg-white">{visual.title && <div className="border-b border-[#e2ded7] px-4 py-3 text-sm font-semibold">{visual.title}</div>}<div className="p-3 md:p-5"><svg viewBox="0 0 760 330" role="img" aria-label={visual.title ?? "Diagram"} className="h-auto w-full"><defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#756e65" /></marker></defs>
    {visual.edges?.map((edge, index) => { const from=nodeById.get(edge.from), to=nodeById.get(edge.to); if(!from||!to) return null; const x1=from.x*7.6,y1=from.y*3.3,x2=to.x*7.6,y2=to.y*3.3; return <g key={index}><line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#756e65" strokeWidth="2" markerEnd="url(#arrow)" />{edge.label && <text x={(x1+x2)/2} y={(y1+y2)/2-8} textAnchor="middle" fontSize="12" fill="#625e58">{edge.label}</text>}</g>; })}
    {visual.nodes.map((node) => { const x=node.x*7.6,y=node.y*3.3; return <g key={node.id}>{node.shape === "circle" ? <circle cx={x} cy={y} r="42" fill="#e9f0eb" stroke="#315e51" strokeWidth="2" /> : <rect x={x-72} y={y-30} width="144" height="60" rx="14" fill="#f7f3eb" stroke="#9b4e35" strokeWidth="2" />}<text x={x} y={y+5} textAnchor="middle" fontSize="13" fontWeight="600" fill="#292723">{node.label}</text></g>; })}
  </svg></div>{visual.caption && <figcaption className="border-t border-[#e2ded7] px-4 py-3 text-sm text-[#6c665f]">{visual.caption}</figcaption>}</figure>;
}

function RubricPanel({ question, mark, confidence, onMark, onConfidence }: { question: Question; mark?: Mark; confidence?: number; onMark: (mark: Mark) => void; onConfidence: (value: number) => void }) {
  return <div className="border-t border-[#d7d2ca] bg-[#e9f0eb] p-5 md:p-8 lg:p-10"><div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_260px]">
    <div><p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#547064]">Answer and rubric</p><p className="mt-3 whitespace-pre-wrap text-base font-medium leading-7 text-[#20342d]">{question.answer}</p>
      <ul className="mt-5 space-y-3">{question.rubric.map((criterion) => <li key={criterion} className="flex gap-3 text-sm leading-6 text-[#41564d]"><Check className="mt-1 size-4 shrink-0 text-[#2e755e]" />{criterion}</li>)}</ul>
      <p className="mt-5 border-t border-[#cbd8d0] pt-5 text-sm leading-6 text-[#52645d]">{question.explanation}</p>
      <div className="mt-4 flex items-start gap-2 text-xs leading-5 text-[#6a7771]"><FileText className="mt-0.5 size-4 shrink-0" /><span>{question.sourceRefs[0]?.file}{question.sourceRefs[0]?.heading ? ` — ${question.sourceRefs[0].heading}` : ""}</span></div>
    </div>
    <div className="rounded-2xl border border-[#c9d6ce] bg-white/65 p-4"><p className="font-semibold text-[#20342d]">How did you do?</p><div className="mt-3 grid gap-2">
      <MarkButton label="Correct" icon={Check} active={mark === "correct"} tone="green" onClick={() => onMark("correct")} /><MarkButton label="Partially correct" icon={CircleAlert} active={mark === "partial"} tone="amber" onClick={() => onMark("partial")} /><MarkButton label="Incorrect" icon={X} active={mark === "incorrect"} tone="red" onClick={() => onMark("incorrect")} />
    </div><p className="mt-5 text-sm font-semibold text-[#20342d]">Confidence</p><div className="mt-2 flex gap-2">{[1,2,3,4,5].map((value) => <button key={value} onClick={() => onConfidence(value)} className={`grid size-8 place-items-center rounded-lg border text-sm font-semibold transition ${confidence === value ? "border-[#173f35] bg-[#173f35] text-white" : "border-[#cbd5ce] bg-white text-[#52645d] hover:border-[#739182]"}`}>{value}</button>)}</div></div>
  </div></div>;
}

function Stat({ label, value }: { label: string; value: string }) { return <div className="min-w-20 rounded-xl border border-[#d7d2ca] bg-[#f8f7f4] px-3 py-2"><p className="text-lg font-semibold tabular-nums">{value}</p><p className="text-xs text-[#77716a]">{label}</p></div>; }

function MarkButton({ label, icon: Icon, active, tone, onClick }: { label: string; icon: typeof Check; active: boolean; tone: "green" | "amber" | "red"; onClick: () => void }) {
  const tones = { green: active ? "border-[#2e755e] bg-[#dcece4] text-[#1e5946]" : "border-[#d1ddd6] bg-white text-[#41564d]", amber: active ? "border-[#b77527] bg-[#f9e8ca] text-[#714711]" : "border-[#ddd8cf] bg-white text-[#5e5850]", red: active ? "border-[#a8523d] bg-[#f5ddd7] text-[#713828]" : "border-[#ddd8cf] bg-white text-[#5e5850]" };
  return <button onClick={onClick} className={`flex items-center gap-2 rounded-xl border px-3 py-2.5 text-left text-sm font-medium transition ${tones[tone]}`}><Icon className="size-4" /> {label}</button>;
}
