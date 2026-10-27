## Question 1 (9-4)
![[Pasted image 20260928204706.png]]
For this question starting with part b is easier, thus I will start from part b as part a is a continuation of part b. 
Generally this is an algebra manipulation question, with the two main inputs being these two lorentz transformations:
$$
t'=\gamma\left( t-\frac{vx}{c^2} \right)
$$
and
$$
x' =\gamma(x-Vt)
$$
And less important but still critical ones:
$$
y'=y, z'=z
$$

Inputting into Left Hand Side:
$$
-c^2\left( \gamma\left( t-\frac{vx}{c^2} \right) \right)^2+[\gamma(x-vt)]^2+y^2+z^2
$$
Just for convenience I will iterate that I will only focus on the first two items as the last two are already equation so the only thing we are solving for is that the first two items will be equivalent to $-c^2t^2+x^2$
Starting the algebra off with expansion we can get this:
$$
-c^2(\gamma^2)\left( t^2-\frac{2vtx}{c^2} +\frac{v^2x^2}{c^4}\right)+\gamma_{2}(x^2-2vtx+v^2t^2)
$$
factoring out $\gamma^2$ and cancelling out the $2vtx$, we get:
$$
\gamma^2\left(v^2t^2-c^2t^2+x^2-\frac{v^2x^2}{c^2} \right)
$$
factoring out $x^2$ items and $t^2$ items we get:
$$
\gamma^2\left[ t^2(v^2-c^2)+x^2\left( 1-\frac{v^2}{c^2} \right) \right]
$$
$v^2-c^2$ and $1-\frac{v^2}{c^2}$ resembles the lorentz factor, so we can actually factor out $c^2$ from the first one, multiply by $-1$ and then factor that out.
$$
\gamma_{2}\left[ -c^2t^2\left( 1-\frac{v^2}{c^2} \right) +x^2(1-\frac{v^2}{c^2})\right]
$$
factoring out $1-\frac{v^2}{c^2}$. which is $\frac{1}{\gamma^2}$
$$
\boxed{x^2-c^2t^2}
$$
which is equivalent to $-c^2t^2+x^2$ as mentioned above, so we just proved that LHS = RHS, and that they are equal.

![[Pasted image 20260928211310.png]]
Now doing part (a), we can actually just substitute what we have just proven is equal into the Left Hand side with constant to offset. 
$$
c^2t'^2+x'^2+y'^2+z'^2=-c^2t^2+x^2+y^2+z^2+2c^2t'^2
$$
This is proven from above, thus we can substitute this now:
$$
-c^2t'^2+x^2+y^2+z^2+2c^2t^2 \neq c^2t^2+x^2+y^2+z^2
$$
Looking at this, the only way this is not true is if:
$$
-c^2t'^2 +2c^2t^2=c^2t^2
$$
Or this is true:
$$
t'^2=t^2
$$
This is true in *some* scenarios, but not all as sometimes with time dilation this is not true. 
**Thus for part a, there are cases in which this statement does not stand thus they are not equal to each other.**


<div style="page-break-after: always;"></div>

## Question 2 (13-2)
![[Pasted image 20260928154737.png]]
First we can find the momentum and energy in our frame as that is very simple.

Using this formula for momentum which is for relativistic contexts:
$$
p = \gamma mv
$$
Inputting known values:
$$
p=\gamma(938.3MeV/c^2)\left( \frac{4}{5}c \right)
$$
$$
\gamma = \frac{1}{\sqrt{ 1-\frac{v^2}{c^2} }}, v=-\frac{4}{5}c
$$
$$
\gamma = \frac{1}{\left( \frac{3}{5} \right)} = \frac{5}{3}
$$
$$
p=\frac{5}{3}(938.3MeV/c^2)\left( -\frac{4}{5}c \right) = \boxed{-1251.0667MeV/c}
$$
Using the same for energy:
$$
E = \gamma mc^2
$$
$$
E = \gamma(938.3MeV/c^2)(c)^2
$$
$$
E = \frac{5}{3} (938.3MeV/c^2)(c)^2 = \boxed{1563.833MeV}
$$
In the moving frame, we can find the velocity they view it with lorentz velocity transformations:
$$
v_{x}'=\frac{v_{x}-V}{1-\frac{v_{x}V}{c^2}}
$$
$$
v_{x}'=\frac{\left(  -\frac{4}{5}c - \left( \frac{3}{5}c \right) \right)}{1-\frac{\left( -\frac{4}{5}c \right)\left( \frac{3}{5}c \right)}{c^2}}
$$
$$
v_{x}'=\frac{-\frac{7}{5}c}{\frac{37}{25}}=-\frac{35}{37}c
$$
Now, using the momentum formula, we can input the values as the S' frame views the proton.
$$
\gamma'=\frac{1}{\sqrt{ 1-\frac{v^2}{c^2} }} = \frac{1}{\left( \frac{12}{37} \right)} = \frac{37}{12}
$$
Now inputting into the formula for momentum:
$$
p=\frac{37}{12}(938.3MeV/c^2)\left( -\frac{35}{37}c \right)=\boxed{-2736MeV/c}
$$
Same for the formula of energy:
$$
E = \frac{37}{12}(938.3MeV/c^2)(c)^2=\boxed{2893MeV}
$$

<div style="page-break-after: always;"></div>

## Question 3 (11-sup1)
![[Pasted image 20260928193646.png]]

Part a can be done through conservation of energy and momentum with some algebra.
Starting off with momentum using the formula:
$$
p=\gamma mv
$$
we know that $p_{before} = p_{after}$
So:
$$
\gamma_{1}(\sqrt{ 3 }m)v+\gamma_{2}(m)\left( -\frac{c}{\sqrt{ 2 }} \right)=0
$$

$$
\gamma_{2}=\frac{1}{\sqrt{ 1-\frac{v^2}{c^2} }}=\frac{1}{\left( \frac{1}{\sqrt{ 2 }} \right)}=\sqrt{ 2 }
$$
Inputting that and rearranging:
$$
\gamma_{1}(\sqrt{ 3 }m)v = \sqrt{ 2 }m\left( \frac{c}{\sqrt{ 2 }} \right)
$$
$$
\gamma_{1}v\sqrt{ 3 }=c
$$
$$
\frac{v}{\sqrt{ 1-\frac{v^2}{c^2} }}=\frac{c}{\sqrt{ 3 }}
$$
$$
\sqrt{ 3 }v=\sqrt{ c^2-v^2 }
$$
$$
3v^2=c^2-v^2
$$
$$
v^2=\frac{c^2}{4}
$$
$$
\boxed{v=\frac{c}{2}}
$$

Then using this velocity as well as the conservation of energy, we should be able to solve for $m_{3}$:

$$
\gamma_{1}(\sqrt{ 3 }m)(c^2)+\gamma_{2}(m)(c^2)= m_{3}c^2
$$
$$
\gamma_{1}(\sqrt{ 3 }m)+\gamma_{2}(m)=m_{3}
$$

$$
\gamma_{1}=\frac{1}{\sqrt{ 1-\frac{v^2}{c^2} }}=\frac{1}{\sqrt{ \frac{3}{4} }}=\frac{1}{\frac{\sqrt{ 3 }}{2}}=\frac{2}{\sqrt{ 3 }}
$$
and $\gamma_{2}$ from the previous part:

$$
\frac{2}{\sqrt{ 3 }}(\sqrt{ 3 }m)+\sqrt{ 2 }m=m_{3}
$$
$$
\boxed{m_{3}=m(2+\sqrt{ 2 })}
$$
Thus, $m_{3}$ in terms of $m$

Finally for part b:
Because we want the perspective from the frame of the right moving particle, it makes it easy because that can easily be assigned frame S'. 

Thus all we are looking for is $v_{x}'$ and then input into the energy formula.
$$
v_{x}'=\frac{v_{x}-V}{1-\frac{v_{x}V}{c^2}}
$$
We know that:
$$
v_{x}=-\frac{c}{\sqrt{ 2 }}
$$
$$
V= \frac{c}{2}
$$
Thus inputting to find $v_{x}'$:

$$
v_{x}'=\frac{-\frac{c}{\sqrt{ 2 }}-\frac{c}{2}}{1+\frac{1}{2\sqrt{ 2 }}}
$$

$$
v_{x}'=-\frac{\frac{\sqrt{ 2 }c+c}{2}}{\frac{2\sqrt{ 2 }+1}{2\sqrt{ 2 }}}
$$

$$
v_{x}'=-\frac{\sqrt{ 2 }(\sqrt{ 2 }c+c)}{2\sqrt{ 2 }+1}
$$
There is no particular clean set up so I will be leaving it like this to input into the energy formula.
Using this formula:
$$
E = \gamma mc^2
$$

$$
\gamma = \frac{1}{\sqrt{ 1-\frac{v^2}{c^2} }}=\frac{1}{\sqrt{ 1-\frac{2(2+2\sqrt{ 2 }+1)}{8+4\sqrt{ 2 }+1} }}=\frac{1}{\sqrt{ 1-\frac{6+4\sqrt{ 2 }}{9+4\sqrt{ 2 }} }}
$$

$$
\gamma=\frac{1}{\sqrt{ \frac{3}{9+4\sqrt{ 2 }} }}=\frac{1}{\frac{\sqrt{ 3 }}{1+2\sqrt{ 2 }}}
=\frac{1+2\sqrt{ 2 }}{\sqrt{ 3 }}$$
Inputting into the final formula:
$$
\boxed{E = \frac{1+2\sqrt{ 2 }}{\sqrt{ 3 }}mc^2}
$$


<div style="page-break-after: always;"></div>

## Question 4 (11-12)
![[Pasted image 20260928195955.png]]

First we can try to find velocity by knowing that $Ek=mc^2$ and that 
$$
Ek+mc^2=\gamma mc^2
$$
Substituting what we have above:
$$
2mc^2=\gamma mc^2
$$
$$
\gamma=2
$$
Then using the lorentz factor formula:
$$
\frac{1}{\sqrt{ 1-\frac{v^2}{c^2} }}=2
$$
$$
\frac{1}{4}=1-\frac{v^2}{c^2}
$$
$$
\frac{v^2}{c^2}=\frac{3}{4}
$$
$$
v=\sqrt{ \frac{3}{4} }c
$$
Now that we know the velocity of the new particle in our frame we can find out how long it lived by dividing by d. 
$$
\frac{d}{\sqrt{ \frac{3}{4} }c}=t
$$
$$
t=\frac{2d}{\sqrt{ 3 }c}
$$
The question asks how long it lived in it's own rest frame so we must dilate this. As moving clocks run slower, our current value must be higher:
$$
\frac{2d}{\sqrt{ 3 }c}\left( \sqrt{ 1-\frac{v^2}{c^2} } \right)=\frac{2d}{\sqrt{ 3 }c}\left( \sqrt{ \frac{1}{4} } \right)=\frac{2d}{\sqrt{ 3 }c}\left( \frac{1}{2} \right)=\boxed{\frac{d}{\sqrt{ 3 }c}}
$$
Thus, this is the time it lived in it's own frame.

<div style="page-break-after: always;"></div>

## Question 5 (11-18)
![[Pasted image 20260928201038.png]]

First, we can attempt to use the conservation of energy to solve for any variables. Using the formula: $E = \gamma mc^2$
The energy of the first particle and the sum of the two particles must be equal. Thus:
$$
\gamma_{1}Mc^2=2\gamma_{2}\left( \frac{2}{5}M \right)c^2
$$
$$
\gamma_{1}=2\gamma_{2}\left( \frac{2}{5} \right)
$$
Solving for $\gamma_{1}$ as it is the easier one to find(we already know velocity of this particle:
$$
\gamma_{1}=\frac{1}{\sqrt{ 1-\frac{v^2}{c^2} }}=\frac{1}{\frac{4}{5}}=\frac{5}{4}
$$
Then substituting back in:
$$
\frac{5}{4}=2\gamma_{2}\left( \frac{2}{5} \right)
$$
$$
\gamma_{2}=\frac{25}{16}
$$
This not only gives us $\gamma_{2}$ but gives us the each of the total velocities of the particles:
$$
\gamma_{2}=\frac{1}{\sqrt{ 1-\frac{v^2}{c^2} }}
$$
$$
\sqrt{ 1-\frac{v^2}{c^2} }=\frac{16}{25}
$$
$$
1-\frac{v^2}{c^2}= \left( \frac{16}{25} \right)^2
$$
$$
\frac{v^2}{c^2}=\frac{25^2-16^2}{25^2}
$$
$$
v^2=\frac{25^2-16^2}{25^2} c^2
$$
It is better to keep this velocity in the square form as to solve for vertical velocity, we can use Pythagoras with the horizontal component of velocity. 

Now, we can try to solve for the horizontal component of velocity using the conservation of momentum in the horizontal component using the formula: $p = \gamma mv$
$$
\gamma_{1}M\left( \frac{3}{5}c \right)=2\gamma_{2}\left( \frac{2}{5}M \right)v_{x}
$$
We know this is true because the momentum of the first particles must equal the momentum of the two(thus the times 2).
Subsituting $\gamma_{1}$ and $\gamma_{2}$ from the known values above:
$$
\frac{5}{4}M\left( \frac{3}{5}c \right)=2\left( \frac{25}{16} \right)\left( \frac{2}{5}M \right)v_{x}
$$

$$
\frac{3}{4}Mc=(2)\frac{5}{8}Mv_{x}
$$
$$
v_{x} = \frac{3c}{5}
$$

Now Pythagoras is applicable in order to find the vertical component of velocity:
$$
v^2 = v_{x}^2+v_{y}^2
$$
$$
\frac{25^2-16^2}{25^2} c^2 = \left( \frac{3c}{5} \right)^2+v_{y^2}
$$
$$
\frac{v_{y}^2}{c^2}=\frac{144}{25^2}=\left( \frac{12}{25} \right)^2
$$
$$
\boxed{v_{y}=\frac{12}{25}c}
$$
Thus for the particle that went up, their $v_{y} = \frac{12}{25}c$ and the other one would be $v_{y}=-\frac{12}{25}c$.

