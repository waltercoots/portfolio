// Generates src/applications/images.json: every usable portfolio image with a
// stable key, its public path, and a short description of what it shows.
//
// - Keys are the path under public/assets/img without extension or @2x, e.g.
//   "job-apps/use-of-ai". When both foo.png and foo@2x.png exist, the key
//   points at the @2x file.
// - Descriptions you've written by hand are kept on rerun. New images get
//   their description seeded from alt text used elsewhere on the site.
//
// Usage: npm run images
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const imgRoot = path.join(root, 'public/assets/img')
const manifestPath = path.join(root, 'src/applications/images.json')

const IMAGE_EXT = /\.(png|jpe?g|gif|webp|svg|avif)$/i
// Site chrome rather than portfolio work: favicons, wordmarks, icons, decor
const EXCLUDE_DIRS = new Set(['_meta'])
const INCLUDE_TOP_LEVEL = false

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) return EXCLUDE_DIRS.has(e.name) ? [] : walk(p)
    return IMAGE_EXT.test(e.name) ? [p] : []
  })

const files = walk(imgRoot)
  .map((p) => path.relative(imgRoot, p).split(path.sep).join('/'))
  .filter((rel) => INCLUDE_TOP_LEVEL || rel.includes('/'))

// Group by key, preferring @2x over 1x
const byKey = new Map()
for (const rel of files) {
  const is2x = /@2x\.[^.]+$/.test(rel)
  let key = rel.replace(/@2x(?=\.[^.]+$)/, '').replace(/\.[^.]+$/, '')
  const existing = byKey.get(key)
  if (existing && existing.ext !== path.extname(rel) && !is2x && !existing.is2x) {
    key = `${key}-${path.extname(rel).slice(1)}`
  }
  if (!byKey.has(key) || is2x) byKey.set(key, { rel, is2x, ext: path.extname(rel) })
}

// Alt text already used on the site, keyed by image path
const altByPath = new Map()
const addAlt = (rel, alt) => {
  if (alt && alt.trim() && !altByPath.has(rel)) altByPath.set(rel, alt.trim())
}
const srcFiles = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true, recursive: true })
    .filter((e) => e.isFile() && /\.(vue|json)$/.test(e.name))
    .map((e) => path.join(e.parentPath, e.name))
for (const f of srcFiles(path.join(root, 'src'))) {
  const text = fs.readFileSync(f, 'utf8')
  for (const m of text.matchAll(/<img[^>]*?src="\/assets\/img\/([^"]+)"[^>]*?alt="([^"]*)"/g)) addAlt(m[1], m[2])
  for (const m of text.matchAll(/<img[^>]*?alt="([^"]*)"[^>]*?src="\/assets\/img\/([^"]+)"/g)) addAlt(m[2], m[1])
}

const previous = fs.existsSync(manifestPath)
  ? new Map(JSON.parse(fs.readFileSync(manifestPath, 'utf8')).map((i) => [i.key, i.description]))
  : new Map()

const manifest = [...byKey.entries()]
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([key, { rel }]) => ({
    key,
    path: `/assets/img/${rel}`,
    description: previous.get(key) || altByPath.get(rel) || altByPath.get(rel.replace('@2x', '')) || '',
  }))

fs.mkdirSync(path.dirname(manifestPath), { recursive: true })
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n')

const missing = manifest.filter((i) => !i.description)
console.log(`images.json: ${manifest.length} images, ${missing.length} without a description`)
for (const i of missing) console.log(`  - ${i.key}`)
