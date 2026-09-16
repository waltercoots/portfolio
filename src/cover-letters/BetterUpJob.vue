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
        <h1>Hello, BetterUp</h1>
        <p>I know you’re going through a lot of applications, so I’ve put together some highlights on how I align with what you’re looking for.</p>
        <p>I've spent 20 years web and product design, most recently leading design systems and AI-powered features at WorkStep. This role's mix of systems thinking and AI-forward workflow is close to exactly what I've been doing, just applied to a different platform mix than I'm used to. I'm actively working on a native mobile app on the side as well!</p>
      </header>
 <div class="requirements-list">
 
   <div class="requirement">
     <h2>Design system architecture and ownership</h2>
     <p>I built WorkStep's design system from scratch, including the token and variable structure in Figma once Variables shipped. Collections, modes, aliasing, the whole taxonomy. I made real tradeoffs along the way like consolidating into a single file after splitting them out first and hitting friction with duplicate variable menus across files. The kinds of things that you run into having actually used the system instead of just creating it.</p>
     <img src="/assets/img/job-apps/design-systems@2x.png" alt="Example design system from a project with Halliburton" />
   </div>
 
   <div class="requirement">
     <h2>AI-powered workflows</h2>
     <p>The AI Assistant I designed at WorkStep, notifications and insights for warehouse and supply chain managers, came out of close collaboration with a data scientist and shipped with strong adoption. That's the proof point. But AI is also just how I work day to day. Figma MCP is in my regular workflow now, and I'm using it right now to build a native mobile design system from the ground up for a landscaping app I'm developing in my free time. Tokens, component structure, documentation, all of it, built the same deliberate way I built WorkStep's.</p>
     <img src="/assets/img/job-apps/use-of-ai.png" alt="A screenshot of my Claude usage as of recently" />
   </div>
 
   <div class="requirement">
     <h2>Web and mobile platforms</h2>
     <p>My deepest experience is web, twenty years of it. Native mobile is thinner: an iOS app at Insitome, an early Android app at Daily Dot. I'm closing that gap on purpose right now, not passively. The landscaping app is a real native mobile system built from scratch, and I'm working through the platform-specific decisions as they come up rather than assuming web patterns just carry over.</p>
     <img src="/assets/img/job-apps/nice-interfaces.png" alt="Some of the various mobile and web designs I've done" />
   </div>
 
   <div class="requirement">
     <h2>Cross-functional influence</h2>
     <p>Untangling WorkStep, the full IA re-architecture I led, only happened because I could get CPO-level buy-in and keep product and engineering aligned through a long, disruptive project. So beyond just focusing on the systems themselves, I've had firsthand experience getting buy-in and bringing different stakeholders together to hash things out.</p>
     <img src="/assets/img/job-apps/collaborative.png" alt="Me and some teammates meeting" />
   </div>
 
   <div class="requirement">
     <h2>Mentorship and craft</h2>
     <p>I've never had a design systems team to manage, but I've mentored designers informally on systems thinking through every job I've built one at. The craft bar matters to me too. I'm the kind of designer who'll rebuild a color palette from scratch because the existing one doesn't hold up under scrutiny, the way I did at WorkStep after an audit showed gaps in naming and accessibility.</p>
     <img src="/assets/img/job-apps/precision-and-details.png" alt="A closeup of a spec I did calling out a specific shadow" />
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
