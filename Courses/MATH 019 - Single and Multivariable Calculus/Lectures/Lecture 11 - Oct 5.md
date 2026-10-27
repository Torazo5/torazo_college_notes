---
type: lecture
course: "[[MATH 019 - Single and Multivariable Calculus/_Course Info|MATH 019 HM-04]]"
date: 2026-10-05
tags: [math019, lecture, directional-derivative, gradient, little-o, tangent-plane, level-surface]
cleaned_with: cleanup-note v1.4.0
cleaned_on: 2026-10-06
---
# MATH 019 — Lecture

## Reading / Prep

- [[Lecture 10 - Sep 30]] — gradient as the direction of steepest climb, and "gradient dot product u"

## Key Terms

| Term | Meaning (your words) |
|---|---|
| [[Directional derivative]] | its a derivative of $\mathbf{a}$ for direction $\mathbf{u}$. $\mathbf{u}$ must be a unit vector. pretty basic we just take a step towards the unit direction. $D_{u}f(a)=\nabla f(a)\cdot u$ |
| [[Little-o notation]] | the error term: $r(h)=o(\lvert h\rvert)$ means $\lim_{h\to 0} \frac{r(h)}{\lvert h\rvert}=0$. basically just error will dissapear as we approach step is 0 |
| [[Gradient]] | maximum directional derivative is just $\lVert\nabla f(a)\rVert$, or just negative if they want minimum (steepest neg dir) |

---

## Notes

### Directional derivative: limit definition

first topic is directional partial derivative cuz so far we've been constrained to an axis
initial formula for directional derivative:
$$
D_{u}f(a)=\lim_{ h \to 0 } \frac{f(a+hu)-f(a)}{h}
$$
seems like the basic limit def of partial derivative
main thing here is that its a derivative of $\mathbf{a}$ for direction $\mathbf{u}$
$\mathbf{u}$ must be a [[Unit vector|unit vector]] then
pretty basic we just take a step towards the unit direction

---

### Little-o notation

quick side bar is [[Little-o notation|little-o notation]] which is the error term
$$
r(h)=o(|h|)
$$
$r(h)$ as error term btw
$$
\lim_{ h \to 0 } \frac{r(h)}{|h|}=0
$$
basically just error will dissapear as we approach step is 0.
pretty basic stuff

---

### Example: directional derivative from the definition

compute [[Directional derivative|directional derivative]] from $(0,0)$:

$$
f(x,y)=y^2-3y+x^2+2x
$$
so we'lre looking for $D_{u}f(0,0)$ 

$$
a-hu = (0,0)+(hs, ht)=(hs,ht)
$$
*(AI note: probably $a+hu$ — the limit right below uses $f(a+hu)$, and the right side is a sum)*

$$
D_{u}f(0,0)=\lim_{ h \to 0 } \frac{f(hs,ht)-f(0,0)}{h}
$$
then input into the function and well get:
$$
f(hs,ht)=h^2t^2-3ht+h^2s^2+2hs
$$
then divide by h and then if it still has h its gone thus final thing is:
$$
D_{u}f(0,0)=2s-3t
$$
if our direction vector isn't unit just convert

we can also replicate axis ones if it was like $(1,0)$ for example cuz thats one unit to the x direction
---

### Directional derivative with the gradient

direction derivative formula with [[Tangent plane|tangent plane]]:
$$
D_{u}f(a)=\nabla f(a)\cdot u
$$
$f$ has to be [[Differentiability|differentiable]] at $a$ for this to work.
this just makes sense the directional shit is also just along the tangent at that point.

alright lets try to use this to learn it:
$$
f(x,y)=x^2-y^2+70
$$
[[Gradient|gradient]] first:
$$
\nabla f(x,y)=(2x, -2y)
$$
normalize vector so:
$$
u = \left( \frac{1}{\sqrt{ 2 }}, \frac{1}{\sqrt{ 2 }} \right)
$$

$$
D_{u}f(1,2)=\nabla f(1,2)\cdot u
$$
plug $(1,2)$ into the gradient:
$$
\nabla f(1,2)=(2(1), -2(2))=(2,-4)
$$
then dot with $u$:
$$
D_{u}f(1,2)=(2,-4)\cdot\left( \frac{1}{\sqrt{ 2 }}, \frac{1}{\sqrt{ 2 }} \right)=\frac{2}{\sqrt{ 2 }}-\frac{4}{\sqrt{ 2 }}=-\frac{2}{\sqrt{ 2 }}=-\sqrt{ 2 }
$$
negative so $f$ is decreasing in that direction at $(1,2)$


---

### Activity: $h(x,y)=e^x\cos y$

$$
h(x,y)=e^x\cos y
$$
1. find the unit vector u in the direction of v

$$
\frac{1}{\sqrt{ 25 }}=\frac{1}{5}
$$

$$
\frac{1}{5}(3,4)=\left( \frac{3}{5},\frac{4}{5} \right)
$$
2. $\nabla h(0,0)$

$$
(e^x\cos y,e^x(-\sin y))
$$
thats the gradient so we input 0,0

$$
(1,0)
$$
3. compute $D_{u}h(0,0)$

$$
(1,0)\cdot\left( \frac{3}{5},\frac{4}{5} \right)=\frac{3}{5}
$$
4. find the steepest increase
well if the graident is 1,0. preferably our guy uses everything on (1,0)
so steepest increase is (1,0) vector
and the max possible directional derivative will be 1?

> [!important]
> this is conceptaully easy and general 
> maximum directional derivative is just $||\nabla f(a)||$
> or just negative if they want minimum(steepest neg dir)


basically a big point of dericational derivatives is that like axises are possible but specific direction it fails. 

---

### Quick practice: $f(x,y,z)=xe^{yz}+z^2\sin x$

$$
f(x,y,z)=xe^{yz}+z^2\sin x, a = (0,1,2), v=(2,-1,2)
$$
compute the derivative at a in the direction of v
sooo normalize v
$||v||=\sqrt{ 4+1+4 }=\sqrt{ 9 }=3$
so $v = (\frac{2}{3}, -\frac{1}{3}, \frac{2}{3})$

oh shit we're suppose to get gradient which is
$$
\begin{pmatrix}
e^{yz}+z^2\cos x& xze^{yz}&xye^{yz}+2z\sin x
\end{pmatrix}
$$
now we input a so we get
$$
\begin{pmatrix}
e^2+4&0&0
\end{pmatrix}
$$

now we [[Dot product|dot product]] the vector
so ans is:
$$
\frac{2}{3}(e^2+4)
$$
is that right?
---

### Another worked example

$$
f(x,y)=xe^y+y^2, a=(2,0), v(-1,2)
$$
oh lul it only had one output so it made sense to do this im so dumb, f1, f2, etc is by comma not by addition holy shit *(AI note: this example isn't actually worked through — no gradient, unit vector or answer. Redo it from slide/handout)*

---

### Zero rate of change

to find something that is unit of rate change 0 we have to follow the guy perfect perpendicular so like if the vector of grad is $(1,2)$
we should have $(2,-1)$ also works out w dot product:
$$
(1,2)\cdot(2,-1)=0
$$
should be finezo
---

### Activity: tangent plane to $F = 7$

next activity to get ts in our brain

$$
F(x,y,z)=x^2+2y^2+z^2, a=(1,1,2)
$$

1. verify that a lies on the [[Level surface|surface]] F = 7
just input i think so:
$$
1+2+4=7
$$
so yes
2. compute $\nabla F(a)$
uhh its just one function one output 3 inputs so its easy:
$$
\begin{pmatrix}
2x&4y&2z
\end{pmatrix}
$$
then input a so:
$$
\begin{pmatrix}
2&4&4
\end{pmatrix}
$$
3. use grad to write the tangent plane to F=7 
soo we know our points so just do:
$$
0=2(x-1)+4(y-1)+4(z-2)
$$

$$
2x+4y+4z-14=0
$$

$$
2x+4y+4z=14
$$

4. find one non zero tangent direction at a
just perpendicular to it should be 
$$
2a+4b+4c=0
$$
can just do:
$$
(0,1,-1)
$$

?lul?





## Examples / Practice


## Summary

The directional derivative $D_u f(a) = \lim_{h\to 0}\frac{f(a+hu)-f(a)}{h}$ is the basic limit definition of a partial derivative, except the step goes in any unit direction $\mathbf u$ instead of along an axis. If the direction vector isn't unit, normalize it first, and $(1,0)$ just gives back the ordinary partial. Little-o notation $r(h) = o(|h|)$ is shorthand for the error vanishing faster than the step. When $f$ is differentiable at $a$, the limit simplifies to $D_u f(a) = \nabla f(a)\cdot u$, so compute the gradient, plug in the point, and dot with the unit vector. The maximum directional derivative is $\|\nabla f(a)\|$, in the gradient's own direction, and the minimum is its negative. A direction perpendicular to the gradient gives a rate of 0. For a level surface like $F = 7$, $\nabla F(a)$ is the normal, so the tangent plane is $\nabla F(a)\cdot(\mathbf x - \mathbf a) = 0$, and any vector perpendicular to $\nabla F(a)$ is a tangent direction.

## Related

- [[Lecture 10 - Sep 30]] — gradient as steepest climb/descent and the perpendicular direction trick, which this lecture formalises
- [[Lecture 7 - Sep 21]] — the tangent plane and gradient this builds on
- [[Lecture 8 - Sep 23]] — the "error shrinks faster than the step" idea that little-o notation writes compactly

## Questions for AI / Follow-up
- Quick practice: is $D_u f(a) = \frac{2}{3}(e^2+4)$ right? ("is that right?")
- "a big point of directional derivatives is that like axises are possible but specific direction it fails". What was this about? Is it the example where all partials exist but some directional derivative doesn't (so $f$ isn't differentiable)?
- Finish the second worked example: $f(x,y)=xe^y+y^2$, $a=(2,0)$, $v=(-1,2)$.
- In the last activity, why is $\nabla F(a)$ normal to the surface $F = 7$? And why does any $(a,b,c)$ with $2a+4b+4c=0$ work as a tangent direction ("?lul?")?

