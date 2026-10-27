---
type: lecture
course: "[[MATH 019 - Single and Multivariable Calculus/_Course Info|MATH 019 HM-04]]"
date: 2026-09-23
tags: [math019, lecture, linear-approximation, differentiability, derivative-matrix, jacobian, matrix-multiplication, polar-coordinates]
cleaned_with: cleanup-note v1.4.0
cleaned_on: 2026-10-06
---
# MATH 019 — Lecture

## Reading / Prep

- [[Lecture 7 - Sep 21]] — tangent plane, gradient, and the error limit this lecture starts from

## Key Terms

| Term | Meaning (your words) |
|---|---|
| [[Linear approximation]] | error at **x** is $f(\mathbf{x}) - T(\mathbf{x})$, and we want our error to be aprox 0 |
| [[Tangent plane]] | $T(\mathbf{x})$ is the z-value on the tangent plane — the plane is tangent at **a**, and we read its height at **x** |
| [[Differentiability]] | error goes to 0 is only continuity. differentiability needs the error to shrink *faster than the distance moved* |
| [[Gradient]] | a second, separate function I build *out of* $f$. gradient is a higher dimension rise over run |
| [[Derivative matrix]] | stack all $m$ gradients up as rows of a matrix — the **Jacobian**. $f:\mathbb{R}^n\to \mathbb{R}^m$ will have a DF matrix dimensions $m\times n$ |
| [[Matrix multiplication]] | rows of the left matrix dotted with columns of the right one. inner numbers must match or the multiplication doesn't exist, outer numbers give the answer's shape |
| [[Identity matrix]] | $IA = AI = A$ |
| [[Determinant]] | $\det DT = r$ — measuring how much area gets stretched going from polar to Cartesian |

---

## Notes

### Error of the tangent approximation

$$
\mathbf{x} = (x,y)
$$
$$
\mathbf{a}=(a,b)
$$
error at **x**:
$$
f(\mathbf{x}) - T(\mathbf{x})
$$

error at function 
$$
f(\mathbf{x}) - f(\mathbf{a}) - \nabla f_{a}\times(\mathbf{x}-a)
$$
*(AI note: the $\times$ here and in the block below is probably meant to be a dot product $\cdot$, matching $\nabla f(\mathbf{a})\cdot(\mathbf{x}-\mathbf{a})$ further down)*
we want our error to be aprox 0

$$
error \approx 0
$$

$$
f(\mathbf{x}) - f(\mathbf{a}) \approx \nabla f_{a}\times(\mathbf{x}-a)
$$

like fundamental analysis of calculus we can increment our stuff with $h$

$$
\Delta f = f(\mathbf{a}+h)-f(\mathbf{a}) \approx \nabla \cdot h \Rightarrow \Delta f \approx \nabla f \cdot h
$$


![[Pasted image 20260923111855.png]]
basically the main concept here is that we want our a,b but the thing is that error must shrink faster so we find error at x which is just value of that multi var function there as well as our [[Linear approximation|tangent approximation]].

### What $T(\mathbf{x})$ actually is

$T(\mathbf{x})$ is the **z-value on the [[Tangent plane|tangent plane]]** — the plane is tangent **at a**, and we read its height **at x**.

$$
T(\mathbf{x}) = f(\mathbf{a}) + \nabla f(\mathbf{a})\cdot(\mathbf{x}-\mathbf{a})
$$

- $f(\mathbf{a})$ — height at the touch point
- $\nabla f(\mathbf{a})\cdot(\mathbf{x}-\mathbf{a})$ — linear rise walking from $\mathbf{a}$ to $\mathbf{x}$

For 2 variables this is just the tangent plane equation rearranged:

$$
z = f(a,b) + f_{x}(a,b)(x-a) + f_{y}(a,b)(y-b)
$$

So $f(\mathbf{x}) - T(\mathbf{x})$ is the vertical gap between the surface and its tangent plane — the error of the linear approximation, which [[Differentiability|differentiability]] requires to shrink faster than $\|\mathbf{x}-\mathbf{a}\|$.

(In 3+ variables it's a tangent *hyperplane*; "tangent plane" only when $n=2$.)


---

### Which functions this covers

this concept is applicable for all:
$$
f : \mathbb{R}^n \to \mathbb{R}
$$


$$
f : \mathbb{R}^2 \to \mathbb{R}^3
$$

> [!important]
> THERES A LOT OF SLIDES I MISSED HERE REVIEW PLS

---

### Differentiability: error shrinks faster than the distance

![[Pasted image 20260923112913.png]]
basically everything we've talked about before is just the idea that our error goes to 0 as we approach the point — **but that alone is only continuity.**

Differentiability needs the error to shrink *faster than the distance moved*:

$$
\lim_{\mathbf{x}\to\mathbf{a}} \frac{f(\mathbf{x}) - T(\mathbf{x})}{\|\mathbf{x}-\mathbf{a}\|} = 0
$$

The denominator is the whole point. Without dividing, the statement is trivially true and says nothing — e.g. $f(x,y)=\sqrt{x^{2}+y^{2}}$ has error $\to 0$ at the origin but is a sharp cone point with no tangent plane.

- error $\to 0$ &rarr; the plane **touches** the surface
- error$/\|\mathbf{x}-\mathbf{a}\| \to 0$ &rarr; the plane also **matches its direction** 
critical point: error shrinks faster than the distance.



nice version:
![[Pasted image 20260923112926.png]]


---

### Splitting $f$ into component functions

if u put this into a function its 
$$
f(y,p) = (f_{1}(y,p), f_{2}(y,p), f_{3}(y,p))
$$
so for $i = 1,2,3$,

$$
f_{i}: \mathbb{R}^2\to \mathbb{R}
$$
basically its true that we input two variables and we output three variables or dimensions int hat sense but each one is a scalar output so u just gotta be able to visualize that

works the other way as well
$$
f: \mathbb{R}^4 \to \mathbb{R}^2
$$

$$
f(x,y,z,w) = (f_{1}(x,y,z,w), f_{2}(x,y,z,w))
$$
thus its
$$
f: \mathbb{R}^4 \to \mathbb{R}^2
$$


a general formula:
$$
f(x_{1},x_{2},x_{3},\dots,x_{n}) = (f_{1}(x_{1},\dots,x_{n}), f_{2}(x_{1},\dots,x_{n}), \dots,f_{m}(x_{1},\dots,x_{n}))
$$
for $i\to m$
$$
f_{i}: \mathbb{R}^n\to \mathbb{R}
$$
which makes sense ya
for some reason this connects to:
$$
\Delta f_{i} = \nabla f_{i}\cdot h
$$

---

### Why $\Delta f_i = \nabla f_i \cdot h$ (plain english version)

**The arrow was lying to me.**

When the slides write $f(x,y) \Rightarrow \nabla f$, that arrow is not the usual arrow. It does not mean "this function spits out a gradient." It just means "hey, starting from $f$, here's another thing we can go build." It should honestly just be the word "so" or "from this we get." Two different arrows doing two different jobs with the same symbol is why this looked insane.

So no — $f(x,y)$ still returns **one plain number**, same as always. Nothing about that changed.

**The [[Gradient|gradient]] is a second, separate function.**

$\nabla f$ is its own thing that I build *out of* $f$.
**Now the part I didn't get: why $\Delta f = \nabla f \cdot h$.**

Turns out I already wrote this down at the top of this same note. It's not new. It's the tangent plane formula with the terms moved around.

Start with the tangent plane approximation:

$$
f(\mathbf{x}) \approx f(\mathbf{a}) + \nabla f(\mathbf{a})\cdot(\mathbf{x}-\mathbf{a})
$$

Instead of saying "I'm at some point $\mathbf{x}$," say "I started at $\mathbf{a}$ and took a step $h$." So $\mathbf{x} = \mathbf{a} + h$, which makes $\mathbf{x} - \mathbf{a}$ just $h$:

$$
f(\mathbf{a}+h) \approx f(\mathbf{a}) + \nabla f(\mathbf{a})\cdot h
$$

Now subtract $f(\mathbf{a})$ from both sides. The left side becomes "value after the step minus value before the step" — which is literally the definition of the change in $f$:

$$
\Delta f \approx \nabla f(\mathbf{a})\cdot h
$$

ok this shit is really overcomplicated but the $\Delta f$ is just literally change in z value/rise
cuz gradient is a higher dimension rise over run we just times by run which is the step $h$ the reaosn its a dot product is cuz we're no longer just approaching in one line its like a bunch of ways if that makes sense. 
so we're literlaly just finding change in z i was overcomplicating it.


then just think of it as lets make it for everything cuz we saw the n and m shit

so like this:

$$
\Delta f_{i} \approx \nabla f_{i}\cdot h \qquad \text{for each } i = 1,\dots,m
$$

If I stack all $m$ of those gradients up as rows of a matrix, that matrix is the **[[Derivative matrix|Jacobian]]**. That's almost certainly what the slides I missed were building toward.

**The whole thing as one matrix multiplication.**

Instead of writing the formula out $m$ separate times, stack the changes into a column, stack the gradients into a matrix, and stack the step into a column. Then it's *one* equation:

$$
\underbrace{\begin{bmatrix} \Delta f_{1} \\ \Delta f_{2} \\ \Delta f_{3} \end{bmatrix}}_{\Delta \mathbf{f}}
\approx
\underbrace{\begin{bmatrix}
\dfrac{\partial f_{1}}{\partial x_{1}} & \dfrac{\partial f_{1}}{\partial x_{2}} & \dfrac{\partial f_{1}}{\partial x_{3}} \\[8pt]
\dfrac{\partial f_{2}}{\partial x_{1}} & \dfrac{\partial f_{2}}{\partial x_{2}} & \dfrac{\partial f_{2}}{\partial x_{3}} \\[8pt]
\dfrac{\partial f_{3}}{\partial x_{1}} & \dfrac{\partial f_{3}}{\partial x_{2}} & \dfrac{\partial f_{3}}{\partial x_{3}}
\end{bmatrix}}_{Df \ =\ \text{derivative / Jacobian matrix}}
\underbrace{\begin{bmatrix} h_{1} \\ h_{2} \\ h_{3} \end{bmatrix}}_{h \ =\ \text{the step}}
$$

Each **row** of $Df$ is just one gradient $\nabla f_i$ laid on its side. Row 1 is $\nabla f_1$, row 2 is $\nabla f_2$, and so on.

And [[Matrix multiplication|matrix multiplication]] is *defined* as "row dotted with column," so multiplying row $i$ by $h$ literally gives back:

$$
\nabla f_{i}\cdot h = \Delta f_{i}
$$

Which is the exact formula from above. The matrix version isn't new math — it's just **all $m$ copies of the same equation ran at once**, one per row.

General shape: for $f : \mathbb{R}^n \to \mathbb{R}^m$,

$$
\underbrace{\Delta \mathbf{f}}_{m \times 1} \approx \underbrace{Df(\mathbf{a})}_{m \times n} \ \underbrace{h}_{n \times 1}
$$

$m$ components out, $n$ inputs in, so $Df$ is $m \times n$.(matrix is row first notation) The inner $n$'s cancel and I'm left with an $m \times 1$ column — which is right, since I wanted $m$ changes out.

quite important thing here is that 
$$
f:\mathbb{R}^n\to \mathbb{R}^m
$$
will have a DF matrix dimensions $m\times n$

---

### Matrix multiplication

aight lets do some simple matrix transformations now:
$$
\begin{bmatrix}
3&-1 \\
2&0  \\
 1&4
\end{bmatrix}
\begin{bmatrix}
1&0 \\
2&-1
\end{bmatrix}
$$
output is:

rows of the left matrix dotted with columns of the right one. Left is $3\times 2$, right is $2\times 2$, so the answer is $3\times 2$.

rows: $(3,-1)$, $(2,0)$, $(1,4)$ &nbsp;&nbsp; columns: $(1,2)$, $(0,-1)$

$$
\begin{bmatrix}
(3,-1)\cdot(1,2) & (3,-1)\cdot(0,-1) \\[4pt]
(2,0)\cdot(1,2) & (2,0)\cdot(0,-1) \\[4pt]
(1,4)\cdot(1,2) & (1,4)\cdot(0,-1)
\end{bmatrix}
$$

work each one out:

$$
\begin{bmatrix}
3(1)+(-1)(2) & 3(0)+(-1)(-1) \\[4pt]
2(1)+0(2) & 2(0)+0(-1) \\[4pt]
1(1)+4(2) & 1(0)+4(-1)
\end{bmatrix}
=
\begin{bmatrix}
3-2 & 0+1 \\[4pt]
2+0 & 0+0 \\[4pt]
1+8 & 0-4
\end{bmatrix}
$$

so:

$$
\begin{bmatrix}
3&-1 \\
2&0  \\
1&4
\end{bmatrix}
\begin{bmatrix}
1&0 \\
2&-1
\end{bmatrix}
=
\begin{bmatrix}
1&1 \\
2&0 \\
9&-4
\end{bmatrix}
$$

(careful — first entry is $(3,-1)\cdot(1,2)$, using row 1 of the left matrix. I wrote $(3,1)$ the first time, that's a sign typo.)

shape rule: $(3\times 2)(2\times 2) = 3\times 2$. inner numbers must match or the multiplication doesn't exist, outer numbers give the answer's shape.

again just dont forget its dot product of row of the first then column of the first *(AI note: probably "column of the second" — the worked example above dots rows of the left matrix with columns of the right one)*
so row 1, column 1
row 1, column 2
row 2, column 1
row 2, column 2

---

### Rotation matrix and identity

$$
\begin{bmatrix}
\cos \theta &-\sin \theta \\
\sin \theta&\cos \theta
\end{bmatrix}
\begin{bmatrix}
x \\
y
\end{bmatrix}
=\begin{bmatrix}
x\cos \theta-y\sin \theta \\
x\sin \theta+y\cos \theta
\end{bmatrix}
$$
dimensions work as 
$x\times y$ and $a\times b$ compute $x\times b$

[[Identity matrix|identity matrix]]: write this out in cleanup prompt please

> [!note] Identity matrix — written by Claudian (you asked for this above)
> The identity matrix $I$ is a square matrix with 1s down the main diagonal and 0s everywhere else:
> $$I_{2}=\begin{bmatrix}1&0\\0&1\end{bmatrix} \qquad I_{3}=\begin{bmatrix}1&0&0\\0&1&0\\0&0&1\end{bmatrix}$$
> Multiplying by it changes nothing. It's the matrix version of multiplying by 1. Check against the slides.

commutative(?) properties:
$$
IA = AI = A
$$
$A$ being a matrix and $I$ being the identity vector *(AI note: probably "identity matrix" — $I$ here is a matrix, not a vector)*


---

### The big takeaways

two biggest things from the lecture basically:
![[Pasted image 20260923120247.png]]

and

![[Pasted image 20260923120256.png]]

probably gonna have to re-think about this

huge summary is this:
![[Pasted image 20260923120334.png]]

---

### Example 5 — polar to Cartesian

some more examples working with this:
![[Pasted image 20260923120448.png]]
this is a:
$$
T: \mathbb{R}^2 \to \mathbb{R}^2
$$

**Example 5:** compute the derivative matrix of the [[Polar coordinates|polar]]-to-Cartesian transformation

$$
T(r,\theta) = (r\cos\theta,\ r\sin\theta)
$$

2 inputs $(r,\theta)$, 2 outputs, so $DT$ is $2\times 2$. Components:

$$
f_{1} = r\cos\theta \qquad f_{2} = r\sin\theta
$$

$$
DT = \begin{bmatrix}
\dfrac{\partial f_{1}}{\partial r}&\dfrac{\partial f_{1}}{\partial \theta} \\[10pt]
\dfrac{\partial f_{2}}{\partial r}&\dfrac{\partial f_{2}}{\partial \theta}
\end{bmatrix}
$$

now just take the four partials. remember: differentiating w.r.t. $r$ means treat $\theta$ as a constant, and vice versa.

- $\dfrac{\partial f_{1}}{\partial r} = \cos\theta$ &nbsp; ($\cos\theta$ is a constant, $\partial r/\partial r = 1$)
- $\dfrac{\partial f_{1}}{\partial \theta} = -r\sin\theta$ &nbsp; ($r$ is a constant, derivative of $\cos$ is $-\sin$)
- $\dfrac{\partial f_{2}}{\partial r} = \sin\theta$
- $\dfrac{\partial f_{2}}{\partial \theta} = r\cos\theta$

so:

$$
DT(r,\theta) = \begin{bmatrix}
\cos\theta & -r\sin\theta \\[4pt]
\sin\theta & r\cos\theta
\end{bmatrix}
$$

**what this actually means:** take a small step $(h_r, h_\theta)$ in polar-land, and $DT$ tells you the resulting step in $xy$-land:

$$
\begin{bmatrix} \Delta x \\ \Delta y \end{bmatrix}
\approx
\begin{bmatrix}
\cos\theta & -r\sin\theta \\[4pt]
\sin\theta & r\cos\theta
\end{bmatrix}
\begin{bmatrix} h_{r} \\ h_{\theta} \end{bmatrix}
$$

notice the $r$ in column 2 — nudging $\theta$ moves you further when you're further out from the origin. same angle change, bigger arc. the matrix knows that.

**the payoff — [[Determinant|determinant]]:**

$$
\det DT = (\cos\theta)(r\cos\theta) - (-r\sin\theta)(\sin\theta) = r\cos^{2}\theta + r\sin^{2}\theta = r
$$

that $r$ is exactly the $r$ that shows up in $dA = r\,dr\,d\theta$ when doing polar integrals. it's not a magic conversion factor someone made up — it's the determinant of this matrix, measuring how much area gets stretched going from polar to Cartesian.

> [!important]
> lets do a bunch of prac problems from todays slides (make this the highest priority in review queue when i call it pls)

Each row of $Df$ is one output function's partials w.r.t. every input. One row per function. Multiply $Df$ by the step $h$ — which dots each row with $h$ — and you get a column of approximate rises, one per output.


## Examples / Practice


## Summary

The tangent plane approximation $T(\mathbf{x}) = f(\mathbf{a}) + \nabla f(\mathbf{a})\cdot(\mathbf{x}-\mathbf{a})$ is the height of the tangent plane at $\mathbf{x}$, so $f(\mathbf{x}) - T(\mathbf{x})$ is the error. The error going to 0 only gives continuity. Differentiability needs the error to shrink faster than the distance $\|\mathbf{x}-\mathbf{a}\|$, which is why the cone $\sqrt{x^2+y^2}$ fails at the origin. Writing $\mathbf{x} = \mathbf{a} + h$ turns the approximation into $\Delta f \approx \nabla f\cdot h$, which is just change in z = rise over run times the run. A function $f:\mathbb{R}^n\to\mathbb{R}^m$ is just $m$ scalar component functions, each with its own $\Delta f_i \approx \nabla f_i\cdot h$. Stacking those gradients as rows gives the $m\times n$ derivative (Jacobian) matrix, and matrix multiplication (row dotted with column, inner dimensions must match) runs all $m$ equations at once. For polar → Cartesian, $DT = \begin{bmatrix}\cos\theta & -r\sin\theta\\ \sin\theta & r\cos\theta\end{bmatrix}$, and its determinant is $r$, the same $r$ as in $dA = r\,dr\,d\theta$.

## Related

- [[Lecture 7 - Sep 21]] — tangent plane, gradient, and the error limit for differentiability that this lecture extends
- [[Lecture 9 - Sep 28]] — recap of derivative matrix sizes, then linear and affine maps
- [[Lecture 10 - Sep 30]] — the chain rule, which multiplies these derivative matrices together
- [[hw05]] — derivative matrices and the chain rule

## Questions for AI / Follow-up
- You missed slides between "$f:\mathbb{R}^2\to\mathbb{R}^3$" and the differentiability slide. What was on them? Probably the formal definition of the derivative matrix for $f:\mathbb{R}^n\to\mathbb{R}^m$.
- Is $IA = AI = A$ always true ("commutative(?)"), or only when $A$ is square? What size does $I$ have to be on each side for a $3\times 2$ matrix?
- The two "biggest things" slides (images 20260923120247 and 20260923120256): you wrote "probably gonna have to re-think about this". Walk through what they say.
