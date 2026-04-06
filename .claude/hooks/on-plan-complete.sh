#!/usr/bin/env bash
# on-plan-complete.sh
#
# Triggered by: Stop (Claude session ends)
# Purpose: Scan for the most recently modified plan.md in .sdd/specs/,
#          extract the tech stack, and update CLAUDE.md at project root.
#
# This replaces the update-agent-context.sh script from spec-kit.
# It keeps CLAUDE.md accurate across sessions without manual maintenance.

set -euo pipefail

# Find the repo root (where CLAUDE.md should live)
REPO_ROOT=$(git rev-parse --show-toplevel 2>/dev/null || pwd)
CLAUDE_MD="$REPO_ROOT/CLAUDE.md"
SPECS_DIR="$REPO_ROOT/.sdd/specs"

# Find the most recently modified plan.md
LATEST_PLAN=$(find "$SPECS_DIR" -name "plan.md" -type f 2>/dev/null \
  | xargs ls -t 2>/dev/null \
  | head -1)

if [[ -z "$LATEST_PLAN" ]]; then
  # No plan.md exists yet — nothing to update
  exit 0
fi

# Extract fields from plan.md
# Looks for lines like: **Language/Version**: TypeScript 5.4
extract_field() {
  local field="$1"
  grep -m1 "^\*\*${field}\*\*:" "$LATEST_PLAN" 2>/dev/null \
    | sed "s/^\*\*${field}\*\*:[[:space:]]*//" \
    | sed 's/[[:space:]]*$//' \
    || echo "—"
}

LANGUAGE=$(extract_field "Language/Version")
DEPENDENCIES=$(extract_field "Primary Dependencies")
STORAGE=$(extract_field "Storage")
PLATFORM=$(extract_field "Target Platform")
PROJECT_TYPE=$(extract_field "Project Type")

# Extract the active feature slug from the plan path
FEATURE_SLUG=$(echo "$LATEST_PLAN" | sed 's|.*\.sdd/specs/\([^/]*\)/plan\.md|\1|')

# Get project name from directory
PROJECT_NAME=$(basename "$REPO_ROOT")

# Get today's date
TODAY=$(date +%Y-%m-%d)

# Build the CLAUDE.md content
cat > "$CLAUDE_MD" << EOF
# $PROJECT_NAME

> Auto-updated by SDD hook on $TODAY. Edit the "Custom Instructions" section manually.

## Active Feature

\`$FEATURE_SLUG\`

## Tech Stack

| | |
|---|---|
| **Language** | $LANGUAGE |
| **Dependencies** | $DEPENDENCIES |
| **Storage** | $STORAGE |
| **Platform** | $PLATFORM |
| **Project Type** | $PROJECT_TYPE |

## SDD Workflow

Specs live in \`.sdd/specs/\`. Each feature has its own numbered directory.

Commands: \`/sdd-specify\` → \`/sdd-clarify\` → \`/sdd-plan\` → \`/sdd-tasks\` → \`/sdd-analyze\` → \`/sdd-implement\`

Constitution: \`.sdd/memory/constitution.md\`

## Custom Instructions

<!-- Add project-specific instructions for Claude below this line.
     This section is preserved across hook updates. -->

EOF

echo "[sdd] ✅ CLAUDE.md updated with stack from $FEATURE_SLUG"
