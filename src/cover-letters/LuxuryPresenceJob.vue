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
        <h1>Hello, Luxury Presence</h1>
        <p>I know you’re going through a lot of applications, so I’ve put together some highlights on how I align with what you’re looking for.</p>
        <p>Luxury Presence wants someone who can own a product area end to end, with a high enough craft bar to earn trust on sight. Here's what I'd bring to it.</p>
      </header>
<div class="requirements-list">

  <div class="requirement">
    <h2>Design Systems, Reusable and Documented</h2>
    <p>I built many design system from scratch. WorkStep's system was built in Figma using variables, tokens, and aliasing so patterns were actually reusable instead of duplicated across features. UI bloat dropped 88% across the product. Lately I've been building systems even faster and more efficiently with Claude integrated with Figma.</p>
    <img src="/assets/img/job-apps/design-systems@2x.png" alt="Example design system from a project with Halliburton" />
  </div>

  <div class="requirement">
    <h2>Real Estate, From the Broker Side</h2>
    <p>I was first designer at Unilease, a commercial real estate SaaS platform, where I spent real time learning how brokers survey markets and match properties before I drew a single screen. It's B2B and brokerage-side rather than agent-facing, but the domain instincts, how real estate professionals actually think about their pipeline, transfer directly.</p>
    <img src="/assets/img/job-apps/collaborative.png" alt="Me and the Unilease team" />
  </div>

  <div class="requirement">
    <h2>Knowing When to Polish, When to Ship</h2>
    <p>Years at T3 doing Fortune 500 marketing work, an onboarding homepage for Halliburton, sign-up and loyalty flows for Hallmark, taught me the difference between a detail worth obsessing over and one that's just burning time. That judgment call is the actual craft skill, not the polish itself.</p>
    <img src="/assets/img/job-apps/precision-and-details.png" alt="A closeup of a spec I did calling out a specific shadow" />
  </div>

  <div class="requirement">
    <h2>End-to-End Ownership in a Defined Space</h2>
    <p>Every role on my resume has had me owning a lane independently. At Unilease I owned product and the marketing site at once. At WorkStep I took the IA re-architecture from early discovery through detailed, dev-ready execution. I don't need someone framing the problem for me before I can start.</p>
    <img src="/assets/img/job-apps/report-cards.png" alt="Cards from a report builder I designed" />
  </div>

  <div class="requirement">
    <h2>Where I'm honest about the gap</h2>
    <p>This is a contract role, and my search has mostly been aimed at permanent positions. Also worth naming: my real estate experience is B2B brokerage tooling, not agent-facing marketing sites, so the first few weeks would involve learning how individual agents actually use the platform day to day.</p>
    <img src="/assets/img/job-apps/content-strategy.png" alt="" />
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
