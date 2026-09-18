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
        <h1>Hello, Machinify</h1>
        <p>I know you’re going through a lot of applications, so I’ve put together some highlights on how I align with what you’re looking for.</p>
        <p>Machinify's asking for someone who can move between design thinking, research, and hands-on UX craft without losing the thread, and who can do it inside a domain most designers have never touched. Here's how that maps to work I've actually shipped.</p>
      </header>
<div class="requirements-list">

  <div class="requirement">
    <h2>Design Systems & Platform Design</h2>
    <p>This is listed as a bonus, but it's where I have the deepest evidence. I built WorkStep's design system from scratch in Figma, using variables, tokens, and aliasing to give engineering a single source of truth instead of dozens of one-off components. UI bloat dropped 88% across the product. That's the same muscle Machinify needs to keep a configurable, content-rich platform consistent as it scales across 85+ health plans.</p>
    <img src="/assets/img/job-apps/design-systems@2x.png" alt="Example design system from a project with Halliburton" />
  </div>

  <div class="requirement">
    <h2>Grasping Complex Business Requirements Fast</h2>
    <p>I've built a career out of getting dropped into domains I didn't know going in. Genomics at Insitome, where I mapped dense science content into onboarding flows so a first-time user didn't need a biology degree to understand what they were looking at. Regulated health data at EverlyWell. Frontline logistics and workforce ops at WorkStep. Healthcare claims and payment integrity would be new territory, but "make an unfamiliar, high-stakes domain legible to the person using it" is the actual job I keep doing.</p>
    <img src="/assets/img/job-apps/user-flow.png" alt="" />
  </div>

  <div class="requirement">
    <h2>AI-Powered Product Design</h2>
    <p>Machinify's platform is built around AI-driven insight, and I've designed for that directly. I led AI Assistant at WorkStep, an LLM-powered insights and notification tool, working alongside a data scientist and our CPO from early prototyping through launch. That meant designing for confidence signals and uncertainty, not just clean output, which is the harder design problem AI features actually pose.</p>
    <img src="/assets/img/job-apps/use-of-ai.png" alt="A screenshot of my Claude usage as of recently" />
  </div>

  <div class="requirement">
    <h2>UX Design & Documentation</h2>
    <p>Wireframes, mockups, prototypes, and the specs that get them built correctly are the daily work, not a checklist. The WorkStep IA re-architecture went from early flows through detailed documentation that development teams built against directly, for a platform used by hundreds of thousands of people who never work from a desk.</p>
    <img src="/assets/img/job-apps/design-specs.png" alt="Some specs I did of a design at WorkStep" />
  </div>

  <div class="requirement">
    <h2>Cross-Functional Collaboration</h2>
    <p>Every project on my resume has a name attached to it because none of them happened solo. AI Assistant was built with a data scientist and a CPO. The design system exists because engineering needed it as much as design did. I'm used to being the person translating between domain experts, product, and engineering, not just handing off a file.</p>
    <img src="/assets/img/job-apps/collaborative.png" alt="Me and the Unilease team in a Zoom call" />
  </div>

  <div class="requirement">
    <h2>Communication Under Pressure</h2>
    <p>Presenting design rationale to executive leadership has been a constant across roles, from EverlyWell's Series B to C growth phase to WorkStep's post-acquisition integration work. I've had to defend decisions to people who weren't in the room for the research, which forces you to know why you made a choice, not just that you made it.</p>
    <img src="/assets/img/job-apps/strategic-influence.png" alt="Sticky note session" />
  </div>

  <div class="requirement">
    <h2>Where I'm honest about the gap</h2>
    <p>I don't have direct healthcare payer, claims, or payment-integrity experience. My health-domain work is consumer-facing, EverlyWell's lab results platform and Insitome's genomics app, not the payer-side financial infrastructure Machinify operates in. What transfers is the pattern, not the vocabulary: I'd be learning the specifics of claims adjudication the same way I learned commercial real estate leasing at Unilease or frontline logistics at WorkStep, from the ground up and fast.</p>
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
