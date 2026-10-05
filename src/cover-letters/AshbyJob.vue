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
        <h1>Hello, Chris and the Ashby team</h1>
        <p>I know you’re going through a lot of applications, so I’ve put together some highlights on how I align with what you’re looking for.</p>
        <p>For four years I designed WorkStep, an HR tech platform for frontline workforces, through 4x growth and an acquisition. Before that I was the only designer at two startups. I'm happiest owning a hard problem from the first question to the last detail, and writing down why I made the calls I made. Ashby's way of working reads like a description of the job I've been trying to do all along.</p>
      </header>
<div class="requirements-list">

  <div class="requirement">
    <h2>Layout, navigation, and IA</h2>
    <p>I've led multiple projects where I've revamped the information architecture, navigation, and layout of complex sites and apps. Most recently, I redid the architecture at WorkStep which was B2B SaaS. But prior to that I've also worked on more consumer projects such as the Austin Film Society, and EverlyWell.</p>
    <img src="/assets/img/job-apps/info-architecture.png" alt="Information architecture work from the WorkStep IA re-architecture" />
  </div>

  <div class="requirement">
    <h2>Tools that are approachable for beginners and scale for power users</h2>
    <p>WorkStep's Report Builder is a great example of something I worked on that scaled for a variety of users at different levels. Selecting a metric and defaulting to a way to slice it, but then allowing power users to add filters, change settings such as the scope of data it was applied to, and whose dashboard it could be pinned to, led to wide adoption and a lot of love for it.</p>
    <img src="/assets/img/job-apps/report-cards.png" alt="Cards from a report builder I designed" />
  </div>

  <div class="requirement">
    <h2>Standards that let others make good decisions</h2>
    <p>I rebuilt WorkStep's design system from scratch with Figma variables and tokens, cut component bloat by 85%, and built to WCAG AA. It's a balancing act of affording people flexibility, speed, and making everything feel like it came from the same place, and doing this again wouldn't be my first rodeo.</p>
    <img src="/assets/img/job-apps/design-systems@2x.png" alt="Example design system from a project with Halliburton" />
  </div>

  <div class="requirement">
    <h2>Thinking from first principles, in writing</h2>
    <p>I've been remiss that the places I've worked haven't codified principles to help guide teams. Most of them were just too small for the effort to be worth it, but I've always had my own. Dieter Rams is a great source for this, but I've also really admired Slack's principles.</p>
    <img src="/assets/img/job-apps/content-strategy.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Part designer, part PM</h2>
    <p>At Unilease I was the only designer, working directly with the CEO and engineering. Nobody briefed me. I scoped problems, set priorities, and kept engineering aligned on what to build next. At EverlyWell I was the sole product designer from Series A to Series B. I'm comfortable without a PM handing me a brief, and collaborating on decisions with the broader team.</p>
    <img src="/assets/img/job-apps/strategic-influence.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Craft in dense, technical products</h2>
    <p>Most of my recent work is dense: tables, filters, dashboards, and charts for people managing thousands of workers across many sites. Craft in that context is hierarchy, restraint, and handling the empty, broken, and overloaded states as carefully as the happy path. It's also why my intuition can usually solve a usability problem before I need a study to confirm it.</p>
    <img src="/assets/img/job-apps/nice-interfaces.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Consulting engineers, not handing off</h2>
    <p>I prototype in code with Claude Code to a standard engineers can build from, and I'd rather sit with an engineer to sort out layout and typography than throw a file over the wall. My portfolio is a Vue project I maintain myself. Knowing what's expensive to build makes my design suggestions cheaper to say yes to.</p>
    <img src="/assets/img/job-apps/design-specs.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Where I'd be learning</h2>
    <p>I haven't worked on an applicant tracking system, and while WorkStep had a "HIRE" platform I was responsible for when I joined, it only handled scheduling, not interviewer load or training. I've been on the candidate side of Ashby many times though, and have seen many recruiters comiserating on TikTok, so I have some understanding that could lead me into learning more during recruiter shadowing sessions.</p>
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
