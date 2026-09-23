---
type: lecture
course: "[[CHEM 042 - Chemistry in the Modern World/_Course Info|CHEM 042 HM-02]]"
date: 2026-09-22
tags: [chem042, lecture, chromatography, gas-chromatography, hplc, retention-time, imf]
cleaned_with: cleanup-note v1.4.0
cleaned_on: 2026-09-22
---
# CHEM 042 — Lecture

## Reading / Prep

- [[Reading 6 - Sep 20]] — the intermolecular forces that decide every affinity argument in this lecture
- [[Lecture 9 - Sep 21]] — chromatography setup this lecture builds directly on

## Key Terms

| Term | Meaning (your words) |
|---|---|
| [[Analyte]] | the molecules we're analyzing |
| [[Elution\|allute]] | means they exit |
| [[Gas chromatography]] | stationary phase = liquid coated inside a capillary column or on a solid support. mobile phase = inert gas. the sample must be easily vaporized |
| [[High performance liquid chromatography]] | stationary phase = tightly packed small solid particles. mobile phase = bunch of liquid packed |
| [[Reverse phase]] | we call this a reverse stationary phase because its extremely non-polar so now we're testing the reverse of how we were testing polar stationary phase |
| [[Retention time]] | time taken for an analyte to travel from injection to detection |
| [[Void time]] | the time it takes for the first (unretained) peak to come, $t_m$ |
| [[Retention factor]] | time in stationary phase / time in mobile phase — a dimensionless, normalised measure of a solute |

---

## Notes

### IMFs beyond earth

IMFs beyond earth: Earth and liquid methane on Titan.

![[Pasted image 20260922083217.png]]

water is being held by hydrogen bonds cuz o is present and theres a pretty good dipole.
methane is held by induced dipole - induced dipole forces cuz it doesn't satisfy conditions for hydrogen bond

![[Pasted image 20260922083638.png]]

why do these two substances exhibit completely different states of matter at these planetary conditions

my guess is that its temperature and imf stuff

well that simple answer is that its literally just hotter thus higher thermal energy thus higher $E_k$. so farther apart the usual stuff.

---

### Back to chromatography

main problem with our current mass spec is that its a superposition of everything prevalent which causes a lot of issues.

The technique we covered yesterday chromatography -> [[Lecture 9 - Sep 21]]
we inject mobile and stationary phase and we use IMF data to be able to know whats changing

Allute(?) -> means they exit *(AI note: this is spelled **elute** — worth fixing in your head before the exam, since "elution order" is how the questions phrase it)*

the main concept is that with [[Stationary phase|stationary phase]] its gonna intract with the guys going through which will affect how fast/slow they move:

![[Pasted image 20260922084624.png]]

so like green probably had the most energy etc like that

> [!question] ai q
> im still confused on why we need mobile phase why cant we just move them through stationary phase

[[Analyte|analytes]] -> the molecules we're analyzing

---

### Selecting mobile phase for separation

why we need [[Mobile phase|mobile phase]] ->
- the molecules don't move themselves, we need something to move them we need like inert gas
- there needs to be a tug of war to ensure we gradually search

![[Pasted image 20260922085435.png]]

this is quite a few hydrogen bonds so pretty strong

![[Pasted image 20260922085453.png]]

the upper molecule here is slightly polar cuz of oxygen.
so dipole-dipole is possible
dipole-induced - dipole-induced
induced dipole - induced dipole

we want to use the second guy as our gaseous mobile phase thus its easier to just separate the guys into gas form instead of liquid. the whole point is we want something thats easier to have in gas.

---

### Gas chromatography (GC)

| Phase | What it is |
|---|---|
| **stationary phase** | liquid coated inside a capillary column or on a solid support |
| **mobile phase** | inert gas. the sample must be easily vaporized |

they're usually different phases
so like if staoinary is liquid then mobile is gas

![[Pasted image 20260922090157.png]]

like this

[[Retention time]] -> time taken for an analyte to travel from injection to detection.

| Affinity | Retention |
|---|---|
| high affinity to the mobile phase | short retention |
| high affinity to stationary phase | long retention |

![[Pasted image 20260922090353.png]]

ignore the silicone part thing.
stationary phase is pretty polar
this generally means that whatever has high affinity with this stationary phase is pretty polar

so longer retention time means whatever is more polar here so in this example its compound 1

*He* is an extremely non-polar atom thus it works much better as our gaseous solvent because we want it to be flowing and don't want them to get stuck and hinder our output

---

### Reading a chromatogram

what we would see from a chromatogram

![[Pasted image 20260922090952.png]]

how long it took for intensity to spike -> would be the retention time. the faster it was the less affinity to stationary phase it had

First peak -> is usually our set guy to pass through. (we've designed this so it comes out before anything) the time it takes for this guy to come is called [[Void time|void time]] $t_{m}$
- this isn't our mobile phase because mobile phase is always on(as in the guy is always on so they are moving so its like zero'd out basically)

> [!note] He vs the first peak
> - **He IS the mobile phase** here (carrier gas = mobile phase in GC). Stationary phase = the polar liquid coating the column.
> - He doesn't show up as a peak: a peak means something **new** reached the detector, and He flows past the entire time, so the detector treats it as the zero line.
> - **First peak = unretained marker** (usually **methane, CH₄**): tiny and nonpolar, so it barely interacts with the stationary phase and travels at He's speed, but the detector can see it. Its time is the **void time t_m**.
> - Time a compound spends stuck on the stationary phase = **t_R − t_m**

- usually this is CH4 but this is basically our unretained marker compound cuz we know won't interact

the first middle peak should probably be compound 2 and the other one should be compound 1 cuz we know compound 1 takes more time in the thing.

---

### High performance liquid chromatography (HPLC)

| Phase | What it is |
|---|---|
| **stationary phase** | tightly packed small solid particles |
| **mobile phase** | bunch of liquid packed |

we call this a [[Reverse phase|reverse stationary phase]] because its extremely non-polar so now we're testing the reverse of how we were testing polar stationary phase.

![[Pasted image 20260922091704.png]]

> [!warning] flagged for review
> ai note: i gotta review this warn me

![[Pasted image 20260922091919.png]]

you can try to understand by reversing then you can think of it as which one will interact with the mobile phase more
1 will have a stronger hydrogen bond -> thus its better affinity with mobile phase.
also can use og argument but thats harder
when it was polar then polar would be longer
-> now its non polar the non polar would be longer cuz a polar would insta reflect off

if we wanted to speed up the speed -> so decrease retention time.
so we want to interact with the mobile phase
mobile phase is methane and water and water is much more polar so we can just use more water thus a more polar mixture thus more affinity with mobile phase()
-> NEW ANSWER BY ME
ah its probably methanol. methane is a gas so it cant be the pumped liquid solvent, and the whole "just use more water" ratio thing only works if the two actually mix — methane+water dont, methanol+water do.

---

### Retention factor

retention time is pretty variable so we have a better dimensionless, normalised measure of a solute.

[[Retention factor]] ($k$) = time in stationary phase / time in mobile phase =

$$
\frac{t_{r}-t_{m}}{t_{m}}
$$

so its relative to void time for a better relative measurement

---

### Why the two phases are different states

few notes about chromatography ->
point of two different states is that ->
- one has to move, one has to note move as in the sense that one guy has to get the things moving so if it was a liquid gas is best and if it was a solid liquid is best.
- also its pretty critical that they don't mix and its better as two different states

## Examples / Practice


## Summary

This lecture starts with Titan as an IMF example — water is held together by hydrogen bonds because of the O, methane only by induced dipole–induced dipole, and the reason they're in different states at their own planetary conditions is just that Earth is hotter, so higher thermal energy and higher $E_k$. Then it goes back to chromatography, because mass spec on its own gives a superposition of everything in the sample. The mobile phase exists because molecules don't move themselves and because you need a tug of war between the two phases. In **GC** the stationary phase is a polar liquid coated in a capillary and the mobile phase is an inert gas (He, chosen because it's extremely nonpolar so nothing gets stuck on it), so the more polar compound has the longer retention time. On the chromatogram, He never shows as a peak; the first peak is an unretained marker (usually CH₄) and its time is the void time $t_m$. In **HPLC** it flips: the stationary phase is tightly packed nonpolar solid particles (reverse phase) and the mobile phase is a polar liquid, so now the nonpolar compound is retained longer and you reason by which compound interacts with the *mobile* phase more. To speed a compound up you make the mobile phase more polar (more water). Because raw retention time varies, the better measure is the retention factor $k = (t_r - t_m)/t_m$, normalised against the void time. And the two phases are different states because one has to move and one has to stay put, and because they can't be allowed to mix.

## Related

- [[Lecture 9 - Sep 21]] — where chromatography, mobile/stationary phase and the affinity idea were introduced
- [[Reading 6 - Sep 20]] — the intermolecular forces behind every "which phase does it prefer" argument here
- [[Lecture 3 - Sep 3]] — mass spectrometry, the "superposition of everything" problem this lecture opens with
- [[Midterm 1 - Master Study Guide]] — section 4.5c/4.5d cover GC vs HPLC, elution order both ways, and $k$
- [[mid term revision]] — Week 4 goal: effect of IMFs on separation, including chromatographic techniques

## Questions for AI / Follow-up
- You flagged the reverse-phase image (`20260922091704`) as needing review — what exactly is the C18 stationary phase doing, and why does "nonpolar stationary + polar mobile" flip the elution order versus GC?
- Is the HPLC mobile phase **methanol** and water rather than methane and water? Confirm from the slide, since the whole "add more water to speed things up" argument depends on which organic solvent it is.
- Why does He specifically get used as the GC carrier gas rather than N₂ — is it purely the nonpolarity, or does the atom size/flow rate matter too?
- For a given $k$, what counts as a "good" value — is there a range where separation is actually usable, and what do you change (temperature in GC, solvent ratio in HPLC) to get into it?
