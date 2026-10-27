---
type: lecture
course: "[[CHEM 042 - Chemistry in the Modern World/_Course Info|CHEM 042 HM-02]]"
date:
---
# CHEM 042 — Lecture

## Reading / Prep


## Key Terms


## Notes
quick overview on trees
its just the path of the things functions/derivatives its pretty logical

practice with example: 
$$
F(s,t)=f(x(s,t),y(s,t))
$$
$$
f(x,y)=x^2y,x=s+t^2,y=st
$$
find $F_{s}(1,2)$ and $F_{t}(1,2)$

![[chain-rule-tree.svg]]
trace everyway to get to $s$
soo
$$
F_{s}=\frac{\partial f}{\partial x} \frac{\partial x}{\partial s}+\frac{\partial f}{\partial y} \frac{\partial y}{\partial s}
$$
so the two branches to get there.

then use the partial derivative the edges are just the parrial derivive to the respect of child of the function of the parent.

so here itll be 
$$
2xy(1)+x^2t
$$
so now plug in (1,2) as s and t
soo $x=1+4=5$
$$
20+25*2=20+50=70
$$
then same for $F_{t}$

$$
F_{t}=\frac{\partial f}{\partial x}
$$

next Q:
![[Pasted image 20261007112359.png]]
now finding 
$$
F_{s}=e^x\cos y (2s)+e^x(-\sin y)(t)
$$
inputting$x=1,y=\frac{\pi}{4}$ with $(s,t,w)=\left( 1,0,\frac{\pi}{4} \right)$

$$
F_{s}=e\left( \frac{\sqrt{ 2 }}{2} \right)(2)+0=\sqrt{ 2 }e
$$
now donig the same for the rest
$$
F_{t}=e^x\cos y +e^x(-\sin y)(s)
$$

$$
F_{t}=e\left( \frac{\sqrt{ 2 }}{2} \right)-e\left( \frac{\sqrt{ 2 }}{2} \right)=0
$$
now last guy:
$$
F_{w}=-e^x\sin y
$$

$$
F_{w}=-e\left( \frac{\sqrt{ 2 }}{2} \right)
$$
the tree is reallly helpful doing chain rule tbh
also just doing it out helps u have all the paritals insta
end of chpt 2 material moving on:



parameter curves:
A path in $\mathbb{R}^n$ is a continous function. 
this odd notation $x:I\to\mathbb{R}$

line setgment from a to b is parametrized by
$$
x(t)=(1-t)a+tb=a+t(b-a)
$$
i have no idea whts going on

aight lets just do an example dude:
find a parametrization of the line through 
$$
a=(1,3,-2), b=(4,-1,5)
$$
direction vector from a to b is:
$$
v=b-a=(3,-4,7)
$$
so full line is:
$$
x(t)=(1,3,-2)+t(3,-4,7)
$$
i mean its very basic actually its literally just any point any slope and the parameter

so parametric equations are:
$$
x(t)=1+3t,y(t)=3-4t,z(t)=-2+7t
$$
a segment t has to be: $0<t<1$


standard circle parametrization:
$$
x(t)=(a\cos t,a\sin t) 
$$
basic stuff.
apparently speed matters so like for example in trig if it was 2t instead of t its moving faster ts


alright example question:
$$
x(t)=(\cos t,\sin t)
$$

$$
y(t)=(\cos(t^2),\sin(t^2))
$$
1. show that both trace unit circle once countrclockwise?
idk what to say bro its just logical
2. compute x'(t) and $||x'(t)||$

$$
x'(t)=(-\sin t,\cos t)
$$

$$
||x'(t)||=1
$$
3. same as part 2

$$
y'(t)=(-2t\sin(t^2),2t\cos(t^2))
$$

$$
||x'(t)||=2t
$$
4. which particles move with cosntant speed
$x(t)$ moves with constant speed. $y(t)$ has speeding up 

circular helix logic:
$$
x(t)(a\cos t,a\sin t,\beta t)
$$
i mean from the top its just a circlce slowly moving so just have to increase z value as we go along.

tangent line?
$x'(t_{0}) \neq 0$
$$
L(s)=x(t_{0})+sx'(t_{0})
$$
equivalently near $t_{0}$

$$
x(t) \approx x(t_{0})
$$
yo what is going on here

aight lets just do an example bro:

$$
x(t)=(t,t^2,t^3)
$$
find tangent line at $t_{0}=1$
first compute point so just (1,1,1)
find velocity vector whcih si just first derivative and input t = (1,1,1)

and then we just get:
$$
L(s)=(1,1,1)+s(1,2,3)
$$
sick new activity:
$$
c(t)=(t^2,t^3), -1 \leq t \leq 1
$$
1.compute $c'(t)$ norm and second
$$
c'(t)=(2t,3t^2)
$$
norm:
$$
\sqrt{ 4t^2+9t^4 }
$$
compute but i cant get value it doesnt give me a specific value

$$
c''(t)=(2,6t)
$$


2. decide where t = 0 is a reuglar point
a regular point is a path where it is not a zero vector.



## Examples / Practice


## Summary



- 
