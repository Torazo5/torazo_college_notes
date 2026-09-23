---
type: reading
course: "[[CHEM 042 - Chemistry in the Modern World/_Course Info|CHEM 042 HM-02]]"
source:
date: 2026-09-03
tags: [lewis-structures, formal-charge, enthalpy, bond-energy]
cleaned_with: cleanup-note v1.3.0
cleaned_on: 2026-09-21
---
# CHEM 042 HM-02 — Reading

## Key Terms
| Term | Meaning |
|---|---|
| **Period** | Energy levels of valence shells → **rows** on the periodic table |
| **Group** | Number of valence electrons → **columns** on the periodic table |
| [[Valence electron\|Valence electrons]] | The dots in a Lewis structure |
| [[Formal charge]] | `# valence e⁻ − # lone pair e⁻ − # bonds`. Low formal charge = stable |
| [[Valency]] | Number of bonds that a neutral atom tends to form |
| [[Enthalpy]] (H) | Total heat content & internal chemical energy, at constant pressure. `H = U + PV` |
| [[Endothermic]] | Any process with ΔH > 0 — energy goes *in* (bond breaking) |
| [[Exothermic]] | Any process with ΔH < 0 — energy goes *out* to environment (bond creation) |
| [[Bond dissociation energy\|Bond Dissociation Energy (BDE)]] | Standard enthalpy change to break a bond in an isolated gas-phase molecule, cleaved **homolytically** |
| [[Homolytic cleavage]] | Bond breaks leaving each piece as a **radical** (one or more unpaired electrons) |

---

## Notes

### Reading the Periodic Table
- Period → energy levels of valence shells → **rows**
- Group → # of valence electrons → **columns**
- Valence electrons → dots on the electrons

### Formal Charge
To be stable you want a low formal charge:

$$
\text{Formal charge} = \#\text{ valence e}^- - \#\text{ lone pair e}^- - \#\text{ bonds}
$$

> [!warning] Common mistake
> "\# lone pair electrons" means **electrons in a lone pair**, not # of pairs.

---

### Calculating Lewis Structures

#### Step 1 — Sum valence electrons

$$
\sum \left( \text{charge} \times \#\text{ of valence electrons} \right)
$$

![[Pasted image 20260902195625.png]]

#### Step 2 — Total valence electrons *needed* to stabilize outer shell
Count what each atom needs for a full shell:
- `2` — Hydrogen
- `8` — Carbon (and most others)

#### Step 3 — Subtract Step 1 from Step 2
So: total number of valence electrons minus number of electrons required to reach noble gas config.

The number here represents the **number of bonds** the Lewis structure must have → **remember to divide by 2**.

![[Pasted image 20260902200115.png]]

#### Step 4 — Subtract Step 1 with Step 3
So: total valence minus bonding, to find **lone pair electrons** for the Lewis structure.

In the examples above:

$$
18e^- - 16e^- = 2e^-
$$

(or one lone pair) — half it again, ok.

![[Pasted image 20260902200416.png]]

#### Step 5 — Check your work
- Make sure the structure matches with what we calculated
- Ensure overall charge of molecule / ion is reduced to 0
- Keep trying for getting these two things correct

---

### Enthalpy

**Enthalpy** → total heat content & internal chemical energy, **at constant pressure**.

$$
H = U + PV
$$

| Symbol | Meaning |
|---|---|
| `H` | Enthalpy = heat |
| `U` | Internal energy |
| `PV` | Pressure × Volume |

> [!note] Vacuum case
> Vacuum → no pressure basically, so **H = U**

Because chemical bonds lower the electronic potential energy of a system → because closer together, thus less `r`.

| Process | Energy flow | Sign | Name |
|---|---|---|---|
| **Bond breaking** | Requires energy input to break bonds | ΔH > 0 | **Endothermic** |
| **Bond creation** | Releases energy to environment | ΔH < 0 | **Exothermic** |

---

### Bond Dissociation Energy

**Bond Dissociation Energy** → standard enthalpy (heat) change in order to break bonds in an isolated gas-phase molecule.

> [!important]
> REQUIRED TO CLEAVE A COVALENT BOND **HOMOLYTICALLY** (leave them as radicals → which means one or more unpaired electron → can see from diagram below)

![[Pasted image 20260902203604.png]]

---

## Summary
> Periodic table position tells you electron count: rows (periods) = valence energy levels, columns (groups) = # of valence electrons. Stable structures are the ones with low formal charge (`valence − lone pair e⁻ − bonds`). Lewis structures get built with a 4-step arithmetic method: sum the valence electrons you *have*, sum what you *need* for full shells, subtract to get bonds (÷2), then subtract again to get lone pairs (÷2) — then verify the drawing matches and overall charge reduces to 0. The energy side of this is enthalpy, `H = U + PV`, the heat content at constant pressure (in a vacuum, `H = U`). Bonds lower a system's potential energy, so **breaking** bonds costs energy (ΔH > 0, endothermic) and **forming** bonds releases it (ΔH < 0, exothermic). Bond Dissociation Energy is the specific case: the enthalpy to break one bond in an isolated gas-phase molecule, cleaved homolytically so each fragment leaves as a radical.

## Related
- [[Lecture 3 - Sep 3]] — same day; uses formal charge and BDE on the mass spec problems
- [[Reading 2 - Sep 7]] — builds on BDE to explain electronegativity and the Pauling scale

## Questions for AI / Follow-up
- In Step 3, why does the bond count need to be divided by 2 — is it because each bond is shared between two atoms?
- When do you use formal charge vs. just checking the octet to pick between two valid Lewis structures?
- Why specifically *homolytic* cleavage for BDE — how would heterolytic cleavage energy differ?
