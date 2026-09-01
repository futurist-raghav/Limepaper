# Factory & Operations Plan — Space, Machinery, Lean Floor Team

*Part of the Limepaper business plan — see [00_README_Index.md](00_README_Index.md). Added 24 August 2026; §17.2.2 rewritten 31 August 2026 against the ten finalized SKUs in [18_Product_SKU_Catalog.md](18_Product_SKU_Catalog.md). Revised again 31 August 2026 (2nd pass) for the ₹1.5cr → ₹3cr ceiling increase. **Revised 31 August 2026 (3rd pass): ₹3cr withdrawn as unfinanceable — Stage 1 reverts to ₹1.5 crore, rebuilt around a real ₹70L collateral asset ([07_Capital_Plan.md](07_Capital_Plan.md) §9.2.2) and the founder's own essential-machine list.** The extrusion line reverts to entry/used tier, a new feedstock refining unit is added, the label die-cutter reverts to a deferred add-on, and the paper bag machine moves into the budget conditional on its glue/rope trial (§17.2.2, [18_Product_SKU_Catalog.md](18_Product_SKU_Catalog.md) §18.9.4) clearing before order. This doc doesn't re-derive the capital numbers fixed in [07_Capital_Plan.md](07_Capital_Plan.md) or the role list in [06_Core_Team_Experts.md](06_Core_Team_Experts.md) — it goes one layer deeper: how much physical space the plant needs and where, what each machine does/costs/needs, and exactly who has to be on the floor (and who doesn't).*

**Scope check:** every number here is sized to **Stage 1** — the bootstrapped, ≤₹1.5cr extrusion + converting line ([07_Capital_Plan.md](07_Capital_Plan.md) §9.1) — not the Stage 2 5 TPD plant. Where a Stage 1 choice differs from Stage 2, that's called out.

---

## 17.1 Factory space — layout, sizing, and where to put it

### 17.1.1 Site selection

* **Location: Kishangarh or Rajsamand, inside a RIICO industrial area**, not an ad hoc rented shed. A RIICO estate gets pre-cleared industrial land use, an existing power backbone sized for manufacturing, and proximity to feedstock millers and the highway network HDPE arrives on.
* **Distance priorities, in order:** (1) your locked-in micronized-CaCO₃ supplier — the bulkiest, most frequent inbound material, freight should be near-zero ([03_Unit_Economics.md](03_Unit_Economics.md) §4.1); (2) a state/national highway for HDPE inbound and finished-goods outbound; (3) Kishangarh/Ajmer/Rajsamand town for a labour catchment operators can realistically commute from.
* **Non-negotiable before signing the lease:** confirm the plot's sanctioned power load can carry the extrusion line's draw (§17.2.1) — already a gate in [08_Implementation_Roadmap.md](08_Implementation_Roadmap.md) step 18, the single most common reason an industrial lease looks fine on paper and isn't.
* **Lease, don't build.** [07_Capital_Plan.md](07_Capital_Plan.md) §9.2.1 already sets this — a leased-and-fitted shed protects capital a constructed one would lock up.

### 17.1.2 Space budget, by zone

Engineering-plausible estimates for a Stage 1 line (≈80–150 kg/hr entry/used-tier extrusion at the ₹1.5cr ceiling — not the single ₹1.2cr/250kg-hr listing that would breach it alone). Confirm actual footprint against your vendor's GA drawing before finalizing the lease — a planning budget, not a floor plan.

| Zone | Covered area | Notes |
| :---- | :---- | :---- |
| Extrusion + compounding + calendering bay | 900–1,100 sq ft | Machine footprint ≈450–700 sq ft (line ≈35–55 ft); the rest is mandatory service clearance for die-head access, screw pull-out, calender-roll maintenance — don't compress this, it's where breakdowns get fixed |
| Feedstock refining/micronizing bay — new | 200–300 sq ft | Grinding/classifying unit ([07_Capital_Plan.md](07_Capital_Plan.md) §9.2.3), sized to Stage 1 throughput, not a full beneficiation plant |
| Converting/finishing bay | 350–450 sq ft | One PLC-controlled line, one operator station |
| Raw material store (CaCO₃ powder + HDPE resin) | 300–500 sq ft | Bagged/jumbo-bag storage, ~2–4 weeks' buffer; must stay dry — CaCO₃ powder cakes with moisture |
| Finished goods store | 250–400 sq ft | Sheet rolls/converted product staged for dispatch |
| QC/lab corner | 150 sq ft | See §17.2.4 — small footprint, real function |
| Office/admin | 150–200 sq ft | Shared by the three-person founding team ([06_Core_Team_Experts.md](06_Core_Team_Experts.md) §8.0) |
| Utility yard (transformer, DG backup, compressor, chiller/cooling tower) | 250–350 sq ft | Often semi-open rather than fully enclosed |
| Circulation, aisles, loading dock | +20% of the above | Fire-exit access and truck turning space aren't optional once applying for factory/trade licence and PCB consent |
| **Covered total** | **≈ 3,000–4,000 sq ft** | |
| Open yard (truck loading/unloading, raw material offload staging) | 1,000–1,500 sq ft | Feedstock and resin both arrive by truck — need standing/unloading space that isn't the production aisle |

**Recommended plot size: 5,000–7,000 sq ft total (built + open)** — a deliberate margin over the ~4,000–5,500 sq ft minimum, since a plant sized to the exact minimum has nowhere to put a second shift's buffer stock or a converting-line upgrade without relocating (expensive, slow for a commissioned line). This is right-sizing the *lease*, not pre-building for Stage 2.

**Ceiling height:** 12–15 ft clear in the extrusion bay — die-head, calender stack and any overhead maintenance hoist need vertical clearance most standard 10 ft sheds don't have. Confirm specifically; easy to overlook on a walkthrough, expensive to discover after signing.

### 17.1.3 What "fit out" actually covers, against the existing capex lines

[07_Capital_Plan.md](07_Capital_Plan.md) §9.2.1 budgets ₹7–9L for shed/building and ₹4–5L for utilities connection. Concretely, that needs to include:

* **Flooring:** reinforced/load-bearing RCC at the extrusion machine's foundation points (a vibrating twin-screw extruder will crack a standard slab over time) — confirm your vendor's foundation spec before civil work is finalized.
* **Electrical:** panel and wiring upgraded to the extrusion line's actual load (§17.2.1), not the shed's stock wiring.
* **Water:** one point for drinking and occasional wash-down — the process itself uses ~0 water ([03_Unit_Economics.md](03_Unit_Economics.md) §4.4), so minor, and no ETP to budget for ([16_Process_Environmental_Profile.md](16_Process_Environmental_Profile.md) §16.3).
* **Fire safety:** extinguishers, marked exits, clear aisle widths — required for the factory licence and PCB Consent to Operate ([06_Core_Team_Experts.md](06_Core_Team_Experts.md) role #3), not just good practice.
* **Basic partitioning:** office, QC corner and store separated from the production floor — dust and product don't mix well, cheap to build in from the start.

---

## 17.2 Machinery — function, capacity, space, cost

### 17.2.0 Feedstock refining/micronizing unit — new, brought in-house

* **What it does:** grinds and classifies raw marble slurry/CaCO₃ waste into stone-paper-grade micronized powder (whiteness, particle size, low iron) on site, instead of buying already-purified powder locally ([07_Capital_Plan.md](07_Capital_Plan.md) §9.2.3).
* **Why now:** earlier versions outsourced purification entirely (₹0 capex, higher per-tonne opex). This version brings it in-house from day one, in service of not depending on an outside supplier for the core input.
* **Scale:** sized to Stage 1 throughput only — not the full beneficiation/grinding line still scoped as a Stage 2 item at real 5 TPD scale ([07_Capital_Plan.md](07_Capital_Plan.md) §9.3.1, ₹1–1.5cr). Don't oversize against Stage 2 ambitions.
* **Cost:** ₹10–18L ([07_Capital_Plan.md](07_Capital_Plan.md) §9.2.1) — get 3 quotes; wasn't priced anywhere in this plan before this revision.
* **Space:** ≈200–300 sq ft (§17.1.2).
* **Crew:** absorbed into the extrusion operator's duties at Stage 1 volumes — feeding refined powder into compounding is the same process flow, not a separate shift.
* **Diligence:** same standard as the extrusion line — site visit, reference customer, [12_Vendor_Hiring_Due_Diligence.md](12_Vendor_Hiring_Due_Diligence.md) §12.1.

### 17.2.1 Compounding + twin-screw extrusion + calendering line (the core machine)

* **What it does:** melts and compounds ground CaCO₃ (~80%), HDPE (~18%) and additives (~2%) in a twin-screw extruder at 160–180°C, pushes the melt through a sheet/flat die, sets thickness/finish through a calender/chill-roll stack, winds into rolls or feeds straight to sheeting ([01_Core_Idea_Pitch_Summary.md](01_Core_Idea_Pitch_Summary.md) §2.1).
* **Capacity:** the one firm number found (a single unverified IndiaMART listing) is a 250 kg/hr line at ₹1.2cr for the **bare machine alone** — [03_Unit_Economics.md](03_Unit_Economics.md) §4.6.2 flags that this would breach the Stage 1 ceiling alone. The realistic base case at ₹1.5cr is an **entry/used tier line at ≈80–150 kg/hr**, ₹55–70L all-in ([07_Capital_Plan.md](07_Capital_Plan.md) §9.2.1) — used/refurbished acceptable with a reference customer and inspection. At 80–150 kg/hr, one 8-hour shift, that's roughly 135–360 t/yr — below the 1,400–1,800 t/yr EIRI/listing-scale benchmarks, but the honest starting point for a bootstrapped line backed by real, limited collateral.
* **Space:** ≈450–700 sq ft footprint, 900–1,100 sq ft allocated bay including clearance (§17.1.2).
* **Power:** the dominant electrical load on site — barrel heaters, screw-drive motor, die/calender-roll chiller. **Get the vendor's actual electrical load list (kVA) before signing the lease**, not a generic estimate — determines whether the site's power sanction is adequate ([08_Implementation_Roadmap.md](08_Implementation_Roadmap.md) step 18).
* **Crew:** 1–2 trained operators per shift, PLC-controlled — ITI/diploma-level, not general labour ([06_Core_Team_Experts.md](06_Core_Team_Experts.md) §8.3).
* **Diligence:** every step in [12_Vendor_Hiring_Due_Diligence.md](12_Vendor_Hiring_Due_Diligence.md) §12.1 applies first and hardest — the single largest, highest-risk purchase in the plan.

### 17.2.2 Converting / finishing — what it takes to actually make the founder's priority SKUs

[18_Product_SKU_Catalog.md](18_Product_SKU_Catalog.md) finalized ten SKUs across four finishing-process families — a die-cut carton, a saddle-stitched notebook, a pressure-sensitive label with release liner, a bottom-gusset bag, and laminated wallpaper are genuinely different operations. At ₹1.5cr, Stage 1 buys **the shared core line plus one conditional add-on (paper bags)**, holding back the rest for reasons that range from capital to nothing to do with money at all.

**Core converting line (Stage 1, ₹6–10L)** — one fully-automatic PLC-controlled line: sheeter/guillotine, flatbed or rotary die-cutter with creasing, and a saddle-stitch/binding station ([06_Core_Team_Experts.md](06_Core_Team_Experts.md) §8.3), sized to the extruder's output. Converts:

* **Folding cartons, pharma mono-cartons, corrugated liner blanks** ([18_Product_SKU_Catalog.md](18_Product_SKU_Catalog.md) §18.4) — die-cut/creased here; folding/gluing into the 3D carton is a manual bench operation at Stage 1 volumes. **Also the machine that carries father's carton-industry experience directly onto the floor** — his ~4 years since 2022 ([06_Core_Team_Experts.md](06_Core_Team_Experts.md) §8.0) applies most directly here, not on extrusion.
* **Hang tags and menus/placemats** (§18.5) — straightforward die-cutting/trimming, no lamination.
* **Signage panels** (§18.5) — cut to size on the same guillotine/die-cutter.
* **Corporate gifting notebooks** (§18.2) — the saddle-stitch/binding station. Cover printing stays outsourced locally at Stage 1.

Six of the ten SKUs on one machine — cartons run on the same core line as notebooks, no separate carton machine needed.

**Bottom-gusset bag-making machine — budgeted, but conditional (₹8–15L):** in the Stage 1 budget because the founder wants paper bags near-term, not deferred to Stage 2. Its real gate has never been capital — it's the glue/rope-attach trial in §18.9.4 (HDPE surface energy is too low for reliable adhesion without corona-treatment or specialty adhesive). **Discipline: budget it, order only after the trial clears** on outsourced/job-work bags first — buying before the trial answers whether the process works risks a second unproven machine.

**Two machines stay deferred, for different reasons:**

| Deferred | SKUs it unlocks | Why it's deferred | Illustrative cost* |
| :---- | :---- | :---- | :---- |
| Rotary label die-cutter + slitter | Self-adhesive labels (§18.5) — the catalog's highest-margin SKU | **Not a technical or market gate — purely the smaller ceiling.** Not on the founder's priority list for this revision. Fund it *first* from year-one operating cash flow, ahead of the items below, since no trial or market question stands in the way. | ₹8–20L |
| Adhesive-lamination / release-liner coating line | Peel-and-stick wallpaper (§18.6) | Deferred per the founder's own instruction — gated on an unscoped retail/installer market (§18.6.6), not capital. Unchanged even if the ceiling moves again. | ₹15–40L |

**Bakery box liners and QSR wraps (§18.7) get no dedicated machine in Stage 1** — not because unasked, but because [13_Paper_Industry_Economics_Deep_Dive.md](13_Paper_Industry_Economics_Deep_Dive.md) §13.7 ranks it #6 and deprioritizes it on an unresolved FSSAI food-contact question for the HDPE fraction, a gate independent of this revision. **Run bakery/QSR trial pieces on the core line's existing output** (same die-cutting/trimming as tags and menus, no new tooling) to test material and interest, but hold off on dedicated equipment until FSSAI clearance is in hand.

*Illustrative Indian SME-scale ranges from adjacent converting-equipment categories, **not project-sourced vendor quotes**. Get three firm quotes per machine, confirm against [12_Vendor_Hiring_Due_Diligence.md](12_Vendor_Hiring_Due_Diligence.md) §12.1 same as the extrusion line.

**Space:** ≈350–450 sq ft for the core line, plus ≈80–150 sq ft for the bag machine once ordered post-trial. The label die-cutter and lamination line each need their own further 80–150 sq ft when their turn comes — plan lease headroom (§17.1.2) around that, don't build it all in now.

**Crew:** one trained operator on the core line, Stage 1 day-one (§17.3.1). The bag machine adds one operator once actually running, not before.

**The channel this feeds:** the core line and its eventual add-ons make [03_Unit_Economics.md](03_Unit_Economics.md) §4.7's second revenue channel (finished, branded goods) real, and let the plant be its own first customer for in-house use before external sale. The raw-substrate B2B channel ([09_B2B_Client_Acquisition.md](09_B2B_Client_Acquisition.md)) needs none of this — it sells sheet and roll stock straight off the extrusion line.

### 17.2.3 Utility / support equipment — the gap worth naming

[07_Capital_Plan.md](07_Capital_Plan.md)'s uses-of-funds table doesn't carry a separate line for the chiller/cooling tower, air compressor, DG backup set, and electrical panel/transformer upgrade an extrusion line actually needs. In practice these either ride inside the ₹5–7L "installation & commissioning" line if the vendor quotes genuinely turnkey, or they don't — the gap between "core machine" and "turnkey" pricing is the same scope trap flagged once already (the ₹1.2cr bare-machine vs. ₹17.2cr turnkey gap, [03_Unit_Economics.md](03_Unit_Economics.md) §4.6.2). **Get an explicit, itemized utility/support line in every vendor RFQ** rather than assuming it's bundled — a chiller alone can run ₹2–8L depending on tonnage, and discovering that as a late add-on is how a ₹1.5cr ceiling gets breached without anyone deciding to breach it.

* **Space:** ≈250–350 sq ft, typically semi-open/outdoor.

### 17.2.4 QC/lab instruments — a second gap worth naming

[07_Capital_Plan.md](07_Capital_Plan.md)'s "lab testing" line (₹2L) is external send-out testing fees, not in-house instruments — two different things, and the plan currently budgets only one:

* **In-house, every-batch checks (small spend):** a digital thickness micrometer (₹15,000–30,000), a basic weighing scale, a simple tear-strength jig — ≈₹50,000–1,00,000 total, small enough to absorb inside the existing ₹5–7L routine contingency line. Lets operators catch an off-spec batch before it's converted and packed.
* **External, periodic (already budgeted):** certified tear/waterproof/whiteness testing for sales collateral and the GST/HSN classification question ([13_Paper_Industry_Economics_Deep_Dive.md](13_Paper_Industry_Economics_Deep_Dive.md) §13.6) — the existing ₹2L external-lab line.
* **Space:** ≈150 sq ft.

### 17.2.5 Material handling

Bagged CaCO₃ powder and HDPE resin at Stage 1 volumes don't justify a forklift. A **manual hydraulic pallet truck (₹15,000–40,000)** is adequate — an electric forklift (₹3–6L, plus a dedicated operator) is a Stage 2 purchase once pallet volumes justify it. Small line item, and one less premature headcount decision (§17.3).

### 17.2.6 Machinery summary

| Machine | Capacity (Stage 1) | Cost | Space | Crew |
| :---- | :---- | :---- | :---- | :---- |
| Feedstock refining/micronizing unit — new, in-house | Sized to Stage 1 throughput | ₹10–18L | 200–300 sq ft | Absorbed into extrusion operator's duties |
| Extrusion + compounding + calendering line | 80–150 kg/hr (≈135–360 t/yr, one shift) | ₹55–70L | 900–1,100 sq ft | 1–2 operators/shift |
| Core converting line (sheeter/guillotine, die-cutter/creaser, saddle-stitch/binding) — 6 of 10 SKUs, incl. cartons | Matched to extruder output | ₹6–10L | 350–450 sq ft | 1 operator |
| *Conditional:* bottom-gusset bag-making machine | Order only after §18.9.4 glue/rope trial clears | ₹8–15L | 80–150 sq ft | +1 operator once running |
| *Deferred (capital only, no trial gate):* rotary label die-cutter + slitter | Fund first from year-one operating cash flow | ₹8–20L | 80–150 sq ft | +1 operator once running |
| *Deferred (unscoped market):* adhesive-lamination/coating line | Gated on wallpaper distributor scoping (§18.6.6) | ₹15–40L | 80–150 sq ft | +1 operator once running |
| Bakery box/QSR wraps | Trial-run on core line output only — no dedicated machine until FSSAI clearance | ₹0 in Stage 1 | — | No separate crew for the trial |
| Utility/support equipment (chiller, compressor, DG, panel) | Sized to the line | Get itemized — not a fixed number yet | 250–350 sq ft | Runs alongside extrusion, no separate crew |
| QC/lab instruments (in-house) | — | ₹50,000–1,00,000 | 150 sq ft | Absorbed into operator/QC duties |
| Material handling (manual pallet truck) | — | ₹15,000–40,000 | — | Absorbed into operator duties |

**Only the refining unit, the extrusion line, and the core converting line are unconditional Stage 1 day-one purchases at the ₹1.5cr ceiling.** The bag machine is budgeted but conditional on its trial clearing. The label die-cutter and lamination line stay deferred — the die-cutter purely on capital (fund it first once revenue allows), the lamination line on an unscoped market a bigger ceiling wouldn't have changed anyway. Bakery/QSR gets tested on existing equipment, not bought into, until certification is resolved.

---

## 17.3 Floor team — lean and core, not a headcount

Answers directly: who is physically needed to run the plant day-to-day, at the smallest number that doesn't put quality or safety at risk. Sits alongside, not instead of, [06_Core_Team_Experts.md](06_Core_Team_Experts.md) — that doc covers the wider consultant/expert roster; this is specifically who's on the production floor.

### 17.3.1 The roster

| Role | Headcount | Who fills it | Why this many, not more |
| :---- | :---- | :---- | :---- |
| Plant/operations lead | 1 | Father (P) — formalized per [06_Core_Team_Experts.md](06_Core_Team_Experts.md) §8.0 | Not a floor operator — overall shift authority, vendor/compliance/landlord liaison. One person, not a manager plus a separate admin |
| Process/formulation lead | 1 | The paid process engineer (role #5) through commissioning, transitioning to a promoted senior operator once formulation is stable | The highest-skill floor role — owns extrusion temperature profile, additive ratios, batch-to-batch consistency. Get this wrong and a ₹55–70L machine produces brittle or discoloured sheet ([06_Core_Team_Experts.md](06_Core_Team_Experts.md) role #5) |
| Extrusion line operator(s) | 1–2 | ITI/diploma, PLC-trained | 1 if the process lead covers the full single shift; 2 for a relief/overlap operator from day one. Start at 1, add the second only once utilization data says so (§17.3.2). Also feeds the refining unit (§17.2.0) — no separate hire. |
| Converting line operator | 1 | ITI/diploma, ideally carton-line exposure | One trained operator replaces what a manual setup would take 3–5 people ([06_Core_Team_Experts.md](06_Core_Team_Experts.md) §8.3) — already the lean version, don't add a second. Father's carton background (§8.0) is directly useful training/supervising this role. |
| QC/store technician | 0.5–1 | Combine with the converting operator's slack time at low volume, or a dedicated junior hire once batch frequency needs it | In-process checks (§17.2.4), raw material and finished-goods stock logging — real, but not full-time at Stage 1 throughput |
| Maintenance | 0 dedicated hire | Covered by the machinery vendor's AMC during warranty ([12_Vendor_Hiring_Due_Diligence.md](12_Vendor_Hiring_Due_Diligence.md) §12.1) | Don't hire ahead of need — add one only once AMC coverage lapses or breakdown frequency justifies it |

**Total paid floor headcount: 4–5 people, single shift** (process lead + 1–2 extrusion operators + 1 converting operator + a fractional QC/store role), on top of father's plant-lead role and the two founders who sit above the floor. The label machine operator from the ₹3cr version is gone with the label die-cutter itself — add that hire back only when the machine is funded from operating cash flow (§9.2.4). The bag machine, once ordered post-trial, adds one more operator at that point, not now. Consistent with the "2–4 line technicians/operators" figure across [06_Core_Team_Experts.md](06_Core_Team_Experts.md), [07_Capital_Plan.md](07_Capital_Plan.md) and [08_Implementation_Roadmap.md](08_Implementation_Roadmap.md) — the process-lead and QC roles were implicit there; here they're named so nobody assumes an extrusion line runs itself once an operator is hired.

### 17.3.2 What to deliberately not hire

Matches the automation-first stance in [06_Core_Team_Experts.md](06_Core_Team_Experts.md) §8.3:

* **No dedicated security guard.** Use the industrial estate's shared security or a lease-included watchman service.
* **No packing/manual labour crew.** The automated converting line exists specifically to replace this.
* **No owned delivery vehicle or driver.** Use a local transporter per trip until volume justifies a captive vehicle — a truck and driver are a fixed cost against variable, unproven demand.
* **No full-time HR/admin hire.** Covered by the CA retainer plus the three-person founding team at this scale ([06_Core_Team_Experts.md](06_Core_Team_Experts.md) role #2).
* **No second shift, second process lead, or supervisory layer until utilization data says so.** Add headcount against demonstrated line utilization, not anticipated growth — mirrors the cost-per-tonne/utilisation discipline in [07_Capital_Plan.md](07_Capital_Plan.md) §9.2.4. The trigger for a second operator is a filled order book the first shift can't cover, not a hire made in anticipation.

### 17.3.3 Scaling rule

When the LOI-backed order book ([08_Implementation_Roadmap.md](08_Implementation_Roadmap.md) step 17) genuinely fills more than one shift's output, add **one operator on the constrained line** before any new role type or a full second-shift crew. Scale the roster against real, recorded numbers, the same way the capex ceiling itself scales (§9.2.4) — not projected ones.

---

## Next

* Which SKU each converting machine unlocks, and its own cost/positioning detail → [18_Product_SKU_Catalog.md](18_Product_SKU_Catalog.md)
* The capex ceiling this space/machinery budget fits inside → [07_Capital_Plan.md](07_Capital_Plan.md)
* The wider consultant/expert roster this floor team sits alongside → [06_Core_Team_Experts.md](06_Core_Team_Experts.md)
* Week-by-week sequencing of lease, machinery orders and hires → [08_Implementation_Roadmap.md](08_Implementation_Roadmap.md)
* Vendor site-visit and payment-staging checklist before any machine order → [12_Vendor_Hiring_Due_Diligence.md](12_Vendor_Hiring_Due_Diligence.md)

---
*Sources listed centrally in [10_Sources.md](10_Sources.md). Space and headcount figures are engineering-plausible planning estimates from the process description and capex figures elsewhere in this set, not a vendor-confirmed floor plan or HR staffing study — confirm against your specific vendor's GA drawing and electrical load list before signing a lease.*
