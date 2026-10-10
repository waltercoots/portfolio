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
        <h1>Hello, Arrive Logistics</h1>
        <p>I know you’re going through a lot of applications, so I’ve put together some highlights on how I align with what you’re looking for.</p>
        <p>For four years I designed WorkStep, a platform used across warehouses, distribution centers, and logistics companies like JB Hunt and PepsiCo. My users ran fast, physical operations and checked our product between a dozen other things, so every extra click cost them. Arrive's reps and operations teams sound like the same kind of people, and designing tools that help freight move faster is the work I like most.</p>
      </header>
<div class="requirements-list">

  <div class="requirement">
    <h2>Dense interfaces with clear hierarchy</h2>
    <p>Most of my WorkStep work was dense: tables, filters, dashboards, and charts for managers tracking thousands of workers across many sites. The trick is deciding what deserves attention at a glance and what can wait a click. I design the empty, broken, and overloaded states as carefully as the happy path, because in an operational tool, that's where people actually spend their day.</p>
    <img src="/assets/img/job-apps/nice-interfaces.png" alt="Some of the various mobile and web designs I've done" />
  </div>

  <div class="requirement">
    <h2>Taking friction out of repeated tasks</h2>
    <p>When someone does the same task forty times a day, small friction adds up fast. At Intuit I designed for tax professionals during busy season, people with zero patience for an extra screen. That taught me to watch for the clicks people make without thinking and to treat each one as a cost. Speed comes from defaults, shortcuts, and keeping people in one place instead of bouncing between screens.</p>
    <img src="/assets/img/job-apps/user-flow.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Owning a team's area, framing to shipped UI</h2>
    <p>At WorkStep I worked with our PM and engineers from the first conversation to shipped UI and kept going after launch. Report Builder is the honest example. The first version was messy, and watching how customers really used it taught me what the spec missed. The next round was much better. I work best embedded in a sprint team, iterating fast and making calls together.</p>
    <img src="/assets/img/job-apps/report-cards.png" alt="Cards from a report builder I designed" />
  </div>

  <div class="requirement">
    <h2>Sharpening the problem before solving it</h2>
    <p>Untangling WorkStep started as "the navigation is confusing." Digging in with our senior PM, I found the real problem: years of features from different teams had left a structure that matched our org chart, not our customers' jobs. Fixing that was very different from shuffling menu items. I'd rather spend an extra day on the problem than a week on the wrong solution.</p>
    <img src="/assets/img/job-apps/info-architecture.png" alt="Information architecture work from the WorkStep IA re-architecture" />
  </div>

  <div class="requirement">
    <h2>Lightweight research with real users</h2>
    <p>At Intuit I planned and ran research and usability tests with professional users. At WorkStep my users were rarely at a desk, so I kept sessions short and always brought something concrete to react to. Having users on site at Arrive is a gift. I'd want to sit with reps during a busy shift to see where the tool gets in their way.</p>
    <img src="/assets/img/job-apps/strategic-influence.png" alt="Sticky notes from an ideation session" />
  </div>

  <div class="requirement">
    <h2>Contributing to the design system</h2>
    <p>I rebuilt WorkStep's design system from scratch with Figma variables and tokens, cut component bloat by 85%, and built to WCAG AA contrast. Working within someone else's system is a different job, and I like it. Learn its logic first, use it the way it's meant to be used, and contribute components back when a real gap shows up.</p>
    <img src="/assets/img/job-apps/design-systems@2x.png" alt="Example design system from a project with Halliburton" />
  </div>

  <div class="requirement">
    <h2>AI in my design process</h2>
    <p>I use Claude daily for research synthesis and first drafts, and I build working prototypes in code with Claude Code, including WorkStep's post-acquisition integration work. A prototype running on real data answers questions a static mockup can't, and it gets real reactions from users faster.</p>
    <img src="/assets/img/job-apps/use-of-ai.png" alt="A screenshot of my Claude usage as of recently" />
  </div>

  <div class="requirement">
    <h2>Critique and presenting rationale</h2>
    <p>I've mentored designers and run critiques at T3 and Foxtrot, and I like giving and getting feedback. Good critique is specific: what's working, what isn't, and why. When I present to stakeholders, I lead with the problem and the trade-offs in plain language, so the room argues about the decision instead of the pixels.</p>
    <img src="/assets/img/job-apps/collaborative.png" alt="Me and some teammates meeting" />
  </div>

  <div class="requirement">
    <h2>Where I'd be learning</h2>
    <p>I know logistics from the workforce side, but I haven't designed for freight brokerage itself: carrier sourcing, load booking, and the rest of a rep's day. I'd want to shadow reps and ops teams early to learn their vocabulary and where the real time goes before redesigning anything.</p>
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
