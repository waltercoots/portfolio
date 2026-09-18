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
        <h1>Hello, Ollie</h1>
        <p>I know you’re going through a lot of applications, so I’ve put together some highlights on how I align with what you’re looking for.</p>
        <p>Ollie needs someone who can move fast on DTC subscription work without losing craft, and who's actually comfortable putting AI tools into a live workflow rather than just talking about it. I can do this!</p>
      </header>
<div class="requirements-list">

  <div class="requirement">
    <h2>Subscription and Checkout</h2>
    <p>At EverlyWell I built the subscription model into both the patient results platform and the marketing site checkout for an at-home lab test product. I also worked on the Hallmark website with their Crown Rewards program, sign up and sign in flows, and PDP design for their greeting cards.</p>
    <img src="/assets/img/job-apps/nice-interfaces.png" alt="" />
  </div>

  <div class="requirement">
    <h2>AI Tools in an Actual Production Workflow</h2>
    <p>I used Claude Code and AI-generated prototypes to carry post-acquisition integration work at WorkStep, under a compressed timeline. This posting specifically wants someone using Claude or Figma Make to explore and accelerate design work, and applying judgment about output quality rather than accepting it blindly, which is exactly how I've been working.</p>
    <img src="/assets/img/job-apps/use-of-ai.png" alt="A screenshot of my Claude usage as of recently" />
  </div>

  <div class="requirement">
    <h2>Moving Fast Through Ambiguity</h2>
    <p>I was first designer at Unilease, an early-stage commercial real estate platform, where there was no existing research, no design system, and no playbook. Insitome was the same story in genomics. Both taught me how to make sound decisions on incomplete information without stalling out waiting for more certainty.</p>
    <img src="/assets/img/job-apps/content-strategy.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Design System Consistency Under Pressure</h2>
    <p>Building WorkStep's design system from scratch means I know what it takes to keep a fast-moving roadmap visually and functionally consistent instead of accumulating one-off screens, which matters a lot on an accelerated year-end timeline like the one this role is stepping into.</p>
    <img src="/assets/img/job-apps/design-systems@2x.png" alt="Example design system from a project with Halliburton" />
  </div>

  <div class="requirement">
    <h2>Where I'm honest about the gap</h2>
    <p>This is a 20 hour a week, 60 to 90 day contract, and my search has otherwise been aimed at full-time roles. I'd go into this clear-eyed that it's a part-time engagement with a possible, not guaranteed, path to full-time. I also haven't worked inside Jira day to day recently, though I've used comparable structured product-development tools and pick up workflow tooling quickly.</p>
    <img src="/assets/img/job-apps/collaborative.png" alt="Me and the Unilease team in a Zoom call" />
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
