---
type: lecture
course: "[[MATH 019 - Single and Multivariable Calculus/_Course Info|MATH 019 HM-04]]"
date: 2026-09-16
tags:
  - math019
  - lecture
  - multivariable-limits
  - path-test
  - polar-coordinates
  - squeeze-theorem
  - continuity
  - partial-derivatives
cleaned_with: cleanup-note v1.3.0
cleaned_on: 2026-09-21
---
# MATH 019 — Lecture

## Reading / Prep


## Key Terms

| Term | Meaning (your words) |
| ---- | -------------------- |
| [[Multivariable limit]] | in 2d we can approach from positive or from negative but 3d, theoretically we can go from all directions |
| [[Epsilon-delta definition]] | its about the range of inputs and error — we need our distance to be under delta and our output to be within error |
| [[Delta]] | the radius of our sphere |
| [[Path test]] | we can make our approach just different functions (graphs/curves) — if two paths give two diff values, the limit doesn't exist |
| [[Polar coordinates]] | we're replicating approaching from infinite and all combinations of approaching a value, thus if this becomes a value theres no doubt a limit exists here |
| [[Squeeze theorem]] | really freaking useful because r goes down to 0 — its really easy to decrease one var to go down to 0 |
| [[Continuity]] | $f$ is continuous at $a$ if $\lim_{x \to a}f(x)=f(a)$ — if something exists there and we get the same value from a limit value |
| [[Partial derivative]] | we want to find the slope but we're in three dimensions so the concept is to just freeze something and then find the slope from there |
| [[Higher-order partial derivative]] | prof mentioned this is probably the harder part cuz the work itself is fine |
| [[Mixed partial derivative]] | the special case $f_{xy}=f_{yx}$ when $f$ is continuous on an open set |

---

## Notes

### Why limits are harder in 3d

limits in 3d graphs are much much difficult cuz in 2d we can approach from positive or from negative but 3d, theoretically we can go from all directions.

instead we can consider a small ball. thats like geometrically very similar to what we were doing with [[Epsilon-delta definition|$\epsilon-\delta$ limits]] cuz its about the range of inputs and error.

main general statement of any dimension limit:

$$
\lim_{ x \to a } f(x)=L
$$

basically the existence of the ball is pretty intuitive with how far we have to be from the designated point.

$$
||x-a|| < \delta
$$

![[Pasted image 20260916111838.png]]

so basically we need our distance to be under delta and our output to be within error

> [!important] the delta is the radius of our sphere

---

### Limit laws

![[Pasted image 20260916112008.png]]

use the limit laws to solve: for example this one we just do numerator and denominator separately

like for numerator:

$$
\lim_{ (x,y) \to (1,2) } 3x^2y+\lim_{ (x,y) \to (1,2) } xy
$$

$$
3(\lim_{ (x,y) \to (1,2) } x^2)(\lim_{ (x,y) \to (1,2) } y)+(\lim_{ (x,y) \to (1,2) } x)(\lim_{ (x,y) \to (1,2) } y)
$$

and then just input u get it

---

### Proving a limit does NOT exist — approach paths

![[Pasted image 20260916112232.png]]

same as limits honestly but different direction as kinda weird in 3d so how would we do that

ah so we can make our approach just different functions (graphs/curves). like these are directions we can approach:

1. set $x=0$ and see what values we get
2. set $y = 0$ and see what values we get
3. then we can do a line: set $x=y$ then we approach with a different method
4. or even better curves: set $y=x^2$ then approach we have a curved approach

#### Example — two axes disagree

![[Pasted image 20260916112604.png]]

we can set x = 0:

$$
\lim_{ y \to 0 } \frac{2y^2}{y^2} = 2
$$

let $y=0$

$$
\frac{\lim_{ x \to 0 }x^2}{x^2} = \lim_{ x \to 0 } 1=1
$$

two diff values -> limit doesn't exist

visually we just did this:

![[Pasted image 20260916112801.png]]

we approached with a certain direction

#### Example — axis vs the line $y=x$

![[Pasted image 20260916113028.png]]

now lets try this: let $x=0$:

$$
\lim_{ y \to 0 } \left( \frac{0}{y^2} \right) = \lim_{ y \to 0 } = 0
$$

since when was this limit true(ai question) *(AI note: the middle term `\lim_{y \to 0} =` has nothing after it — looks like a `0` got dropped while typing, so it should read $\lim_{y\to0} 0 = 0$; that would also answer your question, since the quotient is identically 0 the whole way in. Double-check against the slide.)*

let y = x:

$$
\lim_{ x \to 0 } \frac{x^2}{x^2+x^2} = \lim_{ x \to 0 } \frac{1}{2} = \frac{1}{2}
$$

don't match, limit does not exist

![[Pasted image 20260916113515.png]]

can kinda visualize the y=x hitting the 0.5 if that makes sense lol

![[Pasted image 20260916113538.png]]

x=0 approaches y and y = 0 wouldve given us the same thing

#### Example — when straight lines aren't enough

![[Pasted image 20260916113602.png]]

lets try this now

| path | result |
| ---- | ------ |
| $y=mx$ | 0 |
| $y=x^2$ | 0 |
| $x=y^2$ | $\frac{1}{2}$ — doesn't agree |

![[Pasted image 20260916113953.png]]

the diagram is a bit chopped here but basically the logic is that the way that the surface's slope works, anything other than x=y^2 would result in going down and down until 0. thus any straight line can't survive the slop.e

u can tell theres one flat surface on the top of the hill but its curved and the only way to get to the end of that is the specific curve. kinda like to only get to other values we need a very specific path or else we'll just fall. imagine we have to code the entry beforehand and we need it to get a diff value to prove limit doesn't exist at some point

> [!note] link to desmos if i ever get confused: [link](https://www.desmos.com/3d/qlrpmodemh)

---

### Proving a limit DOES exist — polar coordinates

next we'll look at [[Polar coordinates|polar coordinates]] to understand how we can prove a limit DOES exist.

$$
\lim_{ (x,y) \to (0,0) } \frac{xy^2}{x^2+y^2} = \lim_{ r \to 0^+ } \frac{(r\cos \theta)^2(r\sin \theta)}{r^2}
$$

*(AI note: the exponents look swapped between the two sides — $xy^2$ converts to $(r\cos\theta)(r\sin\theta)^2$, whereas $(r\cos\theta)^2(r\sin\theta)$ is $x^2y$. Everything below follows consistently from the $x^2y$ version and the answer is 0 either way, so just check which one the slide actually had.)*

change to polar coordinates above and then we want to approach that point so we decrease r to get closer to that point.

> [!warning] we also need to make sure its going from positive or else the trig fucks up

also math for denom btw:

![[Pasted image 20260916114600.png]]

then we go further with expression:

$$
\lim_{ r \to 0 } r\cos^2\theta \sin \theta
$$

#### Why the squeeze theorem works here

we need [[Squeeze theorem|squeeze theorem]] now: (gonna have to check this rq but this seems pretty intuitive)

basically its really freaking useful because r goes down to 0. as in its really easy to decrease one var to go down to 0. especially when its r in this case.

because its polar coordinates with theta we're replicating approaching from infinite and all combinations of approahing a value thus if this becomes a value theres no doubt a limit exists here. in previous examples we tried shit until something could've aligned with a sus approach but now we're just saying everything that approaches this.

then because we know

$$
-1 \leq \cos^2\theta \sin \theta \leq 1
$$

we know that

$$
\lim_{ r \to 0 } -r \leq \lim_{ r \to 0 } r\cos^2\theta \sin \theta \leq \lim_{ r \to 0 } r
$$

*(AI note: the middle term was written as $\lim_{r\to0}\cos^2\theta\sin\theta$ without the $r$ — added it back here so the three terms match the $-1\le\cos^2\theta\sin\theta\le1$ line multiplied through by $r$. Flagging in case you meant something else.)*

and we know the two edges must be 0 so this limit is also perfect convergence to 0 so its perfectly done.

#### Chill variant

![[Pasted image 20260916115317.png]]

pretty chill variant (no theta so its actually really easy):

$$
\lim_{ (x,y) \to (0,0) } \frac{(x^2+y^2)^2}{x^2+y^2} = \lim_{ r \to 0 } \frac{(r^2)^2}{r^2} = \lim_{ r \to 0 } r^2 = 0
$$

very clean as u can see

---

### Continuity

next: [[Continuity|continuity]]

$f$ is continuous at $a$ if $\lim_{ x \to a }f(x)=f(a)$

same logic as in one variable, its just that if something exists there and we get the same value from a limit value.

![[Pasted image 20260916115818.png]]

simple example:

$$
\lim_{ (x,y) \to (0,0) } \frac{\sin(x^2+y^2)}{x^2+y^2} = c
$$

$$
\lim_{ r \to 0 } \frac{\sin(r^2)}{r^2}
$$

use $u = r^2$

$$
\lim_{ u \to 0 } \frac{\sin(u)}{u} = 1
$$

thus $c=1$

---

### Partial derivatives

next is [[Partial derivative|partial derivates]]: the idea is that we want to find the slope but we're in three dimensions so the concept is to just freeze something and then find the slope from there:

> [!note] bit confused but lets just keep going for the time being

the usual definition fundamental rule of calculus lies in the idea that

![[Pasted image 20260916120342.png]]

its as simple as that we know this

but for partial derivative is:

$$
\lim_{ h \to 0 } \frac{f(a+h,b)-f(a,b)}{h}
$$

also just notation stuff:

$$
\frac{\partial f}{\partial x}(a,b) = f_{x}=D_{x}f
$$

#### Example — $f(x,y,z) = x^3y - \cos(yz) + z^2$

now a simple questoin:

![[Pasted image 20260916120525.png]]

so we find the partial derivative which is just of each one:

$$
f_{x}=\frac{\partial f}{\partial x} = 3x^2y
$$

$$
f_{y}=\frac{\partial f}{\partial y} = x^3+z\sin(yz)
$$

basically we just take the derivative in respect of the variable we want to do by. is that the one we're freezing? im a bit confused ill be honest(ai help)

---

### Higher-order partial derivatives

standard notation (prof mentioned this is probably the harder part cuz the work itself is fine)

$$
\frac{\partial}{\partial x}\left( \frac{\partial f}{\partial x} \right) =(f_{x})_{x}=f_{xx}
$$

$$
\frac{\partial}{\partial y}\left( \frac{\partial f}{\partial x} \right) = \frac{\partial^2f}{\partial y\partial x}
$$

> [!important] BIG NOTE: is that we have to start differentiating from the right to the left on the denom here. As in we do partial x then partial y
>
> but if its in this notation:
> $$(f_{x})_{y}=f_{xy}$$
> THIS ONE: its differentiation from left so x first, then y
>
> these are the two most important things

| notation | read order |
| -------- | ---------- |
| $\dfrac{\partial^2 f}{\partial y \partial x}$ | right → left, so $x$ first then $y$ |
| $f_{xy}=(f_{x})_{y}$ | left → right, so $x$ first then $y$ |

in the special case of:

$$
f_{xy}=f_{yx}
$$

if $f$ is continuous on an open set, then (this is true? idk ai note help)

#### Example 11 — $f(x,y) = y^2e^{\sqrt{1+y^2}} + \ln(x^2+y^2)$, find $f_{yx}$

then for a question like this:

![[Pasted image 20260916121302.png]]

so differentiate in terms of x so parital derivative with x first, then we run a partial derivative of that with y

so like if u do x first u get rid of that first component, then with the remaining easy component just re-run with y

so like

$$
f_{x} = \frac{2x}{x^2+y^2}
$$

then we do

$$
f_{xy} = \frac{\partial}{\partial y}\left[ 2x(x^2+y^2)^{-1} \right] = 2x \cdot (-1)(x^2+y^2)^{-2}(2y) = -\frac{4xy}{(x^2+y^2)^2}
$$

and since the question asked for $f_{yx}$, invoke the shortcut from the slide ($f_{yx}=f_{xy}$):

$$
f_{yx} = -\frac{4xy}{(x^2+y^2)^2}
$$

*(AI note: this is the "do this later" you left — filled in by AI, not from the lecture, so check it against the worked solution. The chain rule step is the only real move: $\partial_y (x^2+y^2)^{-1} = -(x^2+y^2)^{-2}\cdot 2y$. Note the whole $y^2e^{\sqrt{1+y^2}}$ term is already gone because it died in the $f_x$ step — which is exactly the shortcut the slide was selling.)*

---

## Examples / Practice


## Summary

This lecture is about what happens to [[Multivariable limit|limits]] once you have more than one input. The core problem is that in 2d you only approach from the left or the right, but in 3d you can come in from every direction at once, so the [[Epsilon-delta definition|$\epsilon-\delta$]] setup gets rephrased as a ball: get the input within $\delta$ of the point ($||x-a||<\delta$) and the output has to land within the error. Limit laws still work normally — split numerator and denominator and plug in. The interesting half is the two opposite jobs. To prove a limit **doesn't** exist you use the [[Path test|path test]]: come in along $x=0$, $y=0$, $y=x$, $y=x^2$, $x=y^2$ — and if any two paths give different values you're done. The last example is the warning that straight lines aren't always enough, since the surface's slope drags every line down to 0 and only the one specific curve $x=y^2$ reaches $\frac{1}{2}$. To prove a limit **does** exist you convert to [[Polar coordinates|polar coordinates]], because letting $r \to 0^+$ covers every direction at once instead of guessing paths one at a time, and then [[Squeeze theorem|squeeze]] the trig factor between $-r$ and $r$ so both edges go to 0. [[Continuity|Continuity]] is then the same one-variable idea ($\lim_{x\to a}f(x)=f(a)$). The lecture ends by starting [[Partial derivative|partial derivatives]] — freeze one variable, take the ordinary slope in the other — and the notation trap for [[Higher-order partial derivative|higher-order]] ones: $\frac{\partial^2f}{\partial y \partial x}$ reads right-to-left while $f_{xy}$ reads left-to-right, though both happen to mean $x$ first here, and [[Mixed partial derivative|mixed partials]] commute when $f$ is continuous on an open set.

## Related

- [[Lecture 5 - Sep 14]] — the previous lecture; the level curves and sections used for visualising surfaces are what you're now taking limits and slopes on
- [[Lecture 7 - Sep 21]] — next lecture: partial derivatives used to build tangent planes
- [[Lecture 4 - Sep 9]] — planes and vectors, where the $||\vec{v}||$ norm notation used in $||x-a||<\delta$ comes from
- [[MATH 019 - Single and Multivariable Calculus/_Course Info|MATH 019]] — course overview

## Questions for AI / Follow-up

- **Your question from the partial derivatives section:** "we take the derivative in respect of the variable we want to do by — is that the one we're freezing?" Short version: no, it's the opposite — you freeze the *other* variables and differentiate with respect to the one in the subscript. Worth confirming, since getting this backwards would flip every answer.
- **Your question on $f_{xy}=f_{yx}$:** "this is true? idk." It has a name and a precise hypothesis — ask whether the condition is that $f$ is continuous, or that the *second partials* are continuous on the open set, because the slide's phrasing and yours may differ. (Is this Clairaut's / Schwarz's theorem?)
- **Your note on the squeeze theorem:** "gonna have to check this rq." Why is it valid to squeeze a function of both $r$ and $\theta$ using bounds that only involve $r$ — what makes the $\theta$ dependence safe to ignore?
- The $x=0$ path in the second example is written as $\lim_{y\to0} = 0$ with a missing term — check the slide for what that middle expression was supposed to be.
- The polar conversion of $\frac{xy^2}{x^2+y^2}$ has its exponents swapped relative to the numerator — worth confirming which version the slide used, even though the answer is 0 either way.
