---
type: lecture
course: "[[CHEM 042 - Chemistry in the Modern World/_Course Info|CHEM 042 HM-02]]"
date: 2026-09-17
tags:
  - chem042
  - lecture
  - nmr
  - chemical-shift
  - shielding
  - spin-spin-splitting
cleaned_with: cleanup-note v1.2.0
cleaned_on: 2026-09-17
---
# CHEM 042 — Lecture

## Reading / Prep

- [[Reading 4 - Sep 14]] — saturated compounds and degree of unsaturation, recapped in class

## Key Terms

| Term | Meaning |
|---|---|
| [[Shielding]] | surrounding electron density quite literally shields the proton — more density means it feels less of the external field |
| [[Chemical shift]] | ppm — high ppm means larger energy required to change states, low ppm means lower energy. ppm is literally just frequency |
| [[Degree of unsaturation]] | the amount of hydrogen we need for saturation, and then the difference between that |
| [[Spin state]] | at any given moment there's 4 combinations of spin states for two protons |
| [[Spin-spin splitting]] | why one expected signal shows up as several lines (quartet, triplet) |
| [[N+1 rule]] | we see about $n+1$ signals when we have $n$ atoms to work with |

---

## Notes

### Shielding and where a signal lands on ppm

![[Pasted image 20260917082101.png]]
Flourine is quite [[Electronegativity|electronegative]] so it pulls a lot of electron density from these guys. from the chart in lecture 7 ->
![[Pasted image 20260917082135.png]]
less surrounding electron density would mean theres a larger energy difference thus we need more energy to excite, so we need higher freq.
the full chain for why less shielding = larger energy gap:
less electron density -> less circulating charge -> weaker opposing induced field -> larger $B_{p}$ -> larger $\Delta \epsilon_{p}$ (since $\Delta \epsilon_{p} = \gamma \hbar B_{p}$) -> more energy to flip -> higher freq -> higher ppm

![[Pasted image 20260917082944.png]]high ppm means larger energy required to change states
low ppm means lower energy required
ppm is literally just frequency -> so higher ppm larger energy

so in this case $H_{B}$ is less shielded, cuz of strong electronegative by Oxygen less shielded means larger energy required to change states so higher ppm.

---

### Pre-class recap — degree of unsaturation

pre-class recap [[Reading 4 - Sep 14]] ->
we know a [[Saturated compound|saturated]] hydrocarbon follows this format: $C_{n}H_{2n+2}$
then if we have an $C_{5}H_{11}Br$ we just do --> $C_{5}H_{12}$
and then to calculate DoU, its the amount of hydrogen we need for saturation and then the difference between that.

---

### Building a structure from the signals — $C_{5}H_{11}Br$

![[Pasted image 20260917084610.png]]
for the 9H we can use CH3 and then get 3 of those cuz then we have 9 hydrogens but are all in one signal cuz theyll be in a nice level of symmetry
we could just do a nice 3 way CH-3
![[Pasted image 20260917084809.png]]
cuz then all of these guys are symmetrical and we have 9 Hydrogens

for the 2 unique ->
we can just do a simple infront behind relationship on a carbon with single Hydrogen's
![[Pasted image 20260917085040.png]]
this is also symmetrical cuz infront and behind with through the compound plane

but nearby theres smt that pulls out the electronegativity in order to make it so that theres less shielding / more ppm
![[Pasted image 20260917085222.png]]
right cuz then the Br is quite electronegative and slides through.

this is also cuz we know the og compound is $C_{5}H_{11}Br$
![[Pasted image 20260917085610.png]]
this checks off a bunch of stuff we've been testing with this compound so its looking really good

---

### Why the signals split — spin states of the neighbours

![[Pasted image 20260917090200.png]]
we expect two signals because of the symmetry and stuff but obviously theres much more lines than we anticipated:
the number of lines are quartet and triplet respectively
main question is why are they splitting:
first lets assign the ppm stuff so like the quartet is $H_{B}$ cuz more electronegative is pulling from it so less shield so higher ppm

we kinda have to start thinking about spin states again:
![[Pasted image 20260917090548.png]]
at any given moment theres 4 combinations of spin states

![[Pasted image 20260917090638.png]]
so for one example if they are both pointing UP (aligned with $B_{0}$) then they increase the magnitude of magnetic field felt by the proton. bigger $B_{p}$ -> bigger $\Delta \epsilon_{p}$ -> more energy needed to flip -> **higher ppm**

![[Pasted image 20260917090647.png]]
here, they're both pointing down so the field felt by the proton gets smaller. smaller $B_{p}$ -> smaller $\Delta \epsilon_{p}$ -> less energy needed to flip -> **lower ppm**
so if theyre both pointing down it decreases the mag field the proton feels and the line lands at lower ppm. careful tho — this is NOT shielding. shielding is the electron density thing that sets where the signal sits in the first place. the neighbour spins just add or subtract a little bit of field on top of that.

this is reverse for the up up scenario
now lets consider the other 2:
![[Pasted image 20260917090838.png]]
now we can consider these two, which would cancel out our affects

then if we just consider this statistically happening we'll observe a 1:2:1 ratio just like this:
![[Pasted image 20260917091022.png]]
central line will be the tallest it just makes sense

> [!note] Out of scope
> the neighbour's spin doesnt change electronegativity at all — electronegativity is a fixed property of the atom. all thats changing is the local mag field the proton feels. how that effect actually travels through the bonds is out of scope for our course.

> [!important] The bit to remember
> **but this is kinda weird but maybe its affecting $H_{B}$ even though its $H_{A}$ because thats what's being affected by the change of our spin states if that makes sense(this is important)**

---

### Extending to three neighbours — 1:3:3:1

now lets consider 3 $H_{B}$ protons
lets consider some states
UP UP UP
DOWN DOWN DOWN
UP DOWN DOWN
UP UP DOWN
4 states -> pure up, pure down, one down, one up(unless we consider permutations? -> *we definitely should*)
then its

| Combination | Net |
|---|---|
| UUU | 3U |
| UUD | U |
| UDD | D |
| DDD | 3D |
| DUU | U |
| DDU | D |
| DUD | D |
| UDU | U |

so ratio is
1 : 3 : 3 : 1
the spikes align with that
![[Pasted image 20260917091608.png]]
yes its aproximately but pretty close

---

### The $n+1$ rule

we call this the $n+1$ rule as in we see $n+1$ **lines inside one signal** when we have $n$ equivalent neighbouring protons. not $n+1$ signals — the number of signals is the symmetry counting from [[MoM  Sep 14]], splitting is what happens inside each of those signals.

![[Pasted image 20260917092504.png]]
i mean this is just basic like identify the ppm order then use the n+1 rule, if its 0 like in the right-most case its just 1 like the 9H

the rule to consider a neighbour/close enough is if the protons are $\leq{3}$ bonds apart.

> [!warning] Left off here
> review the rest of the slides - later note -> we good now

## Examples / Practice


## Summary

This lecture ties where a signal sits on the ppm axis to how shielded the proton is, then explains why a single signal breaks into several lines. On the first half: an electronegative atom nearby pulls electron density away, so the proton is less shielded, which means a larger energy gap, more energy to excite, and therefore higher ppm — which is why $H_{B}$ next to the oxygen comes out at high ppm. Then a recap of degree of unsaturation from the reading gets used to build a candidate structure for $C_{5}H_{11}Br$, where a 9H signal is three symmetric CH3 groups and the 2H signal sits next to the electronegative Br. The second half is splitting: the neighbouring protons each sit in an up or down spin state, and those combinations shift the field the observed proton feels — two neighbours give four combinations collapsing to a 1:2:1 triplet, three neighbours give eight permutations collapsing to 1:3:3:1. Generalized, that's the $n+1$ rule, and a neighbour only counts if it's $\leq 3$ bonds away.

## Related
- [[Lecture 7- Sep 15]] — where shielding, spin states and the $\Delta \epsilon_{p} \propto B_{p}$ relationship were set up; this lecture applies them to real spectra
- [[Reading 4 - Sep 14]] — saturated compounds and degree of unsaturation, recapped here to build the $C_{5}H_{11}Br$ structure
- [[MoM  Sep 14]] — counting unique signals from symmetry, which is what the 9H-and-2H assignment relies on
- [[Reading 5 - Sep 16]] — induction, the longer-range version of the electron-density pull driving shielding here

## Questions for AI / Follow-up
- Why does less shielding mean a larger energy gap? (Written as "bit confused on why less shielding means larger energy gap." — the chain seems to be: less electron density → less opposing induced field → larger $B_{p}$ → larger $\Delta \epsilon_{p}$, but confirm that's the actual reasoning.)
-> NEW ANSWER BY ME
yeah thats it. larger field = more energy required to change states. $\Delta \epsilon_{p} = \gamma \hbar B_{p}$ so the gap is directly proportional to the field the nucleus actually feels. stronger field just widens the penalty for sitting opposed to it.
- In the splitting explanation the notes say the neighbour's spin "decreases electronegativity" — what is actually changing? Is it purely the local magnetic field added or subtracted by the neighbour's spin, with electronegativity playing no role in splitting at all?
-> NEW ANSWER BY ME
purely the local mag field. electronegativity plays zero role in splitting — its fixed per atom and cant change when a neighbour flips. two separate things sharing one lever ($B_{p}$): electron density sets the chemical shift (where the signal sits), neighbour spins set the splitting (lines inside that signal). the multiplet stays centred on the shift.
- Why is the neighbour cutoff exactly $\leq 3$ bonds, and does that connect to the induction falloff by number of bonds from [[Reading 5 - Sep 16]]?
