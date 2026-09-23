---
type: lecture
course: "[[CHEM 042 - Chemistry in the Modern World/_Course Info|CHEM 042 HM-02]]"
date: 2026-09-14
tags:
  - chem042
  - lecture
  - constitutional-isomers
  - symmetry
  - degree-of-unsaturation
cleaned_with: cleanup-note v1.2.0
cleaned_on: 2026-09-17
---
# CHEM 042 — Lecture

## Reading / Prep


## Key Terms

| Term | Meaning |
|---|---|
| [[Constitutional isomer]] | molecules that share the same chemical formula but has different atomic connectivity |
| [[Axis of symmetry]] | a rotation line — with these lines they are completely symmetrical, so they share the same chemical properties |
| [[Plane of symmetry]] | a reflection instead of a rotation — a plane on the plane of the paper/screen so that its a perfect reflection |
| [[Degree of unsaturation]] | tells you if rings/double bonds are allowed — DoU 0 means only single-bonded trees to consider |

---

## Notes

### Constitutional isomers

[[Constitutional isomer|constitutional isomers]] are molecules that share the same chemical formula but has different atomic connectivity.
![[Pasted image 20260914184041.png]]
this for example is the same thing but has different arrangement of Oxygen. thus constitutional isomers

![[Pasted image 20260914184117.png]]
here it isn't because carbon is the same number but more hydrogens on the right.

![[Pasted image 20260914184143.png]]
here it equivalent chemical formula. BUT these are identical compounds

![[Pasted image 20260914184252.png]]
the CCO can be re arranged such as:
![[Pasted image 20260914184505.png]]

---

### Why only the heavy atoms build the skeleton

why only C C C O are we caring about?
-> because H only makes 1 bond, so it's always a dead end. it can never sit *between* two atoms, so it can never change the connectivity. only the multivalent atoms build the skeleton:

| Atom | Bonds | Role in the skeleton |
|---|---|---|
| C | 4 bonds | can be a junction / branch point |
| O | 2 bonds | can be a link in a chain (inserted between two C's) |
| H | 1 bond | terminal only, never a connection point |

so the method is:

1. enumerate the distinct heavy-atom skeletons first
2. then fill H's into whatever valences are left over

step 2 is *forced*, not a choice - each C takes however many H's it needs to hit 4 bonds - so it generates nothing new to count.

that's why the three skeletons above are the complete list for C3H8O:

| Skeleton | Compound |
|---|---|
| C-C-C-O | propan-1-ol |
| C-C-O-C | methoxyethane (ethyl methyl ether) |
| C-C(-O)-C | propan-2-ol |

and notice the branched one *has* to have carbon in the center - O can't be a branch point because it only makes 2 bonds. the valence rule kills that case automatically, which is why it's exactly 3 and not more.

> [!warning] Caveat
> H isn't irrelevant, it's *determined*. the H count still tells you if rings/double bonds are allowed:
> DoU = (2(3) + 2 - 8) / 2 = 0 -> C3H8O is fully saturated, so only single-bonded trees to consider.
> compare C3H6O (diagram a): DoU = 1, so a ring or double bond is mandatory somewhere and the search space blows up (acetone, propanal, the enol, epoxide...).

![[Pasted image 20260914184516.png]]
an important point to highlight here is that direction means nothing here. in the sense that this means its in front and behind it.

---

### Axis of symmetry

[[Axis of symmetry|axis of symmetry]]
![[Pasted image 20260914184730.png]]
there are 3 axis of symmetry here
![[Pasted image 20260914184833.png]]
3 is through the middle 180 degrees on the third axis

axis of symmetry has a huge chemical implication here:
because with these lines they are completely symmetrical ,they share the same chemical properties
![[Pasted image 20260914185050.png]]
these two hydrogens share the same property
same for the ones below and same for all 8 if you think about it. -> implication we'll see this soon

---

### Reflection through a plane

another sample we can do reflection along a [[Plane of symmetry|plane]]
![[Pasted image 20260914185405.png]]
i dont have the drawing here but u can kinda expect whats going on.

but thats not pure symmetry. to do symmetry we can just do a plane on the plane of the paper/screen so that its a perfect reflection.
![[Pasted image 20260914190946.png]]
this doesnt count as an axis of symmetry because the bromine would go the other side. *(AI note: you call this an "axis" but the operation being tested here is the reflection plane you just introduced — worth keeping axis (rotation) and plane (reflection) separate, since the signal-counting rule in [[Lecture 7- Sep 15]] uses both.)*
ai question: why doesn't this work? as in isn't it chemically the same thing -> its sort of direction dependent because or else we won't detect correcltu from the instrument

![[Pasted image 20260914191139.png]]
plane can cut through bromine to create symmetry.
on an NMR spectrometer stuff we'll see 5 signals -> ai explain this more

---

## Examples / Practice
![[Pasted image 20260914185940.png]]

## Summary

Two connected ideas. First, constitutional isomers are molecules with the same formula but different atomic connectivity — and the way to enumerate them is to build the heavy-atom skeleton first, because hydrogen only makes one bond and so can never sit between two atoms or change connectivity. Filling in the H's afterwards is forced rather than a choice, which is why C3H8O has exactly three isomers, and why oxygen can't be the branch point. The H count still matters, though, since it fixes the degree of unsaturation and therefore whether rings or double bonds are even allowed. Second, symmetry: an axis of symmetry (rotation) or a plane (reflection) that maps one hydrogen onto another means those hydrogens are chemically identical and share the same properties — which is the implication that gets used for counting NMR signals in the next lectures.

## Related
- [[Lecture 7- Sep 15]] — explicitly recaps this note's symmetry rule as the basis for counting unique H-1 signals
- [[Reading 4 - Sep 14]] — saturated compounds and the degree of unsaturation calculation used in the caveat above
- [[Lecture 6 - Sep 14]] — same day, the proton NMR spectrum this symmetry work feeds into
- [[Lecture 8 - Sep 17]] — where symmetry-based signal counting builds the $C_{5}H_{11}Br$ structure

## Questions for AI / Follow-up
- Why doesn't the reflection in the bromine diagram count? Is it genuinely not the same compound, or is it the same compound but distinguishable by the instrument? (Written in the note as "isn't it chemically the same thing -> its sort of direction dependent".)
- Why do we see 5 signals on the last compound — which symmetry operations group which hydrogens together to get to 5? (Flagged as "ai explain this more".)
- For the 3-axis case, what are the three axes concretely, and does "180 degrees on the third axis" mean a C2 rotation perpendicular to the page?
