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
        <h1>Hello, Partly</h1>
        <p>I know you’re going through a lot of applications, so I’ve put together some highlights on how I align with what you’re looking for.</p>
        <p>For four years I designed for frontline operators at WorkStep: site managers who ran busy, physical workplaces and used our product between phone calls. My favorite project there was an AI assistant that let them select what they'd like to see and get useful answers back. Repairers sound like the same kind of people, and designing the system you're workin gon sounds like one of the most interesting design problems around right now.</p>
      </header>
<div class="requirements-list">

  <div class="requirement">
    <h2>Designing AI people trust</h2>
    <p>I led the design on WorkStep's AI Assistant. Managers selected what they wanted to see, and got insights and notifications back in plain language. The hardest calls were about what level of details to surface at which junctures, and how those details were prioritized. Adoption was strong because it saved time without asking people to take it on faith.</p>
    <img src="/assets/img/job-apps/user-flow.png" alt="" />
  </div>

  <div class="requirement">
    <h2>A design system engineers and agents reach for</h2>
    <p>I rebuilt WorkStep's design system from scratch with Figma variables and tokens, cut component bloat by 85%, and built to WCAG AA contrast. I also learned what <em>not</em> to systematize. We stopped building charts as components because Figma froze the data in place. Now I work through Figma's MCP integration with Claude Code, and it's changing how I approach design systems, documentation, and more.</p>
    <img src="/assets/img/job-apps/design-systems@2x.png" alt="Example design system from a project with Halliburton" />
  </div>

  <div class="requirement">
    <h2>Real prototypes, no hand-offs</h2>
    <p>I build working prototypes in code with Claude Code to a standard engineers can build from, including WorkStep's post-acquisition integration work. A prototype running on real data answers questions a mockup can't, and it shows me when my idea only works with fake data. I'd rather sit with an engineer and polish the details together than throw a Figma file over the wall.</p>
    <img src="/assets/img/job-apps/nice-interfaces.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Holding the bar across products</h2>
    <p>Untangling WorkStep started as a navigation complaint. With our senior PM, I found the real problem: years of features added by different teams meant the same job looked different depending on where you were. We fixed it at the structure, not page by page. Doing that across several product teams, while respecting that each lead owns their product, is the part of this role I'd most want to get right.</p>
    <img src="/assets/img/job-apps/info-architecture.png" alt="Information architecture work from the WorkStep IA re-architecture" />
  </div>

  <div class="requirement">
    <h2>Craft for dense, technical tools</h2>
    <p>Most of my WorkStep work was dense: dashboards, interactive charts, and a custom report builder. The first version of the report builder was messy, and watching customers use it after launch taught me more than the spec did. Making a technical tool look considered comes down to hierarchy, restraint, and handling the empty, broken, and overloaded states as carefully as the happy path.</p>
    <img src="/assets/img/job-apps/report-cards.png" alt="Cards from a report builder I designed" />
  </div>

  <div class="requirement">
    <h2>Giving the product a voice</h2>
    <p>I write a lot, and I think copy is design. For AI Assistant, phrasing was half the work: when to be brief, when to explain, and how to say "I'm not sure" without sounding useless. A repairer between phone calls needs an agent that gets to the point, and a voice they recognize on every screen.</p>
    <img src="/assets/img/job-apps/content-strategy.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Time with customers</h2>
    <p>At Intuit I ran research with tax professionals, people with decades of habit and no patience during busy season. At WorkStep my users were rarely at a desk, so I learned to keep sessions short and show up with something concrete to react to. I'd want to spend real time in workshops, watching how a quote actually gets built before deciding what an agent should take over.</p>
    <img src="/assets/img/job-apps/collaborative.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Where I'd be learning</h2>
    <p>AI Assistant answered questions and surfaced insights, but it didn't take action on anyone's behalf. I haven't yet shipped an agent that decides what to do alone, what to propose, and what to ask, or set up evaluation for those calls. I'm building one on my own time now so I can make those decisions for real and learn which ones I got wrong.</p>
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
