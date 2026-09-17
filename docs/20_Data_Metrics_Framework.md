# Data & Metrics Framework — CAC, Retention, and Revenue-per-Account for a B2B Manufacturer

*Part of the Limepaper business plan — see [00_README_Index.md](00_README_Index.md). Added 11 Sep 2026.*

## 20.0 Why this doc exists, and what it isn't

Limepaper is not a consumer app, and none of its native metrics look like SaaS or D2C metrics. There is no login, no session, no "user." What it has instead is: accounts (converters, brands, institutions) who place purchase orders for substrate or finished goods, at intervals measured in weeks or months, at volumes measured in tonnes or thousands of units. Applying DAU/MAU or MRR language to that reality produces numbers that are either meaningless or actively misleading.

This doc does three things: (1) defines the real equivalents — CAC, retention, revenue-per-account — in manufacturing/B2B terms specific to Limepaper's two channels ([03_Unit_Economics.md](03_Unit_Economics.md) §4.7), (2) is explicit that **none of these numbers exist yet** — this is a tracking plan to run from day one of sales activity, not a set of results, and (3) gives a translation table for the vocabulary a pre-seed investor (including the live-but-undecided Antler India pre-seed track, ~₹2-4cr for 9-11% equity — a possibility, not a commitment, as of this writing) will default to, and flags where that vocabulary simply doesn't map.

The operating instruction this doc formalizes — "track cost-per-tonne, cost-per-SKU, margin per SKU, yield/scrap rate, and line utilisation from day one" — is production-side. This doc is the commercial-side counterpart: cost-per-account, not cost-per-tonne.

## 20.1 Customer Acquisition Cost — where it's actually incurred

Paid digital advertising is the default CAC model for consumer and SaaS businesses and is close to irrelevant here. Limepaper's buyers — packaging-converter procurement managers, FMCG sourcing leads, institutional tender officers — do not convert off a Google or Meta ad. [09_B2B_Client_Acquisition.md](09_B2B_Client_Acquisition.md) §11.2 already names the real channels; this section prices them.

### 20.1.1 CAC components by channel

Five acquisition channels, none of which are paid-ad spend. CAC for each = hard cash cost + (labor-hours spent on that channel × an effective hourly value for the person spending them). The founders are unpaid or minimally paid at Stage 1 ([07_Capital_Plan.md](07_Capital_Plan.md) §9.2.1's ₹10L salary buffer), so "effective hourly value" is a modeling construct, not an actual payroll cost — flagged as such, not free.

| Channel | What it actually costs | Hard costs (illustrative, unconfirmed) | Labor-hour driver | Who incurs it |
| :---- | :---- | :---- | :---- | :---- |
| Trade shows / industry expos (PackPlus, PrintPack India) | Booth fee, travel, printed samples, lab-data sheets | ₹50,000–150,000 per show (booth + travel + collateral) — **not sourced, a planning placeholder pending an actual PackPlus/PrintPack quote** | 2-4 days on-site per founder, plus 1-2 days prep | Whichever founder attends; typically both for the first show |
| IndiaMART / TradeIndia B2B marketplace listings | Subscription/listing tier fee, inbound lead response time | IndiaMART paid seller tiers run roughly ₹20,000–100,000+/year depending on plan — **general market knowledge, not a project-sourced quote; get an actual rate card before budgeting** | Ongoing: photographing/listing SKUs, responding to inbound queries, qualifying tyre-kickers from real buyers | Whoever owns inbound (§20.5) |
| Direct outbound to procurement leads | Effectively zero hard cost (email/phone/LinkedIn) | ~₹0 hard cost | High — cold outbound to packaging/FMCG procurement has a low response rate; expect many hours per qualified conversation | Founders, split by target-sector research (§20.4) |
| Founder time on sample runs + technical qualification calls | Material cost of samples (substrate off the line, or purchased-in before commissioning), courier | Sample cost ≈ substrate production cost per [03_Unit_Economics.md](03_Unit_Economics.md) §4.6.1 (₹24,000-32,000/t) at whatever quantity is couriered, plus courier/packing | Per lead: hours for the technical qualification call (tear-strength/water-resistance/GSM-equivalent conversation, [09_B2B_Client_Acquisition.md](09_B2B_Client_Acquisition.md) §11.2) plus follow-up sampling cycles | Whichever founder or Sanjay has the technical depth for that lead |
| Referrals from the father's carton-industry network | Effectively zero hard cost | ~₹0 hard cost, though real relationship capital was built over Sanjay's ~4 years in the carton industry (2022-present) — a sunk asset, not a marketing spend | Low incremental hours per lead (warm intro vs. cold outbound) but the value of the underlying network isn't free just because it isn't invoiced | Sanjay, primarily |

### 20.1.2 A rough CAC formula, not a number

Per-channel CAC (for a given period) =

`(hard costs incurred in that channel during the period) + (hours spent on that channel × effective hourly value) ÷ (number of accounts that signed an LOI, placed a pilot PO, or converted from that channel in the same period)`

**Effective hourly value** needs a number to be usable at all — pick one, flag it as assumed, and keep it constant across channels so relative CAC comparisons stay meaningful even if the absolute number is wrong. A defensible placeholder: value founder time at what it would cost to hire an equivalent junior sales/technical role locally (a number this plan does not currently have — check against [07_Capital_Plan.md](07_Capital_Plan.md)'s salary-buffer assumptions before picking one) rather than at zero. Valuing founder time at zero makes every channel look free and defeats the point of tracking CAC at all.

**Honest state as of this doc:** Limepaper has closed zero LOIs and zero POs as of 11 Sep 2026. Every figure above is a cost-structure placeholder for a tracking plan, not backfilled actuals. The first real CAC numbers exist only after the first 2-3 signed LOIs referenced in [09_B2B_Client_Acquisition.md](09_B2B_Client_Acquisition.md) §11.3 — and even then, n=2-3 is not a statistically meaningful CAC, just the first real data point.

### 20.1.3 CAC likely differs sharply by channel (1 vs 2)

Channel 1 (raw substrate to converters, [03_Unit_Economics.md](03_Unit_Economics.md) §4.7) probably has a *lower* CAC per account than Channel 2 (finished branded goods) because: fewer, larger accounts; technical/lab-data-led sales (a known playbook, [09_B2B_Client_Acquisition.md](09_B2B_Client_Acquisition.md) §11.2) rather than brand-building; and Sanjay's existing carton-industry network is a Channel-1-shaped asset (he sold to converters and packaging buyers, not retail). Channel 2 needs brand-building, retail/D2C sales motion, and possibly paid channels that genuinely don't exist yet in this plan (no marketing budget line for Channel 2 currently exists in [07_Capital_Plan.md](07_Capital_Plan.md)) — this is a real gap worth flagging, not resolving here.

## 20.2 Retention, translated into B2B manufacturing terms

There is no subscription, no login, no usage session — "retention" has to mean something else entirely. The honest translation:

| Metric | Definition | Why it's the right proxy |
| :---- | :---- | :---- |
| Repeat-order rate | % of accounts with ≥2 POs, of all accounts with ≥1 PO, measured over a trailing window (e.g. trailing 12 months) | The closest direct analogue to retention rate |
| Average reorder cycle length | Median weeks/months between consecutive POs from the same account | Needed before "churn" can be defined at all — without a baseline cycle, a gap in ordering is unmeasurable |
| Account lifetime | Months from first PO to most recent PO, per account | Analogue to customer lifetime in a subscription business, but denominated in orders, not days-active |
| Churn | An account that has not reordered within 2x its own normal cycle (i.e., an account with a historical 6-week reorder cycle that goes silent past 12 weeks) | Deliberately account-specific, not a single fixed window — a pharma-mono-carton buyer and a signage buyer plausibly have very different natural cadences |

**Why this matters more for Channel 1 than Channel 2.** In Channel 1, a converter who re-orders substrate *is the entire business model* — Limepaper sells a commodity-adjacent input with thin per-unit margin ([03_Unit_Economics.md](03_Unit_Economics.md) §4.7), so the economics only work at volume across repeat purchases; a converter who samples once and never reorders is closer to a sunk acquisition cost than a customer. In Channel 2, a first-time notebook or carry-bag buyer already captures a full converting margin on that one sale ([18_Product_SKU_Catalog.md](18_Product_SKU_Catalog.md) §18.0.2's pricing rule), so a single non-repeating purchase is still a profitable transaction on its own — repeat purchase is upside, not the entire model. Track both, but weight Channel 1 account churn as the more load-bearing metric for whether the wholesale-substrate plan is actually working.

**A caveat worth stating plainly:** with zero closed accounts as of this doc, none of the above has a baseline yet. The reorder-cycle-length figure specifically needs at least 2 real POs from at least one account before it's computable — until then, "expected reorder cycle" is a guess to be validated, not tracked.

## 20.3 Revenue per account, per SKU, per channel

"Revenue per user" has no clean equivalent in a business with ~single-digit-to-low-double-digit B2B accounts in year one and ten finished-goods SKUs. Three separate breakdowns replace it, deliberately not collapsed into one number:

### 20.3.1 Revenue per B2B account, by tier

| Tier | Definition | What "revenue per account" looks like |
| :---- | :---- | :---- |
| Pilot | First order from a new account, typically sample-scale or a small trial PO, pre-LOI or immediately post-LOI | Low, often near breakeven once CAC (§20.1) is netted against the order — the point of a pilot is qualification, not margin |
| Anchor | An account with a signed LOI or a repeat-order history that gates Stage 1 capex per [07_Capital_Plan.md](07_Capital_Plan.md) §9.2.4 and [09_B2B_Client_Acquisition.md](09_B2B_Client_Acquisition.md) §11.3 | Meaningfully larger, recurring order volume — this is the tier the 3-5 signed-LOI gate is built around |
| Scaled | An account with sustained repeat-order history across multiple cycles, the kind Stage 2's ₹15cr raise is gated on (12+ months operating history, 3-5 anchor accounts with repeat orders, [00_README_Index.md](00_README_Index.md) revision history, [07_Capital_Plan.md](07_Capital_Plan.md) §9.3) | Highest revenue per account, and the number an investor will actually want to see trending up account-by-account, not just in aggregate |

No Limepaper account currently sits in any tier above zero — this is the ladder to track accounts against as they're won, not a current-state table.

### 20.3.2 Revenue per SKU

Ties directly to [18_Product_SKU_Catalog.md](18_Product_SKU_Catalog.md) §18.11's cost roll-up. That table ranks SKUs by cost-and-positioning verdict, not yet by actual revenue (no SKU has sold a unit as of this doc) — the tracking discipline is to log **units sold × realized price** per SKU against §18.11's priority ranking once sales start, to check whether real revenue mix matches the *predicted* priority order (notebooks #1, pharma cartons #2, labels/tags #3, carry bags as the expansion-horizon candidate per §18.9.5). A mismatch between predicted priority and actual revenue mix is itself a useful signal — either the priority ranking was wrong, or go-to-market execution isn't following the plan.

### 20.3.3 Blended revenue per channel

Channel 1 (substrate) and Channel 2 (finished goods) should be tracked as two separate revenue lines, never blended into one "average revenue per account" figure — their unit economics are structurally different (thin-margin/high-volume vs. converting-margin/lower-volume, [03_Unit_Economics.md](03_Unit_Economics.md) §4.7), so a blended average would obscure which channel is actually carrying the business at any point in time. Stage 1 is explicitly Channel-1-primary and LOI-gated ([07_Capital_Plan.md](07_Capital_Plan.md) §9.2.4); Channel 2 revenue should be tracked as a secondary, capex-gated line per [17_Factory_Operations_Plan.md](17_Factory_Operations_Plan.md) §17.2.2's phased converting-equipment buildout, not expected to carry the business early.

## 20.4 What customer group generates that revenue

Segmenting "who pays, and how much" separately for each channel, since they have different buyer types entirely.

**Channel 1 — B2B accounts by sector**, in the priority order [09_B2B_Client_Acquisition.md](09_B2B_Client_Acquisition.md) §11.1 already sets:

1. Packaging converters/printers serving FMCG/pharma — likely highest volume, lowest CAC (existing relationships via Sanjay's network are converter-shaped), thin per-unit margin.
2. E-commerce mailer/label buyers — high volume, standardized specs, but Channel-1 mailers specifically face the structural poly-mailer price floor flagged in [18_Product_SKU_Catalog.md](18_Product_SKU_Catalog.md) §18.8 — likely lower realized margin per tonne than pharma/FMCG.
3. Corporate gifting/premium print houses — smaller volume, but plausibly the best near-term margin per account given lower price sensitivity.
4. Industrial labels & tags converters — [18_Product_SKU_Catalog.md](18_Product_SKU_Catalog.md) §18.5 flags this as the best margin-per-tonne SKU category in the whole catalog; likely the highest revenue-per-tonne account type even if not the highest-volume one.
5. Institutional/government — large potential volume, price-sensitive, long qualification cycles; likely lowest revenue-per-account in year one regardless of eventual scale.

**Working hypothesis, not yet tested:** industrial labels/tags and pharma-carton converters are the highest-*value* accounts (best margin per unit of Limepaper's effort); e-commerce mailer and institutional accounts are the highest-potential-*volume* but lowest-margin accounts. This mirrors [13_Paper_Industry_Economics_Deep_Dive.md](13_Paper_Industry_Economics_Deep_Dive.md) §13.7's sector ranking and should be checked against real account-level revenue once it exists, not assumed to hold.

**Channel 2 — finished-goods SKU tiers**, using [18_Product_SKU_Catalog.md](18_Product_SKU_Catalog.md) figures directly: premium carry bags (§18.9.2, substrate ₹2.34-₹6.55/unit, priced at a real premium over the laminated incumbent per §18.0.2's capped markup) carry the best per-unit margin of any Channel-2 SKU currently costed, but sit in the "expansion horizon" tier gated on unrun glue/foil trials (§18.9.4) — not sellable yet. Basic notebooks are [18_Product_SKU_Catalog.md](18_Product_SKU_Catalog.md) §18.11's #1 priority to lead with (fastest revenue, no certification barrier) but sell on brand/ESG positioning rather than cost margin (§18.2) — likely higher volume, lower per-unit margin than carry bags once carry bags clear their trials. Pharma mono-cartons and labels/tags (§18.4, §18.5) sit in between: real structural cost advantage plus a genuine property-based sale.

## 20.5 Translation table — tech-investor vocabulary vs. Limepaper's actual metric

| Investor asks for... | Limepaper's actual equivalent | Translates? |
| :---- | :---- | :---- |
| DAU/MAU (daily/monthly active users) | No equivalent — there is no usage event to log | **Does not translate.** Don't force a number here; state plainly that this concept doesn't apply to a B2B manufacturing business with no product usage session. |
| CAC (customer acquisition cost) | Per-channel CAC per §20.1 — hard costs + labor-hours × effective hourly value, per account acquired | **Translates directly**, with a warning that Limepaper's CAC is manual, relationship- and lab-data-driven, not ad-spend-driven — comparing it to a consumer-app CAC benchmark is comparing different things even though the label is the same. |
| LTV:CAC ratio | Account lifetime revenue (§20.2's account-lifetime concept × §20.3.1's revenue-per-account-by-tier) ÷ CAC per account | **Translates conceptually**, but is currently uncomputable — needs both a real CAC and a real multi-order account history, neither of which exists yet (§20.1.2, §20.2). Flag as "framework defined, no data" rather than fabricating a ratio. |
| MRR (monthly recurring revenue) | No true recurring-revenue concept — POs are discrete, not subscriptions. The nearest proxy is trailing-12-month revenue from repeat-order accounts (§20.2's repeat-order rate applied to §20.3.3's channel revenue), but it is not "recurring" in the contractual sense MRR implies. | **Weak translation, use with a caveat.** Present as "repeat-account revenue," not MRR — an investor who reads it as contracted recurring revenue will be misled. |
| Churn % | Defined explicitly in §20.2 as an account not reordering within 2x its own normal cycle | **Translates**, but is account-specific (no fixed churn window applies uniformly across SKUs/sectors) and currently has zero data to compute it from. |
| ARPU (average revenue per user) | Revenue per account, broken out by tier (§20.3.1) — deliberately not collapsed into one blended average given the pilot/anchor/scaled spread and the Channel 1/2 split | **Translates with a structural caveat** — a single blended "ARPA" figure would hide more than it shows given how differently the two channels and three tiers behave; present the breakdown, not one number, even if asked for one. |
| Retention rate / cohort retention | Repeat-order rate (§20.2), tracked by cohort of first-PO month | **Translates**, same data-availability caveat as churn. |

## 20.6 Day-one data-tracking plan

Three-person team, no dedicated data or sales-ops hire, no budget or need for CRM software beyond a lightweight tool. The plan:

**Tool:** A single shared spreadsheet (Google Sheets — free, real-time multi-editor, no new vendor relationship or cost line) as the source of truth at Stage 1. Move to a lightweight CRM (e.g. a free/low-tier tool with pipeline-stage tracking) only once account count exceeds what a spreadsheet can track cleanly — likely somewhere past 15-20 active accounts, a threshold to revisit rather than a hard rule. No custom software; nothing here justifies it at this team size.

**What to log**, as a minimum viable set of columns/sheets:

| Sheet/table | Fields to log | Feeds which metric |
| :---- | :---- | :---- |
| Leads/pipeline | Account name, sector (§20.4's five Channel-1 categories or Channel-2 buyer type), channel (1 or 2), source (which of §20.1.1's five channels), first-contact date, current stage (cold outbound → sample sent → technical qualification call → LOI/pilot PO → active account) | CAC per channel (§20.1), pipeline conversion |
| Acquisition cost log | Date, channel, hard cost incurred (₹), hours spent, by whom | CAC numerator (§20.1.2) |
| Orders | Account name, PO date, channel, SKU(s), quantity, unit price realized, total revenue, invoice/payment status | Revenue per account/SKU/channel (§20.3), repeat-order rate and cycle length (§20.2) |
| Account master | Account name, tier (pilot/anchor/scaled, §20.3.1), first-PO date, most-recent-PO date, historical reorder cycle (auto- or manually-derived from the Orders sheet), churn flag | Retention/churn (§20.2) |

**Who owns it:** given the team size, ownership should sit with whichever founder is primarily running sales/B2B outreach day to day (per [09_B2B_Client_Acquisition.md](09_B2B_Client_Acquisition.md), this is the plan's Week-6-onward continuous activity) — update it as a habit tied to every sales action (a call, a sample sent, a PO received), not a weekly batch job, since a 3-person team has no one to catch entries that slip. Sanjay's referral-sourced leads (§20.1.1) should be logged by whoever takes the call, not assumed to be tracked informally — referral CAC is the easiest channel to under-count precisely because it feels free.

**Cadence:** review the pipeline and account-master sheets monthly at minimum once any accounts exist, to catch churn signals (§20.2) before they're 2x-cycle stale, and to keep CAC-by-channel current enough to redirect founder time toward whichever channel is actually converting.

## Next

* The two-channel economics this framework tracks against → [03_Unit_Economics.md](03_Unit_Economics.md) §4.7
* The acquisition tactics this doc prices → [09_B2B_Client_Acquisition.md](09_B2B_Client_Acquisition.md)
* Per-SKU cost and margin data behind §20.3.2/§20.4 → [18_Product_SKU_Catalog.md](18_Product_SKU_Catalog.md) §18.11
* Capital gates these metrics feed (LOI gate, Stage 2 raise gate) → [07_Capital_Plan.md](07_Capital_Plan.md) §9.2.4, §9.3

---
*Sources listed centrally in [10_Sources.md](10_Sources.md).*
