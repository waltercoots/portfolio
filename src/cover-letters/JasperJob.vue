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
        <h1>Hello, Jasper</h1>
        <p>I know you’re going through a lot of applications, so I’ve put together some highlights on how I align with what you’re looking for.</p>
        <p>Some of my favorite work has been the first version of something: the first designer at Unilease, the only product designer at EverlyWell, and the AI assistant I designed at WorkStep with our data scientist and CPO. I also spent years at agencies designing marketing sites and campaigns for brands like Hallmark, so I know what marketing teams are up against!</p>
      </header>
<div class="requirements-list">

  <div class="requirement">
    <h2>Taking ideas from 0 to 1</h2>
    <p>WorkStep's AI Assistant started as a question: managers had piles of survey data and no time to read dashboards, so what if the product just told them what changed? I worked with our data scientist Zack Keller and CPO Justin Butler to shape the idea, scope a first version, and get it into customers' hands. Adoption was strong, and watching how people used it after launch told us what to build next.</p>
    <img src="/assets/img/job-apps/user-flow.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Shaping what to build</h2>
    <p>At Unilease I was the first designer, working directly with the CEO and engineering. Nobody handed me a backlog. I helped decide what the product should be, designed the MVP for commercial real estate brokers, and built the marketing site that supported fundraising. Early-stage work rewards bringing ideas and having opinions, and I'm comfortable doing both.</p>
    <img src="/assets/img/job-apps/strategic-influence.png" alt="Sticky notes from an ideation session" />
  </div>

  <div class="requirement">
    <h2>Prototyping to learn</h2>
    <p>I build high-fidelity prototypes in code with Claude Code and Cursor, using realistic data so the conversation is about real behavior, not mockups. I did this for WorkStep's post-acquisition integration work, and my portfolio is a Vue project I maintain myself. A working prototype is also the fastest way to find out when ideas aren't working well, which saves resources for the ones that are!</p>
    <img src="/assets/img/job-apps/nice-interfaces.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Closing the loop after launch</h2>
    <p>The first version of WorkStep's report builder was messy, and watching customers use it showed me what was good about it and where it stood to be improved. Later releases allowed us to improve and polish it. At EverlyWell I redesigned and A/B tested our product page and got a 25% lift in sales. I want things to accomplish the business goals, not just ship!</p>
    <img src="/assets/img/job-apps/report-cards.png" alt="Cards from a report builder I designed" />
  </div>

  <div class="requirement">
    <h2>Designing AI people trust</h2>
    <p>The hard parts of AI Assistant were all about trust: how confident to sound, how much reasoning to show, and when to send someone to the real data instead of a summary. Marketing agents face similar questions, and in some cases higher stakes since their output carries a brand's name. Approvals, edits, and clear handoffs between agent and person are where I'd want to focus.</p>
    <img src="/assets/img/job-apps/content-strategy.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Craft in complex workflows</h2>
    <p>Most of my recent work is dense: tables, filters, dashboards, permissions, and multi-step flows like WorkStep's confidential broadcast messaging with its custom segment builder. I design the empty, broken, and overloaded states as carefully as the happy path, and I built WorkStep's color system so every pairing met WCAG AA.</p>
    <img src="/assets/img/job-apps/user-flow.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Shared patterns and a stronger team</h2>
    <p>I rebuilt WorkStep's design system from scratch with Figma variables and tokens and cut component bloat by 85%. At T3 and Foxtrot I mentored designers and ran critiques. Good shared patterns free designers to spend their time on the new, hard problems instead of rebuilding the same table again.</p>
    <img src="/assets/img/job-apps/design-systems@2x.png" alt="Example design system from a project with Halliburton" />
  </div>

  <div class="requirement">
    <h2>Driving decisions with partners</h2>
    <p>Every project on my resume has a name attached to it because none of them happened solo. AI Assistant was built with a data scientist and a CPO. The design system exists because engineering needed it as much as design did. I'm used to being the person translating between domain experts, product, and engineering, not just handing off a file.</p>
    <img src="/assets/img/job-apps/collaborative.png" alt="Information architecture work from the WorkStep IA re-architecture" />
  </div>

  <div class="requirement">
    <h2>Where I'd be learning</h2>
    <p>I haven't designed agents that run marketing work autonomously, and enterprise marketing governance, like brand compliance and approvals, would be new territory. I also work in Git on my own projects, but shipping design changes through pull requests into a production codebase is something I'd want to grow into quickly.</p>
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
