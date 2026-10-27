---
type: study-doc
course: "[[CHEM 042 - Chemistry in the Modern World/_Course Info|CHEM 042 HM-02]]"
title: Midterm 2 — Review Queue & Study Guide
created: 2026-10-16
scope: Lectures 11–18 (Sep 28 – Oct 15), Readings 7–11
generated_by: review-queue + study guide
tags: [chem042, midterm2, review, queue, study]
---

# CHEM 042 — Midterm 2: Review Queue & Study Guide

> [!info] How to use this
> **Part A** is the to-do list: things your own notes flag as wrong, unfinished, or not understood.
> **Part B** is the study guide: bullets of everything in Lectures 11–18. Answers to the open slide questions are in **folded callouts**. Try each one yourself before you open it.
> **Part C** is the 15-hour plan.

---

# PART A — Review Queue

> **12 items shown (+4 more). Nothing is overdue, but 5 items are over a week old.** The worst notes are [[Lecture 14 - Oct 6]] (5 flags) and [[Lecture 12 - Sep 29]] (4 flags). [[Lecture 15 -Oct8]] through [[Lecture 18 - Oct 15]] were never cleaned up.

## 1. Marked wrong — re-study

- [ ] [[Lecture 17 - Oct 13]] L90 — *"accumulate or deplete -> idk i think its deplete? but ai note this pls"* → compare the orange vs pink pseudo $k_{obs}$ on slide 20261013092546. Answer in **B7** *(3 days)*
- [ ] [[Lecture 12 - Sep 29]] — **4 flags**: L175 *"bond order of 3"*, L120 *"2 sigma but also 2 pi"*, L139 "spin state", L167 *"also worth noting"* (unfinished). The slide behind "bond order 3" is actually **CO**, not NO. See **B2** *(17 days)*
- [ ] [[Lecture 14 - Oct 6]] — **5 flags**: L122 *"$2N_{2}O_{5}\to 4NO_{2}+2O_{2}$"* is unbalanced, L131 has "+" where it should be "=", L71 mixes up $10^{-8}$ and $10^{-9}$, L136 *"only true for the beginning"*, L34 the NO/NO₂ sentence → see **B3/B4** *(10 days)*
- [ ] [[Lecture 12-2 - Oct 1]] — **2 flags** plus your own L103 *"eh this is wrong the frick"* and L143 *"review quue"* → rework the number-density → %T → mol/L problem. See **B3** *(15 days)*
- [ ] [[Lecture 11 - Sep 28]] L31 — *"light behaves like particles and waves"* → it's about **electrons**, not light. See **B1** *(18 days)*

## 2. Questions never answered

- [ ] [[Lecture 18 - Oct 15]] L70 — *"yo i dont understand this slide yo review queue"* (slide 20261015090808: $k_{obs}$, fuel-to-air ratio, peak temperature, the reverse reaction) → **B10** *(1 day)*
- [ ] [[Lecture 17 - Oct 13]] L93 / L97 — *"rising temp what affects idk bro"* and *"what are the additional factors?"* → **B7** *(3 days)*
- [ ] [[Reading 11]] L46 — *"for some reason we assme its fast and reversible???"* → **B9** *(2 days)*
- [ ] [[Lecture 13 - oct 5]] L29 — *"i still dont get why ppb and ppm helps???"* → **B3** *(11 days)*

## 3. Left unfinished

- [ ] [[Lecture 18 - Oct 15]] L95 — *"abunch of questions on these slides do them -> review queue"*. That's catalyzed-mechanism Q1–Q5 plus the energy diagram sketch → **B11**. **Do these yourself first.**
- [ ] [[Lecture 17 - Oct 13]] L44 — *"review queue the partials here"* (the dotted-line transition state for NO + O₃) → **B8**
- [ ] [[Reading 9 - Oct 7]] L96 / L113 — two pre-class calcs stop at "=" (*"$\ln[A]_{t}=-(0.045)(120)+\ln(0.8)=$"*) → **B5** *(9 days)*

**+ 4 more:**
- [[Reading 8  - Oct 5]] L116: *"def of $k_{obs}$:"* is blank (answer in **B4**)
- [[Reading 7 - Sep 27]] L52: the name of ℓ
- [[Lecture 15 -Oct8]], [[Lecture 17 - Oct 13]], [[Lecture 18 - Oct 15]], [[Reading 9 - Oct 7]], [[Reading 10 - Oct 12]] and [[Reading 11]] have empty Summary/Key Terms, so run `/cleanup-note` on them
- **[[Lecture 16 - Oct 12]] is MATH 019 vector-field notes saved in the CHEM folder.** The real CHEM lecture from Oct 12 (probably collision theory / Arrhenius) has no notes. [[Reading 10 - Oct 12]] and the start of [[Lecture 17 - Oct 13]] partly cover it. Readings 9–11 also have `MATH 019` in their frontmatter even though they're chemistry.

---

# PART B — Study Guide (Lectures 11–18)

## The big picture

This unit tells one story: **NO from car engines → smog**.
1. **What is NO?** Orbitals → MO diagram → it's a radical (reactive) and absorbs UV *(B1–B2)*
2. **How do we measure it in air?** UV-Vis absorbance, ppb → number density *(B3)*
3. **How fast do the smog reactions go?** Rates, rate laws, integrated rate laws *(B4–B5)*
4. **Why does temperature matter?** Collision theory, Arrhenius, energy diagrams *(B6–B8)*
5. **How does it really happen, and how do we stop it?** Mechanisms, rate-determining step, catalytic converters *(B9–B11)*

If a question looks unfamiliar, work out which of those five questions it's asking.

---

## B1. Atomic orbitals & quantum numbers — [[Reading 7 - Sep 27]], [[Lecture 11 - Sep 28]]

- **Orbital** = a probability distribution for where an electron might be. It is not a path.
- **Wave–particle duality:** electrons show **diffraction and interference**, which is evidence that they behave like **waves**. They also act as particles (discrete mass and charge, they hit a detector as a single dot).
  - ⚠️ Your note says "light". In an orbitals lecture, the point is that **electrons** are waves too.
- **Wavefunction ψ** = the standing-wave shape. **ψ² = probability density (PDF)**. ψ itself has no direct physical meaning. Only its square is measurable.
- **Standing waves → quantization:** only whole numbers of half-wavelengths fit. That means only certain shapes and energies are allowed, which is why orbitals have discrete energies.
- **Nodes** = places with zero electron density. **More nodes → shorter wavelength → higher energy.**
- **Quantum numbers:**

| # | Name | Allowed values | Tells you |
|---|---|---|---|
| $n$ | principal | 1, 2, 3… | size + energy (3s is bigger and higher in energy than 1s) |
| $\ell$ | **angular momentum (azimuthal)** | 0 … $n-1$ | shape: 0 = s, 1 = p, 2 = d, 3 = f |
| $m_\ell$ | magnetic | $-\ell … +\ell$ | orientation. **Number of values = number of orbitals** |
| $m_s$ | spin | +½, −½ | 2 electrons max per orbital |

- **Max electrons in shell $n$ = $2n^2$** (n = 2 → 8 ✓ matches your table).
- **Filling rules:**
  - **Aufbau:** fill the lowest energy first
  - **Pauli:** at most 2 electrons per orbital, with opposite spins
  - **Hund's rule:** put one electron in each orbital of a degenerate set (all spins parallel) before pairing up. Electrons repel, so spreading out costs less energy. This is your "parallel first" question.
- Examples: N = $1s^2 2s^2 2p^3$ (3 unpaired). S = $1s^2 2s^2 2p^6 3s^2 3p^4$ (↑↓ ↑ ↑).

## B2. Molecular orbitals (MO) — [[Lecture 12 - Sep 29]]

- When atoms get close, their wavefunctions **superpose**:
  - **Constructive** → **bonding MO**: electron density sits *between* the nuclei and pulls both of them in. **Lower energy.**
  - **Destructive** → **antibonding MO (\*)**: a node between the nuclei, so nothing holds them together. **Higher energy.**
- **Number of MOs out = number of AOs in.** Fill them like atomic orbitals (Aufbau, Pauli, Hund).
- The more stable the bonding MO is, the more *unstable* its antibonding partner is.
- **Bond order = (bonding e⁻ − antibonding e⁻) / 2.**
  - BO = 0 → the molecule doesn't form (He₂: 2 bonding, 2 antibonding)
  - BO > 0 → it can exist (He₂⁺ = 0.5). Higher BO → stronger, shorter bond.
- **σ vs π:**
  - **σ** = density *on* the bond axis. s orbitals can only make σ bonds.
  - **π** = density *above and below* the axis (side-on p overlap)
- **Combining two sets of 2p orbitals gives 6 MOs:** σ2p, σ\*2p, **two** π2p (a degenerate pair) and **two** π\*2p. So that's 2 π *bonding* plus 2 π\* antibonding. ⚠️ This clears up your "2 pi" flag.
- In heteronuclear diatomics, the **more electronegative atom's AOs sit lower** (O sits below N, because more protons hold the electrons tighter).
- **NO (11 valence e⁻):** σ2s² σ\*2s² π2p⁴ σ2p² **π\*2p¹**
  - Bonding = 2 + 4 + 2 = 8, antibonding = 2 + 1 = 3 → **BO = (8 − 3)/2 = 2.5**
  - **HOMO = π\*2p, LUMO = σ\*2p.** NO absorbs UV at 226 nm because of the **π\*2p → σ\*2p** transition (this is the "also worth noting").
  - One unpaired electron → **radical → highly reactive**
- **CO (10 valence e⁻):** 8 bonding, 2 antibonding → **BO = 3**. ⚠️ That's what slide 20260929173828 shows. Your "8 bonding, 2 anti bonding = 3" was correct for **CO**, not NO. (NO⁺ is also 3.)
- **Spin multiplicity = 2S + 1**, where S = (number of unpaired e⁻) × ½:
  - 0 unpaired → 1 (singlet)
  - 1 unpaired → 2 (doublet, e.g. **NO**)
  - 2 unpaired → 3 (triplet, e.g. O₂)
  - Unpaired electrons (radicals) mean more reactive. That's what "spin state tells reactivity" means.
  - ⚠️ This is not the same thing as NMR α/β spin states.
- On the exam you're told you **don't** need to know the real σ2p/π2p energy ordering, so use the ordering they give you.

## B3. UV-Vis, absorbance & concentration — [[Lecture 12-2 - Oct 1]], [[Lecture 13 - oct 5]], [[Lecture 14 - Oct 6]]

- **Colour:** a sample looks like the **complementary** colour of the light it absorbs.
- **Transmittance** $T = I/I_0$. **Absorbance** $A = -\log(I/I_0)$, which is unitless.

| A | I/I₀ | % transmitted |
|---|---|---|
| 0 | 1 | 100% (nothing absorbed) |
| 1 | 1/10 | 10% |
| 2 | 1/100 | 1% |

- **Beer–Lambert law** (your note never names it, but this is it). A is **linear** in path length and in concentration:
  - Solutions: $A = \varepsilon\, c\, L$ (ε = molar absorptivity in M⁻¹cm⁻¹, c in M, L in cm)
  - Gases: $A = \sigma\, N\, L$ (σ = absorption **cross-section** in cm²/molecule, e.g. $6.8\times10^{-19}$; N = **number density** in molecules/cm³; L in cm)
  - $\alpha_{obs} = A/L$ has units cm⁻¹. It's what you measure *before* you divide out concentration.
- **Finding concentration:** $c = A/(\varepsilon L)$. Sample 1: $1.3 / 9.1\times10^4 ≈ 1.4\times10^{-5}$ M (L = 1 cm). Higher absorbance → **higher concentration**.
- **The Oct 1 problem, reworked:** $3.4\times10^{-5} = 6.8\times10^{-19}\times N \times 10$ → $N = 5\times10^{12}$ molecules/cm³ ✓ (your first try was right)
  - *Percent* transmitted: $I/I_0 = 10^{-3.4\times10^{-5}} ≈ 0.99992$, so **≈ 99.99% gets through** and only about 0.008% is absorbed. That tiny absorbance is why long path lengths are needed.
  - mol/L: $5\times10^{12} / 6.022\times10^{23} = 8.3\times10^{-12}$ mol/cm³, then × 1000 cm³/L = **$8.3\times10^{-9}$ M**
- **ppm / ppb:** 1 ppm = 1 molecule per $10^6$ molecules. 1 ppb = 1 per $10^9$. 1 ppm = 1000 ppb.
  - **Why use them?** For ideal gases, molecule fraction = mole fraction = **pressure fraction**. So the number doesn't change with T or P, and it's convenient for trace gases.
  - **ppb → partial pressure:** 42 ppb × 1 atm total = $4.2\times10^{-8}$ atm. This assumes the total pressure is 1 atm.
- **"Remember this process" (ppb → absorbance), the NO₂ problem fixed:**
  1. $P = 42\times10^{-9}$ atm $= 4.2\times10^{-8}$ atm
  2. $n/V = P/RT = 4.2\times10^{-8} / (0.08206 \times 308) = 1.66\times10^{-9}$ mol/L ⚠️ your note plugged in $10^{-9}$
  3. × $6.022\times10^{23}$ → $1.0\times10^{15}$ molecules/L
  4. ÷ 1000 → $1.0\times10^{12}$ molecules/cm³
  5. $A = (6.8\times10^{-19})(10^{12})(3000\text{ cm}) ≈ 0.002$
  - Sanity check: air at about 1 atm and room temperature is roughly $2.5\times10^{19}$ molecules/cm³, so 1 ppb ≈ $2.5\times10^{10}$ /cm³
  - Traps: T in **K**, R = 0.08206 **L·atm/(mol·K)**, path length in **cm**
- **Measuring NO with a dye** ([[Lecture 15 -Oct8]]): NO is hard to track directly, so aliquots get injected into a fresh dye solution.
  - NO + dye → a product that is UV-*inactive*
  - **More NO → more dye used up → lower final absorbance**
  - The drop in absorbance tells you how much NO was in the aliquot

## B4. Reaction rates & rate laws — [[Reading 8  - Oct 5]], [[Lecture 14 - Oct 6]]

- **Average rate** = Δ[ ]/Δt. **Instantaneous rate** = the limit as Δt → 0 (tangent slope).
- **Stoichiometric rates:** for $aA + bB \to cC + dD$
  $$\text{rate} = -\frac{1}{a}\frac{\Delta[A]}{\Delta t} = -\frac{1}{b}\frac{\Delta[B]}{\Delta t} = \frac{1}{c}\frac{\Delta[C]}{\Delta t} = \frac{1}{d}\frac{\Delta[D]}{\Delta t}$$
  - Reactants get a **minus sign**. Terms are joined with **"="**, never "+".
  - Example $2A + B \to 3C$: if C forms at 0.150 M/s, A is used at $0.150 \times 2/3 = 0.100$ M/s
  - **$N_2O_5$ fixed:** $2N_2O_5 \to 4NO_2 + O_2$ (10 O on each side), so rate $= -\tfrac12\Delta[N_2O_5]/\Delta t = \tfrac14\Delta[NO_2]/\Delta t = \Delta[O_2]/\Delta t$
  - These ratios hold **at every instant** for a single overall reaction, not just at the start. ("Only at the beginning" applies to *initial-rate* experiments, which are used so the reverse reaction and side reactions don't interfere yet.)
- **Rate law:** rate $= k_{obs}[A]^m[B]^n$
  - Orders m and n come **from experiment only**, *not* from the balanced equation (unless the step is elementary, see B9)
  - **Overall order** = m + n. For NO + O₂: rate $= k_{obs}[NO]^2[O_2]$, which is third order.
  - **Getting order from data:** $\dfrac{\text{rate}_2}{\text{rate}_1} = \left(\dfrac{[A]_2}{[A]_1}\right)^m$. Halve [A] and the rate halves → 1st order. Rate drops to ¼ → 2nd order. Rate doesn't change → 0th order. For messy ratios, $m = \log(\text{rate ratio})/\log(\text{conc ratio})$.
  - Orders **can be fractional** (the NO-formation law has $[O_2]^{1/2}$!) or zero
- **$k_{obs}$** (the blank in Reading 8) = the **experimentally observed rate constant**. It depends on **temperature** (and catalysts) but **not** on concentration.
  - Units depend on order: 0th = M s⁻¹, 1st = s⁻¹, 2nd = M⁻¹ s⁻¹

## B5. Integrated rate laws, half-life, pseudo-first-order — [[Reading 9 - Oct 7]], [[Lecture 15 -Oct8]]

| Order | Integrated law | Straight-line plot | Slope | Half-life |
|---|---|---|---|---|
| 0 | $[A]_t = [A]_0 - kt$ | [A] vs t | −k | $t_{1/2} = \dfrac{[A]_0}{2k}$ |
| 1 | $\ln[A]_t = -kt + \ln[A]_0$ | ln[A] vs t | −k | $t_{1/2} = \dfrac{\ln 2}{k}$ (**doesn't depend on concentration**) |
| 2 | $\dfrac{1}{[A]_t} = kt + \dfrac{1}{[A]_0}$ | 1/[A] vs t | +k | $t_{1/2} = \dfrac{1}{k[A]_0}$ |

- **To identify the order from data,** find which plot comes out a straight line.
- Zero order still means [A] goes **down** over time. It's only the *rate* that doesn't depend on [A].
- **Your unfinished Reading 9 calcs:**
  - $\ln[A]_t = -(0.045)(120) + \ln 0.8 = -5.40 - 0.223 = -5.62$ → $[A]_t = e^{-5.62} ≈ 0.0036$ M
  - 2nd-order half-life: $1/(0.075 \times 0.5) ≈ 26.7$ (in the time units of k)
  - Earlier one ✓: $\ln[A] = -0.00763(240) + \ln 0.45 = -2.63$ → **0.072 M**
- **Pseudo-first-order** (L15): for rate $= k[A][B]$, flood the reaction with one reactant so its concentration barely changes.
  - On the slide, **B is in huge excess** (10 ppm vs 0.1 ppm), so [B] ≈ constant
  - rate $= k'_{obs}[A]$, where $k'_{obs} = k_{obs}[B]$
  - Now the first-order integrated law works for A
  - ⚠️ Your note says "[A] ≫ [B]". Whichever reactant is in excess gets folded into k′, and the *other* one becomes the pseudo-first-order one.

## B6. Collision theory & Arrhenius — [[Reading 10 - Oct 12]], [[Lecture 17 - Oct 13]]

- **Reactions happen through collisions**, and a collision must have **enough energy (≥ Ea)** and the **right orientation**.
- **Activation energy Ea** = the minimum energy a collision needs to react (the barrier height).
- **Higher T → a larger fraction of collisions have energy ≥ Ea** (this is the main effect), plus slightly more frequent collisions.
- **Arrhenius:** $k_{obs} = A e^{-E_a/RT}$
  - A = frequency factor (how often collisions happen with the right orientation)
  - Ea in **J/mol**, R = **8.314 J mol⁻¹ K⁻¹**, T in **K**
- **Linear form:** $\ln k = \ln A - \dfrac{E_a}{R}\cdot\dfrac{1}{T}$ → plot ln k vs 1/T. Slope = −Ea/R, intercept = ln A.
- **Two-point form:** $\ln\dfrac{k_2}{k_1} = \dfrac{E_a}{R}\left(\dfrac{1}{T_1} - \dfrac{1}{T_2}\right)$
- k vs T is **exponential** (slide 20261013091420). It's flat at low T and shoots up at high T.
- **The bigger Ea is, the more sensitive k is to temperature.**
- Worked examples (both ✓ in your notes):
  - Ea = 50 kJ/mol at 298 K: k doubles at **T ≈ 309 K, so ΔT ≈ 11 K**. ⚠️ The question asks for **ΔT**, not T.
  - Jul (310 K, $5.61\times10^5$) vs Dec (290 K, $4.88\times10^5$): **Ea ≈ 5.2 kJ/mol** (matches the isoprene step's ~5 kJ/mol)
- Traps: kJ → **J**. °C/°F → **K**. Keep each k paired with the right T.

## B7. The smog cycle — [[Lecture 17 - Oct 13]], [[Lecture 18 - Oct 15]]

| Arrow | Reaction | Pseudo $k_{obs}$ | Ea | Speed |
|---|---|---|---|---|
| green | VOC (isoprene C₅H₈) + HO• + O₂ → OVOC (C₅H₈O) + HO₂• | 5×10⁵ | ~5 kJ/mol | fast |
| orange | HO₂• + NO• → HO• + **NO₂•** | 1×10⁶ | <1 (~0) | fast |
| pink | **NO₂•** + sunlight → NO• + O• (photolysis) | 5×10⁻³ | ~300 | **slow** |
| black | O• + O₂ → **O₃** | | | |
| blue | O₃ + NO• → NO₂• + O₂ | 5×10⁻² | ~4 | slow |

- HO• and HO₂• get **recycled**, so a little radical drives a lot of chemistry. VOCs are the "fuel" that turns NO into NO₂ without using up O₃.

> [!question]- **Q (L17 L90): In a city (lots of NO and VOCs), does NO₂ initially accumulate or deplete?**
> **Accumulate.** NO₂ forms through the orange step ($k ≈ 10^6$), which is about **10⁸× faster** than it gets destroyed by photolysis ($k ≈ 5\times10^{-3}$). Formation ≫ depletion, so NO₂ builds up and you get brown haze. ⚠️ Your note guessed "deplete".

> [!question]- **Q: LA warms from 291 K → 294 K. Which reaction is most affected?**
> **The pink one, NO₂ photolysis, because it has the largest Ea (~300 kJ/mol).** Two-point Arrhenius: $\ln(k_2/k_1) = \frac{300000}{8.314}\left(\frac1{291}-\frac1{294}\right) ≈ 1.27$, so k goes up **~3.5×**. For the Ea ≈ 5 step it's only ×1.02. ✓ Your guess "NO2 because of photolysis?" was right.

> [!question]- **Q: Does that explain why warmer cities get *more* NO₂ haze? What else matters?**
> **No, it predicts the opposite.** Faster photolysis *destroys* NO₂, so on its own it would mean *less* haze. The missing factor (L18): **VOC emissions go up with temperature** (trees release more isoprene when it's hot), so there's more fuel → more HO₂• → more NO₂. The *source* went up, not just a rate constant. Lesson: k only tells half the story, because rate = k × concentrations.

## B8. Lewis structures of radicals & reaction energy diagrams — [[Lecture 17 - Oct 13]]

- **Electron bookkeeping** (your L17 method):
  - Shared electrons = (octet total needed) − (valence electrons)
  - Bonds = shared ÷ 2
  - Lone electrons = valence − shared
  - An **odd electron count means a radical**
- **NO:** 11 valence. 16 − 11 = 5 shared → N=O double bond plus a radical. N has 3 nonbonding e⁻ (1 lone pair + 1 unpaired), O has 4 (2 lone pairs). Lewis says double bond, MO says 2.5 (B2). Both are "right" in their own model.
- **O₃:** 18 valence. 24 − 18 = 6 → 3 bonds (one O=O, one O–O, **resonance**) and 12 lone e⁻ (6 pairs).
- **NO₂:** 17 valence → radical. One N=O, one N–O, resonance, and the unpaired electron mostly on N.
- **Transition state (TS)** = the top of the barrier. **Dotted lines** = bonds that are half-formed or half-broken. Mark it with ‡.
  - NO + O₃ → [ON···O···O₂]‡ → NO₂ + O₂: the new N···O bond is forming while the O···O₂ bond in ozone is breaking (this is your "partials")
- **Reading a reaction coordinate diagram:**
  - $E_{a,fwd}$ = TS − reactants
  - **ΔH = products − reactants** (negative = exothermic, energy goes from the system to the surroundings)
  - **$E_{a,rev} = E_{a,fwd} - \Delta H$** (exothermic forward reaction → the reverse has the bigger barrier ✓)
  - Forward and reverse go through the **same TS**
  - Multi-step reaction: one hump per elementary step, **intermediates are the valleys** between humps

## B9. Reaction mechanisms — [[Reading 11]], [[Lecture 18 - Oct 15]]

- **Elementary step** = one actual collision event. **Its rate law comes straight from its coefficients** (this is the only time you can do that).
- **Molecularity:** uni (1 molecule), **bi** (2 colliding), ter (3, rare and slow)
- **Intermediate** = *made* in one step and *used up* in a later one. It cancels in the sum and **can't appear in the final rate law**.
- **Catalyst** = *used up* in one step and *regenerated* later. It also cancels out.
- **Elementary steps must add up to the overall reaction.**
  - L18 Step 4: summing steps 1–3b leaves 2 O on the right, so Step 4 = **2 O → O₂** ✓
- **Rate-determining step (RDS)** = the **slowest** step. That means smallest k and **highest Ea**. The overall rate can't beat the bottleneck.
- **A mechanism is acceptable if** its predicted rate law **matches the experimental one**. Matching is consistent with the mechanism, but it's **not proof** (you still need more experiments).
- **Recipe:**
  1. Write the rate law of the slow step
  2. If it contains an intermediate, use the **fast reversible** step before it to replace the intermediate
  3. Check the result against the experimental law

> [!question]- **Why do we assume the earlier step is "fast and reversible"? (Reading 11 L46)**
> Look at the right-hand diagram on slide 20261015083801. Step 1 has a small barrier and step 2 has a huge one. Molecules get over step 1 easily, but most of them can't get over step 2, so they **fall back** (it's easier to go back over the small hump). Step 1 goes back and forth many times before step 2 ever happens, so it sits at **equilibrium**: **forward rate = reverse rate**, $k_1[\ldots] = k_{-1}[\ldots]$. That gives you an equation for the intermediate in terms of real reactants.

## B10. Thermal NO formation in engines — [[Lecture 18 - Oct 15]] (the slide you didn't understand)

- Overall: $2N_2 + 2O_2 \to 4NO$. Experimental: rate $= k_{obs}[N_2][O_2]^{1/2}$. A fractional order tells you it is **not** a simple N₂ + O₂ collision.
- Mechanism:
  - Step 1: O₂ ⇌ 2O (fast, reversible)
  - **Step 2a: O + N₂ → NO + N (slow = RDS)**
  - Step 2b: N + O₂ → NO + O (fast)
  - Step 3 repeats step 2 for stoichiometry
  - Step 4: 2O → O₂
- Derivation:
  - Slow step: rate $= k_{2a}[O][N_2]$. But O is an intermediate.
  - Step 1 equilibrium: $k_1[O_2] = k_{-1}[O]^2$ → $[O] = (k_1/k_{-1})^{1/2}[O_2]^{1/2}$
  - Substitute: rate $= k_{2a}\left(\frac{k_1}{k_{-1}}\right)^{1/2}[N_2][O_2]^{1/2}$ ✓ matches
  - **So $k_{obs} = k_{2a}\,(k_1/k_{-1})^{1/2}$.** This is the "define $k_{obs}$ in terms of the elementary rate constants" part.
- Numbers: ΔH = **+90 kJ/mol NO** (endothermic), Ea = **390 kJ/mol NO** (huge)

> [!question]- **Peak combustion temperature → effect on $k_{obs}$?**
> Steps 1 and 2a have **very large Ea**, so by Arrhenius $k_{obs}$ is **extremely** temperature-sensitive. Hotter engines/flames make **far more NO**. Lowering the peak temperature is a real NOx-control strategy.

> [!question]- **Changing the fuel-to-air ratio?**
> *(My reasoning, not from your notes. Check it against the lecture.)* More air means more O₂, so rate ∝ $[O_2]^{1/2}$ goes up and you get more NO, and a lean flame can also run hotter. Less air means less O₂ and less NO, but you get incomplete combustion (CO, unburnt VOCs, which also feed smog). It's a trade-off.

> [!question]- **If NO forms, can we rely on the reverse reaction (2NO → N₂ + O₂) to remove it?**
> **No.** Reverse ΔH = **−90 kJ/mol NO** (✓ your answer), but reverse $E_a = 390 - 90 = $ **300 kJ/mol NO**. That barrier is way too high at exhaust or air temperatures, so NO is *thermodynamically* unstable but *kinetically* stuck. Hence → catalysts.
>
> Diagram sketch: reactants at 0, TS at +300, products at −90. **TS claim:** both strong N–O bonds (BO 2.5) have to be substantially broken *before* the N≡N and O=O bonds form, and that costs a lot of energy → high Ea.

## B11. Catalysis & catalytic converters — [[Lecture 18 - Oct 15]]

- A **catalyst** gives a **different pathway with lower Ea**. It's regenerated, so it **cancels from the overall equation**.
- **ΔH doesn't change** (same reactants and products). Products form *faster*, but the catalyst doesn't change *how much* energy is released.
- Catalytic converter: NO **adsorbs** onto the metal surface → N–O bonds break → N–N and O–O bonds form → N₂ and O₂ leave the surface. Catalysts are expensive and degrade over time.
- **The catalyzed-pathway questions** (2NO → N₂ + O₂, ΔH = −90, Ea = 80; all energies are relative to the starting reactants). **Do them first, then check:**

> [!question]- **Q1. ΔH₂?**
> The highest point of the path is $E_{a,rxn}$ = 80, and that's TS₃. So intermediate 2 sits at 80 − 110 = **−30 kJ/mol**, which makes **ΔH₂ = −30 kJ/mol** relative to the start. (The change *within* step 2 alone is −30 − (−10) = −20.)

> [!question]- **Q2. Energies of the intermediates and transition states?**
> Start 0 → **TS₁ = +2** → Int₁ = −10 → **TS₂ = −10 + 50 = +40** → Int₂ = −30 → **TS₃ = −30 + 110 = +80** → products −90.
> Check: TS₃ = 80 = $E_{a,rxn}$ ✓

> [!question]- **Q3. Sketch**
> Three humps on the −100…100 axes: small (peak +2), medium (peak +40), big (peak +80). Valleys at −10 and −30, ending at −90.

> [!question]- **Q4. Rate-determining step?**
> **Step 3.** It has the biggest barrier (110) and the highest TS (+80).

> [!question]- **Q5. Which steps are reversible?**
> Compare the way back with the way forward from each valley:
> - Int₁ (−10): going back costs 12, going forward costs 50 → **step 1 is reversible**
> - Int₂ (−30): going back over TS₂ costs 70, going forward costs 110 → **step 2 is reversible**
> - Products (−90): going back costs 170 → **step 3 is effectively irreversible**
>
> Steps 1 and 2 sit at equilibrium before the slow step 3.

---

## Formula sheet

| What | Formula |
|---|---|
| Absorbance | $A = -\log(I/I_0) = \varepsilon c L = \sigma N L$ |
| Gas number density | $n/V = P/RT$ (R = 0.08206 L·atm/mol·K) → ×$N_A$ → ÷1000 for /cm³ |
| ppb → atm | ppb × 10⁻⁹ × P_total (1 atm) |
| Rate (stoich.) | $-\frac1a\frac{\Delta[A]}{\Delta t} = \frac1c\frac{\Delta[C]}{\Delta t}$ |
| Rate law | $k_{obs}[A]^m[B]^n$ |
| Integrated 0 / 1 / 2 | $[A]_0 - kt$ · $\ln[A] = -kt + \ln[A]_0$ · $1/[A] = kt + 1/[A]_0$ |
| Half-lives 0 / 1 / 2 | $[A]_0/2k$ · $\ln2/k$ · $1/(k[A]_0)$ |
| Pseudo-1st | $k' = k[B]_{excess}$ |
| Arrhenius | $k = Ae^{-E_a/RT}$, $\ln\frac{k_2}{k_1} = \frac{E_a}{R}(\frac1{T_1} - \frac1{T_2})$, R = 8.314 J/mol·K |
| Energy diagram | $E_{a,rev} = E_{a,fwd} - \Delta H$ |
| Bond order | (bonding − antibonding)/2 |
| Spin multiplicity | 2S + 1 |
| Pre-equilibrium | $k_1[\text{reactants}] = k_{-1}[\text{products of step}]$ |

## Top traps

- Ea in kJ but R in J → convert. T in K. ΔT ≠ T.
- Don't drop stoichiometric coefficients in rates. Use "=" not "+".
- Order comes from **experiment**, not coefficients. Only *elementary* steps let you read it off the equation.
- A final rate law can't contain intermediates.
- RDS = slowest = **highest** Ea, not lowest.
- A catalyst changes Ea, **not** ΔH.
- NO bond order = **2.5**. CO = 3.
- Biggest Ea = most temperature-sensitive. But temperature also changes *sources* (VOCs).

## Related

- [[Oct 6 Review Queue]] — the previous queue (most of its band-1 items are still open and repeated above)
- [[Midterm 1 - Master Study Guide]] — Unit 1 (absorption spectroscopy and $I/I_0$ started there)

---

# PART C — 15-hour plan

Most of the lectures are **kinetics** (L14–L18 plus Readings 8–11), and it's the most recent and the most calculation-heavy. So it gets about 60% of the time.

| # | Hours | Block | Do |
|---|---|---|---|
| 1 | 0.5 | Orientation | Read the big picture + formula sheet. Copy the formula sheet by hand once. |
| 2 | 2.5 | **Rates → rate laws → integrated laws** (B4–B5) | Redo the Reading 8 order-from-data slides, Reading 9 calcs, and the N₂O₅ rate problem *without looking* |
| 3 | 2 | **Arrhenius + energy diagrams + smog cycle** (B6–B8) | Redo the ΔT = 11 K and Ea = 5.2 kJ problems blind. Answer the three smog questions out loud before opening the callouts. |
| 4 | 3 | **Mechanisms + NO formation + catalysis** (B9–B11) | Reading 11 Q1/Q2, derive $k_{obs}$ for NO yourself, then do catalyzed Q1–Q5 + the sketch on paper. **Highest-value block.** |
| 5 | 2 | **UV-Vis / ppb → absorbance** (B3) | Do the NO₂ "remember this process" from a blank page twice, plus the Oct 1 problem → %T → mol/L |
| 6 | 2 | **Orbitals & MO** (B1–B2) | Draw MO diagrams from blank for He₂, He₂⁺, NO, CO. Get the bond order, multiplicity, HOMO→LUMO. Quantum-number drills. |
| 7 | 2.5 | **Mixed timed practice** | Every "Conceptual Check" slide from L11–L18 mixed together, timed. Anything you miss → back to that B-section. |
| 8 | 0.5 | Night before | Formula sheet + Top traps only. Then sleep. |

- **Active recall > rereading.** For every block, try the problem *before* you look at the bullets.
- Split it across days (e.g. 5 h / 5 h / 4 h / 1 h). Don't cram 15 straight hours.
- Tick off the Part A items as you hit them in each block. They're already mapped to B-sections.
