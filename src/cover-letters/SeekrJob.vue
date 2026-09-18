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
        <h1>Hello, Seekr</h1>
        <p>I know you’re going through a lot of applications, so I’ve put together some highlights on how I align with what you’re looking for.</p>
        <p>Seekr wants someone who can own a major product area end to end, think in systems, and use AI tools as a real part of the workflow instead of a side experiment. Here's where my background lines up.</p>
      </header>
<div class="requirements-list">

  <div class="requirement">
    <h2>Design System Stewardship</h2>
    <p>I built WorkStep's design system from scratch in Figma, variables, tokens, aliasing, the whole structure, and cut UI bloat by 88% across dozens of features in the process. That's not a system I inherited and lightly maintained. I made the decisions about what got tokenized, what got aliased, and how engineering would actually use it day to day.</p>
    <img src="/assets/img/job-apps/design-systems@2x.png" alt="Example design system from a project with Halliburton" />
  </div>

  <div class="requirement">
    <h2>AI Tools as a Daily Habit</h2>
    <p>The posting specifically wants fluent, active use. I used Claude Code and AI-generated prototypes to carry WorkStep's post-acquisition integration work under a real deadline, compressing ideation and prototyping loops on live production work. That's the difference between having played with an AI tool once and actually shipping with one.</p>
    <img src="/assets/img/job-apps/use-of-ai.png" alt="A screenshot of my Claude usage as of recently" />
  </div>

  <div class="requirement">
    <h2>Systems-Level UX for Complex Workflows</h2>
    <p>I led a site-wide IA re-architecture at WorkStep, taking a sprawling enterprise platform and turning it into something coherent and task-based for hundreds of thousands of daily users. I also designed a custom Report Builder, a BI tool with a card-stack interface, from ambiguous data requirements through to something people actually used. That's the same muscle Seekr needs for multi-step AI workflows: defining structure where none exists yet.</p>
    <img src="/assets/img/job-apps/report-cards.png" alt="Cards from a report builder I designed" />
  </div>

  <div class="requirement">
    <h2>Cross-Functional Partnership With Product and Engineering</h2>
    <p>AI Assistant, an LLM-powered insights tool, was built shoulder to shoulder with a data scientist and our CPO, from early prototyping through launch. I'm used to being in the room for the tradeoffs, and being selective over which hills I'll die on.</p>
    <img src="/assets/img/job-apps/collaborative.png" alt="Me and some teammates meeting" />
  </div>

  <div class="requirement">
    <h2>Communicating to Technical and Executive Audiences at Once</h2>
    <p>Presenting design rationale to executive leadership has been a constant across roles, and WorkStep specifically meant translating AI-driven features for both the CPO and the engineers building them. Explaining a decision so it holds up in both conversations is a specific skill, and it's one I've had to use weekly, not occasionally.</p>
    <img src="/assets/img/job-apps/strategic-influence.png" alt="Sticky notes from an ideation session" />
  </div>

  <div class="requirement">
    <h2>Where I'm honest about the gap</h2>
    <p>I haven't designed specifically for AI/ML engineers, data scientists, or MLOps practitioners as a named audience. My technical users have been frontline ops and HR staff, not people building models. I also don't have government experience, and the most strenuous regulation I've worked under is HIPAA compliance. But I've made unfamiliar, technical domains legible before, in genomics at Insitome and in enterprise data at WorkStep, and I believe the specific vocabulary of ML workflows and RAG pipelines is something I could ramp up on.</p>
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
