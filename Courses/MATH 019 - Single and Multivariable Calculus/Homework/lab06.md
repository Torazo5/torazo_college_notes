## A.
![[Pasted image 20261007133233.png]]
using the theorem for riemann sum approximation:
$$
\int^b_{a}f(x)dx =\lim_{ n \to \infty } \sum^n_{i=1}f(x_{i})\Delta x
$$
and using:
$$
\Delta x=\frac{b}{n}
$$
and
$$
x_{i}=\frac{ib}{n}
$$
Then just inputting to the right hand side one:
$$
\lim_{ n \to \infty } \sum^n_{i=1}f(x_{i})\Delta x = \lim_{ n \to \infty } \left( \left( \frac{b}{n} \right)^2\left( \frac{b}{n} \right) +\left( \frac{2b}{n} \right)^2\left( \frac{b}{n} \right)+\dots+n^2\left( \frac{b}{n} \right)^2\left( \frac{b}{n} \right)\right)
$$
with some factoring out:
$$
\lim_{ n \to \infty } \left( \frac{b}{n} \right)^3(1+2^2+3^2+\dots+n^2)
$$
using this idea:
![[Pasted image 20261007133741.png]]
we can input that and we'll get the full expression of:
$$
\lim_{ n \to \infty } \left( \frac{b}{n} \right)^3\left( \frac{n(n+1)(2n+1)}{6} \right)
$$
with algebra manipulation we'll get the form:
$$
\lim_{ n \to \infty } \frac{b^3}{6}\left( 2+\frac{3}{n}+\frac{1}{n^2} \right)
$$

because n is approaching infinity in this situation, we know this is true:
$$
\lim_{ n \to \infty } \frac{3}{n}=0
$$
$$
\lim_{ n \to \infty } \frac{1}{n^2}=0
$$

Thus the final form is:
$$
 \frac{b^3}{6}(2)= \boxed{\frac{b^3}{3}}
$$
<div style="page-break-after: always;"></div>

## B.
![[Pasted image 20261007133947.png]]
![[Pasted image 20261007133951.png]]

By chain rule and the fundamental theorem of calculus we know this is true:
![[Pasted image 20261007134148.png]]
In this formula $F'(t)$ is the function inside the integral and $F$ is it's antiderivative(not to be confused with $F(x)$)
Thus the $F'(x)$ to input here is:
$$
F'(x)=e^x
$$
and for $G'(x)$:
it is simply the function as the upper bound on the integral:
$$
G'(x)=2x
$$
Now inputting into the formula out final answer should be: inputting this: $G(x)=x^2$
$$
\boxed{F'(x)=e^{x^2}(2x)}
$$
(this is the $F'(x)$ the question is asking for, although it may seem unclear)
![[Pasted image 20261007134534.png]]
Using the same formula as above we can apply the same idea just finding $G(x),G'(x),F(x),F'(x)$ is what is realistically required.
$$
G(x) = x^3, G'(x)=3x^2
$$

$$
F'(x)=\sqrt{ 1+t^2 }
$$
Now inputting into the formula:
$$
F'(x)=\sqrt{ 1+x^6 }(3x^2)=\boxed{3x^2\sqrt{ 1+x^6}}
$$
<div style="page-break-after: always;"></div>

## C.
![[Pasted image 20261007135555.png]]
![[Pasted image 20261007135929.png]]
using the second fundamental theorem of calculus:

first find the anti-derivative of the function inside:
$$
\frac{x^4+x-3}{x^3}=x+x^{-2}-3x^{-3}
$$
so the anti-derivative is just:
$$
\frac{x^2}{2}-\frac{1}{x}+\frac{3}{2x^2}
$$
using the power logic on each one. Then just substituting b and a and subtracting:
$$
\int^b_{a}f(x)dx=\boxed{\left( \frac{b^2}{2}-\frac{1}{b}+\frac{3}{2b^2} \right)-\left( \frac{a^2}{2}-\frac{1}{a}+\frac{3}{2a^2} \right)}
$$
I will leave it in this form.

<div style="page-break-after: always;"></div>

## D.
![[Pasted image 20261007140623.png]]
Using the same formula as last time:
![[Pasted image 20261007135929.png]]
Again, we just have to find the anti-derivative of the inside function:
$$
\frac{1}{1+t^2}
$$
This is not possible in usual methods, however there is a known derivative we could use. $\tan^{-1}$
Because this is true:
$$
\int \frac{1}{1+x^2}dx=\tan^{-1}x+C
$$
the anti-derivative of the inside function is:
$$
\tan^{-1}t
$$
Thus now inputting into the equation:
$$
\int_{a}^b f(x)dx=\tan^{-1}b-\tan^{-1}a
$$
Inputting the values: $b=1, a=-1$
we get:
$$
\tan^{-1}(1)-\tan^{-1}(-1)=\frac{\pi}{4}-\left( -\frac{\pi}{4} \right)=\boxed{\frac{\pi}{2}}
$$

<div style="page-break-after: always;"></div>

## E.
![[Pasted image 20261007141120.png]]
Again, the main idea here is to find the anti-derivative of the inside function.
in this case it is:
$$
\cos^2x
$$
With usual methods this can be an extremely complicated integration, however using the identity:
$$
\cos^2x=\frac{1+\cos 2x}{2}
$$
we can attempt to find the anti-derivative of this, which is much easier:
$$
\frac{1}{2}x+\frac{1}{4}\sin 2x
$$
Now just inputting this into 
![[Pasted image 20261007135929.png]]

$$
\int^b_{a}f(x)dx=F(b)-F(a)=\frac{b}{2}+\frac{\sin 2b}{4}-\left( \frac{a}{2}+\frac{\sin 2a}{4} \right)
$$
inputting $b=\pi,a=0$:

$$
\frac{\pi}{2}+0-0=\boxed{\frac{\pi}{2}}
$$
This should be the final output.

<div style="page-break-after: always;"></div>

## F.
![[Pasted image 20261007141643.png]]
Just graphing cos(x):
![[Pasted image 20261007141731.png]]
it is clear that the function above is a $\cos x$
Thus the lower function is $\sin x$
Using the formula for area between graphs:
$$
\int^b_{a}(f(x)-g(x))dx
$$
we know that $f(x)=\cos x,g(x)=\sin x$
and $a=-\frac{3\pi}{4}, b=\frac{\pi}{4}$
We can input:
$$
\int^\left( \frac{\pi}{4} \right)_{\left( \frac{-3\pi}{4} \right)}(\cos x-\sin x)dx=\sin x+\cos x|^{\pi/4}_{-3\pi/4}
$$
$$
=\sin\left( \frac{\pi}{4} \right)+\cos\left( \frac{\pi}{4} \right)-\left( \sin\left( \frac{-3\pi}{4} \right) +\cos\left( \frac{-3\pi}{4} \right)\right)
$$
Inputting the values of each trig function here:
$$
=\frac{\sqrt{ 2 }}{2}+\frac{\sqrt{ 2 }}{2}-\left( -\frac{\sqrt{ 2 }}{2} -\frac{\sqrt{ 2 }}{2}\right)=\boxed{2\sqrt{ 2 }}
$$

<div style="page-break-after: always;"></div>

## G.
![[Pasted image 20261007142409.png]]
Using the formula for area between graphs:
$$
\int^b_{a}(f(x)-g(x))dx
$$
main concept is to identify the graph above. in this case it is the blue line, which is the linear one, not the curved one.
however, we are still missing a few variables. first lets find what the blue line's function is.
the coordinate of the left intersection is:
$$
(-2,4)
$$
Because we just have to input $x=-2$
and right side:
$$
(2,2)
$$
Now we can find this line:
First finding the slope:
rise = -2
run = 4
thus slope is $-\frac{1}{2}$
using the linear line formula with a point and a slope:
$$
y-2=-\frac{1}{2}(x-2)
$$

$$
y=-\frac{x}{2}+3
$$
Now we can input this function. we need two parts here so we can begin with the $x>0$ side first:
$$
\int^2_{0}\left( -\frac{x}{2}+3 -(x)\right)dx=\int^2_{0}\left( -\frac{3x}{2}+3 \right)dx
$$

$$
=\frac{-3x^2}{4}+3x|^2_{0}= -3+6-(0)=3
$$
Now we can do $x<0$ side:
$$
\int^0_{{-2}}\left( -\frac{x}{2}+3-(x^2) \right)dx
$$

$$
=-\frac{x^2}{4}+3x-\left( \frac{x^3}{3} \right)|^0_{-2}
$$
$$
=0-\left( -1-6+\frac{8}{3} \right)=0-\left( -7+\frac{8}{3} \right)=-\left( -\frac{21}{3}+\frac{8}{3} \right)=\frac{13}{3}
$$
Now we add them together:
$$
\frac{13}{3}+3=\boxed{\frac{22}{3}}
$$
this should be final

<div style="page-break-after: always;"></div>

## H.
![[Pasted image 20261007145256.png]]
![[Pasted image 20261007145303.png]]
![[Pasted image 20261007145318.png]]

The main idea is to differentiate $A(t)$, first we can work with the left(first) component of this equation:

using product rule the derivative of $\frac{1}{2}\cosh t\sinh t$ is:
and using the identity $\frac{d}{dx}\cosh t=\sinh t$ and vice versa:
$$
\frac{1}{2}(\cosh^2t+\sinh^2t)
$$
Now for the right component, we can use the chain rule and the fundamental rule of calculus:
using:
![[Pasted image 20261007134148.png]]
We know that 
$$
F'(x)=\sqrt{ x^2-1 }
$$
and 
$$
G(t)=\cosh t, G'(t)=\sinh t
$$

$$
\frac{d}{dt}\int^{\cosh t}_{1}\sqrt{ x^2-1 }dt=\sqrt{ \cosh^2t-1 }(\sinh t)
$$
Using the identity:
$$
\cosh^2t-\sinh^2t=1
$$
we can simplify this to:
$$
=\sqrt{ \sinh^2t }(\sinh t)=\sinh^2t
$$
Thus the final form from both of these differentiations are:
$$
\frac{\cosh^2t}{2}+\frac{\sinh^2t}{2}-\sinh^2t
$$
$$
=\frac{1}{2}(\cosh^2t-\sinh^2t)=\boxed{\frac{1}{2}}
$$
![[Pasted image 20261007151550.png]]

$A(0)$ can be first computed with the basic one we just got:
$$
A(0)=\frac{0}{2}+C=C
$$
now we can substituite it into the bigger one above:
$$
A(0)=\frac{1}{2}\cosh{0}\sinh 0-\int^{\cosh_{0}}_{1}\sqrt{ x^2-1 }dx
$$

$$
=\frac{1}{2}(1)(0)-\int^1_{1}\sqrt{ x^2-1 }dx
$$
this component: $\int^1_{1}\sqrt{ x^2-1 }dx$
the starting and the ending bound is the same the the integral is equivalent to the area of 0.
thus:
$$
=0-0=0
$$
Thus:
$$
C=0
$$
and:
$$
A(t)=\frac{t}{2}+C=\boxed{\frac{t}{2}}
$$
