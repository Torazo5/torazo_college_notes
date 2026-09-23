---
type: lecture
course: "[[CHEM 042 - Chemistry in the Modern World/_Course Info|CHEM 042 HM-02]]"
date: 2026-09-21
---
# CHEM 042 — Lecture

## Reading / Prep


## Key Terms


## Notes
partial derivatives to tangent planes

basically finding a point and then making a tangent plane having two partial derivates and which you can create a plane i think
![[Pasted image 20260921111148.png]]
yeah so its pretty self-explanatory.
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
then we can cross product these:
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
thus plane equation:
$$
-f_{x}(a,b)(x-a)-f_{y}(a,b)(y-b)+(z-f(a,b))
$$
then re-arrange for $T(x,y)$

$$
z= f_{x}(a,b)(x-a)+f_{y}(a,b)(y-b)+f(a,b)
$$
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
- 0.1 away → error only 0.01. any other line through $(1,1)$ has error ≈ distance, so the ratio wouldn't go to 0 → tangent line = *best* linear approximation
basically what this is saying is that limit has to go to 0 cuz error has to shrink faster than distance so like diff of output than x or else we can shrink and shrink distance but we won't be approaching solution. this is why its applicable to planes->

why its applicable to tangent planes:
- the original difference quotient doesn't generalize: can't divide by a vector $(x-a,\,y-b)$
- the error version does: divide by the **distance** to $(a,b)$ instead
$$
\lim_{(x,y)\to(a,b)}\frac{f(x,y)-T(x,y)}{||(x-a)-(y-b)||} = 0
$$
so the conceptual here is that the distance between x,y distance from a,b must be shrinking slower than the error of tangent and the actual function at T
- if this holds → $f$ is **differentiable** at $(a,b)$ and $T(x,y)$ actually earns the name tangent plane
- just having $f_x$ and $f_y$ only gives a *candidate* $T$. partials only check two directions (along x and y axes), the limit checks **every** direction of approach

**something important to note is that the existence of partial derivatives are lacking evidence of having a tangent plane**
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

useful sufficient condition is that;
if $f_{x}$ and $f_{y}$ are continuous near $(a,b)$, then its differentiable at that point
im quite confused here cuz earlier we said that partial derivitives is lacking evidence
-> difference here is that if they just exist its not enough. but if theyre continous theyre enough

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

The gradient of $f(x,y)$ at $(a,b)$ is 
$$
\nabla f(a,b) = (f_{x}(a,b), f_{y}(a,b))
$$
more generally for $f:\mathbb{R}^n\to\mathbb{R}$

$$
\nabla f=\left( \frac{\partial f}{\partial x_{1}}, \frac{\partial f}{\partial x_{2}}, \dots, \frac{\partial f}{\partial x_{n}}\right) 
$$
dot product form:
![[Pasted image 20260921121314.png]]

differentiability in $\mathbb{R}^n$
![[Pasted image 20260921121341.png]]
same limit shit just more dimensions




## Examples / Practice


## Summary


## Questions for AI / Follow-up
- 
