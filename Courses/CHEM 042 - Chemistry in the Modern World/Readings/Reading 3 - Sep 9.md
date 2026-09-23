---
type: reading
course: "[[CHEM 042 - Chemistry in the Modern World/_Course Info|CHEM 042 HM-02]]"
source:
date: 2026-09-09
tags: [chem042, reading, dipole-moment, polarity, vsepr, molecular-geometry]
cleaned_with: cleanup-note v1.3.0
cleaned_on: 2026-09-21
---
# CHEM 042 HM-02 — Reading

## Key Terms

| Term | My definition |
|---|---|
| [[Dipole moment]] | $\vec{\mu}=q \times \vec{R}$ — charge times separation |
| [[Partial charge]] | $q$ charge is partial so have to multiply elementary charge by delta and then divide by conversion factor |
| [[Ionic character]] | partial charge = ionic character — if partial charge was +1 and -1 thatd be a ful ionic transfer, so like +0.2 and -0.2 is like 20% the way of ionic transfer |
| [[Nonpolar covalent bond\|non-polar]] | theres no partial charge so no dipole moments |
| [[VSEPR theory]] | **v**alence - **s**hell - **e**lectron - **p**air - **r**epulsion |
| [[Electron domain]] | non bonding loose pair, single double or triple bonds — pretty straight forward just where electrons are kinda grouped |

---

## Notes

### Dipole moment

[[Dipole moment|Dipole moment]] ->

$$
\vec{\mu}=q \times \vec{R}
$$

![[Pasted image 20260909222101.png]]

$$
\mu = |\frac{\delta \times e^- \times R(A)}{D}|
$$
btw some bs unit stuff:
$$
A = 10^{-10} m
$$

$$
1D = 3.336\times{10}^{-20}C \times A
$$
cuz $q$ charge is partial so have to multiply elementary charge by delta and then divide by conversion factor.

![[Pasted image 20260909222343.png]]

non-polar means that theres no partial charge so no dipole moments

---

### Partial charge = ionic character

> [!note] working this out
> not sure why but [[Partial charge|partial charge]] = [[Ionic character|ionic character]]
> ah right cuz if partial charge was +1 and -1 thatd be a ful ionic transfer
> so like +0.2 and -0.2 is like 20% the way of ionic transfer

![[Pasted image 20260909222926.png]]

just have to rearrange:

$$
\delta = \frac{\mu \times D}{e^- \times R(A)}
$$

*(AI note: I got this by rearranging your own $\mu$ formula above rather than from the reading — check it against the worked example in the image)*

---

### VSEPR theory

**v**alence - **s**hell - **e**lectron - **p**air - **r**epulsion
VESPR THEORY *(AI note: the letters you spelled out give VSEPR, not VESPR — worth fixing before the wrong order sticks)*

-> electron **domains** repel each other and arrange themselves as far as possible around the central atom to minimize electrostatic repulsion and achieve stability.

domains are non bonding loose pair, single double or triple bonds *(AI note: "loose pair" looks like it should be "lone pair" — same term as in [[Reading 1 - Sep 3]])*

![[Pasted image 20260909223149.png]]

optimally far away

---

### Counting electron domains

more about domains:

![[Pasted image 20260909223259.png]]

pretty straight forward just where electrons are kinda grouped

> [!important]
> wait BeCl2 is 2 electron domains? -> this is because we only countr from the central atom so only the two connecting bonds

---

### Polarity and bond dipoles

polarity can kinda fuck things up

![[Pasted image 20260909223448.png]]

see at non-polar obviously bond dipoles cancel out but at polar they dont do it completely so its quite awkward

## Summary

A dipole moment is $\vec{\mu}=q \times \vec{R}$, but since $q$ is a partial charge you actually compute it as $\mu = |\frac{\delta \times e^- \times R(A)}{D}|$ — elementary charge scaled by delta, divided by the conversion factor. Non-polar means no partial charge, so no dipole moment at all. The reason partial charge is the same thing as ionic character is that a full ±1 separation would be a complete ionic transfer, so ±0.2 is 20% of the way there. The second half is VSEPR: electron domains (lone pairs and single/double/triple bonds, counted only from the central atom — which is why BeCl2 is 2 domains) repel each other and spread as far apart as possible to minimize electrostatic repulsion. Putting the two halves together, geometry decides whether the bond dipoles cancel: in the non-polar cases they cancel cleanly, in the polar cases they don't fully cancel.

## Related
- [[Reading 2 - Sep 7]] — where electronegativity and partial charge come from; this reading turns that into dipole moments
- [[Reading 6 - Sep 20]] — dipole moments turned into intermolecular forces between molecules
- [[Reading 1 - Sep 3]] — Lewis structures and lone pairs, which is what you're counting as electron domains here

## Questions for AI / Follow-up
- What exactly is $D$ in the $\mu$ formula (the conversion factor to Debye?) and what units does $R(A)$ have to be in — angstroms?
- Does a triple bond count as one electron domain even though it's three bonds — and does it take up *more* angular space than a single bond?
- For the polar cases where bond dipoles don't fully cancel, how do you actually add them up to get the net molecular dipole — vector addition on the geometry?
