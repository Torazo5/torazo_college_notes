---
type: concept
source: mine
tags: [concept, chem042]
created: 2026-09-17
cleaned_with: cleanup-note v1.2.0
---
# Degree of unsaturation

the amount of hydrogen we need for saturation, and then the difference between that — then divide that by 2

for each DoU value -> theres an additoinal bond or an additional ring in the molecule.

| DoU | There is either |
|---|---|
| 1 | 1 double bond **OR** 1 ring |
| 2 | 1 triple bond **OR** 2 double bonds **OR** 1 double bond and 1 ring **OR** 2 rings |

## Non-hydrocarbons

the baseline $C_{n}H_{2n+2}$ only works for pure C and H, so first convert the formula to an equivalent hydrocarbon, then do the normal calculation.

| Atom | Adjustment | Why |
|---|---|---|
| **O** (or S) | just delete it | divalent — sits in the chain without changing the H count |
| **halogen** (F, Cl, Br, I) | becomes a hydrogen | monovalent, same as H |
| **N** (or P) | delete it *and* one H | trivalent — brings one extra H with it |

there is no step 4 — these three are the whole rule. S behaves like O and P behaves like N, so they fold into the same two lines.

then compare the converted formula against $C_{n}H_{2n+2}$ and divide the H shortfall by 2.

**example** — $C_{4}H_{9}NO_{2}$
drop the 2 O -> $C_{4}H_{9}N$
drop the N and one H -> $C_{4}H_{8}$
saturated baseline for 4 carbons is $C_{4}H_{10}$
so $(10-8)/2 = 1$ -> DoU 1

**DoU 0 means** no rings and no π bonds at all — no C=C, no C=O, no C≡C, no C≡N. Only single-bonded trees.

## Appears in
- [[Reading 4 - Sep 14]] — first defined here, with the $C_{n}H_{2n+2}$ baseline and the non-hydrocarbon adjustments
- [[MoM  Sep 14]] — used to bound the constitutional isomer search (DoU 0 means only single-bonded trees)
- [[Lecture 8 - Sep 17]] — recapped in class to build the $C_{5}H_{11}Br$ structure
- [[mid term revision]] — DoU = 0 means no rings and no π bonds

## Notes
