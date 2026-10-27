---
type: homework
course: "[[MATH 019 - Single and Multivariable Calculus/_Course Info|MATH 019 HM-04]]"
due: 
source: 
est_time: 
status: in-progress
---
# MATH 019 HM-04 — Lab 04

## A.
![[Pasted image 20260923130143.png]]

**Solution**
First, to find all critical points we can do:
$$
f'(a) = 0
$$
and thus:
$$
a = -1,0,1,2
$$
However, this doesn't tell us if the points are minimums or maximums so we can create a table with the sign having the points as the important points and figure it out. 

|           | ($-\infty,-1$) | ($-1,0$) | ($0,1$) | ($1,2$) | ($2,\infty$) |
| --------- | -------------- | -------- | ------- | ------- | ------------ |
| Sign(+/-) | -              | +        | -       | -       | +            |
Some sample calculations on how these signs were obtained:
for $(-\infty,-1)$:
we can just input negative infinity thus:
$x^3 < 0$, $(x-1)^2>0$, $(x+1)<0$ $(x-2) < 0$ 
so: Negative, Positive, Negative, Negative, in which the final product will be a negative. 

Similar can be repeated for:

**for $(-1,0)$** e.g.(-0.5 -> it just has to be anything thats inbetween the two bounds exclusive):
$x^3 < 0$, $(x-1)^2>0$, $(x+1)>0$ $(x-2) < 0$ 
So, Negative, Positive, Positive, Negative, final product is Positive.

for ($0,1$):
Positive, Positive, Positive, Negative, Thus Negative.

for ($1,2$):
Positive, Positive, Positive, Negative, Thus Negative

for $(2,\infty$):
Positive, Positive, Positive, Positive, Thus Positive.

A Negative $\to$ Positive combinations would mean a local minimum as it dips and then rises.
and vice versa for local maximum.

Thus from this, we can figure out that 
$f(-1)$ = minimum
$f(0)$ = maximum
$f(1)$ = neither, most likely an inflection point
$f(2)$ =minimum

**2 local minima** ($x=-1,\ x=2$), **1 local maximum** ($x=0$)

<div style="page-break-after: always;"></div>

## B.
![[Pasted image 20260923132903.png]]

**Solution**
The first instinct here is to simply find the peak point, which is the only point on the graph with a slope of 0. Thus if we find the first derivative and equate to 0, we can solve for which value of N this peak exists at.

So:
$$
G(N) = N(b-a\ln N)
$$
using product rule:
$$
G'(N) = (b-a\ln N) + N\left( -\frac{a}{N} \right)
$$
$$
G'(N) = b-a\ln N-a
$$

Then we can solve for N by equating to 0:
$$
G'(N) = 0
$$

$$
0 = b-a\ln N-a
$$
$$
a(\ln N+1) = b
$$
$$
\ln N+1 = \frac{b}{a}
$$
$$
\ln N = \frac{b-a}{a}
$$
$$
e^\left( \frac{b-a}{a} \right) = N
$$
thus, the answer for N is 
$$
e^\left( \frac{b-a}{a} \right)
$$
And the maximum growth rate is simply the output of the function with our N as our input:
$$
e^\left( \frac{b-a}{a} \right)(b-a\ln(e^\left( \frac{b-a}{a} \right)))
$$

$$
e^\left( \frac{b-a}{a} \right)\left( b-\frac{b-a}{a}(a) \right)
$$

$$
e^\left( \frac{b-a}{a} \right)(a)
$$
final answer(maximal growth rate):

$$
\boxed{ae^\left( \frac{b-a}{a} \right)}
$$
Also, here we can assume that our output will be the maximum simply because visually, the only slope = 0 point on the graph is the maximum. 

<div style="page-break-after: always;"></div>

## C.
![[Pasted image 20260923134251.png]]

**Solution**
To find $f'(c)$,  we would need to intially find $f(b)$ and $f(a)$ to input.

$$
f(b) = (1)^{1} = 1
$$
$$
f_{a} = (-1)^{-1} = -1
$$

Thus:
$$
f'(c) = \frac{f(b)-f(a)}{b-a} = \frac{1-(-1)}{1-(-1)} = -\frac{0}{2} = 0
$$

thus we know: $c=0$:

$$
f(0) = (0)^{-1} = \frac{1}{0}
$$
This calculation is undefined, for division by 0 is not possible.
Therefore, there is no number $f'(c)$ that is valid.

However, this does not violate Mean Value Theorem as the theorem states:
If $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$ then for some c ∈ (a, b),

in our function, $[-1,1]$ is not continuous because there is an asymptote on $x=0$.
Thus the theorem is not violated because it was never applicable in the first place.

<div style="page-break-after: always;"></div>

## D.
![[Pasted image 20260923135218.png]]

To prove that that $h(x)$ must be a constant, we can assume that $h(x)$ is a constant and then differentiate as a constant differentiated must be 0 as there are no variables left. So the following is the proof of this assumption:

$$
h'(x) = 2f(x)f'(x)+2g(x)g'(x)
$$
Then, substitute $g(x) = f'(x)$
$$
h'(x) = 2f(x)f'(x)+2f'(x)g'(x)
$$
Then factor out $2f'(x)$

$$
h'(x) = 2f'(x)[f(x)+g'(x)]
$$
Then substitute $g'(x)=-f(x)$

$$
h'(x) = 2f'(x)[f(x)-f(x)]
$$

$$
h'(x) = 2f'(x)[0] = \boxed{0}
$$
Thus, this statement is true. $h(x)$ must be a constant as the first derivative is 0.

![[Pasted image 20260923140918.png]]

This is very straightforward, we can just input the values and then calculate for $C$
$$
0^2+2^2=C
$$
$$
\boxed{C=4}
$$

<div style="page-break-after: always;"></div>

## E.
![[Pasted image 20260923141939.png]]

This statement in an equation would look like(x being "the positive number"):
$$
f(x) = x+\frac{1}{x}
$$
For this question we can find the first derivative in order to find the critical point and find the minimum. This would initially prove that the lowest possible is 2. On top of that, if the derivative is positive for positive number(and after the minimum) it would be undeniably true that this statement is true.

Finding the first derivative
$$
f'(x) = 1-\left( \frac{1}{x^2} \right)
$$
Now, finding the critical points of this function by inputting $f'(x)=0$
$$
0 = 1-\left( \frac{1}{x^2} \right)
$$

$$
1=\frac{1}{x^2}
$$

$$
x^2=1
$$

$$
x= \pm 1
$$
so making a sign table we can identify the minimum:

|      | $(-\infty, -1)$ | $(-1,1)$ | $(1,\infty)$ |
| ---- | --------------- | -------- | ------------ |
| Sign | +               | -        | +            |
Sample calculation on how I obtained these signs:
For $(-\infty, -1)$, inputting $-10$
$$
1-\left( \frac{1}{100} \right) > 0
$$
Thus positive for this range

For $(-1,1)$, inputting $\frac{1}{2}$:

$$
1-\left( \frac{1}{\left( \frac{1}{2} \right)^2} \right) = 1-4 =-3
$$
Because $-3<0$, Negative is the sign for that range.

For $(1,\infty)$, inputting $10$:

$$
1-\left( \frac{1}{100} \right) > 0
$$
Thus positive for this range

This would mean that between - $\to$ +, is when the minimum exists. 
Thus $x=1$ is the lowest possible value from the statement. Computing that:
$$
1+\frac{1}{1} = 2
$$
Thus, it is proven that the minimum value possible is 2. 
Then from there, progressing in the $+x$ direction, the sign is positive(+), which would mean it is strictly increasing, so everything is above 2 from there.
Which then shows that this statement is true.

<div style="page-break-after: always;"></div>

## F.
![[Pasted image 20260923143709.png]]

This is a relatively straightforward question as all that is required is to take the first derivative and equate to 0 and then solve for n. 
Using quotient rule, we can find the derivative:
$$
y'(n)= \frac{(a^2+n^4)(2n)-n^2(4n^3)}{(a^2+n^4)^2}
$$
then equate $y'(n) = 0$ to find critical points:
$$
0 = \frac{(a^2+n^4)(2n)-n^2(4n^3)}{(a^2+n^4)^2}
$$
As $(a^2+n^4)^2 \ge 0$, we can multiply both fractions by that and get:
$$
0 = 2n(a^2)-2n^5
$$

$$
2n^5=2n(a^2)
$$

$$
n^4=a^2
$$

$$
n = \sqrt[4]{ a^2 } = \boxed{\sqrt{ a }}
$$
Thus, the value $\sqrt{ a }$ nitrogen level maximises yield.
Also, here we can assume that our output will be the maximum simply because visually, the only slope = 0 point on the graph is the maximum. 

<div style="page-break-after: always;"></div>

## G.
 ![[Pasted image 20260923144454.png]]

This question is also a relatively straightforward question as all that is required is to find is the first derivative then solve for critical points.
However doing a derivation in this state takes a lot of work thus some initial logical steps can reduce the workload significantly.
First of all considering the fraction, a lower value on the denominator would mean a higher output. So we are searching for a way to minimize
$$
\sqrt{ (\omega_{0}^2 -\omega^2)^2+4c^2\omega_{0}^2\omega ^2}
$$
The square root is also annoying, and the idea of minimising is still identical so we can do the first derivative without the square root for it only affects the output not the actual critical point.

$$
B(\omega)=(\omega_{0}^2 -\omega^2)^2+4c^2\omega_{0}^2\omega ^2
$$

$$
B'(\omega) = 2(\omega_{0}^2 -\omega^2)(-2\omega)+4c^2\omega_{0}^2(2\omega )
$$
Set $B'(\omega) = 0$ to solve for critical points.
$$
B'(\omega) = 0
$$
Also, here we can assume that our output will be the maximum simply because visually, the only slope = 0 point on the graph is the maximum. 
$$
8\omega c^2\omega_{0}^2 = 4\omega(\omega_{0}^2 -\omega^2)
$$

$$
2c^2\omega_{0}^2 = \omega_{0}^2 -\omega^2
$$

$$
\boxed{\omega =\sqrt{ \omega_{0}^2(1-2c^2) }}
$$
Thus, this is the forcing frequency($\omega$) that causes the highest output amplitude. 

