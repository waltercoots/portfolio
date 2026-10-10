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
        <h1>Hello, Ramp</h1>
        <p>I know you’re going through a lot of applications, so I’ve put together some highlights on how I align with what you’re looking for.</p>
        <p>I've spent 20+ years designing software, including Head of Design and Lead roles, and most recently four years at WorkStep, where I rebuilt the design system from scratch and led a platform-wide IA overhaul through 4x growth and an acquisition. What I care about most is turning taste into something other people can use: patterns, rules, and tools that make good work the default. Ramp's idea of a design system built for designers, engineers, and agents alike is the version of this job I've been working toward.</p>
      </header>
<div class="requirements-list">

  <div class="requirement">
    <h2>Building a system people actually use</h2>
    <p>I rebuilt WorkStep's design system to replace one that had grown messy and hard to trust. Figma variables finally gave us a real token layer, so I organized it around color and breakpoint collections with their own modes, cut component bloat by 85%, and built every color pairing to WCAG AA. The goal was simple: when an engineer reached for a component, it should be the right one, without a designer checking.</p>
    <img src="/assets/img/job-apps/design-systems@2x.png" alt="Example design system from a project with Halliburton" />
  </div>

  <div class="requirement">
    <h2>Knowing what not to standardize</h2>
    <p>We started out building every chart as a component, since we used so many. It backfired. Figma locked the data in place, stakeholders fixated on fake numbers, and we maintained variants nobody could really use. So we replaced them with a rule: draw each chart fresh from shared color, type, and spacing styles. A good system makes great work easier without making everything look the same, and sometimes that means writing a rule instead of building a component.</p>
    <img src="/assets/img/job-apps/precision-and-details.png" alt="A closeup of a spec I did calling out a specific shadow" />
  </div>

  <div class="requirement">
    <h2>Composition and patterns, beyond components</h2>
    <p>Untangling WorkStep started as a navigation complaint. With our senior PM, I found the real problem: years of features built by different teams had left a structure that matched our org chart, not our customers' jobs. Rebuilding the information architecture gave teams a shared map for where new work belongs and how screens should fit together. That's the layer above components that most systems never reach.</p>
    <img src="/assets/img/job-apps/info-architecture.png" alt="Information architecture work from the WorkStep IA re-architecture" />
  </div>

  <div class="requirement">
    <h2>Visual and interaction craft in dense products</h2>
    <p>Most of my recent work is dense: tables, filters, dashboards, and charts for people managing thousands of workers across many sites. Craft there comes down to typography, hierarchy, density, and the states beyond the happy path, like empty, broken, and overloaded. At EverlyWell, a redesigned and A/B tested product page lifted sales 25%, which reminded me that craft is about helping people act, not just looking good.</p>
    <img src="/assets/img/job-apps/nice-interfaces.png" alt="Some of the various mobile and web designs I've done" />
  </div>

  <div class="requirement">
    <h2>Hands-on in code and AI</h2>
    <p>I prototype in code every day with Claude Code and Cursor, and I design through Figma's MCP integration. I built production-viable prototypes for WorkStep's post-acquisition integration work, and my portfolio is a Vue project I maintain myself. My habit with AI is to have it plan before it builds, inspect what comes back, and push past the first answer. It's a fast collaborator and an unreliable judge, and the job is knowing the difference.</p>
    <img src="/assets/img/job-apps/use-of-ai.png" alt="A screenshot of my Claude usage as of recently" />
  </div>

  <div class="requirement">
    <h2>Making judgment usable by agents</h2>
    <p>Working through Figma's MCP integration changed how I think about design systems. Names, rules, and guidance now have to read clearly to a model, not just to a designer skimming docs. A vague rule a human can work around becomes a confident mistake when an agent follows it. I'd want Ramp's system guidance to be as precise as its components.</p>
    <img src="/assets/img/job-apps/content-strategy.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Measuring quality</h2>
    <p>Usage numbers tell you people opened a tool, not whether their work got better. I'd measure the system against real tasks: can someone build a common screen faster, with fewer review comments and less rework, than they could without it? AI makes that kind of evaluation finally practical, for checking off-token colors, contrast, and spacing drift automatically, and for comparing what builders ship before and after.</p>
    <img src="/assets/img/job-apps/report-cards.png" alt="Cards from a report builder I designed" />
  </div>

  <div class="requirement">
    <h2>Leading and developing people</h2>
    <p>As Head of Design at Unilease I set the design standards and product direction from scratch. At T3 and Foxtrot I mentored and directed other designers, ran critiques, and helped with hiring. I believe in feedback that's direct and specific, given early and given kindly. Growing a team of people who build the tools everyone else uses is the role I want next.</p>
    <img src="/assets/img/job-apps/collaborative.png" alt="Me and some teammates meeting" />
  </div>

  <div class="requirement">
    <h2>Where I'd be learning</h2>
    <p>I haven't formally managed a team through hiring, reviews, and growth plans, though I've directed and mentored designers for years. My largest system served one growth-stage platform, not a company Ramp's size. I also haven't built formal evaluations for design quality yet, which is exactly the kind of problem I'd be excited to work through with your team.</p>
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
