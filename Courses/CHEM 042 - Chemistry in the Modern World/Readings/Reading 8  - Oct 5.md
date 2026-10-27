---
type: reading
course: "[[CHEM 042 - Chemistry in the Modern World/_Course Info|CHEM 042 HM-02]]"
source:
date: 2026-10-05
tags: [chem042, reading, kinetics, reaction-rate, rate-law, reaction-order]
cleaned_with: cleanup-note v1.4.0
cleaned_on: 2026-10-06
---
# CHEM 042 — Reading

## Key Terms

| Term | Meaning (your words) |
|---|---|
| [[Reaction rate]] | can only be determined experimentally. the rate at what we're losing A is gonna be the rate as we're gaining B |
| [[Instantaneous rate]] | just like in calculus, the shorter the delta t the closer we get to instantaneous reaction rate |
| [[Reaction order]] | exponent on reactant's concentration in the rate law. basically how strongly the rate responds when you change the reactants concentration |
| [[Rate law]] | rate = $k_{obs}[NO]^2[O_{2}]$ |

---

## Notes

### Average reaction rates

- [[Reaction rate|reaction rates]] can only be determined experimentally

![[Pasted image 20261005201233.png]]

very logical and simple don't see its relevance tbh.
the rate at what we're losing A is gonna be the rate as we're gaining B. like ofc

in this example

$$
A+B \to 2C
$$

for one A and one B 2 C are made.
so rate of C is double of each A and B.

![[Pasted image 20261005201453.png]]

thus this general formula.

![[Pasted image 20261005201645.png]]

logically its just double so 0.05 makes sense.

---

### Instantaneous rate

just like in calculus, the shorter the delta t the closer we get to [[Instantaneous rate|instantaneous reaction rate]]

chemical reactions change over time, so instantaneous is honestly much more useful data.

---

### Rates from coefficients

> [!warning] don't drop the coefficient!

$$
2A+B \to 3C
$$

each time the reaction happens, 2 A's get sucked out, 1 B gets sucked out, 3 C's appear

```
A A  +  B   →   C C C
```

so rates follow the coefficients 2 : 1 : 3
- if C forms at 0.150 M/s → A is consumed at $0.150 \times \frac{2}{3} = 0.100$ M/s (NOT 0.050, that's B)
- the 2 isn't separate from A, it's *how many* A get used per reaction

---

### Reaction order

[[Reaction order]]
- exponent on reactan'ts concentration in the rate law
- basicalllly how strongly the rate responds when you change the reactants concentration.

| Order | Halve the reactant → rate |
|---|---|
| first | halved |
| second | 1/2 ^2 = 1/4 |

and then keeps going

![[Pasted image 20261005210718.png]]

here we can see when we half O2 the reaction rate is halved. so first order
when NO is halved however, its 1/4 so second order

---

### Rate law

Now **[[Rate law]]**
rate = $k_{obs}[NO]^2[O_{2}]$

![[Pasted image 20261005210858.png]]

this reaction in specific is third order because it's 2+1

Final rate law equation:

![[Pasted image 20261005211429.png]]

zero order does exist -> it doesnt affect shit! then its not there

def of $k_{obs}$: *(AI note: this is left blank. Fill in from the reading's definition of the observed rate constant)*

## Summary

Reaction rates can only be found experimentally. The rate you lose a reactant matches the rate you gain a product, scaled by the coefficients. In $A + B \to 2C$, C forms twice as fast. In $2A + B \to 3C$ the rates go 2 : 1 : 3, so don't drop the coefficient. Shrinking $\Delta t$ gives the instantaneous rate, which is more useful because reactions change over time. Reaction order is the exponent on a reactant's concentration in the rate law, i.e. how strongly the rate responds: first order means halving the reactant halves the rate, and second order means it drops to 1/4. Zero order means the reactant doesn't affect the rate. For NO + O₂ the experiments give rate = $k_{obs}[NO]^2[O_2]$, third order overall.

## Related

- [[Lecture 14 - Oct 6]] — uses rates from coefficients on the $N_2O_5 \to NO_2 + O_2$ problem
- [[Lecture 12 - Sep 29]] — the NO molecule whose reaction with O₂ is the rate-law example here

## Questions for AI / Follow-up
- What is $k_{obs}$ exactly, and why "obs" (observed)? Does it change with temperature but not concentration?
- How do you get the order from data when the change isn't a clean halving (e.g. concentration ×3)?
- Can a reaction order be fractional or negative, or only whole numbers?
