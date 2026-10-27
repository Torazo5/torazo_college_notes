---
type: lecture
course: "[[MATH 019 - Single and Multivariable Calculus/_Course Info|MATH 019 HM-04]]"
date: 2026-10-14
---

# MATH 019 — Lecture 13

## Reading / Prep


## Key Terms
- **Divergence**: $\nabla \cdot F = P_x+Q_y+R_z$, the trace of $DF$
- **Curl**: $\nabla \times F = (R_y-Q_z,\ P_z-R_x,\ Q_x-P_y)$, read off the skew part of $DF$

## Notes
curl $F=\nabla \times F$
for $F=(P,Q,R)$, so in a derivative matrix:
$$
DF = \begin{bmatrix}
P_{x} & P_{y} & P_{z} \\
Q_{x} & Q_{y} & Q_{z} \\
R_{x} & R_{y} & R_{z}
\end{bmatrix}
$$
trace is
$$
P_x+Q_y+R_z
$$
and skew part is:

> [!warning] CHECK THE SLIDES — this is NOT what my prof wrote
> The skew-part matrix below was filled in by AI. Prof's version on the Oct 14 slides looked simpler. Compare against the slides and replace this with the prof's exact form.

$$
\frac{1}{2}\left(DF-DF^T\right)=\frac{1}{2}\begin{bmatrix}
0 & -(Q_x-P_y) & P_z-R_x \\
Q_x-P_y & 0 & -(R_y-Q_z) \\
-(P_z-R_x) & R_y-Q_z & 0
\end{bmatrix}
$$
those three pieces are exactly curl: $\nabla \times F=(R_y-Q_z,\ P_z-R_x,\ Q_x-P_y)$
divergence is:
$$
divF = \nabla \cdot F=\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}
$$
meaning of divergence. like conceptual
for planar field so 2 to 2

$$
divF = P_{x}+Q_{y}
$$
divergence as trace:
$$
divF=tr(DF)
$$

so eg u calcualte this the output is 3
the implication of 3 as the divergence value means.
- positive → more flowing out than in, so the point acts like a **source** (negative = sink, 0 = what flows in flows out)
- the size 3 is the rate: a tiny blob of volume $V$ there has about $3V$ net flow out per unit time, so it's expanding at 3× its volume
- e.g. $F=(x,y,z)$ (arrows pointing straight out from the origin): $\text{div}F=1+1+1=3$ everywhere

importnat note: zero divergence doesn't mean zero
like 
$$
F(x,y)=\langle-y,x\rangle
$$
the divergence will be 0 but theres movement the field is non zero

for functions:
$$
F_{1}(x,y)=\langle x,y \rangle
$$
$$
F_{2}(x,y)= \langle-y,x \rangle
$$
$$
F_{3}(x,y)=\langle x,-y \rangle
$$
find divergence and scalar curl for each one

for $F=\langle P,Q\rangle$:
$$
\text{div}F=\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}\qquad \text{curl}F=\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}
$$

**$F_1=\langle x,y\rangle$** ($P=x,\ Q=y$)
$$
\text{div}F_1=1+1=2\qquad \text{curl}F_1=0-0=0
$$
arrows point straight out from the origin → pure source, no spin

**$F_2=\langle -y,x\rangle$** ($P=-y,\ Q=x$)
$$
\text{div}F_2=0+0=0\qquad \text{curl}F_2=1-(-1)=2
$$
counterclockwise rotation → pure spin, no spreading

**$F_3=\langle x,-y\rangle$** ($P=x,\ Q=-y$)
$$
\text{div}F_3=1+(-1)=0\qquad \text{curl}F_3=0-0=0
$$
saddle flow: stretches out along $x$, squeezes in along $y$, and the two cancel → no net spreading and no spin, but the field still isn't zero

| | div | curl |
|---|---|---|
| $F_1=\langle x,y\rangle$ | 2 | 0 |
| $F_2=\langle -y,x\rangle$ | 0 | 2 |
| $F_3=\langle x,-y\rangle$ | 0 | 0 |

curl in three dimenions
let $F: \mathbb{R}^3 \to \mathbb{R}^3$
$$
curlF = \nabla \times F = \langle R_{y}-Q_{z},P_{z}-R_{x},Q_{x}-P_{y} \rangle
$$
equivalently using deteminant mnemonic:
$$
\nabla \times F=
\begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\
\frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
P & Q & R
\end{vmatrix}
$$
expand along the top row (cofactor expansion; the middle $\mathbf{j}$ term gets a minus sign):
$$
=\mathbf{i}\left(\frac{\partial R}{\partial y}-\frac{\partial Q}{\partial z}\right)-\mathbf{j}\left(\frac{\partial R}{\partial x}-\frac{\partial P}{\partial z}\right)+\mathbf{k}\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)
$$
the $-\mathbf{j}$ flips to $P_z-R_x$, so this matches $\langle R_y-Q_z,\ P_z-R_x,\ Q_x-P_y\rangle$
- "multiplying" $\frac{\partial}{\partial y}$ by $R$ means take $\frac{\partial R}{\partial y}$
- the $\mathbf{k}$ component $Q_x-P_y$ is exactly the 2D scalar curl from above


scalar curl in the plane:
$$
curl F = Q_{x}-P_{y}
$$
example:
$$
F(x,y,z)= \langle -y,x,0 \rangle
$$
here, $P = -y, Q= x, R=0$
therefore:
$$
curl F = \langle R_{y}-Q_{z}, P_{z}-R_{x},Q_{x}-P_{y} \rangle = \langle 0-0,0-0,1-(-1) \rangle = \langle 0,0,2 \rangle 
$$
another example:
$$
F(x,y,z)= \langle yz, xz, xy \rangle
$$
here, $P = yz, Q = xz, R = xy$
partials needed:
- $R_{y}=x,\ Q_{z}=x$
- $P_{z}=y,\ R_{x}=y$
- $Q_{x}=z,\ P_{y}=z$

therefore:
$$
curl F = \langle R_{y}-Q_{z}, P_{z}-R_{x},Q_{x}-P_{y} \rangle = \langle x-x,\ y-y,\ z-z \rangle = \langle 0,0,0 \rangle
$$
curl is zero everywhere → no spin anywhere. this is because $F=\nabla(xyz)$ (check: $\partial_x(xyz)=yz$, $\partial_y(xyz)=xz$, $\partial_z(xyz)=xy$), and the curl of a gradient is always $\mathbf{0}$



new questoin:
general linear planar field:
$$
F(x,y)= \langle ax+by, cx+dy \rangle
$$
choose coefs so that $divF = 0$, and $curlF = 4$
make ur example not a pure rotation field

here, $P = ax+by,\ Q = cx+dy$
$$
divF = P_{x}+Q_{y} = a+d \qquad curlF = Q_{x}-P_{y} = c-b
$$
so the conditions are:
- $a+d=0$
- $c-b=4$

the pure rotation choice would be $a=d=0,\ b=-2,\ c=2$ → $\langle -2y,2x\rangle$ (just $2\langle -y,x\rangle$). to avoid that, pick $a=d=0,\ b=0,\ c=4$:
$$
F(x,y)=\langle 0,\ 4x \rangle
$$
check: $divF = 0+0 = 0$ ✓, $curlF = 4-0 = 4$ ✓

why it's not a pure rotation:
- every arrow points straight up/down (no circles at all). it's a **shear** flow: right of the $y$-axis moves up, left moves down, faster the farther out you go
- $DF=\begin{pmatrix} 0 & 0 \\ 4 & 0 \end{pmatrix}$ is not skew-symmetric. it splits into $\begin{pmatrix} 0 & 2 \\ 2 & 0 \end{pmatrix}$ (symmetric, stretching/shearing) $+\begin{pmatrix} 0 & -2 \\ 2 & 0 \end{pmatrix}$ (skew, rotation). a pure rotation would have symmetric part $=0$
- curl $\neq 0$ even though nothing goes in circles: a tiny paddle wheel dropped in would still spin, because the flow on its right side is faster than on its left


curl of a gradient:
$$
f: \mathbb{R}^3 \to \mathbb{R}
$$
has continous second partial derivatives:
$$
\nabla \times (\nabla f)=0
$$
by notation this is vector field F also called curl

**proof:**

step 1: write out the gradient
$$
\nabla f = \langle f_{x}, f_{y}, f_{z} \rangle
$$
this is a vector field, so here $P = f_{x}, Q = f_{y}, R = f_{z}$

step 2: take the curl
$$
curl F = \langle R_{y}-Q_{z}, P_{z}-R_{x},Q_{x}-P_{y} \rangle
$$
- $R_{y}=f_{zy},\ Q_{z}=f_{yz}$
- $P_{z}=f_{xz},\ R_{x}=f_{zx}$
- $Q_{x}=f_{yx},\ P_{y}=f_{xy}$

therefore:
$$
\nabla \times (\nabla f) = \langle f_{zy}-f_{yz},\ f_{xz}-f_{zx},\ f_{yx}-f_{xy} \rangle
$$

step 3: Clairaut's theorem → continuous second partials means order of mixed partials doesn't matter:
$$
f_{zy}=f_{yz} \qquad f_{xz}=f_{zx} \qquad f_{yx}=f_{xy}
$$
so every component cancels:
$$
\nabla \times (\nabla f) = \langle 0,0,0 \rangle = \mathbf{0} \qquad \blacksquare
$$

why the hypothesis matters: step 3 is the only place "continuous second partials" gets used. without it $f_{xy}\neq f_{yx}$ can happen and the curl might not be zero

what it means: gradient fields never spin. contrapositive is the useful version → if $\nabla \times F \neq \mathbf{0}$, then $F$ is **not** a gradient of anything
- e.g. $\langle -y,x,0 \rangle$ has curl $\langle 0,0,2 \rangle$, so no $f$ has $\nabla f = \langle -y,x,0 \rangle$
- and $\langle yz,xz,xy \rangle = \nabla(xyz)$ had curl $\mathbf{0}$, like the theorem says

curls have zero divergence
let $F=\langle P,Q,R \rangle$ have continuous second partial derivatives:
$$
\nabla \cdot (\nabla \times F)=0
$$

**proof:**

step 1: write out the curl
$$
\nabla \times F = \langle R_{y}-Q_{z}, P_{z}-R_{x},Q_{x}-P_{y} \rangle
$$

step 2: take the divergence of that
$$
\nabla \cdot (\nabla \times F) = \frac{\partial}{\partial x}(R_{y}-Q_{z}) + \frac{\partial}{\partial y}(P_{z}-R_{x}) + \frac{\partial}{\partial z}(Q_{x}-P_{y})
$$
$$
= R_{yx}-Q_{zx}+P_{zy}-R_{xy}+Q_{xz}-P_{yz}
$$

step 3: group into pairs
$$
= (R_{yx}-R_{xy}) + (P_{zy}-P_{yz}) + (Q_{xz}-Q_{zx})
$$
Clairaut's theorem → continuous second partials means $R_{yx}=R_{xy}$, $P_{zy}=P_{yz}$, $Q_{xz}=Q_{zx}$, so every pair cancels:
$$
\nabla \cdot (\nabla \times F) = 0+0+0 = 0 \qquad \blacksquare
$$

what it means: curl fields have no sources or sinks. contrapositive is the useful version → if $\nabla \cdot G \neq 0$, then $G$ is **not** the curl of anything
- e.g. $\langle x,y,z \rangle$ has divergence $3$, so no $F$ has $\nabla \times F = \langle x,y,z \rangle$
- matches the curl of a gradient proof: same structure, mixed partials cancel in pairs


example for some more:
$$
f(x,y,z)=x^2y+yz^3
$$

$$
\nabla f = \langle 2xy, x^2+z^3,3yz^2 \rangle
$$


aight another worked example
$$
F(x,y,z)=(xz+y^2,yz+x, xy-z^2)
$$
compute div and curl
then it says" compute both diagnostic and interpret them at (1,-1,2) " which i dont relaly know what that means

"diagnostics" = div and curl. they're the two numbers you check to diagnose what the field is doing locally: div → spreading out / squeezing in, curl → spinning (and around which axis). "interpret at a point" = plug the point in and say in words what the flow does there

here, $P = xz+y^2,\ Q = yz+x,\ R = xy-z^2$

**divergence:**
- $P_{x}=z,\ Q_{y}=z,\ R_{z}=-2z$
$$
divF = z+z-2z = 0
$$
zero everywhere, not just at the point

**curl:**
- $R_{y}=x,\ Q_{z}=y$
- $P_{z}=x,\ R_{x}=y$
- $Q_{x}=1,\ P_{y}=2y$
$$
curl F = \langle R_{y}-Q_{z}, P_{z}-R_{x},Q_{x}-P_{y} \rangle = \langle x-y,\ x-y,\ 1-2y \rangle
$$

**at $(1,-1,2)$:**
$$
divF = 0 \qquad curl F = \langle 1-(-1),\ 1-(-1),\ 1-2(-1) \rangle = \langle 2,2,3 \rangle
$$

interpretation:
- div $=0$ → no net flow in or out at that point, a tiny blob keeps its volume (neither source nor sink). since div is $0$ everywhere, the whole field is incompressible
- curl $=\langle 2,2,3 \rangle \neq \mathbf{0}$ → the flow is spinning there
  - axis of spin: direction of $\langle 2,2,3 \rangle$. a tiny paddle wheel spins fastest when its axle points that way, and it spins counterclockwise looking down the axis toward you (right-hand rule: thumb along $\langle 2,2,3\rangle$, fingers curl the way it spins)
  - how fast: $|curl F| = \sqrt{4+4+9}=\sqrt{17}$, and angular speed $=\frac{1}{2}|curl F| = \frac{\sqrt{17}}{2}$ (curl $=2\omega$, like $\langle -y,x,0\rangle$ had curl $\langle 0,0,2\rangle$ for angular speed 1)
- summary at $(1,-1,2)$: swirls around $\langle 2,2,3\rangle$, no expansion (not necessarily *pure* rotation though, it can still shear like $\langle 0,4x\rangle$ did)



## Examples / Practice

## Summary
$DF$ splits into a symmetric part and a skew part. The trace gives divergence (how much $F$ spreads out). The skew part holds the curl (how much $F$ spins), with $\frac{1}{2}(DF-DF^T)v=\frac{1}{2}(\nabla\times F)\times v$.

## Questions for AI / Follow-up
- 
