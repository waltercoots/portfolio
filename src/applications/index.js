// Application pages live as one JSON file per company in this folder
// (e.g. betterup.json → waltercoots.com/betterup). Each file is lazy-loaded
// into its own chunk, so the homepage doesn't carry every letter's text.
const loaders = import.meta.glob(['./*.json', '!./images.json'], { import: 'default' })

const slugFromPath = (path) => path.slice(2, -'.json'.length)
const slugs = new Set(Object.keys(loaders).map(slugFromPath))

export const hasApplication = (slug) => slugs.has(slug)

export const loadApplication = (slug) => loaders[`./${slug}.json`]?.()
