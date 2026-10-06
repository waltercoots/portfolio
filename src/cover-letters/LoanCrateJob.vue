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
        <h1>Hello, LoanCrate</h1>
        <p>I know you’re going through a lot of applications, so I’ve put together some highlights on how I align with what you’re looking for.</p>
        <p>I've spent a lot of my career on software where a mistake costs someone real money: professional tax software at Intuit, and a data-heavy operations platform at WorkStep used by teams at PepsiCo, PetSmart, and JB Hunt. Most recently I designed an AI assistant that had to earn trust one answer at a time. Making mortgage workflows feel intuitive, trustworthy, and (hopefully!) even enjoyable sounds like a problem worth working on.</p>
      </header>
<div class="requirements-list">

  <div class="requirement">
    <h2>Owning a product area end to end</h2>
    <p>At WorkStep I owned design for the core product, from discovery calls through high-fidelity Figma work and into what actually shipped. Report Builder is the honest example. The first version was messy, and watching customers use it after launch taught me what the spec missed. The second version was much better because I stayed with it past launch.</p>
    <img src="/assets/img/job-apps/strategic-influence.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Designing for probabilistic output</h2>
    <p>I designed WorkStep's AI Assistant with our data scientist and CPO. It answered managers' questions in plain language, which meant designing for answers that might be wrong. The hard calls were how confident to sound, how much evidence to show, and when to direct someone to more robust BI tools instead of a summary. Mortgage work raises the stakes, since a confidently wrong extraction can sink a loan.</p>
    <img src="/assets/img/job-apps/user-flow.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Data-dense UI that still feels approachable</h2>
    <p>Most of my WorkStep work was dense: tables, filters, dashboards, and charts for people tracking thousands of workers across many sites. Approachable comes from hierarchy and restraint, and from designing the empty, broken, and overloaded states as carefully as the happy path. Loan files sound like the same problem with more documents and less margin for error.</p>
    <img src="/assets/img/job-apps/report-cards.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Multi-step workflows</h2>
    <p>I designed WorkStep's confidential broadcast messaging, with a custom segment builder, and role-based permissions. Both were multi-step flows where a mistake had consequences, like messaging the wrong group or giving someone access they shouldn't have. I learned to make each step's consequences visible before people commit, and to make going back cheap.</p>
    <img src="/assets/img/job-apps/content-strategy.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Component libraries and accessibility</h2>
    <p>I rebuilt WorkStep's Figma library from scratch with variables, auto-layout, variants, and tokens, cut component bloat by 85%, and built every color pairing to meet WCAG AA. I also learned when not to componentize. We stopped building charts as components because Figma froze the data, and reviews went better once charts looked real. Good libraries make the right choice the easy one for engineers.</p>
    <img src="/assets/img/job-apps/design-systems@2x.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Customer discovery with professionals</h2>
    <p>At Intuit I planned and ran research with tax professionals, people with decades of habit and no patience during busy season. They taught me to show up with something concrete to react to, watch what people do instead of what they say, and synthesize fast. Loan processors and underwriters sound like the same kind of expert users.</p>
    <img src="/assets/img/job-apps/collaborative.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Working with AI, and shipping pragmatically</h2>
    <p>I use Claude daily and prototype in code with Claude Code to a standard engineers can build from, including WorkStep's post-acquisition integration work. It helps me make smarter craft-versus-speed trade-offs, because I can test the risky part quickly and save polish for what survives. At Unilease I was the only designer, so scoping pragmatically wasn't optional.</p>
    <img src="/assets/img/job-apps/use-of-ai.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Where I'd be learning</h2>
    <p>I've had multiple mortgages, refinanced, and my spouse worked for PNC as a mortgage origination admin, but I know I'd still have a lot to learn. I also haven't designed agents that take action on someone's behalf, where the person needs clear ways to step in and correct them. I'd start by sitting with processors and underwriters on real files, and I'd want to get intervention patterns right before anything else.</p>
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
