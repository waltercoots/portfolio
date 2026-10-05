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
        <h1>Hello, Scotch</h1>
        <p>I know you’re going through a lot of applications, so I’ve put together some highlights on how I align with what you’re looking for.</p>
        <p>I've been designing websites and digital products for over 20 years, and the last 4 years were at WorkStep, a Series A-to-acquisition startup building operations software for frontline teams at companies like PepsiCo, PetSmart, and JB Hunt. My users were site managers who ran busy, physical workplaces and checked our product between a hundred other things. Also, I make cocktails at home, so I've spent more than a little time in liquor stores.</p>
      </header>
<div class="requirements-list">

  <div class="requirement">
    <h2>Owning a back office end to end</h2>
    <p>At WorkStep I owned the core web product as we grew from $2M to $8M ARR. That meant the screens people lived in every day, plus every new feature that had to fit around them without breaking anything. I was the designer who knew why each page worked the way it did, and who got the call when something didn't.</p>
    <img src="/assets/img/job-apps/strategic-influence.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Making complicated numbers easy to act on</h2>
    <p>Report Builder let customers slice their own data, filter it, and export it. The first version was messy. Watching how people actually used it after launch taught me more than the spec did, and the next round was much better for it. I also designed the charts and data tables managers used to spot problems across locations. Getting someone from "here's a number" to "here's what I should do" is the part I care about most.</p>
    <img src="/assets/img/job-apps/user-flow.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Turning data into plain language</h2>
    <p>I designed WorkStep's AI Assistant with our data scientist Zack Keller and CPO Justin Butler. It took survey and retention data and told managers in plain English what changed and what to look at. Adoption was strong because it saved busy people from reading a dashboard they didn't have time for. Payouts and fees feel like a natural fit for the same approach.</p>
    <img src="/assets/img/job-apps/report-cards.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Responsive by default</h2>
    <p>WorkStep's frontline workers answered surveys on their phones from a text message link, usually on a break. Managers checked results from the floor. I've designed responsive web for desktop, tablet, and phone at WorkStep, Unilease, EverlyWell, and for Hallmark's sign-up and loyalty flows. Small screens force you to decide what actually matters, and that usually makes the desktop version better too.</p>
    <img src="/assets/img/job-apps/nice-interfaces.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Asking if we solved the right problem</h2>
    <p>Untangling WorkStep started as a navigation cleanup. Working with Senior PM Natalie Dole, we figured out the real problem was that the product's structure no longer matched how customers thought about their work. We reorganized the whole platform around that instead of reshuffling menus. My best PM partnerships have been arguments that ended with a better problem statement than either of us walked in with.</p>
    <img src="/assets/img/job-apps/info-architecture.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Discovery with the people who use it</h2>
    <p>At Intuit I planned and ran research with tax professionals, people with zero patience for software that slowed them down during busy season. At WorkStep my users were site managers who were rarely at a desk. Both taught me to keep sessions short, show up with something concrete to react to, and synthesize fast so findings land while the team still cares.</p>
    <img src="/assets/img/job-apps/collaborative.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Systems for data-heavy views</h2>
    <p>I rebuilt WorkStep's Figma design system from scratch with variables and tokens, cutting component bloat by 85% and building to WCAG AA. I also learned where components stop helping. We stopped trying to build charts as components because Figma locked the data in place, and fake-looking data made reviews worse. Now each chart is drawn fresh against shared styles. Knowing what not to systematize is half the job.</p>
    <img src="/assets/img/job-apps/design-systems@2x.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Working in the AI-assisted build loop</h2>
    <p>I prototype in code with Claude and Claude Code to a standard engineers can actually build from, and I used it for WorkStep's post-acquisition integration work. My portfolio site is a Vue project I maintain myself. That means I can show engineers working behavior instead of describing it, and I usually know what's expensive before I ask for it.</p>
    <img src="/assets/img/job-apps/use-of-ai.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Where I'd be learning</h2>
    <p>I haven't designed payment processing or payouts. The closest I've come is Intuit's tax software and EverlyWell's subscription checkout, where people needed to trust exactly what they were paying and why. I also haven't designed third-party integration setup. The nearest work is WorkStep's role-based permissions and data export, which are configuration problems with the same need for clarity. I'd want to sit with a few store owners early to learn how they think about money and their other tools.</p>
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
