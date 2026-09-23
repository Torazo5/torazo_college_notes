---
type: study-doc
course: "[[CHEM 042 - Chemistry in the Modern World/_Course Info|CHEM 042 HM-02]]"
title: Midterm 1 — Master Study Guide (Unit 1, Weeks 1–4)
created: 2026-09-20
exam: ~2026-09-24
purpose: Complete study guide for Midterm 1. Written for the student to read start to finish, and for an LLM to use when writing practice papers.
coverage: Readings 1–6, Lectures 3–10, MoM Sep 14, In Class Quiz 01 doc, quiz prac, mid term revision notes
updated: 2026-09-22
tags: [chem042, midterm1, study, master-doc]
---

# CHEM 042 — Midterm 1 Master Study Guide

> [!info] HOW TO USE THIS NOTE
> **Student:** it follows the official Unit 1 learning goals in order (Week 1 → Week 4). Each goal has: the idea, the rules, worked examples, and **⚠️ traps**. Callouts marked **🔧 Fix from your self-test** correct things you wrote in [[mid term revision]].
> **LLM writing practice papers:**
> - Each `###` heading is one learning goal from the official study guide. Write questions from the whole guide, and weight them roughly equally across the 4 weeks.
> - **Section 7 (Exam-style question formats)** lists the question styles the instructor actually uses. Copy those styles.
> - **Section 9 (Quarantine)** lists things that are uncertain or come from outside the notes. Don't write questions that treat those as settled fact.
> - Content tagged **[beyond notes]** is standard intro chemistry that isn't in the student's notes yet, mostly the Week 4 separation techniques. It's fine to test, but label those questions as "extension".
> - Wherever it applies, make the student **explain the reasoning chain**, not just give the answer. The instructor asks students to "use chemical principles to rationalize your choice."

---

## 0. THE BIG PICTURE — what this whole unit is about

**Core question: you have an unknown substance. How do you work out what molecule it is?** Each week adds a tool:

| Week | Tool | What it tells you |
|---|---|---|
| 1 | **Mass spectrometry (MS)** | Molecular mass → molecular formula; isotope patterns → halogens present; fragments → which bonds are weak |
| 1–2 | **Lewis structures + VSEPR + polarity** | Turns a formula into a 3D structure with bond dipoles |
| 2 | **Infrared (IR) spectroscopy** | Which **bonds / functional groups** are present |
| 3 | **Degree of unsaturation + isomers + ¹H NMR** | How many rings/π bonds; which H environments exist; how they connect |
| 4 | **Intermolecular forces (IMFs)** | How molecules interact with each other → boiling point, solubility, separation |

**Master workflow for an unknown (likely exam synthesis question):**
1. MS → molecular ion → molecular mass → trial-and-error formula. Isotope pattern → Cl/Br present?
2. Formula → **DoU** → how many rings / double bonds / triple bonds are possible.
3. IR → which functional groups (O–H? C=O? N–H? C≡N?).
4. ¹H NMR → number of signals (symmetry), shift (induction), integration (how many H), splitting (neighbours).
5. Draw the Lewis structure → check formal charges → VSEPR → polarity → predict IMFs / boiling point / solubility.

---

# WEEK 1 — Atoms, Mass Spectrometry, Lewis Structures, Bond Energies

### 1.1 Define atoms, molecules, and atomic and molecular ions

- **Atom**: the smallest unit of an element. A nucleus (protons + neutrons) surrounded by electrons. A neutral atom has **#protons = #electrons**.
  - **Atomic number (Z)** = number of protons. This *defines* the element.
  - **Mass number (A)** = protons + neutrons.
- **Molecule**: two or more atoms held together by **covalent bonds** (shared electrons) as one distinct unit with a specific structure (e.g., H₂O, CH₄, O₂).
- **Ion**: an atom or molecule with a net charge because **#protons ≠ #electrons**.
  - **Atomic ion**: one charged atom (Na⁺, Cl⁻).
  - **Molecular ion**: a charged molecule (NH₄⁺, OH⁻, or in MS: **M•⁺**, a molecule that has lost one electron).
  - **Cation** = positive (lost electrons). **Anion** = negative (gained electrons).
- **In MS specifically**, "the molecular ion" means the **whole, unfragmented molecule after it loses one electron**: [M]•⁺. It is a **radical cation**: it has a + charge *and* an unpaired electron (the •).

> [!tip] 🔧 Fix from your self-test
> You wrote "molecules are atoms that come together." Add **"held together by covalent bonds"**. That's the defining part. You also wrote "misbalance": the precise wording is **"unequal numbers of protons and electrons."**

### 1.2 Define and identify isotopes

- **Isotopes** = atoms of the **same element** (same #protons, same Z) with **different numbers of neutrons**, so **different mass numbers**.
- Isotopes have (almost) identical **chemistry** because chemistry is driven by electrons. They differ in **mass**, and mass is exactly what MS detects.
- Notation: ¹²C / ¹³C, or C-12 / C-13. The superscript is the mass number.

**Isotopes you need (natural abundance):**

| Element | Isotopes | Approx. abundance | MS signature |
|---|---|---|---|
| C | ¹²C, ¹³C | 98.9% : 1.1% | small **M+1** peak (~1.1% × number of C) |
| H | ¹H, ²H (D) | ~99.99% : 0.01% | negligible |
| Cl | ³⁵Cl, ³⁷Cl | ~75.8% : 24.2% (**≈ 3 : 1**) | **M : M+2 ≈ 3 : 1** for one Cl |
| Br | ⁷⁹Br, ⁸¹Br | ~50.7% : 49.3% (**≈ 1 : 1**) | **M : M+2 ≈ 1 : 1** for one Br |
| F | ¹⁹F only | 100% | no M+2 |
| I | ¹²⁷I only | 100% | no M+2 (but a big loss of 127) |

> [!tip] 🔧 Fix from your self-test
> "isotopes are elements with a different number of neutrons". Better: **"atoms of the *same* element with different numbers of neutrons."** Same protons, different neutrons, different mass. ✅ The rest of what you wrote was right.

### 1.3 Explain the fundamental principles of how mass spectrometry works

Four stages. **I–A–D–D: Ionize, Accelerate, Deflect, Detect.**
1. **Ionization**: the vaporized sample is hit by high-energy electrons. One electron is knocked off the molecule, which gives the **molecular ion M•⁺** (a radical cation).
2. **Fragmentation**: the M•⁺ has extra energy, so some of them **break apart** at their weakest bonds. Each break gives **one charged fragment (cation)** and **one neutral fragment (radical)**.
   - ⚠️ **Only charged species are detected.** The neutral piece is invisible. You only "see" it as the **mass difference** between peaks.
3. **Acceleration + deflection**: the ions are accelerated and then bent by a magnetic field. How much an ion bends depends on its **mass-to-charge ratio (m/z)**. **Lighter ions (lower m/z) bend more; heavier ions bend less.**
4. **Detection**: the detector counts how many ions arrive at each m/z.

**The output (mass spectrum):**
- **x-axis: m/z.** Charge is almost always +1, so m/z ≈ mass.
- **y-axis: relative abundance (%)**, scaled so the tallest peak = 100.
- **Base peak** = the **tallest peak**, meaning the most abundant ion. It is often a **fragment**, not the molecular ion.
- **Molecular ion peak [M]•⁺** = the whole molecule's mass. It is **not necessarily the tallest peak**.

> [!tip] 🔧 Fix from your self-test
> Your version ("ionized, bends by charge, angle depends on mass") is basically right. Add: (1) the ion is a **radical cation** because *one electron* is removed; (2) the separation is by **m/z**, not mass alone; (3) **neutral fragments are not detected**.

### 1.4 Calculate average atomic and molecular masses based on isotopic abundance

**Average atomic mass = Σ (isotope mass × fractional abundance).**

$$\bar{m} = m_1 x_1 + m_2 x_2 + \dots \qquad \sum x_i = 1$$

**Worked example 1 (from lecture): find % abundance of Cl isotopes given average mass 35.45**
- Let y = fraction of ³⁷Cl, so 1 − y = fraction of ³⁵Cl.
- 34.969(1 − y) + 36.966y = 35.45
- 34.969 + 1.997y = 35.45 → 1.997y = 0.481 → **y = 0.241 ≈ 24%** ³⁷Cl, so **≈ 76%** ³⁵Cl.

**Worked example 2: bromine.** ⁷⁹Br = 78.918, ⁸¹Br = 80.916, average = 79.904.
- 78.918x + 80.916(1 − x) = 79.904 → 80.916 − 1.998x = 79.904 → x = 0.5065 → **50.7% ⁷⁹Br, 49.3% ⁸¹Br** (≈ 1:1).

**Worked example 3: forward direction.** Element with isotopes 10.013 (19.9%) and 11.009 (80.1%):
- 10.013(0.199) + 11.009(0.801) = 1.993 + 8.818 = **10.81** (boron).

**Average molecular mass** = sum of the average atomic masses of every atom.
- CH₂Cl₂ = 12.011 + 2(1.008) + 2(35.45) = **84.93 g/mol**.
- ⚠️ **Trap:** the average molecular mass (84.93) is **not** a peak in the mass spectrum. MS shows *individual* isotope combinations: 84 (³⁵Cl₂), 86 (³⁵Cl³⁷Cl), 88 (³⁷Cl₂). The average is the weighted mean of those.

### 1.5 Interpret mass spectra to determine the mass and chemical formula of a substance

**Steps (from Lecture 3):**
1. Find the **highest-mass cluster** of peaks.
2. **Hydrocarbon (no halogens):** the **last** peak is the M+1 peak (one ¹³C). The **second-to-last** big peak is the **molecular ion (all ¹²C)**.
3. **Trial-and-error the formula** from the molecular mass: C = 12, H = 1, O = 16, N = 14, Cl = 35, Br = 79.
   - Shortcut **[beyond notes] Rule of 13** for hydrocarbons: M ÷ 13 = n remainder r → **CₙHₙ₊ᵣ**.
     - 42 ÷ 13 = 3 r 3 → C₃H₆ ✓ (the lecture example)
     - 72 ÷ 13 = 5 r 7 → C₅H₁₂ ✓
     - 58 ÷ 13 = 4 r 6 → C₄H₁₀ ✓
4. Check the formula is chemically valid (Lewis structure possible, H count ≤ 2C + 2).
5. Use **fragment losses** to learn about the structure (see 1.9).

**Reading the M+1 peak:** its height relative to M ≈ **1.1% × (number of carbons)**. Example: M+1 is 6.6% of M → about 6 carbons.

**Reading isotope clusters for halogens:**

| Pattern at top of spectrum | Means |
|---|---|
| M and M+2 in **3 : 1** | **one Cl** |
| M, M+2, M+4 in **≈ 9 : 6 : 1** | **two Cl** |
| M and M+2 in **1 : 1** | **one Br** |
| M, M+2, M+4 in **1 : 2 : 1** | **two Br** |
| No M+2, big loss of 19 | F |
| No M+2, big loss of 127 / peak at 127 | I |

**Notation from class:**
- [M]•⁺ = molecular ion
- [M+2]•⁺, [M+4]•⁺ = molecular ion with 1 or 2 heavier isotopes (+2 mass units each)
- Δm/z = 35 → lost a ³⁵Cl atom

### 1.6 Draw and evaluate Lewis structures

**Course 5-step algorithm (from Reading 1):**
1. **HAVE**: total valence electrons = Σ(valence e⁻ of each atom), **minus the charge for cations / plus it for anions**.
2. **NEED**: electrons each atom needs for a full shell: **H = 2, everything else (C, N, O, halogens) = 8**.
3. **Bonding electrons = NEED − HAVE.** **÷ 2 = number of bonds.**
4. **Lone-pair electrons = HAVE − bonding electrons.** ÷ 2 = number of lone pairs.
5. **Check**: the drawing matches the bond and lone-pair counts, and the formal charges add up to the overall charge.

**Formal charge (FC):**
$$FC = (\text{valence } e^-) - (\text{lone-pair } e^-) - (\text{number of bonds})$$
- ⚠️ Count lone-pair **electrons** (a lone pair = 2), not the number of pairs.
- **Best structure = formal charges as close to 0 as possible.** If a charge is unavoidable, put the **negative FC on the more electronegative atom**.
- Neutral-atom "happy" bonding patterns (FC = 0): **H: 1 bond. C: 4 bonds, 0 LP. N: 3 bonds, 1 LP. O: 2 bonds, 2 LP. Halogens: 1 bond, 3 LP.**

**Worked example: formaldehyde, H₂CO**
- HAVE = 2(1) + 4 + 6 = 12
- NEED = 2(2) + 8 + 8 = 20
- Bonding e⁻ = 8 → **4 bonds**
- Lone-pair e⁻ = 12 − 8 = 4 → **2 lone pairs**
- Structure: two C–H bonds + one **C=O** (that's 4 bonds). Both lone pairs on O. All FC = 0 ✓

**Worked example: CO₂**
- HAVE = 4 + 2(6) = 16. NEED = 3(8) = 24. Bonding = 8 → 4 bonds. LP e⁻ = 8 → 4 LP.
- **O=C=O**, 2 LP on each O. All FC = 0 ✓

**Worked example: NH₄⁺**
- HAVE = 5 + 4 − 1 = 8. NEED = 8 + 4(2) = 16. Bonding = 8 → 4 bonds. LP = 0.
- FC on N = 5 − 0 − 4 = **+1** = overall charge ✓

**Worked example: ester oxygen placement (from your revision note, C₆H₁₂O₂ problem)**
- You first put both O's in a chain ("parallel"). That forces bad formal charges.
- The correct ester group is **C(=O)–O–C**: one O is double-bonded (2 LP), the other is single-bonded between two carbons (2 LP). **All FC = 0.**
- Lesson: **if your structure needs lots of nonzero formal charges, rearrange the skeleton.**

### 1.7 Define radicals

- **Radical** = an atom, molecule, or ion with **one or more unpaired electrons**.
- Written with a **dot (•)**: CH₃•, Cl•, and in MS the molecular ion M•⁺ (radical *and* cation).
- Radicals come from **homolytic cleavage**: a bond breaks and **each atom keeps one of the two bonding electrons**.
  - Compare **heterolytic** cleavage: one atom keeps both electrons, which gives a cation + an anion. (BDE is defined for **homolytic** cleavage.)
- Radicals are usually **very reactive** because they want to pair that electron.

> [!tip] 🔧 Fix from your self-test
> "loose electrons" → say **"unpaired electrons."** ("loose" isn't a chemistry term and you also use it where you mean *lone* pair. Keep them separate: **lone pair** = non-bonding PAIR; **unpaired electron** = radical.)

### 1.8 Define bond dissociation energies and use them to evaluate bond strength

- **Bond dissociation energy (BDE)** = the standard enthalpy change (ΔH) needed to **break a bond homolytically** in an **isolated, gas-phase** molecule. Every qualifier is testable: *standard enthalpy, homolytic, isolated, gas phase*.
- Units: **kJ/mol** (energy per mole of bonds).
- **Higher BDE = stronger bond = harder to break.**
- **Bond breaking always costs energy → ΔH > 0 (endothermic).** **Bond forming releases energy → ΔH < 0 (exothermic).** "Breaking costs, forming pays."
- **Enthalpy**: H = U + PV (heat content at constant pressure). In a vacuum, H = U.
- Bonds exist because they **lower the potential energy** of the atoms. The depth of the potential-energy well = BDE.

**Typical BDE values (kJ/mol, textbook averages, for comparison practice):**

| Bond | BDE | Bond | BDE |
|---|---|---|---|
| H–H | 436 | C–H | ~413 |
| F–F | 155 | C–C | ~348 |
| Cl–Cl | 242 | C=C | ~614 |
| H–F | 565 | C≡C | ~839 |
| H–Cl | 431 | C–F | ~485 |
| H–Br | 366 | C–Cl | ~339 |
| H–I | 299 | C–Br | ~276 |
| O–H | ~463 | C–I | ~240 |
| N–H | ~391 | C=O | ~745–799 |

**Patterns hidden in this table (exam reasoning):**
- **Bond order**: C≡C > C=C > C–C.
- **Going down a group, bonds get weaker**: H–F > H–Cl > H–Br > H–I and C–F > C–Cl > C–Br > C–I. The atoms get bigger → bonds get longer → the overlap is weaker.
- **Polarity adds strength (Pauling)**: H–F (565) is far stronger than you'd predict from H–H (436) and F–F (155). The extra strength comes from partial-charge attraction (ionic character).

**Pauling electronegativity from BDEs:**
$$\Delta = BDE_{A-B} - \sqrt{BDE_{A-A}\times BDE_{B-B}} \qquad \Delta\chi = 0.102\sqrt{\Delta}$$
- **Worked (HF):** √(436 × 155) = √67580 = 260.0 kJ/mol. Δ = 565 − 260 = **305 kJ/mol**. Δχ = 0.102 × √305 = 0.102 × 17.46 = **1.78** ✓ (matches class). Δ is in **kJ/mol**.
- **F is the anchor at 4.00.** To get χ(O), find Δχ for an O–F bond (or for O–H plus χ(H)) and subtract it from 4.00. Everything is **relative** to F.

### 1.9 Predict simple fragmentation patterns for hydrocarbons and halogenated hydrocarbons

**Core principle: molecules fragment at their WEAKEST bonds** (lowest BDE). **Big peak for a certain loss → that bond breaks easily → weak bond.**

**CH₂Cl₂ worked example (Lecture 3):**
- M = 84 (C + 2H + 2 ³⁵Cl = 12 + 2 + 70). Cluster at 84 / 86 / 88.
- Big peak at **49** = 84 − 35 = **loss of Cl** → CH₂Cl⁺.
- Small peak at **83** = 84 − 1 = loss of H (rare).
- **Conclusion: C–Cl breaks far more than C–H → BDE(C–H) > BDE(C–Cl).** ✅ Your conclusion was right, and it matches the table (413 vs 339).
- The 49 fragment still contains one Cl, so it has its own **3:1 partner peak at 51**.

**Isotope probability (two Cl):**

| Combination | Calc | Probability | Peak |
|---|---|---|---|
| ³⁵Cl + ³⁵Cl | 0.75 × 0.75 | 0.5625 | M (84) |
| ³⁵Cl + ³⁷Cl (either order) | 2 × 0.75 × 0.25 | 0.375 | M+2 (86) |
| ³⁷Cl + ³⁷Cl | 0.25 × 0.25 | 0.0625 | M+4 (88) |

→ ratio **≈ 9 : 6 : 1**. (Class used 0.75/0.24 and got 0.5625 : 0.36 : 0.0576. Same idea.)
- Two Br: 0.5 × 0.5 : 2(0.5 × 0.5) : 0.5 × 0.5 = **1 : 2 : 1**.
- ⚠️ **Always count the mixed case twice** (35-then-37 and 37-then-35). Forgetting this is the classic mistake.

**Halogenated hydrocarbons, typical patterns:**
- **R–Br / R–I**: C–Br and C–I are weak, so there's a **big loss of 79/81 (Br) or 127 (I)**. The leftover alkyl cation is often the base peak. Example: CH₃Br gives M = 94 / 96 (1:1) and a big peak at **15** (CH₃⁺).
- **R–Cl**: loss of 35/37. Any fragment that *keeps* the Cl still shows the 3:1 pair.
- **R–F**: C–F is very strong, so F is rarely lost.

**Hydrocarbons:** C–C bonds (~348) are weaker than C–H (~413), so alkanes **break C–C bonds**, giving a series of alkyl cation peaks:

| m/z | Fragment | Loss from M |
|---|---|---|
| 15 | CH₃⁺ | M − 15 = lost CH₃ |
| 29 | C₂H₅⁺ | M − 29 = lost C₂H₅ |
| 43 | C₃H₇⁺ | M − 43 = lost C₃H₇ |
| 57 | C₄H₉⁺ | M − 57 = lost C₄H₉ |

- Peaks spaced by **14 (CH₂)** are typical of an alkane chain.
- **[beyond notes]** Branched alkanes break preferentially at the branch point (more stable cation), so the M peak is often tiny.

---

# WEEK 2 — Light, IR Spectroscopy, Polarity, VSEPR, Functional Groups

### 2.1 Define the wavelike and particle-like properties of electromagnetic radiation

**Why we care:** spectroscopy (IR, NMR) is molecules **absorbing light**. To explain *which* light gets absorbed, you need light's wave description (frequency, wavelength) *and* its particle description (photons with fixed energy that match energy gaps).

**Wave-like properties:**
- Light is an oscillating **electric and magnetic field**, at right angles to each other, travelling at **c = 3.00 × 10⁸ m/s**.
- **Wavelength (λ)**: distance between peaks (m). **Frequency (ν)**: oscillations per second (Hz, s⁻¹).
- **c = λν**. So higher frequency means shorter wavelength.
- **Wavenumber (ṽ) = 1/λ**, in **cm⁻¹**. This is the IR x-axis unit. **Wavenumber is proportional to frequency and to energy.**

**Particle-like properties:**
- Light comes in packets called **photons**. Each carries energy **E = hν = hc/λ = hcṽ** (h = 6.626 × 10⁻³⁴ J·s).
- A molecule can only absorb a photon whose energy **exactly matches** the gap between two quantized energy levels: **E_photon = ΔE**.

**EM spectrum, low → high energy:** radio → microwave → **infrared** → visible → UV → X-ray → gamma.

| Region | What it does to molecules | Technique |
|---|---|---|
| Radio | Flips **nuclear spin** states in a magnetic field | **NMR** |
| Infrared | Excites **bond vibrations** | **IR** |
| Visible / UV | Excites **electrons** | UV-vis [beyond scope] |
| High-energy UV / electron beam | **Ionizes** (removes electrons) | used in MS ionization |

> [!tip] 🔧 Fix from your self-test
> You wrote "i forgot why we did this". Here's why: **wave** gives you frequency/wavelength/wavenumber (the x-axis of spectra). **Particle** gives you E = hν, and a photon is absorbed only if its energy matches an energy gap. That matching is the whole logic of absorption spectroscopy.

### 2.2 Explain absorption spectroscopy

1. A light source shines a **range of frequencies** (so a range of photon energies, E = hν) through the sample.
2. The sample absorbs **only** the photons whose energy matches one of its **quantized energy gaps**.
3. The detector compares what arrives with what was sent in. **Missing frequencies = absorbed.**
4. The pattern of absorbed frequencies is a fingerprint of which bonds / structures are present.

- **Transmittance = I / I₀**. I₀ = incident intensity (before the sample), I = transmitted intensity (after). **Lower I/I₀ = more absorbed.**
- %T = 100 × I/I₀. **An IR "peak" is really a DIP** in transmittance.

> [!tip] 🔧 Fix from your self-test
> You wrote "we send **radio** signals": that's **NMR**. **IR spectroscopy uses infrared light.** The general idea (specific bonds absorb specific frequencies → dips) is right.

### 2.3 Illustrate with potential energy diagrams how light excites vibrational energy levels

**The bond potential-energy curve** (energy vs. distance between nuclei):
- **Minimum = equilibrium bond length** (lowest energy, where the bond "sits").
- **Compress** the bond (move left): energy shoots up **steeply**, because the nuclei repel.
- **Stretch** the bond (move right): energy rises, then **levels off** at the **dissociation energy**, where the atoms are separated and the bond is broken.
- **Well depth ≈ BDE.** A deeper well means a stronger bond.
- The curve is **asymmetric** (steep on the left, gradual on the right). That's why you thought it looked "weird and flawed". It's supposed to look like that: compressing fights nuclear repulsion, while stretching just weakens the attraction until the atoms separate.

**Quantized vibrational levels:**
- The bond can't vibrate with any energy. It has **discrete vibrational levels** (v = 0, 1, 2 …) drawn as horizontal lines inside the well.
- At room temperature most bonds are in **v = 0**. (It still vibrates. Thermal energy keeps bonds oscillating.)
- An **IR photon is absorbed if hν = ΔE between v = 0 and v = 1**. The bond jumps up one level and vibrates with larger amplitude.
- A **stiffer bond (steeper, narrower well)** → **bigger spacing** between levels → absorbs **higher-energy / higher-wavenumber** IR.
- **Heavier atoms** → levels closer together → **lower wavenumber**.

How to draw it: a curve with a steep left wall, a minimum, and a gradual rise to a flat plateau on the right. Draw horizontal lines v=0, v=1, v=2 inside the well, getting slightly closer together as they go up. Add an upward arrow from v=0 to v=1 labelled "hν (IR photon) = ΔE".

### 2.4 Explain the axes and data points on an IR spectrum

- **x-axis: wavenumber (cm⁻¹), usually 4000 → 400.** ⚠️ **High wavenumber is on the LEFT** and it *decreases* to the right. Higher wavenumber = higher energy = stiffer bond / lighter atoms.
- **y-axis: % transmittance.** 100% at the **top** means no absorption. **Absorptions point DOWN** as dips.
- **Each dip ("signal/peak")** = a **bond vibration** absorbing IR at that energy.
  - **Position (x)** → which bond (set by force constant and reduced mass).
  - **Depth / intensity (y)** → how polar the bond is (how much the dipole changes).
  - **Shape (broad vs sharp)** → broad usually means **hydrogen bonding** (O–H), since each molecule's O–H is in a slightly different H-bonded environment.
- **Diagnostic region (> 1500 cm⁻¹)**: this is where you identify functional groups. **Fingerprint region (< 1500)**: complicated and unique to each molecule. Mostly ignore it (except C–O at 1000–1300).

**Your one-line summary (keep it):** *x-axis (wavenumber) ← force constant & reduced mass. y-axis (intensity) ← polarity.*

### 2.5 Predict relative size, mass, and electronegativity from the periodic table

| Property | Across a period (left → right) | Down a group |
|---|---|---|
| **Atomic size (radius)** | **decreases** (more protons pull the same shell in tighter) | **increases** (more shells) |
| **Atomic mass** | increases | increases |
| **Electronegativity (χ)** | **increases** | **decreases** |

- **Most electronegative: F (4.0)**, then O (3.5), then N / Cl (~3.0–3.2).
- **Hydrogen is an anomaly**: group 1 but χ = 2.2, close to C (2.6).
- **Period (row)** = which shell the valence electrons are in. **Group (column)** = number of valence electrons.

**Pauling values from course slide:**

| F 4.0 | O 3.5 | Cl 3.2 | N 3.1 | Br 3.0 | I 2.7 |
|---|---|---|---|---|---|
| **C 2.6** | **S 2.6** | **H 2.2** | **P 2.2** | **B 2.1** | Si 1.9 |
| Be 1.6 | Mg 1.3 | Li 1.0 | Na 1.0 | K 0.8 | Cs 0.8 |

(Notice **C–H is nearly nonpolar** (Δχ = 0.4) and **P–H is fully nonpolar** (Δχ = 0). Both matter later: IR intensity and the NH₃ vs PH₃ IMF question.)

### 2.6 Predict relative bond strengths WITHOUT BDE values

Check in this order:
1. **Bond order**: triple > double > single (for the same two atoms). C≡C > C=C > C–C.
2. **Atom size / bond length**: **smaller atoms → shorter bonds → stronger**. Going **down a group, bonds weaken**: H–F > H–Cl > H–Br > H–I. C–F > C–Cl > C–Br > C–I.
3. **Polarity (ionic character)**: if sizes are similar, **a larger Δχ adds extra strength** (Pauling's partial-charge attraction). This is why H–F is much stronger than predicted from H–H and F–F.
4. **Experimental clues**: in MS, the bond that breaks most often is the weakest. In IR, higher wavenumber means a stiffer bond *if the reduced masses are similar*.

> [!warning] Trap from your quiz prac (already corrected there)
> **H–F has the larger Δχ than H–Cl** (4.0 − 2.2 = 1.8 vs 3.2 − 2.2 = 1.0). H–F is **also shorter** (F is smaller). Both factors say **H–F is stronger** (565 vs 431 kJ/mol).
> Δχ is useful for **direction and ranking**, but it is **not proportional** to BDE or partial charge. Don't use it to get exact numbers.

### 2.7 Describe differences between ionic, nonpolar covalent, and polar covalent bonds

| Bond type | Electrons | Δχ range | Example |
|---|---|---|---|
| **Nonpolar covalent** | shared **equally** | **0 – 0.4** | H–H, C–C, Cl–Cl, C–H (0.4) |
| **Polar covalent** | shared **unequally**, with partial charges δ+ / δ− | **0.4 – 1.9** | H–Cl (1.0), O–H (1.3), C=O (0.9), H–F (1.8) |
| **Ionic** | **completely transferred** to the more electronegative atom, giving full + / − ions | **1.9 – 3.3** | NaCl (2.2), KF (3.2) |

- It's a **continuum**, not 3 boxes. **Partial charge (δ) = ionic character**: δ = ±0.2 means "20% of the way to fully ionic."
- **Dipole moment**: μ = q × R (charge × distance), unit **Debye (D)**. 1 D = 3.336 × 10⁻²⁰ C·Å. e = 1.602 × 10⁻¹⁹ C.
  $$\delta = \frac{\mu\,(\text{D}) \times 3.336\times10^{-20}}{1.602\times10^{-19}\times R\,(\text{Å})}$$
- **Worked (HCl):** μ = 1.08 D, R = 1.27 Å → δ = (1.08 × 3.336 × 10⁻²⁰) / (1.602 × 10⁻¹⁹ × 1.27) = 3.60 × 10⁻²⁰ / 2.03 × 10⁻¹⁹ = **0.18 → 18% ionic character**.
- **Worked (HF):** μ = 1.82 D, R = 0.917 Å → δ = 6.07 × 10⁻²⁰ / 1.47 × 10⁻¹⁹ = **0.41 → 41% ionic**.
- **The only 100% certain way to get partial charge is measured μ and R.** Δχ just ranks bonds.

### 2.8 Correlate bond force constant and reduced mass to IR wavenumber

$$\tilde{\nu} = \frac{1}{2\pi c}\sqrt{\frac{k}{\mu_{red}}} \qquad \mu_{red} = \frac{m_1 m_2}{m_1 + m_2}$$

- **k (force constant)** = bond stiffness/strength. **Bigger k → higher ṽ.**
- **μ_red (reduced mass)** = effective mass of the vibrating pair. **Bigger μ_red → lower ṽ.**
- Both are **inside a square root**: 4× k → only 2× ṽ.

> [!warning] 🔧 Fix — reduced mass is NOT m₁ + m₂
> On the in-class quiz (Bond 1 vs Bond 4) you wrote m_red = 12 + 12 = 24 and 12 + 14 = 26. The correct formula is **m₁m₂ / (m₁ + m₂)**:
> - C–C: 12 × 12 / 24 = **6.00**
> - C–N: 12 × 14 / 26 = **6.46**
> - C–O: 12 × 16 / 28 = **6.86**
> - C–H: 12 × 1 / 13 = **0.923** ← tiny! This is why X–H bonds sit at 2800–3600 cm⁻¹.
> - C–Cl: 12 × 35 / 47 = **8.94**
> Your conclusion (lower μ_red → higher ṽ, so Bond 1) still holds, because the ranking came out the same. But use the right formula on the midterm.

**The "column/row tactic" (from your revision note):**
- **Atoms in different rows** (e.g., C–H vs C–C, or C–Cl vs C–F): **reduced mass differs a lot**, so let **mass dominate**. Lighter partner → higher ṽ.
- **Atoms in the same row** (C, N, O): reduced masses are nearly the same (6.0 / 6.5 / 6.9), so **k decides**. Compare **bond order first**, then **polarity/electronegativity** (more polar → stronger → stiffer).
  - Example: **C=O (~1715) > C=C (~1650)**. Same bond order, similar mass, but C=O is more polar and stronger, so higher k.

**Worked (lecture): C=C at 1650 cm⁻¹. Estimate C≡C.**
- Assume k scales with bond order: k(C≡C) = (3/2) k(C=C). Reduced mass is the same.
- ṽ(C≡C) = 1650 × √1.5 = 1650 × 1.225 = **~2020 cm⁻¹** (real range 2100–2260). ✓
- ⚠️ The "k ∝ bond order" step is an **approximation the problem tells you to make**, not a law.

**Worked [beyond notes]: C–H vs C–D (deuterium, mass 2), same k**
- μ(C–H) = 0.923, μ(C–D) = 24/14 = 1.714.
- ṽ(C–D) = ṽ(C–H) × √(0.923 / 1.714) = 3000 × 0.734 ≈ **2200 cm⁻¹**. This is a clean example of a mass-only effect.

### 2.9 Use VSEPR to predict shape and polarity

**VSEPR = Valence Shell Electron Pair Repulsion.** Electron domains around the **central atom** spread out as far apart as possible to minimize repulsion.

**Electron domain** = anything that occupies a direction around the central atom. **Each counts as ONE:** a lone pair, a single bond, a double bond, a triple bond.

| Total domains | Bonds + lone pairs | Electron geometry | **Molecular shape** | Angle | Example |
|---|---|---|---|---|---|
| 2 | 2 + 0 | linear | **linear** | 180° | BeCl₂, CO₂, HCN |
| 3 | 3 + 0 | trigonal planar | **trigonal planar** | 120° | BH₃, BF₃, H₂CO |
| 3 | 2 + 1 | trigonal planar | **bent** | <120° (~119°) | SO₂ |
| 4 | 4 + 0 | tetrahedral | **tetrahedral** | 109.5° | CH₄, CF₄, CCl₄ |
| 4 | 3 + 1 | tetrahedral | **trigonal pyramidal** | ~107° | NH₃, PH₃ |
| 4 | 2 + 2 | tetrahedral | **bent** | ~104.5° | H₂O |

- **Electron geometry** includes the lone pairs. **Molecular shape** describes only where the *atoms* are. Lone pairs push harder, which squeezes bond angles slightly below the ideal.
- ⚠️ In Lecture 5 you wrote "3 domains → trigonal planar" for a molecule with a double bond, a single bond and a lone pair. That's the **electron geometry**. The **molecular shape** is **bent**.
- Count domains **only on the central atom** (that's why BeCl₂ = 2).
- **VSEPR applies to every central atom** in a molecule. For bigger molecules, do it atom by atom: each C with 4 single bonds is tetrahedral, C=C / C=O carbons are trigonal planar, C≡C / C≡N carbons are linear.

**Polarity decision:**
1. Draw the Lewis structure → count domains → get the shape.
2. Draw a **bond dipole** on each polar bond.
3. **Vector-add them.** If they cancel → **nonpolar**. If there's a net dipole → **polar**.
- **Cancel only if:** the shape is symmetric (linear, trigonal planar, tetrahedral) **AND** all outer atoms are identical **AND** there are no lone pairs on the central atom.
- **Lone pairs on the central atom (NH₃, H₂O, SO₂) or different outer atoms (CH₃Cl, CH₂Cl₂, HCN) → usually polar.**

| Molecule | Shape | Polar? | Why |
|---|---|---|---|
| CO₂ | linear | **No** | two equal C=O dipoles at 180° cancel |
| H₂O | bent | **Yes** | dipoles don't cancel; net points toward O, bisecting the H–O–H angle |
| BF₃ | trig. planar | **No** | three equal dipoles at 120° cancel |
| SO₂ | bent | **Yes** | only the horizontal components cancel |
| CCl₄ / CF₄ | tetrahedral | **No** | symmetric, identical outer atoms |
| CH₃Cl | tetrahedral | **Yes** | one different outer atom breaks the symmetry |
| CH₂Cl₂ | tetrahedral | **Yes** | also doesn't cancel |
| NH₃ | trig. pyramidal | **Yes** | lone pair; dipoles don't cancel |
| HCN | linear | **Yes** | different atoms on each side |

**Key rule from your notes:** *the electronegativity difference makes each bond dipole. The actual molecular dipole is the VECTOR SUM.* Equal-sized dipoles do NOT automatically cancel. The geometry decides.

### 2.10 Draw and identify the direction and relative magnitude of bond dipoles

- **Arrow points from δ+ toward δ− (toward the MORE electronegative atom)**, with a small cross (+) at the tail (the δ+ end): H–F is drawn as **+→** pointing at F.
- **Bigger Δχ → bigger arrow** (bigger bond dipole).
  - Ranking example: H–F (1.8) > O–H (1.3) > N–H (0.9) ≈ C=O (0.9) > C–Cl (0.6) > C–H (0.4) > C–C (0).
- In C–H bonds the arrow points **H → C** (C is 2.6, H is 2.2), but it's small.
- ⚠️ In Lecture 5 you wrote "negative to positive (reverse of physics)". The course slides use **δ+ → δ−**. That's the one to use. (The physics vector μ = qR runs from − to +. That's the opposite convention, so don't mix them.)

### 2.11 Explain how vibrational modes can be IR active or inactive

- **IR active = the vibration CHANGES the molecule's dipole moment.** An oscillating dipole makes an oscillating electric field, which couples to the light's electric field and absorbs it.
- **IR inactive = the vibration does NOT change the dipole** → no absorption → no peak (flat line).

**Rules:**
- **Homonuclear diatomics** (H₂, N₂, O₂, Cl₂): μ = 0 always, so **inactive**.
- **Heteronuclear diatomics** (HCl, CO, HF): **active**.
- **Same-element bonds inside a bigger molecule** (C–C, C=C): **inactive if both sides of the bond are identical** (symmetric environment, e.g., the C=C in ethylene H₂C=CH₂ or trans-2-butene).
  - **But (the in-class quiz point):** if something **electronegative sits on only one side** (e.g., CH₂=CH–Cl, or a terminal alkene), the two atoms are **not in identical environments**. Stretching the bond then changes the dipole a little, so the bond is **weakly active**. (See [[Lecture 8 - Sep 17]] and the quiz.)
- **Vibrational modes** of a polyatomic molecule: symmetric stretch, asymmetric stretch, bending. Each mode is judged separately.
  - **CO₂** (classic example): **symmetric stretch → inactive** (both C=O dipoles change equally and still cancel). **Asymmetric stretch → active** (~2350 cm⁻¹). **Bending → active** (~667 cm⁻¹).
  - **Primary amine NH₂**: **symmetric and asymmetric N–H stretches** are both active. That's why 1° amines show **two** N–H peaks.
- **Why it vibrates at all:** thermal energy keeps every bond vibrating. The IR photon *adds* a quantum of vibrational energy (v=0 → v=1).

### 2.12 Predict the relative intensity of IR signals

- **Intensity ∝ how much the dipole moment changes during the vibration.** In practice, **more polar bond → stronger (deeper) signal.**
- Strong: **C=O** (very strong, sharp), **O–H** (strong, broad), C–O, C–F.
- Medium: N–H, C≡N.
- Weak: **C=C, C≡C** (small or zero dipole), especially if nearly symmetric.
- **More copies of a bond → bigger signal**: many C–H bonds give a strong C–H stretch even though each one is only weakly polar.
- Class example: **H₂C=O vs H₂C=NH**: C=O is more intense (O 3.5 > N 3.1, so larger Δχ).

### 2.13 Draw and identify functional groups

**Hydrocarbons:**

| Group | Structure | Notes |
|---|---|---|
| **Alkane** | C–C only, all sp³ | saturated, CₙH₂ₙ₊₂ |
| **Alkene** | C=C | DoU 1 each |
| **Alkyne** | C≡C | DoU 2 each |
| Aromatic (arene) [beyond notes] | benzene ring | DoU 4 |

**Oxygen-containing:**

| Group | Structure | Key feature |
|---|---|---|
| **Alcohol** | R–O–H | O–H on an sp³ carbon |
| **Ether** [check slides] | R–O–R' | O between two carbons, no O–H, no C=O |
| **Carbonyl** (general) | C=O | |
| → **Aldehyde** [check slides] | R–C(=O)–**H** | C=O at the end of a chain |
| → **Ketone** [check slides] | R–C(=O)–R' | C=O between two carbons |
| **Carboxylic acid** | R–C(=O)–**OH** | C=O and O–H on the same carbon |
| **Ester** (seen in C₆H₁₂O₂ problem) | R–C(=O)–O–R' | C=O and C–O, **no O–H** |

**Nitrogen-containing:**

| Group | Structure | Key feature |
|---|---|---|
| **Primary (1°) amine** | R–NH₂ | 2 H on N → **2 N–H IR peaks** |
| **Secondary (2°) amine** | R–NH–R' | 1 H on N → **1 N–H IR peak** |
| Tertiary (3°) amine [beyond notes] | R₃N | no N–H → no N–H peak |
| **Nitrile** | R–C≡N | |
| Amide [beyond notes] | R–C(=O)–N | |

Also: **alkyl halide** R–X (X = F, Cl, Br, I). Used everywhere in MS and NMR problems.

### 2.14 Interpret an IR spectrum to identify functional groups

**IR diagnostic table (memorize):**

| ṽ (cm⁻¹) | Shape / intensity | Bond | Group |
|---|---|---|---|
| **3200–3600** | **broad, strong** ("rounded U") | O–H | alcohol |
| **2500–3300** (your notes say 2200–3600) | **VERY broad**, overlaps the C–H peaks | O–H | carboxylic acid |
| **3300–3500** | medium; **two** peaks | N–H | 1° amine |
| **3300–3500** | medium; **one** peak | N–H | 2° amine |
| **~3300** | **sharp**, strong | ≡C–H | terminal alkyne |
| **3000–3100** | medium, just **above 3000** | =C–H (sp²) | alkene / aromatic |
| **2850–3000** | strong, just **below 3000** | C–H (sp³) | almost every organic molecule |
| **2200–2260** | medium, sharp | C≡N | nitrile |
| **2100–2260** | weak | C≡C | alkyne |
| **1650–1750** | **strong, sharp** ("sword") | C=O | carbonyl (ketone, aldehyde, acid, ester) |
| **1600–1680** | weak–medium | C=C | alkene |
| **1000–1300** | strong | C–O | alcohol, ether, ester, acid |

**The logic behind the table (why it looks like this):**
- **X–H bonds at the top (2800–3600)** because H is so light that μ_red is tiny.
- **Triple bonds ~2100–2300** (biggest k). **Double bonds ~1600–1750.** **Single bonds (C–O, C–C) < 1300.**
- **3000 is the dividing line**: C–H above 3000 → sp² (alkene). Below 3000 → sp³ (alkane).

**Step-by-step approach to an unknown IR:**
1. **1650–1750 strong peak?** → C=O present. Then:
   - broad O–H 2500–3300 too → **carboxylic acid**
   - C–O at 1000–1300 but no O–H → **ester** (or check aldehyde/ketone)
   - neither → **ketone/aldehyde**
2. **3200–3600 broad?** → **alcohol** (if there's no C=O).
3. **3300–3500 sharper peaks?** → N–H: count them (2 = 1° amine, 1 = 2° amine).
4. **2100–2300?** → C≡N or C≡C. (A sharp ~3300 peak as well → terminal alkyne.)
5. **C–H just above 3000 + ~1650?** → alkene.
6. **Only 2850–3000 and the fingerprint region?** → alkane (or an ether if there's a strong C–O).
7. **Combine with the formula/DoU**: e.g., DoU = 1 plus a strong 1715 peak means the one "unsaturation" is the C=O, so there are no rings or C=C.

**Distinguishing pairs (common exam question):**
- **Alcohol vs carboxylic acid**: an acid has a **C=O** and a *much broader* O–H.
- **Alcohol vs ether**: an ether has **no O–H** peak, only C–O.
- **1° vs 2° amine**: two N–H peaks vs one.
- **Alkene vs alkane**: alkene has C–H **> 3000** + C=C ~1650.
- **Ketone vs ester**: ester has a strong **C–O** (1000–1300) as well.

---

# WEEK 3 — Isomers, Degree of Unsaturation, ¹H NMR

### 3.1 Define, identify and draw constitutional isomers

- **Constitutional (structural) isomers** = **same molecular formula, different connectivity** (atoms bonded in a different order).
- **Same formula + same connectivity = the SAME compound**, even if it's drawn rotated, flipped, or bent differently. ⚠️ Most common trap: two drawings that look different but are the same molecule. **Check the connectivity (who is bonded to whom), not the drawing.**
- **Different formula = not isomers at all** (e.g., C₃H₈O vs C₃H₆O).

**Method (from MoM Sep 14):**
1. Calculate the **DoU** first. That tells you whether rings or π bonds are allowed.
2. **Enumerate heavy-atom skeletons** (C, O, N, halogens). H only makes 1 bond, so it's always terminal and can never change connectivity.
   - C (4 bonds) can be a branch point. O (2 bonds) can only be a link in a chain. Halogens (1 bond) are terminal, like H.
3. **Fill in H's** to satisfy valences. This step is forced, so it creates no new isomers.
4. Check for duplicates (renumbering from the other end = same compound).

**Isomer counts to know:**

| Formula | DoU | # isomers | The isomers |
|---|---|---|---|
| C₄H₁₀ | 0 | **2** | butane; 2-methylpropane (isobutane) |
| C₅H₁₂ | 0 | **3** | pentane; 2-methylbutane; 2,2-dimethylpropane (neopentane) |
| C₂H₆O | 0 | **2** | ethanol CH₃CH₂OH; dimethyl ether CH₃OCH₃ |
| C₃H₈O | 0 | **3** | propan-1-ol; propan-2-ol; methoxyethane |
| C₃H₇Cl | 0 | **2** | 1-chloropropane; 2-chloropropane |
| C₄H₉Br | 0 | **4** | 1-bromobutane; 2-bromobutane; 1-bromo-2-methylpropane; 2-bromo-2-methylpropane |
| C₃H₆ | 1 | **2** | propene; cyclopropane |

- **Why they matter:** isomers have **different properties**. Ethanol (H-bonding, bp 78 °C) vs dimethyl ether (no O–H, bp −24 °C). Same formula, so MS gives the same M. **You need IR and NMR to tell them apart.**
- **Wedge/dash drawings:** a wedge means toward you, a dash means away from you. "Direction means nothing" for connectivity. Flipping the wedges doesn't make a new constitutional isomer.

### 3.2 Calculate and interpret degrees of unsaturation (DoU)

- **Saturated** = no rings, only single bonds. A saturated acyclic hydrocarbon = **CₙH₂ₙ₊₂** (the maximum possible H).
- **DoU = (H_max − H_actual) / 2**. **Each DoU = one ring OR one π bond.**

**Formula version:**
$$\text{DoU} = \frac{2C + 2 + N - H - X}{2}$$
(X = halogens. **O and S are ignored.**)

**Your step version (Reading 4):** 1) delete O (and S); 2) each halogen → H; 3) each N → delete it **and remove one H**. Then compare with CₙH₂ₙ₊₂.

| DoU | Possibilities |
|---|---|
| 0 | only single bonds, no rings (no C=O, C=C, C≡C, C≡N, no rings) |
| 1 | 1 double bond (C=C **or C=O**) **or** 1 ring |
| 2 | 1 triple bond, 2 double bonds, 1 double + 1 ring, or 2 rings |
| 4 | classic for a **benzene ring** (1 ring + 3 C=C) |

**Worked examples:**
- C₃H₆: (8 − 6)/2 = **1** → propene or cyclopropane
- C₅H₁₁Br: → C₅H₁₂ → **0** → no rings, no π bonds
- C₃H₈O: drop O → C₃H₈ → **0**
- C₃H₆O: → C₃H₆ → **1** → C=O (acetone/propanal), C=C (enol), or a ring
- C₆H₁₂O₂: → C₆H₁₂ → (14 − 12)/2 = **1** → one C=O (ester/acid) fits
- C₆H₆: (14 − 6)/2 = **4** → benzene
- C₄H₅N: (8 + 2 + 1 − 5)/2 = **3**
- C₂H₃Cl: → C₂H₄ → **1** → C=C (vinyl chloride)

**Why N adds one:** N makes 3 bonds, so inserting it into a chain brings along one extra H slot. Halogens make 1 bond, like H, so they swap 1:1. O makes 2 bonds, so inserting it into a chain doesn't change the H count.

### 3.3 NMR uses radio waves to excite nuclei with spin

- Nuclei like **¹H** (and ¹³C) have **nuclear spin**, which makes a tiny **magnetic moment** (like a bar magnet). **¹²C has no spin, so it's invisible to NMR.**
- **With no external field:** spins point randomly, all the same energy.
- **In a strong external field B₀**, a ¹H takes one of two **spin states**:
  - **α (alpha)**: aligned **with** B₀, **lower energy** (slightly more populated).
  - **β (beta)**: **against** B₀ (antiparallel), **higher energy**.
- The energy gap:
  $$\Delta E_p = \frac{h\gamma_H}{2\pi}B_p = \gamma\hbar B_p$$
  **The gap is proportional to the field the proton actually feels (B_p).** No field means no gap.
- **Resonance**: a **radio-frequency** photon with E = ΔE flips α → β. This is **nuclear magnetic resonance**. ΔE is **tiny**, so only low-energy **radio waves** are needed (much lower energy than IR).
- The spectrum: **x-axis = chemical shift δ (ppm)**, which is a scaled **frequency**. **High ppm on the LEFT ("downfield"), 0 on the right ("upfield").** TMS is the 0 ppm reference.

**Diamagnetism & shielding (Lecture 7):**
- The electrons around a proton **circulate** in B₀ and **induce a small opposing magnetic field** (diamagnetism, Lenz's-law-like). This means **B_p < B₀**.
- **More electron density → bigger opposing field → smaller B_p → the proton is "shielded".**

### 3.4 Equivalent hydrogens by reflectional or rotational symmetry

> [!important] Core rule
> **Protons that can be swapped onto each other by a rotation (axis of symmetry) or a reflection (mirror plane) are in IDENTICAL electronic environments → ONE signal.**

- **Axis of symmetry (rotation):** rotating the molecule (e.g., 180°) around the axis gives back the same picture. H's that swap places are equivalent.
- **Plane of symmetry (reflection):** mirroring through the plane gives the same molecule. H's that swap are equivalent. **Often the useful plane is the plane of the paper itself** (it swaps wedge H's with dash H's on the same carbon).
- **Course assumptions:**
  - **All 3 H's on a CH₃ are equivalent** (free rotation). Treat each CH₃ as one group.
  - **The 2 H's on a CH₂ in an open chain are equivalent** (wedge ↔ dash by the paper plane).
  - **Identical groups on the same carbon are equivalent**: the two CH₃'s of an isopropyl group (–CH(CH₃)₂) → one 6H signal. The three CH₃'s of a tert-butyl group (–C(CH₃)₃) → one 9H signal.
- **Rings are the exception:** in a ring with a substituent, the two H's on one CH₂ can be **non-equivalent**, one on the **same face** as the substituent (cis) and one on the opposite face (trans). No symmetry operation swaps them.
  - **Bromocyclopentane = 5 signals**: H on C–Br (1) + C2/C5 cis-H (1) + C2/C5 trans-H (1) + C3/C4 cis-H (1) + C3/C4 trans-H (1). The mirror plane through C–Br swaps C2↔C5 and C3↔C4, but it can't swap a top-face H with a bottom-face H. That's why the "reflection that moves Br to the other side" doesn't count: Br would end up on the other face, which isn't the same picture.

### 3.5 Determine whether H's are in different electronic environments

- **Different environment = not related by any symmetry operation.** This usually means a different **distance (in bonds)** from some electronegative atom, a different carbon type, or a different neighbour.
- **Quick test [beyond notes]: "replace one H with Z."** Replace H_a with a dummy atom Z, then do the same with H_b. If you get the **same compound** → equivalent. If you get **different constitutional isomers** → different environments.
  - Propane: replacing a CH₃ H gives 1-Z-propane; replacing a CH₂ H gives 2-Z-propane. Different, so **2 environments**.

### 3.6 Number of unique signals in a ¹H NMR spectrum

**Procedure:** draw all H's → group them by symmetry → count the groups.

**Worked (lecture/MoM practice):**

| Molecule | Signals | Groups |
|---|---|---|
| HO–CH₂CH₂CH₂–OH (propane-1,3-diol) | **3** | 2×OH; 2×outer CH₂ (4H); middle CH₂ (2H) |
| H₂N–CH₂CH₂CH₂–OH | **5** | NH₂, CH₂(N), middle CH₂, CH₂(O), OH. No symmetry, ends differ |
| Bromocyclopentane | **5** | see 3.4 |
| CH₃CH₂CH₂CH₂Cl (compound A) | **4** | each carbon is different |
| ClCH₂CH₂CH₂CH₂Cl (compound B) | **2** | 180° rotation / mirror swaps the ends. The CH₂Cl's (4H) and the middle CH₂'s (4H) |
| Cyclohexane (compound C) | **1** | all 12 H equivalent (course level) |
| 1,3-dioxane (compound D) | **3** | O–CH₂–O (2H); two O–CH₂–C (4H); middle C–CH₂–C (2H) |

**More examples to practise:**

| Molecule | Signals |
|---|---|
| CH₄, benzene, acetone (CH₃COCH₃), dimethyl ether, CH₂Cl₂, 1,2-dichloroethane | **1** each |
| propane, chloroethane, diethyl ether, 2-chloropropane, 1,1-dichloroethane, methyl acetate | **2** |
| ethanol (CH₃, CH₂, OH), 1-chloropropane, butanone (CH₃CO, CH₂, CH₃) | **3** |
| (CH₃)₂CH–C(=O)–O–CH₂CH₃ (ethyl isobutyrate, the "fruity" C₆H₁₂O₂) | **4** |
| (CH₃)₃C–CH₂Br (the C₅H₁₁Br from Lecture 8) | **2** (9H + 2H) |

**Integration** [covered in lecture problems]: the **area under each signal ∝ number of H's** in that group. The "9H", "2H", "6H" labels on the spectra are integrations. The ratios must add up to the total H in the formula.

### 3.7 Explain how electronegative atoms introduce induction

- **Induction** = the **long-range effect of a bond dipole** caused by an electronegative atom. ⚠️ **Not physics induction.**
- An electronegative atom (F, O, N, Cl, Br) pulls electron density **through the σ bonds**. It pulls on the carbon it's attached to, that carbon pulls on the next atoms, and so on. The effect gets passed down the chain.
- It **falls off quickly with the number of BONDS** (count bonds, not distance on the page). After about 3 bonds it's nearly gone.

### 3.8 Identify inductively withdrawing groups

- **Inductively withdrawing group** = an atom/group **more electronegative than carbon** that pulls electron density toward itself.
- Strength ranking (follows χ): **F > O ≈ (C=O, OR, OH) > Cl ≈ N > Br > I > C ≈ H**.
- **Multiple withdrawing groups add up**: –CF₃ pulls far more than –CH₂F. CHCl₃ > CH₂Cl₂ > CH₃Cl.
- Examples: –F, –Cl, –Br, –I, –OH, –OR (ether/ester oxygen), –C(=O)–, –NH₂, –NO₂, –C≡N.

### 3.9 How inductively withdrawing groups affect electron density

- **Withdrawing group nearby → LESS electron density** around the nearby atoms (C and their H's).
- The effect is **largest on the atom directly bonded**, smaller one bond further out, and almost none after about 3 bonds.
- A molecule with **no withdrawing group** (e.g., pentane) has **higher electron density everywhere** and much less polarized bonds.

### 3.10 Use induction to determine how exposed an H nucleus is to the external magnet

**The full chain (memorize and be able to write it out):**

> **Electronegative atom nearby → pulls electron density away from the H (induction) → less electron density around the H → less circulating charge → weaker opposing induced field → H is DESHIELDED ("more exposed") → H feels a LARGER B_p → LARGER ΔE_p (= γħB_p) → more energy needed to flip → HIGHER frequency → HIGHER ppm (downfield, left).**

And the reverse: **more electron density → shielded → smaller B_p → smaller ΔE → lower ppm (upfield, right).**

| Term | Meaning | ppm |
|---|---|---|
| **Shielded** | lots of electron density, feels less field | **low ppm, upfield, right** |
| **Deshielded** | electron density pulled away, feels more field | **high ppm, downfield, left** |

### 3.11 Compare ¹H nuclei and predict which resonates at higher/lower frequency

**Ranking rules:**
1. **More electronegative neighbour → higher ppm.** CH₃F > CH₃Cl > CH₃Br > CH₃I > CH₄.
2. **Closer (fewer bonds) to the withdrawing group → higher ppm.**
3. **More withdrawing groups → higher ppm.** CHCl₃ > CH₂Cl₂ > CH₃Cl.

**Real data to anchor it:**

| Compound | δ (ppm) | | Compound | δ (ppm) |
|---|---|---|---|---|
| CH₃F | 4.26 | | CH₃Cl | 3.05 |
| CH₃OH | 3.4 | | CH₂Cl₂ | 5.30 |
| CH₃Cl | 3.05 | | CHCl₃ | 7.27 |
| CH₃Br | 2.68 | | | |
| CH₃I | 2.16 | | 1-chloropropane: ClCH₂– | 3.5 |
| CH₄ | 0.23 | | –CH₂– (middle) | 1.8 |
| | | | –CH₃ (end) | 1.0 |

**[beyond notes] Typical ranges (reference):** alkyl C–H 0.9–1.7. H on a C next to C=O 2.0–2.7. H on a C next to N ~2.5–3. **H on a C next to O or a halogen 3–4.5.** Alkene C–H 4.5–6.5. Aromatic C–H 6.5–8. Aldehyde CHO 9–10. Carboxylic acid OH 10–12.

**Worked example (ethyl isobutyrate, (CH₃)₂CH–C(=O)–O–CH₂–CH₃):**
- **H_C (O–CH₂, 2H)**: directly on a C bonded to the **ester O** → **highest ppm** (~4.1).
- **H_D (the CH, 1H)**: on a C next to the C=O → next (~2.5).
- **H_B (CH₃ of the ethyl, 3H)** and **H_A (two CH₃ of the isopropyl, 6H)**: far from the O's → lowest (~1.2).
- Order: **H_C > H_D > H_B ≈ H_A**.

### 3.12 (Covered in lecture) Spin–spin splitting and the n + 1 rule

*Not written as a separate learning goal on the study guide, but covered in [[Lecture 8 - Sep 17]] and your revision notes. It showed up in the C₆H₁₂O₂ practice problem, so be ready for it.*

- A signal gets **split into several lines** by the **spin states of neighbouring, non-equivalent H's**.
  - A neighbour's spin aligned with B₀ (up) **adds** a little field → line at slightly higher ppm. Spin down **subtracts** → slightly lower ppm.
  - This is **NOT shielding and NOT electronegativity**. It's just a tiny local magnetic field from the neighbour's spin. **Shift (where the signal is) comes from electron density. Splitting (lines inside the signal) comes from neighbour spins.** The multiplet stays centred on the shift.
- **n + 1 rule:** **n equivalent neighbouring H's (≤ 3 bonds away, i.e., on the adjacent carbon: H–C–C–H) → n + 1 lines INSIDE one signal.**
- **n counts the total number of H's within 3 bonds, added across groups** (your revision note), with these exclusions:
  - H's **equivalent to the one you're looking at** don't split it (e.g., the other H's in the same CH₃).
  - H's **4+ bonds away** don't count.
  - (If the coupling constants differ a lot, use (n₁+1)(n₂+1) instead. At this level, just add them.)
  - **[beyond notes]** O–H and N–H protons usually show up as **singlets** and don't split their neighbours (they exchange quickly).
- **Line intensities = Pascal's triangle** (the statistics of up/down combinations):

| n neighbours | Lines | Name | Ratio |
|---|---|---|---|
| 0 | 1 | singlet (s) | 1 |
| 1 | 2 | doublet (d) | 1:1 |
| 2 | 3 | triplet (t) | 1:2:1 |
| 3 | 4 | quartet (q) | 1:3:3:1 |
| 4 | 5 | quintet | 1:4:6:4:1 |
| 5 | 6 | sextet | 1:5:10:10:5:1 |
| 6 | 7 | septet | 1:6:15:20:15:6:1 |

- Triplet derivation (2 neighbours): ↑↑ (1), ↑↓ + ↓↑ (2, they cancel), ↓↓ (1) → **1:2:1**.
- Quartet (3 neighbours): 8 permutations: UUU (1), 2U1D (3), 1U2D (3), DDD (1) → **1:3:3:1**.

**Signature patterns (from lecture slide):**

| Group | Pattern |
|---|---|
| **Ethyl** –CH₂CH₃ | **2H quartet + 3H triplet** |
| **Isopropyl** –CH(CH₃)₂ | **1H septet + 6H doublet** |
| **tert-Butyl** –C(CH₃)₃ | **9H singlet** |
| CH₃ on O, or on C=O with no H neighbours | 3H singlet |

**Worked (your revision note):** CH₃–CH₂–CH₂Br, middle CH₂: neighbours = 3 (CH₃) + 2 (CH₂Br) = 5 → **sextet**. The CH₃ and CH₂Br are 4 bonds apart, so they don't split each other. **CH₃ = triplet, CH₂Br = triplet (at the highest ppm), middle = sextet.**

**Worked (Lecture 8): C₅H₁₁Br with 9H singlet + 2H singlet**
- DoU = 0. The 9H singlet means **tert-butyl**. The 2H is the leftover CH₂ with the Br.
- → **(CH₃)₃C–CH₂Br**. Both are singlets because the central quaternary C has no H (the H's are 4 bonds apart). The CH₂Br is at higher ppm (next to Br).

**Worked (practice): C₆H₁₂O₂: A 6H d, B 3H t, C 2H q, D 1H septet**
- DoU = 1 → one C=O. 6H d + 1H septet = **isopropyl**. 3H t + 2H q = **ethyl**.
- C count: 3 + 2 = 5, plus the C=O carbon = 6 ✓. O count: 2 → **ester** –C(=O)–O–.
- The ethyl CH₂ (quartet) must be on the **ester O** (it's the highest ppm, and a quartet means its only neighbours are the CH₃). → **(CH₃)₂CH–C(=O)–O–CH₂CH₃** (ethyl isobutyrate, a fruity ester ✓).
- The two isopropyl CH₃'s are equivalent by the mirror plane through the CH (your revision-note picture).

---

# WEEK 4 — Intermolecular Forces (IMFs)

### 4.1 Identify the IMFs that hold multiple copies of molecules together

**First, draw the Lewis structure and decide on polarity. Then check each item:**

| Force | Between | Present when |
|---|---|---|
| **Ion–ion** | two ions (+/−) | ionic compounds (NaCl) |
| **Ion–dipole** | ion + **polar** molecule | salt dissolved in water (Na⁺…OH₂) |
| **Hydrogen bond** | **H bonded to N, O, or F** (donor) + a **lone pair on N, O, or F** (acceptor) | H₂O, NH₃, HF, alcohols, carboxylic acids, 1°/2° amines |
| **Dipole–dipole** | two **polar** molecules | any polar molecule (HCl, CH₂Cl₂, acetone) |
| **Ion–induced dipole** (charge-induced dipole) | ion + **nonpolar** molecule | Na⁺ near Ar or CH₄ |
| **Dipole–induced dipole** | **polar** molecule + **nonpolar** molecule | O₂ dissolved in water; a polar analyte near a nonpolar column |
| **London dispersion** (induced dipole–induced dipole) | any two molecules | **EVERY molecule, always** |

**Decision flowchart for a pure substance:**
1. Ionic? → ion–ion.
2. Is there an **H directly on N, O, or F**? → **hydrogen bonding** (+ dipole–dipole + London).
3. Polar (net dipole)? → **dipole–dipole** (+ London).
4. Nonpolar → **London only**.

> [!warning] H-bond traps
> - The H must be **covalently bonded to N, O, or F**. **C–H does NOT H-bond.** CH₃F has F but no H on the F → **no H-bonding in pure CH₃F** (dipole–dipole only).
> - Molecules with an N/O/F lone pair but no N–H/O–H/F–H (ethers, ketones, esters) **can't H-bond to themselves**, but they **can accept H-bonds from water**. That matters for solubility.
> - Your note: "ONLY for N, O, F cuz it needs to be electronegative enough". ✅ Correct, and N, O, F are also **small**, so the δ− lone pair can get very close to the δ+ H.

> [!tip] Reading 6 detail people miss
> The inducer does **not** have to be an ion. A **permanent dipole** can also polarize a nearby nonpolar molecule → **dipole–induced dipole**. Same physics as ion–induced dipole, just a weaker inducer, so it sits between ion–induced dipole and London. It's what lets a polar molecule interact at all with a nonpolar one (and it shows up in reverse-phase HPLC).

**Class example: NH₃ vs PH₃**
- NH₃: N–H, Δχ = 0.9, polar + **H-bonding**.
- PH₃: P–H, Δχ = 2.2 − 2.2 = **0**, so the bonds are nonpolar. It has only a small dipole from the lone pair. Mainly **London (+ weak dipole–dipole)**, **no H-bonding** (P isn't N/O/F).
- → **NH₃ has stronger IMFs** (bp −33 °C vs −88 °C), even though PH₃ is heavier.

### 4.2 How IMFs differ from covalent bonds

| | Covalent bond (INTRA-molecular) | IMF (INTER-molecular) |
|---|---|---|
| What | shared electrons **within** one molecule | attractions **between** separate molecules |
| Strength | **strong**, ~150–1000 kJ/mol | **much weaker**, ~0.1–40 kJ/mol (ion–ion can be comparable to covalent) |
| Directionality | **rigid, very directional** (fixed bond angles) | **less directional** (H-bonds are the most directional IMF) |
| Range | **short** (bond length) | **longer range** |
| Broken by | chemical reactions | **phase changes** (melting, boiling), dissolving |

- ⚠️ **Boiling water breaks H-bonds between molecules, NOT the O–H bonds.** The steam is still H₂O.
- IMFs are classified by **strength, directionality, and range**.

### 4.3 Rank IMFs by strength

**Ion–ion > ion–dipole > hydrogen bond > dipole–dipole > ion–induced dipole > London dispersion** (for comparable-size molecules)

| Force | Strength | Directional? | Range | Strength increases with |
|---|---|---|---|---|
| Ion–ion | strongest (can match covalent) | **non-directional** | **long** | size of the charges |
| Ion–dipole | < ion–ion | **yes** (the ion faces the opposite δ end: cation → O of H₂O, anion → H of H₂O) | between ion–ion and dipole–dipole | ion charge, dipole moment |
| H-bond | < ion–dipole | **very**: most stable at **180°** (D–H···A in a straight line) because of partial covalent character | weakens with distance | dipole moment of the polar molecule |
| Dipole–dipole | < H-bond | somewhat (molecules tumble, so several orientations are stable) | **falls off rapidly** | dipole moment |
| Ion–induced dipole | < dipole–dipole | non-directional | shorter than dipole–dipole | ion charge, **polarizability** (size/mass/surface area) of the nonpolar molecule |
| Dipole–induced dipole | < ion–induced dipole | non-directional | short | dipole moment of the polar molecule, polarizability of the nonpolar one |
| London dispersion | weakest **per contact** | non-directional | **very short** | **polarizability: more electrons / larger mass / larger surface area** |

> [!important] The London exception
> London forces are the weakest *per interaction*, but they **add up** and grow with size. **Big nonpolar molecules can have stronger total IMFs than small polar ones.** E.g., I₂ is a solid at room temperature, octane boils at 126 °C, while HCl (polar) boils at −85 °C.
> **Compare like with like:** for similar-sized molecules, use the ranking. For very different sizes, London can win.

**Surface area / shape (London):** long, straight chains touch more → **stronger London forces** than compact, branched ones with the same formula.
- n-pentane (bp 36 °C) > 2-methylbutane (28 °C) > neopentane (9.5 °C). Same C₅H₁₂, so same mass. It's purely the shape.

**Stronger IMFs → higher boiling point, higher melting point, lower vapor pressure, higher viscosity, more likely to be a liquid/solid at room temperature.**

Boiling points to anchor intuition:

| Substance | bp (°C) | Main IMF |
|---|---|---|
| CH₄ | −161 | London |
| PH₃ | −88 | London / weak dipole |
| HCl | −85 | dipole–dipole |
| NH₃ | −33 | H-bond |
| CH₃OCH₃ (dimethyl ether) | −24 | dipole–dipole |
| CH₃CH₂OH (ethanol) | 78 | H-bond |
| H₂O | 100 | H-bond (2 donors + 2 acceptors per molecule → a network) |

### 4.4 Impact of IMFs on solubility

- **"Like dissolves like."** A solute dissolves well if the **solute–solvent attractions are comparable to (or stronger than)** the solute–solute and solvent–solvent attractions they replace.
  - **Polar / H-bonding solutes → dissolve in polar solvents (water, ethanol).** E.g., ethanol and water mix completely.
  - **Nonpolar solutes → dissolve in nonpolar solvents (hexane).** Oil + hexane mix. Oil + water don't.
  - **Ionic solids dissolve in water** through **ion–dipole** forces (water's δ− O surrounds cations, water's δ+ H surrounds anions).
- **Why oil and water don't mix:** water molecules would have to give up strong H-bonds with each other to make only weak London contacts with oil. That's energetically unfavourable.
- **Chain length:** as an alcohol's nonpolar carbon tail grows, water solubility **drops**. Methanol, ethanol, propanol mix completely with water. Butanol is partly soluble. Octanol is barely soluble.
- **H-bond acceptors help:** ethers, ketones, esters can't H-bond with themselves, but they **accept H-bonds from water**, so small ones are somewhat water-soluble (acetone mixes completely).

### 4.5 Impact of IMFs on separating mixtures: distillation & chromatography

**Distillation (separates by boiling point):**

> [!note] [beyond notes]
> Distillation isn't in your lecture notes yet — chromatography is (Lectures 9–10). Keep this short version as background.

- Heat the mixture. The component with the **weakest IMFs** has the **highest vapor pressure / lowest boiling point**, so it **vaporizes first**. The vapor is condensed and collected.
- **Weaker IMFs → distills out first. Stronger IMFs → stays behind longer.**
  - E.g., acetone (bp 56, dipole–dipole) distills before water (bp 100, H-bond network).
- **Simple distillation** works for bps far apart. **Fractional distillation** (many condense/re-vaporize cycles) works for close bps, e.g., crude oil split by chain length.

---

#### 4.5a Chromatography — the core idea

**Why it exists:** a mass spectrum of a *mixture* is a **superposition of everything present**, so you can't tell which peak belongs to which compound. Chromatography **separates the mixture first**, then each component gets its own clean spectrum.

**Definition (from Lecture 9):** separating the components of a mixture based on the **differential interaction of species between a mobile and a stationary phase**, which makes different species **migrate at different rates**.

| Phase | What it is | Role |
|---|---|---|
| **Stationary phase** | doesn't move — silica, a liquid coating inside a column, or packed solid particles | the thing analytes **stick to** |
| **Mobile phase** | moves — an inert gas or a liquid solvent | the thing that **carries analytes along** |

- **Analytes** = the molecules being analyzed. **Elute** = exit the column.
- **The separation is a tug of war.** Every analyte partitions between the two phases according to its **IMFs with each**:
  - **Stronger attraction to the stationary phase → moves slower → LONGER retention.**
  - **Stronger attraction to the mobile phase → moves faster → SHORTER retention.**

> [!question] "Why do we even need a mobile phase?"
> Two reasons from Lecture 10: (1) the molecules **don't move on their own** — something has to push them through; (2) you need a **competitor** for the stationary phase, so the separation happens gradually instead of everything just sticking.

**Two requirements on the mixture (Lecture 9):**
1. The mixture must be able to exist in the **same phase as the mobile phase** (gas mobile phase → sample must vaporize).
2. The components must have **different magnitudes of attraction** to the stationary phase — identical affinities = no separation.

---

#### 4.5b Reading a chromatogram: t_R, t_m, and k

- **Retention time (t_R)** = time from injection to detection for an analyte. Later spike = more time stuck on the stationary phase.
- **Void time (t_m)** = the time of the **first peak**, an **unretained marker** (usually **CH₄**: tiny and nonpolar, so it barely interacts and travels at the mobile phase's speed, but the detector can still see it).
- **Time actually spent stuck on the stationary phase = t_R − t_m.**

> [!warning] The carrier gas is NOT the first peak
> In GC, **He IS the mobile phase**. It never shows as a peak because a peak means something **new** arrived at the detector, and He flows the whole time → the detector treats it as the **zero line**. The first peak is the unretained marker (CH₄).

- **Retention factor (k)** — a dimensionless, normalized measure, because raw t_R varies with flow rate, column length, etc.:

$$k = \frac{\text{time in stationary phase}}{\text{time in mobile phase}} = \frac{t_R - t_m}{t_m}$$

  - **Larger k → stuck longer → stronger IMFs with the stationary phase.** k = 0 means totally unretained.

---

#### 4.5c Gas chromatography (GC)

| | |
|---|---|
| **Stationary phase** | a **liquid** coated inside a capillary column (or on a solid support) — typically **polar** |
| **Mobile phase** | an **inert gas**, usually **He** |
| **Sample requirement** | must be **easily vaporized** |

- The two phases are normally **different states** (liquid stationary + gas mobile).
- **Why He:** it's **extremely nonpolar**, so it has almost no affinity for the stationary phase. It keeps flowing instead of getting stuck and smearing the output. It's also inert, so it doesn't react with the analytes.
- **Polar stationary phase → the more polar analyte has the higher affinity → longer retention time.** The **nonpolar** component elutes **first**.
- Rough proxy: compounds with **weaker IMFs / lower bp** come off earlier.

**Worked logic (from class):** two compounds on a polar column, compound 1 more polar than compound 2 → compound 2 elutes first (middle peak), compound 1 last. Peak order: **CH₄ marker → compound 2 → compound 1**.

---

#### 4.5d High performance liquid chromatography (HPLC), reverse phase

| | |
|---|---|
| **Stationary phase** | tightly packed **small solid particles**, made **extremely nonpolar** → this is why it's called **reverse phase** |
| **Mobile phase** | a **liquid** mixture (e.g. **methanol + water**) |

- **Reverse phase = the order flips.** With a normal polar stationary phase, polar compounds are retained longest. With a **nonpolar** stationary phase, **nonpolar compounds are retained longest** and **polar compounds elute first**.
- Two equivalent ways to reason about it (Lecture 10 recommends the second):
  1. *Stationary-phase view:* nonpolar column ↔ nonpolar analyte via London → sticks.
  2. *Mobile-phase view (easier):* whichever analyte interacts **more strongly with the polar liquid mobile phase** (e.g. can **hydrogen bond** with the water) gets carried along faster → **shorter retention**.
- **Tuning the separation:** to **speed elution up** (lower t_R) of a polar analyte, make the mobile phase **more polar** — increase the **water** fraction. More affinity for the mobile phase → it spends less time on the column. Going the other way (more organic solvent) retains polar compounds longer.

> [!tip] Exam-safe summary of the whole idea
> **"Like sticks to like."** Match the analyte's dominant IMF against each phase's polarity, decide which phase wins the tug of war, and the winner sets the retention time. Everything else (GC vs HPLC, normal vs reverse phase) is just which phase is the polar one.

**Normal-phase TLC (silica plate) — same logic, distance instead of time** *[beyond notes, standard content]*:
- **Rf = (distance moved by compound) / (distance moved by solvent front)**, between 0 and 1.
- Polar/H-bonding compounds stick to the polar silica → **low Rf**. Nonpolar → **high Rf**.
- Example on silica: hexane (highest Rf) > ether > ketone > alcohol > carboxylic acid (lowest Rf).

---

### 4.6 IMFs vs thermal energy: why phases differ (Lecture 10, Titan)

**The setup:** Earth has **liquid water**; Titan has **liquid methane** (and water there is rock-hard ice). Why do the two substances sit in completely different states under their own planetary conditions?

**Step 1 — identify the IMF:**
- **H₂O:** O–H, so a real **hydrogen-bonding network** (2 donors + 2 acceptors per molecule) → **strong** IMFs.
- **CH₄:** no N/O/F, no net dipole → **London dispersion only**, and it's tiny → **very weak** IMFs.

**Step 2 — the actual answer is a competition:**
> **Phase = IMF strength vs thermal energy (E_k ∝ T).**
- Earth (~288 K) is **much hotter**, so molecules carry far more kinetic energy. Water's H-bonds are still strong enough to hold a liquid together at that temperature; methane's London forces are hopelessly outmatched, so methane is a **gas**.
- Titan (~94 K) has **very little thermal energy**, so even methane's crazy-weak London forces are enough to condense it into a **liquid**. Water's H-bonds dominate completely → **solid ice**.

> [!warning] Trap
> "Methane is a gas" and "water is a liquid" are **not intrinsic properties** — they're statements about IMF strength **relative to the temperature**. A question like this wants both halves: name the IMF **and** compare it to the thermal energy available.

---

## 5. CROSS-CUTTING CHAINS OF REASONING (the "why" arrows)

1. **Electronegativity → everything.** Δχ gives bond polarity, which gives the dipole. The dipole (and geometry) gives molecular polarity, which gives IMFs, which give bp/solubility/separation. The same dipole also drives **IR intensity** and **IR activity**. Electronegativity also drives **induction → NMR shift**.
2. **Bond strength shows up three ways:** BDE (energy to break it), MS fragmentation (the weak bonds break), IR wavenumber (stiffer → higher ṽ, at the same reduced mass).
3. **Symmetry shows up three ways:** molecular polarity (symmetric → dipoles cancel), IR activity (symmetric vibration → no dipole change → inactive), NMR (symmetric H's → one signal).
4. **Quantized energy gaps:** MS ionization (big), UV/vis (electronic), **IR (vibrational, medium)**, **NMR (nuclear spin, tiny → radio)**. A photon is absorbed only if E = hν = ΔE.
5. **Isomers can't be told apart by MS** (same M, though fragmentation may differ). You need IR/NMR. Isomers also differ in IMFs (ethanol vs dimethyl ether).
6. **The full analysis pipeline:** a real sample is a **mixture**, so its mass spectrum is a useless superposition → **chromatography separates it first** (by IMFs with the two phases) → each separated component then goes to **MS / IR / NMR** for identification. Chromatography is the Week-4 payoff of every polarity idea from Weeks 1–3: Δχ → bond dipole → molecular polarity → IMF class → **retention time**.
7. **Phase of matter is a competition, not a property:** IMF strength **vs** thermal energy (kT). Same molecule, different planet, different state (water/methane on Earth vs Titan).

---

## 6. MASTER FORMULA / FACT SHEET

$$\text{FC} = V - \text{LP}\ e^- - \text{bonds} \qquad H = U + PV$$
$$\text{bonds} = \frac{\text{NEED} - \text{HAVE}}{2} \qquad \text{LP } e^- = \text{HAVE} - \text{bonding } e^-$$
$$\bar{m} = \sum m_i x_i,\ \ \sum x_i = 1$$
$$\Delta = BDE_{AB} - \sqrt{BDE_{AA}BDE_{BB}} \qquad \Delta\chi = 0.102\sqrt{\Delta}\ \ (\Delta\text{ in kJ/mol})$$
$$\mu = \delta e R \qquad \delta = \frac{\mu(\text{D})\times 3.336\times10^{-20}}{1.602\times10^{-19}\times R(\text{Å})}$$
$$c = \lambda\nu \qquad E = h\nu = \frac{hc}{\lambda} = hc\tilde{\nu} \qquad \tilde{\nu} = 1/\lambda$$
$$\tilde{\nu} = \frac{1}{2\pi c}\sqrt{\frac{k}{\mu_{red}}} \qquad \mu_{red} = \frac{m_1m_2}{m_1+m_2}$$
$$\frac{I}{I_0} = \text{transmittance (lower = more absorbed)}$$
$$\text{DoU} = \frac{2C + 2 + N - H - X}{2}$$
$$\Delta E_p = \frac{h\gamma_H}{2\pi}B_p = \gamma\hbar B_p \qquad \text{lines} = n + 1$$
$$k_{\text{retention}} = \frac{t_R - t_m}{t_m} = \frac{\text{time in stationary phase}}{\text{time in mobile phase}} \qquad R_f = \frac{d_{\text{compound}}}{d_{\text{solvent front}}}$$

**Constants:** h = 6.626 × 10⁻³⁴ J·s. c = 3.00 × 10⁸ m/s. e = 1.602 × 10⁻¹⁹ C. 1 Å = 10⁻¹⁰ m. 1 D = 3.336 × 10⁻²⁰ C·Å.

**Must-know numbers:** Cl 3:1 · Br 1:1 · ¹³C 1.1%/C · Δχ cutoffs 0.4 / 1.9 · VSEPR 180/120/109.5/107/104.5 · IR: O–H 3200–3600 broad, N–H 3300–3500, C–H 2850–3000 / 3000–3100, C≡N/C≡C 2100–2260, C=O 1650–1750, C=C 1600–1680, C–O 1000–1300 · Pascal 1:1, 1:2:1, 1:3:3:1 · H-bond = N, O, F · GC: polar liquid stationary + He gas mobile, nonpolar elutes first · HPLC reverse phase: nonpolar solid stationary + methanol/water mobile, polar elutes first · void time t_m = CH₄ marker.

---

## 7. EXAM-STYLE QUESTION FORMATS (instructor's actual wording, use as templates)

1. "Which of the following bonds do you expect will have a more **intense** stretching signal on an IR spectrum?" (compare polarity)
2. "For the purpose of this question, assume both Bond 1 and Bond 4 are IR active. Which would you expect to absorb a **larger frequency (higher wavenumber)** of IR light? **Use chemical principles to rationalize your choice.**" (ṽ equation, reduced mass, force constant)
3. "Which of the following bonds **will not** have an observable stretching signal on an IR spectrum?" (same-element bonds in identical environments)
4. "What is the bond order for bond A and bond B?" → "If the stretching frequency for bond A is 1650 cm⁻¹, calculate an estimated stretching frequency for bond B."
5. "Based on these (BDE) data alone, and the fact that F is assigned 4.00, calculate the electronegativities of O and N."
6. "What general pattern(s) in the periodic table of electronegativity do you recognize?"
7. Percent abundance from average atomic mass. Predict M / M+2 / M+4 ratios.
8. From a mass spectrum: deduce the molecular formula and Lewis structure. Explain a fragment peak.
9. Given a formula: electron domains → geometry → bond angle → polar or not.
10. "How many unique signals would you expect in the ¹H NMR spectrum of compounds A–D?"
11. "Which proton resonates at higher frequency (higher ppm)? Explain using induction/shielding."
12. "A compound C₆H₁₂O₂ shows signals A: 6H doublet, B: 3H triplet, C: 2H quartet, D: 1H septet. Propose a Lewis structure consistent with the data and label H_A–H_D."
13. "Consider pure samples of NH₃ and PH₃. Which is held together by stronger IMFs? First draw the Lewis structures."
14. Rank by boiling point / predict solubility in water vs hexane / predict elution order in distillation or chromatography.
15. Draw all constitutional isomers of a formula. Decide whether two drawings are isomers, the same compound, or neither.
16. "Water is a liquid on Earth but methane is a liquid on Titan. **Why do these two substances exhibit completely different states of matter at these planetary conditions?**" (identify the IMF for each, then compare it to the available thermal energy)
17. "Given this chromatogram, which peak corresponds to compound 1 and which to compound 2? **Rationalize using chemical principles.**" (polarity of each analyte vs polarity of the stationary phase)
18. "Calculate the retention factor k for a peak with t_R = ___ and a void time of ___." / "Which compound has the larger k, and what does that tell you about its IMFs?"
19. "You want to **decrease** the retention time of compound X in a reverse-phase HPLC run. What should you change about the mobile phase, and why?" (change the water/organic ratio)
20. "Why is helium used as the carrier gas?" / "Why doesn't the carrier gas show up as a peak?" / "What does the first peak represent?"

---

## 8. PRACTICE BANK (with answers, for self-testing or as LLM seed questions)

**Week 1**
1. Ga has isotopes 68.926 and 70.925; average 69.723. % of each? → x(69Ga) = (70.925 − 69.723)/1.999 = **60.1%**, 71Ga **39.9%**.
2. A spectrum shows the highest-mass peaks at **122 and 124 (equal height)** and a base peak at **43**. What is it? → a 1:1 M/M+2 pair means **one Br**. 122 − 79 = 43 = C₃H₇⁺ → **C₃H₇Br** (bromopropane). The base peak at 43 is the loss of Br, because the C–Br bond is weak.
3. Predict the M : M+2 : M+4 ratio for CH₂Br₂ → **1 : 2 : 1** at 172 / 174 / 176.
4. Why is the M peak of CH₃I at 142 followed by a large peak at 15? → the C–I bond is weak (~240 kJ/mol), so I (127) is lost, leaving CH₃⁺ (15).
5. Draw HCN with the course algorithm. → HAVE 10, NEED 18, 4 bonds, 1 LP. **H–C≡N:** with the LP on N. All FC 0. Linear, polar.
6. Which is stronger, C–Cl or C–Br? Explain without BDE values. → C–Cl: Cl is smaller → shorter bond, also more polar.

**Week 2**
7. Rank by IR wavenumber: C–H, C=O, C–O, C≡N. → **C–H (~2900) > C≡N (~2250) > C=O (~1715) > C–O (~1100)**.
8. Which is IR active: N₂, CO, CO₂ symmetric stretch, HCl? → **CO and HCl** only.
9. A spectrum has a strong 1715 and a very broad 2500–3300 peak. → **carboxylic acid**.
10. Strong 1740 + strong 1200, no peak above 3000 except 2850–2980 → **ester**.
11. Two sharp-ish peaks at ~3350 and ~3450 → **1° amine**.
12. Shape and polarity of SO₂, BF₃, CH₂Cl₂, H₂S → bent/polar. Trigonal planar/nonpolar. Tetrahedral/polar. Bent/polar.
13. HBr: μ = 0.82 D, R = 1.41 Å. % ionic? → δ = 0.82 × 3.336e-20 / (1.602e-19 × 1.41) = 2.74e-20 / 2.26e-19 = **0.12 → 12%**.
14. C=O absorbs at 1715. Estimate C–O (single) assuming k ∝ bond order. → 1715 × √(1/2) ≈ **1213 cm⁻¹** (✓ in the C–O range).

**Week 3**
15. DoU of C₇H₇NO → (14 + 2 + 1 − 7)/2 = **5**.
16. Draw all isomers of C₂H₆O and give each one's ¹H NMR signal count. → ethanol **3**, dimethyl ether **1**.
17. Signals in 2-methylpropane? → **2** (9H doublet; 1H split by 9 neighbours → 10-line multiplet).
18. Rank ppm: CH₃–CH₂–CH₂–F, which CH₂/CH₃ is highest? → CH₂F > middle CH₂ > CH₃.
19. Predict splitting for CH₃CH₂Cl → CH₃ **triplet**, CH₂ **quartet** (CH₂ at higher ppm).
20. C₄H₉Cl shows one 9H singlet only. Structure? → **(CH₃)₃C–Cl** (tert-butyl chloride).
21. Which is more deshielded: H on CH₂Cl₂ or on CH₃Cl? → **CH₂Cl₂** (two withdrawing Cl).

**Week 4**
22. Strongest IMF in: CH₃OH, CH₃Cl, CH₄, NaCl(s), CH₃OCH₃. → H-bond. Dipole–dipole. London. Ion–ion. Dipole–dipole.
23. Rank bp: CH₄, CH₃CH₂OH, CH₃OCH₃, H₂O → CH₄ < CH₃OCH₃ < CH₃CH₂OH < H₂O.
24. Why does n-pentane boil higher than neopentane? → larger contact surface area → stronger London.
25. Is 1-octanol more soluble in water or hexane? Explain. → **hexane**: the long nonpolar tail dominates, and London forces with hexane win.
26. On silica TLC, which travels farther: hexanol or hexane? → **hexane** (nonpolar, weak attraction to polar silica → higher Rf).
27. Distilling a mixture of ethanol and diethyl ether: which comes off first? → **diethyl ether** (no H-bonding, bp 35 vs 78).
28. GC with a **polar** liquid stationary phase and He carrier. Which elutes first, hexane or 1-butanol? → **hexane**: nonpolar, almost no affinity for the polar coating. 1-Butanol **hydrogen bonds** to the stationary phase → long retention.
29. A GC run gives peaks at 1.2, 4.0 and 7.6 min. The 1.2 min peak is CH₄. Find k for the other two. → t_m = 1.2. k = (4.0 − 1.2)/1.2 = **2.33**; k = (7.6 − 1.2)/1.2 = **5.33**. The second spends ~5.3× as long stuck to the column → stronger IMFs with the stationary phase.
30. Same two compounds, now on a **reverse-phase** HPLC column with methanol/water. Which elutes first? → the **polar** one: the nonpolar stationary phase barely holds it, and it H-bonds with the water in the mobile phase. **The order flips vs GC.**
31. In that HPLC run, a polar analyte is eluting too slowly. What do you change? → increase the **water** fraction (more polar mobile phase) → stronger analyte–mobile attraction → **shorter t_R**.
32. Why is a mass spectrum of a mixture hard to read, and how does chromatography fix it? → the spectrum is a **superposition** of every component's peaks and fragments. Chromatography separates the components in time so each one enters the detector alone.
33. Why is helium the carrier gas, and why is there no helium peak? → **extremely nonpolar and inert** → it doesn't stick to the stationary phase or react, so it flows freely; it's present the whole run, so the detector reads it as the **baseline**, not a peak.
34. Titan's surface is ~94 K with lakes of liquid CH₄, while Earth's water is liquid at ~288 K. Explain. → CH₄ has only **London** forces (no N/O/F, no net dipole) — negligible on Earth, where thermal energy far exceeds them, so it's a gas. At 94 K there's so little kinetic energy that even London forces condense it. H₂O's **H-bond network** is strong enough to hold a liquid at 288 K, and freezes solid at 94 K.
35. A GC sample must be "easily vaporized." Why, and what does that say about which mixtures GC can handle? → the mixture has to exist in the **same phase as the mobile phase**. A gas mobile phase means only volatile (weak-IMF, lower-bp) analytes work; involatile/H-bonding ones need **HPLC** with a liquid mobile phase instead.

---

## 9. ⚠️ QUARANTINE — uncertain items / items from outside your notes

*LLM: don't write questions that treat these as settled fact.*

1. **k ∝ bond order (k_triple = 1.5 k_double)**: an approximation from a specific class problem. Only use it when the question says to assume it.
2. **Exact BDE, ppm, and bp values**: these are textbook averages. The course may use slightly different numbers. Test **trends/rankings**, not memorized numbers, unless the data is given.
3. **Distillation (top of 4.5) and TLC/Rf (bottom of 4.5c)**: still not in the notes — standard content, flagged **[beyond notes]**. **Chromatography, GC, HPLC and the retention factor ARE now confirmed** from [[Lecture 9 - Sep 21]] and [[Lecture 10 - Sep 22]] and are fair game.
3b. **HPLC mobile phase**: your Lecture 10 note says "methane and water". That's almost certainly **methanol** and water — methane is a gas and wouldn't be a liquid mobile phase. Written as methanol here; confirm from the slide.
3c. **Titan/Earth temperatures (94 K / 288 K)**: filled in from general knowledge, not from the slide. The reasoning (IMF vs thermal energy) is what matters, not the numbers.
3d. **"Silica is the usual stationary phase"** (Lecture 9) vs GC's **liquid-coated capillary** (Lecture 10): both are true for their own technique. Lecture 10 also said "ignore the silicone part" on one slide, so don't build a question on that detail.
4. **Items tagged [beyond notes] or [check slides]** (Rule of 13, ethers/aldehydes/ketones/amides as named groups, aromatic ppm, O–H not splitting, "replace-with-Z" test): standard intro chemistry, but not confirmed from this course's slides.
5. **Carboxylic acid O–H range**: the notes say 2200–3600, the standard value is 2500–3300. Accept either. The key feature is "extremely broad + C=O present".
6. **Splitting (n+1)** is covered in lecture but isn't an explicit learning goal on the study guide. Test it, but weight it lower than signal counting and shift ranking.
7. **The "83 peak comes from 84 or 86"** detail in CH₂Cl₂: unresolved. The takeaway (C–H is stronger than C–Cl) is solid.
8. **Cyclohexane / 1,3-dioxane signal counts** use the course-level simplification (ring flipping averages axial/equatorial H's).

---

## 10. GAPS TO PATCH BEFORE THE EXAM (from your revision self-test)

Your self-test stopped at Week 2 "absorption spectroscopy". Everything from **2.3 onward was blank**. Priority order for the next 4 days:

- [ ] **Day 1 — Week 2 IR block**: 2.3 (PE diagram, draw it once), 2.8 (ṽ equation + **correct reduced mass**), 2.11–2.14 (IR active/inactive, intensity, functional groups, **IR table from memory**).
- [ ] **Day 2 — VSEPR & polarity**: fill in the shape table from memory (including lone pair shapes), do 10 polarity calls, practise dipole arrows (δ+ → δ−).
- [ ] **Day 3 — Week 3**: DoU drills, isomer enumeration (C₄H₉Br, C₃H₈O), signal counting (including the ring cis/trans trap), the **induction → ppm chain written out**, n+1 splitting, and the C₆H₁₂O₂ / C₅H₁₁Br puzzles.
- [ ] **Day 4 — Week 4 + mixed paper**: IMF flowchart, NH₃ vs PH₃ type questions, bp ranking, solubility, **Titan-style "why different states" (IMF vs thermal energy)**, and the **chromatography block**: GC vs HPLC table from memory, which phase is polar in each, elution order both ways, t_R / t_m / k. Then one full mixed practice paper under time.

**Corrections to remember (quick list):**
- Isotopes = **same element**, different neutrons.
- Radical = **unpaired** electron (not "loose").
- BDE is in **kJ/mol** and is **homolytic**.
- IR uses **infrared**, NMR uses **radio**.
- μ_red = **m₁m₂/(m₁+m₂)**, not m₁ + m₂.
- Dipole arrow **δ+ → δ−**.
- 3 domains with 1 lone pair = **bent** (the electron geometry is trigonal planar).
- H-F has **larger** Δχ and a **higher** BDE than H–Cl.
- Same-element bonds are IR inactive **only if both sides are identical**.
- n + 1 = lines **inside one signal**, and n = **all** H within 3 bonds.
- "Charge-induced dipole" needs an **ion OR a dipole** as the inducer — it isn't ions only.
- London forces are "induced dipole–induced dipole" — **no ion involved**. Don't call them charge-induced dipole.
- **Elute** = exit the column.
- High affinity for the **mobile** phase → **short** retention. High affinity for the **stationary** phase → **long** retention.
- The first chromatogram peak is the **CH₄ marker (void time t_m)**, not the carrier gas.
- **Reverse phase = nonpolar stationary phase**, so the elution order flips.

---

## 11. SOURCES
- [[Reading 1 - Sep 3]] · [[Reading 2 - Sep 7]] · [[Reading 3 - Sep 9]] · [[Reading 4 - Sep 14]] · [[Reading 5 - Sep 16]] · [[Reading 6 - Sep 20]]
- [[Lecture 3 - Sep 3]] · [[Lecture 4 - Sep 8]] · [[Lecture 5 - Sep 10]] · [[Lecture 6 - Sep 14]] · [[Lecture 7- Sep 15]] · [[Lecture 8 - Sep 17]] · [[Lecture 9 - Sep 21]] · [[Lecture 10 - Sep 22]] · [[MoM  Sep 14]]
- [[In Class Quiz 01]] · [[quiz prac]] · [[mid term revision]]


personal notes:
solubility is dependent on imf's basically
$$
CH_{4} \to(e^-) \to [CH_{4}]^{.+}
$$
becxause we get one electorn kicked off which meanas our one electron is loose without a buddy guy
thus usually what we detect is radical cation

inert gas -> very neutral guy that won't affect anyone else

A lot of hydrocarbons bury the polarity of the polar components of the thing
basically just a bunch of non polar regioins takes over the big polar regions. 
