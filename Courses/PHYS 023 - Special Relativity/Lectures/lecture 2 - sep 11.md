---
type: lecture
course: "[[PHYS 023 - Special Relativity/_Course Info|PHYS 023]]"
date: 2026-09-11
tags: [phys023, lecture, special-relativity, simultaneity, clock-synchronization, time-dilation, length-contraction, leading-clocks-lag]
cleaned_with: cleanup-note v1.3.0
cleaned_on: 2026-09-21
---
# PHYS 023 — Lecture

## Reading / Prep


## Key Terms

| Term | Meaning (your words) |
|---|---|
| [[Clock synchronization]] | Send a signal from the beacon in the middle so it ticks when they get it — that's perfect synchronisation |
| [[Relativity of simultaneity]] | A disagreement that's fine because there's no actual valid way to check the other clock at that event — "just a non-agreeable event" |
| [[Leading clocks lag]] | B is ahead, so A reads later time — A bumps into our signal earlier |
| [[Time dilation]] | A is moving so A's clock runs slower, so we have to time dilate |
| [[Length contraction]] | Use it to figure out how much the signal delay is |
| [[Proper length]] | $D$ divided by the factor — written $D_{0}$ |

---

## Notes

### The 48-year discrepancy — is it an error?

![[Pasted image 20260911111902.png]]

Major synchronisation error it seems. the two clocks were synchronised when we left but by the time theres a 48 year difference(not an error). *(AI note: this sentence looks like it got cut off mid-thought — "but by the time ___ theres a 48 year difference"; check the lecture slide above for what the missing clause was.)* we can't disagree on the time of $t'_{2,star}$ and ship because its the same thing

the disagreement here is fine because theres no actual valid way to check the sun's clock at event 2, like the best way we could do it is because information cant check and can't agree like its just a non-agreeable event

---

### Synchronising clocks with a central beacon

![[Pasted image 20260911112954.png]]

this is perfect synchronisation. we send a signal from the beacon in the middle so it ticks when they get it.

now lets consider when its moving

![[Pasted image 20260911113027.png]]

the clock B will receive the signal later than clock A because clock A is moving into it while B is moving away from it.

then u can use length contraction to figure out how much the delay is

![[Pasted image 20260911114402.png]]

> [!important] Setup — who is moving
> **S is stationary, beacon is NOT moving.**
> and the two moving clocks are moving on.

---

### Deriving the offset $t_{2}-t_{1}$

![[Pasted image 20260911115832.png]]

#### Step 1 — Clock B (moving away from the signal)

$$
ct_{2} = Vt_{2}+\frac{D}{2}
$$

$$
t_{2}(c-V) = \frac{D}{2}
$$

$$
t_{2} = \frac{D}{2} *\left( \frac{1}{c-V} \right)
$$

#### Step 2 — Clock A (moving into the signal)

$$
\frac{D}{2} = Vt_{1}+ct_{1}
$$

$$
t_{1} = \frac{D}{2} *\left( \frac{1}{V+c} \right)
$$

#### Step 3 — Subtract

$$
t_{2}-t_{1}
$$

$$
\frac{D}{2} \times\left( \frac{c+V-(c-V)}{(c-V)(c+V)} \right)
$$

$$
\frac{D}{2} \frac{2V}{(c^2-V^2)}
$$

$$
t_{2}-t_{1}=D\left( \frac{V}{c^2\left( 1-\frac{V^2}{c^2} \right)} \right)
$$

#### Step 4 — Time dilate it

When B starts, what does A read?

A is moving so A's clock runs slower

so we have to time dilate:

$$
D\left( \frac{V}{c^2\left( 1-\frac{V^2}{c^2} \right)} \right) \sqrt{ 1-\frac{V^2}{c^2} }
$$

$$
\frac{DV}{c^2\sqrt{ 1-\frac{V^2}{c^2} }}
$$

so this is the final formula, but with D divided by tht e factors its actually jsut proper length so just can say $D_{0}$

$$
\Delta t = \frac{D_{0}V}{c^2}
$$

![[Pasted image 20260911115819.png]]

---

### Leading clocks lag

more about leading clocks LAG

![[Pasted image 20260911115919.png]]

B is ahead, so A reads later time, its pretty intuitive its just cuz A bumps into our signal earlier.

---

## Examples / Practice

### Applying to the question

![[Pasted image 20260911113402.png]]

we're pushing into the beacon, so star clock has started click much before sun was moving

and then this is where can use the formula.

$$
\frac{D_{0}V}{c^2} = \frac{60c\left( \frac{4c}{5} \right)}{c^2} = 48yrs
$$

---

## Summary

The 48-year gap isn't a mistake — it's the relativity of simultaneity. Clocks synchronised by a central beacon only come out synchronised in the frame where the beacon is at rest; in a frame where the pair is moving, the clock moving *into* the signal (A) gets it earlier than the one moving *away* (B), and working that light-travel difference out gives an offset of $D_{0}V/c^2$ once you time-dilate it and swap the contracted $D$ for the proper length $D_{0}$. This is the "leading clocks lag" rule: the front clock reads earlier, the rear clock reads later. Plugging in $D_{0} = 60$ and $V = \frac{4c}{5}$ gives exactly the 48 years from the opening problem.

## Related

- [[lecture 3 - sep 18]] — next lecture: leading clocks lag reused to derive the Lorentz transformation
- [[PHYS 023 - Special Relativity/_Course Info|PHYS 023]] — course overview
*(AI note: there's no Lecture 1 note in the vault yet, so nothing to link back to for where the $t'_{2,star}$ setup came from — worth making one if you have those notes.)*

## Questions for AI / Follow-up

- **REVIEW THIS MORE\*\*\*\*\*\*** — the side bar below: why is $t_{2}-t_{1}$ *not* hit by time dilation while B's reading of A *is*?
  ![[2026-09-11_11-46-26.png]]
  ![[Pasted image 20260911120111.png]]
  these are two different questions because $t_{2}-t_{1}$ is not hit by time dilation cuz its like perfect info but clock B reading of clock A is time dilated cuz A is moving
- In the opening problem, exactly which two events are the "non-agreeable" pair, and which frame does each observer's disagreement live in?
- Does $D_{0}$ in the final formula mean the proper separation of the two clocks in *their own* rest frame — and if so, is $D$ in the derivation the contracted version measured in S?
