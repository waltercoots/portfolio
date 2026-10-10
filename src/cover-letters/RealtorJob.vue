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
        <h1>Hello, Realtor.com</h1>
        <p>I know you’re going through a lot of applications, so I’ve put together some highlights on how I align with what you’re looking for.</p>
        <p>I've spent 20+ years designing web products, and some of my favorite work has been for professionals who live in their tools. At Unilease I was Head of Design on a platform that helped commercial real estate brokers survey markets and match properties to their clients. At WorkStep I led design for four years on a product with two connected sides: frontline workers on their phones and the managers acting on what they said. Tools that help agents and brokers grow their business while better serving buyers and sellers sounds familiar!</p>
      </header>
<div class="requirements-list">

  <div class="requirement">
    <h2>Designing for real estate professionals</h2>
    <p>I recognize commercial and residential are really different, but it bears mentioning that at Unilease I was the first designer, working with the CEO and engineering to take a broker tool from concept to launch. Brokers juggled client requirements, market surveys, and property options, usually under deadline. The product had to make them faster and better prepared for client conversations.</p>
    <img src="/assets/img/job-apps/strategic-influence.png" alt="Sticky notes from an ideation session" />
  </div>

  <div class="requirement">
    <h2>Connecting consumer and client-facing experiences</h2>
    <p>WorkStep had two audiences who depended on each other. Workers answered surveys on their phones, and managers used web dashboards to act on the answers. If either side got clunky, the other went quiet. I learned to design both ends of a flow together and to pay close attention to the handoff. Partner tools that connect agents with buyers and sellers live or die at the same seam.</p>
    <img src="/assets/img/job-apps/user-flow.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Leading the full design process</h2>
    <p>At WorkStep I worked with product and engineering from the first conversation to shipped UI: understanding the problem, mapping flows, and polishing the final screens. Report Builder is the honest example. The first version was messy, and watching customers use it after launch taught me what the spec missed. The second version was much better because I stayed with it past launch.</p>
    <img src="/assets/img/job-apps/report-cards.png" alt="Cards from a report builder I designed" />
  </div>

  <div class="requirement">
    <h2>Strong visual design that performs</h2>
    <p>At EverlyWell I redesigned and A/B tested our product detail page, and it lifted sales 25%. Visual design was a big part of that: clearer hierarchy, better imagery, and less noise between the customer and the decision. I care about polish, but I care most about polish that helps people act.</p>
    <img src="/assets/img/job-apps/nice-interfaces.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Strengthening the design system</h2>
    <p>I rebuilt WorkStep's design system from scratch with Figma variables and tokens, cut component bloat by 85%, and built to WCAG AA contrast. Much of the work was auditing: finding near-duplicate components, merging them, and making the right choice the easy one. I also learned when not to componentize. We stopped building charts as components because Figma froze the data, and reviews improved once the charts looked real.</p>
    <img src="/assets/img/job-apps/design-systems@2x.png" alt="Example design system from a project with Halliburton" />
  </div>

  <div class="requirement">
    <h2>Workshops and alignment</h2>
    <p>At Foxtrot I ran workshops, persona work, and stakeholder alignment sessions for clients like SXSW and Austin Film Society, often with people who didn't agree on who the product was for. At Intuit I facilitated workshops and presented to senior leadership. A good workshop gets a room to agree on the problem before anyone argues about solutions.</p>
    <img src="/assets/img/job-apps/collaborative.png" alt="Me and some teammates meeting" />
  </div>

  <div class="requirement">
    <h2>Explaining design in plain language</h2>
    <p>The re-architecture at WorkStep started from the realization that people were getting confused, but it was hard for everyone to articulate why. The real problem was that years of features added by different teams had left a structure that matched our org chart instead of our customers' jobs. Death by a thousand cuts! Putting it that way, without design jargon, got product and engineering on board fast. Most debates resolve once everyone has shared context.</p>
    <img src="/assets/img/job-apps/info-architecture.png" alt="Information architecture work from the WorkStep IA re-architecture" />
  </div>

  <div class="requirement">
    <h2>Strong opinions, loosely held</h2>
    <p>Speaking of context, one thing my experience has taught me is that I don't have as much as the entire company. So I've lost count of the number of times I've thought I was going to die on a hill, only to see broader context and live to fight another day.</p>
    <img src="/assets/img/job-apps/content-strategy.png" alt="" />
  </div>

  <div class="requirement">
    <h2>We, not me</h2>
    <p>Over the years I've mentored and directed other designers, ran critiques, and helped with hiring. I like making the people around me better, and the best work I've done came out of teams where everyone felt free to poke holes in an idea, mine included.</p>
    <img src="/assets/img/job-apps/accessible-international-button.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Where I'd be learning</h2>
    <p>I haven't worked in residential real estate, and agent and broker workflows have their own rhythms, tools, and pressures. My native mobile work is also older, from Insitome's iOS app, so I'd lean on the team's existing mobile patterns while I get current. I'd start by spending time with agents to see how they actually work a lead from first contact to close.</p>
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
