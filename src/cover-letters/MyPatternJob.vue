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
        <h1>Hello, MyPattern</h1>
        <p>I know you’re going through a lot of applications, so I’ve put together some highlights on how I align with what you’re looking for.</p>
        <p>I've designed consumer health products twice. At EverlyWell I was the only product designer from Series A to Series B, working on the lab results experience for people testing at home. At Insitome I turned genetics research into apps regular people actually enjoyed. Most recently at WorkStep I designed an AI assistant that found patterns in messy data and explained them in plain language. MyPattern sits right where those three meet.</p>
      </header>
<div class="requirements-list">

  <div class="requirement">
    <h2>Making health data make sense</h2>
    <p>At EverlyWell, people got their lab results on their own, at home, with no doctor sitting next to them. That changes the design job. A number with a reference range isn't enough. People need to know what it means, whether to worry, and what to do next. I designed the results platform around those questions, using infographics and plain-language explanations so a result felt like an answer instead of a puzzle.</p>
    <img src="/assets/img/job-apps/nice-interfaces.png" alt="" />
  </div>

  <div class="requirement">
    <h2>AI that connects the dots</h2>
    <p>I designed WorkStep's AI Assistant with our data scientist Zack Keller and CPO Justin Butler. It read survey and retention data, spotted what changed, and told managers in plain English what to look at. The hard design problems were the same ones MyPattern will face: how confident to sound, how to show the evidence behind an insight, and how to be useful without overwhelming people. Adoption was strong because it earned trust one small insight at a time.</p>
    <img src="/assets/img/job-apps/user-flow.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Defining the UX vision from zero</h2>
    <p>I've been the first or only designer at Unilease, EverlyWell, and Insitome. In each case nobody handed me a design direction, so I wrote one, tested it, and kept it alive through launch. At an early-stage company the vision has to be clear enough to guide decisions this week and loose enough to change when users show you something new.</p>
    <img src="/assets/img/job-apps/strategic-influence.png" alt="Sticky notes from an ideation session" />
  </div>

  <div class="requirement">
    <h2>Flows, structure, and information architecture</h2>
    <p>Untangling WorkStep started as a navigation cleanup and turned into a full IA overhaul once we saw the product's structure matched our org chart instead of how people worked. I rebuilt the task flows and navigation around users' real jobs. A health platform pulling together symptoms, labs, wearables, and history has the same risk at a bigger scale, and the structure decides whether it feels like clarity or clutter.</p>
    <img src="/assets/img/job-apps/info-architecture.png" alt="Information architecture work from the WorkStep IA re-architecture" />
  </div>

  <div class="requirement">
    <h2>High-fidelity design across platforms</h2>
    <p>At Insitome we built native iOS and responsive web in parallel, and I made a platform-agnostic design system to keep them consistent. At WorkStep I rebuilt the pattern library from scratch with Figma variables and tokens, cut component bloat by 85%, and built to WCAG AA. I prototype in code with Claude Code when an interaction is easier to show than to spec.</p>
    <img src="/assets/img/job-apps/design-systems@2x.png" alt="Example design system from a project with Halliburton" />
  </div>

  <div class="requirement">
    <h2>Measuring what worked</h2>
    <p>At EverlyWell I redesigned the product page for our lab tests, A/B tested it, and saw a 25% increase in sales. At WorkStep we watched AI Assistant adoption after launch to decide what to build next. I like to agree on what success looks like before designing, because it settles arguments early and makes the next round of decisions easier.</p>
    <img src="/assets/img/job-apps/report-cards.png" alt="Cards from a report builder I designed" />
  </div>

  <div class="requirement">
    <h2>Research, starting small</h2>
    <p>At Intuit I planned and ran research and usability testing, and at Foxtrot I ran workshops and persona work with clients. Building research from nothing at a startup means keeping it light and constant: a few conversations every week, a simple way to log what we hear, and a habit of testing rough ideas before they're expensive. I'd rather talk to five women this week than plan a perfect study for next quarter.</p>
    <img src="/assets/img/job-apps/collaborative.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Moving fast without breaking trust</h2>
    <p>Startups reward speed, and health products punish carelessness. At EverlyWell we shipped quickly from Series A to Series B, but anything touching someone's results got extra care. Today I use Claude and Claude Code to get from idea to something testable in hours, which leaves more time for the details that actually matter to users.</p>
    <img src="/assets/img/job-apps/use-of-ai.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Where I'd be learning</h2>
    <p>I haven't worked with wearable or clinical data. MyPattern's users are living through experiences I haven't had, so I'd lean hard on research and on the clinical team before trusting my own instincts. My native mobile work is also older, from Insitome's iOS app. I'm currently designing a native mobile app and design system on the side to get current.</p>
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
