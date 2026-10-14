#!/usr/bin/env bash
# Builds the site and syncs dist/ to the server over SSH.
#
#   npm run deploy:dry   # build, then list what would change (nothing is uploaded or deleted)
#   npm run deploy       # build and upload
#
# Settings come from .env (see .env.example). Login uses your SSH key, so
# no password is stored anywhere.
set -euo pipefail
cd "$(dirname "$0")/.."

if [[ ! -f .env ]]; then
  echo "Missing .env. Copy .env.example to .env and fill it in." >&2
  exit 1
fi
set -a
source .env
set +a

: "${DEPLOY_USER:?Set DEPLOY_USER in .env}"
: "${DEPLOY_HOST:?Set DEPLOY_HOST in .env}"
: "${DEPLOY_PATH:?Set DEPLOY_PATH in .env}"

dry_run=()
if [[ "${1:-}" == "--dry-run" ]]; then
  dry_run=(--dry-run)
  echo "Dry run: nothing will be uploaded or deleted."
fi

npm run build

# --delete removes files on the server that are no longer in dist/ (old
# hashed bundles, retired pages). .well-known/ is protected because the
# host uses it for HTTPS certificate renewal.
# --checksum compares file contents, since every build gives files new
# timestamps even when they haven't changed.
rsync -rlvz --checksum --delete \
  --exclude '.DS_Store' \
  --filter 'P .well-known/' \
  --itemize-changes \
  "${dry_run[@]+"${dry_run[@]}"}" \
  dist/ "${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH%/}/"
