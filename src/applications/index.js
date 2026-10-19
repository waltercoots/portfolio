// Application pages live as one JSON file per company in this folder
// (e.g. betterup.json → waltercoots.com/betterup). Each file is lazy-loaded
// into its own chunk, so the homepage doesn't carry every letter's text.
const loaders = import.meta.glob(['./*.json', '!./images.json'], { import: 'default' })

const slugFromPath = (path) => path.slice(2, -'.json'.length)
const slugs = new Set(Object.keys(loaders).map(slugFromPath))

export const hasApplication = (slug) => slugs.has(slug)

// Dev only: edited JSON arrives over HMR (see vite.config.js) rather than
// reloading the page. Keep the latest copy so navigating away and back doesn't
// serve the browser's cached original module.
const hotUpdates = new Map()
if (import.meta.hot) {
  import.meta.hot.on('application:update', ({ slug, data }) => hotUpdates.set(slug, data))
}

export const loadApplication = async (slug) =>
  hotUpdates.get(slug) ?? loaders[`./${slug}.json`]?.()
