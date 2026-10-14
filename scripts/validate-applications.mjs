// Checks every src/applications/<slug>.json before a build: required fields,
// slug matches filename, and every image key exists in images.json.
// Runs automatically via "prebuild"; also handy on its own: npm run validate
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dir = path.join(root, 'src/applications')
const imageKeys = new Set(JSON.parse(fs.readFileSync(path.join(dir, 'images.json'), 'utf8')).map((i) => i.key))

const isText = (v) => typeof v === 'string' && v.trim() !== ''
const isTextOrList = (v) => isText(v) || (Array.isArray(v) && v.length > 0 && v.every(isText))

const errors = []
const files = fs.readdirSync(dir).filter((f) => f.endsWith('.json') && f !== 'images.json')

for (const file of files) {
  const fail = (msg) => errors.push(`${file}: ${msg}`)
  let data
  try {
    data = JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8'))
  } catch (e) {
    fail(`invalid JSON (${e.message})`)
    continue
  }

  const slug = file.slice(0, -'.json'.length)
  if (data.slug !== slug) fail(`"slug" is "${data.slug}" but the filename says "${slug}"`)
  if (!/^[a-z0-9-]+$/.test(slug)) fail('filename should be lowercase letters, numbers and dashes')
  if (!isText(data.company)) fail('"company" is required')
  for (const key of ['greeting', 'title', 'role']) {
    if (key in data && !isText(data[key])) fail(`"${key}" should be text if present`)
  }
  if ('headingLevel' in data && ![2, 3, 4, 5, 6].includes(data.headingLevel)) fail('"headingLevel" should be 2–6')
  if (!isTextOrList(data.intro)) fail('"intro" should be a list of paragraphs')

  if (!Array.isArray(data.requirements) || data.requirements.length === 0) {
    fail('"requirements" should be a non-empty list')
    continue
  }
  data.requirements.forEach((req, i) => {
    const where = `requirements[${i}]`
    if (!isText(req.heading)) fail(`${where}.heading is required`)
    if (!isTextOrList(req.body)) fail(`${where}.body should be text or a list of paragraphs`)
    if (req.images === undefined) return
    if (!Array.isArray(req.images)) return fail(`${where}.images should be a list`)
    req.images.forEach((img, j) => {
      if (!imageKeys.has(img?.key)) fail(`${where}.images[${j}] has unknown key "${img?.key}" (see images.json)`)
      if ('alt' in img && typeof img.alt !== 'string') fail(`${where}.images[${j}].alt should be text`)
    })
  })
}

if (errors.length) {
  console.error(`Application pages have problems:\n  ${errors.join('\n  ')}`)
  process.exit(1)
}
console.log(`Application pages OK (${files.length} checked)`)
