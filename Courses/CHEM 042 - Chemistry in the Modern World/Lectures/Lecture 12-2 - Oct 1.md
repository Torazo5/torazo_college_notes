---
type: lecture
course: "[[CHEM 042 - Chemistry in the Modern World/_Course Info|CHEM 042 HM-02]]"
date: 2026-10-01
tags: [chem042, lecture, uv-vis, absorbance, path-length, molar-absorptivity, number-density, concentration]
cleaned_with: cleanup-note v1.4.0
cleaned_on: 2026-10-06
---
# CHEM 042 — Lecture

## Reading / Prep


## Key Terms

| Term | Meaning (your words) |
|---|---|
| [[Absorbance]] | $-\log\left(\frac{I}{I_0}\right)$. when they're equal it's 0: if we get everything out we got in we're absorbing nothing. unitless |
| [[Path length]] | if the length is longer then theres obviously gonna be more chance for us to absorb the light. absorbance is linear in $L$ |
| [[Molar absorptivity]] | it should be properly relative to concentration, so concentration times molar absorptivity coef |
| [[Number density]] | number of particles per unit volume |

---

## Notes

### Colour and absorbed light

![[Pasted image 20261001082137.png]]

only send wavelength of visible light.
then depending on what light it absorbs, the opposite one will have more.

---

### Path length

![[Pasted image 20261001082422.png]]

one thing to note about this system is that if the length is longer then theres obviously gonna be more chance for us to absorb the light

---

### Absorbance and $I/I_0$

![[Pasted image 20261001082659.png]]

considering these questions -> when theyre equal itll be $-\log{1}$, which would mean that [[Absorbance|absorbance]] is 0, it makes sense mathematically and the fact that if we get everything out we got in we're absorbing nothing

if absorbance is 1 then its mathematically its; $1=-\log\left( \frac{I}{I_{0}} \right)$. so it should be $10=\frac{I_{0}}{I}$ right so the ratio from $I$ to $I_{0}$ is 1/10 cuz its inverse of that.

| Absorbance | $I/I_0$ | Meaning |
|---|---|---|
| 0 | 1 | absorbing nothing |
| 1 | 1/10 | |

---

### Absorbance vs path length and concentration

![[Pasted image 20261001083151.png]]

this is linear between $L$ and Absorbance which could be quite annoying across labs

math point of view absorbance is a unitless thing so $\alpha_{obs}$ must be $cm^{-1}$

![[Pasted image 20261001083553.png]]

it should be properly relative to concentration and stuff like that so with known concentration we should have a proper system. so concentration times [[Molar absorptivity|molar absorptivity coef]]

---

### Finding concentration from absorbance

![[Pasted image 20261001084140.png]]

sample 1 has highest concentration because well its just linear so higher absorbance means *(AI note: this sentence stops at "higher absorbance means". Presumably "higher concentration", but check slide 20261001084140)*

sample one is probably like 1.3 absorbance.

$$
\frac{1.3}{9.1*10^4} = 1.4*10^{-5}
$$

---

### Number density

![[Pasted image 20261001085352.png]]

[[Number density|number density]] -> number of particles per unit volume

![[Pasted image 20261001090632.png]]

$$
3.4*10^{-5}=6.8\times{10}^{-19} \times N\times{10}
$$

$$
N=\frac{3.4\times{10}^{-5}}{6.8\times{10}^{-19}\times{10}}=5\times{10}^{12}
$$

eh this is wrong the frick
sorry percent is:

$$
3.4\times 10^{-5}=-\log\left( \frac{I}{I_{0}} \right)
$$

$$
10^{3.4\times{10}^{-5}}=\frac{I_{0}}{I}
$$

![[Pasted image 20261001091301.png]]

cuz its inversed.

---

### Molar concentration

![[Screenshot 2026-10-01 at 9.15.01 AM.png]]

now lets find molar concentration.
so we just have to find the number of moles in ts

#### Step 1 — particles per cm³ → moles per cm³

well we know that number of particles per cm cubed is  5*10^-12 soo, we divide that by avogradros constant to see how many moles per cm cubed: *(AI note: you got $5\times10^{12}$ (positive exponent) for $N$ above, so "5*10^-12" may be a sign typo)*

#### Step 2 — cm³ → L

then times by 10^3 because L is 10^3 more than cm cubed:

![[Pasted image 20261001091816.png]]

![[Pasted image 20261001092307.png]]

![[Pasted image 20261001092515.png]]

![[Pasted image 20261001092824.png]]

> [!important] review quue

## Examples / Practice


## Summary

UV-Vis sends in visible wavelengths, and a sample looks like the opposite colour of the light it absorbs. Absorbance is $-\log(I/I_0)$. If nothing is absorbed, $I = I_0$ and absorbance is 0. An absorbance of 1 means only 1/10 of the light gets through. Absorbance is linear in path length $L$, which is annoying when comparing across labs. Since absorbance is unitless, $\alpha_{obs}$ has units of cm⁻¹. To make it properly relative to the sample, absorbance becomes concentration × molar absorptivity, so known absorbances give concentrations (sample 1 ≈ $1.3/9.1\times10^4 \approx 1.4\times10^{-5}$). For gases, the same idea uses number density (particles per unit volume): solve for $N$, then divide by Avogadro's number and convert cm³ → L to get molar concentration.

## Related

- [[Lecture 14 - Oct 6]] — uses the same absorbance = $\sigma \times N \times L$ setup to get the absorbance of NO₂ from ppb, and repeats "remember this process"
- [[Lecture 13 - oct 5]] — ppm/ppb, the units the number-density problems get their concentrations in
- [[Lecture 4 - Sep 8]] — absorption spectroscopy and $I/I_0$, where the absorbing-light idea started
- [[Midterm 1 - Master Study Guide]] — transmittance $I/I_0$ and "missing frequencies = absorbed"

## Questions for AI / Follow-up
- What were "this is wrong the frick" and "sorry percent is" about? Did the question ask for percent absorbed / transmitted rather than $N$? Rework the image 20261001090632 problem start to finish.
- What's the difference between $\alpha_{obs}$ (cm⁻¹), the molar absorptivity (M⁻¹ cm⁻¹) and the $6.8\times10^{-19}$ factor (cross-section, cm²)? When do you use which?
- Finish the molar concentration conversion from $5\times10^{12}$ particles/cm³: what's the final number in mol/L?
- Is this whole relationship the Beer–Lambert law? The note never names it.
