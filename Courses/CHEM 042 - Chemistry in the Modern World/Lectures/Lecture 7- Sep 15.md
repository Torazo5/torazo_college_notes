---
type: lecture
course: "[[CHEM 042 - Chemistry in the Modern World/_Course Info|CHEM 042 HM-02]]"
date: 2026-09-15
tags:
  - chem042
  - lecture
  - nmr
  - spin-state
  - shielding
  - diamagnetism
cleaned_with: cleanup-note v1.2.0
cleaned_on: 2026-09-17
---
# CHEM 042 — Lecture

## Reading / Prep


## Key Terms

| Term | Meaning |
|---|---|
| [[Spin state]] | protons or H-1 has two spin states $\alpha$ and $\beta$ — $\alpha$ is the same direction as the external magnetic field while $\beta$ is opposite |
| [[Nuclear magnetic resonance]] | when we push alpha spin with the exact energy to fly up we enter beta state, so $E_{p}= \Delta \epsilon_{p}$ |
| [[Diamagnetism]] | the weak opposing induced magnetic field from the proton's circulating electrons — its not strong enough to fully cancel or anything |
| [[Shielding]] | more surrounding electron density means the field felt by the proton is less than the external field — more electron density quite literally is shielding |

---

## Notes

### The two spin states

Magnetic field of some protons will be aligned antiparallel to the magnetic field of the external magnet.
protons or H-1 has two [[Spin state|spin states]] $\alpha$ and $\beta$
$\alpha$ is the same direction as the external magnetic field
while $\beta$ is opposite

![[Pasted image 20260915081847.png]]

$$
\Delta \epsilon_{p} = \frac{h\gamma_{H}}{2\pi} B_{p}
$$
basically the difference of energy between the two is directly proportional to magnitude of the magnetic field felt by the proton. stronger is bigger and none is 0

---

### Resonance — flipping between the states

similar to quantum energy states
when we push alpha spin with the exact energy to fly up we enter beta state.
so $E_{p}= \Delta \epsilon_{p}$

this is called [[Nuclear magnetic resonance|Nuclear Magnetic Resonance]].
$\Delta \epsilon _p$ is very small i mean its just energy states
needed $E_{p}$ needed is small *(AI note: this line looks garbled — "needed ... needed" — probably meant "so the $E_{p}$ needed is small"; harmless but check you didn't lose a clause here.)*

---

### Diamagnetism and shielding

![[Pasted image 20260915083046.png]]
basically with proton and its own magentic field will go through lenz's law(? -> it isn't the induction im used to ), thus the opposing induced magnetic field.
green is just electric field, perpendicular to mag field as per usual
this weak effect is called [[Diamagnetism|diamagnetism]] -> its not strong enough to fully cancel or anything

> [!important] Bottom line
> The magnetic field felt by the proton (B𝜌) is less than the external magnetic field.

![[Pasted image 20260915083747.png]]
energy and increase magnitude of magnetic field makes sense because we already established this.
what to keep in note is that it's increased magnitude of magnetic field *felt by the proton* which is why as increased surrounding electron density means we feel less its just a simple subtraction
what to note here is that surrounding electron density quite literally is [[Shielding|shielding]] cuz that means its more shielded.
chain of thought -> more electron density around the proton -> more criculating charge -> more induced current *(AI note: this chain stops one or two links early — it doesn't get to "more opposing field → smaller $B_{p}$ → smaller $\Delta \epsilon_{p}$", which is exactly the step you got stuck on in [[Lecture 8 - Sep 17]]; worth finishing it here.)*

---

### Counting signals from symmetry

Next part is recap from [[MoM  Sep 14]]

> [!important] Big definition
> protons that are exchangable by rotational or reflectional symmetry have identical electronic environments and therefore only have one signal on H-1 NMR spectrum

nmr spectroscopy -> an instrument to measure nuclear magnetic resonance *(AI note: spectroscopy is the technique — the instrument is the NMR spectrometer, which is the word you used in [[MoM  Sep 14]]; minor, but worth keeping the two separate.)*

to find how many signals we'll detect -> just only care about symmetry dont worry too much about proximity with our atoms

![[Pasted image 20260915091052.png]]
CH3 ideas keeps going for more, 6,9,12
however do point out that the middle(6) one is 2 signals cuz of that Hydrogens

---

## Examples / Practice

![[Pasted image 20260915085959.png]]
compounds 1 only has one unique signals because all hydrogens are the same/groups are the same. however compounds 2 has two unique sections cuz of symmetry so two ppm spikes not just one.
this might not settle well just because its hard to prove equivalence with the hydrogens of each side but our assumption is that this doesnt matter. we just assume CH3 is one group, its an assumption out of our scope cuz the reason we can eliminate is something much more deep

![[Pasted image 20260915092600.png]]
4,2,1,3
for compounds B dont think a line think rotation around the center point, a 3d line.
A dont forget that CH3 is one thing
compound C kinda of a tricky question but its all just 1
compound D is pretty obvious its three

---

## Summary

This lecture sets up the machinery behind an H-1 NMR spectrum. A proton has two spin states, $\alpha$ aligned with the external field and $\beta$ against it, and the energy gap between them is directly proportional to the magnetic field actually felt by the proton — $\Delta \epsilon_{p} = \frac{h\gamma_{H}}{2\pi} B_{p}$. Feeding in exactly that much energy flips $\alpha$ to $\beta$, which is nuclear magnetic resonance. The field the proton feels isn't the full external field, though: its own circulating electrons induce a weak opposing field (diamagnetism, not strong enough to fully cancel), so $B_{p}$ is always less than the external field, and more surrounding electron density means more shielding. The last part recaps the symmetry rule from MoM — protons exchangeable by rotational or reflectional symmetry share an electronic environment and collapse into one signal — so counting signals is about symmetry, not proximity.

## Related
- [[MoM  Sep 14]] — the symmetry and axis-of-symmetry material this lecture recaps for signal counting
- [[Lecture 6 - Sep 14]] — the first pass at the NMR setup, external field and radiowave excitation
- [[Lecture 8 - Sep 17]] — where shielding becomes the ppm axis and signals start splitting into multiplets

## Questions for AI / Follow-up
- Why is the proton's induced field "lenz's law(?)" but not the induction from physics — what exactly is different about the diamagnetic case? (Flagged in the notes as "it isn't the induction im used to".)
- Finish the shielding chain: more electron density → more circulating charge → more induced current → and then what, specifically, happens to $B_{p}$ and $\Delta \epsilon_{p}$?
- Why is the middle (6H) compound 2 signals rather than 1? The note says "cuz of that Hydrogens" but doesn't say which symmetry operation fails.
