#!/usr/bin/env bash
# on-spec-created.sh
#
# Triggered by: PostToolUse (Write tool)
# Purpose: When a spec.md is created inside .sdd/specs/, automatically
#          create a matching git branch named NNN-feature-slug.
#
# Claude Code passes the tool input as JSON on stdin.
# We extract the file path, check it matches the pattern, then branch.

set -euo pipefail

# Read the tool input JSON from stdin
INPUT=$(cat)

# Extract the file path that was just written
FILE_PATH=$(echo "$INPUT" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('path',''))" 2>/dev/null || echo "")

# Only act on spec.md files inside .sdd/specs/
if [[ "$FILE_PATH" != *".sdd/specs/"*"/spec.md" ]]; then
  exit 0
fi

# Extract the feature slug from the path (e.g. .sdd/specs/001-user-auth/spec.md → 001-user-auth)
FEATURE_SLUG=$(echo "$FILE_PATH" | sed 's|.*\.sdd/specs/\([^/]*\)/spec\.md|\1|')

if [[ -z "$FEATURE_SLUG" ]]; then
  exit 0
fi

# Only proceed if this is a git repo
if ! git rev-parse --git-dir > /dev/null 2>&1; then
  echo "[sdd] Not a git repo — skipping branch creation for $FEATURE_SLUG" >&2
  exit 0
fi

# Check if branch already exists (local or remote)
if git show-ref --verify --quiet "refs/heads/$FEATURE_SLUG" 2>/dev/null; then
  echo "[sdd] Branch '$FEATURE_SLUG' already exists — skipping" >&2
  exit 0
fi

# Check we're not already on this branch
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "")
if [[ "$CURRENT_BRANCH" == "$FEATURE_SLUG" ]]; then
  exit 0
fi

# Create and switch to the new branch
echo "[sdd] Creating branch: $FEATURE_SLUG"
git checkout -b "$FEATURE_SLUG"
echo "[sdd] ✅ Switched to branch '$FEATURE_SLUG'"
