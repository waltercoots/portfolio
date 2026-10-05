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
        <h1>Hello, Microsoft</h1>
        <p>I know you’re going through a lot of applications, so I’ve put together some highlights on how I align with what you’re looking for.</p>
        <p>I've spent 20+ years launching websites and digital products, most recently spending 4 years at WorkStep which is an enterprise platform for frontline workforces that grew 4x before being acquired by Learning Pool, a learning technology company. Helping people build skills runs through more of my career than I expected: e-learning applications early on, science education apps at Insitome, and integration work with a learning platform at the end of WorkStep.</p>
      </header>
<div class="requirements-list">

  <div class="requirement">
    <h2>Complex experiences, concept to delivery</h2>
    <p>At WorkStep I took features from a vague request to a shipped product: research, flows, prototypes, and specs. Report Builder is the honest example. The first version was messy, and watching customers use it after launch taught me what the spec missed. The second round was much better for it. Delivery means the work isn't done when the designs are approved.</p>
    <img src="/assets/img/job-apps/report-cards.png" alt="Cards from a report builder I designed" />
  </div>

  <div class="requirement">
    <h2>Journeys and IA that scale</h2>
    <p>Untangling WorkStep started as a navigation complaint. With our senior PM, I found the real problem: years of features added by different teams had left a structure that matched our org chart instead of how customers worked. We rebuilt the information architecture and journeys around their jobs, which also left room for the features coming next. Learning platforms have the same risk once content, paths, and credentials start piling up.</p>
    <img src="/assets/img/job-apps/info-architecture.png" alt="Information architecture work from the WorkStep IA re-architecture" />
  </div>

  <div class="requirement">
    <h2>Designing AI experiences</h2>
    <p>I designed WorkStep's AI Assistant with our data scientist and CPO. It read survey and retention data and told managers in plain language what changed and what to do about it. Adoption was strong because it met people where they were instead of sending them to a dashboard. A good AI tutor or skilling guide faces the same questions: when to explain, when to step back, and how to earn trust.</p>
    <img src="/assets/img/job-apps/user-flow.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Design systems and accessibility</h2>
    <p>I rebuilt WorkStep's design system from scratch with Figma variables and tokens, cut component bloat by 85%, and built the color system so every pairing met WCAG AA. I also learned when not to componentize. We stopped building charts as components because Figma locked the data in place, and reviews went better once charts looked real. Systems should make the right thing the easy thing.</p>
    <img src="/assets/img/job-apps/design-systems@2x.png" alt="Example design system from a project with Halliburton" />
  </div>

  <div class="requirement">
    <h2>Research, data, and experimentation</h2>
    <p>At Intuit I planned and ran research and usability evaluations with tax professionals. At EverlyWell I redesigned the product page, A/B tested it, and got a 25% lift in sales. At WorkStep we watched AI Assistant adoption after launch to decide what to build next. I want conversations to explain the why and data to confirm the what before I recommend a direction.</p>
    <img src="/assets/img/job-apps/strategic-influence.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Influencing strategy and alignment</h2>
    <p>At WorkStep I worked directly with our CPO and executive team on what to build and why, bringing customer evidence into roadmap debates. At T3 I led work for Fortune 500 clients like Halliburton, where getting legal, marketing, IT, and business owners to agree was most of the job. Alignment comes from making the trade-offs visible, so people argue about the same thing.</p>
    <img src="/assets/img/job-apps/collaborative.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Prototyping and iterative learning</h2>
    <p>I prototype in code with Claude Code to a standard engineers can build from, and I used it for WorkStep's integration work after the Learning Pool acquisition. A working prototype answers questions a static mockup can't, and it gets real feedback faster. My portfolio site is a Vue project I build and maintain myself.</p>
    <img src="/assets/img/job-apps/nice-interfaces.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Mentoring designers</h2>
    <p>At T3 and Foxtrot I mentored and directed other designers, ran critiques, and helped with hiring. My approach is to name what's working first so they keep it, be specific about what isn't, and explain the reasoning so the next decision doesn't need me. Helping other designers get better is the part of senior work I enjoy most.</p>
    <img src="/assets/img/job-apps/precision-and-details.png" alt="" />
  </div>
  
  <div class="requirement">
    <h2>Where I'd be learning</h2>
    <p>My recent work has been at startups, where aligning "multiple teams" meant a few people in one room. Microsoft's scale is different, and I'd expect to spend my first months learning how decisions actually get made. I also haven't designed a dedicated learning platform end to end. I'd start by talking with learners and the content teams behind the paths before redesigning anything.</p>
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
