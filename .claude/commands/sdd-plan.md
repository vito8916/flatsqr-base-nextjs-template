# SDD: Plan

Generate the technical implementation plan for the active feature. This is where you specify the tech stack and architecture.

## User Input

$ARGUMENTS

## What This Does

Takes the feature spec and translates it into concrete technical decisions. Creates four artifacts alongside `spec.md`.

**Outputs:**
- `plan.md` — technical context and project structure
- `research.md` — resolved technical decisions and rationale
- `data-model.md` — entities, fields, relationships
- `contracts/` — interface specs (API, CLI, events, etc.)

## Execution Steps

### 1. Read the Template

Before writing `plan.md`, read `.sdd/templates/plan-template.md`.
This is the exact structure `plan.md` must follow.
Tokens are in `{{DOUBLE_BRACE}}` format — replace every one of them.
Never add sections not in the template. Never remove sections from the template.

### 2. Find the Active Feature

Scan `.sdd/specs/` for the directory with the highest `NNN` prefix containing a `spec.md`.
Use `$ARGUMENTS` to override.
If `spec.md` is missing, halt and tell the user to run `/sdd-specify` first.

### 3. Load Context

Read:
- `.sdd/specs/[NNN-feature-slug]/spec.md` — functional requirements and user stories
- `.sdd/memory/constitution.md` — governing principles and hard constraints

Constitution tech constraints are non-negotiable — violations block planning unless explicitly justified.

### 4. Extract Tech Stack

Parse `$ARGUMENTS` for stack directives:
- "Next.js 15, Supabase, Tailwind v4" → fill Technical Context tokens
- "Python FastAPI, PostgreSQL, Redis" → fill accordingly

If `$ARGUMENTS` is empty or has no stack, mark affected tokens as `NEEDS CLARIFICATION` and ask before proceeding.

### 5. Constitution Gate

Before generating any artifacts, check every principle:

| Principle | Status | Notes |
|-----------|--------|-------|
| [name] | ✅ PASS / ❌ FAIL / ⚠️ JUSTIFIED | … |

- **FAIL** → stop, show violation, explain what needs to change
- **JUSTIFIED** → document rationale in `{{COMPLEXITY_TRACKING}}`

### 6. Phase 0 — Research

For each technical unknown, generate an entry in `research.md`:

```markdown
# Research: [FEATURE NAME]

## [Decision Topic]

**Decision**: [what was chosen]
**Rationale**: [why this choice]
**Alternatives Considered**: [what else was evaluated and rejected]
**References**: [links or docs]

---
```

For rapidly evolving libraries (Next.js App Router, Supabase realtime, Expo SDK, etc.) — note the specific version targeted and any version-specific gotchas.

Resolve all `NEEDS CLARIFICATION` items before writing `plan.md`.

### 7. Phase 1 — Data Model

Extract entities from `spec.md` and write `data-model.md`:

```markdown
# Data Model: [FEATURE NAME]

## [EntityName]

**Description**: [what this represents]

| Field | Type | Constraints | Notes |
|-------|------|-------------|-------|
| id | uuid | primary key | auto-generated |

**Relationships**:
- Belongs to: [Entity]
- Has many: [Entity]

**State Transitions** *(if applicable)*:
- [state] → [state]: [trigger]

---
```

### 8. Phase 1 — Interface Contracts

If the feature exposes external interfaces, create `contracts/`:
- REST API → `contracts/api-spec.md`
- CLI tool → `contracts/cli-spec.md`
- Component library → `contracts/component-spec.md`
- Webhooks/events → `contracts/events-spec.md`

Skip entirely if the feature is purely internal (background job, migration, etc.).

### 9. Resolve Every plan.md Token

| Token | What to put here |
|-------|-----------------|
| `{{FEATURE_NAME}}` | Human-readable feature name |
| `{{FEATURE_SLUG}}` | `NNN-feature-slug` |
| `{{DATE}}` | Today's date |
| `{{SUMMARY}}` | 2–3 sentences: what we're building, what stack, key technical approach |
| `{{LANGUAGE_VERSION}}` | e.g. TypeScript 5.4, Python 3.12 |
| `{{PRIMARY_DEPENDENCIES}}` | e.g. Next.js 15, FastAPI, React Native 0.74 |
| `{{STORAGE}}` | e.g. PostgreSQL via Supabase, SQLite, N/A |
| `{{TESTING}}` | e.g. Vitest, pytest, Jest |
| `{{TARGET_PLATFORM}}` | e.g. Web (SSR), iOS + Android, Linux server |
| `{{PROJECT_TYPE}}` | web-app / mobile-app / cli / library / service |
| `{{PERFORMANCE_GOALS}}` | Specific targets from success criteria in technical terms |
| `{{CONSTRAINTS}}` | From constitution + any hard technical limits |
| `{{CONSTITUTION_CHECK}}` | The gate table from Step 5 |
| `{{SOURCE_STRUCTURE}}` | Actual directory layout — concrete paths, not placeholders |
| `{{COMPLEXITY_TRACKING}}` | Only if a constitution violation was justified — otherwise write "No violations." |

### 10. Self-Validate

- [ ] Every `{{TOKEN}}` replaced — no placeholders remain
- [ ] `{{SOURCE_STRUCTURE}}` shows real paths matching the actual project layout
- [ ] Constitution check table present and complete
- [ ] All `NEEDS CLARIFICATION` items resolved

### 11. Report

- Artifacts created (list all files and paths)
- Constitution gate result
- Any remaining `NEEDS CLARIFICATION` items needing user input
- Technical risks worth reviewing before moving to tasks
- Next step: `/sdd-tasks`
