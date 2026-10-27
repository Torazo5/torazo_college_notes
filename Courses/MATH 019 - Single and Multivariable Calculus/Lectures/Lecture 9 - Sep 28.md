---
type: lecture
course: "[[MATH 019 - Single and Multivariable Calculus/_Course Info|MATH 019 HM-04]]"
date: 2026-09-28
tags: [math019, lecture, derivative-matrix, jacobian, differentiability, linear-maps, affine-maps, rotation]
cleaned_with: cleanup-note v1.4.0
cleaned_on: 2026-10-06
---
# MATH 019 — Lecture

## Reading / Prep

- [[Lecture 8 - Sep 23]] — where the derivative (Jacobian) matrix and matrix multiplication came from

## Key Terms

| Term | Meaning (your words) |
|---|---|
| [[Derivative matrix]] | $f:\mathbb{R}^n \to \mathbb{R}^m$ would be $m\times n$ which is a full jacobian matrix. each row its: differentiate by each variable |
| [[Gradient]] | $f:\mathbb{R}^n \to \mathbb{R}$ is $1\times n$ cuz n inputs one output. gradient written as a row |
| [[Linear map]] | it only multiplies variables by numbers or addition and nothing else. also a quick check is that input 0 must output 0 |
| [[Affine map]] | a linear map plus a constant. bit cautious cuz it wont be 0 -> 0 |

---

## Notes

### Derivative matrix sizes (recap)

quick recap for [[Derivative matrix|derivative matirces]]
$$
f: \mathbb{R} \to \mathbb{R}
$$
size of $Df_{x} = |x|$ so $1\times1$ *(AI note: "$|x|$" looks off — the size comes from (# outputs) × (# inputs), which is $1\times1$ here)*
$$
Df_{x}=[f'(x)]
$$

![[Pasted image 20260928110627.png]]


$$
f:\mathbb{R}^n \to \mathbb{R}
$$
this would be $1\times n$ cuz n inputs one output. [[Gradient|gradient]] written as a row:
$$
\left[ \frac{\partial f}{\partial x_{1}}, \dots, \frac{\partial f}{\partial x_{n}} \right]
$$

$$
f: \mathbb{R} \to \mathbb{R}^m
$$
should be $m\times{1}$ cuz m outputs 1 input:
apparently this is a velocity tangent vector of a path which i dont actually get note this
finally:
$$
f:\mathbb{R}^n \to \mathbb{R}^m
$$
this would me $m\times n$ which is a full jacobian matrix 

| $f$ | size of $Df$ | |
|---|---|---|
| $\mathbb{R} \to \mathbb{R}$ | $1\times 1$ | $[f'(x)]$ |
| $\mathbb{R}^n \to \mathbb{R}$ | $1\times n$ | gradient written as a row |
| $\mathbb{R} \to \mathbb{R}^m$ | $m\times 1$ | velocity tangent vector of a path |
| $\mathbb{R}^n \to \mathbb{R}^m$ | $m\times n$ | full jacobian matrix |

---

### Example: $f:\mathbb{R}^2 \to \mathbb{R}^3$

lets run through an example gotta know ts:
![[Pasted image 20260928111224.png]]
this is a $f:\mathbb{R}^2 \to \mathbb{R}^3$
so:
$$
Df_{(x,y)}=\begin{bmatrix}
y&x \\
1&1 \\
2x&0
\end{bmatrix}
$$
recap each row its: differentiate by each variable. 
so like first row differentiate by x -> y then differentiate by y -> x
second row. differentiate x+y by x we get 1 x+y by y we get 1
third, differentiate by x we get 2x and differentiate by y you get 0

and then u just input the point
$$
Df_{(1,2)}=\begin{bmatrix}
2&1 \\
1&1 \\
2&0
\end{bmatrix}
$$


![[Pasted image 20260928112020.png]]

no fucking clue whats going on here

---

### Example: domain and differentiability

![[Pasted image 20260928112032.png]]
a) find domain of each guy so the first guy
is just some guy in 3d space and we're chilling
for $\ln(x^2+y^2)$ its just $x^2+y^2 > 0$ so only $(x,y) \neq 0$
then finally just $y \neq{1}$

b) lets compute
$$
Df(x,y,z) = \begin{bmatrix}
2xy& x^2&3z^2 \\
\frac{2x}{x^2+y^2}& \frac{2y}{x^2+y^2}& 0 \\
\frac{z}{y-1}& xz\frac{1}{(y-1)^2}& \frac{x}{y-1}
\end{bmatrix}
$$
*(AI note: if the third component is $\frac{xz}{y-1}$, the middle entry of row 3 may be missing a minus sign: $\frac{\partial}{\partial y}\frac{xz}{y-1} = -\frac{xz}{(y-1)^2}$. Check against slide 20260928112032)*
now u can just input $Df(1,2,1)$ which is easy.

c) this is the hard question here
f is differentiate on all domains?
ah ok so basically just check continouity
like first row its all polynomial so we're chilling.
second row is fine as long as $(x,y) \neq 0$ which is already the domain
same for third row but with y

---

### Linear maps

![[Pasted image 20260928113127.png]]
![[Pasted image 20260928113212.png]]
this has to be true too

weirdly confusing but basically its just saying it only multiplies variables by numbers or addition and nothing else.
also a quick check is that input 0 must output 0
use ts for aprox


![[Pasted image 20260928113456.png]]
![[Pasted image 20260928113502.png]]

matrices are inherently [[Linear map|linear maps]]. matrix multiplied by x is a linear map.
because the properties are: -> also its for NUMBERS not variables
$$
A(x+y) = Ax+Ay
$$
$$
A(kx) = kAx
$$
so fulfils the conditions and shit.

[[Affine map|affine map]] is a linear map plus a constant bit cautious cuz it wont be 0 -> 0.  this is not too deep. if the approx needs some sort of constant whats why we use.

---

### Example prac: what $\mathbf h \mapsto Df(\mathbf a)\mathbf h$ maps between

![[Pasted image 20260928113949.png]]
firstly size of $Df(a)$ will be $\ell \times k$
so a step  will be $h_{k+1}$? 
then for some reason 
$$
h_{k\times1} \to (Df(a), h)
$$
so then its just matrix multiplication of determinant: *(AI note: no determinant is involved here; it's just the matrix product $Df(\mathbf a)\,\mathbf h$, as the callout below says)*
$$
(l\times k)(k\times{1})=l\times{1}
$$
so map goes to $\mathbb{R}^k\to \mathbb{R}^{\ell}$


> [!warning] Didn't get this: re-study
> My $h_{k+1}$ guess above is **wrong**. $\mathbf h$ is a whole vector $(h_1,\dots,h_k)$, not $h_{k+1}$.
>
> **Answer:**
> - $Df(\mathbf a)$ is $\ell\times k$ (outputs × inputs).
> - $\mathbf h \mapsto Df(\mathbf a)\mathbf h$ just means "put in $\mathbf h$, get out $Df(\mathbf a)\mathbf h$" ($\mapsto$ = "goes to").
> - $\mathbf h$ is a step in the input, so $\mathbf h\in\mathbb R^k$.
> - $(\ell\times k)(k\times 1) = \ell\times 1$, so the output is in $\mathbb R^\ell$.
> - So the map goes $\mathbb R^k \to \mathbb R^\ell$, the same spaces as $\mathbf f$ (input change → output change).

---

### Checking whether a map is linear

apaprently this is a check for linear map in which i have no idea when we'd even use ts:
$$
L(x,y)= (2x-y,3y) = \begin{bmatrix}
2&-1 \\
0&3
\end{bmatrix}
\begin{bmatrix}
x \\
y
\end{bmatrix}
=\begin{bmatrix}
2x-y \\
3y
\end{bmatrix}
$$
can be re-written so it works out -> can't use equals here btw

![[Pasted image 20260928114942.png]]
first one is linear cuz the shit i just showed
second is not possibl cuz it doesnt follow 0 0  rule
third one is tricky cuz ik intuitively it doesnt work but we need to prove
we need to provide a counter example

$$
L(1,0)=(0,1) \to L(0,1)+L(1,0)=(0,1)
$$
$$
L(0,1)=(0,0)
$$
$$
L((0,1)+(1,0))=L(1,1)=(1,1)
$$
this one doesnt work apparently? actually idk bro
from the start, the condition is $N((1,0)+(0,1))=N(1,0)+N(0,1)$
so RHS is (0,1)
LHS is just N(1,1) and output is just (1,1) so mismatch

---

### Example 4 — $\mathbf f(x,y) = (x^2-y^2,\ 2xy)$

![[Pasted image 20260928120030.png]]
just input max

| $(x,y)$ | $\mathbf f(x,y)$ | $(x,y)$ | $\mathbf f(x,y)$ | $(x,y)$ | $\mathbf f(x,y)$ |
| ------- | ---------------- | ------- | ---------------- | ------- | ---------------- |
| $(0,0)$ | $(0,0)$          | $(0,1)$ | $(-1,0)$         | $(0,2)$ | $(-4,0)$         |
| $(1,0)$ | $(1,0)$          | $(1,1)$ | $(0,2)$          | $(1,2)$ | $(-3,4)$         |
| $(2,0)$ | $(4,0)$          | $(2,1)$ | $(3,4)$          | $(2,2)$ | $(0,8)$          |

![[Example 4 plot.png]]

![[Pasted image 20260928120157.png]]

![[Pasted image 20260928120151.png]]


$$
Df(x,y)=\begin{bmatrix}
2x&-2y \\
2y&2x
\end{bmatrix}
\to Df(1,1)=\begin{bmatrix}
2&-2 \\
2&2
\end{bmatrix}
$$

now find [[Linear approximation|tangent approx]]:
![[Pasted image 20260928120354.png]]

so we just input 

$f(1,1) = (1^2-1^2,\ 2\cdot1\cdot1) = (0,2)$

$$
H(x,y)=\begin{bmatrix}
0 \\
2
\end{bmatrix}
+\begin{bmatrix}
2&-2 \\
2&2
\end{bmatrix}
\begin{bmatrix}
x-1 \\
y-1
\end{bmatrix}
=\begin{bmatrix}
0 \\
2
\end{bmatrix}
+\begin{bmatrix}
2(x-1)-2(y-1) \\
2(x-1)+2(y-1)
\end{bmatrix}
=\begin{bmatrix}
2x-2y \\
2x+2y-2
\end{bmatrix}
$$

so $H(x,y) = (2x-2y,\ 2x+2y-2)$ -> affine map (matrix part + the constant $-2$)


and then for some reason this is relevant:
$$
2\sqrt{ 2 }\begin{bmatrix}
\cos \frac{\pi}{4}& -\sin \frac{\pi}{4} \\
\sin \frac{\pi}{4} & \cos \frac{\pi}{4}
\end{bmatrix}
$$
seems like some sort of rotation?

> [!info] Rotation + stretch (it's just $Df(1,1)$ rewritten)
> $\cos\frac{\pi}{4}=\sin\frac{\pi}{4}=\frac{\sqrt2}{2}$ and $2\sqrt2\cdot\frac{\sqrt2}{2}=2$, so this **is** $Df(1,1)=\begin{bmatrix}2&-2\\2&2\end{bmatrix}$. Nothing new is computed.
>
> **Rotation matrix:** $R_\theta=\begin{bmatrix}\cos\theta&-\sin\theta\\ \sin\theta&\cos\theta\end{bmatrix}$ turns a vector $\theta$ counterclockwise and keeps its length.
>
> So $Df(1,1)=2\sqrt2\,R_{\pi/4}$ = **rotate 45°, then stretch by $2\sqrt2\approx2.83$**.
> - We don't *do* the rotation. It describes what $f$ already does near $(1,1)$.
> - Column 1 $(2,2)$: a step right comes out pointing up-right (↗).
> - Column 2 $(-2,2)$: a step up comes out pointing up-left (↖).
> - In the plot: $(1,1)\to(0,2)$, its right neighbor $(2,1)\to(3,4)$ is up-right, and its up neighbor $(1,2)\to(-3,4)$ is up-left.
> - A tiny square near $(1,1)$ stays a square: turned 45°, 2.83× bigger. Area ×8 $=\det Df(1,1)=2\cdot2-(-2)\cdot2$.
>
> **How to spot it:** $\begin{bmatrix}a&-b\\ b&a\end{bmatrix}$ (same diagonal, opposite signs off it) = rotation + stretch.
> - stretch $=\sqrt{a^2+b^2}$
> - angle = direction of $(a,b)$
>
> Most matrices aren't this shape. For example, $\begin{bmatrix}2&1\\1&-3\end{bmatrix}$ skews and squishes, so it isn't a clean rotation.

yada yada but basically just saying that we can visualize our guy that its just a rotation for some reason

![[Example 4 zoom plot.png]]
rotation + stretch only matches when zoomed IN near $(1,1)$. zoomed out (the 9 point plot) it doesn't match, that's fine



![[Pasted image 20260928121008.png]]
![[Pasted image 20260928121015.png]]

> [!important]
> sigh we gotta review this review queue pls

![[Pasted image 20260928121157.png]]



## Examples / Practice


## Summary

The derivative matrix always has size (# outputs) × (# inputs): $1\times1$ for $\mathbb{R}\to\mathbb{R}$, a $1\times n$ row (the gradient) for $\mathbb{R}^n\to\mathbb{R}$, $m\times1$ for a path $\mathbb{R}\to\mathbb{R}^m$, and the full $m\times n$ Jacobian for $\mathbb{R}^n\to\mathbb{R}^m$. Each row is one component differentiated by each variable, then you plug in the point. You check differentiability by checking that every partial is continuous on the domain. A linear map only multiplies variables by numbers and adds. It must send 0 to 0 and satisfy $A(x+y) = Ax+Ay$ and $A(kx) = kAx$, so every matrix is a linear map. One counterexample is enough to show a map isn't linear. An affine map is a linear map plus a constant. The tangent approximation $H(x,y) = f(1,1) + Df(1,1)\begin{bmatrix}x-1\\y-1\end{bmatrix}$ for $f = (x^2-y^2, 2xy)$ is affine. Its $Df(1,1)$ is $2\sqrt2$ times a 45° rotation, which matches $f$ only when zoomed in near $(1,1)$.

## Related

- [[Lecture 8 - Sep 23]] — derivative matrix as stacked gradients, matrix multiplication, and the rotation matrix
- [[Lecture 10 - Sep 30]] — the chain rule example uses this same $\mathbf f = (x^2-y^2, 2xy)$ and its $Df(1,1)$
- [[Lecture 7 - Sep 21]] — the tangent plane / linear approximation that $H(x,y)$ generalises
- [[hw05]] — Question 1 writes a map as $A\begin{bmatrix}x\\y\end{bmatrix}$, the linear-map idea from this lecture

## Questions for AI / Follow-up
- Slide 20260928112020: "no fucking clue whats going on here". What is it saying?
- Why is the derivative matrix of a path $\mathbb{R}\to\mathbb{R}^m$ a "velocity tangent vector"? ("i dont actually get note this")
- When would you actually use the "is this a linear map" check? ("i have no idea when we'd even use ts")
- Review slides 20260928121008 / 20260928121015 / 20260928121157 (flagged for the review queue).
 
