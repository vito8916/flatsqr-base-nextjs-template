# SDD: Checklist

Generate a custom requirements quality checklist for the active feature. Think of it as **unit tests for your spec** — validating whether requirements are well-written, not whether the implementation works.

## User Input

$ARGUMENTS

## What This Does

Creates or appends to a checklist file under `.sdd/specs/[NNN-feature-slug]/checklists/`. Each item validates the *quality of requirements* — completeness, clarity, consistency, measurability. The `/sdd-implement` command checks these before starting.

**The key distinction:**
- ❌ "Verify the login button works" — tests implementation
- ✅ "Are error state requirements defined for failed login attempts?" — tests requirements quality

## Execution Steps

### 1. Read the Template

Before writing anything, read `.sdd/templates/checklist-template.md`.
This is the exact structure every checklist file must follow.
Tokens are in `{{DOUBLE_BRACE}}` format — replace every one of them.
Never add sections not in the template. Never remove sections from the template.

### 2. Find the Active Feature

Scan `.sdd/specs/` for the directory with the highest `NNN` prefix.
Use `$ARGUMENTS` to override.
If no spec exists, halt and tell the user to run `/sdd-specify` first.

### 3. Understand the Request

Parse `$ARGUMENTS` for:
- Checklist domain/type: "security", "ux", "api", "accessibility", "performance", "general"
- Explicit must-have items the user mentioned
- Explicit exclusions

If `$ARGUMENTS` is empty, default to a general requirements quality checklist.

### 4. Ask Up to 3 Clarifying Questions

Only ask if the answers would materially change the checklist content.
Derive questions from the spec content and request — no pre-baked list.

Examples:
- "Should this cover requirements completeness only, or also flag ambiguous wording?"
- "Is this for author self-review or peer review during a PR?"
- "Should offline/degraded state edge cases be in scope?"

Present each question with a recommended answer. Ask one at a time.
Skip any question already answered clearly by `$ARGUMENTS`.

### 5. Load Feature Context

Read from the feature directory (load only relevant sections):
- `spec.md` — requirements, user stories, success criteria
- `plan.md` — tech context, constraints (if exists)
- `tasks.md` — task coverage (if exists)

### 6. Determine Output File

Map domain to filename: `security` → `security.md`, `ux` → `ux.md`, `api` → `api.md`, `general` → `requirements.md`

- File doesn't exist → create fresh, start at `CHK001`
- File exists → **append** new items, continue from last CHK ID
- Never delete or replace existing content

Create `.sdd/specs/[NNN-feature-slug]/checklists/` if it doesn't exist.

### 7. Resolve Every Token

| Token | What to put here |
|-------|-----------------|
| `{{CHECKLIST_TYPE}}` | Domain name, title-cased (e.g. "Security", "UX", "General Requirements") |
| `{{FEATURE_NAME}}` | Human-readable feature name |
| `{{DATE}}` | Today's date, ISO format |
| `{{CHECKLIST_SECTIONS}}` | All category headings and CHK items |
| `{{CHECKLIST_NOTES}}` | Context about how to use this checklist, flagged gaps, follow-up items |

### 8. Generate Checklist Items

Every item must be phrased as a question about requirements quality:

**Completeness** — is it there?
> "Are [requirement type] defined for [scenario]?"
> "Does the spec define what happens when [condition]?"

**Clarity** — is it specific?
> "Is '[vague term]' quantified with measurable criteria? [Ambiguity, Spec §FR-NNN]"
> "Are [interactions] requirements specific enough to be independently testable?"

**Consistency** — does it align?
> "Are [requirements] consistent between [section A] and [section B]?"

**Coverage** — are all cases handled?
> "Are requirements defined for [edge case / error state / empty state]? [Gap]"

**Measurability** — can success be verified?
> "Can '[success criterion]' be objectively verified without knowing the implementation?"

**Traceability** — can it be traced?
> "Does each acceptance scenario map to at least one functional requirement?"

**❌ Never write items like:**
- "Verify the button works correctly"
- "Test that users can log in"
- "Confirm error handling is implemented"
- "Check that the API returns 200"

These test implementation, not requirements.

### 9. Traceability on Every Item

At least 80% of items MUST include a reference:
- `[Spec §FR-003]` — references a functional requirement
- `[Spec §SC-002]` — references a success criterion
- `[Gap]` — something missing from the spec
- `[Ambiguity]` — something unclear in the spec
- `[Conflict]` — a contradiction between sections

### 10. Category Structure for `{{CHECKLIST_SECTIONS}}`

Organize items under `##` headings. Choose categories relevant to the domain.
Suggested categories (adapt as needed):

- **Requirement Completeness** — are all necessary requirements present?
- **Requirement Clarity** — are requirements specific and unambiguous?
- **Requirement Consistency** — do requirements align without conflicts?
- **Acceptance Criteria Quality** — are success criteria measurable?
- **Scenario Coverage** — primary flows, error flows, empty states, edge cases
- **Non-Functional Requirements** — performance, security, accessibility, i18n
- **Dependencies & Assumptions** — documented and validated?
- **Gaps & Ambiguities** — items needing resolution before implementation

Each item format:
```
- [ ] CHK001 [Question about requirements quality] [Spec §FR-NNN / Gap / Ambiguity]
```

When appending, add a `## [YYYY-MM-DD] Addition` heading before new items.

### 11. Self-Validate Before Saving

- [ ] Every `{{TOKEN}}` replaced — no placeholders remain
- [ ] All items phrased as questions about requirements quality, not implementation behavior
- [ ] ≥80% of items include a traceability reference
- [ ] CHK IDs are sequential with no duplicates
- [ ] No implementation-testing language ("verify", "test", "confirm" + behavior)

### 12. Report

- File path created or appended
- Total items added
- New file vs. append
- Focus areas covered
- Any spec gaps surfaced during checklist generation (these are worth fixing before planning)
- Next step: resolve `[Gap]` items in spec, or proceed to `/sdd-plan` / `/sdd-tasks`
