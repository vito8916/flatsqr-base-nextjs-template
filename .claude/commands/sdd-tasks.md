# SDD: Tasks

Break the implementation plan into a concrete, dependency-ordered task list. Every task must be specific enough to execute without additional context.

## User Input

$ARGUMENTS

## What This Does

Reads all available design artifacts and produces `tasks.md` — a sequenced checklist organized by user story, with file paths, parallel markers, and phase checkpoints.

**Output**: `.sdd/specs/[NNN-feature-slug]/tasks.md`

## Execution Steps

### 1. Read the Template

Before writing anything, read `.sdd/templates/tasks-template.md`.
This is the exact structure `tasks.md` must follow.
Tokens are in `{{DOUBLE_BRACE}}` format — replace every one of them.
Never add sections not in the template. Never remove sections from the template.

### 2. Find the Active Feature

Scan `.sdd/specs/` for the directory with the highest `NNN` prefix.
Use `$ARGUMENTS` to override.
Verify both `spec.md` and `plan.md` exist. If `plan.md` is missing, halt and tell the user to run `/sdd-plan` first.

### 3. Load All Artifacts

| File | What to Extract |
|------|-----------------|
| `spec.md` | User stories with priorities (P1/P2/P3) |
| `plan.md` | Tech stack, project structure, file paths |
| `data-model.md` | Entities and relationships (if exists) |
| `contracts/` | Interface specs to implement (if exists) |
| `research.md` | Technical decisions and version gotchas (if exists) |

### 4. Map Before Writing

Before generating tasks, build an internal map:
- Which entities does each user story need?
- Which contracts does each story expose?
- What infrastructure do ALL stories depend on? (→ Phase 2)

This prevents orphaned tasks and ensures the phase structure is correct.

### 5. Resolve Every Token

| Token | What to put here |
|-------|-----------------|
| `{{FEATURE_NAME}}` | Human-readable feature name |
| `{{FEATURE_SLUG}}` | `NNN-feature-slug` |
| `{{PHASE_SETUP}}` | Setup tasks (T001, T002...) — no story labels |
| `{{PHASE_FOUNDATION}}` | Foundation tasks — no story labels, blocks all stories |
| `{{STORY_PHASES}}` | One `## Phase N` block per user story, in priority order |
| `{{PHASE_POLISH}}` | Cross-cutting polish tasks |
| `{{DEPENDENCIES}}` | Phase order and within-story dependency rules |
| `{{PARALLEL_OPPORTUNITIES}}` | Specific parallel task groups, per story |
| `{{IMPLEMENTATION_STRATEGY}}` | MVP path and incremental delivery order |

### 6. Story Phase Format

Each story in `{{STORY_PHASES}}` must follow this pattern exactly:

```markdown
## Phase N: [Story Title] · P[N] [🎯 MVP if P1]

**Goal**: [what this story delivers when complete]
**Independent Test**: [how to verify in isolation]

- [ ] TNNN [P?] [USN] [task description] — path/to/file.ext

**Checkpoint**: [what can be demonstrated or deployed after this phase]

---
```

### 7. Task Format Rules

Every task MUST have all four components:

```
- [ ] [ID] [P?] [USN?] Description — path/to/file.ext
```

| Component | Rule |
|-----------|------|
| `- [ ]` | Always present |
| `T001` | Sequential, no gaps |
| `[P]` | Only when task touches different files from concurrent tasks |
| `[USN]` | Required for story phases; omit for Setup, Foundation, Polish |
| Description | Concrete action |
| `— path/to/file` | Exact file path from `plan.md` structure — required on every task |

**Bad tasks:**
- ❌ `T005 Set up the backend` — too vague, no file path
- ❌ `[US1] Implement auth` — missing ID, too broad, no file path

**Good tasks:**
- ✅ `T005 [P] [US1] Create UserService with login method — src/services/user.service.ts`
- ✅ `T012 [US2] Add RLS policy for projects table — supabase/migrations/003_rls.sql`

### 8. Tests Are Optional

Only include test tasks if:
- The spec explicitly mentions TDD or testing requirements
- The user requests them in `$ARGUMENTS`
- The constitution mandates them

If included, tests MUST appear before their corresponding implementation tasks and use the `[P]` marker where possible.

### 9. Self-Validate Before Saving

- [ ] Every `{{TOKEN}}` replaced — no placeholders remain
- [ ] Every task has checkbox, ID, description, and file path
- [ ] No task is vague or missing a file path
- [ ] Phase 2 contains only truly foundational work (blocks all stories)
- [ ] Each story phase is independently completable and testable
- [ ] `[P]` markers only on tasks with no file conflicts
- [ ] Task IDs sequential with no gaps

### 10. Report

- Path to `tasks.md`
- Total task count
- Tasks per story
- Parallel opportunities identified
- MVP scope (Story 1 tasks and what it delivers)
- Next step: `/sdd-analyze` for a consistency check, or `/sdd-implement` to build
