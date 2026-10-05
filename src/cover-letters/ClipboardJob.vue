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
        <h1>Hello, Clipboard</h1>
        <p>I know you’re going through a lot of applications, so I’ve put together some highlights on how I align with what you’re looking for.</p>
        <p>For the last four years I designed for both sides of a frontline workforce platform at WorkStep. Hourly workers answered surveys on their phones during breaks, and their managers used web dashboards to figure out who was about to quit. Before that, I was the only product designer at EverlyWell, a consumer health company. Clipboard puts those two things together, and I'd like to help make it feel as good as it works.</p>
      </header>
<div class="requirements-list">

  <div class="requirement">
    <h2>Designing for both sides</h2>
    <p>At WorkStep, every feature had two audiences who depended on each other. A survey only mattered if workers answered it, and answers only mattered if managers acted on them. If the worker side got clunky, the manager side went quiet. I learned to design both ends of a flow together and to watch the handoff between them. It's usually where things break.</p>
    <img src="/assets/img/job-apps/user-flow.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Owning an area with little oversight</h2>
    <p>I was the only product designer at EverlyWell from Series A to Series B, and the first designer at Unilease. Nobody was checking my work before it went to engineering, so I learned to check it myself: define the problem, explore a few directions, test the strongest one, and own what shipped. At EverlyWell that meant the lab results experience and a product page redesign that lifted sales 25%.</p>
    <img src="/assets/img/job-apps/info-architecture.png" alt="Information architecture work from the WorkStep IA re-architecture" />
  </div>

  <div class="requirement">
    <h2>Framing ambiguous problems</h2>
    <p>Untangling WorkStep started as "the navigation is confusing." Working with Senior PM Natalie Dole, I reframed it. The product's structure matched our org chart instead of how customers worked. Once everyone could see that, the redesign almost argued for itself. Most of my best work starts by rewriting the problem statement before drawing anything.</p>
    <img src="/assets/img/job-apps/strategic-influence.png" alt="" />
    
  </div>

  <div class="requirement">
    <h2>Sweating the craft</h2>
    <p>For WorkStep's design system I built the color palette with naming and contrast baked in, so every color met WCAG AA. I set type on a modular scale instead of picking sizes by feel. For motion, I've animated in After Effects and Lottie, and recently built hand-drawn frame-by-frame web animations with SVG sprites because I wanted the wobbly lines to survive. Details like these are what make a product feel cared for.</p>
    <img src="/assets/img/job-apps/precision-and-details.png" alt="A closeup of a spec I did calling out a specific shadow" />
  </div>

  <div class="requirement">
    <h2>Working within a system and improving it</h2>
    <p>I rebuilt WorkStep's design system from scratch with Figma variables and tokens and cut component bloat by 85%. I also learned when not to componentize. We stopped building charts as components because Figma locked the data in place, and reviews went better once the charts looked real. Coming into an existing system, I'd learn its logic first and then push to improve it.</p>
    <img src="/assets/img/job-apps/design-systems@2x.png" alt="Example design system from a project with Halliburton" />
  </div>

  <div class="requirement">
    <h2>Customers and data together</h2>
    <p>I trust data to tell me what's happening and conversations to tell me why. At EverlyWell an A/B test proved the product page redesign worked. At WorkStep we watched AI Assistant adoption after launch to decide what to build next. At Intuit I planned and ran research with tax professionals. I want both signals before I change something people rely on every day.</p>
    <img src="/assets/img/job-apps/report-cards.png" alt="Cards from a report builder I designed" />
  </div>

  <div class="requirement">
    <h2>AI throughout the process</h2>
    <p>I use Claude for research synthesis, competitive scans, and copy drafts. I build working prototypes in code with Claude Code, and I've been designing in Figma through its MCP integration. I used it for WorkStep's post-acquisition integration work, and my portfolio is a Vue project I maintain myself. The real win is showing a working version and letting the conversation start there.</p>
    <img src="/assets/img/job-apps/use-of-ai.png" alt="A screenshot of my Claude usage as of recently" />
  </div>

  <div class="requirement">
    <h2>Where I'd be learning</h2>
    <p>My native app experience is thinner than I'd like. I designed Insitome's iOS app in 2017, and I haven't shipped on Android. My recent mobile work was mobile web for WorkStep's frontline workers. To close the gap I'm designing a native mobile app and its design system on the side right now, built for both platforms' conventions.</p>
    <img src="/assets/img/job-apps/nice-interfaces.png" alt="Some of the various mobile and web designs I've done" />
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
