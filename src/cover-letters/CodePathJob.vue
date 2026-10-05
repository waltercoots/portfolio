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
        <h1>Hello, CodePath</h1>
        <p>I know you’re going through a lot of applications, so I’ve put together some highlights on how I align with what you’re looking for.</p>
        <p>I've been designing web products for over 20 years, and I've been the first or only designer more often than not: Unilease, EverlyWell, Insitome. Most recently I spent four years at WorkStep, where I restructured the platform's information architecture, built the design system from scratch, and designed our first LLM-powered features. I like the messy, uncharted parts of a product.</p>
      </header>
<div class="requirements-list">

  <div class="requirement">
    <h2>Untangling the parts nobody owns</h2>
    <p>WorkStep's re-architecture started as "the nav is confusing." The real problem was years of features bolted on by different teams had left a structure that matched our org chart instead of how customers worked. We rebuilt the information architecture around people's jobs, then redesigned navigation and dashboards to match. Accounts, onboarding, and navigation sound like the same kind of problem at CodePath.</p>
    <img src="/assets/img/job-apps/info-architecture.png" alt="Information architecture work from the WorkStep IA re-architecture" />
  </div>

  <div class="requirement">
    <h2>From ambiguous problem to build-ready spec</h2>
    <p>Lately my prototypes are built in Claude Code and much more interactive and collaborative. But when buttoned-down specs are still appropriate, I try to include a flow that shows every path including the ugly edge cases, detailed specs, and coded prototypes when interactions are hard to describe. Report Builder, broadcast messaging, and role-based permissions at WorkStep all went that route.</p>
    <img src="/assets/img/job-apps/design-specs.png" alt="Some specs I did of a design at WorkStep" />
  </div>

  <div class="requirement">
    <h2>Building a first design system</h2>
    <p>I've built two from nothing. At Insitome I made one system that kept responsive web and iOS consistent. At WorkStep I rebuilt everything in Figma with variables and tokens, cut component bloat by 85%, and built to WCAG AA. I also learned what to leave out. We stopped componentizing charts because Figma froze the data in place, and reviews went better once charts looked real. A first system should be small, opinionated, and used.</p>
    <img src="/assets/img/job-apps/design-systems@2x.png" alt="Example design system from a project with Halliburton" />
  </div>

  <div class="requirement">
    <h2>Running my own discovery</h2>
    <p>At Intuit I planned and ran research with tax professionals, people with zero patience during busy season. At Foxtrot I ran workshops, content audits, and persona work for clients like SXSW and Austin Film Society when nobody could agree on who the site was for. Without a dedicated researcher I keep it light: short conversations, something concrete for people to react to, and a write-up the team reads the same week.</p>
    <img src="/assets/img/job-apps/collaborative.png" alt="Me and some teammates meeting" />
  </div>

  <div class="requirement">
    <h2>Comfortable without a design org</h2>
    <p>At Unilease I was the only designer, working directly with the CEO and one engineer to take a broker platform from idea to launch. There was no design system, research team, or second opinion. You learn to prioritize by asking what blocks engineering next week, and to make decisions you can defend later instead of waiting for certainty.</p>
    <img src="/assets/img/job-apps/strategic-influence.png" alt="Sticky notes from an ideation session" />
  </div>

  <div class="requirement">
    <h2>Directing someone else's UI work</h2>
    <p>At T3 and Foxtrot I directed and mentored other designers on client work. The job was setting a clear direction, giving feedback that was specific enough to act on, and protecting their time to do the craft. I'd treat a UI contractor the same way. They'd get the flows, the system, and the reasoning, so the work comes back right the first time more often.</p>
    <img src="/assets/img/job-apps/precision-and-details.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Designing AI that helps people learn</h2>
    <p>I designed WorkStep's AI Assistant with data scientist Zack Keller and CPO Justin Butler. It read survey and retention data and told managers in plain language what changed and what to do. Adoption was strong because it met people where they were instead of making them read a dashboard. Tutoring and coaching raise the same questions: when to explain, when to step back, and how to make people trust it without overtrusting it.</p>
    <img src="/assets/img/job-apps/user-flow.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Front-end fluency</h2>
    <p>I write HTML, CSS, JavaScript, and Vue, and my portfolio is a Vue project I maintain myself. I prototype with Claude Code to a standard engineers can build from, and I used it for WorkStep's post-acquisition integration work. It means I know which design decisions are cheap and which ones eat a sprint, before I ask for them.</p>
    <img src="/assets/img/job-apps/content-strategy.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Education, then and now</h2>
    <p>Some of my earliest work was e-learning: applications and training videos for fitness professionals at KnightWorks. At Insitome I turned dense genetics research into apps regular people could learn from. At WorkStep my users were frontline workers, the people technical skills can move into better jobs. I care about who gets access to opportunity, and CodePath is working on that directly.</p>
    <img src="/assets/img/job-apps/nice-interfaces.png" alt="Some of the various mobile and web designs I've done" />
  </div>

  <div class="requirement">
    <h2>Where I'd be learning</h2>
    <p>I haven't designed a modern learner platform with career roadmaps, skills tracking, and grading. I'd want to start by talking to students, instructors, and the career coaching team before drawing anything. I also mostly work in plain CSS and Vue rather than Tailwind, though the utility-class approach maps closely to how I already think about tokens.</p>
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
