# SDD: Implement

Execute the task list and build the feature. Works through `tasks.md` phase by phase, marks tasks complete as it goes.

## User Input

$ARGUMENTS

## What This Does

Reads `tasks.md` and systematically implements each task in order. Marks each task `[x]` on completion. Provides progress updates and halts cleanly on errors.

## Pre-Execution: Checklist Gate

Before writing any code, check if `.sdd/specs/[NNN-feature-slug]/checklists/` exists.

If it does, scan all `.md` files for incomplete items (`- [ ]`):

| Checklist | Total | Complete | Incomplete |
|-----------|-------|----------|------------|
| … | … | … | … |

- **All complete** → proceed automatically
- **Any incomplete** → show the table and ask: *"Some checklists have incomplete items. Proceed anyway?"* Wait for explicit "yes" before continuing.

## Execution Steps

### 1. Find the Active Feature

Scan `.sdd/specs/` for the directory with the highest `NNN` prefix.
Use `$ARGUMENTS` to override.
Verify `tasks.md` exists. If not, halt and tell the user to run `/sdd-tasks` first.

### 2. Load Implementation Context

| File | What to Extract |
|------|-----------------|
| `tasks.md` | Full task list, phases, parallel markers |
| `plan.md` | Tech stack, project structure, exact file paths |
| `data-model.md` | Entity definitions (if exists) |
| `contracts/` | Interface specs to implement against (if exists) |
| `research.md` | Technical decisions and version-specific gotchas (if exists) |

`plan.md` is the source of truth for file paths and structure. If a task's path conflicts with `plan.md`, follow `plan.md` and note the discrepancy.

### 3. Project Setup Verification

Before touching feature code, verify ignore files match the detected stack:

| Condition | Action |
|-----------|--------|
| Git repo | Ensure `.gitignore` exists with appropriate patterns |
| Docker files present | Ensure `.dockerignore` exists |
| Node project | Check `.eslintignore`, `.prettierignore` |
| Terraform files | Check `.terraformignore` |

If an ignore file exists → only append missing critical patterns.
If missing → create with full pattern set for the detected stack.

Common patterns: `node_modules/`, `dist/`, `.env*`, `__pycache__/`, `.venv/`, `target/`, `.DS_Store`

### 4. Execute Phase by Phase

**Order:**
1. Phase 1 (Setup) — fully complete before Phase 2
2. Phase 2 (Foundation) — fully complete before any story phase
3. Story phases in order (sequential by default)
4. Polish phase last

**Within each phase:**
- Tasks without `[P]` → execute sequentially
- Tasks with `[P]` → can run concurrently (they touch different files)
- TDD tasks present → write test, confirm it FAILS, then implement

**After each task:**
- Change `- [ ]` to `- [x]` in `tasks.md`
- Output: `✅ T012 — [brief description of what was done]`

**After each phase:**
- Report phase complete with checkpoint
- Surface any issues before continuing

### 5. Error Handling

**Task fails:**
- Show full error with context
- Stop execution — don't skip ahead
- Suggest debugging steps
- Do NOT mark the task complete

**Parallel task fails:**
- Continue remaining parallel tasks in the group
- Report failure after the group completes
- Don't continue to next sequential task until resolved

**Path discrepancy:**
- Minor (e.g. `src/models/` vs `models/`) → apply judgment, note it
- Significant → flag for user before proceeding

### 6. Progress Reporting

After each phase:

```
## Phase N Complete: [Phase Name]

Tasks completed: N
Files created/modified: [list]
Checkpoint: [what can be tested independently right now]
```

After all phases:

```
## Implementation Complete

Total tasks: N / N ✅

What was built:
- Story 1 ([title]): [what it delivers]
- Story 2 ([title]): [what it delivers]

Suggested next steps:
- Verify each story's independent test from spec.md
- Run the app and check acceptance scenarios
- Review and commit (each phase = a natural commit boundary)
```

### 7. Completion Validation

After all tasks are `[x]`:
- Confirm no tasks remain unchecked
- Run build/compile if applicable
- Check implementation matches spec acceptance scenarios at a high level
- Flag any gaps between spec expectations and what was built

## Principles

- **Spec = source of truth for behavior**
- **plan.md = source of truth for structure and file paths**
- **Don't gold-plate** — implement exactly what the tasks describe
- **Don't skip tasks** — flag as questionable rather than silently omitting
- **Each phase = a natural commit boundary**
