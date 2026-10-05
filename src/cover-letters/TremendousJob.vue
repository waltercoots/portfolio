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
        <h1>Hello, Tremendous</h1>
        <p>I know you’re going through a lot of applications, so I’ve put together some highlights on how I align with what you’re looking for.</p>
        <p>Tremendous wants someone to raise the craft of the whole product: the dashboard, the recipient experience, the design system, and the motion that ties it together. I've been designing B2B and consumer products since 2009. Most recently I spent four years at WorkStep, where I rebuilt the information architecture and the design system of an enterprise platform while it grew from $2M to $8M ARR. Here's how that lines up with what you're asking for.</p>
      </header>
      <div class="requirement-list">
        <div class="requirement">
          <h2>Owning the Design System, and Raising It</h2>
          <p>I rebuilt WorkStep's design system from scratch in Figma on variables and tokens, and it cut component bloat by 88%. I decided what got tokenized, what got aliased, and how the libraries were split so designers weren't choosing between duplicate menus. Color came from a systematic audit instead of a fixed handful of swatches. Type came from a modular scale. Everything was built to WCAG AA contrast. The goal was fewer one-off decisions downstream, which is the same gap you're describing.</p>
          <img src="/assets/img/job-apps/design-systems@2x.png" alt="Example design system from a project with Halliburton" />
        </div>
        <div class="requirement">
          <h2>Information Architecture and a Vision You Can Build Toward</h2>
          <p>Untangling WorkStep started as a navigation problem and turned into a full re-architecture. I took a sprawling enterprise platform and made it coherent and task-based, with room for new features to land without another round of bolting things on. I've also set a product vision from zero as Unilease's first designer, so I know how to make a vision concrete enough that engineering can start on it Monday.</p>
          <img src="/assets/img/job-apps/info-architecture.png" alt="Information architecture work from the WorkStep IA re-architecture" />
        </div>
        <div class="requirement">
          <h2>Motion, Micro-interactions, and How Things Open and Close</h2>
          <p>This is the part of the role I'm most excited about. I'd rather tune easing and timing in After Effects than guess at it in code, and Lottie and GSAP are how I get that work into a real product. Recently I tested five ways to do hand-drawn, frame-by-frame animation on the web (GIFs, Canvas, Lottie, video, and SVG) and landed on SVG sprites for weight and control. I care about the small stuff: how a drawer opens, what an empty state says, how long a transition runs before it starts to feel slow.</p>
          <div class="image-group space-top space-bottom"><img src="/assets/img/hallmark/treatment-a-edit.gif" alt="Hallmark" /><img src="/assets/img/hallmark/treatment-b-edit.gif" alt="Hallmark" /><img src="/assets/img/hallmark/treatment-c-edit.gif" alt="Hallmark" /><img src="/assets/img/hallmark/treatment-d-edit.gif" alt="Hallmark" /><img src="/assets/img/hallmark/treatment-e-edit.gif" alt="Hallmark" /><img src="/assets/img/hallmark/treatment-f.gif" alt="Hallmark" /></div>
        </div>
        <div class="requirement">
          <h2>Prototyping With AI, Alongside an Engineer</h2>
          <p>I prototype in code with Claude Code and Cursor, to a standard an engineer can pick up and build from. After WorkStep was acquired, I carried integration work that way under a real deadline, shrinking the gap between an idea and something people could click. That's the working style you're describing: showing how something should feel in the browser so nobody has to imagine it from a spec.</p>
          <img src="/assets/img/job-apps/use-of-ai.png" alt="A screenshot of my Claude usage as of recently" />
        </div>
        <div class="requirement">
          <h2>Product Thinking That Holds Up at the Edges</h2>
          <p>Enterprise customers meant a lot of edge cases at WorkStep: role-based access control, a report builder, survey translation across languages, data export. None of it is glamorous, and all of it breaks if the design only works on the happy path. Sending payouts to anyone, anywhere, in any currency has the same shape.</p>
          <img src="/assets/img/job-apps/report-cards.png" alt="Cards from a report builder I designed" />
        </div>
        <div class="requirement">
          <h2>Covering Work That Has No Designer</h2>
          <p>I've been the only designer more than once. At EverlyWell I was the sole product designer from Series A to Series B, and at Unilease I was the first. Picking up a small project from a team with no design support, working out what they actually need, and shipping it without a lot of ceremony is familiar ground.</p>
          <img src="/assets/img/job-apps/collaborative.png" alt="Me and the Unilease team in a Zoom call" />
        </div>
        <div class="requirement">
          <h2>Owning the Copy</h2>
          <p>I write a lot. I've kept a personal blog for years, including long write-ups on how I organize design systems and how I'd approach frame-by-frame animation on the web. This page is a decent sample. A high-documentation, low-meeting culture sounds like a place where that habit gets put to use.</p>
          <img src="/assets/img/job-apps/content-strategy.png" alt="" />
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
div.requirement-list {
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
