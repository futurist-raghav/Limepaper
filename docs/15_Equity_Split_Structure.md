# Equity Split Structure — Dual-Class (Economic vs. Approval)

*Part of the Limepaper business plan — see [00_README_Index.md](00_README_Index.md) for the full document set. Prepared 23 August 2026.*

**This is a founders' working draft, not a legal instrument.** Nothing here is effective until a Chartered Accountant structures the entity and a lawyer drafts it into the Articles of Association / Shareholders' Agreement (see role #2 and #4 in [06_Core_Team_Experts.md](06_Core_Team_Experts.md)). Numbers below are exactly what you specified — the commentary flags where the mechanism needs a decision before a lawyer can implement it.

## 15.0 The two pools, as specified

| Holder             | Economic / Public Shares (funding, exits, dividends) | Approval / Decision Shares (governance votes) |
| :----------------- | :--------------------------------------------------- | :-------------------------------------------- |
| Father (Sanjay)    | 70%                                                  | 33.4%                                         |
| Raghav (you)       | 15%                                                  | 33.3%                                         |
| Navya (co-founder) | 15%                                                  | 33.3%                                         |

**Read of intent:** Father put in most of the capital/credit backing (per [06_Core_Team_Experts.md](06_Core_Team_Experts.md) §8.0 — likely loan guarantor too) and should own most of the economic upside. But day-to-day and strategic decisions should be a near-equal three-way call, not dominated by whoever holds the most shares — with Father's extra 0.1% acting as a tie-breaker between you and Navya, not a controlling stake. That's a legitimate, common structure for a family-backed startup. It is **not**, mechanically, how Facebook actually did it — worth being precise about that before you take this to a lawyer.

## 15.1 How Facebook's structure actually works (and why yours is different)

Facebook's dual class isn't two separate pools. It's **one economic pool, two vote-weights**:

- Class A common (public) — 1 vote/share, economic rights proportional to shares held.
- Class B common (Zuckerberg + early insiders) — 10 votes/share, same proportional economic rights.

Voting power and economic ownership are still linked — Class B just counts 10x as much per share. That's how Zuckerberg keeps board control while owning a economic minority: he holds a smaller *number* of shares but they're worth 10x the votes.

What you've described is structurally different: **two fully independent allocation tables** — one governs money, the other governs decisions, with no per-share conversion rate between them. That's closer to a **non-economic "golden share" / voting trust** arrangement than to Facebook's actual cap table. Worth knowing so you brief your lawyer with the right mental model — say "separate economic and control pools," not "Facebook shares," or you'll get a DVR (differential voting rights) share class quote that doesn't match what you actually want.

## 15.2 Two ways to implement this in India — pick one before the lawyer drafts anything

**Option A — Statutory DVR (differential voting rights) share class.**
Issue two share classes: ordinary equity (80/10/10, one vote each) and a DVR class carrying outsized votes but negligible economic value, sized to land on 33.4/33.3/33.3 voting.

- Real mechanism for what you're describing, but **Companies (Share Capital and Debentures) Rules, 2014** impose real conditions: a track record of distributable profits in preceding financial years, no default on statutory dues/loan repayments, and a cap on how much of total voting power can sit in DVR shares. **A pre-revenue startup at incorporation will almost certainly not qualify** for a DVR class on day one — this route becomes available later, once you have a filed track record, not now.

**Option B — Shareholders' Agreement (SHA) with Reserved Matters + equal board representation. (Recommended for now)**
Keep one share class (80/10/10, ordinary one-vote-per-share economic equity). Layer a contractual SHA on top that:

- Defines a list of **Reserved Matters** (raising capital, taking on debt/guarantees, hiring/firing founders, changing the business, related-party contracts, IP transfers, amending the SHA itself, etc.) that require **unanimous consent of all three**, or a defined supermajority — not a simple 80%-wins vote.
- Gives each of the three **one board seat** (or equivalent voting bloc) regardless of shareholding, so ordinary-course board votes run 1-1-1 rather than by share count.
- This is standard, cheap to draft relative to Option A, doesn't hit the DVR eligibility wall, and produces the same practical effect you're after — no one of the three can be outvoted by capital alone on the things that matter.

**The catch either way:** until this is written into binding documents, Father's 80% ordinary equity *is* control — under default company law, majority shareholders can remove directors, block/force decisions, and amend agreements on ordinary-course matters. The Approval-share intent only holds if it's drafted into the AoA/SHA before the entity's formal cap table is filed, not left as an informal understanding. Don't operate on the 33/33/33 assumption until a lawyer confirms it's actually binding.

## 15.3 Open questions to settle before drafting

1. **Vesting.** Standard practice for founder equity (protects the company if someone leaves early) is 4-year vesting with a 1-year cliff on the Economic pool. Not mentioned in your split — decide whether Father's stake vests too, or only yours and Navya's (given his more advisory/operations role vs. full-time founder role).
2. **Dilution on fundraising.** The Stage 2 raise is now explicit — **₹15 crore for 10%** ([07_Capital_Plan.md](07_Capital_Plan.md) §9.3) — so this is no longer hypothetical: that round takes 10% out of the Economic pool, diluting the 80/10/10 split proportionally unless an option pool is carved out first. Model the post-round cap table *before* you sign a term sheet, not after. Does the Approval pool dilute too, or does it stay fixed among the three of you regardless of how much outside capital comes in? (This is the one piece that's actually Facebook-like — Zuckerberg's control didn't dilute with public shareholders. If that's the intent, say so explicitly in the SHA — it won't happen by default.)
3. **Deadlock beyond 1-1 votes.** 33.4/33.3/33.3 solves a two-way tie between you and Navya (Father's extra 0.1% breaks it). It does *not* solve Father being outvoted 2-1 by the two of you, or any other 2-1 split — decide if that's acceptable or if certain matters need unanimity instead of majority.
4. **What "Approval shares" actually govern.** List the specific decision categories (hiring, spend above ₹X, supplier contracts, pivots, equity/debt raises) rather than leaving "decisions" undefined — an SHA needs an explicit Reserved Matters list, not a general principle.
5. **Exit/buyout terms.** If one of the three leaves, dies, or wants out, does their Economic stake get bought back (by whom, at what valuation) and does their Approval share get redistributed or retired? Undefined right now.

## Next

- Take this doc + the answers to §15.3 to the Chartered Accountant and legal counsel roles in [06_Core_Team_Experts.md](06_Core_Team_Experts.md) §8.1 (roles #2, #4) — this is exactly the "formalise your father's role" work flagged there.
- Do this **before** the ₹15 crore Stage 2 round ([07_Capital_Plan.md](07_Capital_Plan.md) §9.3), not after — retrofitting a control structure once outside money is on the cap table is much harder than setting it up at incorporation.

---

*Sources listed centrally in [10_Sources.md](10_Sources.md).*
