---
type: lecture
course: "[[CHEM 042 - Chemistry in the Modern World/_Course Info|CHEM 042 HM-02]]"
date: 2026-09-10
tags: [chem042, lecture, dipole-moment, polarity, ir-spectroscopy, vsepr, molecular-geometry]
cleaned_with: cleanup-note v1.3.0
cleaned_on: 2026-09-21
---
# CHEM 042 — Lecture

## Reading / Prep

- [[Reading 3 - Sep 9]] — dipole moments, VSEPR, electron domains

## Key Terms

| Term | Meaning (your words) |
|---|---|
| [[Electron domain]] | A double bond, a single bond, or a lone electron pair — each counts as one |
| [[Trigonal planar]] | The geometry you get with 3 electron domains |
| [[Dipole moment]] | The $\vec{\mu}$ vectors between [[Partial charge\|partial charges]]; magnitudes can be equal and still not cancel |
| [[Net dipole moment]] | What's left after the components cancel — if it's nonzero the molecule is polar |
| [[IR active]] | The bond's oscillating dipole emits/absorbs IR — "the wave emits and that creates light itself" |
| [[Infrared spectroscopy]] | Polar bonds absorb IR and so appear on the spectra; more polar = stronger signal |

---

## Notes

### Dipole vectors and electron domains

> [!warning] Sign convention
> vectors between partial charges are negative to positive (reverse of physics) *(AI note: this may be backwards — the usual chemistry arrow runs δ+ → δ− (crossed tail at the positive end) while the physics $\vec{\mu}=q\vec{R}$ runs − to +; check against the $\vec{\mu}=q \times \vec{R}$ figure in [[Reading 3 - Sep 9]].)*

![[Pasted image 20260910083246.png]]

number of [[Electron domain|electron domains]] -> 3 (double bond, single bond, lone electron pair)

this will be a [[Trigonal planar|trigonal planar]]:

![[Pasted image 20260910083515.png]]

---

### Why equal dipoles don't always cancel

![[Pasted image 20260910084017.png]]

according to dipole model -> it considers the magnitude of the two mu vectors from S to O

$$
|\mu_{1}| = |\mu_{2}|
$$

but doesnt cancel out cuz only horizontal components cancel out thus net dipole is a downwards. and its polar

> [!note] To do
> try to practice water

---

### Oscillating dipoles and IR activity

![[Pasted image 20260910085207.png]]

the compression wave creates an electric wave here but this is because its H-F so that we can see an oscillating electric field

**why does it oscillate in the first place**

- realistically the compressoin and retraction happen because when theyre far apart the bonds want to bring them together or repel them. but initial movements happen because of the inherent energy of the particle due to thermal/internal energy
- this is what we call [[IR active]].

simply said the wave emits and that creates light itself.

they also absorb IR light thus appear on the spectra

> [!important] more polar will absorb stronger IR signals

---

### The nonpolar case — no oscillating dipole

however, imagine a non polar, like O - O, so $\mu = 0D$ which would mean no oscillating dipole

-> this will result in a flat line graph

**Functional Groups**
a group of atoms in a molecule that has specific, predictable chemical reactivity
a lot of control of the chemical properties of the molecule apparently
popular groups:
Carbon - (1,2,3) bonds -> Alkanes, alkenes, alkynes
Carbon and Oxygen
-> O-H and a carbon -> alcohol
-> C = O carbonyl-containing group![[Pasted image 20260910092558.png]]
![[Pasted image 20260912172614.png]]
![[Pasted image 20260912172607.png]]


even in same element bonds like this we can tell by the distance of the bonds outside of the same element things going on so we'll see some weird things going on

bunch of practice and slides go thorugh here.

how to identify from IR graph:
|Wavenumber, cm⁻¹|What to think|
|---|---|
|**3200–3600, broad**|O–H|
|**~3300, sharper**|N–H|
|**2850–3000**|C–H, sp³|
|**~3000–3100**|C–H, sp²|
|**2100–2300**|C≡C or C≡N|
|**1650–1750, strong**|C=O|
|**~1600–1680**|C=C|
|**1000–1300**|C–O|

---

## Examples / Practice

### Which bond gives the more intense signal?

![[Pasted image 20260910090657.png]]

1 is more electronegative so definitely more intense
between O and C

### Which are IR inactive?

![[Pasted image 20260910091539.png]]

3 and 4 because same element which means no polarity

---

## Summary

This lecture connected molecular geometry to what actually shows up on an IR spectrum. Counting [[Electron domain|electron domains]] (bonds *and* lone pairs) gives you the shape — 3 domains → trigonal planar — and the shape decides whether the individual bond dipoles cancel. Equal magnitudes aren't enough: in the bent SO₂-type case only the horizontal components cancel, so there's a net downward dipole and the molecule is polar. A polar bond has an oscillating dipole when it vibrates, which both emits and absorbs IR light — that's what "IR active" means, and more polar bonds give stronger signals. Same-element bonds like O–O have $\mu = 0D$, no oscillating dipole, and so give a flat line.

## Related

- [[Reading 3 - Sep 9]] — where the dipole moment formula, VSEPR, and electron-domain counting came from
- [[Lecture 4 - Sep 8]] — absorption spectroscopy and the bond potential energy curve this builds on

## Questions for AI / Follow-up

- Which direction does the dipole arrow actually point in this course's convention — δ+ → δ− or δ− → δ+? (see the warning callout at the top; the note and the physics definition disagree)
- Work through water as the practice case: 2 lone pairs + 2 bonds, what geometry and what net dipole?
- The last figure — "we can tell by the distance of the bonds outside of the same element things going on" — what exactly was the slide showing? Check the Sep 10 slides for the same-element case that *isn't* a flat line.
