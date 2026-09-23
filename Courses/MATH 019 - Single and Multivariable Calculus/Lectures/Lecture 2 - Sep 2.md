---
type: lecture
course: "[[MATH 019 - Single and Multivariable Calculus/_Course Info|MATH 019 HM-04]]"
date: 2026-09-02
tags: [math019, lecture, vectors, norm, dot-product, projection]
cleaned_with: cleanup-note v1.3.0
cleaned_on: 2026-09-21
---
# MATH 019 — Lecture

## Reading / Prep


## Key Terms

| Term | Meaning (your words) |
|---|---|
| [[Norm]] | $\|\mathbf{a}\|$ = norm, which means magnitude |
| [[Dot product]] | $\mathbf{a} \cdot \mathbf{b} = \|\mathbf{a}\| \, \|\mathbf{b}\| \cos \theta$ — the "painful derivation" |
| [[Unit vector]] | $\frac{\mathbf{a}}{\|\mathbf{a}\|}$ — "did unit vectors, its easy" |
| [[Vector projection]] | magnitude times unit vector: $\mathbf{a}\left(\frac{\mathbf{a}\cdot\mathbf{b}}{\mathbf{a}\cdot\mathbf{a}}\right)$ |

---

## Notes

### Norm and the dot product with itself

$\|\mathbf{a}\|$ = [[Norm|norm]], which means magnitude

$$
\|\mathbf{a}\|^2 = \mathbf{a} \cdot \mathbf{a}
$$

Example: $\mathbf{a} = \langle 3, 4 \rangle$

$$
\mathbf{a} \cdot \mathbf{a} = 3 \cdot 3 + 4 \cdot 4 = 9 + 16 = 25
$$

$$
\left( \sqrt{3^2 + 4^2} \right)^2 = 3 \cdot 3 + 4 \cdot 4 = 25
$$

---

### The geometric dot product formula

Painful derivation of

$$
\mathbf{a} \cdot \mathbf{b} = \|\mathbf{a}\| \, \|\mathbf{b}\| \cos \theta
$$

did [[Unit vector|unit vectors]], its easy

---

### Deriving the projection

#### Step 1 — Magnitude of the projection

Magnitude of $\operatorname{proj}_{\mathbf{a}} \mathbf{b}$: multiplying by $\frac{\|\mathbf{a}\|}{\|\mathbf{a}\|}$ only adds a $1$, but it sets up the numerator for the dot product identity.

$$
\left\| \operatorname{proj}_{\mathbf{a}} \mathbf{b} \right\|
= \|\mathbf{b}\| \cos\theta
= \|\mathbf{b}\| \cos\theta \cdot \frac{\|\mathbf{a}\|}{\|\mathbf{a}\|}
= \frac{\|\mathbf{a}\| \, \|\mathbf{b}\| \cos\theta}{\|\mathbf{a}\|}
= \frac{\mathbf{a} \cdot \mathbf{b}}{\|\mathbf{a}\|}
$$

#### Step 2 — Magnitude × unit vector

Then the vector $\operatorname{proj}_{\mathbf{a}} \mathbf{b}$ is just magnitude times unit vector. We know the magnitude from above, and the unit vector is $\frac{\mathbf{a}}{\|\mathbf{a}\|}$:

$$
\operatorname{proj}_{\mathbf{a}} \mathbf{b}
= \underbrace{\frac{\mathbf{a} \cdot \mathbf{b}}{\|\mathbf{a}\|}}_{\text{magnitude}}
\cdot \underbrace{\frac{\mathbf{a}}{\|\mathbf{a}\|}}_{\text{unit vector}}
= \frac{\mathbf{a} \cdot \mathbf{b}}{\|\mathbf{a}\|^2} \, \mathbf{a}
= \mathbf{a} \left( \frac{\mathbf{a} \cdot \mathbf{b}}{\mathbf{a} \cdot \mathbf{a}} \right)
$$

Last step uses $\|\mathbf{a}\|^2 = \mathbf{a} \cdot \mathbf{a}$ from the top of the notes.

---

### Loose expressions at the end

*(AI note: these four blocks were left with no surrounding text and the last one was an empty `$$ $$` — possibly the start of a multivariable-functions example that didn't get finished; check the Sep 2 board photo or ask what they were for.)*

$$
x^{2}+ y^{2}
$$

$$
\frac{x^{2}+1}{y}
$$

$$
\sqrt{ x^{2}+y^{2} }
$$

---

## Examples / Practice


## Summary

This lecture built the projection formula from scratch. It starts from the fact that $\|\mathbf{a}\|^2 = \mathbf{a} \cdot \mathbf{a}$ (checked against $\langle 3,4\rangle$), then derives the geometric form of the dot product, $\mathbf{a} \cdot \mathbf{b} = \|\mathbf{a}\|\|\mathbf{b}\|\cos\theta$. The projection comes in two pieces: its *magnitude* is $\|\mathbf{b}\|\cos\theta$, and multiplying by $\frac{\|\mathbf{a}\|}{\|\mathbf{a}\|}$ — which changes nothing — rearranges it into $\frac{\mathbf{a}\cdot\mathbf{b}}{\|\mathbf{a}\|}$. Scaling the unit vector $\frac{\mathbf{a}}{\|\mathbf{a}\|}$ by that magnitude, and folding the two norms back into a dot product, gives the final form $\mathbf{a}\left(\frac{\mathbf{a}\cdot\mathbf{b}}{\mathbf{a}\cdot\mathbf{a}}\right)$.

## Related

- [[Lecture 4 - Sep 9]] — cross products and planes, which use these dot products and norms
- [[Lecture 3 - Sep 8]] — currently holds a duplicate of this note's body

## Questions for AI / Follow-up

- What were the four loose expressions at the end of the notes for? ($x^2+y^2$, $\frac{x^2+1}{y}$, $\sqrt{x^2+y^2}$ — domain/range examples?)
- The "painful derivation" of $\mathbf{a}\cdot\mathbf{b} = \|\mathbf{a}\|\|\mathbf{b}\|\cos\theta$ isn't written down here — worth reconstructing it (law of cosines route) so it's actually in the note.
- Scalar projection vs vector projection — which one does the course mean by $\operatorname{proj}_{\mathbf{a}}\mathbf{b}$ by default?
