---
type: lecture
course: "[[MATH 019 - Single and Multivariable Calculus/_Course Info|MATH 019 HM-04]]"
date: 2026-09-08
---
# MATH 019 — Lecture

> [!warning] Duplicate content — Sep 8 notes may be missing
> *(AI note: the body of this note is byte-for-byte identical to [[Lecture 2 - Sep 2]] — same norm / dot product / projection derivation. It looks like the Sep 2 note got copied into this file rather than the actual Sep 8 lecture being written up. The cleaned version of this material lives in [[Lecture 2 - Sep 2]]; check your Sep 8 board photos or a classmate's notes for what was actually covered, then replace everything below.)*

## Reading / Prep


## Key Terms


## Notes

$\|\mathbf{a}\|$ = norm, which means magnitude

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

Painful derivation of

$$
\mathbf{a} \cdot \mathbf{b} = \|\mathbf{a}\| \, \|\mathbf{b}\| \cos \theta
$$

did unit vectors, its easy

Magnitude of $\operatorname{proj}_{\mathbf{a}} \mathbf{b}$: multiplying by $\frac{\|\mathbf{a}\|}{\|\mathbf{a}\|}$ only adds a $1$, but it sets up the numerator for the dot product identity.

$$
\left\| \operatorname{proj}_{\mathbf{a}} \mathbf{b} \right\|
= \|\mathbf{b}\| \cos\theta
= \|\mathbf{b}\| \cos\theta \cdot \frac{\|\mathbf{a}\|}{\|\mathbf{a}\|}
= \frac{\|\mathbf{a}\| \, \|\mathbf{b}\| \cos\theta}{\|\mathbf{a}\|}
= \frac{\mathbf{a} \cdot \mathbf{b}}{\|\mathbf{a}\|}
$$

Then the vector $\operatorname{proj}_{\mathbf{a}} \mathbf{b}$ is just magnitude times unit vector. We know the magnitude from above, and the unit vector is $\frac{\mathbf{a}}{\|\mathbf{a}\|}$:

$$
\operatorname{proj}_{\mathbf{a}} \mathbf{b}
= \underbrace{\frac{\mathbf{a} \cdot \mathbf{b}}{\|\mathbf{a}\|}}_{\text{magnitude}}
\cdot \underbrace{\frac{\mathbf{a}}{\|\mathbf{a}\|}}_{\text{unit vector}}
= \frac{\mathbf{a} \cdot \mathbf{b}}{\|\mathbf{a}\|^2} \, \mathbf{a}
= \mathbf{a} \left( \frac{\mathbf{a} \cdot \mathbf{b}}{\mathbf{a} \cdot \mathbf{a}} \right)
$$

Last step uses $\|\mathbf{a}\|^2 = \mathbf{a} \cdot \mathbf{a}$ from the top of the notes.

$$
x^{2}+ y^{2}
$$

$$
\frac{x^{2}+1}{y}
$$

$$
\sqrt{ x^{2}+y^{2} }
$$

$$

$$
## Examples / Practice


## Summary


## Questions for AI / Follow-up
- 
