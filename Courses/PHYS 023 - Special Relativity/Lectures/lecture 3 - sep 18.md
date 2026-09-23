---
type: lecture
course: "[[PHYS 023 - Special Relativity/_Course Info|PHYS 023]]"
date: 2026-09-18
tags: [phys023, lecture, proper-time, lorentz-transformation, velocity-transformation, leading-clocks-lag, time-dilation, length-contraction]
cleaned_with: cleanup-note v1.3.0
cleaned_on: 2026-09-21
---
# PHYS 023 — Lecture

## Reading / Prep


## Key Terms

| Term | Meaning (your words) |
|---|---|
| [[Proper time]] | measured from where the event happened |
| [[Paparazzi principle]] | when earth was at the exact same point we read t0, due to paparazzi principle it must be true |
| [[Leading clocks lag]] | due to clock lag, B clock reads $t_{0} -\frac{V\Delta x'}{c^2}$ |
| [[Lorentz transformation]] | $\Delta t = \gamma\left( \Delta t'+\frac{V\Delta x'}{c^2} \right)$, $\Delta x = \gamma(\Delta x'+V\Delta t')$, $\Delta y=\Delta y'$ — a transformation on the galilean $\Delta x'+V\Delta t'$ |
| [[Galilean transformation]] | the intuitive one, $\Delta x'+V\Delta t'$ |
| [[Velocity transformation]] | $v_{x}=\frac{v_{x}'+V}{1+\frac{Vv_{x}'}{c^2}}$ — hella useful apparently |

---

## Notes

### Proper time and the setup

simple proper time ideas:
[[Proper time|proper time]] is measured from where the event happened.

setting up the scenario/previous ideas:
![[Pasted image 20260918111145.png]]
![[Pasted image 20260918111508.png]]

now this scenario: just consider two of these things, star and planet.
as it says the earth is aligned with throw and star is aligned with the catch
![[Pasted image 20260918111657.png]]
thus both of these statements are true cuz when earth was at the exact same point we read t0, due to [[Paparazzi principle|paparazzi principle]] it must be true.
then same for star clock reading some value.

---

### Deriving the time transformation

#### Step 1 — Clock lag

due to [[Leading clocks lag|clock lag]], B clock reads

$$
t_{0} -\frac{V\Delta x'}{c^2}
$$

according to S frame (the star and earth frame)

#### Step 2 — Time dilation

to us(S) A and B clock are moving slower so it makes sense to say that:

$$
\Delta t\sqrt{ 1-\frac{V^2}{c^2} }
$$

#### Step 3 — Add them up

so its not wrong to say that B's clock reads:

$$
t_{0}-\frac{V\Delta x'}{c^2} +\Delta t\sqrt{ 1-\frac{V^2}{c^2} }
$$

#### Step 4 — Equate with the paparazzi reading

but by paparazzi princicple we also agreed upon the fact that it must've read: $t_{0}+\Delta t$ *(AI note: this probably should be $t_{0}+\Delta t'$ (B's own elapsed time in S'), since that's what makes the next line come out with $\Delta t'$ on the left; check the board photo.)*
thus, we can equate them for the final form
just use ur own head ts first of all $t_{0}$ cancel

$$
\Delta t'+\frac{V\Delta x'}{c^2}=\Delta t\sqrt{ 1-\frac{V^2}{c^2} }
$$

$$
\Delta t = \left( \frac{1}{\sqrt{ 1-\frac{V^2}{c^2}}} \right)\left( \Delta t'+\frac{V\Delta x'}{c^2} \right)
$$

could write about delta y but its pretty normal:

$$
\Delta y=\Delta y'
$$

---

### Deriving the space transformation

now a bit more about spatial distance:
between A and B for S frame itll be length contraction because proper length is in their frame. ![[Pasted image 20260918113410.png]]
this might help visualize but its pretty intuitive
so if delta x' is the distance between A and B in S' frame:

$$
\Delta x = \Delta x'\sqrt{ 1-\frac{V^2}{c^2} }+V\Delta t
$$

sub delta t

$$
\Delta x = \frac{1}{\sqrt{ 1-\frac{V^2}{c^2} }}(\Delta x'+V\Delta t')
$$

> [!note]
> remember from the intuitive one([[Galilean transformation|galilean transformation]]:) we would think $\Delta x'+V\Delta t'$
> so its a transformation on that
> completely in S frame btw

---

### Velocity transformation

now lets just think in S frame we have simple facts like this:

$$
v_{x}=\frac{\Delta x}{\Delta t}
$$

with a bunch of manipulation(with substituting our god 3 equations(2/3)) we get:

$$
v_{x}=\frac{v_{x}'+V}{1+\frac{Vv_{x}'}{c^2}}
$$

lets do the same thing for y:

$$
v_{y}=\frac{\Delta y}{\Delta t}
$$

keep doing some manipulation:

$$
v_{y}=\frac{v_{y}'\sqrt{ 1-\frac{V^2}{c^2} }}{1+\frac{Vv_{x}'}{c^2}}
$$

we can replicate the same thing and get the main lorentz transofmratiosn for the components of an object's velocity:
![[Pasted image 20260918114754.png]]

---

### How to use the velocity transformation

How to use [[Velocity transformation|velocity transformation]] equatoins which is hella useful apparently:

#### Step 1 — Identify
Identify the two ref frames, and the moving object by the observers

#### Step 2 — Draw
draw a picture for each guy's frame, focus on the movement of the other one. Specifically get the +x direction well

#### Step 3 — Label S and S'
The frame in which the other observer moves in +x is S. the other is S'

#### Step 4 — Transform
decide if ik the velocities already, use the appropiate transformation

---

## Examples / Practice

### Earth, A and B

![[Pasted image 20260918115517.png]]
use an example to learn:
Earth and A frame, B is object.
we need A to be S and earth to be S' cuz earth is moving +x in A's frame
B has $v_{x}'=-\frac{4}{5}c$ $V=\frac{3}{5}c$
so then sub into the x formula:

$$
v_{x}=-\frac{\frac{4}{5}c+\frac{3}{5}c}{blah} = -\frac{5}{13}c
$$

*(AI note: with $v_{x}'=-\frac{4}{5}c$ the numerator $v_{x}'+V$ is $-\frac{4}{5}c+\frac{3}{5}c=-\frac{1}{5}c$, not $-(\frac{4}{5}c+\frac{3}{5}c)$; over the denominator $1-\frac{12}{25}=\frac{13}{25}$ that gives your $-\frac{5}{13}c$, so only the middle step looks off.)*

> [!question]
> wait hold on what the fuck is $v_{x}'$ -> x-velocity of B in frame of S'

### Back to the rhino

lets go back to rhino example:
![[Pasted image 20260918120013.png]]
lets try to use what we learnt today ->
if $\Delta x$ between events in R's frame is 10ft or more we survive
we know that $\Delta x'=8ft$, $\Delta t'=0$
time between the two and distance to the S' frame
then we use lorentz transformation:
then if u calcualte we get 10ft -> can u add this caluclation claude

> [!tip]- Claude calc (not my notes)
> With $\Delta t'=0$, the $V\Delta t'$ term drops out of the space transformation:
> $$\Delta x = \frac{1}{\sqrt{1-\frac{V^2}{c^2}}}\left(\Delta x' + V\cdot 0\right) = \frac{8\text{ ft}}{\sqrt{1-\frac{V^2}{c^2}}}$$
> That equals exactly 10 ft when $\sqrt{1-\frac{V^2}{c^2}} = \frac{8}{10} = \frac{4}{5}$, i.e. $V = \frac{3}{5}c$. I couldn't see the rhino's speed in the note, so check $V$ on the slide: if it's $\frac{3}{5}c$ this is your 10 ft, and if it's faster then $\Delta x > 10$ ft and you survive with room to spare.

![[Pasted image 20260918120310.png]]

> [!danger] 🔥 this is very critical 🔥
> fuck lots of review here

## Summary

This lecture builds the Lorentz transformation out of the pieces from before. Proper time is measured where the event happens, and by the paparazzi principle everyone agrees on what a clock reads at an event. So B's clock reading can be written two ways: as $t_0$ minus the leading-clock lag $\frac{V\Delta x'}{c^2}$ plus the time-dilated $\Delta t\sqrt{1-\frac{V^2}{c^2}}$, or directly. Setting those equal gives $\Delta t = \gamma\left(\Delta t'+\frac{V\Delta x'}{c^2}\right)$. The space version comes from the length-contracted $\Delta x'$ plus $V\Delta t$, which after substituting becomes $\Delta x = \gamma(\Delta x'+V\Delta t')$, the Galilean $\Delta x'+V\Delta t'$ with a correction. $\Delta y=\Delta y'$ doesn't change. Dividing those gives the velocity transformation $v_x = \frac{v_x'+V}{1+\frac{Vv_x'}{c^2}}$, plus a $v_y$ version. To use it, pick S as the frame where the other observer moves in $+x$, then plug in. Two examples: B's velocity in A's frame comes out to $-\frac{5}{13}c$, and the rhino problem's $\Delta x'=8$ ft, $\Delta t'=0$ transforms to the 10 ft needed to survive.

## Related

- [[lecture 2 - sep 11]] — where leading clocks lag ($\frac{D_0V}{c^2}$) and the beacon synchronisation came from; Step 1 here reuses it
- [[mid term review]] — the rhino / blade timing worked through again

## Questions for AI / Follow-up
- "wait hold on what the fuck is $v_{x}'$": confirm it's B's x-velocity measured in S', and check how its sign comes from the +x direction chosen in Step 2 of the method.
- The last slide (20260918120310) is marked "very critical" and "lots of review". What is it showing, and how does it connect to the rhino calculation?
- Why is $\Delta y=\Delta y'$ "pretty normal", i.e. why is there no length contraction perpendicular to the motion?
