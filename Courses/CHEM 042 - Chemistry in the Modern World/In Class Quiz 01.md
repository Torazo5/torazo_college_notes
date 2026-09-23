---
type: study-doc
course: "[[CHEM 042 - Chemistry in the Modern World/_Course Info|CHEM 042 HM-02]]"
title: In Class Quiz 01 — Master Content Dump
created: 2026-09-13
purpose: Machine-readable corpus of all testable CHEM 042 content through Sep 10, 2026. Input for automated question generation.
coverage: Readings 1-3 (Sep 3, 7, 9), Lectures 3-5 (Sep 3, 8, 10), quiz prac notes
tags: [chem042, quiz01, study, master-doc]
---

# CHEM 042 — In Class Quiz 01: Master Content Document

> **READER NOTE (for question-generating model):** This is not prose for human reading. It is an exhaustive, flat dump of every fact, formula, definition, procedure, heuristic, worked example and known misconception covered in CHEM 042 through Sep 10, 2026. Generate questions from **Sections 1–15**. **Section 17 is a quarantine list of items the student is unsure about or that are likely wrong — do NOT generate questions asserting those as fact.** Section 16 lists the exact question *formats* the instructor uses in class, which is the best template for quiz-style questions.

---

## 0. SCOPE

Course: CHEM 042 HM-02, Chemistry in the Modern World.
Quiz 01 content window: course start → Sep 10, 2026 lecture.

The arc of the material is: **how do you figure out what an unknown molecule is?** Three tools, in order:
1. **Mass spectrometry** — gives you molecular mass and, from fragmentation, clues about bond strengths → lets you guess a molecular formula.
2. **Lewis structures + formal charge + VSEPR** — turns a formula into an actual 3-D structure with geometry.
3. **IR / absorption spectroscopy** — confirms which bonds and functional groups are actually present, via polarity and vibration.

Everything below is a sub-piece of one of those three.

---

## 1. PERIODIC TABLE FUNDAMENTALS

- **Period** = the energy level of the valence shell = the **rows** of the periodic table.
- **Group** = the number of valence electrons = the **columns** of the periodic table.
- **Valence electrons** = the electrons in the outer shell = the dots you draw in a Lewis structure.
- **Valency** = the number of bonds a neutral atom tends to form.
- Full-shell (octet) requirements:
  - Hydrogen needs **2** electrons.
  - Carbon, nitrogen, oxygen, fluorine, chlorine and most main-group elements need **8**.

### 1.1 Electronegativity trend
- Electronegativity generally **increases left → right across a period** and **increases going up a column** (F is the maximum at 4.0).
- Loose student-phrased version from notes: "more number of valence electrons usually means more electronegativity."
- **Hydrogen is an anomaly** on the trend (H = 2.2, comparable to carbon at 2.6, despite being group 1).

### 1.2 Pauling electronegativity values seen on the course slide
| Element | χ | Element | χ | Element | χ |
|---|---|---|---|---|---|
| F | 4.0 | Cl | 3.2 | Br | 3.0 |
| O | 3.5 | N | 3.1 | I | 2.7 |
| C | 2.6 | S | 2.6 | H | 2.2 |
| P | 2.2 | B | 2.1 | Si | 1.9 |
| Be | 1.6 | Mg | 1.3 | Li | 1.0 |
| Na | 1.0 | K | 0.8 | Cs | 0.8 |

Color bands used on that slide: <1.0, 1.0–1.4, 1.5–1.9, 2.0–2.4, 2.5–2.9, 3.0–3.9, 4.0.

**F = 4.00 is an arbitrary benchmark.** It was assigned as the reference point for the scale; every other electronegativity is defined *relative* to it. This matters for problems phrased "given these BDE data and the fact that F is assigned 4.00, calculate the electronegativity of O and N" — you are anchoring to F, not deriving absolute values.

---

## 2. LEWIS STRUCTURES — THE FULL ALGORITHM

This is the most procedurally testable thing in the unit. The five-step method:

**Step 1 — Sum the valence electrons you HAVE.**
Add up the valence electrons of every atom, adjusting for overall charge:
$$\sum(\#\text{ atoms} \times \#\text{ valence electrons}) \pm \text{charge}$$

**Step 2 — Sum the valence electrons you NEED.**
Count what every atom needs for a full outer shell: 2 per hydrogen, 8 per everything else.

**Step 3 — Subtract: (needed) − (have) = bonding electrons.**
That difference is the number of **bonding electrons**. **Divide by 2 to get the number of bonds.** (The ÷2 exists because each bond is a shared pair — each bonding pair gets counted once by *both* atoms in the "needed" sum, so the difference double-counts.)

**Step 4 — Subtract: (have) − (bonding electrons) = lone pair electrons.**
Worked example from notes: $18e^- - 16e^- = 2e^-$, which is **one lone pair** (divide by 2 again to get number of pairs).

**Step 5 — Check your work.**
- Does the drawn structure actually contain the number of bonds and lone pairs you calculated?
- Does the sum of formal charges reduce to the overall charge of the molecule/ion (0 for a neutral molecule)?
- Iterate until both are true.

**Student's compressed version of the whole workflow (verbatim from quiz prac):**
> "do the total valence and the total required valence shit to find # of bonding electrons and # of loose electrons. then for each element find bond and lone pair count to find how they should work for formal charge 0. remember it's # valence electrons − lone pair count − bonded pairs. then you got everything so piece it together. then do VSEPR on each one and then find what shape is suitable."

---

## 3. FORMAL CHARGE

$$\text{Formal charge} = \#\text{valence } e^- - \#\text{lone pair } e^- - \#\text{bonds}$$

- **Low formal charge = more stable structure.** When choosing between valid Lewis structures, prefer the one that minimizes formal charges.
- **Critical trap:** "# lone pair electrons" means the **number of electrons sitting in lone pairs**, NOT the number of lone pairs. A lone pair contributes 2.
- Where to check formal charge: on the atom that "hasn't finished" — i.e. the atom that doesn't have the number of bonds it needs. A nonzero formal charge signals a radical / an incomplete shell / an atom not carrying its expected bond count.

---

## 4. ENTHALPY

**Enthalpy (H)** = total heat content and internal chemical energy of a system, **at constant pressure**.

$$H = U + PV$$

| Symbol | Meaning |
|---|---|
| H | Enthalpy (heat content) |
| U | Internal energy |
| PV | Pressure × Volume |

- **Vacuum case:** no pressure, so $PV \to 0$ and $H = U$.
- Chemical bonds **lower** the electronic potential energy of a system, because bonding brings nuclei/electrons closer together (smaller $r$).

| Process | Energy flow | Sign of ΔH | Name |
|---|---|---|---|
| **Bond breaking** | energy must be put IN | ΔH > 0 | **Endothermic** |
| **Bond forming** | energy released to surroundings | ΔH < 0 | **Exothermic** |

Memory hook: breaking costs, forming pays.

---

## 5. BOND DISSOCIATION ENERGY (BDE)

**Definition:** the standard enthalpy change required to break a bond in an **isolated, gas-phase** molecule, cleaved **homolytically**.

- **Homolytic cleavage** = the bond breaks so each fragment leaves with one of the shared electrons → each fragment is a **radical** (has one or more unpaired electrons).
- Every qualifier in the definition matters and is testable: *standard enthalpy*, *isolated*, *gas-phase*, *homolytic*.
- High BDE = hard to break = strong bond.

### 5.1 Reading BDE off a mass spectrum
If a fragment is lost constantly (big peak for the loss), that bond is **weak**. If a loss is rare, that bond is **strong**.

### 5.2 Electronegativity as a proxy for BDE
- More electronegativity difference → more partial charge → more **ionic character** → the partial charges attract → **stronger bond → higher BDE**.
- Example logic from notes: comparing H–F and H–Cl, the one with greater electronegativity difference has more partial charge, more ionic character, and therefore a stronger bond and higher BDE.
- **BIG CAVEAT the student flagged explicitly:** Δχ is **good for direction and for relative comparison, but is NOT equivalent to, nor directly proportional to, partial charge or BDE.** Do not use electronegativity as an absolute check on BDE. The only 100%-definite route to partial charge is actual data + calculation.

---

## 6. MASS SPECTROMETRY

### 6.1 Percent abundance calculation
Set up a mass-weighted equation equal to the average atomic mass, plus the constraint that the fractions sum to 1, and solve.

For two isotopes of chlorine (35 and 37) with average atomic mass 35.45:
$$35x + 37y = 35.45 \qquad x + y = 1$$

Using the precise isotope masses:
$$34.969(1-y) + 36.966y = 35.45$$
$$1.997y = 0.481$$
$$y = 0.243$$

So ≈ **75.7% Cl-35, 24.3% Cl-37**. (Rounded to 0.75 / 0.24 in the probability work below.)

### 6.2 Peak notation
| Notation | Meaning |
|---|---|
| $[m]^{\cdot+}$ | the **molecular ion** — the whole molecule after ionization |
| $[m+2]^{\cdot+}$ | molecular ion + 2 mass units (neutrons added, i.e. one heavier isotope present) |
| $[m+4]^{\cdot+}$ | molecular ion + 4 mass units (two heavier isotopes present) |
| $\Delta m/z = 35$ | a Cl-35 was fragmented off — 35 atomic mass units lost |

**Molecular ion peak:** the whole molecule after ionization. It is **not necessarily the tallest peak**. For a hydrocarbon it is usually the **second-to-last peak present**, because there is one more peak after it from a single C-13 substitution.

### 6.3 Isotope peak patterns (the M, M+2, M+4 pattern)
For a molecule with two chlorines, you see three peaks whose relative heights are set by simple probability:

| Combination | Calculation | Probability |
|---|---|---|
| both Cl-35 | $0.75 \times 0.75$ | 0.5625 |
| one Cl-35 + one Cl-37 (either order) | $0.75\times0.24 + 0.75\times0.24$ | 0.36 |
| both Cl-37 | $0.24 \times 0.24$ | 0.0576 |

The peaks get progressively rarer, exactly as the abundance math and basic probability predict. This is the core testable insight: **isotope peak height ratios are just the combinatorics of isotope abundances.**

### 6.4 Fragmentation of CH₂Cl₂ — the bond strength argument
CH₂Cl₂ = 1 carbon, 2 hydrogens, 2 chlorines. Molecular ion (with two Cl-35) at m/z 84.

- Loss of 35 ($\Delta m/z = 35$) → a whole Cl came off → fragment at 49 (CH₂Cl⁺).
- Loss of 1 → an H came off → fragment at 83. This is the **unlikely** scenario.

**Conclusion (the whole point):**
> Chlorine fragments constantly → the **C–Cl bond is much weaker** than C–H.
> Losing an H is rare → the **C–H bond is strong**.
> Therefore **BDE(C–H) > BDE(C–Cl)**.

Restated: dropping to 83 means a C–H got cut; dropping to 49 means a C–Cl got cut. Because the 49 route dominates, it's clear which bond is weaker.

### 6.5 Procedure — deducing a structure from a mass spectrum
1. Look at the mass spectrometry graph.
2. Look at the **last two peaks** — these are the all-C-12 molecular ion and the one-C-13 version of it.
3. **Trial and error** the formula: figure out how many C and H fit that mass. This is fast and fairly predictable (e.g. total 42 → 3 carbons and 6 hydrogens).
4. Try candidate structures and verify with **formal charge**.
5. That gives you the structure. Then apply VSEPR to get the geometry.

---

## 7. ELECTRONEGATIVITY AND BOND CLASSIFICATION

**Electronegativity** = the tendency of an atom to attract electrons (specifically, the bonding electrons in a bond).

### 7.1 Bond types
| Bond type | What happens |
|---|---|
| **Covalent bond** | electrons are **shared** between two atoms |
| → **Nonpolar covalent** | **even** sharing of electrons |
| → **Polar covalent** | **unequal / uneven** sharing of electrons |
| **Ionic bond** | **complete transfer** of the bonding electrons to the more electronegative atom |

### 7.2 Δχ ranges (memorize — direct quiz fodder)
| Bond type | Δχ range |
|---|---|
| Nonpolar covalent | $0 \le \Delta\chi \le 0.4$ |
| Polar covalent | $0.4 \le \Delta\chi \le 1.9$ |
| Ionic | $1.9 \le \Delta\chi \le 3.3$ |

### 7.3 Partial charge
In H–F, F attracts the shared electrons more strongly (higher χ), so the electron density leans toward F:
- F becomes **partially negative (δ−)**
- H becomes **partially positive (δ+)**

### 7.4 Why Pauling's scale exists — the H–F problem
The setup: we would **not expect H–F to be such a strong bond** from a pure covalent picture. The explanation is **additional stability from partial charge separation** — the δ+ and δ− ends attract each other, adding strength on top of the covalent contribution.

**Additional bond energy** (the "extra" strength beyond the covalent average):
$$\Delta = BDE_{H-F} - \sqrt{BDE_{H-H} \times BDE_{F-F}}$$

**Electronegativity difference from that extra energy:**
$$\Delta\chi = 0.102\sqrt{\Delta}$$
- 0.102 is an empirical constant.
- For HF this gives **Δχ = 1.78**.
- The geometric mean $\sqrt{BDE_{H-H}\times BDE_{F-F}}$ is the "purely covalent" expectation; the excess above it is attributed to ionic character.

---

## 8. DIPOLE MOMENT AND PARTIAL CHARGE

### 8.1 Core formula
$$\vec{\mu} = q \times \vec{R}$$
(charge × separation distance; a vector)

Because $q$ is a **partial** charge, in practice:
$$\mu = \left|\frac{\delta \times e^- \times R(\text{Å})}{D}\right|$$
i.e. multiply the elementary charge by δ, multiply by the bond length, then divide by the Debye conversion factor.

### 8.2 Units
$$1\ \text{Å} = 10^{-10}\ \text{m}$$
$$1\ D = 3.336\times10^{-20}\ \text{C}\cdot\text{Å}$$

### 8.3 Rearranged to solve for partial charge
$$\delta = \frac{\mu \times D}{e^- \times R(\text{Å})}$$

### 8.4 Partial charge = ionic character
These are the same quantity expressed differently:
- If the partial charges were exactly +1 and −1, that would be a **full ionic transfer** (100% ionic character).
- So δ = ±0.2 means the bond is **20% of the way** to being ionic.
- **Nonpolar means no partial charge, therefore no dipole moment at all** ($\mu = 0\ D$).

### 8.5 Dipole arrow direction
The chemistry convention used on the course slides: **the arrow points from δ+ toward δ−**, i.e. toward the more electronegative atom.
- Evidence from the BeCl₂ slide: arrows point outward from Be toward each Cl (Cl is more electronegative).
- Evidence from the BH₃ slide: arrows point inward from each H toward B (B is more electronegative than H).
- Evidence from the NH₃ slide: arrows point from each H toward N.
- Note: this is the reverse of the physics definition $\vec{\mu}=q\vec{R}$, which runs − to +. Watch for the sign-convention trap.

---

## 9. VSEPR THEORY AND MOLECULAR GEOMETRY

**VSEPR** = **V**alence **S**hell **E**lectron **P**air **R**epulsion.
(Spelling trap: it's VSEPR, not VESPR.)

**Principle:** electron **domains** repel each other and arrange themselves as far apart as possible around the central atom, to minimize electrostatic repulsion and achieve stability.

### 9.1 Electron domain
An **electron domain** is a region where electrons are grouped. Each of the following counts as exactly **one domain**:
- a **lone (non-bonding) pair**
- a **single bond**
- a **double bond**
- a **triple bond**

**Only count domains on the central atom.** This is why **BeCl₂ has 2 electron domains** — you count only the two bonds coming off Be, not anything on the chlorines.

### 9.2 Domain count → geometry
| Domains | Electron geometry | Bond angle |
|---|---|---|
| 2 | **Linear** | 180° |
| 3 | **Trigonal planar** | 120° |
| 4 | **Tetrahedral** | ~109° |

### 9.3 Worked geometry/polarity table (straight from the course slides)
| Formula | Domains | Geometry | Angle | Bond dipoles | Molecular polarity |
|---|---|---|---|---|---|
| **BeCl₂** | 2 | linear | 180° | cancel out | **nonpolar** |
| **BH₃** | 3 | trigonal planar | 120° | cancel out | **nonpolar** |
| **CF₄** | 4 | tetrahedral | 109° | cancel out | **nonpolar** |
| **NH₃** | 4 (3 bonds + 1 lone pair) | trigonal pyramidal | ~109° | do **not** completely cancel | **polar** |

### 9.4 The universality rule
**VSEPR applies to everything.** Don't agonize over whether a molecule is a "VSEPR case" — it must theoretically apply to every molecule with a central atom.

---

## 10. MOLECULAR POLARITY — WHEN DIPOLES CANCEL

This is the highest-yield conceptual link in the unit: **geometry decides whether the individual bond dipoles cancel.**

### 10.1 The rules
- **Net dipole moment** = the vector sum of all bond dipoles, after components cancel.
- **Net dipole ≠ 0 → the molecule is polar.** Net dipole = 0 → nonpolar.
- **Equal magnitudes are NOT sufficient for cancellation.** You need the geometry to be symmetric too.

### 10.2 The SO₂-type case (worked in lecture)
For a bent molecule with two identical bonds to the central atom:
$$|\mu_1| = |\mu_2|$$
But they **do not cancel**, because **only the horizontal components cancel**. The vertical components add, leaving a **net downward dipole** → the molecule is **polar**.

### 10.3 The lone-pair rule
- With **4 electron domains** you get a **tetrahedral** arrangement, which is **non-linear**, so complete cancellation does not automatically happen.
- Complete cancellation only occurs when the outer atoms are **all the same element** and arranged symmetrically (CF₄ → perfect cancel).
- **Lone pairs break the symmetry.** NH₃ (3 bonds + 1 lone pair on a 4-domain center) does not cancel → polar.

### 10.4 Practice case flagged for working: water
H₂O = 2 bonding pairs + 2 lone pairs = 4 electron domains → bent geometry from a tetrahedral arrangement → bond dipoles do not cancel → **polar, with a net dipole bisecting the H–O–H angle pointing toward O**.

---

## 11. ABSORPTION SPECTROSCOPY

### 11.1 How the instrument works
1. A radiation source sweeps through a range of **frequencies**, so the **photon energy changes** (because $E = hf$).
2. The sample absorbs photons whose energy matches a **quantum energy level** spacing (ideally a vibrational excitation, not an ionization).
3. Detectors record which frequencies are **missing**.
4. Those missing frequencies tell you the composition.

Side note from lecture: decay isn't an issue here, because we don't look far enough ahead in time for it to matter.

### 11.2 The intensity ratio
$$\frac{I}{I_0}$$
- $I_0$ = **incident** intensity (before the sample)
- $I$ = transmitted intensity (after the sample)
- **Lower ratio = more was absorbed = something was present.**

---

## 12. BOND VIBRATION — THE PHYSICS BEHIND IR

### 12.1 Bond potential energy curve
- Plot potential energy vs. internuclear distance.
- The **local minimum is the equilibrium bond length**.
- **Stretching** the bond (moving right of the minimum) raises potential energy.
- **Compressing** the bond (moving left of the minimum) also raises potential energy.
- The curve is asymmetric and flattens out toward dissociation at long distance.

### 12.2 The two factors that set the excitation energy
| Factor | Name | What it is |
|---|---|---|
| Strength of the bond | **Force constant** ($\kappa$ or $k$) | how stiff/strong the bond is |
| Mass of the atoms | **Reduced mass** ($m_{red}$ or $\mu$) | effective mass of the vibrating pair |

### 12.3 THE WAVENUMBER EQUATION (key quantitative relationship)
$$\tilde{\nu} = \frac{1}{2\pi c}\sqrt{\frac{\kappa}{m_{red}}}$$
**Wavenumber substitutes for frequency in IR spectra.**

Consequences to reason with:
- **Stronger bond (bigger κ) → higher wavenumber.** Triple > double > single for the same pair of atoms.
- **Heavier atoms (bigger reduced mass) → lower wavenumber.** So C–H sits very high (~3000) because hydrogen is tiny.
- Both are inside a **square root**, so quadrupling κ only doubles the wavenumber.

### 12.4 The axes of an IR spectrum — what controls what
> **x-axis = wavenumber, which is set by reduced mass (and force constant).**
> **y-axis = intensity, which is set by polarity.**

This one-line summary is the single most useful takeaway for reading IR spectra.

### 12.5 Bond order vs. force constant (conceptual check problem)
Given bond A = C=C (a double bond, **bond order 2**) and bond B = C≡C (a triple bond, **bond order 3**):
- Qualitatively, the triple bond is obviously stronger → B has the higher force constant → B absorbs at the higher wavenumber.
- To quantify, the class used the working assumption that the force constant scales with bond order:
$$k_b = \frac{3}{2}k_a$$
- Then, since $\tilde{\nu} \propto \sqrt{k}$ and the reduced mass is the same (both C–C):
$$\tilde{\nu}_B = \tilde{\nu}_A\sqrt{\frac{k_b}{k_a}} = \tilde{\nu}_A\sqrt{1.5}$$
- Worked with the given $\tilde{\nu}_A = 1650\ \text{cm}^{-1}$: $\tilde{\nu}_B = 1650 \times 1.2247 \approx 2021\ \text{cm}^{-1}$, which lands squarely in the real C≡C range of 2100–2200 cm⁻¹.

---

## 13. IR ACTIVITY — WHAT SHOWS UP AND HOW STRONGLY

### 13.1 IR active
A bond is **IR active** when its vibration produces an **oscillating dipole moment**. The oscillating dipole emits and absorbs an electromagnetic wave — "the wave emits and that creates light itself."

- The compression/stretching wave of a **polar** bond (e.g. H–F) creates an oscillating **electric field**, because the dipole magnitude changes as the bond length changes.
- **Why does it oscillate at all?** The bond's restoring force pulls the atoms back together when stretched and pushes them apart when compressed — but the *initial* motion comes from the inherent **thermal / internal energy** of the particle.
- IR active bonds also **absorb** IR light, which is why they appear on the spectrum.

### 13.2 IR inactive
- A **nonpolar** bond (e.g. O–O, C–C, C=C between identical atoms) has $\mu = 0\ D$, so **no dipole to oscillate**.
- Result: **no absorption → flat line on the spectrum.**
- **Alkanes are mostly IR inactive** for their C–C skeleton.

### 13.3 Signal intensity rule
> **More polar bond → stronger (more intense) IR signal.**

So to compare intensity of two bonds, compare their **electronegativity difference / polarity**. Example: between a C=O and a C=N, the C=O is more intense because oxygen is more electronegative than nitrogen (3.5 vs 3.1), giving a larger bond dipole.

### 13.4 Summary decision table
| Question about an IR signal | What determines the answer |
|---|---|
| Will the bond appear at all? | Is it polar? (nonpolar = IR inactive = no signal) |
| How **intense** is the signal? | **Polarity / Δχ** — more polar = more intense |
| At what **wavenumber** (position)? | $\tilde{\nu}=\frac{1}{2\pi c}\sqrt{\kappa/m_{red}}$ — bond strength up = higher; atomic mass up = lower |

---

## 14. FUNCTIONAL GROUPS

**Functional group** = a group of atoms in a molecule that has **specific and predictable chemical reactivity**. Functional groups control much of the chemical behavior of a molecule, and they produce **diagnostic signals** on an IR spectrum that let you identify them.

### 14.1 The groups covered
**Hydrocarbons (carbon with 1, 2, or 3 bonds):**
- **Alkanes** — C–C single bonds
- **Alkenes** — C=C double bonds
- **Alkynes** — C≡C triple bonds

**Oxygenated compounds:**
- **Alcohols** — an O–H attached to a carbon (C–O–H)
- **Carbonyls** — C=O
- **Carboxylic acids** — C=O and O–H on the same carbon

**Nitrogenated compounds:**
- **Primary amines** — C–NH₂ (two H's on N)
- **Secondary amines** — C–NH–C (one H on N)
- **Nitriles** — C≡N

### 14.2 IR DIAGNOSTIC SIGNAL TABLE (memorize — highest-yield table in the unit)
| Wavenumber (cm⁻¹) | Assignment | Notes |
|---|---|---|
| **3200–3600, broad** | **O–H (alcohol)** | one broad signal |
| **2200–3600, very broad** | **O–H of a carboxylic acid** | extremely broad, distinguishes acid from alcohol |
| **~3400 and ~3600** | **N–H, primary amine** | **two** signals (symmetrical + asymmetrical stretch) |
| **~3400–3600** | **N–H, secondary amine** | **one** signal only |
| **~3300, sharper** | **≡C–H, alkyne terminal C–H** | sharp, distinguishes from broad O–H |
| **~3000–3100** | **C–H, sp² (alkene)** | |
| **2850–3000 (~2850–2960)** | **C–H, sp³ (alkane)** | |
| **2200–2300** | **C≡N (nitrile)** | |
| **2100–2300 (~2100–2200)** | **C≡C (alkyne)** | |
| **1650–1750 (~1700–1800), strong** | **C=O (carbonyl / carboxylic acid)** | strong and sharp — very diagnostic |
| **~1600–1700** | **C=C (alkene)** | weak if nearly symmetric |
| **1000–1300** | **C–O** | |

### 14.3 The pattern behind the table
Notice it is exactly the wavenumber equation playing out:
- Anything bonded to **H** is at the top (3000+) because hydrogen's tiny mass makes the reduced mass small.
- **Triple bonds** sit at ~2100–2300 (high κ), **double bonds** at ~1600–1800, **single bonds** at ~1000–1300. Force constant ordering, directly.
- **Broadness** and **intensity** are polarity/hydrogen-bonding effects, not wavenumber effects.

### 14.4 Same-element bonds are not automatically invisible
Even in bonds between the same element, you can sometimes tell what's happening from the **bond distances** and the surrounding environment — asymmetry elsewhere in the molecule can make an otherwise-symmetric bond weakly active. (Flagged as partially unresolved — see Section 17.)

---

## 15. CROSS-CUTTING PROBLEM-SOLVING PROCEDURES

### 15.1 Master procedure: unknown molecule → full structure
1. **Mass spectrum** → read the last two peaks → molecular mass → trial-and-error a molecular formula.
2. **Isotope peak pattern** (M, M+2, M+4 with characteristic ratios) → detect halogens like Cl.
3. **Fragmentation losses** → which bonds are weak/strong → structural hints.
4. **Lewis structure algorithm** (Section 2) → bonds and lone pairs.
5. **Formal charge check** → pick the right isomer/arrangement.
6. **VSEPR on each central atom** → geometry and bond angles.
7. **Bond dipoles + geometry** → net dipole → polar or nonpolar.
8. **IR spectrum** → confirm functional groups against the diagnostic table.

### 15.2 Is it polar? (checklist)
1. Draw the Lewis structure.
2. Count electron domains on the central atom (bonds of any order = 1, lone pairs = 1).
3. Get the geometry from the domain count.
4. Draw a bond dipole arrow on each bond, δ+ → δ−, with magnitude set by Δχ.
5. Vector-add. Symmetric arrangement of identical outer atoms → cancels → nonpolar. Any lone pair or any mismatched outer atom → usually does not cancel → polar.

### 15.3 Which bond is stronger? (checklist)
- **Best evidence:** actual BDE data, or fragmentation behavior on a mass spectrum (the fragment that comes off constantly is the weak bond).
- **Secondary evidence:** bond order (triple > double > single).
- **Weak/relative evidence only:** electronegativity difference. Useful for direction, not for absolute claims.
- **IR evidence:** higher wavenumber → higher force constant → stronger bond, *provided the reduced mass is comparable.*

### 15.4 Which bond has more partial charge? (checklist)
- **The only 100% definite way** is to use measured data (dipole moment and bond length) and calculate: $\delta = \frac{\mu \times D}{e^- \times R}$.
- Δχ tells you a lot about partial charge but is **not equivalent, not directly proportional**. Use it for direction or ranking, never for a hard number.

---

## 16. IN-CLASS QUESTION FORMATS ACTUALLY USED
*(These are the literal question wordings from the slides — the best template for what the quiz will look like.)*

1. "Which of the following bonds do you expect will have a more **intense** stretching signal on an IR spectrum?" — *given two Lewis structures, e.g. H₂C=O vs H₂C=NH. Answer: the more polar one (C=O), because intensity tracks polarity.*
2. "Which bond do you expect will absorb a **larger frequency (wavenumber)** of IR light?" — *answer via the wavenumber equation: compare force constant and reduced mass.*
3. "Which of the following bonds **will not** have an observable stretching signal on an IR spectrum?" — *given a numbered polyatomic structure. Answer: the same-element bonds (C–C and C=C), because no electronegativity difference → no dipole → IR inactive.*
4. "What is the **bond order** for bond A and bond B (according to the Lewis model)?" — *C=C is 2, C≡C is 3.*
5. "If the stretching frequency for bond A is 1650 cm⁻¹, calculate an estimated stretching frequency for bond B." — *scale by $\sqrt{k_B/k_A}$ with reduced mass held constant.*
6. "Based on these data alone, and the fact that fluorine is assigned an electronegativity of 4.00 as the reference benchmark, calculate the electronegativities of oxygen and nitrogen." — *use $\Delta = BDE_{A-B} - \sqrt{BDE_{A-A}BDE_{B-B}}$ then $\Delta\chi = 0.102\sqrt{\Delta}$, anchored to F = 4.00.*
7. "What general pattern(s) in the periodic table of electronegativity numbers do you recognize?" — *increases up and to the right; F is max; H is an anomaly.*
8. Percent abundance from average atomic mass (two-equation system).
9. Deduce the molecular formula and Lewis structure from a mass spectrum.
10. Given a formula: count electron domains → name geometry → state bond angle → determine polarity.

---

## 17. ⚠️ QUARANTINE — UNCERTAIN / LIKELY-WRONG ITEMS
**Do NOT generate questions that assert any of the following as fact.** These are the student's open questions and flagged errors. They may be used to generate *clarifying* questions, but never as answer keys.

1. **"Cl-39"** — the notes describe three peaks as "all Cl-35, one Cl-37 and two Cl-39." Cl-39 is almost certainly a slip; the abundance calculation only ever uses Cl-35 and Cl-37, so it should read "two Cl-37." **Correct fact: the three-peak pattern comes from Cl-35/Cl-35, Cl-35/Cl-37, and Cl-37/Cl-37.**
2. **"85 has potential to be a C-13 but Cl defects"** — garbled in the notes, meaning unresolved.
3. **The 83 vs 84 peak attribution** — notes say 83 comes from losing one H from 84; the student flagged uncertainty over whether it's off the 84 or the 86 peak.
4. **$k_b = \frac{3}{2}k_a$** — an assumption the class used for the double-vs-triple comparison, explicitly flagged by the student as possibly wrong. Real force constants do not scale exactly with bond order. Treat as a problem-specific approximation, not a law.
5. **Dipole arrow direction** — the student's note says "vectors between partial charges are negative to positive (reverse of physics)," which contradicts both the physics definition and the course slides. **The slides show δ+ → δ−.** Section 8.5 reflects the slides.
6. **"VESPR"** — a misspelling in the notes. The correct acronym is **VSEPR**.
7. **"loose pair"** — the student's consistent typo for **lone pair**.
8. **The bond potential energy curve "seems weird and flawed"** — the student's discomfort, unresolved; likely about the asymmetry (harder to compress than to stretch) or the flattening at dissociation.
9. **"we can tell by the distance of the bonds outside of the same element things going on"** — the same-element-but-still-visible IR case from the Sep 10 slides is only partially captured (Section 14.4).
10. **$\Delta$ in $0.102\sqrt{\Delta}$** — the notes never define it explicitly. Section 7.4 infers it to be the additional bond energy in kJ/mol; verify before testing on units.

---

## 18. RAPID-FIRE FORMULA SHEET

$$\text{Formal charge} = \#\text{valence }e^- - \#\text{lone pair }e^- - \#\text{bonds}$$
$$H = U + PV \qquad (\text{vacuum: } H = U)$$
$$\text{bonds} = \frac{(\text{electrons needed for full shells}) - (\text{electrons available})}{2}$$
$$\text{lone pair }e^- = (\text{electrons available}) - (\text{bonding electrons})$$
$$m_1x + m_2y = \bar{m}, \quad x+y=1 \qquad (\text{percent abundance})$$
$$\Delta = BDE_{A-B} - \sqrt{BDE_{A-A}\times BDE_{B-B}}$$
$$\Delta\chi = 0.102\sqrt{\Delta}$$
$$\vec{\mu} = q\vec{R} \qquad \mu = \left|\frac{\delta \cdot e^- \cdot R(\text{Å})}{D}\right| \qquad \delta = \frac{\mu D}{e^- R(\text{Å})}$$
$$1\ \text{Å} = 10^{-10}\ \text{m} \qquad 1\ D = 3.336\times10^{-20}\ \text{C}\cdot\text{Å}$$
$$E = hf$$
$$\tilde{\nu} = \frac{1}{2\pi c}\sqrt{\frac{\kappa}{m_{red}}}$$
$$\frac{I}{I_0} \ \text{— lower means more absorbed}$$

**One-line rules:**
- Breaking bonds: ΔH > 0, endothermic. Forming bonds: ΔH < 0, exothermic.
- 2 domains → linear 180°. 3 → trigonal planar 120°. 4 → tetrahedral ~109°.
- Nonpolar covalent Δχ 0–0.4; polar covalent 0.4–1.9; ionic 1.9–3.3.
- IR x-axis (wavenumber) ← reduced mass and force constant. IR y-axis (intensity) ← polarity.
- Nonpolar bond = no oscillating dipole = IR inactive = flat line.
- Equal-magnitude dipoles still don't cancel unless the geometry is symmetric.
- Molecular ion peak is usually the second-to-last peak for a hydrocarbon (C-13 gives the last one).

---

## 19. SOURCE NOTES
- [[Reading 1 - Sep 3]] — periodic table, Lewis structures, formal charge, enthalpy, BDE
- [[Reading 2 - Sep 7]] — electronegativity, bond classification, Pauling scale
- [[Reading 3 - Sep 9]] — dipole moments, ionic character, VSEPR, electron domains
- [[Lecture 3 - Sep 3]] — mass spectrometry, isotopes, percent abundance, fragmentation
- [[Lecture 4 - Sep 8]] — absorption spectroscopy, bond potential energy, force constant, reduced mass
- [[Lecture 5 - Sep 10]] — dipole moments, IR activity, functional groups, IR diagnostic table
- [[quiz prac]] — consolidated problem-solving heuristics
