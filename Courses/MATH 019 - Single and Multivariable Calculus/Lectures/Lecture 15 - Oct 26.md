---
type: lecture
course: "[[CHEM 042 - Chemistry in the Modern World/_Course Info|CHEM 042 HM-02]]"
date:
---
# CHEM 042 — Lecture

## Reading / Prep


## Key Terms


## Notes
constrined optimization problem:
maximize or minimize an obejctive funciotn $f$ while restricitn the input to a specified set, often described by an eqation:
$$
g(\mathbf{x})=C
$$
here $f$ is the objective function and $g(x)=C$ is the constraint.
f(x)(objective function here) is literally just what we're trying to actually just work with


getting back to absolute extrema on compact set
critical points of f
candidate points ont he boundary
compare the values of f at all candidates


suppose we want to optmiize $f(x,y)$ subject to:
$$
g(x,y)=C
$$
the constraint is a level curve of $g$. the value of f is just level curves of f
![[Pasted image 20261026111820.png]]

main purpose of lagrange multiplier is to find the point on the constraint curve where its tangent to the level curve.
gradient of f is perpedincular to the level curve so this lowk makes sense

if u get to optimum point, 

uhhh langurage multiplier condition lowk review queue
suppose f has a local max/min at a subject to the constraint
$$
g(x)=C
$$
then suppose $\nabla g(a) \neq 0$
there exists a scalar $\lambda \in \mathbb{R}$

$$
\nabla f(a)=\lambda \nabla g(a)
$$
the scalar $\lambda$ is called a Lagrange multiplier.
then the system to solve is:
$$
\nabla f(a)=\lambda \nabla g(a)
$$

$$
g(x)=C
$$
and solve for x and lambda

$$
g(x,y)=x^2+y^2
$$

$$
\nabla f= \langle 1,2 \rangle
$$

$$
\nabla g= \langle 2x,2y \rangle
$$
then solve for max f and min f at 5

> [!example]- Solution (AI): optimize $f(x,y)=x+2y$ subject to $x^2+y^2=5$
> $\nabla f=\langle 1,2\rangle$ means $f(x,y)=x+2y$.
>
> **Set up the system** $\nabla f=\lambda\nabla g$, $g=5$:
> $$
> 1=2\lambda x,\qquad 2=2\lambda y,\qquad x^2+y^2=5
> $$
> **Solve:** $\lambda\neq 0$ (otherwise $1=0$), so $x=\dfrac{1}{2\lambda}$ and $y=\dfrac{1}{\lambda}$, which means $y=2x$.
>
> Plug into the constraint: $x^2+(2x)^2=5 \Rightarrow 5x^2=5 \Rightarrow x=\pm 1$.
>
> **Candidates:**
> - $(1,2)$, $\lambda=\tfrac12$: $f=1+4=5$
> - $(-1,-2)$, $\lambda=-\tfrac12$: $f=-1-4=-5$
>
> **Compare:** the circle $x^2+y^2=5$ is compact, so $f$ attains both a max and a min on it.
> $$
> \boxed{\max f = 5 \text{ at } (1,2)}\qquad \boxed{\min f = -5 \text{ at } (-1,-2)}
> $$
> Check: $\nabla g=\langle 2x,2y\rangle\neq 0$ everywhere on the circle, so Lagrange catches every candidate.

main tthing is to just input and wsee which is lower

![[Lagrange - x+2y on circle.png]]
> [!note] Reading the picture (AI)
> Gray lines are level curves of $f$ ($x+2y=c$). Most of them **cross** the circle (like the dashed $c=2$ line), so $f$ is still changing there. The extremes are the two lines that just **touch** the circle: $c=5$ at $(1,2)$ (max) and $c=-5$ at $(-1,-2)$ (min). At those points $\nabla f$ (green) and $\nabla g$ (purple) lie on the same line. At the max they point the same way ($\lambda=\tfrac12>0$), and at the min they point opposite ways ($\lambda=-\tfrac12<0$).
oh ok basically we're just tracing our constraint function and when we suddenly have a parallel gradient it means we hit like a match point


problem
find the point in the plane:
$$
x+2y+z=6
$$
closest to the origin

> [!example]- Solution (AI)
> **Objective:** distance to the origin is $\sqrt{x^2+y^2+z^2}$. Minimize the *squared* distance instead because it has the same minimizer and no square root:
> $$
> f(x,y,z)=x^2+y^2+z^2
> $$
> **Constraint:** $g(x,y,z)=x+2y+z=6$
>
> **Gradients:**
> $$
> \nabla f=\langle 2x,2y,2z\rangle,\qquad \nabla g=\langle 1,2,1\rangle
> $$
> **System** $\nabla f=\lambda\nabla g$, $g=6$:
> $$
> 2x=\lambda,\qquad 2y=2\lambda,\qquad 2z=\lambda,\qquad x+2y+z=6
> $$
> So $x=\tfrac{\lambda}{2}$, $y=\lambda$, $z=\tfrac{\lambda}{2}$. Plug in:
> $$
> \tfrac{\lambda}{2}+2\lambda+\tfrac{\lambda}{2}=3\lambda=6 \Rightarrow \lambda=2
> $$
> $$
> \boxed{(x,y,z)=(1,2,1)},\qquad \text{distance}=\sqrt{1+4+1}=\sqrt6
> $$
> **Why it's a min (the plane isn't compact):** there's only one candidate, and $f\to\infty$ as you move far out on the plane, so this candidate has to be the minimum. There is **no max**, because you can get arbitrarily far from the origin.
>
> **Picture:** $\nabla g=\langle1,2,1\rangle$ is the plane's normal vector, and the answer $(1,2,1)$ is a multiple of it. The closest point is where you go straight out from the origin along the normal until you hit the plane.
> 


determine the extreme values of 
$$
f(x,y)=6x+8y+15
$$
with constriant
$$
x^2+y^2=1
$$

> [!example]- Solution (AI)
> $g(x,y)=x^2+y^2=1$
> $$
> \nabla f=\langle 6,8\rangle,\qquad \nabla g=\langle 2x,2y\rangle
> $$
> **System** $\nabla f=\lambda\nabla g$, $g=1$:
> $$
> 6=2\lambda x,\qquad 8=2\lambda y,\qquad x^2+y^2=1
> $$
> $\lambda\neq0$ (otherwise $6=0$), so $x=\dfrac{3}{\lambda}$ and $y=\dfrac{4}{\lambda}$. Plug in:
> $$
> \frac{9}{\lambda^2}+\frac{16}{\lambda^2}=1 \Rightarrow \lambda^2=25 \Rightarrow \lambda=\pm5
> $$
> **Candidates:**
> - $\lambda=5$: $\left(\tfrac35,\tfrac45\right)$, $f=\tfrac{18}{5}+\tfrac{32}{5}+15=10+15=25$
> - $\lambda=-5$: $\left(-\tfrac35,-\tfrac45\right)$, $f=-10+15=5$
>
> **Compare:** the circle is compact, so both extremes exist.
> $$
> \boxed{\max f=25 \text{ at } \left(\tfrac35,\tfrac45\right)}\qquad \boxed{\min f=5 \text{ at } \left(-\tfrac35,-\tfrac45\right)}
> $$

oh its literally the same ideas as single variable.
we just want a place where its like a flat top or bottom
so we need to find somewhere where we can move on our constraint but wont change our f 
which is satisfied when the gradients are parallel


problem
determine the absowlute maximum and minimum of:
$$
f(x,y)=x^2+y^2-x
$$


$$
g(x,y)=x^2+y^2, g(x,y)=1
$$
etc etc:
$$
y(1-\lambda)=0
$$
so either $y=0$ or $\lambda=1$
then we compute the cases

lagrange multiplier conditions assumes that:
$$
\nabla g(\mathbf{a}) \neq 0
$$
what if there was two constraints:
feasible set usually has even fewer allowed direction:
$$
g=C, h=D
$$

$$
\nabla f=\lambda \nabla g + \mu \nabla h
$$

intrepration of this:

precision checks:
if grad f = lambda grad g
must lambda be positive -> na cuz it can be parallel in the other direction

in the cirlc example why are there two. -> hm the basic answer is just cuz there is a min and max but that depends on the other function? is this general to circle?



find the max and min values of:
$$
f(x,y)=xy
$$
to constraint 
$$
x^2+y^2=1
$$

> [!example]- Solution (AI)
> $$
> \nabla f=\langle y,x\rangle,\qquad \nabla g=\langle 2x,2y\rangle
> $$
> **System** $\nabla f=\lambda\nabla g$, $g=1$:
> $$
> y=2\lambda x,\qquad x=2\lambda y,\qquad x^2+y^2=1
> $$
> Substitute the second into the first: $y=2\lambda(2\lambda y)=4\lambda^2 y$, so $y(1-4\lambda^2)=0$.
> - $y=0$: then $x=2\lambda\cdot0=0$, but $(0,0)$ is not on the circle. ❌
> - $4\lambda^2=1 \Rightarrow \lambda=\pm\tfrac12$
>
> **$\lambda=\tfrac12$:** $y=x$, so $2x^2=1 \Rightarrow x=\pm\tfrac{1}{\sqrt2}$
> - $\left(\tfrac{1}{\sqrt2},\tfrac{1}{\sqrt2}\right)$ and $\left(-\tfrac{1}{\sqrt2},-\tfrac{1}{\sqrt2}\right)$: $f=\tfrac12$
>
> **$\lambda=-\tfrac12$:** $y=-x$, so $2x^2=1 \Rightarrow x=\pm\tfrac{1}{\sqrt2}$
> - $\left(\tfrac{1}{\sqrt2},-\tfrac{1}{\sqrt2}\right)$ and $\left(-\tfrac{1}{\sqrt2},\tfrac{1}{\sqrt2}\right)$: $f=-\tfrac12$
>
> **Compare:** the circle is compact, so both extremes exist.
> $$
> \boxed{\max f=\tfrac12 \text{ at } \pm\left(\tfrac{1}{\sqrt2},\tfrac{1}{\sqrt2}\right)}\qquad \boxed{\min f=-\tfrac12 \text{ at } \pm\left(\tfrac{1}{\sqrt2},-\tfrac{1}{\sqrt2}\right)}
> $$
> **Note:** this gives **4 points but only 2 values of $\lambda$**. Each λ gives two points, and the max and the min each happen at two places.

![[Lagrange - xy on circle.png]]
> [!note] Reading the picture (AI)
> Level curves of $f=xy$ are **hyperbolas** ($xy=c$). Most of them cross the circle (like the dashed $xy=0.2$). The hyperbolas $xy=\tfrac12$ (red) and $xy=-\tfrac12$ (blue) each touch the circle at **two** points, so there are 4 tangent points total. At every one of them $\nabla f$ (green) and $\nabla g$ (purple) lie on the same line. They point the same way at the max points ($\lambda=\tfrac12$) and opposite ways at the min points ($\lambda=-\tfrac12$).

![[Lagrange - xy on circle 3D.png]]
> [!note] 3D view (AI)
> The surface is $z=xy$ (a saddle), and the black circle on the floor is the constraint. Lifting the circle straight up onto the surface gives the **green path**, which shows $f$'s value as you walk around the circle. The path goes up and down like a wavy ring: **2 peaks** (red, $f=\tfrac12$) and **2 valleys** (blue, $f=-\tfrac12$). At each peak or valley the path is momentarily flat. That's the "$f$ isn't changing along the curve" condition that Lagrange finds.

finally all pieces together here we're basically just finding the min and max on the main surface but you can only trace/move around with the constraint(circle in this case)
just a bunch of fancy methods to work with teh thing



## Examples / Practice


## Summary


## Questions for AI / Follow-up
- 
