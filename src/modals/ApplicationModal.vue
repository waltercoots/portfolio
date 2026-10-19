<script setup>
import { computed, nextTick, onMounted, onBeforeUnmount, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Lenis from 'lenis'
import { loadApplication } from '@/applications'
import images from '@/applications/images.json'

let lenis = null
const imagesByKey = new Map(images.map((image) => [image.key, image]))
const route = useRoute()
const router = useRouter()
const scroller = ref(null)
const application = ref(null)

const greeting = computed(
  () => application.value?.greeting ?? `Hello, ${application.value?.company}`,
)
const headingTag = computed(() => `h${application.value?.headingLevel ?? 2}`)

// Image keys come from src/applications/images.json; the page's own alt text
// wins, otherwise fall back to the manifest's description
const imagesFor = (requirement) =>
  (requirement.images ?? []).flatMap(({ key, alt }) => {
    const image = imagesByKey.get(key)
    if (!image) {
      if (import.meta.env.DEV)
        console.warn(`Unknown image key "${key}" in ${route.params.slug}.json`)
      return []
    }
    return [{ key, src: image.path, alt: alt ?? image.description }]
  })

const requirements = computed(() =>
  (application.value?.requirements ?? []).map((requirement) => ({
    heading: requirement.heading,
    paragraphs: Array.isArray(requirement.body) ? requirement.body : [requirement.body],
    images: imagesFor(requirement),
  })),
)

const showApplication = async (data) => {
  application.value = data
  document.title = data.title ?? `Walter Coots × ${data.company}`
  // Lenis caches the scrollable height, so recalculate once content renders
  await nextTick()
  lenis?.resize()
}

watch(
  () => route.params.slug,
  async (slug) => {
    if (!slug) return
    const data = await loadApplication(slug)
    if (!data || route.params.slug !== slug) return
    showApplication(data)
  },
  { immediate: true },
)

// Dev only: swap in edited JSON in place instead of reloading the page
const handleHotUpdate = ({ slug, data }) => {
  if (slug === route.params.slug) showApplication(data)
}
import.meta.hot?.on('application:update', handleHotUpdate)
onBeforeUnmount(() => import.meta.hot?.off('application:update', handleHotUpdate))

// Body copy is rendered as HTML, so in-app links in it are plain <a> tags.
// Route those through the router instead of reloading the page.
const handleBodyClick = (e) => {
  const link = e.target.closest('a')
  if (!link || link.target || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return
  const href = link.getAttribute('href')
  if (href?.startsWith('/') && !href.startsWith('//')) {
    e.preventDefault()
    router.push(href)
  }
}

const handleKeyDown = (e) => {
  if (e.key === 'Escape') {
    router.push({ path: '/' })
  }
}

onMounted(() => {
  lenis = new Lenis({
    wrapper: scroller.value,
    autoRaf: true,
    allowNestedScroll: true,
  })
  window.addEventListener('keydown', handleKeyDown)
})

onBeforeUnmount(() => {
  lenis?.stop()
  lenis?.destroy()
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
  <div ref="scroller" class="modal job-app">
    <main v-if="application" @click="handleBodyClick">
      <header>
        <h1>{{ greeting }}</h1>
        <p v-for="(paragraph, i) in application.intro" :key="i" v-html="paragraph" />
      </header>
      <div class="requirements-list">
        <div v-for="(requirement, i) in requirements" :key="i" class="requirement">
          <component :is="headingTag">{{ requirement.heading }}</component>
          <p v-for="(paragraph, j) in requirement.paragraphs" :key="j" v-html="paragraph" />
          <img
            v-if="requirement.images.length === 1"
            :src="requirement.images[0].src"
            :alt="requirement.images[0].alt"
          />
          <div v-else-if="requirement.images.length > 1" class="image-group space-top space-bottom">
            <img
              v-for="image in requirement.images"
              :key="image.key"
              :src="image.src"
              :alt="image.alt"
            />
          </div>
        </div>
      </div>
      <p>
        Thanks for considering me. Check out the
        <router-link to="/" title="View full portfolio">rest of my portfolio</router-link> if you'd
        like to see more, or feel free to
        <a href="https://calendly.com/walter-coots" target="_blank">grab some time with me</a>.
      </p>
    </main>
  </div>
</template>

<style lang="scss" scoped>
/** ----------------------------------------------------------------
    HEADER
    (copied from CaseStudyModal.vue's global header styles, since this
    page is meant to be self-contained rather than depending on that
    file staying loaded)
---------------------------------------------------------------- **/
header {
  padding-bottom: 0rem;
  margin-bottom: 2rem;
  background: none;
}
div.requirements-list {
  margin-bottom: 3rem;
  div.requirement {
    margin-bottom: 5rem;
    img {
      border: 1px solid color-mix(in srgb, $gray 35%, transparent);
      margin-top: 1.5rem;
      border-radius: 0.25rem;
    }
  }
}
div.image-group {
  text-align: center;
  img {
    display: inline-block;
  }
}
</style>
