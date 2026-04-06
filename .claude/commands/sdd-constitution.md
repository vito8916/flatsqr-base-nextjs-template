# SDD: Constitution

Create or update the project constitution — the governing principles that all subsequent specs, plans, and implementations must follow.

## User Input

$ARGUMENTS

## What This Does

The constitution lives at `.sdd/memory/constitution.md`. It defines non-negotiable principles, quality gates, and governance rules that every feature must respect.

## Execution Steps

### 1. Read the Template

Before writing anything, read `.sdd/templates/constitution-template.md`.
This defines the exact structure and token names you must use.
Tokens are in `{{DOUBLE_BRACE}}` format — replace every one of them with real content.
Never add sections not in the template. Never remove sections from the template.

### 2. Load Existing Constitution (if any)

Read `.sdd/memory/constitution.md` if it exists.
Identify which tokens still have placeholder values vs. real content.
Determine the version bump type:
- **MAJOR**: Principle removed or fundamentally redefined
- **MINOR**: New principle or section added
- **PATCH**: Wording clarification, typo fix

If no constitution exists yet, version = `1.0.0`, `RATIFICATION_DATE` = today.

### 3. Resolve Every Token

| Token | What to put here |
|-------|-----------------|
| `{{PROJECT_NAME}}` | Name of the project |
| `{{PRINCIPLES}}` | Each principle as `### I. Name` with declarative MUST/SHOULD description |
| `{{QUALITY_GATES}}` | Mandatory checks that block progress if failed |
| `{{GOVERNANCE}}` | Amendment process, compliance review, approval rules |
| `{{CONSTITUTION_VERSION}}` | Semver string e.g. `1.0.0` |
| `{{RATIFICATION_DATE}}` | ISO date of first adoption |
| `{{LAST_AMENDED_DATE}}` | Today if changes made, else keep previous |

Priority for resolving tokens:
1. `$ARGUMENTS` — user's explicit input
2. Existing constitution content — preserve what's already decided
3. Inference from project files (README, package.json, code)
4. Ask the user only if a critical token has no reasonable default

### 4. Write Principles Well

Each principle under `{{PRINCIPLES}}` must follow this pattern:

```markdown
### I. [Principle Name]
[Declarative description using MUST/SHOULD. Include rationale if non-obvious.]
```

Good principles are:
- **Testable** — binary pass/fail, not subjective
- **Declarative** — states what is required, not how to do it
- **Rationale-backed** — explains the why if non-obvious
- **Scoped** — specific enough to be actionable

### 5. Validate Before Saving

- No `{{TOKEN}}` placeholders remain
- Every principle uses MUST/SHOULD, not vague adjectives without definitions
- Version follows semver logic vs. any previous version
- All dates are ISO format `YYYY-MM-DD`
- Quality gates are concrete and checkable

### 6. Save

Create `.sdd/memory/` if it doesn't exist.
Write to `.sdd/memory/constitution.md`.

If `.sdd/` is brand new, also create `.sdd/README.md` explaining the directory structure to teammates.

### 7. Report

- Version change (old → new) with bump rationale
- Principles defined by name
- New creation vs. update
- Suggested commit: `docs: establish project constitution vX.Y.Z`
- Next step: `/sdd-specify` with your first feature description
