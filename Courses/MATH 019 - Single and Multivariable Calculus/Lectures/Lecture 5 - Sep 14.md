---
type: lecture
course: "[[MATH 019 - Single and Multivariable Calculus/_Course Info|MATH 019 HM-04]]"
date: 2026-09-14
tags:
  - math019
  - lecture
  - domain-range
  - level-curves
  - contour-plot
  - level-surfaces
  - quadric-surfaces
  - linear-functions
cleaned_with: cleanup-note v1.3.0
cleaned_on: 2026-09-21
---
# MATH 019 — Lecture

## Reading / Prep


## Key Terms

| Term                   | Meaning (your words)                                                                            |
| ---------------------- | ----------------------------------------------------------------------------------------------- |
| [[Domain]]             | the set of $(x,y)$ points in which $f(x,y)$ is defined                                          |
| [[Range]]              | every possible value the function could output                                                  |
| [[Codomain]]           | just the possible set of the answers                                                            |
| [[Onto]]               | when range = domain *(see the flag in the notes — this may need to be codomain)*                |
| [[Surface plot]]       | two input variables corresponds to one $z$ value, creates this 3d surface plot shape            |
| [[Level curve]]        | one slice of constant-height                                                                    |
| [[Contour plot]]       | many level curves viewed from above so like a collection                                        |
| [[Section]]            | freeze $x=c$ (or $y=c$) and look at how $z$ depends on the other one alone                      |
| [[Level surface]]      | same as level curves but one dimension up — set $W=c$ so you can visualise a 4d function in 3d  |
| [[Quadric surface]]    | the six named shapes (ellipsoid, paraboloids, cone, hyperboloids) — memorize or learn to tell apart |
| [[Linear function]]    | needs $L(x+y)=L(x)+L(y)$ and $L(kx)=kL(x)$; if $L(0)\neq 0$ then its not linear                 |

---

## Notes

### Domain, range, codomain

domain and range we know
codomain is just the possible set of the answers.
range $\neq$ domain
range is every possible value the function could output. domain is what set the values can become *(AI note: this second half looks reversed — the [[Domain|domain]] is the set of inputs you're allowed to put in, not something the values become; double-check against the slide.)*
IF
range = domain, then we call the function "**onto**" *(AI note: this may be a slip — [[Onto|onto]] is usually range = **codomain**, which is the word you defined two lines above; worth checking the slide.)*

---

### Domain of a function of two variables

here, we call **Domain** the set of $(x,y)$ points in which $f(x,y)$ is defined.

> [!question] my question
> is this domain different from the usual x value domain or am i calling this wrong

![[Pasted image 20260914111546.png]]
pretty basic, simply just x,y has to be real and y can't be negative *(AI note: the slide says $y>0$, so $y=0$ is excluded too — "can't be negative" would still allow $y=0$, where $\ln y$ is undefined.)*
thus it looks like this:
![[Pasted image 20260914111757.png]]

![[Pasted image 20260914111803.png]]
similar idea here. everything is possible minus $y=x^2$ so we just consider that and draw that out

---

### The four categories of function

theres generally four categories.

| \# independent vars | \# dependent vars | Notation        |
| ------------------- | ----------------- | --------------- |
| 1                   | 1                 | $f(t)$          |
| 1                   | many              | $\mathbf{f}(t)$ |
| many                | 1                 | $f(\mathbf{x})$ |
| many                | many              | $\mathbf{f}(\mathbf{x})$ |

the bolded is the one that changes.
specifically, ->
1 independent, many dependent would mean one input controls several output quantities
so like x affects y AND z
many, 1 would mean many inputs can corespond to one thing so like x+y = for example we can do 5+2, 10 + -2 stuff like that
many to many is simply just multiple inputs can cause multiple answers

**EXAMPLES:**
an rgb image is many to one for example cuz we input a fixed coordinate and we get a fixed code back of the rgb info of the pixel

![[Pasted image 20260914113311.png]]
surface plot is a good example of many to one. two input variables corresponds to one z value. creates this 3d [[Surface plot|surface plot]] shape.

---

### Sketching a surface by setting variables to 0

![[Pasted image 20260914113843.png]]
to sketch we can just set variables to 0.

1. if x = 0, then z = 1-y
2. if y = 0, then z = 1-x
3. if z = 0, then y = 1-x

![[Pasted image 20260914114024.png]]

![[Pasted image 20260914114438.png]]
here there is no y which literally just means so we just extend for all values of y
![[Pasted image 20260914114553.png]]
kinda like that if that makes sense basically jsut 4-x^2 for one of the planes

---

### Level curves vs contour plots

[[Level curve|level curve]] -> one slice of constant-height
[[Contour plot|contour plot]] -> many level curves viewed from above so like a collection

---

### Sections

> [!danger] 🔥 COMPLETELY CONFUSED ON SECTIONS REVIEW THIS 🔥

![[Pasted image 20260914120304.png]]

---

### Level surfaces (three variables)

![[Screenshot 2026-09-14 at 12.05.05 PM.png]]
in this situation, we'd have to go four dimensions if: $F(x,y,z) = W$. so we just set $W = c$ so then we can visualise in 3d.
just like how we had level curves now we have [[Level surface|level surfaces]], visualising slices of a higher dimensional function

![[Pasted image 20260914120628.png]]
an example of this is that: $x+y+z = c$ then we get a 3d plane. even if c changes [[Normal vector|normal]] is the same so it'll create countless parallel planes filling up space

for

$$
F(x,y,z) = x^2+y^2+z^2
$$

then its just a 3d sphere

---

### Quadric surfaces

![[Pasted image 20260914121046.png]]

these are very important can either memorize or understand how to distinguish. ik my ass aint remembering.

lets just think this through.

---

### Linear functions

![[Pasted image 20260914121421.png]]
linear function definition

![[Pasted image 20260914121449.png]]
this would prove that if L(0) $\neq$ 0 then its not linear
applies to vectors as well like $L(\vec{0}) = a * \vec{0}$

> [!danger] 🔥 GOTTA RREVIEW MORE SLIDES BRO 🔥

---

## Examples / Practice

*(AI note: the three worked plane examples that were sitting here — plane from a normal and a point, plane through three points, line of intersection — were carryover from [[Lecture 4 - Sep 9]] via the duplicated template, so they've been removed from this note. They're still intact in Lecture 4.)*

---

## Summary

This lecture switches from vectors to **functions of several variables**. It starts by nailing down vocabulary — domain (the set of $(x,y)$ where $f$ is actually defined), range (everything it can output), codomain (the set the answers live in) — and then sorts every function into four categories by how many independent and dependent variables it has. The one that matters for this course is **many → 1**, because that's exactly a surface plot: two inputs $(x,y)$, one output $z$. From there it's all about how to *see* those surfaces without being able to draw 3d well. Three tricks: set variables to 0 to get the traces on each coordinate plane; take **level curves** ($f=c$, one constant-height slice) and stack them into a **contour plot** viewed from above; or take **sections** by freezing $x=c$ or $y=c$. The same level-set idea then pushes one dimension up — for $F(x,y,z)$ the graph would need 4d, so you set $F=c$ and get **level surfaces** sitting in ordinary 3d space (e.g. $x+y+z=c$ gives a stack of parallel planes, $x^2+y^2+z^2=c$ gives spheres). The quadric surface table is the catalogue of shapes these produce. Ends on **linear functions**: $L$ is linear only if it survives both $L(x+y)=L(x)+L(y)$ and $L(kx)=kL(x)$, and the quick disqualifier is $L(\vec{0})\neq\vec{0}$.

## Related

- [[Lecture 4 - Sep 9]] — the previous lecture; its [[Plane equation|plane equation]] $AX+BY+CZ=D$ is what the $x+y+z=c$ level surfaces turn out to be
- [[Lecture 2 - Sep 2]] — vectors and dot product, which the linear function rules build on
- [[Lecture 6 - Sep 16]] — next lecture: limits and partial derivatives on these surfaces
- [[MATH 019 - Single and Multivariable Calculus/_Course Info|MATH 019]] — course overview

## Questions for AI / Follow-up

- **Your question from the lecture:** is the domain of $f(x,y)$ different from the usual single-variable $x$ domain, or am I calling this wrong?
- 🔥 **Sections** — flagged as completely confused. How is a section (freezing $x=c$) different from a level curve (freezing $z=c$), and why do both get used for sketching the same surface?
- Check the **onto** definition — the note says range = domain, but the codomain line right above it suggests it should be range = codomain. Which one did the slide say?
- The **quadric surface** table is flagged as "aint remembering" — is there a way to read off which shape you have from the signs of the $x^2,y^2,z^2$ terms instead of memorizing all six?
