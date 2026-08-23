# Factory & Operations Plan — Space, Machinery, Lean Floor Team

*Part of the Limepaper business plan — see [00_README_Index.md](00_README_Index.md) for the full document set. Added 24 August 2026. This doc doesn't re-derive the capital numbers already fixed in [07_Capital_Plan.md](07_Capital_Plan.md) or the role list in [06_Core_Team_Experts.md](06_Core_Team_Experts.md) — it goes one layer deeper on the three things those docs leave implicit: how much physical space the plant actually needs and where, what each machine does/costs/needs, and exactly who has to be on the floor day-to-day (and, just as important, who doesn't).*

**Scope check up front:** every number here is sized to **Stage 1** — the bootstrapped, ≤₹1.5 crore extrusion + converting line ([07_Capital_Plan.md](07_Capital_Plan.md) §9.1) — not the Stage 2 5 TPD plant. Where a Stage 1 choice differs from what you'd do at Stage 2 scale, that's called out.

---

## 17.1 Factory space — layout, sizing, and where to put it

### 17.1.1 Site selection

* **Location: Kishangarh or Rajsamand, inside a RIICO (Rajasthan State Industrial Development & Investment Corporation) industrial area, not an ad hoc rented shed elsewhere.** A RIICO estate gets you pre-cleared industrial land use (no separate land-conversion fight), an existing power backbone sized for manufacturing, and proximity to both feedstock (marble slurry/CaCO₃ millers) and the highway network HDPE resin arrives on from Reliance/GAIL-linked distributors.
* **Distance priorities, in order:** (1) to your locked-in micronized-CaCO₃ supplier — this is your bulkiest, most frequent inbound material and freight on it should be near-zero per [03_Unit_Economics.md](03_Unit_Economics.md) §4.1; (2) to a state/national highway for HDPE resin inbound and finished-goods outbound; (3) to Kishangarh/Ajmer/Rajsamand town for a labour catchment — the operators you're hiring (§17.3) need a realistic commute.
* **Non-negotiable before signing the lease:** confirm the plot's sanctioned power load can actually carry the extrusion line's draw (see §17.2.1) — this is already flagged as a gate in [08_Implementation_Roadmap.md](08_Implementation_Roadmap.md) step 18, restated here because it's the single most common reason an industrial lease looks fine on paper and isn't.
* **Lease, don't build.** [07_Capital_Plan.md](07_Capital_Plan.md) §9.2.1 already sets this: a leased-and-fitted shed protects capital that a constructed one would lock up. Nothing below changes that call — it just says what "fitted" needs to include.

### 17.1.2 Space budget, by zone

These are engineering-plausible estimates for a Stage 1 line (roughly 80–150 kg/hr extrusion capacity — the realistic base case per [03_Unit_Economics.md](03_Unit_Economics.md) §4.6.2, not the single ₹1.2cr/250kg-hr listing that would itself breach the capex ceiling). Confirm actual footprint against your specific vendor's general arrangement (GA) drawing before finalizing the lease — this is a planning budget, not a floor plan.

| Zone | Covered area | Notes |
| :---- | :---- | :---- |
| Extrusion + compounding + calendering bay | 1,000–1,200 sq ft | Machine footprint itself ≈500–800 sq ft (line length ≈40–60 ft); the rest is mandatory service clearance for die-head access, screw pull-out, and calender-roll maintenance — don't compress this to save rent, it's where breakdowns get fixed |
| Converting/finishing bay | 350–450 sq ft | One PLC-controlled line, one operator station |
| Raw material store (CaCO₃ powder + HDPE resin) | 300–500 sq ft | Bagged/jumbo-bag storage, ~2–4 weeks' buffer stock at Stage 1 throughput; must stay dry — CaCO₃ powder cakes if it picks up moisture |
| Finished goods store | 250–400 sq ft | Sheet rolls/converted product staged for dispatch |
| QC/lab corner | 150 sq ft | See §17.2.4 — small footprint, real function |
| Office/admin | 150–200 sq ft | Shared by the three-person founding team, per [06_Core_Team_Experts.md](06_Core_Team_Experts.md) §8.0 |
| Utility yard (transformer, DG backup, compressor, chiller/cooling tower) | 250–350 sq ft | Often semi-open rather than fully enclosed |
| Circulation, aisles, loading dock | +20% of the above | Fire-exit access and truck turning space aren't optional once you're applying for a factory/trade licence and PCB consent |
| **Covered total** | **≈ 3,000–4,000 sq ft** | |
| Open yard (truck loading/unloading, raw material offload staging) | 1,000–1,500 sq ft | Feedstock and resin both arrive by truck; you need somewhere for that truck to stand and be unloaded that isn't the production aisle |

**Recommended plot size: 5,000–7,000 sq ft total (built + open).** That's a deliberate margin over the ~4,000–5,500 sq ft minimum above — a plant sized to the exact minimum has nowhere to put a second shift's worth of buffer stock or a future converting-line upgrade without relocating, and relocating a commissioned extrusion line is expensive and slow. This is about right-sizing the *lease*, not pre-building for Stage 2 — you're renting headroom, not constructing it.

**Ceiling height:** 12–15 ft clear in the extrusion bay — die-head, calender stack and any overhead hoist for maintenance need vertical clearance most standard 10 ft sheds don't have. Confirm this specifically; it's an easy thing to overlook on a walkthrough and expensive to discover after signing.

### 17.1.3 What "fit out" actually covers, against the existing capex lines

[07_Capital_Plan.md](07_Capital_Plan.md) §9.2.1 already budgets ₹8–10 lakh for shed/building and ₹4–5 lakh for utilities connection. This is what those two lines need to include, concretely:

* **Flooring:** reinforced/load-bearing RCC at the extrusion machine's foundation points (a vibrating twin-screw extruder on a standard industrial floor slab will crack it over time) — confirm your vendor's foundation spec before the civil work is finalized, not after.
* **Electrical:** panel and wiring upgraded to the extrusion line's actual load (§17.2.1), not the shed's stock wiring.
* **Water:** a single point for drinking and occasional wash-down — the process itself uses ~0 water ([03_Unit_Economics.md](03_Unit_Economics.md) §4.4), so this is minor, and there's no effluent treatment plant to budget for ([16_Process_Environmental_Profile.md](16_Process_Environmental_Profile.md) §16.3).
* **Fire safety:** extinguishers, marked exits, clear aisle widths — required for the factory licence and PCB Consent to Operate ([06_Core_Team_Experts.md](06_Core_Team_Experts.md) role #3), not just good practice.
* **Basic partitioning:** office, QC corner and store separated from the production floor — dust and product don't mix well, and it's cheap to build in from the start.

---

## 17.2 Machinery — function, capacity, space, cost

### 17.2.1 Compounding + twin-screw extrusion + calendering line (the core machine)

* **What it does:** melts and compounds ground CaCO₃ powder (~80%), HDPE resin (~18%) and additives (~2%) in a twin-screw extruder barrel at 160–180°C, pushes the melt through a sheet/flat die, then sets thickness and finish through a calender/chill-roll stack, winding the output into rolls or feeding it straight to sheeting ([01_Core_Idea_Pitch_Summary.md](01_Core_Idea_Pitch_Summary.md) §2.1).
* **Capacity:** the one firm number found in this research (a single unverified IndiaMART listing) is a 250 kg/hr line at ₹1.2 crore for the **bare machine alone** — [03_Unit_Economics.md](03_Unit_Economics.md) §4.6.2 already flags that this price would breach the entire Stage 1 ceiling on its own once building, converting equipment and everything else is added. The realistic Stage 1 base case is a **smaller-capacity (80–150 kg/hr) or used/refurbished line**, budgeted at ₹70–95 lakh all-in ([07_Capital_Plan.md](07_Capital_Plan.md) §9.2.1). At 80–150 kg/hr running one 8-hour shift, that's roughly 150–300 t/yr — well below the 1,400–1,800 t/yr benchmarks other docs cite for EIRI/listing-scale plants, which is the honest starting point for a bootstrapped line, not a shortfall to apologize for.
* **Space:** ≈500–800 sq ft machine footprint, 1,000–1,200 sq ft allocated bay including clearance (§17.1.2).
* **Power:** the dominant electrical load on site — barrel heaters, screw-drive motor, and the chiller that cools the die/calender rolls. **Get the vendor's actual electrical load list (kVA) before signing the lease**, not a generic "extrusion lines need X" estimate — this varies by machine and directly determines whether your site's power sanction is adequate ([08_Implementation_Roadmap.md](08_Implementation_Roadmap.md) step 18).
* **Crew:** 1–2 trained operators per shift, PLC-controlled — ITI/diploma-level, not general labour ([06_Core_Team_Experts.md](06_Core_Team_Experts.md) §8.3).
* **Diligence:** every step in [12_Vendor_Hiring_Due_Diligence.md](12_Vendor_Hiring_Due_Diligence.md) §12.1 applies here first and hardest — this is the single largest, highest-risk purchase in the whole plan.

### 17.2.2 Converting / finishing line

* **What it does:** takes the extruded sheet and cuts, stitches, folds and trims it into finished notebooks, cartons or sheets — one fully-automatic PLC-controlled line rather than a multi-station manual setup ([06_Core_Team_Experts.md](06_Core_Team_Experts.md) §8.3).
* **Capacity:** size it to your extruder's actual output, not independently — a converting line quoted before the extrusion line is finalized risks a capacity mismatch either way.
* **Cost:** ₹6–12 lakh ([07_Capital_Plan.md](07_Capital_Plan.md) §9.2.1).
* **Space:** ≈350–450 sq ft bay.
* **Crew:** one trained operator. Cover printing stays outsourced to a local printer at Stage 1 ([07_Capital_Plan.md](07_Capital_Plan.md) §9.2.1) — bringing that in-house is a Stage 2 decision, not a Stage 1 one.

### 17.2.3 Utility / support equipment — the gap worth naming

[07_Capital_Plan.md](07_Capital_Plan.md)'s illustrative uses-of-funds table doesn't carry a separate line for the chiller/cooling tower, air compressor, DG backup set, and electrical panel/transformer upgrade that an extrusion line actually needs to run. In practice these either ride inside the ₹4–6 lakh "installation & commissioning" line if your vendor quotes a genuinely turnkey package, or they don't — and the gap between "core machine" and "turnkey" pricing is exactly the scope trap already flagged once in this plan (the ₹1.2cr bare-machine vs. ₹17.2cr turnkey gap, [03_Unit_Economics.md](03_Unit_Economics.md) §4.6.2). **Get an explicit, itemized line for utility/support equipment in every vendor RFQ** rather than assuming it's bundled — a chiller alone can run ₹2–8 lakh depending on tonnage, and discovering that as a late add-on is how a ₹1.5cr ceiling gets breached without anyone deciding to breach it.

* **Space:** ≈250–350 sq ft, typically semi-open/outdoor.

### 17.2.4 QC/lab instruments — a second gap worth naming

[07_Capital_Plan.md](07_Capital_Plan.md)'s "lab testing" line (₹1.5–2.5 lakh) is external send-out testing fees — not in-house instruments. Those are two different things and the plan currently only budgets one of them:

* **In-house, every-batch checks (recommended, small spend):** a digital thickness micrometer (₹15,000–30,000), a basic weighing scale, and a simple tear-strength jig — call it ₹50,000–1,00,000 total, small enough to absorb inside the existing ₹8–10 lakh contingency line rather than needing a new budget item. This is what your line operators use to catch an off-spec batch before it's converted and packed, not after.
* **External, periodic (already budgeted):** certified tear/waterproof/whiteness testing for sales collateral and, materially, for the GST/HSN classification question ([13_Paper_Industry_Economics_Deep_Dive.md](13_Paper_Industry_Economics_Deep_Dive.md) §13.6) — this stays the ₹1.5–2.5 lakh external-lab line already in the capital plan.
* **Space:** ≈150 sq ft.

### 17.2.5 Material handling

Bagged CaCO₃ powder and HDPE resin at Stage 1 volumes don't justify a forklift. A **manual hydraulic pallet truck (₹15,000–40,000)** is adequate — an electric forklift (₹3–6 lakh, plus a dedicated operator) is a Stage 2 purchase once pallet volumes actually justify it. This is a small line item on its own, but it's also one less headcount decision (§17.3) to make prematurely.

### 17.2.6 Machinery summary

| Machine | Capacity (Stage 1) | Cost | Space | Crew |
| :---- | :---- | :---- | :---- | :---- |
| Extrusion + compounding + calendering line | 80–150 kg/hr (≈150–300 t/yr, one shift) | ₹70–95 lakh | 1,000–1,200 sq ft | 1–2 operators/shift |
| Converting/finishing line | Matched to extruder output | ₹6–12 lakh | 350–450 sq ft | 1 operator |
| Utility/support equipment (chiller, compressor, DG, panel) | Sized to the line | Get itemized — not a fixed number yet | 250–350 sq ft | Runs alongside extrusion, no separate crew |
| QC/lab instruments (in-house) | — | ₹50,000–1,00,000 | 150 sq ft | Absorbed into operator/QC duties |
| Material handling (manual pallet truck) | — | ₹15,000–40,000 | — | Absorbed into operator duties |

---

## 17.3 Floor team — lean and core, not a headcount

This section answers directly: who is physically needed to run the plant day-to-day, at the smallest number that doesn't put quality or safety at risk. It sits alongside, not instead of, [06_Core_Team_Experts.md](06_Core_Team_Experts.md) — that doc covers the wider roster of consultants and experts to engage across the whole business; this is specifically who's on the production floor.

### 17.3.1 The roster

| Role | Headcount | Who fills it | Why this many, not more |
| :---- | :---- | :---- | :---- |
| Plant/operations lead | 1 | Father (P) — already formalized per [06_Core_Team_Experts.md](06_Core_Team_Experts.md) §8.0 | Not a floor operator — overall shift authority, vendor/compliance/landlord liaison. One person, not a plant manager plus a separate admin |
| Process/formulation lead | 1 | The paid process engineer (role #5) through commissioning, transitioning to a promoted senior operator once the formulation is stable and repeatable | The highest-skill floor role — owns extrusion temperature profile, additive ratios, batch-to-batch consistency. Get this wrong and you own a ₹1 crore machine producing brittle or discoloured sheet ([06_Core_Team_Experts.md](06_Core_Team_Experts.md) role #5) |
| Extrusion line operator(s) | 1–2 | ITI/diploma, PLC-trained | 1 if the process lead covers the full single shift themselves; 2 if you want a relief/overlap operator from day one. Start at 1 and add the second only once utilization data says so (§17.3.2) |
| Converting line operator | 1 | ITI/diploma | One trained operator replaces what a manual setup would take 3–5 people to do ([06_Core_Team_Experts.md](06_Core_Team_Experts.md) §8.3) — this is already the lean version, don't add a second |
| QC/store technician | 0.5–1 | Combine with the converting operator's slack time at low volume, or a dedicated junior hire once batch frequency needs it | In-process checks (§17.2.4), raw material and finished-goods stock logging — real work, but not full-time at Stage 1 throughput |
| Maintenance | 0 dedicated hire | Covered by the machinery vendor's AMC during the warranty period ([12_Vendor_Hiring_Due_Diligence.md](12_Vendor_Hiring_Due_Diligence.md) §12.1) | Don't hire a maintenance technician ahead of need — add one only once AMC coverage lapses or breakdown frequency actually justifies it |

**Total paid floor headcount: 4–5 people, single shift** (process lead + 1–2 extrusion operators + 1 converting operator + a fractional QC/store role) — on top of the father's plant-lead role and the two founders, who sit above the floor, not on it. This is consistent with, and makes explicit, the "2–4 line technicians/operators" figure already set across [06_Core_Team_Experts.md](06_Core_Team_Experts.md), [07_Capital_Plan.md](07_Capital_Plan.md) and [08_Implementation_Roadmap.md](08_Implementation_Roadmap.md) — the process-lead and QC roles were implicit there; here they're named so nobody assumes an extrusion line runs itself once an operator is hired.

### 17.3.2 What to deliberately not hire

This is the direct answer to "I don't want a large group of unwanted people and waste of money" — matching the automation-first stance already set in [06_Core_Team_Experts.md](06_Core_Team_Experts.md) §8.3:

* **No dedicated security guard.** Use the industrial estate's shared security or a lease-included watchman service rather than a standalone hire.
* **No packing/manual labour crew.** The automated converting line exists specifically to replace this — buying the automatic PLC line and then also hiring a manual packing crew defeats the point of the purchase.
* **No owned delivery vehicle or driver.** Use a local transporter per trip for both inbound feedstock/resin and outbound finished goods until volume genuinely justifies a captive vehicle — a truck and driver are a fixed cost against variable, still-unproven demand.
* **No full-time HR/admin hire.** Covered by the CA retainer plus the three-person founding team at this scale ([06_Core_Team_Experts.md](06_Core_Team_Experts.md) role #2).
* **No second shift, second process lead, or supervisory layer until utilization data says so.** Add headcount against demonstrated line utilization, not anticipated growth — this mirrors the cost-per-tonne/utilisation tracking discipline already set in [07_Capital_Plan.md](07_Capital_Plan.md) §9.2.4. The trigger for a second operator on any line is a filled order book that first shift can't cover, not a hire made in anticipation of one.

### 17.3.3 Scaling rule

When the LOI-backed order book ([08_Implementation_Roadmap.md](08_Implementation_Roadmap.md) step 17) genuinely fills more than one shift's output, add **one operator on the constrained line** before adding any new role type or a second shift's full crew. Scale the roster the same way you're required to scale the capex ceiling itself (§9.2.4) — against real, recorded numbers, not projected ones.

---

## Next

* The capex ceiling this space/machinery budget has to fit inside → [07_Capital_Plan.md](07_Capital_Plan.md)
* The wider roster of consultants/experts (DPR, compliance, legal) this floor team sits alongside → [06_Core_Team_Experts.md](06_Core_Team_Experts.md)
* Week-by-week sequencing of when the lease, machinery orders and hires actually happen → [08_Implementation_Roadmap.md](08_Implementation_Roadmap.md)
* Vendor site-visit and payment-staging checklist before any machine order → [12_Vendor_Hiring_Due_Diligence.md](12_Vendor_Hiring_Due_Diligence.md)

---
*Sources listed centrally in [10_Sources.md](10_Sources.md). Space and headcount figures in this doc are engineering-plausible planning estimates built from the process description and capex figures already in this document set, not a vendor-confirmed floor plan or an HR consultant's staffing study — confirm against your specific machinery vendor's GA drawing and electrical load list before signing a lease.*
