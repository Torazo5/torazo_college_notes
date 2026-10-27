---
type: lecture
course: "[[MATH 019 - Single and Multivariable Calculus/_Course Info|MATH 019 HM-04]]"
date: 2026-09-30
tags: [math019, lecture, product-rule, quotient-rule, class-ck, clairaut, gradient, chain-rule, derivative-matrix]
cleaned_with: cleanup-note v1.4.0
cleaned_on: 2026-10-06
---
# MATH 019 — Lecture

## Reading / Prep

- [[Lecture 9 - Sep 28]] — derivative matrix sizes and the $\mathbf f = (x^2-y^2, 2xy)$ example used again in the chain rule section

## Key Terms

| Term | Meaning (your words) |
|---|---|
| [[Differentiability class\|Class $C^k$]] | until k'th partial derivative theyre all continous. $C^k$ is all partials until order k exist, and are continuous |
| [[Clairaut's theorem]] | 4.5 is basically clairaut |
| [[Chain rule]] | if f and g are funcs: f(g) derivative matrix of that is just Df(g)Dg. dont forget its matrix multiplication |

---

## Notes

### Product rule

![[Pasted image 20260930110926.png]]
what the fug is going on

> [!info] What it's saying
> It's the Calc 1 product/quotient rule, but $f, g$ take a vector in and give **one number** out.
> - $f(\mathbf{a}), g(\mathbf{a})$ are **numbers**
> - $Df(\mathbf{a}) = \nabla f(\mathbf{a}) = \left(\frac{\partial f}{\partial x_1}, \dots, \frac{\partial f}{\partial x_n}\right)$ is a **row** of partials
> - So $g(\mathbf{a})\,Df(\mathbf{a})$ = number × row → each term is a row
>
> **Why it works:** a partial derivative holds every other variable fixed, so it's just a 1-variable derivative → the normal product rule applies to each entry:
> $$\frac{\partial (fg)}{\partial x_i} = g\,\frac{\partial f}{\partial x_i} + f\,\frac{\partial g}{\partial x_i}$$
> Put all the entries in a row and you get $g\,Df + f\,Dg$.

its really confusing maybe ill just look at an example thats the best:
![[Pasted image 20260930111330.png]]

**Setup:** $f = xy$, $g = x + y^2$. Each derivative is a row $\left(\frac{\partial}{\partial x},\ \frac{\partial}{\partial y}\right)$.

### Method 1: Directly (multiply first)
$$fg = xy(x + y^2) = x^2y + xy^3$$
- $\frac{\partial}{\partial x}$ (treat $y$ as a constant): $2xy + y^3$
- $\frac{\partial}{\partial y}$ (treat $x$ as a constant): $x^2 + 3xy^2$

$$D(fg) = \begin{pmatrix} 2xy + y^3 & x^2 + 3xy^2 \end{pmatrix}$$

### Method 2: Product rule, $D(fg) = g\,Df + f\,Dg$
1. $Df = \begin{pmatrix} y & x \end{pmatrix}$
2. $Dg = \begin{pmatrix} 1 & 2y \end{pmatrix}$
3. $g\,Df = (x + y^2)\begin{pmatrix} y & x \end{pmatrix} = \begin{pmatrix} xy + y^3 & x^2 + xy^2 \end{pmatrix}$ (scalar × each entry)
4. $f\,Dg = xy\begin{pmatrix} 1 & 2y \end{pmatrix} = \begin{pmatrix} xy & 2xy^2 \end{pmatrix}$
5. Add entry by entry:
$$\begin{pmatrix} 2xy + y^3 & x^2 + 3xy^2 \end{pmatrix}$$
✅ Same as Method 1.

### Evaluate at $(1,2)$
$$D(fg)(1,2) = \begin{pmatrix} 2(1)(2) + 2^3 & 1 + 3(1)(4) \end{pmatrix} = \boxed{\begin{pmatrix} 12 & 13 \end{pmatrix}}$$

> [!tip] Shortcut: plug in first, then combine
>
> | | Formula | At $(1,2)$ |
> |---|---|---|
> | $f$ | $xy$ | $2$ |
> | $g$ | $x+y^2$ | $5$ |
> | $Df$ | $(y,\ x)$ | $(2,\ 1)$ |
> | $Dg$ | $(1,\ 2y)$ | $(1,\ 4)$ |
>
> $5(2,1) + 2(1,4) = (10,5) + (2,8) = (12,13)$ ✓
>
> This is less algebra, so it's the fastest way on an exam when you only need the value at a point.

### Same thing for the quotient rule
Same $f = xy$, $g = x + y^2$. Find $D\left(\frac{f}{g}\right)$ and evaluate at $(1,2)$.

**Check first:** we need $g \neq 0$ at the point. $g(1,2) = 1 + 4 = 5 \neq 0$ ✓

$$\frac{f}{g} = \frac{xy}{x + y^2}$$

#### Method 1: Directly (partials one at a time)
This fraction doesn't simplify, so "directly" means taking each partial with the normal Calc 1 quotient rule $\left(\frac{\text{low}\cdot d(\text{high}) - \text{high}\cdot d(\text{low})}{\text{low}^2}\right)$:
- $\frac{\partial}{\partial x}$ (treat $y$ as a constant): $\dfrac{y(x+y^2) - xy(1)}{(x+y^2)^2} = \dfrac{y^3}{(x+y^2)^2}$
- $\frac{\partial}{\partial y}$ (treat $x$ as a constant): $\dfrac{x(x+y^2) - xy(2y)}{(x+y^2)^2} = \dfrac{x^2 - xy^2}{(x+y^2)^2}$

$$D\left(\frac{f}{g}\right) = \frac{1}{(x+y^2)^2}\begin{pmatrix} y^3 & x^2 - xy^2 \end{pmatrix}$$

#### Method 2: Quotient rule, $D\left(\frac{f}{g}\right) = \dfrac{g\,Df - f\,Dg}{g^2}$
1. $Df = \begin{pmatrix} y & x \end{pmatrix}$, $Dg = \begin{pmatrix} 1 & 2y \end{pmatrix}$ (same as before)
2. $g\,Df = \begin{pmatrix} xy + y^3 & x^2 + xy^2 \end{pmatrix}$ (same as before)
3. $f\,Dg = \begin{pmatrix} xy & 2xy^2 \end{pmatrix}$ (same as before)
4. **Subtract** entry by entry (it's a minus now, not a plus):
$$g\,Df - f\,Dg = \begin{pmatrix} y^3 & x^2 - xy^2 \end{pmatrix}$$
5. Divide by $g^2 = (x+y^2)^2$, a scalar, so it divides every entry:
$$\frac{1}{(x+y^2)^2}\begin{pmatrix} y^3 & x^2 - xy^2 \end{pmatrix}$$
✅ Same as Method 1.

#### Evaluate at $(1,2)$
$$D\left(\frac{f}{g}\right)(1,2) = \frac{1}{25}\begin{pmatrix} 8 & 1 - 4 \end{pmatrix} = \boxed{\begin{pmatrix} \frac{8}{25} & -\frac{3}{25} \end{pmatrix}}$$

> [!tip] Shortcut: plug in first (same table as above: $f=2$, $g=5$, $Df=(2,1)$, $Dg=(1,4)$)
> $$\frac{5(2,1) - 2(1,4)}{5^2} = \frac{(10,5) - (2,8)}{25} = \frac{(8,-3)}{25} = \left(\tfrac{8}{25},\ -\tfrac{3}{25}\right) ✓$$

> [!warning] Common mistakes
> - The order matters: it's $g\,Df - f\,Dg$ ("low d-high minus high d-low"). Swapping them flips the sign.
> - Don't forget to divide by $g^2$, not $g$.

---

### Class $C^k$ and Clairaut

![[Pasted image 20260930112307.png]]

ok the first one makes sense but not so much for second and third

more about definition 4.4 [[Differentiability class|Class $C^k$]]:
Until k'th [[Partial derivative|partial derivative]] theyre all continous:

| Class | Meaning |
|---|---|
| $C^0$ | would be $f$ is continuous |
| $C^1$ | would mean first partial and function is continuous |
| $C^k$ | all partials until order k exist, and are continuous |
| $C^{\infty}$ | every partial derivative exists and is continuous |

4.5 is basically [[Clairaut's theorem|clairaut]]:
![[Pasted image 20260930112847.png]]

learning from this example:
![[Pasted image 20260930113045.png]]
this is a $C^\infty$ u can tell cuz all three polynomials will be safe with any input
so we can start partial derivative with x to get to yz instantly. 
then u keep going and youll get $f_{xyz}=1$

---

### Example: gradient and steepest climb

![[Pasted image 20260930113231.png]]
a) just [[Gradient|gradient]] so finnd the two and input this is hella easy
b)i dont know how to do this 

**(a)** $f = xy + y^2$
- $f_x = y$
- $f_y = x + 2y$

$$\nabla f(-2,3) = (3,\ -2 + 6) = \boxed{(3,\ 4)}$$

**(b)**
> [!info] Key fact
> The gradient **points** in the direction of steepest climb, and its **length** is how steep that climb is.
>
> **Why:** the rate of change in a unit direction $\mathbf{u}$ is
> $$D_{\mathbf{u}}f = \nabla f \cdot \mathbf{u} = |\nabla f|\,|\mathbf{u}|\cos\theta = |\nabla f|\cos\theta$$
> ($|\mathbf{u}| = 1$ since it's a unit vector). This is biggest when $\cos\theta = 1$, meaning $\theta = 0$, so walk **along** $\nabla f$ and the rate is $|\nabla f|$.

1. Length: $|\nabla f| = \sqrt{3^2 + 4^2} = \sqrt{25} = 5$
2. Unit direction, so divide by the length:
$$\mathbf{u} = \frac{\nabla f}{|\nabla f|} = \frac{(3,4)}{5} = \boxed{\left(\tfrac{3}{5},\ \tfrac{4}{5}\right)}$$
3. Rate of climb = length = $\boxed{5}$

c)
same but cos -1

$\cos\theta = -1$ means $\theta = 180°$, so walk the **opposite** way from the gradient:
$$\mathbf{u} = -\frac{\nabla f}{|\nabla f|} = -\frac{(3,4)}{5} = \boxed{\left(-\tfrac{3}{5},\ -\tfrac{4}{5}\right)}$$
Rate: $D_{\mathbf{u}}f = |\nabla f|\cos 180° = 5(-1) = \boxed{-5}$, which means the height goes **down** at a rate of 5.

d)
cos theta = 0

$\cos\theta = 0$ means $\theta = 90°$, so $\mathbf{u}$ is **perpendicular** to $\nabla f = (3,4)$. In other words, $\nabla f \cdot \mathbf{u} = 0$.

1. Trick for a perpendicular vector in 2D: **swap the entries and flip one sign**: $(3,4) \to (4,\,-3)$ or $(-4,\,3)$
2. Check: $(3,4)\cdot(4,-3) = 12 - 12 = 0$ ✓
3. Make them unit vectors. The length is $\sqrt{16+9} = 5$:
$$\boxed{\mathbf{u} = \left(\tfrac{4}{5},\ -\tfrac{3}{5}\right) \text{ or } \left(-\tfrac{4}{5},\ \tfrac{3}{5}\right)}$$

There are 2 answers because you can go either way along the level curve (the contour line of the hill), and walking along it keeps the height the same.

e)
we just input
gradient dot product u
isn't that all?


---

### Chain rule

![[Pasted image 20260930114227.png]]

> [!info] What it's saying
> It's the Calc 1 chain rule $\frac{d}{dt}f(g(t)) = f'(g(t))\,g'(t)$, with derivatives replaced by derivative matrices.
>
> **Setup:** $\mathbb{R}^n \xrightarrow{\ \mathbf{x}\ } \mathbb{R}^m \xrightarrow{\ \mathbf{f}\ } \mathbb{R}^k$
> - $\mathbf{x}$ = **inside** function ($n$ inputs → $m$ outputs)
> - $\mathbf{f}$ = **outside** function ($m$ inputs → $k$ outputs)
> - $\mathbf{f}\circ\mathbf{x}$ = do $\mathbf{x}$, then $\mathbf{f}$ ($n$ inputs → $k$ outputs)
>
> **The formula:**
> - $D\mathbf{x}(\mathbf{a})$: inside derivative, taken at $\mathbf{a}$
> - $D\mathbf{f}(\mathbf{x}(\mathbf{a}))$: outside derivative, taken at **$\mathbf{x}(\mathbf{a})$**, not at $\mathbf{a}$ (same as $f'(g(t))$ in Calc 1)
> - combine them with **matrix multiplication**
>
> **Sizes:** a derivative matrix is always (# outputs) × (# inputs)
> $$\underbrace{k\times n}_{\text{answer}} = \underbrace{k\times m}_{D\mathbf{f}}\;\underbrace{m\times n}_{D\mathbf{x}}$$
> The middle $m$'s match, so the multiplication works. Use this to check your work.
>
> **"Product of local stretches":** $\mathbf{x}$ stretches things by $D\mathbf{x}$, then $\mathbf{f}$ stretches them by $D\mathbf{f}$, so the total stretch is the two multiplied. (If $g$ doubles lengths and $f$ triples them, $f\circ g$ multiplies them by 6.)

dont forget its [[Matrix multiplication|matrix multiplication]] apparently this is quite deep and itll be bad if i missed it.

![[Pasted image 20260930114535.png]]

Everything is 1 variable ($n = m = k = 1$), so all the matrices are 1×1, i.e. just numbers. This is a warm-up to show the new formula matches Calc 1.

**(a) Substitute first**
$$f(x(t)) = \sin(1 - t^2)$$
$$\frac{d}{dt}\sin(1-t^2) = \cos(1-t^2)\cdot(-2t) = \boxed{-2t\cos(1-t^2)}$$
(This is secretly the chain rule too, just done in your head.)

**(b) Using the theorem**
1. Inside derivative: $Dx(t) = x'(t) = -2t$
2. Outside derivative: $Df(x) = \cos x$
3. Evaluate the outside derivative **at the inside function**: $Df(x(t)) = \cos(1 - t^2)$
4. Multiply:
$$D(f\circ x)(t) = \cos(1-t^2)\cdot(-2t) = \boxed{-2t\cos(1-t^2)}$$
✅ Same as (a).

> [!tip] Where this is going: when the matrices aren't 1×1
> $f(x,y)$ = the height of a hill (2 inputs → 1 output), $\mathbf{x}(t) = (x(t), y(t))$ = your path (1 input → 2 outputs):
> $$\underbrace{D(f\circ\mathbf{x})}_{1\times 1} = \underbrace{\begin{pmatrix} f_x & f_y \end{pmatrix}}_{1\times 2}\underbrace{\begin{pmatrix} x'(t) \\ y'(t) \end{pmatrix}}_{2\times 1} = f_x\,x'(t) + f_y\,y'(t)$$
> This is how fast your height changes as you walk the path: gradient · velocity, the same kind of calculation as 6(e).

> [!important]
> fuck im confused review queue but illkeep pushing and see if i can realize anything good:

---

### Example: polar map into $\mathbf f = (x^2-y^2,\ 2xy)$

![[Pasted image 20260930115340.png]]
first lets get $x(a)$ ->

$$
x(a)=\left( \sqrt{ 2 }\cos \frac{\pi}{4} , \sqrt{ 2 }\sin \frac{\pi}{4}\right)=(1,1)
$$
then $Dx(a)$ ->

$$
Dx(a)=\begin{bmatrix}
\cos \theta&-r\sin \theta \\
\sin \theta&r\cos \theta
\end{bmatrix}
$$
so for $Df(x(a))$ we get:
blah blah
just differentiate f so its a 2x2 matrix then input x(a) which is what we got above

> [!warning] Finish $D\mathbf{x}(\mathbf{a})$ first
> The matrix above is the **general** $D\mathbf{x}$. You still need to plug in $\mathbf{a}$: $r = \sqrt2$, $\theta = \frac{\pi}{4}$
> $$D\mathbf{x}(\mathbf{a}) = \begin{bmatrix} \frac{\sqrt2}{2} & -\sqrt2\cdot\frac{\sqrt2}{2} \\ \frac{\sqrt2}{2} & \sqrt2\cdot\frac{\sqrt2}{2} \end{bmatrix} = \begin{bmatrix} \frac{\sqrt2}{2} & -1 \\ \frac{\sqrt2}{2} & 1 \end{bmatrix}$$

**$D\mathbf{f}(\mathbf{x}(\mathbf{a}))$** means "$D\mathbf{f}$, evaluated at the point $\mathbf{x}(\mathbf{a})$". It's **not** "f of x". It works like $f'(3)$: find $f'$, then plug in 3.

**Step 1: general $D\mathbf{f}$.** $\mathbf{f} = (x^2 - y^2,\ 2xy)$ has 2 outputs and 2 inputs, so it's 2×2 (rows = outputs, columns = $\partial x$, $\partial y$):
$$D\mathbf{f} = \begin{bmatrix} \frac{\partial}{\partial x}(x^2-y^2) & \frac{\partial}{\partial y}(x^2-y^2) \\ \frac{\partial}{\partial x}(2xy) & \frac{\partial}{\partial y}(2xy) \end{bmatrix} = \begin{bmatrix} 2x & -2y \\ 2y & 2x \end{bmatrix}$$

**Step 2: plug in $\mathbf{x}(\mathbf{a}) = (1,1)$**, meaning $x = 1$, $y = 1$:
$$D\mathbf{f}(\mathbf{x}(\mathbf{a})) = \begin{bmatrix} 2 & -2 \\ 2 & 2 \end{bmatrix}$$

> [!warning] Common mistake
> Don't plug $\mathbf{a} = (\sqrt2, \frac{\pi}{4})$ into $D\mathbf{f}$. $\mathbf{f}$ takes $(x,y)$ as input, and $\mathbf{a}$ is an $(r,\theta)$ point. $\mathbf{f}$ only ever sees where $\mathbf{x}$ lands, which is $(1,1)$.

**(b)** Multiply the two matrices, $D\mathbf{f}(\mathbf{x}(\mathbf{a}))$ first:
$$D(\mathbf{f}\circ\mathbf{x})(\mathbf{a}) = \begin{bmatrix} 2 & -2 \\ 2 & 2 \end{bmatrix}\begin{bmatrix} \frac{\sqrt2}{2} & -1 \\ \frac{\sqrt2}{2} & 1 \end{bmatrix}$$
(try it. Check: you should get $\begin{bmatrix} 0 & -4 \\ 2\sqrt2 & 0 \end{bmatrix}$)


---

![[Pasted image 20260930120818.png]]

> [!important]
> gotta review these slides review queue

![[Pasted image 20260930120833.png]]

oh lol ts actually makes a lot of sense if f and g are funcs:
f(g) [[Derivative matrix|derivative matrix]] of that is just
Df(g)Dg

---

### Trees

> [!important]
> next is trees:
> yup review queue look at the slides bro



## Examples / Practice


## Summary

The multivariable product and quotient rules are the Calc 1 rules applied to each partial, with $Df$ and $Dg$ as rows: $D(fg) = g\,Df + f\,Dg$ and $D(f/g) = (g\,Df - f\,Dg)/g^2$. On an exam the fastest way is to plug the point in first and then combine. Class $C^k$ means all partials up to order $k$ exist and are continuous, and $C^\infty$ means every partial does, which polynomials always satisfy. Clairaut says the order of mixed partials doesn't matter for those functions, so you can pick the easiest order. The gradient gives the direction of steepest climb, and its length is the rate. The opposite direction is steepest descent, and the perpendicular directions keep the height constant. The chain rule is the Calc 1 chain rule with matrices: $D(\mathbf f\circ\mathbf x)(\mathbf a) = D\mathbf f(\mathbf x(\mathbf a))\,D\mathbf x(\mathbf a)$. The outside derivative is evaluated at $\mathbf x(\mathbf a)$, and the two are combined with matrix multiplication, which is "f(g) derivative matrix is just Df(g)Dg".

## Related

- [[Lecture 9 - Sep 28]] — derivative matrix sizes and $\mathbf f = (x^2-y^2, 2xy)$ with $Df(1,1)$, reused in the chain rule example
- [[Lecture 8 - Sep 23]] — the polar-to-Cartesian $D\mathbf x$ matrix and matrix multiplication
- [[Lecture 11 - Oct 5]] — directional derivatives, which formalise part (e) of the gradient example
- [[hw05]] — chain rule questions, including when its conditions fail
- [[hw 04]] — Clairaut and the product rule

## Questions for AI / Follow-up
- Slide 20260930112307: "the first one makes sense but not so much for second and third". What do the second and third statements say, and why do they hold?
- Part (e) of the gradient example: is it really just $\nabla f \cdot \mathbf u$ ("isn't that all?")?
- What are chain rule "trees", and how do they connect to the matrix form $D\mathbf f(\mathbf x(\mathbf a))\,D\mathbf x(\mathbf a)$?
- Do the matrix multiplication in part (b) of the polar example by hand and check it against $\begin{bmatrix} 0 & -4 \\ 2\sqrt2 & 0 \end{bmatrix}$.
