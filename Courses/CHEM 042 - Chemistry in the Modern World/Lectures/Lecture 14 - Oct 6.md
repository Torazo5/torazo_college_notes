---
type: lecture
course: "[[CHEM 042 - Chemistry in the Modern World/_Course Info|CHEM 042 HM-02]]"
date: 2026-10-06
tags: [chem042, lecture, uv-vis, absorbance, number-density, ideal-gas-law, reaction-rate, stoichiometry]
cleaned_with: cleanup-note v1.4.0
cleaned_on: 2026-10-06
---
# CHEM 042 — Lecture

## Reading / Prep

- [[Reading 8  - Oct 5]] — average and instantaneous rates, rates from coefficients

## Key Terms

| Term | Meaning (your words) |
|---|---|
| [[Absorbance]] | Absorbance = $\sigma \times N\times L$ |
| [[Number density]] | from $\frac{n}{V}=\frac{P}{RT}$, then moles → molecules, then litres → cm³ |
| [[Ideal gas law\|PV = nRT]] | used to get $\frac{n}{V}=\frac{P}{RT}$ |
| [[Reaction rate\|Rate]] | very basic just find final - initial / time |

---

## Notes

### UV-Vis for concentration over time

![[Pasted image 20261006081750.png]]

UV-Vis to find concentration over time and then we can just analyze this data

main idea here is that we can't assume that for NO and NO2 we can't assume that one is reactant or else there will be a much better reacion -> unless something else happens that causes a weird divergence later on in the day *(AI note: this sentence is hard to follow. Check slide 20261006081750 for what the NO vs NO₂ point actually was)*

---

### Calculating absorbance of $NO_{2}$

alright calculating absorbance of $NO_{2}$ how would we do it:

![[Pasted image 20261006083518.png]]

#### Step 1 — what we need

[[Absorbance]] = $\sigma \times N\times L$
we know sigma and L so we need [[Number density|number density]].

#### Step 2 — number density from PV = nRT

using [[Ideal gas law|PV = nRT]]
we know that:

$$
\frac{n}{V}=\frac{P}{RT}
$$

#### Step 3 — finding P

conc: 42 ppb
which is equal to $42\times{10}^{-9}$ atm,
this is Pressure of the guy

#### Step 4 — sub

$$
T = 35+273, P = 4.2\times 10^{-8}
$$

$$
\frac{n}{V}=\frac{4.2\times{10}^{-9}}{0.08206\times{(35+273)}}=1.66175526\times10^{-10}
$$

*(AI note: the line above sets $P = 4.2\times10^{-8}$, but the numerator here uses $4.2\times10^{-9}$. With $10^{-8}$ you'd get about $1.66\times10^{-9}$ mol/L, which is what gives the $10^{15}$ in the next step)*

#### Step 5 — moles per litre → molecules per litre

moles per litre now make it molecules per litre

$$
\frac{n}{v}\times(6.022\times{10}^{23})=1\times{10}^{15}
$$

#### Step 6 — litres → cm³

one litre is 1000cm^3
soo:

$$
\frac{10^{15}}{10^3} =10^{12}
$$

#### Step 7 — final sub

$$
(6.8\times{10}^{-19})\times 10^{12}\times (30\cdot{100})=0.00204
$$

absorbance of 0.002

> [!important]
> remember this process its probablhy quite important

---

### Average rate

![[Pasted image 20261006085835.png]]

very basic just find final - initial / time
should be very light

---

### Rates from the balanced equation

![[Pasted image 20261006091138.png]]

for this question we first need to know molar ratios. so lets quickly balance:

$$
2N_{2}O_{5}\to 4NO_{2}+2O_{2}
$$

*(AI note: this may not be balanced. The left has 10 O and the right has 8 + 4 = 12. $2N_2O_5 \to 4NO_2 + O_2$ balances, and it matches the plain $\frac{\Delta[O_2]}{\Delta t}$ term below)*

soo for [[Reaction rate|rate]]:
rate =

$$
-\frac{1}{2}\frac{\Delta[N_{2}O_{5}]}{\Delta t}=\frac{1}{4} \frac{\Delta[NO_{2}]}{\Delta t}+\frac{\Delta[O_{2}]}{\Delta t}
$$

*(AI note: the "+" may need to be another "=". Each scaled term is equal to the rate, so they aren't added. See [[Reading 8  - Oct 5]]'s $2A+B \to 3C$ example)*

note here is that this is only true for the beginning because as we go on shit happens in the reaction and things will get messed up its pretty logical. this is a capture of the initial state before all the moles start mixing up etc. *(AI note: the coefficient relationship usually holds at every moment for a single reaction, not just the start. Double-check whether the slide was talking about initial rates specifically, or side reactions)*

## Examples / Practice


## Summary

UV-Vis can track concentration over time, which is how the NO/NO₂ data gets analyzed. To find the absorbance of NO₂ you use absorbance = $\sigma \times N \times L$. You already know $\sigma$ and $L$, so the work is getting the number density. Treat 42 ppb as a pressure of $42\times10^{-9}$ atm. $PV = nRT$ gives $n/V$ in mol/L. Multiply by Avogadro to get molecules per litre, then divide by 1000 to get molecules per cm³ ($10^{12}$). Plugging in gives an absorbance of about 0.002, and that whole process is worth remembering. Average rate is just (final − initial)/time. For rates of different species in the same reaction, balance the equation first, then divide each $\Delta[\,]/\Delta t$ by its coefficient (with a minus sign for reactants).

## Related

- [[Lecture 12-2 - Oct 1]] — where absorbance, path length and number density were set up, including the same $6.8\times10^{-19}$ factor
- [[Lecture 13 - oct 5]] — ppm/ppb, the unit the 42 ppb concentration is given in
- [[Reading 8  - Oct 5]] — average/instantaneous rates and rates from coefficients, which the $N_2O_5$ problem uses
- [[Lecture 12 - Sep 29]] — the NO molecular orbitals and why NO absorbs UV

## Questions for AI / Follow-up
- Is $2N_2O_5 \to 4NO_2 + O_2$ the right balance? Rewrite the rate expression as one chain of equalities and check it against slide 20261006091138.
- Why does 42 ppb become $42\times10^{-9}$ atm? Does that assume the total pressure is exactly 1 atm?
- Redo the $n/V$ step with $P = 4.2\times10^{-8}$ to confirm $1.66\times10^{-9}$ mol/L → $10^{15}$ molecules/L.
- Is the stoichiometric rate relationship really only true at the beginning, or does that apply only when there are side reactions or intermediates?
