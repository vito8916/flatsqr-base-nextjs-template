# SDD: Analyze

Cross-artifact consistency check. Read-only analysis that identifies gaps, conflicts, and ambiguities across `spec.md`, `plan.md`, and `tasks.md`.

## User Input

$ARGUMENTS

## What This Does

Checks the three core artifacts for coverage gaps, orphaned tasks, conflicting statements, vague criteria, and constitution violations.

**This command never modifies any file.** It produces a structured report only.

Run after `/sdd-tasks` and before `/sdd-implement`.

## Execution Steps

### 1. Find the Active Feature

Scan `.sdd/specs/` for the directory with the highest `NNN` prefix.
Use `$ARGUMENTS` to override.
Verify `spec.md`, `plan.md`, and `tasks.md` all exist.
If any are missing, halt and name the missing file and which command creates it.

### 2. Load All Artifacts

- `.sdd/specs/[NNN-feature-slug]/spec.md`
- `.sdd/specs/[NNN-feature-slug]/plan.md`
- `.sdd/specs/[NNN-feature-slug]/tasks.md`
- `.sdd/memory/constitution.md` (if exists)

### 3. Build Internal Models

Do not dump raw file content into the report. Build these maps internally:

**Requirements inventory**: For each `FR-NNN` and `SC-NNN` — ID, summary, which story it belongs to, whether any task references it.

**Task inventory**: For each `TNNN` — ID, description, story label, which requirement(s) it appears to implement.

**Constitution rules**: Each MUST/SHOULD statement as a checkable rule.

### 4. Detection Passes

#### A. Coverage Gaps
- Requirements with zero associated tasks
- Success criteria requiring buildable work (performance, security) with no task
- User stories with no implementation tasks

#### B. Orphaned Tasks
- Tasks with no traceable requirement or story
- Tasks in story phases not matching any story in spec

#### C. Duplication
- Near-duplicate requirements
- Duplicate tasks (same action, different IDs)

#### D. Ambiguity
- Vague adjectives without measurable definitions: "fast", "scalable", "secure", "intuitive", "robust"
- Unresolved placeholders: `TODO`, `TBD`, `???`, `[NEEDS CLARIFICATION]`, any `{{TOKEN}}`

#### E. Inconsistencies
- Terminology drift (same concept named differently across files)
- Conflicting requirements
- Task file paths that don't match `plan.md` project structure
- Task ordering that violates logical dependencies

#### F. Constitution Alignment
- Requirements or decisions violating a MUST principle
- Missing sections required by the constitution

### 5. Severity

| Severity | Criteria |
|----------|----------|
| **CRITICAL** | Constitution MUST violation, core requirement with zero task coverage, missing artifact |
| **HIGH** | Conflicting requirements, ambiguous security/performance attribute, untestable criterion |
| **MEDIUM** | Terminology drift, non-functional coverage gap, underspecified edge case |
| **LOW** | Wording improvement, minor redundancy |

Cap at 50 findings. Summarize overflow: "N additional LOW findings not shown."

### 6. Output the Report

```markdown
## Spec Analysis Report: [FEATURE NAME]

### Findings

| ID | Severity | Category | Location | Issue | Recommendation |
|----|----------|----------|----------|-------|----------------|
| A1 | CRITICAL | Coverage Gap | spec.md FR-003 | No tasks implement this requirement | Add task to Phase 3 for [specific component] |

### Coverage Summary

| Requirement | Tasks | Status |
|-------------|-------|--------|
| FR-001 | T004, T007 | ✅ Covered |
| FR-002 | — | ❌ No coverage |

**Coverage**: X of Y requirements have ≥1 task (Z%)

### Constitution Alignment

| Principle | Status | Notes |
|-----------|--------|-------|
| [Principle] | ✅ / ❌ | … |

### Unmapped Tasks

| Task | Description | Issue |
|------|-------------|-------|
| T023 | … | No traceable requirement |

### Metrics

| | Count |
|--|-------|
| Requirements | N |
| Tasks | N |
| Coverage | N% |
| CRITICAL issues | N |
| HIGH issues | N |
| Ambiguities | N |
| Duplications | N |
```

### 7. Next Actions

**If CRITICAL issues exist:**
> ⛔ Resolve CRITICAL issues before `/sdd-implement`. List specific fixes with file and line references.

**If only LOW/MEDIUM:**
> ✅ No blockers. Proceed with `/sdd-implement`. Consider addressing MEDIUM issues first.

Give a concrete action for each CRITICAL/HIGH finding.

### 8. Offer Remediation

After the report, ask:

> Would you like me to suggest specific edits for the top issues? (I won't apply them automatically — you review and apply, or regenerate with the relevant command.)

## Rules

- Never modify any file
- Never invent findings — report only what is present or absent
- Constitution violations are always CRITICAL
- Zero issues is valid — emit clean summary and suggest proceeding
- Results must be deterministic given unchanged files
