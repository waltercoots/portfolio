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
        <h1>Hello, Zillow</h1>
        <p>I know you’re going through a lot of applications, so I’ve put together some highlights on how I align with what you’re looking for.</p>
        <p>Zillow's Marketing Web team needs someone who can set UX strategy for a CMS-driven design system and make the case for it with data, not just taste. Here's where my background lines up.</p>
      </header>
<div class="requirements-list">

  <div class="requirement">
    <h2>CMS Design Systems, Including a Real WordPress Migration</h2>
    <p>At the Daily Dot, we migrated from a custom CMS over to WordPress, and I also led design on the team responsible for componetizing and standardizing the design of the Halliburton website.</p>
    <img src="/assets/img/job-apps/report-cards.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Design Systems at Enterprise Scale</h2>
    <p>I built WorkStep's design system from scratch in Figma using variables, tokens, and aliasing, cutting UI bloat by 88% across dozens of features. Evolving a CMS component library for Zillow's marketing surfaces is the same underlying discipline: define the pattern once, make it self-service, and keep engineering out of the loop for standard use cases.</p>
    <img src="/assets/img/job-apps/design-systems@2x.png" alt="Example design system from a project with Halliburton" />
  </div>

  <div class="requirement">
    <h2>B2B and B2C Web Design for Fortune 500 Clients</h2>
    <p>Years at T3 had me designing marketing sites across desktop, tablet, and mobile for clients like Halliburton and Hallmark, plus IA and content strategy for Dimensional Fund Advisors. That's the same B2B-and-B2C range this role asks for, just under a different roof.</p>
    <img src="/assets/img/job-apps/nice-interfaces.png" alt="Some of the various mobile and web designs I've done" />
  </div>

  <div class="requirement">
    <h2>Design Decisions Tied to Measurable Results</h2>
    <p>At EverlyWell, a product detail page redesign drove a 25% increase in sales. I'm used to defending a design choice with a number, not just a rationale, which matters for a role that's explicitly asking someone to validate decisions with data and optimize toward conversion.</p>
    <img src="/assets/img/job-apps/user-flow.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Where I'm honest about the gap</h2>
    <p>My data analysis experience is real but informal, I've used performance numbers to justify decisions after the fact more than I've run structured A/B tests or built out analytics instrumentation myself. If this role expects someone fluent in a specific analytics stack driving day-to-day experimentation, that's a skill I'd be building on the job, not walking in with.</p>
    <img src="/assets/img/job-apps/strategic-influence.png" alt="Sticky notes from an ideation session" />
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
