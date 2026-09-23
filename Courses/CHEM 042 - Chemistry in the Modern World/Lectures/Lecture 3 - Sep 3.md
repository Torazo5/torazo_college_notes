---
type: lecture
course: "[[CHEM 042 - Chemistry in the Modern World/_Course Info|CHEM 042 HM-02]]"
date: 2026-09-03
tags: [chem042, lecture, mass-spectrometry, isotopes, fragmentation, lewis-structures]
cleaned_with: cleanup-note v1.3.0
cleaned_on: 2026-09-21
---
# CHEM 042 — Lecture

## Reading / Prep


## Key Terms

| Term                          | My definition                                                                                                                                                    |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [[Percent abundance]] | Set up mass-weighted equation equal to the average atomic mass, plus $x+y=1$, then solve                                                                         |
| $[m]^{.+}$                    | The [[Molecular ion|molecular ion]]                                                                                                                                                |
| $[m+2]^{.+}$, $[m+4]^{.+}$    | Molecular ion + number of neutrons added                                                                                                                         |
| $\delta m/z = 35$             | Cl-35 got fragmented off — we lose 35 atomic units                                                                                                               |
| [[Bond dissociation energy]]      | How hard a bond is to break — Cl fragments hella, so C-Cl is much weaker than C-H                                                                                |
| [[Molecular ion\|Molecular Ion Peak]] | whole molecule after ioniaztion. Not necessarily the biggest peak but usually the secnod last present peak because its after one C-13 defect(if its hydrocarbon) |

## Notes

### Percent abundance calculation

[[Percent abundance|Percent abundance calculation]] ->
lets say two [[Isotope|isotopes]] of Chlorine, 35 and 37. and avg atomic mass is 35.45 the calc is just

$$
35x+37y = 35.45
$$

$$
x+y = 1
$$

then just calculate from there

$$
34.969(1-y) + 36.966(y) = 35.45
$$
$$
1.997y = 0.481
$$
$$
y = 0.243
$$

---

### Reading the isotope peaks

![[Pasted image 20260903083732.png]]

you can see three peaks so its like all Cl - 35, one Cl - 37 and two Cl-39 *(AI note: Cl-39 may be wrong — the abundance calc right above only uses Cl-35 and Cl-37, so this may have meant two Cl-37; check the Sep 3 slide with the three-peak spectrum)*
and they get more rare which makes sense just like we calculated. also just makes sense probabilistically

notation wise we say:

| Notation | Meaning |
|---|---|
| $[m]^{.+}$ | molecular ion |
| $[m+2]^{.+}$ | molecular ion + number of neutrons added |
| $[m+4]^{.+}$ | molecular ion + number of neutrons added |

85 has potential to be a C-13 but Cl defects. this is low because well C-13 rarely exists *(AI note: "Cl defects" looks garbled or incomplete — check the slide where the 85 peak is explained)*

---

### Fragmentation of CH2Cl2 → what it says about bond strength

![[Pasted image 20260903085255.png]]

difference between the biggest guy peak and the peak we knew which was CH2Cl2
so if Cl gets fragmented -> we lose 35 atomic units

$$
\delta m/z = 35 \to Cl -35
$$

usually ->
- 1 Carbon
- 2 Hydrogen
- 2 Chlorine

83 is a scenario we lose one Hydrogen ( from 84 ) *(AI note: 84 may be wrong — CH2Cl2 with two Cl-35 is 84, so double-check whether 83 is coming off the 84 or the 86 peak on the spectrum image above)*
this is an unlikely scenario but possible.

> [!important]
> this means that the C-H bond is pretty damn strong
>
> however, our chlorine fragments hella, which means the C-Cl bond is much much weaker than C-H, in other words, [[Bond dissociation energy|bond disassociation energy]] is higher for C-H than C-CL (right?)

---

### STEPS TO TAKE TO SOLVE THE QUESTIONS ON FINDING LEWIS STRUCTURE AND HYDROCARBONS

#### Step 1 — look at the graph
look at the [[Mass spectrometry|mass spectrometry]] graph.

#### Step 2 — look at the last two lines
because the very last one and the second last one is all C-12 and one C-13 mutation.

#### Step 3 — trial and error the formula
then you can generally trial and error(very quick) of the number of C and H it won't be too hard, its pretty predictable. like for example total 42 will be like 3 Carbons and 6 Hydrogens

#### Step 4 — try structures and check formal charge
and then you just try some structures to make sure it makes sense. then check [[Formal charge|formal charge]](where do i check? lets check this later)

#### Step 5 — done
then youll get the strcuture

## Examples / Practice

### Probability of the Cl combinations

| | Calculation | Result |
|---|---|---|
| a) | $0.75 \times 0.75$ | 0.5625 |
| b) | $0.75 \times 0.24 + 0.75 \times 0.24$ | 0.36 |
| c) | $0.24 \times 0.24$ | 0.0576 |

### Going back to the 49 peak

wait at 49 were
Cl, C, 2H
a carbon cuts off easier
right so dropping into 83 means C - H gets cut off
but dropping to 49 means C - Cl gets cut off.
so its more clear which is weaker

## Summary

This lecture ran percent abundance for the two chlorine isotopes as a two-equation system ($35x+37y=35.45$ with $x+y=1$), then used that same logic to read the isotope peaks on a mass spectrum — the $[m]^{.+}$, $[m+2]^{.+}$, $[m+4]^{.+}$ pattern is just the molecular ion plus added neutrons, and the peaks get rarer for the reason the abundance math predicts. Applying that to CH2Cl2, the fragment losses tell you about bond strength: losing 35 (a whole Cl) happens constantly while losing one H to get 83 is rare, which is the evidence that C-Cl is much weaker than C-H. That fed into the general procedure for the [[Lewis structure]] / hydrocarbon problems — read the last two peaks, trial-and-error the C and H count, then sanity-check a structure with formal charge.

## Related
- [[Reading 1 - Sep 3]] — same day; where [[Formal charge]], [[Lewis structure]] and [[Bond dissociation energy]] are actually defined
- [[Lecture 9 - Sep 21]] — chromatography, for when mass spec alone can't say whats going on in a mixture
- [[Lecture 4 - Sep 8]] — moves from mass spec to absorption spectroscopy as the next way to find composition

## Questions for AI / Follow-up
- Is my conclusion right that bond dissociation energy is higher for C-H than C-Cl, based on Cl fragmenting way more than H?
- then check formal charge — where do i check? Where do I check formal charge of a structure, and at what point in the process?
-> NEW ANSWER BY ME
u check the one that hasn't finished. because charged means radical and that many number of bonds is not required to finish. 
- I wrote the three peaks as "all Cl-35, one Cl-37 and two Cl-39" — is Cl-39 actually what I meant there, or should that be two Cl-37? Also want to re-explain "85 has potential to be a C-13 but Cl defects."
