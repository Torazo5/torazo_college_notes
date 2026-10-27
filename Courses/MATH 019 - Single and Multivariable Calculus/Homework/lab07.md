## A.

![[Pasted image 20261023142324.png]]
![[Pasted image 20261023142336.png]]
![[Pasted image 20261023142331.png]]
![[Pasted image 20261023142343.png]]

<div style="page-break-after: always;"></div>

## B.

![[Pasted image 20261021132321.png]]
Using the identity:
$$
\frac{d}{dx} \ln(f(x))= \frac{1}{f(x)}\cdot f'(x)
$$
we can try $f(x)=x^2+1$ first:
$$
\frac{d}{dx} \ln(x^2+1)=\frac{1}{x^2+1}\cdot2x
$$
which perfectly works out so we know that:
$$
\int \frac{2x}{x^2+1}dx=\boxed{\ln(x^2+1)+C}
$$

![[Pasted image 20261021132529.png]]
This is a simple u-sub type question.
A logical choice on what u could be is $\ln x$ as the derivative is $\frac{1}{x}$ and that is also in the equation.
so we can try $u=\ln x$ and 
$$
\frac{du}{dx}=1/x
$$
$$
\int \frac{\cos(\ln x)}{x}dx=\int \cos(u)\cdot \frac{du}{dx}dx=\int \cos(u) du
$$
then this is a simple identity:
$$
\int \cos(u)du =\sin(u)+C
$$
now substituting $u = \ln x$ in:
$$
\int \frac{\cos(\ln x)}{x}dx=\boxed{\sin(\ln x)+C}
$$

<div style="page-break-after: always;"></div>

## C.

![[Pasted image 20261021133046.png]]
![[Pasted image 20261021133051.png]]
first we can find $\frac{du}{dx}$, which is:
$$
\frac{du}{dx}=1
$$
so we can just apply to this at the end with no effect which can be convinient.
substituting $u$:
$$
\int (u+1)(u^5)\left( \frac{du}{dx} \right)dx=\int u^5(u+1)du=\int u^6+u^5du
$$

now we just have to compute that simple integral:
$$
\int u^6+u^5 du = \frac{u^7}{7}+\frac{u^6}{6}+C
$$
now subbing u back in:
$$
=\boxed{\frac{(x-1)^7}{7}+\frac{(x-1)^6}{6}+C}
$$
![[Pasted image 20261021133453.png]]
First finding $\frac{du}{dx}$ through the identity:
$$
\frac{d}{dx}u= \frac{d}{dx}\sec x=\tan x\sec x
$$
then the substitution becomes very clear:

$$
\int \sec^2 x(\sec x\tan x)dx=\int u^2\cdot \frac{du}{dx}dx=\int u^2du
$$
now just computing this integral:
$$
\int u^2du=\frac{u^3}{3}+C
$$
subbing u back in:
$$
=\boxed{\frac{\sec^3 x}{3}+C}
$$

<div style="page-break-after: always;"></div>

## D.

![[Pasted image 20261021133703.png]]
the difficult component of this integral is $x^2$ in the $\cos$ so we could possibly use u-sub to make the expression easier.
so using:
$$
u=x^2, \frac{du}{dx}=2x
$$
we can re-arrange the expression as:
$$
\int^{\sqrt{ \pi }}_{0}x\cos x^2dx=\int^{\sqrt{ \pi }}_{0} \frac{1}{2}\left( \frac{du}{dx} \right)\cos (u) dx=\int^{{ \pi }}_{0} \frac{\cos(u)}{2}du
$$
one important note here is that the bounds changes that because $u=x^2$ the bounds were just squared.

computing this:
$$
\int^{{ \pi }}_{0} \frac{\cos(u)}{2}du=\frac{\sin(u)}{2}|^{{ \pi }}_{0}
$$
then just inputting:
$$
\frac{\sin \pi}{2}- \frac{\sin{0}}{2}=\boxed{0}
$$


![[Pasted image 20261021134251.png]]
the main concept here is to use this identity:
![[Pasted image 20261021134717.png]]
clearly one value does not match up so our main goal here is to make them match.
firstly we can factor our the 4 to get those numbers match:
$$
\int^2_{0} \frac{1}{2\sqrt{ 1-\frac{x^2}{4} }}dx
$$
then we want it in the form of the identity so we can do $u=\frac{x}{2}$
as squaring that will give $\frac{x^2}{4}$
that means 
$$
\frac{du}{dx}=\frac{1}{2}
$$
$$
\int^2_{0} \frac{1}{\sqrt{ 1-u^2 }}\cdot \frac{du}{dx} dx
$$

$$
\int^1_{0} \frac{1}{\sqrt{ 1-u^2 }}du
$$
just using the identity now:
$$
\int \frac{1}{\sqrt{ 1-u^2 }}du=\sin^{-1}(u)+C
$$
subbing back u:
$$
\sin^{-1}(u)+C = \sin^{-1}\left( \frac{x}{2} \right)+C
$$
Because this is a definite integral now we can input the two bounds:
$$
\int^2_{0} \frac{1}{\sqrt{ 4-x^2 }}dx=\sin^{-1}\left( \frac{x}{2} \right)|^2_{0}=\sin^{-1}(1)-\sin^{-1}(0)=\frac{\pi}{2}-0=\boxed{\frac{\pi}{2}}
$$

<div style="page-break-after: always;"></div>

## E.

![[Pasted image 20261021135334.png]]
first we must find $\frac{du}{dx}$ and $v$
so:
$$
\frac{du}{dx}=\frac{1}{x}
$$
$$
v = \frac{x^5}{5}
$$
(just took the anti-derivative)

so now using the integration by parts formula:
$$
\int x^4 \ln x dx=\ln x \left( \frac{x^5}{5} \right)- \int \frac{x^5}{5} \frac{1}{x}dx
$$
which is just:
$$
\ln x \frac{x^5}{5}- \int \frac{x^4}{5}dx
$$
thus taking the integral:
$$
\ln x \frac{x^5}{5}- \frac{x^5}{25}+C
$$
factoring out:
$$
\boxed{\frac{x^5}{5}\left( \ln x-\frac{1}{5} \right)+C}
$$

![[Pasted image 20261021140106.png]]

First we can find $\frac{du}{dx}$ and $v$ first:
$$
\frac{du}{dx}=\frac{1}{\sqrt{ 1-x^2 }}
$$
(using the identity)
$$
v=x
$$
which is just the anti-derivative of 1.

thus using the formula:
$$
\int \sin^{-1}xdx=\sin^{-1}(x)x-\int x\left( \frac{1}{\sqrt{ 1-x^2 }} \right)dx
$$

considering the right integral as it is a bit complicated:
$$
\int x\left( \frac{1}{\sqrt{ 1-x^2 }} \right)dx
$$
this is a u-sub scenario which can be told through the $x$ and $x^2$ being in one function:
so:
$$
u = 1-x^2, \frac{du}{dx}=-2x
$$
so:
the integral above is equivalent to:
$$
\int -\frac{1}{2}\left( \frac{du}{dx} \right)\left( \frac{1}{\sqrt{ u }} \right)dx=-\int \frac{1}{2 \sqrt{ u }}du
$$
this final form is a common form of the integral of $u^{1/2}$
so we can just take out the negative and use that:
$$
-\int \frac{1}{2 \sqrt{ u }}du=-\sqrt{ u }+C
$$
looking back i realised this is bad practice because i used u for both u-subs but in a real working you'd want them to be separate.


then subbing back in:
$$
-\sqrt{ 1-x^2 }+C
$$
so finally going back to the main expression:
$$
\int \sin^{-1}xdx = \boxed{\sin^{-1}(x)x+\sqrt{ 1-x^2 }+C}
$$
this can't be really simplified so this is the final answer.

<div style="page-break-after: always;"></div>

## F.

![[Pasted image 20261021141008.png]]
![[Pasted image 20261021141014.png]]
this is a pretty straightforward integration by parts. we can just do:
$$
u = \ln x, \frac{dv}{dx}=1
$$
now inputting into the formula:
$$
\int \ln x dx=\ln x(x)-\int \frac{x}{x}dx
$$
$$
=\ln x(x)-x
$$
now we just input the bounds:
$$
(\ln (e) e-e)-(\ln{1}\cdot{1}-1)=(e-e)-(0-1)=\boxed{1}
$$


![[Pasted image 20261021141654.png]]
setting u and v as this because we want our complexity to go down with the derivative.
$$
u = x^2, \frac{dv}{dx} = e^x
$$
then we need to find $\frac{du}{dx}$ as well as $v$ to use the formula:
$$
\frac{du}{dx}=2x
$$

$$
v=e^x
$$
so we can just use the formula of integration by parts:
$$
x^2(e^x)- \int e^x(2x)dx
$$
the integral on the right is again weird as it is not standard integration, we can apply integration by parts again.
again, we are trying to reduce complexity so we can do: $u = 2x, \frac{dv}{dx}=e^x$
then getting the other two:
$$
\frac{du}{dx}=2, v = e^x
$$
again inputting into the formula:
$$
2x(e^x)-\int 2e^xdx
$$
then this integral is very simple:
$$
2x(e^x)-2e^x+C
$$
now inputting back:
$$
\int x^2e^x dx= x^2(e^x)-(2x(e^x)-2e^x)+C=x^2(e^x)-2x(e^x)+2e^x+C
$$
now inputting the bounds in:
$$
\int^1_{0}x^2e^x dx=(x^2(e^x)-2x(e^x)+2e^x)\Big|^1_{0}=e-2e+2e-(2)=\boxed{e-2}
$$
this should be the final form.

<div style="page-break-after: always;"></div>

## G.

![[Pasted image 20261021150707.png]]
In this question: $f(x) = \sin x$, and then we can simply input into the formula:
$$
V=\int^\pi_{0} 2\pi x\sin xdx
$$
then we can just take out the $2\pi$:
$$
=2\pi \int^\pi_{0}x\sin xdx
$$
this integration is a classic integration by parts.
we want to reduce complexity so we can do $u = x$ and $\frac{dv}{dx}=\sin x$
then we can get the other two parts:
$$
\frac{du}{dx}=1, v= -\cos x
$$
inputting into integration by parts:
$$
\int x\sin x dx = -x\cos x-\int-\cos x(1)dx=-x\cos x+\sin x+C
$$
So this is the integral now we input into the volume formula we had above:
$$
V=2\pi \int^\pi_{0}x\sin xdx=2\pi \cdot (-x\cos x+\sin x)\Big|^\pi_{0}
$$
$$
=2\pi \cdot(-\pi(-1)+0 - (0+0))=\boxed{2\pi ^2}
$$

