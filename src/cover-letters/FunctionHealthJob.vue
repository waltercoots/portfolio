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
        <h1>Hello, Function</h1>
        <p>I know you’re going through a lot of applications, so I’ve put together some highlights on how I align with what you’re looking for.</p>
        <p>I have twenty years in product design. Most recently, a design system at WorkStep that had to hold up under fast, AI-accelerated engineering, and before that, real commerce and subscription work at EverlyWell. Hands-on craft, systems thinking, AI-native product design, this is close to how I already work day to day.</p>
      </header>
<div class="requirements-list">

  <div class="requirement">
    <h2>Commerce and membership experience</h2>
    <p>At EverlyWell I redesigned product detail pages for lab test products. 25% sales increase. I also built the subscription model into both the results platform and the marketing site checkout. Purchase paths, membership flows, not new territory. It's actually where some of my clearest measured impact has come from.</p>
    <img src="/assets/img/job-apps/user-flow.png" alt="" />
  </div>

  <div class="requirement">
    <h2>A design system that holds up</h2>
    <p>WorkStep's design system, built from scratch in Figma, variables, tokens, aliasing, cut UI bloat by 88% across features built by teams I wasn't reviewing screen by screen. During post-acquisition integration I used Claude Code and AI-generated prototypes to keep pace with requirements that kept shifting. Close to the AI-accelerated engineering context you're describing here.</p>
    <img src="/assets/img/job-apps/design-systems@2x.png" alt="Example design system from a project with Halliburton" />
  </div>

  <div class="requirement">
    <h2>AI-native product experience</h2>
    <p>At WorkStep, I designed and launched an LLM-powered insights and notification tool. Built alongside a data scientist and our CPO, from early prototyping through production launch. Confidence, relevance, when the system should say something versus stay quiet, those were real design decisions, not an afterthought bolted onto a feature at the end. I'm also actively using Claude Code to rapidly prototype and test out multiple iterations of designs.</p>
       <img src="/assets/img/job-apps/use-of-ai.png" alt="A screenshot of my Claude usage as of recently" />
  </div>

  <div class="requirement">
    <h2>Consumer health and craft</h2>
    <p>Insitome and EverlyWell were both consumer health products. Genomics, lab results. Both demanded making complex, sometimes uncomfortable information feel clear and trustworthy instead of clinical or scary. Same instinct SuppIQ and TrustScore seem to be asking for.</p>
    <img src="/assets/img/job-apps/nice-interfaces.png" alt="Some of the various mobile and web designs I've done" />
  </div>

  <div class="requirement">
    <h2>Where I'm honest about the gap</h2>
    <p>My consumer mobile track record is thinner than my web and B2B history. Insitome's my strongest proof point there. I don't have a shelf of shipped consumer mobile products the way a lifelong consumer designer would, and I'd rather say that upfront than have it come up as a surprise later.</p>
    <img src="/assets/img/job-apps/report-cards.png" alt="Various card designs from a report builder I did" />
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
