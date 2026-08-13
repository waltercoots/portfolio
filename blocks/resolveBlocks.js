// Resolves a base block array against a variant's blockOverrides/blockInserts
// for the given key (a case study slug, or 'about' for the About page).
// Shared by CaseStudyModal.vue and AboutModal.vue so both pages get the same
// curate/insert semantics from one implementation.
export function resolveBlocks(blocks, variant, key) {
  if (!blocks) return []

  // blockOverrides: a curated allow-list. Each entry is either the id of an
  // existing block (selects + repositions it) or a full block object
  // (injects content that isn't in the base array at all, variant-only).
  const overrideEntries = variant.blockOverrides?.[key]
  const base = overrideEntries
    ? overrideEntries
      .map((entry) => (typeof entry === 'string' ? blocks.find((b) => b.id === entry) : entry))
      .filter(Boolean)
    : blocks

  // blockInserts: adds a block next to an existing one without curating
  // anything else — layers on top of the base list above, whether that's
  // the full block array or an already-curated subset. An insert whose
  // anchor isn't present in that list (e.g. curated out) is silently skipped.
  const inserts = variant.blockInserts?.[key]
  if (!inserts?.length) return base

  const result = [...base]
  for (const { before, after, block } of inserts) {
    const anchorIndex = result.findIndex((b) => b.id === (after ?? before))
    if (anchorIndex === -1) continue
    result.splice(after ? anchorIndex + 1 : anchorIndex, 0, block)
  }
  return result
}
