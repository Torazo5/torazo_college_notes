## A.

![[Pasted image 20260930135015.png]]

Finding the nth-order derivative until 6 with the value $a=1$
$$
f^{1}(a) = \frac{1}{a}=1
$$
$$
f^2(a)=\frac{-1}{a^2}=-1
$$

$$
f^3(a)=2a^{-3}=2
$$

$$
f^4(a)=-6a^{-4}=-6
$$

$$
f^5(a)=24a^{-5}=24
$$

$$
f^6(a)=-120a^{-6}=-120
$$
Now substituting into the formula:
![[Pasted image 20260930135345.png]]
For the first term it is $\ln{1}$, so 0.
$$
P_{6}(x)=\boxed{0+(x-1) -\frac{1}{2}(x-1)^2 +\frac{1}{3}(x-1)^3+\frac{-6}{24}(x-1)^4+\frac{24}{120}(x-1)^5+\frac{-120}{720}(x-1)^6}
$$
This is the sixth order Taylor polynomial.

![[Pasted image 20260930135723.png]]
This is as simple as inputting x = 2 into the function we have just created. 
Using the shortcut that $(x-1)= 1$, all the squares won't affect this so we can just consider the coefficients. 
$$
P_{6}(2)=\boxed{(1)-\frac{1}{2}+\frac{1}{3}-\frac{1}{4}+\frac{1}{5}-\frac{1}{6}}
$$
This could be done with a common denominator but I don't think it's required, so I will leave it in this form.

<div style="page-break-after: always;"></div>

## B.

![[Pasted image 20260930135919.png]]
Part a is as simple as substituting values as x into the function:
$$
\sinh(0)=\frac{e^0-e^{-0}}{2}=\frac{1-1}{2}=\boxed{0}
$$
$$
\cosh(0)=\frac{e^0+e^{-0}}{2}=\frac{1+1}{2}=\boxed{1}
$$

![[Pasted image 20260930140110.png]]
Similar to part a, this can be done by simply substituting the values and seeing what function it is equivalent to.
$$
\sinh(-x)=\frac{e^{-x}-e^{x}}{2}=\boxed{-\frac{e^{x}-e^{-x}}{2}}
$$
The third form is equivalent to $-\sinh(x)$, so the first statement is proven.

Same thing can be applied for the second statement:
$$
\cosh(-x)=\boxed{\frac{e^{-x}+e^x}{2}}
$$
The second form is already equivalent to $\cosh(x)$, so the second statement is also true.

As the problem mentions, this shows the even/odd nature of these functions, similar to actual trig functions.

![[Pasted image 20260930140428.png]]
This can be proven by simply the expansion of both as shown below:
$$
\cosh^2x=\frac{e^{2x}+2+e^{-2x}}{4}
$$
$$
\sinh^2x=\frac{e^{2x}-2+e^{-2x}}{4}
$$
With the same denominator this is easy to subtract:
$$
\frac{e^{2x}+2+e^{-2x}-(e^{2x}-2+e^{-2x})}{4}=\frac{4}{4}=\boxed{1}
$$
Thus this statement is true.

![[Pasted image 20260930140811.png]]
Similar to all the previous parts, this can also be solved by simply taking the derivative of each one. Starting with $\sinh x$
$$
\frac{d}{dx}(\sinh x)=\frac{d}{dx}\left( \frac{e^x-e^{-x}}{2} \right)=\boxed{\frac{e^x+e^{-x}}{2}}
$$
As can be seen by the final form, that is equivalent to $\cosh x$
Same idea applied to $\cosh x$:

$$
\frac{d}{dx}(\cosh x)=\frac{d}{dx}\left( \frac{e^x+e^{-x}}{2} \right)=\boxed{\frac{e^x-e^{-x}}{2}}
$$
Where again, we see the $\sinh x$ in the final form, proving it's equivalence.

<div style="page-break-after: always;"></div>

## C.

![[Pasted image 20260930141241.png]]
Using the equation of $\cosh x$:
$$
\cosh x=\frac{e^x+e^{-x}}{2}
$$
Along with the property above that the derivative of either $\cosh x$ or $\sinh x$ results in the other one, we know that with $2n$ order.
Considering that our base function here is $\cosh x$ it would mean that every odd-order derivative, it would be a $\sinh(a)$ and for every even it would be a $\cosh(a)$, simply because of the derivative nature of the hyperbolic trig functions. Because the function will always go until order $2n$ the last one is always an even-order derivative.
Every $\sinh(a)$ will be inputted $a=0$ and from above we know that $\sinh(0)=0$ so we can disregard all of these.
Because of the nature of even numbers, they happen every 2 numbers, thus by order $2n$, there must've been an $n$ number of even-order derivatives. Each of those are $\cosh(0)$ and that outputs $1$. 
So the coefficients have been figured out, now the exponent on x. because everything is:
$$
(x-a)^k=(x-0)^k=x^k
$$
And as mentioned above, all values for k which is odd will have a coefficient of 0, thus, all values of k will be even, in increasing order so the final form will be:
$$
P_{2n}=\boxed{1+\frac{x^2}{2!}+\frac{x^4}{4!}+\dots+\frac{x^{2n}}{(2n)!}}
$$


<div style="page-break-after: always;"></div>

## D.

![[Pasted image 20260930142229.png]]

Similar to the question above, this is simply understanding the symmetry and pattern with the odd and even order derivatives. In this case, we are working with $\sinh x$ and instead of an even-order function, it is an odd one, for $2n+1$ is always an odd number(as long as $n$ is an integer).
In this case, $\sinh x$ with an even order derivative will always result back to $\sinh x$ and an odd order derivative will result into $\cosh x$. 
This now means that only odd order derivatives will survive as $\sinh{0}$ is 0. 
Thus the final form will be:
$$
P_{2n+1}= \boxed{\frac{x}{1!}+\frac{x^3}{3!}+\dots+\frac{x^{2n+1}}{(2n+1)!}}
$$


<div style="page-break-after: always;"></div>

## E.

![[Pasted image 20260930145043.png]]
Just considering coefficients, the pattern is a factorial. For further explanation:
Using the power rule we know that:
$$
\frac{d}{dx}(x^n)=nx^{n-1}
$$
Because the initial function is $(1+x)^-1$
The power is carried over and multiplied by the coefficient and then subtracted by 1.
This means the next ones would be: $-1(1+x)^{-2}, +2(1+x)^{-3}, -6(1+x)^{-4}$.
This constantly increases, and because the number that multiplies the coefficient increase by 1(subtracted but if we just consider absolute value) it is equivalent to the definition of factorial.
Thus, the factorial coefficient constantly cancels out the denominator which is also a coefficient. The last thing to note is that the there is a negative value for every odd number order derivative because the power itself is negative, so the sign will reverse everytime, this can simply be represented by $(-1)^{n}$.
Making this the Taylor polynomial of order $n$ ->(just coefficients for the time being)
$$
\frac{1}{1+a}+\frac{-1}{(1+a)^2}+\frac{1}{(1+a)^3}+\dots+\frac{(-1)^{n}}{(1+a)^{n+1}}
$$
Because $a$ is just 0, the full form looks like:
$$
\boxed{1-x+\dots+{(-1)^{n}}x^n}
$$


![[Pasted image 20260930150920.png]]
Using the second order Taylor polynomial which is:
$$
1-x+x^2
$$
inputting $x=-0.05$:
$$
1+0.05+(-0.05)^2=\boxed{1.0525}
$$
Same idea for 1.03, but $x=0.03$
$$
1-0.03+(0.03)^2=\boxed{0.9709}
$$

<div style="page-break-after: always;"></div>

## F.

![[Pasted image 20260930151913.png]]

This as simple as finding the derivative of each one.
$$
P_{3}'(x)=\boxed{f'(a)+\frac{f''(a)}{2!}(2)(x-a)+\frac{f'''(a)}{3!}(3)(x-a)^2}
$$
$$
P_{3}''(x)=\boxed{{f''(a)}+f'''(a)(x-a)}
$$
$$
P_{3}'''(x)=\boxed{f'''(a)}
$$
![[Pasted image 20260930153240.png]]
For $P_{3}(a)$, all $(x-a)=0$, so everything other than $f(a)$ will have a coefficient of 0, making it so:
$$
P_{3}(a)=\boxed{f(a)}
$$
the same logic applies to $P_{3}'(a)$:
$$
P_{3}'(a)=f'(a)+\frac{f''(a)}{2!}(2)(0)+\frac{f'''(a)}{3!}(3)(0)^2=\boxed{f'(a)}
$$

And again the same for $P_{3}''(a)$ and $P_{3}'''(a)$:

$$
P_{3}''(a)=\boxed{f''(a)}, P_{3}'''(a)=\boxed{f'''(a)}
$$

![[Pasted image 20260930153610.png]]


$$
P_{3}^{(4)}(x)= \boxed{0}
$$
As there is no more left from the third derivative. Thus $P_{3}^{(4)}(a)=0$, **no it won't always agree with the function** because the function can still have some left after the fourth derivative or fifth, an easy example is $f(x)=e^x$



<div style="page-break-after: always;"></div>

## G.

![[Pasted image 20260930153809.png]]

Here, we know that 
$$
f(x)=e^{-x^2}
$$
so, now we can attempt to find $P_{2}(x)$:

$$
f'(a)=-2a(e^{-a^2})
$$
$$
f''(a)=-2(e^{-a^2}-2a^2e^{-a^2})
$$
$$
e^{-a^2}+f'(a)(x-a)+\frac{f''(a)}{2!}(x-a)^2
$$
knowing that $a=0$ we can simplify this expression a lot:
$$
1+0+\frac{-2}{2}(x)^2
$$
$$
1-1x^2
$$
Then, we can just take the integral of this with the input:
$$
\int^{0.1}_{0}1-x^2dx=\left[ x-\frac{x^3}{3} \right]^{0.1}_{0}=0.1-\frac{0.1^3}{3}=\boxed{0.09967}
$$





