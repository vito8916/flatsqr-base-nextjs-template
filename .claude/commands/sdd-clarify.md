# SDD: Clarify

Identify and resolve ambiguities in the current feature spec through structured, sequential questioning. Run this **before** `/sdd-plan` to reduce downstream rework.

## User Input

$ARGUMENTS

## What This Does

Scans the active spec for underspecified areas, asks up to 5 targeted questions one at a time, and writes each accepted answer directly back into the spec. The goal: a spec that can be planned and implemented without guesswork.

## Execution Steps

### 1. Find the Active Feature

Scan `.sdd/specs/` for the directory with the highest `NNN` prefix containing a `spec.md`.
Use `$ARGUMENTS` to override if it contains a feature slug or number.
If no spec exists, halt and tell the user to run `/sdd-specify` first.

### 2. Load Context

Read:
- `.sdd/specs/[NNN-feature-slug]/spec.md` — full content
- `.sdd/memory/constitution.md` — if it exists, constitution requirements inform question priority

### 3. Scan for Ambiguities

Review the spec across these categories. Mark each: **Clear**, **Partial**, or **Missing**:

| Category | What to Check |
|----------|---------------|
| Functional Scope | Core goals defined? Out-of-scope explicit? |
| User Roles | Different actor types differentiated? |
| Data & Entities | Entities, key attributes, state transitions present? |
| User Flows | Critical journeys, error states, empty states described? |
| Performance | Latency/throughput targets quantified? |
| Security & Privacy | Auth requirements and data protection addressed? |
| Integrations | External dependencies and failure modes documented? |
| Edge Cases | Boundary conditions and conflict resolution defined? |
| Success Criteria | All criteria measurable and unambiguous? |
| Placeholders | Any TODO, ???, or `[NEEDS CLARIFICATION]` remaining? |

### 4. Build Question Queue

From Partial/Missing categories, select up to **5** questions. Prioritize:
1. Scope and boundaries
2. Security and compliance
3. User experience and flows
4. Data model implications
5. Non-functional requirements

Skip any question whose answer wouldn't materially change the plan or implementation.
If fewer than 5 meaningful questions exist, ask only those.
If none exist, report the spec is well-specified and suggest proceeding.

### 5. Ask One Question at a Time

Present **exactly one question** per turn. Never reveal the queue.

**For multiple-choice questions**, lead with your recommendation:

> **Recommended: Option B** — [1–2 sentence rationale]

| Option | Description |
|--------|-------------|
| A | … |
| B | … |
| C | … |

> Reply with a letter, say "yes" to accept the recommendation, or give your own answer (≤5 words).

**For open-ended questions**, lead with your suggestion:

> **Suggested**: [proposed answer] — [brief rationale]
>
> Reply to accept, or give your own answer (≤5 words).

If the user replies "yes", "recommended", or "suggested" — use your stated recommendation as the answer.

### 6. Update the Spec After Each Answer

After each accepted answer, immediately update `spec.md`:

1. Ensure a `## Clarifications` section exists (add after Overview if missing)
2. Add a `### Session YYYY-MM-DD` subheading if not present for today
3. Append: `- Q: [question] → A: [answer]`
4. Apply the clarification to the relevant section:
   - Scope answer → update Overview or Assumptions
   - User role answer → update User Stories
   - Data answer → update Key Entities
   - Non-functional answer → update Success Criteria with measurable value
   - Edge case answer → update Edge Cases
5. Remove/resolve the `[NEEDS CLARIFICATION]` marker the answer addresses
6. **Save immediately** — don't batch updates

Rules: Replace contradictory statements (don't duplicate). Keep insertions minimal and testable. Preserve all section order and headings.

### 7. Continue Until Done

Stop when:
- All 5 questions asked and answered
- User signals completion ("done", "skip", "proceed")
- Remaining questions became unnecessary from prior answers

### 8. Final Report

- Questions asked and answered
- Sections updated
- Coverage summary table (Resolved / Clear / Deferred per category)
- Any high-impact ambiguities still Deferred (with explanation)
- Next step: `/sdd-plan` if ready, or `/sdd-clarify` again if major gaps remain

## Rules

- Never ask more than 5 questions total
- Never reveal the question queue
- Clarification retries for one question don't count against the limit
- Spec missing → halt, tell user to run `/sdd-specify`
