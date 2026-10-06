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
        <h1>Design Systems</h1>
        <p>Design systems are where I do my best work. Over 20 years I've built them for consumer apps, media platforms, and most recently WorkStep, an HR and workforce platform used by PepsiCo, PetSmart, and JB Hunt. I care less about the component library itself and more about the decisions behind it: what should be shared, what should stay flexible, and how a sprawling product starts to feel like one thing.</p>
      </header>
<div class="requirements-list">

  <div class="requirement">
    <h2>Building a system from scratch</h2>
    <p>I rebuilt WorkStep's design system to replace one that had gotten long in the tooth. Figma variables finally gave us a real token layer, so I organized it around color and breakpoint collections, each with its own modes. I cut component bloat by 85% and built every color pairing to meet WCAG AA. I also learned some things the hard way, like how libraries pass variables to each other and why splitting atoms and molecules into separate files doubled everyone's menus.</p>
    <img src="/assets/img/job-apps/design-systems@2x.png" alt="Example design system from a project with Halliburton" />
  </div>

  <div class="requirement">
    <h2>Knowing what to standardize</h2>
    <p>We started building every chart as a component, since we used so many. It backfired. Line, area, and scatter charts were frozen to whatever data they were built with, stakeholders fixated on fake numbers, and we spent time maintaining variants nobody could really use. We switched to drawing each chart fresh from shared styles. It took more design effort, but reviews improved and maintenance dropped. A good system knows where sameness helps and where it gets in the way.</p>
    <img src="/assets/img/job-apps/report-cards.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Making many products feel like one</h2>
    <p>I've led multiple projects where I've revamped the information architecture, navigation, and layout of complex sites and apps. Most recently, I redid the architecture at WorkStep which was B2B SaaS. But prior to that I've also worked on more consumer projects such as the Austin Film Society, and EverlyWell.</p>
    <img src="/assets/img/job-apps/info-architecture.png" alt="Information architecture work from the WorkStep IA re-architecture" />
  </div>

  <div class="requirement">
    <h2>Patterns for dense B2B work</h2>
    <p>Most of my WorkStep work was dense: tables, filters, dashboards, a custom report builder, permissions, and multi-step admin flows. These are the patterns that show up in every product on a platform like this, so getting them right once matters a lot. I design the empty, broken, and overloaded states as carefully as the happy path, because that's where inconsistency shows first.</p>
    <img src="/assets/img/job-apps/user-flow.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Prototyping and shipping in code</h2>
    <p>I prototype in code daily with Claude Code and Cursor, and I design through Figma's MCP integration. I built production-viable prototypes for WorkStep's post-acquisition integration work, and my portfolio is a Vue project I maintain myself. Working close to code tells me which design decisions are cheap and which ones will cost engineering a sprint.</p>
    <img src="/assets/img/job-apps/content-strategy.png" alt="" />
  </div>

  <div class="requirement">
    <h2>AI tools for design quality</h2>
    <p>Using agentic tools every day has changed how I think about systems. Names, rules, and documentation now have to read clearly to a model, not just to a designer. The next step is using those same tools to check the work: catching contrast failures, off-token colors, and spacing drift before they ship. I'd love to build that for a platform this size, where no human can review every screen.</p>
    <img src="/assets/img/job-apps/use-of-ai.png" alt="A screenshot of my Claude usage as of recently" />
  </div>

  <div class="requirement">
    <h2>Web and mobile, one language</h2>
    <p>At Insitome we built native iOS and responsive web in parallel, and I created a platform-agnostic design system so both felt like the same product. At Hallmark I designed sign-up and loyalty flows across desktop, tablet, and mobile. A shared visual and interaction language has to flex to each platform's conventions without losing what makes it recognizable.</p>
    <img src="/assets/img/job-apps/nice-interfaces.png" alt="Some of the various mobile and web designs I've done" />
  </div>

  <div class="requirement">
    <h2>Raising quality across teams</h2>
    <p>At T3 and Foxtrot I mentored designers, reviewed work, and set standards. At Unilease and EverlyWell I was the only designer, so the bar was whatever I set. Raising quality across many teams comes down to making the right choice the easy one: clear patterns, good defaults, and tools that catch mistakes early instead of relying on someone to notice.</p>
    <img src="/assets/img/job-apps/collaborative.png" alt="Me and some teammates meeting" />
  </div>

  <div class="requirement">
    <h2>Where I'd be learning</h2>
    <p>The biggest system I've built served one platform at a growth-stage company, not 40 products and 18 engineers. I'd expect to spend my first months learning how decisions actually get made and adopted across teams. My mobile design system work is also older. I'm designing a native mobile app and design system on the side right now to get current.</p>
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
