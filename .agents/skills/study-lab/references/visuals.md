# Web-native question visuals

Use this reference when visual evidence would make a question more authentic, clear, or demanding than prose alone. Do not add visuals by quota.

## Choose a representation

- `plot`: quantitative traces, peaks, curves, spectra, distributions, time series, coordinate graphs, and any question where axis scale or shape matters.
- `diagram`: relationships among labeled objects, steps, forces, components, concepts, states, or processes.
- `table`: compact comparison, raw observations, values, classifications, or datasets the student must interpret.
- `image`: a custom local SVG/PNG when the other structures cannot faithfully express the subject. Use this for molecular drawings, apparatus, maps, annotated source excerpts when allowed, or richer bespoke figures.

The webpage supports any subject. “Plot” is not synonymous with spectrum, and “diagram” is not synonymous with chemistry.

## Plot

```json
{
  "type": "plot",
  "title": "Molecular-ion region",
  "xLabel": "m/z",
  "yLabel": "Relative abundance",
  "xDomain": [154, 160],
  "yDomain": [0, 100],
  "reverseX": false,
  "traces": [{
    "kind": "peaks",
    "color": "#9b4e35",
    "points": [
      {"x": 156, "y": 100, "label": "156"},
      {"x": 158, "y": 98, "label": "158"}
    ]
  }],
  "caption": "Only the molecular-ion region is shown."
}
```

`kind` is `peaks` or `line`. A trace needs at least two points for `line` and at least one for `peaks`. `reverseX` supports conventions such as NMR chemical shift. Use truthful domains and units. Omit labels that would disclose the answer.

## Diagram

Coordinates are percentages within the diagram. Keep nodes inside 5–95 on each axis.

```json
{
  "type": "diagram",
  "title": "Energy transfer",
  "nodes": [
    {"id": "a", "label": "Initial state", "x": 20, "y": 50, "shape": "box"},
    {"id": "b", "label": "Final state", "x": 80, "y": 50, "shape": "circle"}
  ],
  "edges": [{"from": "a", "to": "b", "label": "process"}],
  "caption": "Arrows indicate direction."
}
```

`shape` is `box` or `circle`. Labels should remain short; put longer context in the prompt or caption.

## Table

```json
{
  "type": "table",
  "title": "Observed data",
  "columns": ["Trial", "Temperature / K", "Rate / s⁻¹"],
  "rows": [["1", "290", "0.12"], ["2", "310", "0.31"]],
  "caption": "Values are measured under otherwise identical conditions."
}
```

Keep cells concise. Do not place the expected conclusion in a heading or caption.

## Custom local image

Create the asset under `Study Lab/Assets/<set-id>/` and reference it from the question:

```json
{
  "type": "image",
  "title": "Apparatus",
  "src": "/generated-assets/<set-id>/apparatus.svg",
  "alt": "A labeled schematic of the apparatus showing the sample between two electrodes",
  "caption": "Not to scale."
}
```

Prefer SVG for diagrams and line art. Prefer PNG for raster source material. Never use remote URLs, data URLs, scripts, embedded HTML, or SVG event handlers. The sync command copies local assets into the app.

## Quality checks

- The visual and prompt together have one unambiguous task.
- Axis direction, labels, units, scale, legends, and significant features are correct.
- The answer is not exposed through an annotation, filename, caption, or alt text.
- Colors are not the only way information is distinguished.
- Text remains legible on a narrow screen.
- The answer and rubric explicitly evaluate interpretation of the visual when that is the skill being tested.
