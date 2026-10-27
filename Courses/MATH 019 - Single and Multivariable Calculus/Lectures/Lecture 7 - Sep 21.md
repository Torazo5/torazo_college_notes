---
type: lecture
course: "[[MATH 019 - Single and Multivariable Calculus/_Course Info|MATH 019 HM-04]]"
date: 2026-09-21
tags:
  - math019
  - lecture
  - tangent-plane
  - partial-derivatives
  - differentiability
  - linear-approximation
  - gradient
cleaned_with: cleanup-note v1.4.0
cleaned_on: 2026-09-23
---
# MATH 019 — Lecture

## Reading / Prep


## Key Terms

| Term | Meaning (your words) |
| ---- | -------------------- |
| [[Tangent plane]] | finding a point and then making a tangent plane having two partial derivates and which you can create a plane |
| [[Partial derivative]] | we freeze a variable entirely so theres no difference in the vector in that axis, then we move x(or y) by one unit and the partial derivative is the slope |
| [[Linear approximation]] | the tangent line/plane is the *best* linear approximation — its error shrinks faster than the distance |
| [[Differentiability]] | if the error limit holds then $f$ is differentiable at $(a,b)$ and $T(x,y)$ actually earns the name tangent plane |
| [[Gradient]] | $\nabla f(a,b) = (f_{x}(a,b), f_{y}(a,b))$ |
| [[Cross product]] | used here on $v_1,v_2$ to get the normal of the tangent plane |

---

## Notes

### From partial derivatives to tangent planes

partial derivatives to tangent planes

basically finding a point and then making a [[Tangent plane|tangent plane]] having two [[Partial derivative|partial derivates]] and which you can create a plane i think

![[Pasted image 20260921111148.png]]

yeah so its pretty self-explanatory.

#### Step 1 — Two direction vectors

we freeze a variable entirely so theres no difference in the vector in that axis.
then we move x(or y) by one unit and then partial derivative of the last variable in term of the one we moved by one as in thats the slope

so like for

$$
v_{1}=(1,0,f_{x}(a,b))
$$

then x makes one unit then we see how much z changes in respect to how much x changes at point $(a,b)$. y axis doesnt change at all.
then same logic and just do:

$$
v_{2}= (0,1,f_{y}(a,b))
$$

#### Step 2 — Cross product gives the normal

then we can [[Cross product|cross product]] these:

$$
n=\begin{vmatrix}
i&j&k  \\
1&0&f_{x}  \\
0&1&f_{y}
\end{vmatrix}
=i\begin{vmatrix}
0&f_{x} \\
1&f_{y}
\end{vmatrix}
-j\begin{vmatrix}
1&f_{x} \\
0&f_{y}
\end{vmatrix}
+k\begin{vmatrix}
1&0 \\
0&1
\end{vmatrix}
$$

#### Step 3 — Rearrange into $T(x,y)$

thus [[Plane equation|plane equation]]:

$$
-f_{x}(a,b)(x-a)-f_{y}(a,b)(y-b)+(z-f(a,b))
$$

then re-arrange for $T(x,y)$

$$
z= f_{x}(a,b)(x-a)+f_{y}(a,b)(y-b)+f(a,b)
$$

#### Example — $f_{x}(1,1)=-2$, $f_{y}(1,1)=-6$

example question:

![[Pasted image 20260921112304.png]]

$$
f_{x} = -2x , f_{x}(1,1)=-2
$$

$$
f_{y} = -6y, f_{y}(1,1) = -6
$$

$$
f(1,1) = 4
$$

thus:

$$
T(x,y) = -2(x-1) -6(x-1)+4
$$

*(AI note: the second bracket looks like a typo — the $f_y$ term should carry $(y-1)$, not $(x-1)$, so $T(x,y) = -2(x-1)-6(y-1)+4$. Check against the slide photo above.)*

#### Example — $g_{x}=2x+y$, $g_{y}=x$ at $(2,-1)$

![[Pasted image 20260921112649.png]]

same shit for this:

$$
g(2,-1) = -2
$$

$$
g_{x}(x,y)=2x+y
$$

$$
g_{x}(2,-1) = 3
$$

$$
g_{y}(x,y)=x
$$

$$
g_{y}(2,-1)=2
$$

$$
T(x,y)=3(x-2)+2(y+1)-2
$$

---

### Side bar — why the tangent line is the *best* linear approximation

small one variable derivative side bar:
start with the normal derivative definition:

$$
f'(a) = \lim_{x\to a}\frac{f(x)-f(a)}{x-a}
$$

subtract $f'(a)$ from both sides (left side becomes 0):

$$
0 = \lim_{x\to a}\left[\frac{f(x)-f(a)}{x-a} - f'(a)\right]
$$

common denominator:

$$
0 = \lim_{x\to a}\frac{f(x)-\big[f(a)+f'(a)(x-a)\big]}{x-a} = \lim_{x\to a}\frac{f(x)-T(x)}{x-a}
$$

the bracket is just the tangent line $T(x)$, so the numerator is the **error** $f(x)-T(x)$ (gap between curve and tangent line).

- limit = 0 means the error shrinks **faster** than the distance $x-a$
- ex: $f(x)=x^2$, $a=1$ → $T(x)=1+2(x-1)$ → $f(x)-T(x)=(x-1)^2$ → $\frac{(x-1)^2}{x-1}=x-1\to 0$ ✓
- 0.1 away → error only 0.01. any other line through $(1,1)$ has error ≈ distance, so the ratio wouldn't go to 0 → tangent line = *best* [[Linear approximation|linear approximation]]

basically what this is saying is that limit has to go to 0 cuz error has to shrink faster than distance so like diff of output than x or else we can shrink and shrink distance but we won't be approaching solution. this is why its applicable to planes->

---

### Why it's applicable to tangent planes

why its applicable to tangent planes:

- the original difference quotient doesn't generalize: can't divide by a vector $(x-a,\,y-b)$
- the error version does: divide by the **distance** to $(a,b)$ instead

$$
\lim_{(x,y)\to(a,b)}\frac{f(x,y)-T(x,y)}{||(x-a)-(y-b)||} = 0
$$

*(AI note: the denominator looks like it should be $\lVert(x-a,\,y-b)\rVert$ — a comma, not a minus — i.e. the distance from $(x,y)$ to $(a,b)$, which is the thing the bullet right above describes. Worth checking the slide.)*

so the conceptual here is that the distance between x,y distance from a,b must be shrinking slower than the error of tangent and the actual function at T

- if this holds → $f$ is **[[Differentiability|differentiable]]** at $(a,b)$ and $T(x,y)$ actually earns the name tangent plane
- just having $f_x$ and $f_y$ only gives a *candidate* $T$. partials only check two directions (along x and y axes), the limit checks **every** direction of approach

---

### Partials existing is not enough

> [!important] something important to note is that the existence of partial derivatives are lacking evidence of having a tangent plane

you can see like this:

![[Pasted image 20260921114253.png]]

here partial derivatives will all agree on 0 however there isn't actually a tangent plane here

this graph is:

$$
f(x,y) = ||x|-|y||-|x|-|y|
$$

and $(0,0)$

$$
\lim_{ (h,k) \to (0,0) } \frac{f(h,k)}{\sqrt{ h^2+k^2 }}
$$

now we can try to approach through a diagnal

$$
f(t,t)=||t|-|t||-|t|-|t| = -2|t|
$$

$$
-\frac{2|t|}{\sqrt{ 2t^2 }}=-\frac{2|t|}{\sqrt{ 2 }|t|}=-\sqrt{ 2 }
$$

dist is that just cuz its 0 0 so dist is easy

---

### The sufficient condition — continuous partials

useful sufficient condition is that;
if $f_{x}$ and $f_{y}$ are continuous near $(a,b)$, then its differentiable at that point

> [!question] im quite confused here cuz earlier we said that partial derivitives is lacking evidence
> -> difference here is that if they just exist its not enough. but if theyre continous theyre enough

> [!tip]- Claude — is checking continuity of $f_x$ just like single variable? (not my notes)
> **Mostly yes.** Checking whether $f_x$ is continuous at $(a,b)$ is the same idea as single variable: the value at the point has to equal the limit going into the point.
> $$\lim_{(x,y)\to(a,b)} f_x(x,y) = f_x(a,b)$$
>
> **Two differences:**
> 1. **The limit is two-variable.** In one var you check left and right. Here $(x,y)\to(a,b)$ can come in from anywhere, so you need polar or paths ([[Lecture 6 - Sep 16]]), not just plugging in.
> 2. **Differentiability itself is not like single variable.**
>    - 1D: if $f'(a)$ exists, $f$ is differentiable. There's nothing more to check.
>    - 2D: $f_x$ and $f_y$ existing is **not enough** (the $\big\lvert\lvert x\rvert-\lvert y\rvert\big\rvert-\lvert x\rvert-\lvert y\rvert$ example above). You need either the partials to be **continuous** (sufficient condition) or the full limit definition.
>
> So the continuity check is single-variable thinking with a 2D limit. What's actually new is that you need the check at all: in 1D you'd stop once the derivative exists.

just as in one var if $f$ is differentiable at $(a,b)$ then $f$ is continuous there.

---

### The gradient

The [[Gradient|gradient]] of $f(x,y)$ at $(a,b)$ is

$$
\nabla f(a,b) = (f_{x}(a,b), f_{y}(a,b))
$$

more generally for $f:\mathbb{R}^n\to\mathbb{R}$

$$
\nabla f=\left( \frac{\partial f}{\partial x_{1}}, \frac{\partial f}{\partial x_{2}}, \dots, \frac{\partial f}{\partial x_{n}}\right)
$$

[[Dot product|dot product]] form:

![[Pasted image 20260921121314.png]]

differentiability in $\mathbb{R}^n$

![[Pasted image 20260921121341.png]]

same limit shit just more dimensions

---

## Examples / Practice


## Summary

This lecture turns [[Partial derivative|partial derivatives]] into a [[Tangent plane|tangent plane]]. The construction is mechanical: freeze $y$ and step one unit in $x$ to get $v_1=(1,0,f_x(a,b))$, freeze $x$ and step one unit in $y$ to get $v_2=(0,1,f_y(a,b))$, [[Cross product|cross product]] them for the normal, and the plane equation rearranges into $z = f_x(a,b)(x-a)+f_y(a,b)(y-b)+f(a,b)$. The second half is the *why*. Rewriting the one-variable derivative definition as an error limit — $\lim_{x\to a}\frac{f(x)-T(x)}{x-a}=0$ — says the tangent line's error shrinks faster than the distance, which is what makes it the best [[Linear approximation|linear approximation]]. That version generalizes, because you can't divide by a vector but you can divide by the *distance* to $(a,b)$, and if that limit is 0 then $f$ is [[Differentiability|differentiable]] there and $T$ has actually earned the name. The catch: $f_x$ and $f_y$ merely existing only gives a candidate $T$, since partials check two directions while the limit checks every one — the $\big||x|-|y|\big|-|x|-|y|$ surface has both partials equal to 0 at the origin but a diagonal approach gives $-\sqrt{2}$, so no tangent plane. The rescue is the sufficient condition: if $f_x$ and $f_y$ are *continuous* near $(a,b)$, that's enough. Ends by packaging the partials into the [[Gradient|gradient]] $\nabla f(a,b)=(f_x(a,b),f_y(a,b))$, which extends to $\mathbb{R}^n$ and lets the whole thing be written as a dot product.

## Related

- [[Lecture 6 - Sep 16]] — the previous lecture; partial derivatives and the path/polar limit machinery this lecture builds directly on
- [[Lecture 4 - Sep 9]] — where the cross product, normal vector and $AX+BY+CZ=D$ plane equation came from
- [[Lecture 5 - Sep 14]] — surfaces and level curves, the objects these tangent planes sit on
- [[MATH 019 - Single and Multivariable Calculus/_Course Info|MATH 019]] — course overview

## Questions for AI / Follow-up

- **Your question from the sufficient-condition section:** "im quite confused here cuz earlier we said that partial derivitives is lacking evidence." Your own answer — exist ≠ enough, continuous = enough — looks right; worth confirming whether the slide requires $f_x,f_y$ continuous *at* $(a,b)$ or on a whole neighbourhood, and whether this theorem has a name to look up.
- The first worked example ends with $-2(x-1)-6(x-1)+4$ — the second bracket should almost certainly be $(y-1)$. Redo it and check the answer against the slide.
- The differentiability limit's denominator is written $||(x-a)-(y-b)||$ — confirm it's the distance $\sqrt{(x-a)^2+(y-b)^2}$, i.e. the norm of the vector $(x-a,\,y-b)$.
- The gradient is introduced but not used for anything yet — what does $\nabla f$ actually *do* (direction of steepest ascent, directional derivatives), and is that next lecture?
