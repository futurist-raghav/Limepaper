# Equity Split Structure — Dual-Class (Economic vs. Approval)

*Part of the Limepaper business plan — see [00_README_Index.md](00_README_Index.md). Prepared 23 August 2026.*

**This is a founders' working draft, not a legal instrument.** Nothing here is effective until a CA structures the entity and a lawyer drafts it into the AoA/Shareholders' Agreement ([06_Core_Team_Experts.md](06_Core_Team_Experts.md) roles #2, #4). Numbers below are exactly as specified — commentary flags where the mechanism needs a decision before a lawyer can implement it.

## 15.0 The two pools, as specified

| Holder             | Economic / Public Shares (funding, exits, dividends) | Approval / Decision Shares (governance votes) |
| :----------------- | :--------------------------------------------------- | :-------------------------------------------- |
| Father (Sanjay)    | 70%                                                  | 33.4%                                         |
| Raghav (you)       | 15%                                                  | 33.3%                                         |
| Navya (co-founder) | 15%                                                  | 33.3%                                         |

**Read of intent:** Father put in most of the capital/credit backing ([06_Core_Team_Experts.md](06_Core_Team_Experts.md) §8.0 — likely loan guarantor too) and should own most of the economic upside, but decisions should be a near-equal three-way call, not dominated by shareholding — Father's extra 0.1% is a tie-breaker between you and Navya, not a controlling stake. A legitimate, common family-startup structure. It is **not**, mechanically, how Facebook did it — worth being precise before you take this to a lawyer.

## 15.1 How Facebook's structure actually works (and why yours is different)

Facebook's dual class isn't two separate pools — it's **one economic pool, two vote-weights**: Class A common (public), 1 vote/share; Class B (Zuckerberg + early insiders), 10 votes/share, same proportional economic rights. Voting power and economic ownership stay linked — Class B just counts 10x per share, which is how Zuckerberg keeps board control while owning a minority economically.

What you've described is structurally different: **two fully independent allocation tables**, no per-share conversion between money and votes. Closer to a non-economic "golden share"/voting trust arrangement than Facebook's actual cap table. Brief your lawyer as "separate economic and control pools," not "Facebook shares," or you'll get a DVR share-class quote that doesn't match what you want.

## 15.2 Two ways to implement this in India — pick one before the lawyer drafts anything

**Option A — Statutory DVR (differential voting rights) share class.** Issue two classes: ordinary equity (80/10/10, one vote each) and a DVR class with outsized votes but negligible economic value, sized to land on 33.4/33.3/33.3 voting. The real mechanism for this, but **Companies (Share Capital and Debentures) Rules, 2014** require a track record of distributable profits, no default on statutory dues/loan repayments, and a cap on total voting power in DVR shares. **A pre-revenue startup at incorporation almost certainly won't qualify** — this route opens later, once you have a filed track record.

**Option B — Shareholders' Agreement (SHA) with Reserved Matters + equal board representation. (Recommended for now)** Keep one share class (80/10/10 ordinary, one-vote-per-share). Layer a contractual SHA on top that defines **Reserved Matters** (raising capital, debt/guarantees, hiring/firing founders, changing the business, related-party contracts, IP transfers, amending the SHA, etc.) requiring unanimous consent or a defined supermajority — not a simple share-count vote — and gives each of the three **one board seat** regardless of shareholding, so ordinary-course votes run 1-1-1. Standard, cheap relative to Option A, avoids the DVR eligibility wall, produces the same practical effect: no one can be outvoted by capital alone on what matters.

**The catch either way:** until this is written into binding documents, Father's 80% ordinary equity *is* control — under default company law, majority shareholders can remove directors, block/force decisions, and amend agreements on ordinary-course matters. The Approval-share intent only holds if drafted into the AoA/SHA before the cap table is filed, not left as an informal understanding. Don't operate on the 33/33/33 assumption until a lawyer confirms it's binding.

## 15.3 Open questions to settle before drafting

1. **Vesting.** Standard practice is 4-year vesting with a 1-year cliff on the Economic pool. Not mentioned here — decide whether Father's stake vests too, or only yours and Navya's (given his more advisory/operations role vs. full-time founder role).
2. **Dilution on fundraising.** The Stage 2 raise — **₹15 crore for 10%** ([07_Capital_Plan.md](07_Capital_Plan.md) §9.3) — is now explicit, so this is no longer hypothetical: that round takes 10% out of the Economic pool, diluting 80/10/10 proportionally unless an option pool is carved out first. Model the post-round cap table *before* signing a term sheet. Does the Approval pool dilute too, or stay fixed among the three regardless of outside capital? (This is the one Facebook-like piece — Zuckerberg's control didn't dilute with public shareholders. If that's the intent, say so explicitly in the SHA; it won't happen by default.)
3. **Deadlock beyond 1-1 votes.** 33.4/33.3/33.3 solves a two-way tie between you and Navya. It does *not* solve Father being outvoted 2-1 by the two of you — decide if that's acceptable or if certain matters need unanimity instead of majority.
4. **What "Approval shares" actually govern.** List specific decision categories (hiring, spend above ₹X, supplier contracts, pivots, equity/debt raises) rather than leaving "decisions" undefined — an SHA needs an explicit Reserved Matters list, not a general principle.
5. **Exit/buyout terms.** If one of the three leaves, dies, or wants out — does their Economic stake get bought back (by whom, at what valuation), and does their Approval share redistribute or retire? Undefined right now.

## Next

- Take this doc + §15.3's answers to the CA and legal counsel ([06_Core_Team_Experts.md](06_Core_Team_Experts.md) §8.1, roles #2, #4) — this is the "formalise your father's role" work flagged there.
- Do this **before** the ₹15 crore Stage 2 round ([07_Capital_Plan.md](07_Capital_Plan.md) §9.3), not after — retrofitting a control structure once outside money is on the cap table is much harder than setting it up at incorporation.

---

*Sources listed centrally in [10_Sources.md](10_Sources.md).*
