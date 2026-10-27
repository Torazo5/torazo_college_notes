---
type: reading
course: "[[CHEM 042 - Chemistry in the Modern World/_Course Info|CHEM 042 HM-02]]"
source:
date: 2026-09-27
tags: [chem042, reading, orbitals, quantum-numbers, electron-configuration, pauli, aufbau]
cleaned_with: cleanup-note v1.4.0
cleaned_on: 2026-10-06
---
# CHEM 042 — Reading

## Key Terms

| Term | Meaning (your words) |
|---|---|
| [[Orbital]] | basically places with high probabilities of electrons existing. electron distribution are PDF's |
| [[Principal quantum number]] ($n$) | ive seen ts a million times |
| [[Angular momentum quantum number\|$\ell$ quantum number]] | going from 0 to n-1 and dictates shape of orbital. its pretty much the shape of the orbital |
| [[Magnetic quantum number]] ($m_\ell$) | integer value from $-\ell$ to $\ell$. the possible values does mean number of orbitals that we can have |
| [[Spin quantum number]] | describes the spin of the electrons, always two values for every orbital: 1/2 and -1/2. only 2 electrons are possible on each orbit |
| [[Electron configuration]] | quantum number and then orbital shape and then exponent as number of electrons there |

---

## Notes

### Orbitals as probability

Electrons are in [[Orbital|orbitals]] basically places with high probabilities of electrons existing.

![[Pasted image 20260927150738.png]]

electron cloud concepts

main point to remember here is that electron distribution are [[Probability density function|PDF's]]
this is pretty connected to IB physics quantum mechanics
Orbitals have characteristics -> size, shape and associated energy.

---

### The quantum numbers

| Symbol | Name | Values | What it tells you |
|---|---|---|---|
| $n$ | [[Principal quantum number\|principal quantum number]] | | |
| $\ell$ | [[Angular momentum quantum number\|quantum number]] | 0 to $n-1$ | shape of orbital |
| $m_\ell$ | [[Magnetic quantum number\|magnetic quantum number]] | $-\ell$ to $\ell$ | number of orbitals |
| | [[Spin quantum number\|spin]] | 1/2, -1/2 | 2 electrons max per orbital |

main point here is principal quantum number($n$) -> ive seen ts a million times

secondary number im not familiar with is **quantum number,** ($\ell$) going from 0 to n-1 and dictates shape of orbital: *(AI note: the name looks cut off. $\ell$ is usually called the angular momentum (or azimuthal) quantum number, so check the reading's wording)*
basically just possibilities:

![[Pasted image 20260927151015.png]]

ok i kinda misunderstood its not basically possibilities. its pretty much the shape of the orbital. hard to explain maybe just memorization:

![[Pasted image 20260927151203.png]]

in this 3d graph, point $(0,0,0)$ is the nucleus.

final value is magnetic quantum number($m_{\ell}$) and has an integer value from $-\ell$ to $\ell$

![[Pasted image 20260927151445.png]]

> [!important]
> The possible values for magnetic quantum number does mean number of orbitals that we can have though and thats pretty important.

#### Quick check: $n = 3$

if n=3 then $\ell = 0,1,2$
cuz its 0 to n-1
and just by convention we know $\ell = 2$ is $d$
and mag quantum number is from $-\ell$ to $\ell$ thus:

$$
m_{\ell}=-2,-1,0,1,2
$$

---

### Spin: two electrons per orbital

> [!important]
> **Every orbital can accommodate up to two electrons of opposite spins.**

A fourth and final quantum number describes the spin of the electrons, and there are always two values for every orbital: 1/2 and -1/2.
this is so funky for no reason but its basically saying only 2 electrons are possible on each orbit. This is cuz each guy has an spinning state and only 2 are allowed thus 3 is not possible.

![[Pasted image 20260927152327.png]]

#### Worked: max electrons for $n = 2$

so this might be a bit confused so lets do n =2
then $\ell = 0,1$, $m_{\ell}=-1,0,1$

| $\ell$ | $m_\ell$ | orbitals | electrons |
|---|---|---|---|
| 0 | 0 | 1 (think of it as len($m_{\ell}$)) | 1x2 = 2 |
| 1 | -1, 0, 1 | 3 | 3x2 = 6 |

so in total 8 electrons max for this guy

---

### Filling orbitals and electron configurations

![[Pasted image 20260927153217.png]]

lower energy fills first.

![[Pasted image 20260927154334.png]]

the arrows are just for electrons

![[Pasted image 20260927154454.png]]

parallel first not particularly sure why some convention shit maybe
this config has notation. in which we do:
quantum number and then orbital shape and then exponent as number of electrons there so here it'd be:

$$
1s^2, 2s^2, 2p^3
$$

btw it ends at the parallel because this one only has 7 electrons and thus thats max we can fill

![[Pasted image 20260927154924.png]]

makes it really convenient to identify s p d f

#### Example: sulfur

so basically with total electrons we fill in the shit so for sulfur its

$$
1s^2, 2s^2, 2p^6, 3s^2, 3p^4
$$

the $3p^4$ is a bit odd as in its: 3p:  ↑↓  ↑   ↑
looks like this:

![[Pasted image 20260927155351.png]]

every atom follows this weirdo structure so can always just input like that

![[Pasted image 20260927155416.png]]

energy jump for hydrogen atom becauase of perfect $\Delta E$ energy addition.

---

### Example prac

n = 3, and an s ($\ell = 0$) quantum number
$\ell$ can be 0,1,2
for $\ell$ =0 that would mean that $m_{\ell} = 0$ so only one possible orbital so only 2 eletrons n =3 actually has no effect?

## Summary

Orbitals are places with a high probability of finding an electron, so electron distributions are PDFs, each with a size, shape and energy. Four quantum numbers describe them. $n$ is the principal number. $\ell$ runs from 0 to $n-1$ and gives the shape (s, p, d, f). $m_\ell$ runs from $-\ell$ to $\ell$, and the number of its values is the number of orbitals. Spin is ±1/2, so every orbital holds at most two electrons, which gives 8 max for $n = 2$. Electrons fill lowest energy first and go in parallel before pairing. Configurations are written as $n$, then the shape letter, then the number of electrons as an exponent (N = $1s^2 2s^2 2p^3$, S = $1s^2 2s^2 2p^6 3s^2 3p^4$).

## Related

- [[Lecture 11 - Sep 28]] — the lecture after this reading: orbitals as standing waves, squared to get the PDF
- [[Lecture 12 - Sep 29]] — molecular orbitals, filled with the same lowest-first and two-per-orbital rules

## Questions for AI / Follow-up
- Why do electrons go in parallel first before pairing up (the $3p^4$ ↑↓ ↑ ↑ pattern)? Is this Hund's rule, and is there a real reason behind it beyond convention?
- In the last example: if $n=3$ and $\ell=0$ give only 2 electrons, does $n$ "have no effect"? What does $n$ change for a 3s vs 1s orbital (size, energy)?
- What's the official name of $\ell$: angular momentum quantum number or azimuthal quantum number? And why is $\ell = 2$ called $d$?
