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
        <h1>Hello, Counterpart</h1>
        <p>I know you’re going through a lot of applications, so I’ve put together some highlights on how I align with what you’re looking for.</p>
        <p>There are a lot of ways I align well to the position, and chief among them is that I've spent the last few years designing ML features and complex systems for HR business partners. I also have health tech experience having worked for EverlyWell in its early days! Finally, while I was at Intuit, they acquired Medfusion which was folded into Quicken Health. This was a patient porotal before anyone called it that, and I did some early user research on how to get more practices on board.</p>
      </header>
<div class="requirements-list">

  <div class="requirement">
    <h2>Integrating complex features like machine learning</h2>
    <p>I designed WorkStep's AI Assistant with our data scientist and CPO. While we could have just slapped a text box onto company data, the sensitive nature of HR and the variety of companies we worked with had us proceed a lot more cautiously and design an experience that was a little more like an assistant surfacing important things to the user rather than a well-meaning algorithm that might divulge something it shouldn't. </p>
    <img src="/assets/img/job-apps/user-flow.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Consumer-level experiences in enterprise and healthcare</h2>
    <p>I was the only product designer at EverlyWell from Series A to Series B. We took lab results that usually arrive as a wall of reference ranges and made them readable for regular people. I also designed the subscription model and ran PDP tests that lifted conversion 25%. At WorkStep, the users were warehouse supervisors at PepsiCo and PetSmart. They have no patience for enterprise clunk, so I designed for them the way you'd design a consumer app.</p>
    <img src="/assets/img/job-apps/nice-interfaces.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Leading early-stage exploration and undefined problems</h2>
    <p>I was the first designer at Unilease and defined a commercial real estate matching product from nothing. More recently I've been building working prototypes in Claude Code to figure out how WorkStep fits into its acquirer's product. When a prototype runs, people stop arguing about slides and start reacting to something real.</p>
    <img src="/assets/img/job-apps/strategic-influence.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Reconciling conflicting stakeholder feedback</h2>
    <p>WorkStep's navigation was shaped like our org chart, with sales, CS, and product each guarding their own corner. I worked with Senior PM Natalie Dole to rebuild the IA around what customers were actually trying to do. Most of the job was getting everyone to agree on that first, and the sitemap came after.</p>
    <img src="/assets/img/job-apps/collaborative.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Scalable design standards</h2>
    <p>I rebuilt WorkStep's design system on Figma variables and tokens, cut component bloat by 85%, and got us to WCAG AA. The standards also covered what not to componentize. Chart components froze fake data in place, and stakeholders kept getting hung up on the numbers, so now charts get drawn from shared styles instead.</p>
    <img src="/assets/img/job-apps/design-systems@2x.png" alt="Example design system from a project with Halliburton" />
  </div>

  <div class="requirement">
    <h2>Elevating the team</h2>
    <p>I have light management experience, and have mentored several designers over the years. I enjoy helping other designers advance in their careers, challenging them to stay sharp, and learning from them as well. Design critiques are a great avenue for this, but even just banter in Slack and demonstrating a good work ethic goes a long way.</p>
    <img src="/assets/img/job-apps/content-strategy.png" alt="Me and some teammates meeting" />
  </div>

  <div class="requirement">
    <h2>Where I'd be learning</h2>
    <p>
      Although I worked on the Quicken Health / Medfusion integration, it never got to the point of designing the interfaces (such as an area for a physician in the middle of a patient visit), and I haven't worked inside an EHR or on regulated clinical decision support. I'd want to sit in on real clinic sessions early, and I'd lean hard on your clinical team until I understood the workflow better than my own.</p>
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
