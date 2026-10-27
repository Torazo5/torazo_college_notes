---
type: lecture
course: "[[CHEM 042 - Chemistry in the Modern World/_Course Info|CHEM 042 HM-02]]"
date:
---
# CHEM 042 — Lecture

## Reading / Prep


## Key Terms


## Notes
gradients to optimizations
an objective function is the scalar funciton whose values we want to maximize or minimize.
an extremum is either a maximum or a minimum

working on interior points and boundary points today -> idk what that means yet
interior -> use derivative to find critical points and second derivative test
exterior restict f to the boundary parametrize or use constraints later.

fermats theorem to work with today
$$
f:\mathbb{R}^n \to \mathbb{R}
$$
is differentiable and has a local maximimum or a minimum at $\mathbf{a}$ then:
$$
\nabla f(a)=0
$$
wait what what is this concpetually saying
oh yeah the maximum/minimum its just flat its like 2 vars 

critical point ->
a point $\mathbf{a} \in \mathbb{R}^n$
where 
$$
\nabla f(a)=0
$$
is a critical point of f

saddle point ->
if $\nabla f(a)=0$, but a does not correspond to a local maximum or local minimum of f then a is called a saddle point.
hmm how is that possible? if its flat its garaunteed to be a maxima or minima of some very small local area no?

good example apparenlty is 
$$
	f(x,y)=y^2-x^2
$$

> [!note] Answer: flat ≠ max/min
> No. Flat doesn't guarantee a max or min, even in 1 variable: $g(x)=x^3$ has $g'(0)=0$ but keeps rising straight through $0$.
> Flat only means no change **to first order** at that point. It says nothing about how it curves nearby. In 2 vars the surface can curve **up in one direction and down in another**. That's a saddle.

### Running the example: $f(x,y)=y^2-x^2$
1. **Critical point:** $\nabla f = \langle -2x,\ 2y\rangle = \langle 0,0\rangle \implies (0,0)$. $f(0,0)=0$, and the tangent plane is $z=0$ (flat).
2. **Along the x-axis** ($y=0$): $f(x,0) = -x^2 \le 0$ → downward parabola → looks like a **max**.
3. **Along the y-axis** ($x=0$): $f(0,y) = y^2 \ge 0$ → upward parabola → looks like a **min**.
4. **Conclusion:** any tiny disk around $(0,0)$ has points like $(\varepsilon,0)$ where $f<0$ and points like $(0,\varepsilon)$ where $f>0$. So it's not a local max or a local min → **saddle point**.

Why it's a good example: it's just 2 parabolas glued at right angles, one opening up and one down (Pringle / horse saddle shape). The surface passes **through** its horizontal tangent plane. At a real max/min it stays on one side.

![[Lecture 14 - saddle point.png]]
this just makes sense cuz that middle point is flat but its not a maximum or a minimum

basically so we can use first order to find candidates
and second order to confirm
its kinda just like normal calculus


hessian matrix:
for a twice differentiable function
the hessian matrix is:
$$
H_f(\mathbf{a}) =
\begin{bmatrix}
f_{x_1x_1} & f_{x_1x_2} & \cdots & f_{x_1x_n} \\
f_{x_2x_1} & f_{x_2x_2} & \cdots & f_{x_2x_n} \\
\vdots & \vdots & \ddots & \vdots \\
f_{x_nx_1} & f_{x_nx_2} & \cdots & f_{x_nx_n}
\end{bmatrix}
\qquad\text{2 vars: }\quad
H_f = \begin{bmatrix} f_{xx} & f_{xy} \\ f_{yx} & f_{yy} \end{bmatrix}
$$
(row $i$, column $j$ is $\frac{\partial^2 f}{\partial x_i \partial x_j}$)
when the mixed partials agree this matrix is symmetric
i have no idea what this means conceptually

> [!note] Answer: what the Hessian means
> **It's the 2nd derivative, but for many variables.** In 1D, $f''$ is one number telling you the curvature. In $n$ vars, curvature depends on which direction you go, so you need a grid of numbers:
> - **Diagonal** ($f_{xx}, f_{yy}$): how much it curves going straight along each axis.
> - **Off-diagonal** ($f_{xy}$): the "twist", i.e. how the slope in $x$ changes as you move in $y$.
>
> **Symmetric** just means the matrix is a mirror image across the diagonal: $f_{xy} = f_{yx}$ (Clairaut's theorem, true when the 2nd partials are continuous). In words, the $x$-slope changes with $y$ at the same rate that the $y$-slope changes with $x$. So the $f_{xy}$ entry and the $f_{yx}$ entry are the same number, and you only compute it once.
>
> **Why we care:** the curvature in any direction $\mathbf{u}$ is $\mathbf{u}^T H \mathbf{u}$. So $H$ stores the curvature in *every* direction at once. At a critical point:
> - curves up in every direction → **min**
> - curves down in every direction → **max**
> - up in some, down in others → **saddle**
>
> The $D$ from the second derivative test is just the **determinant** of the 2-var Hessian: $D = \det H = f_{xx}f_{yy} - f_{xy}^2$.
>
> **Your example** $f=y^2-x^2$: $H = \begin{bmatrix} -2 & 0 \\ 0 & 2 \end{bmatrix}$. That's $-2$ along $x$ (curves down) and $+2$ along $y$ (curves up), mixed signs → saddle. And $\det H = -4 < 0$ ✓.

second derivative test for $f(x,y)$
$$
D = f_{xx}(a,b)f_{yy}(a,b)-(f_{xy}(a,b))^2
$$
if D > 0 and $f_{xx}(a,b)>0$ then local minimum at a,b
if D > 0 and $f_{xx}(a,b)<0$ then $f$ has a local maximum at $(a,b)$
if D < 0 then f has a saddle point at $(a,b)$
if D = 0 the test gives no info
this is basically the discriminant, its called the determinant


basically strucutre to do ts
compute:
$$
\nabla f(x,y)=\langle f_{x}(x,y),f_{y}(x,y) \rangle
$$
how the fuck do i compute this most unclear instructions ever

solve the system:
$$
f_{x}(x,y)=0, f_{y}(x,y)=0
$$


aight example:
$$
q(x,y)=x^2-y^2+4x+2y
$$
find the critical point of q
uhh first partial derivatives first
$$
f_{x}(x,y)=2x+4
$$
$$
f_{y}(x,y)=-2y+2
$$
equate to 0 so
$$
x=-2, y=1
$$
im guessing thats critical point?
then compute determinant
$$
q_{xx}=2, q_{yy}=-2, q_{xy}=0
$$
so its just -4?
if its negative then its just a saddle point right

find the critical points of
$$
f(x,y)=x^2-3y^3-x^2y+y
$$
critical points lemme just do this quick
2x-2xy = 0
2x = 2xy
x(1-y)=0
so x = 0 or y = 1

-9y^2-x^2+1=0
sigh its a quadratic? huh wait no whats going on
if y is 1 x is undefined
if x = 0
then 
1 = 9y^2
y = +-1/3
so points are
0, 1/3
and
0, -1/3



and use the second derivative test to classify them
same as determinant.-> well not really its just one step in the thing
fxx is 2-2y
fyy is -18y
fxy is -2x
so
(2-2y)(-18y) - 4x^2
plug in 0, 1/3
(2 - 2/3) (-6)
so -8 its a saddle

then 0, -1/3
itll be positive soooo we need to check xx which is positive 
so pos pos is local minimum

when second derivative gives no info its hard to tell whats going on

global extrema
a subset $X \subseteq \mathbb{R}^n$ is **compact** if it is closed and bounded
extreme value theorem
if $X \subseteq \mathbb{R}^n$ is compact and $f: X \to \mathbb{R}$ is continuous
then $f$ achieves a global maximum and a global minimum on $X$
that is there are points $\mathbf{a}_m, \mathbf{a}_M \in X$ such that
$$
f(\mathbf{a}_m)\leq f(\mathbf{x}) \leq f(\mathbf{a}_M) \quad \text{for all } \mathbf{x} \in X
$$
general flow to do
optimize a differentiable function
1. find critical points in the interior of x
2. find cancifuck

example
$$
f(x,y)=x^2+y^2-2x
$$
on the disk:
$$
X = \{(x,y):x^2+y^2\leq 4\}
$$
$X$ is a closed, bounded disk → compact, and $f$ is a polynomial → continuous. So by the EVT a global max and min **exist**. Candidates come from 2 places: the interior and the boundary.

**Step 1: interior** ($x^2+y^2<4$). Find the critical points.
$$
f_x = 2x-2 = 0 \implies x=1, \qquad f_y = 2y = 0 \implies y=0
$$
$(1,0)$ is inside the disk ($1^2+0^2 = 1 < 4$) ✓.
$$
f(1,0) = 1 + 0 - 2 = -1
$$
(No need for the second derivative test here. We just compare values at the end.)

**Step 2: boundary** ($x^2+y^2=4$). On the circle, $x^2+y^2$ is exactly $4$, so substitute:
$$
f = 4 - 2x, \qquad -2 \le x \le 2
$$
This is a 1-variable function on an interval, so the extremes are at the endpoints:
- $x=2$: $y=0$, point $(2,0)$, $f = 0$
- $x=-2$: $y=0$, point $(-2,0)$, $f = 8$

(Same result with the parametrization $x=2\cos t,\ y=2\sin t$: $f = 4-4\cos t$, smallest at $t=0$ and largest at $t=\pi$.)

**Step 3: compare all candidates**

| point | where | $f$ |
|---|---|---|
| $(1,0)$ | interior | $-1$ |
| $(2,0)$ | boundary | $0$ |
| $(-2,0)$ | boundary | $8$ |

**Global min:** $f(1,0) = -1$
**Global max:** $f(-2,0) = 8$

Sanity check: $f = (x-1)^2 + y^2 - 1$ is the squared distance from $(1,0)$, minus 1. It's lowest at $(1,0)$ itself and highest at the point of the disk farthest from $(1,0)$, which is $(-2,0)$ ✓.

last worked example
for
$$
f(x,y)=x^3+y^3-3xy
$$
find all critical points
uhh so partial derivative
3x^2 -3y = 0
y = x^2 
bruh
and the other one is the same
3y^2 -3x = 0
x = y^2
x = x^4 
0 = x(x^3-1)
so x is either 0 or
x = + 1
so if x is 0
y is 0
(0,0)
if x is +1
y is +1
(1,1)
so we have these two and find the determinant

fxx is 6x
fyy is 6y
fxy is -3
36xy -9
0,0 is saddle
1,1 is pos value, fxx is pos so local minimum






## Examples / Practice


## Summary


## Questions for AI / Follow-up
- 
