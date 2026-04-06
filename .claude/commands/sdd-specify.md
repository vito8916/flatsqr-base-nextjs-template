# SDD: Specify

Create a feature specification from a natural language description. Focuses on **what** and **why** — no tech stack, no implementation details.

## User Input

$ARGUMENTS

## What This Does

Translates a feature description into a structured spec file. The spec captures user stories (each independently testable), functional requirements, success criteria, and assumptions.

**Output**: `.sdd/specs/{{FEATURE_SLUG}}/spec.md`

## Execution Steps

### 1. Read the Template

Before writing anything, read `.sdd/templates/spec-template.md`.
This is the exact structure `spec.md` must follow.
Tokens are in `{{DOUBLE_BRACE}}` format — replace every one of them.
Never add sections not in the template. Never remove sections from the template.

### 2. Generate Feature Slug

From `$ARGUMENTS`, derive a concise 2–4 word slug:
- Lowercase, hyphen-separated
- Remove stop words (a, the, to, for, of, in, etc.)
- Preserve meaningful technical terms (oauth, api, jwt, etc.)
- Examples: "Add user authentication" → `user-auth`, "Build analytics dashboard" → `analytics-dashboard`

### 3. Determine Feature Number

Scan `.sdd/specs/` for existing directories. Take the highest `NNN` prefix and increment by 1.
Start at `001` if no specs exist.
Final slug: `NNN-feature-slug` (e.g. `003-user-auth`)

### 4. Create Directory

Create `.sdd/specs/{{FEATURE_SLUG}}/`.

### 5. Load Constitution

Read `.sdd/memory/constitution.md` if it exists.
Use it to validate scope — flag anything in the description that conflicts with principles.

### 6. Resolve Every Token

| Token | What to put here |
|-------|-----------------|
| `{{FEATURE_NAME}}` | Human-readable feature name |
| `{{FEATURE_SLUG}}` | `NNN-feature-slug` |
| `{{DATE}}` | Today's date, ISO format |
| `{{OVERVIEW}}` | 2–3 sentences: what, who, what problem it solves |
| `{{USER_STORIES}}` | All user stories with priority, independent test, and acceptance scenarios |
| `{{EDGE_CASES}}` | Boundary conditions and error scenarios |
| `{{FUNCTIONAL_REQUIREMENTS}}` | FR-NNN: System MUST... list |
| `{{KEY_ENTITIES}}` | Named concepts with plain-language descriptions (only if feature involves data) — remove section header if not applicable |
| `{{SUCCESS_CRITERIA}}` | SC-NNN: measurable, technology-agnostic outcomes |
| `{{ASSUMPTIONS}}` | Explicit defaults chosen, out-of-scope declarations, environment dependencies |

### 7. User Stories Format

Each story in `{{USER_STORIES}}` must follow this structure:

```markdown
### Story N — [Brief Title] · PN

[Plain language description of the user journey]

**Why P[N]**: [Value delivered and urgency]

**Independent Test**: [How to verify this story works in complete isolation]

**Acceptance Scenarios**:
1. **Given** [state], **When** [action], **Then** [outcome]
2. **Given** [state], **When** [action], **Then** [outcome]

---
```

Every story must be independently testable — implementing Story 1 alone should yield a working MVP.

### 8. Quality Rules

**DO:**
- Write from the user's perspective
- Make success criteria measurable ("under 2 seconds", "10,000 concurrent users")
- Document all assumptions explicitly, including out-of-scope items

**DO NOT:**
- Mention frameworks, languages, databases, APIs, or cloud providers
- Reference implementation patterns (REST, hooks, ORM, etc.)
- Write acceptance criteria that require knowing how something is built
- Use vague language ("robust", "fast", "intuitive") without measurable definitions

**NEEDS CLARIFICATION limit**: Max 3. Use only when ambiguity materially affects scope or security and no reasonable default exists.

### 9. Constitution Check

If `.sdd/memory/constitution.md` exists, verify no principles are violated.
Flag violations before saving.

### 10. Self-Validate

Before reporting done, check:
- [ ] Every `{{TOKEN}}` replaced — no placeholders remain
- [ ] No implementation details anywhere in the file
- [ ] Every success criterion is measurable and technology-agnostic
- [ ] Every user story has ≥1 acceptance scenario and an independent test
- [ ] Max 3 `[NEEDS CLARIFICATION]` markers, each clearly explained

### 11. Report

- Feature slug and number assigned
- Path to spec file
- User stories created (with priorities)
- Any `[NEEDS CLARIFICATION]` items needing resolution
- Constitution check result
- Next step: `/sdd-clarify` if ambiguities remain, otherwise `/sdd-plan`
