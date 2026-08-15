# Learning Resources — Printing, Papermaking, Extrusion & Converting

*Part of the Limepaper business plan — see [00_README_Index.md](00_README_Index.md) for the full document set. This is a self-study syllabus, not a business plan section — its job is to make you literate enough in each domain that no vendor, consultant, or hire can bluff you. Pair with [12_Vendor_Hiring_Due_Diligence.md](12_Vendor_Hiring_Due_Diligence.md) for how to apply this literacy when money changes hands.*

## How to use this doc

Study in the order below — each module builds vocabulary the next one assumes. You don't need to become an engineer in any of these; you need enough depth that when a vendor says "our extruder runs a 32:1 L/D ratio screw" or a printer says "this needs UV-flexo, not offset," you know whether that's a normal statement or a red flag. Realistically: Module A and C matter most before Stage 1 equipment purchases ([07_Capital_Plan.md](07_Capital_Plan.md) §9.2); Module C, E and F matter most before Stage 2 ([07_Capital_Plan.md](07_Capital_Plan.md) §9.3).

## Module A — Printing Fundamentals (study before Stage 1 equipment purchase)

**Why this matters immediately:** stone paper is not chemically or physically the same as wood-pulp paper, and it does not print the same way — get this wrong and your first batch of notebooks or packaging comes out with ink that smudges, doesn't cure, or won't adhere.

* **The core fact to learn first:** stone paper is a non-porous, coated plastic-mineral composite, not an absorbent fibre sheet. Standard offset printing relies on ink absorbing into a porous, smooth paper surface — stone paper's texture and non-absorbency work against it. Flexographic (flexo) printing using **UV-curable ink** (cured by UV light exposure rather than absorption/evaporation) is the better-suited process for this substrate. Confirm this directly with your printer/ink supplier before committing to any print run — this is exactly the kind of claim in §11.1 of a spec conversation you should be able to evaluate, not just accept.
* **Structured course (recommended, India-specific, real qualification):** the **Indian Institute of Packaging (IIP)** — an autonomous body under the Ministry of Commerce & Industry — runs a **3-month full-time Certificate Course in Packaging Technology** (minimum qualification 10+2) with a curriculum that explicitly covers lithography, gravure, and silkscreen printing techniques alongside packaging materials and testing. Centres in Mumbai (flagship), Delhi, Chennai, Hyderabad, Kolkata, Ahmedabad. This is the single most efficient way for one of the three of you to go from zero to genuinely literate on printing/packaging in one quarter — worth strongly considering for whichever of you leads B2B/product. (iip-in.com)
* **Concepts to learn by name, not just recognise:** offset vs. flexo vs. gravure vs. screen vs. digital printing — what each is good for, typical cost-per-unit at your volumes, and which substrates each handles well; UV-curable vs. solvent-based vs. water-based ink; GSM (grams per square metre) and its stone-paper-equivalent thickness measure; bleed, die-cut, registration, colour separation (CMYK).
* **Free supplementary reading:** manufacturer/industry comparison articles on flexo vs. offset (e.g. Luminite's and FocusLabel's comparison guides) are a fast, free way to get the vocabulary before your first vendor conversation.

## Module B — Papermaking & Stone-Paper Material Science

* **Start here for stone paper specifically:** the Wikipedia "Stone paper" article is a genuinely solid, well-cited overview of composition, manufacturing and properties — use it as your map before going deeper.
* **A real technical briefing document, not marketing copy:** Two Sides' "Stone Paper (mineral paper)" briefing document (twosides.info) — written to fact-check stone-paper marketing claims, useful precisely because it's somewhat skeptical/independent rather than a manufacturer's pitch.
* **An academic conference paper on the category:** "Stone Paper, an Eco-Friendly and Free-Tree Paper" (AIP Conference Proceedings, pubs.aip.org) — short, technical, gives you the composition/process description in the register you'll want when talking to a process engineer.
* **Patents worth skimming** (you don't need to understand every claim — read the background/summary sections for how the industry itself describes the process): CN102673061A ("Double-layer food-grade stone paper and manufacturing method thereof"), US5364610 (precipitated calcium carbonate production), US6540878 (stabilized filler production) — Google Patents.
* **Conventional papermaking, for comparison/vocabulary:** TAPPI (Technical Association of the Pulp and Paper Industry) publishes widely-used terminology and process references for conventional wood-pulp papermaking — useful even though it's a different process, because it's the standard your B2B customers and any hired paper-industry veteran will already speak.

## Module C — Polymer Extrusion & Compounding (study seriously before Stage 2)

This is the highest-value module for protecting yourself in Stage 2 ([07_Capital_Plan.md](07_Capital_Plan.md) §9.3) — extrusion-line vendor claims are where a technically illiterate buyer is most exposed.

* **Free, structured, real course:** NPTEL/Swayam "**Processing of Polymers and Polymer Composites**" (IIT Roorkee, Dr. Inderdeep Singh) — 8 weeks, covers extrusion, injection moulding, thermoforming, compression/transfer moulding, and the underlying materials science of thermoplastics. All content free; a paid proctored exam gets you a certificate if you want one. This is a genuine engineering-school course, not a vendor-produced explainer — start here.
* **Reference books** (buy the one that matches your patience level — all three are well-regarded):
  * *Plastics Extrusion Technology Handbook* — Sidney Levy. Practical, technology-first rather than theory-first — probably the best fit for a founder rather than an engineer.
  * *Extrusion: The Definitive Processing Guide and Handbook* — Giles, Wagner, Mount. Written explicitly for operators/engineers/managers answering practical questions; includes a troubleshooting section and compounding/blown-film/coextrusion case studies — directly relevant since your Stage 2 line is a compounding + sheet extrusion process.
  * *The Complete Technology Book on Plastic Extrusion, Moulding and Mould Design* — NIIR Board of Consultants. India-specific, practically oriented, useful for understanding the small/mid-scale Indian machinery market you'll actually be buying into.
* **Concepts to be able to discuss confidently before you sign anything:** screw L/D ratio and compression ratio, single- vs. twin-screw compounding, die design (flat-die vs. blown-film for sheet), temperature-zone profiles, calendering/cooling-roll setup, throughput (kg/h) vs. line speed vs. sheet width trade-offs, and how these determine the real capacity behind whatever number a vendor quotes you.

## Module D — Converting Machinery & Automation

Directly relevant to your Stage 1 automated notebook/converting line ([07_Capital_Plan.md](07_Capital_Plan.md) §9.2.1) and the automation-first hiring philosophy ([06_Core_Team_Experts.md](06_Core_Team_Experts.md) §8.3).

* **What to learn:** PLC (Programmable Logic Controller) basics — what a PLC actually controls, how to read a basic ladder-logic or HMI (human-machine interface) screen, what "servo-driven" vs. "pneumatic" actually means for precision and maintenance cost. You don't need to program a PLC; you need to not be baffled when a vendor uses the term to justify a price.
* **How to study it cheaply:** most PLC/industrial-automation basics courses on Coursera/Udemy (search "PLC basics for beginners") are inexpensive and short (a few hours) — sufficient depth for a buyer, not an operator. Treat this as a weekend, not a semester.
* **Direct, free, and specific:** before buying, watch full demo videos from your actual shortlisted vendors (search their company name + "notebook making machine" or "extrusion line" on YouTube) — most Indian and Chinese machinery exporters post real running-line footage. Compare what you see running against what a vendor tells you verbally; a machine that only exists in photos, never in a running video, is itself a signal (see [12_Vendor_Hiring_Due_Diligence.md](12_Vendor_Hiring_Due_Diligence.md)).

## Module E — Mineral Processing / Beneficiation

Relevant once you're sourcing your own CaCO3 feedstock in Stage 2 ([03_Unit_Economics.md](03_Unit_Economics.md) §4.2.1).

* **Concepts to learn:** micronization (grinding to a target particle size, measured in mesh or microns), whiteness index (how it's measured and why it matters for print quality), iron content and its effect on discolouration, and the difference between wet and dry grinding processes.
* **Practical study method:** this is a case where a site visit to an actual local Kishangarh/Rajsamand micronizing unit, with your mineral-processing QC consultant ([06_Core_Team_Experts.md](06_Core_Team_Experts.md) role #6), will teach you more in an afternoon than any course — prioritise that visit alongside any reading.

## Module F — Compliance & Standards

* **BIS (Bureau of Indian Standards):** search bis.gov.in for any relevant Indian Standards on paper/packaging materials your B2B buyers may require compliance with.
* **Pollution Control Board process:** your state (Rajasthan) Pollution Control Board's website documents the Consent to Establish / Consent to Operate process directly — read the actual application process once you're approaching Stage 2, rather than relying only on your compliance consultant's summary.
* **Udyam/GST/MSME registration:** the official Udyam registration portal (udyamregistration.gov.in) and GST portal (gst.gov.in) are worth navigating yourself once, even though your CA files the actual paperwork — so you know what your own entity's filings say.

## Module G — Business & Financial Literacy

* **Reading a DPR (Detailed Project Report):** learn the standard sections (promoter background, market analysis, technical feasibility, cost of project, means of finance, profitability projections, break-even analysis) so that when a consultant hands you one, you can independently sanity-check the assumptions rather than trusting the summary.
* **Loan mechanics to understand cold, not just recognise:** the difference between a term loan and a working-capital loan, what a CGTMSE guarantee actually covers (it guarantees the *bank*, not you — you still owe the money), what "collateral-free" really means in practice, and how a co-applicant/guarantor's liability works (relevant given your father's role — [06_Core_Team_Experts.md](06_Core_Team_Experts.md) §8.0).

## Suggested pacing against the implementation roadmap

| When (per [08_Implementation_Roadmap.md](08_Implementation_Roadmap.md)) | Study priority |
| :---- | :---- |
| Phase A–B (Weeks 1–12) | Module A (printing) and Module G (business/financial) — you need these before your first equipment and vendor conversations |
| Phase C–D (Weeks 8–20) | Module D (converting/automation) and Module F (compliance) — directly ahead of Stage 1 equipment purchase and licensing |
| Stage 2 planning (once Stage 1 has a track record) | Module C (extrusion) and Module E (mineral processing) in real depth — this is where the highest-stakes, highest-fraud-risk capital gets spent |

## Next

* How to apply this literacy so no one can take advantage of it → [12_Vendor_Hiring_Due_Diligence.md](12_Vendor_Hiring_Due_Diligence.md)
* Where these concepts show up in the actual plan → [03_Unit_Economics.md](03_Unit_Economics.md), [07_Capital_Plan.md](07_Capital_Plan.md)

---
*Sources listed centrally in [10_Sources.md](10_Sources.md).*
