#!/usr/bin/env bash
# validate-prerequisites.sh
#
# Triggered by: PreToolUse (Write tool)
# Purpose: Before Claude writes plan.md, tasks.md, or implement output,
#          verify the required upstream artifacts exist.
#          Exits non-zero to BLOCK the write if prerequisites are missing.
#
# Prerequisite chain:
#   spec.md   must exist before plan.md can be written
#   plan.md   must exist before tasks.md can be written
#   tasks.md  must exist before implementation files can be written
#             (implementation = any write outside .sdd/ while tasks.md exists)

set -euo pipefail

# Read the tool input JSON from stdin
INPUT=$(cat)

# Extract the file path about to be written
FILE_PATH=$(echo "$INPUT" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('path',''))" 2>/dev/null || echo "")

if [[ -z "$FILE_PATH" ]]; then
  exit 0
fi

# Find repo root
REPO_ROOT=$(git rev-parse --show-toplevel 2>/dev/null || pwd)
SPECS_DIR="$REPO_ROOT/.sdd/specs"

# ── Guard: writing plan.md → spec.md must exist ──────────────────────────────
if [[ "$FILE_PATH" == *".sdd/specs/"*"/plan.md" ]]; then
  FEATURE_DIR=$(dirname "$FILE_PATH")
  SPEC="$FEATURE_DIR/spec.md"

  if [[ ! -f "$SPEC" ]]; then
    echo "[sdd] ❌ Cannot write plan.md — spec.md not found at $SPEC" >&2
    echo "[sdd]    Run /sdd-specify first to create the feature specification." >&2
    exit 1
  fi
  exit 0
fi

# ── Guard: writing tasks.md → plan.md must exist ─────────────────────────────
if [[ "$FILE_PATH" == *".sdd/specs/"*"/tasks.md" ]]; then
  FEATURE_DIR=$(dirname "$FILE_PATH")
  PLAN="$FEATURE_DIR/plan.md"

  if [[ ! -f "$PLAN" ]]; then
    echo "[sdd] ❌ Cannot write tasks.md — plan.md not found at $PLAN" >&2
    echo "[sdd]    Run /sdd-plan first to create the implementation plan." >&2
    exit 1
  fi
  exit 0
fi

# ── Guard: writing research.md, data-model.md, contracts/ → spec.md must exist
if [[ "$FILE_PATH" == *".sdd/specs/"*"/research.md" ]] || \
   [[ "$FILE_PATH" == *".sdd/specs/"*"/data-model.md" ]] || \
   [[ "$FILE_PATH" == *".sdd/specs/"*"/contracts/"* ]]; then
  FEATURE_DIR=$(echo "$FILE_PATH" | sed 's|\(.sdd/specs/[^/]*/\).*|\1|')
  SPEC="${FEATURE_DIR}spec.md"

  if [[ ! -f "$SPEC" ]]; then
    echo "[sdd] ❌ Cannot write planning artifacts — spec.md not found." >&2
    echo "[sdd]    Run /sdd-specify first." >&2
    exit 1
  fi
  exit 0
fi

# All other writes are fine
exit 0
