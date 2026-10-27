---
type: reading
course: "[[MATH 019 - Single and Multivariable Calculus/_Course Info|MATH 019 HM-04]]"
source:
date: 2026-10-12
---
# MATH 019 HM-04 — Reading

## Key Terms


## Notes
activation energy and rate
![[Pasted image 20261012215623.png]]the threshold amount of energy required for molecules that are colliding to react.

Arrhenius equation:
![[Pasted image 20261012215652.png]]
a more micro equation for k obs
![[Pasted image 20261012215716.png]]
be very careful about units

energy lower than $E_{a}$ wont react
![[Pasted image 20261012215758.png]]basic understanding

![[Pasted image 20261012215810.png]]
i mean makes sense higher temp means higher kinetic energy which means greater number of molecular collisions.
![[Pasted image 20261020172533.png]]
i reminder of this point is that temperature doesnt equal energy its all kind of a distribution.

![[Pasted image 20261012215906.png]]
take natural log for linearization

Start with:
$$k_{obs} = A\,e^{-E_a/RT}$$

Take the natural log of both sides:
$$\ln k_{obs} = \ln\!\left(A\,e^{-E_a/RT}\right)$$

The log of a product is a sum, $\ln(xy) = \ln x + \ln y$:
$$\ln k_{obs} = \ln A + \ln\!\left(e^{-E_a/RT}\right)$$

$\ln$ and $e$ cancel, $\ln(e^{u}) = u$:
$$\ln k_{obs} = \ln A - \frac{E_a}{R}\cdot\frac{1}{T}$$

This has the form $y = b + mx$:
- $y = \ln k_{obs}$
- $x = 1/T$
- slope $m = -E_a/R$
- intercept $b = \ln A$

then u can use to find activation energy:
![[Pasted image 20261012220137.png]]

should know this trick so i could acurately replicate it.





## Summary


## Questions for AI / Follow-up
- 
