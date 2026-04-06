# Tasks: {{FEATURE_NAME}}

**Feature**: `{{FEATURE_SLUG}}`
**Input**: .sdd/specs/{{FEATURE_SLUG}}/

## Task Format

`- [ ] [ID] [P?] [USN?] Description — path/to/file.ext`

- **[P]**: Parallelizable (different files, no blocking dependencies)
- **[USN]**: User story this belongs to (US1, US2, etc.)
- IDs are sequential: T001, T002, T003...
- Every task includes an exact file path

---

## Phase 1: Setup

**Purpose**: Project scaffolding and shared infrastructure

{{PHASE_SETUP}}

---

## Phase 2: Foundation

**Purpose**: Core infrastructure every story depends on. Complete before any user story phase.

{{PHASE_FOUNDATION}}

**Checkpoint**: Foundation complete — user story phases can now begin

---

{{STORY_PHASES}}

---

## Phase N: Polish & Cross-Cutting

{{PHASE_POLISH}}

---

## Dependencies

{{DEPENDENCIES}}

---

## Parallel Opportunities

{{PARALLEL_OPPORTUNITIES}}

---

## Implementation Strategy

{{IMPLEMENTATION_STRATEGY}}
