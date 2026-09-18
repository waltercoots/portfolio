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
        <h1>Hello, DuckDuckGo</h1>
        <p>I know you’re going through a lot of applications, so I’ve put together some highlights on how I align with what you’re looking for.</p>
        <p>DuckDuckGo wants a designer who codes as a real, current practice, not a designer who once knew HTML. Here's how I'd actually stack up against that.</p>
      </header>
<div class="requirements-list">

  <div class="requirement">
    <h2>Prototyping in Code</h2>
    <p>Years ago, I was equal parts dev and designer. About 10 years ago I decided to focus fully on design, and my coding abilities languished a bit. But I kept myself sharp by always coding my own portfolio, and would take on small freelance jobs on the side. Now with AI in the mix, the gaps that I'm missing are easily closed, and I've been coding more this year than the past 5 combined.</p>
    <img src="/assets/img/job-apps/report-cards.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Design Systems Built From the Token Layer Up</h2>
    <p>I built WorkStep's design system from scratch in Figma, structuring primitive and semantic token layers so design and code stayed in parity, not just a component inventory but the naming and layering underneath it. That's cut UI bloat by 88% across dozens of features. This posting asks for exactly that distinction, and it's the part of design systems work most designers skip.</p>
    <img src="/assets/img/job-apps/design-systems@2x.png" alt="Example design system from a project with Halliburton" />
  </div>

  <div class="requirement">
    <h2>AI as an Accelerant, Not a Crutch</h2>
    <p>I use Claude Code and AI-generated prototypes as a standing part of my workflow, most recently to carry WorkStep's post-acquisition integration work under a real deadline. But the craft and the code-level judgment are still mine. That's the same balance this role asks for: leveraging AI without relying on it to cover for a gap in actual skill.</p>
    <img src="/assets/img/job-apps/use-of-ai.png" alt="A screenshot of my Claude usage as of recently" />
  </div>

  <div class="requirement">
    <h2>End-to-End Ownership, Start to Postmortem</h2>
    <p>I was first designer at Unilease, owning discovery through delivery with no existing playbook and no one to hand pieces off to. At WorkStep, AI Assistant went from early prototyping through production launch with me in the room for every tradeoff. That's the same full-ownership model DuckDuckGo describes, scoping and execution and the postmortem after.</p>
    <img src="/assets/img/job-apps/strategic-influence.png" alt="Sticky notes from an ideation session" />
  </div>

  <div class="requirement">
    <h2>Craft on Hard, Ambiguous Problems</h2>
    <p>The WorkStep IA re-architecture and the custom Report Builder both started as genuinely unstructured problems, a sprawling platform with no clear map, a BI tool with no existing pattern to follow. Getting from that kind of ambiguity to something people actually use daily is the harder version of design work, and it's the version I keep getting handed.</p>
    <img src="/assets/img/job-apps/info-architecture.png" alt="Information architecture work from the WorkStep IA re-architecture" />
  </div>

  <div class="requirement">
    <h2>Where I'm honest about the gap</h2>
    <p>I haven't worked in-house for any significant consumer brands, but during my years at T3 I designed for Fortune 500 clients like Halliburton and Hallmark. The design and code fundamentals transfer; the specific muscle of consumer-scale product intuition is the part I'd be building fastest on the job.</p>
    <img src="/assets/img/job-apps/nice-interfaces.png" alt="" />
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
