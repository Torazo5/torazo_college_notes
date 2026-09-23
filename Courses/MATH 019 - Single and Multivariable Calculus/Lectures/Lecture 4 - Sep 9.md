---
type: lecture
course: "[[MATH 019 - Single and Multivariable Calculus/_Course Info|MATH 019 HM-04]]"
date: 2026-09-09
tags: [math019, lecture, determinant, cross-product, triple-product, planes, vectors]
cleaned_with: cleanup-note v1.3.0
cleaned_on: 2026-09-21
---
# MATH 019 — Lecture

## Reading / Prep


## Key Terms

| Term | Meaning (your words) |
|---|---|
| [[Determinant]] | The straight lines around a matrix; for 2×2 it's $ad-bc$ (latex suite: `vmatrix`; normal brackets are `bmatrix`) |
| [[Minor]] | In a 3×3, take out the row and column of the target variable — the remaining 2×2 is the minor |
| [[Cofactor expansion]] | Use the minors of the top row to find the determinant; choose the row with convenient values (more zeros = easier) |
| [[Cross product]] | Input the two vectors as rows under $i,j,k$ and take the determinant |
| [[Right hand rule]] | Why order matters: $i\times j = -(j\times i)$ |
| [[Scalar triple product]] | $\vert(a\times b)\cdot c\vert$ — volume of the parallelepiped |
| [[Normal vector]] | $\vec{n}=(A,B,C)$, perpendicular to the plane |
| [[Plane equation]] | $AX+BY+CZ=D$ — the coefficients of $X,Y,Z$ **are** the normal vector |

---

## Notes

### Determinants

Determinants in matrices

the lines mean determinant and is notated by the straight lines(in latex suite just type `vmatrix`)
normal ones are `bmatrix`

$$
\begin{vmatrix}
a&b \\ \\
c & d
\end{vmatrix}
= ad-bc
$$

so

#### Step 1 — Find the minors

in a 3x3, take out the row and column of the target variable and the remaining 2x2 is what we call the [[Minor|minor]]

use the minors of the top row to find the determinant:

$$
\begin{vmatrix}
a&b&c \\
d&e&f \\
g&h&i
\end{vmatrix}
= +a
\begin{vmatrix}
e&f \\
h&i
\end{vmatrix}
-b
\begin{vmatrix}
d&f \\
g&i
\end{vmatrix}
+c
\begin{vmatrix}
d&e \\
g&h
\end{vmatrix}
$$

choose the row with convinient values because theyll give some values but its more easy to calculate with more zeros for example.

#### Step 2 — Get the signs

to find the sign of the rows use this:

$$
\begin{bmatrix}
+&-&+ \\
-&+&- \\
+&-&+
\end{bmatrix}
$$

#### Step 3 — Or use the shortcut

shortcut for this can be done by

$$
aei+bfg+cdh-ceg-afh-bdi
$$

---

### Cross product

![[Pasted image 20260909111751.png]]

$$
a=(2,1,-1)
$$

$$
b=(-1,3,2)
$$

$$
a\times b = \begin{vmatrix}
i&j&k \\
2&1&-1 \\
-1&3&2
\end{vmatrix}
$$

input as rows and i,j,k is the cross product vector

#### Shortcut method

use the shortcut method

$$
2i+j+6k-(-k)-(-3i)-(4j)
$$

$$
2i+j+7k+3i-4j = 5i-3j+7k
$$

$$
(5,-3,7)
$$

#### Minor method

$$
i\begin{vmatrix}
1&-1 \\
3&2
\end{vmatrix}
-j\begin{vmatrix}
2&-1 \\
-1&2
\end{vmatrix}
+k\begin{vmatrix}
2&1 \\
-1&3
\end{vmatrix}
$$

$$
i(2-(-3))-j(4-1)+k(6-(-1))
$$

$$
i(5)-j(3)+k(7)
$$

$$
(5,-3,7)
$$

---

### Cross product as area

![[Pasted image 20260909112805.png]]

area of parallelogram
base x height thus

$$
||a||*||b||\sin \theta = ||a\times b||
$$

for

$$
a\times a = \vec{0}
$$

because $\theta$ = 0 so the mag is 0, doesn't mean the answer is just 0, it means the mag is 0

> [!important] Order matters
> remember that order matters for vector(**IMPORTANT**)
>
> $$
> i\times j= -(j\times i)
> $$
>
> think of [[Right hand rule|right hand rule]]

> [!question] QUESTION
> if $i\times j=k$
> why is $2i\times 3j=6k$ ?

---

### Area of a triangle from two vectors

$$
\vec{AB} = (3,2)
\qquad
\vec{AC} = (-2,3)
$$

![[Pasted image 20260909114518.png]]

$$
||\vec{AB}\times \vec{AC}||
$$

is area of parallogram
so area of ABC is just that divided by 2 cuz its half of a parallogram

then calcualte $\vec{AB}\times \vec{AC}$

$$
\begin{vmatrix}
i&j&k \\
3&2&0 \\
-2&3&0
\end{vmatrix}
$$

u get 13k, so $(0,0,13)$
so  $||\vec{AB}\times \vec{AC}||$

$$
\sqrt{ 13^2 } = 13
$$

so area is $\frac{13}{2}$

---

### Scalar triple product

![[Pasted image 20260909114828.png]]

**what is going on here i have no clue**

> [!tip]- Claude desc — scalar triple product (not my notes)
> **Left figure** is the same parallelogram area idea: $\theta$ is between $a$ and $b$, and $\|b\|\sin\theta$ is the *true height* (the little right angle square), not the slant side $\|b\|$.
>
> **Boxed formulas** — the sin/cos pair:
> $$\text{Area} = \|a\|\|b\|\sin\theta = \|a\times b\|$$
> $$\|a\|\|b\|\cos\theta = a\cdot b$$
>
> **Bottom left is the new part.** The figure is now a *box* (parallelepiped): $a$ and $b$ make the base, $c$ is the third edge lifting out of it.
> $$\left|(a\times b)\cdot c\right| = \left|\begin{matrix} a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \\ c_1 & c_2 & c_3\end{matrix}\right|$$
> This is the **volume of that box**.
>
> **Why:** volume = (base area)(height), same as before.
> - base = parallelogram from $a$ and $b$ → area $= \|a\times b\|$
> - height ≠ $\|c\|$ ($c$ is slanted). You need $c$'s component perpendicular to the base — and $a\times b$ *is* that perpendicular direction. So with $\phi$ = angle between $c$ and $a\times b$: height $= \|c\||\cos\phi|$
>
> $$\text{Volume} = \|a\times b\|\cdot\|c\||\cos\phi| = |(a\times b)\cdot c|$$
>
> The dot product does the projection for free. Cross product gives base area AND the perpendicular direction in one object; dot product measures $c$ against it.
>
> **Two details:**
> - **absolute value bars** — the determinant can be negative (sign = orientation, right vs left handed). Volume can't be negative, so strip the sign.
> - **it's just one determinant** — $(a\times b)\cdot c$ expands into exactly the $aei+bfg+cdh-ceg-afh-bdi$ pattern from earlier. So don't compute cross then dot; stack the 3 vectors as rows, take one $3\times3$ determinant.
>
> **Useful corollary:** if triple product $=0$, the box has zero volume → the 3 vectors are **coplanar**. One-line test for "are these points on the same plane?" — which is why this sits right before the plane equations below.
>
> | | object | formula |
> |---|---|---|
> | 2 vectors | parallelogram area | $\Vert a\times b\Vert$ |
> | 3 vectors | parallelepiped volume | $\vert (a\times b)\cdot c\vert$ |

---

### Equation of a plane

$$
\vec{n} = (A,B,C)
$$

$\vec{n}$ is the **[[Normal vector|normal vector]]** — perpendicular to the plane

$$
point (X_{0},Y_{0},Z_{0})
$$

a known point that sits **on** the plane

plane:

$$
A(X-X_{0})+B(Y-Y_{0})+C(Z-Z_{0}) = 0
$$

this is a **[[Dot product|dot product]]** $= 0$:

$$
\vec{n}\cdot(X-X_{0},\,Y-Y_{0},\,Z-Z_{0}) = 0
$$

$(X-X_{0},Y-Y_{0},Z-Z_{0})$ is a vector lying *inside* the plane, and anything inside the plane is $\perp$ to $\vec{n}$ — and $\perp$ means dot product $=0$

expand + move constants to the right:

$$
AX+BY+CZ=\underbrace{AX_{0} +BY_{0} +CZ_{0}}_{\text{all known numbers } = D}
$$

so the standard form is

$$
AX+BY+CZ=D
$$

> [!important] takeaway
> the coefficients of $X,Y,Z$ ARE the normal vector. $D$ is just a constant that slides the plane along $\vec{n}$

---

## Examples / Practice

### Plane from a normal and a point

![[Pasted image 20260909115829.png]]

3i+0j-2k = d
3(2)-2(4) = d
6-8 = d, d=-2
3i-2k = -2

### Plane through three points

![[Pasted image 20260909120730.png]]

p2 p1 -> -1 -3 1
p3 p1 -> -3 1 1
cross product
3i+3j-k-(-9k)-(-i)-(-j) *(AI note: the signs here look off — expanding $\begin{vmatrix}i&j&k\\-1&-3&1\\-3&1&1\end{vmatrix}$ with your own $aei+bfg+cdh-ceg-afh-bdi$ shortcut gives $-3i-3j-k-9k-i+j = -4i-2j-10k$, i.e. normal $(2,1,5)$ after dividing by $-2$, not $(1,1,2)$; double-check the point coordinates on the slide and redo this one.)*
3i+3j-k+9k+i+j
4i+4j+8k
i+j+2k
2+0+2 = 4
d = 4

can leave in this form tho

$$
4(X-2)+4(Y-0)+8(Z-1)=0
$$

but if u use d its

$$
i+j+2k = 4
$$

### Line of intersection of two planes

![[Pasted image 20260909121255.png]]

> [!danger] 🔥 GOTTA REVISE THIS 🔥
> gotta revise can u put smt fancy like a fire so i know i have to do this

cross product is the infinite line of the solutions just visualize
then u have to find a common point. realistically it doesnt matter how this is zone just get rid of one variable

---

## Summary

The whole lecture runs on one idea: the determinant is the engine for everything geometric about vectors in 3D. Start with $ad-bc$ for a 2×2, expand a 3×3 by minors along whichever row has the most zeros (or use the $aei+bfg+cdh-ceg-afh-bdi$ shortcut), and then the cross product is just that same determinant with $i,j,k$ on the top row. That gives you area — $\|a\times b\| = \|a\|\|b\|\sin\theta$, so a triangle is half of it — and order matters because of the right hand rule. Stacking three vectors instead gives the scalar triple product, which is the parallelepiped volume and doubles as a coplanarity test. That feeds straight into planes: the cross product of two in-plane vectors is the normal $\vec{n}$, and since anything lying in the plane is perpendicular to $\vec{n}$, the dot product being zero gives $A(X-X_0)+B(Y-Y_0)+C(Z-Z_0)=0$, i.e. $AX+BY+CZ=D$ where the coefficients *are* the normal.

## Related

- [[Lecture 2 - Sep 2]] — dot product, norms, and projections this builds on
- [[Lecture 5 - Sep 14]] — the $x+y+z=c$ level surfaces there are these planes
- [[MATH 019 - Single and Multivariable Calculus/_Course Info|MATH 019]] — course overview

## Questions for AI / Follow-up

- **Your question from the lecture:** if $i\times j=k$, why is $2i\times 3j=6k$? (i.e. where do the scalars go in a cross product)
- Redo the "plane through three points" example — the shortcut expansion looks like it picked up wrong signs (see the inline flag), and the final normal $(1,1,2)$ doesn't match a direct computation from the two vectors you wrote down.
- 🔥 Line of intersection of two planes: why is the cross product of the two normals the direction of the line, and what's the cleanest way to pick the common point?
