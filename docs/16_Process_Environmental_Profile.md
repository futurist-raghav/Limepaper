# Process Environmental Profile — Outputs, Byproducts, Biodegradability

*Part of the Limepaper business plan — see [00_README_Index.md](00_README_Index.md). Added 23 August 2026.*

Mass balance for the core process (compounding + extrusion): **~80% ground CaCO₃ (limestone/marble waste) + ~18% HDPE + ~2% additives**, compounded on a twin-screw extruder at 160–180°C, sheeted/calendered to 0.1–0.4mm.

## 16.1 Output

Finished stone-paper film/sheet — the sellable product (packaging film, notebook/stationery substrate).

## 16.2 Byproducts

All stay in-process; none is a separately sold waste stream.

| Byproduct                              | Source                                                                                            | Fate                                                                                                   |
| -------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Edge trim, sheet scrap, off-spec runs  | Sheeting/calendering/cutting                                                                      | Regrind → re-fed into extruder — standard for filled-HDPE compounds, unlike wood-pulp scrap |
| Fine CaCO₃ dust                       | Grinding/micronizing (outsourced Stage 1; in-house Stage 2, [07_Capital_Plan.md](07_Capital_Plan.md) §9.3.1) | Captured by baghouse/cyclone; some saleable as filler-grade powder |
| Degraded/black-streaked resin fraction | Repeated regrind, overheating                                                              | Not reusable — solid waste, low volume |

## 16.3 Excessive / unwanted substances to plan for

* **Respirable CaCO₃ dust** at grinding — not silica-level toxic, but a real occupational-exposure and SPCB CTE/CTO item. Same theme as [05_Risks_Diligence.md](05_Risks_Diligence.md)'s feedstock-purity flag and the RPCB CTE/CTO entries in [11_Learning_Resources.md](11_Learning_Resources.md).
* **Extrusion fume/VOC** — HDPE compounding at 160–180°C is generally low-VOC vs. PVC, but additives (coupling agents, UV stabilizers, TiO₂ whitening) can off-gas; needs local exhaust/ventilation, not a major abatement system.
* **No wastewater stream** — the process's genuine environmental strength: zero water, zero bleaching chemicals, so no effluent-treatment burden, unlike a pulp mill.

## 16.4 Biodegradability — the honesty check your pitch needs

| Component        | Biodegradable?                                                                                                                                                                                              |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CaCO₃ (~80%)    | Effectively inert/benign, returns to the environment as mineral residue                                                                                                                                     |
| HDPE (~18%)      | **Not biodegradable.** Only *photodegrades* under UV — over ~14–18 months breaks into a CaCO₃ shell **plus HDPE microplastic fragments**, which then persist for years |
| Finished product | **Not biodegradable, not compostable, not accepted by standard paper- or plastic-recycling streams** — the mixed mineral/polymer composite fouls both |

[01_Core_Idea_Pitch_Summary.md](01_Core_Idea_Pitch_Summary.md) already flags "plastic-free" as indefensible while "tree-free/water-free" is fine — the microplastic-shedding detail above is the sharper version of that same risk, and the strongest attack line a competitor, journalist, or ESG auditor would use. It also bears on the open GST/HSN question in [13_Paper_Industry_Economics_Deep_Dive.md](13_Paper_Industry_Economics_Deep_Dive.md) §13.6 (paper vs. plastic-sheet vs. stone article) — a regulator classifying this as HSN 3921 "plastic sheet" would do so partly *because* of this composition, not despite it.

## 16.5 Input/output sustainability, vs. wood-pulp paper

| Metric              | Stone paper                                                                                                           | Wood-pulp paper                                                   |
| -------------------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Water use           | ~0                                                                                                                    | High (pulping, bleaching, washing)                                |
| Bleaching chemicals | 0                                                                                                                     | Chlorine/chlorine-dioxide typical                                 |
| Energy              | Roughly a quarter of conventional papermaking (extrusion vs. pulping + thermal drying)                                | High — thermal drying is the dominant load                       |
| Feedstock           | Marble/limestone slurry — a Rajasthan disposal liability, so sourcing it is a net-positive diversion, not extraction | Virgin/recycled wood fibre                                        |
| End-of-life         | Not biodegradable; photodegrades to CaCO₃ + microplastic; not accepted in standard recycling streams                 | Biodegradable, compostable, recyclable in existing infrastructure |

**Net read:** the input side (water, bleach, energy, feedstock-as-waste-diversion) is a genuine, defensible win — the core of [01_Core_Idea_Pitch_Summary.md](01_Core_Idea_Pitch_Summary.md)'s pitch, and should stay the headline. The output side is weaker than the marketing implies: it trades a biodegradable-but-water/energy-intensive input for a non-biodegradable, microplastic-shedding output. State that trade-off plainly to ESG-sensitive buyers (the ITC/HUL-type accounts in [13_Paper_Industry_Economics_Deep_Dive.md](13_Paper_Industry_Economics_Deep_Dive.md) §13.7) rather than letting them discover it later — a buyer chasing "100% biodegradable by 2028" commitments may treat the HDPE end-of-life issue as disqualifying, not a caveat.

## 16.6 Can we fix the biodegradability gap? — binder alternatives evaluated

Given §16.4: could HDPE be swapped for something that actually solves the microplastic/end-of-life problem instead of just disclosing it?

**16.6.1 PBS and PBAT are not the same material.** A live IndiaMART search for "PBS (polybutylene succinate)" (checked 23 Aug 2026, Jaipur-centered) returns almost entirely **PBAT** (polybutylene adipate-terephthalate) — a different, cheaper biodegradable polyester IndiaMART's category page doesn't distinguish from true PBS. Only two listings found were actually PBS. An earlier draft priced PBS off global spot data alone; superseded by the real India quotes below.

**16.6.2 Real India supplier data (IndiaMART, checked 23 Aug 2026, Jaipur search):**

| Supplier | Material / grade | Price | Notes |
| --- | --- | --- | --- |
| Yuvika Green Earth Solutions (Jaipur) | PBAT, **Film Grade**, IS 17088 cert, corn-based | ₹130/kg | Local to Rajasthan ops, correct process grade, India's own compostability standard (not just EU cert), 4.2★/49 reviews |
| Prakash Chemicals Agencies (Vadodara) | PBAT, Extrusion grade, DIN CERTCO + OK Compost + TÜV Austria | ₹128/kg | Deepest certification stack, strongest reviews (4.4★/118), out-of-state |
| Lakhdatar Polytech (Jaipur) | PBAT, Blow Moulding grade, OK Compost, sugarcane-based | ₹128/kg | Local, but wrong grade for film extrusion |
| Shiv Corporation (Vadodara) | PBAT "filler," Blow Moulding grade, EN 13432 | ₹85/kg | Cheapest — "filler" naming suggests a masterbatch/blend, not neat resin; verify composition |
| Srushti Global (Sangli) | **True PBS**, Injection grade, TÜV Austria | ₹620/kg | The material actually asked for — but ~5–6x HDPE's price, wrong grade (injection, not film) |
| Deltora Biopolymers / PTT-MCC (Ahmedabad) | True Bio-PBS, "ask price" | n/a | Legitimate global PBS brand (Thai/Mitsubishi Chemical JV), but no listed price signals thin liquidity |

**16.6.3 Full comparison — HDPE vs. PBAT vs. true PBS**

| Aspect | HDPE (current plan) | PBAT (Yuvika/Prakash pricing) | True PBS (Srushti/PTT-MCC) |
| --- | --- | --- | --- |
| India landed cost | ₹100–115/kg (film grade) | ₹128–130/kg film/extrusion grade — **~12–15% premium** | ₹620/kg injection grade — **~5–6x HDPE**, no India film-grade quote found |
| Biodegradable? | No — only UV-photodegrades to microplastic (§16.4) | Yes — EN 13432/IS 17088/OK Compost certified industrial-compostable | Yes — same certification family, generally marginally more readily biodegradable than PBAT |
| Real-world caveat | N/A (doesn't degrade) | Certificates assume **industrial composting** (~58°C, controlled microbes, ~180 days) — degrades far slower in ordinary Indian landfill/litter conditions; "compostable" ≠ "degrades anywhere" | Same caveat |
| Stiffness vs. HDPE | Tensile modulus 800–1200 MPa — gives the current sheet its crisp, paper-like feel | Lower modulus, closer to LDPE — flexible/film-like, softer than current stone paper. Usually blended with PLA to regain stiffness | 300–600 MPa — closer to HDPE, better stiffness match |
| Water/waterproof performance | Excellent — core stone-paper selling point | Good but generally weaker moisture barrier than HDPE; needs verification at this CaCO₃ loading | Good, closer to HDPE |
| Process fit (existing twin-screw/blown-film line) | Designed-for | Compatible, same equipment; filler-loading and screw-temp profile need re-tuning via trial batch | Compatible in principle, but no India film-grade supplier surfaced — reprocessing risk |
| Domestic supply depth | Commodity, deep stock | Real domestic supply (multiple Gujarat/Rajasthan sellers, several certs) — production-viable | Thin — import-adjacent, small sellers, "ask price" listings signal low liquidity |
| Regulatory/GST angle | The open HSN question ([13_Paper_Industry_Economics_Deep_Dive.md](13_Paper_Industry_Economics_Deep_Dive.md) §13.6) | IS 17088 certification could plausibly support a "compostable" classification distinct from plain "plastic sheet" — worth a specific GST advance-ruling question | Same potential angle, but cost makes it moot unless a buyer specifically pays a premium for "PBS" |
| Net verdict | Cheapest, proven, carries the microplastic/non-biodegradable liability from §16.4 | **The realistic near-term fix** — small cost delta, real domestic supply, matches the process, genuinely improves the sustainability story | Not economically viable at current India pricing for this plan's capital ceiling — revisit only if a buyer specifically pays a premium for "true PBS" |

Bottom line: PBAT, not PBS, is the substitution worth piloting — a ~12–15% cost delta is a real but survivable hit to the raw-material line ([03_Unit_Economics.md](03_Unit_Economics.md) §4.6.1 flags it as the largest cost), unlike the 30–130%+ delta an earlier global-spot estimate implied for PBS. True PBS stays priced out of reach domestically. Next step: request a formal quote plus a small compounding trial from Yuvika Green Earth Solutions (PBAT film grade, local to Rajasthan) before touching doc 03's cost model — a Stage 1 diligence item, same tier as the feedstock-purity lab test in [05_Risks_Diligence.md](05_Risks_Diligence.md).

## Next

* Marketing-claim and regulatory risk from this profile → [05_Risks_Diligence.md](05_Risks_Diligence.md)
* GST/HSN classification implications → [13_Paper_Industry_Economics_Deep_Dive.md](13_Paper_Industry_Economics_Deep_Dive.md) §13.6
* If the PBAT trial goes well, redo the cost comparison in [03_Unit_Economics.md](03_Unit_Economics.md) §4.6 with PBAT instead of/alongside HDPE

---

*Sources listed centrally in [10_Sources.md](10_Sources.md).*
