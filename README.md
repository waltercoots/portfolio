# waltercoots.com

## Application pages

Each company page (e.g. waltercoots.com/ramp) is one JSON file in `src/applications/`, named after its URL:

```json
{
  "slug": "ramp",
  "company": "Ramp",
  "role": "Product Designer",
  "headingLevel": 2,
  "intro": ["First paragraph.", "Second paragraph, <em>light HTML</em> is fine."],
  "requirements": [
    {
      "heading": "Building a system people actually use",
      "body": "Paragraph text. Can include <a href=\"/work/workstep\">links</a> and <em>emphasis</em>.",
      "images": [{ "key": "job-apps/design-systems", "alt": "Optional; defaults to the image's description" }]
    },
    { "heading": "Where I'd be learning", "body": "Requirements without images are fine." }
  ]
}
```

- Optional: `greeting` (defaults to "Hello, {company}"), `title` (defaults to "Walter Coots × {company}"), `role` (not shown on the page), `headingLevel` (defaults to 2).
- `body` can also be a list of paragraphs. Two or more images in one requirement display as a row.
- Image keys come from `src/applications/images.json`, which lists every portfolio image with a description. Run `npm run images` after adding images to `public/assets/img/`, then fill in any blank descriptions.
- `npm run validate` checks every page (it also runs before each build). Unknown URLs show a "Page not found" page, and application pages are marked noindex.
- To retire a page, delete its JSON file.

## Deploying

`npm run deploy` builds the site and syncs `dist/` to DreamHost over SSH with rsync. Files on the server that are no longer in `dist/` are deleted.

One-time setup:

1. Copy `.env.example` to `.env` and fill in your SSH user, server and folder. `.env` is gitignored.
2. Set up key login so no password is needed: `ssh-copy-id your-user@your-server` (create a key first with `ssh-keygen -t ed25519` if you don't have one).
3. Run `npm run deploy:dry` and read the list. It shows what would be uploaded and deleted, without changing anything.

## Vue + Vite template notes

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
