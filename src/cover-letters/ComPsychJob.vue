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
        <h1>Hello, ComPsych</h1>
        <p>I know you’re going through a lot of applications, so I’ve put together some highlights on how I align with what you’re looking for.</p>
        <p>For four years I designed at WorkStep, an HR platform employers used to understand and support people in warehouses and stores whose struggles often go unseen until they quit. Before that I was the only product designer at EverlyWell, where people received sensitive health results with no one sitting next to them. ComPsych supports people through some of the hardest moments of their lives, and I'd like to help build the team that designs for those moments.</p>
      </header>
<div class="requirements-list">

  <div class="requirement">
    <h2>Owning experiences end to end</h2>
    <p>WorkStep's Report Builder is a great example of something I owned end-to-end that scaled for a variety of users at different levels. Selecting a metric and defaulting to a way to slice it, but then allowing power users to add filters, change settings such as the scope of data it was applied to, and whose dashboard it could be pinned to, led to wide adoption and a lot of love for it.</p>
    <img src="/assets/img/job-apps/report-cards.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Responsibly designed LLM experiences</h2>
    <p>I designed WorkStep's AI Assistant with our data scientist and CPO. While we could have just slapped a text box onto company data, the sensitive nature of HR and the variety of companies we worked with had us proceed a lot more cautiously and design an experience that was a little more like an assistant surfacing important things to the user rather than a well-meaning algorithm that might divulge something it shouldn't.</p>
    <img src="/assets/img/job-apps/user-flow.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Sensitive information, handled with care</h2>
    <p>At EverlyWell, people opened their lab results alone at home. A number and a reference range weren't enough. They needed to know what it meant, whether to worry, and what to do next. At Insitome it was genetic data, and at WorkStep it was confidential worker feedback and permissions. I've learned that in sensitive moments, tone and clarity are part of the safety of the product.</p>
    <img src="/assets/img/job-apps/content-strategy.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Seeing the whole journey, front and backstage</h2>
    <p>At WorkStep, I led a re-architecturing project which started as "the navigation is confusing." Mapping how customers actually worked showed the product's structure was just disjointed and confusingly named. I imagine leave requests and mental health support have similar risks, especially the larger the product gets.</p>
    <img src="/assets/img/job-apps/info-architecture.png" alt="" />
  </div>

  <div class="requirement">
    <h2>AI as a working tool</h2>
    <p>I use Claude daily for research synthesis and first drafts, and I design in code with Claude Code to a standard engineers can build from. I used it for WorkStep's post-acquisition integration work, and my portfolio is a Vue project I maintain myself. It's cut the time from idea to something testable from days to hours, which means more ideas get in front of real people before anyone commits to them.</p>
    <img src="/assets/img/job-apps/use-of-ai.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Raising design maturity</h2>
    <p>At T3 and Foxtrot I mentored designers, ran critiques, helped with hiring, and improved how the team worked. At Unilease I was the first designer and set up the process from nothing. Helping shape a new design group, its research habits, crits, and principles, is the part of this role that excites me most. A good team process outlasts any single project.</p>
    <img src="/assets/img/job-apps/collaborative.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Accessibility and systems</h2>
    <p>I rebuilt WorkStep's design system from scratch with Figma variables and tokens, cut component bloat by 85%, and built the color system so every pairing met WCAG AA. For people dealing with stress, grief, or illness, accessibility goes beyond compliance. Clear focus states, generous targets, and plain language help everyone when they're having a hard day.</p>
    <img src="/assets/img/job-apps/design-systems@2x.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Mobile, where people actually are</h2>
    <p>WorkStep's frontline workers answered surveys on their phones from a text message link, usually on a break. At Insitome I designed native iOS and responsive web in parallel. Most people looking for support will reach for their phone first, often at an odd hour, so the mobile experience has to be the best version, not the leftover one.</p>
    <img src="/assets/img/job-apps/nice-interfaces.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Where I'd be learning</h2>
    <p>I haven't worked in behavioral health or absence management, and leave policy is its own world of federal, state, and employer rules. I'd start by sitting with counselors, case managers, and the people requesting leave before designing anything. I've had to learn a new domain quickly at Intuit, EverlyWell, and WorkStep, and the process is always the same: listen first, map it out, then design.</p>
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
