<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import Lenis from 'lenis'

let lenis = null
const router = useRouter()

const handleKeyDown = (e) => {
  if (e.key === 'Escape') {
    router.push({ path: '/' })
  }
}

onMounted(() => {
  lenis = new Lenis({
    wrapper: document.querySelector('div.modal.job-app'),
    autoRaf: true,
    allowNestedScroll: true
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
  <div class="modal job-app">
    <main>
      <header>
        <h1>Hello, Netspend</h1>
        <p>I know you’re going through a lot of applications, so I’ve put together some highlights on how I align with what you’re looking for.</p>
        <p>Twenty years in product design, most of it B2B SaaS. There's a stretch at Intuit where I was working on financial software. My more recent jobs have been B2B, but prior to 2021 I did a lot more B2C.</p>
      </header>
<div class="requirements-list">

  <div class="requirement">
    <h2>Leading complex projects end to end</h2>
    <p>At WorkStep, I led a product-wide IA re-architecture with our Senior PM. This project touched navigation, information hierarchy, and dozens of existing features at once. Multi-phase, cross-team, and I owned the direction the whole way through, not just the first few weeks of it.</p>
    <img src="/assets/img/job-apps/info-architecture.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Working through ambiguity</h2>
    <p>Report Builder wasn't a clean project. It got messy before it worked. I learned more from the parts that went sideways than from the parts that didn't, which is honestly how most ambiguous, open-ended work goes. I'd rather talk about that straight than pretend everything I've shipped came out tidy.</p>
    <img src="/assets/img/job-apps/content-strategy.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Financial product experience</h2>
    <p>The first real software design role I had was at Intuit working on their pro accounting software ProSeries and Lacerte, plus an early web-based tax prep tool. So financial products aren't unfamiliar ground. I'm also big into personal finance and investing, and use a variety of web-based tools and apps for that.</p>
    <img src="/assets/img/job-apps/design-specs.png" alt="Some specs I did of a design at WorkStep" />
  </div>

  <div class="requirement">
    <h2>Design systems and visual craft</h2>
    <p>I built WorkStep's design system from scratch in Figma. Tokens, variables, aliasing, the whole structure, and it cut UI bloat by 88% across dozens of features. I know what it actually costs to hold a system together once teams are living in it, not just what it looks like the week you ship it. I've also been leveraging AI to interface with, prototype, and iterate upon design systems at my current job.</p>
    <img src="/assets/img/job-apps/design-systems@2x.png" alt="Example design system from a project with Halliburton" />
  </div>

  <div class="requirement">
    <h2>Consumer-facing experience and native mobile</h2>
    <p>The strongest consumer proof point I've got is EverlyWell, where a product page redesign drove a 25% sales increase and I built the subscription flow into both the product and checkout. On mobile, I shipped native iOS at Insitome, and right now I'm building a native mobile design system from scratch for a personal project, using Figma MCP. It's a gap I'm actively closing, not one I'm hoping you won't notice.</p>
    <img src="/assets/img/job-apps/nice-interfaces.png" alt="Some of the various mobile and web designs I've done" />
  </div>

</div>
      <p>Thanks for considering me. Check out the <router-link to="/" title="View full portfolio">rest of my portfolio</router-link> if you'd like to see more, or feel free to <a href="https://calendly.com/walter-coots" target="_blank">grab some time with me</a>.</p>
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
  margin-bottom:2rem;
  background: none;
}
div.requirements-list {
  margin-bottom:3rem;
  div.requirement {
    margin-bottom:5rem;
    img {
      border:1px solid color-mix(in srgb, $gray 35%, transparent);
      margin-top:1.5rem;
      border-radius: 0.25rem;
    }
  }
}

</style>
