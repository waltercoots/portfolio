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
        <h1>Hello, Valon</h1>
        <p>I know you’re going through a lot of applications, so I’ve put together some highlights on how I align with what you’re looking for.</p>
        <p>I've spent the last 20 years designing web-based B2B SaaS products, most recently leading design at WorkStep, where I rebuilt the information architecture and design system for a platform managing frontline workforce operations across warehouses and supply chains. I haven't worked in fintech or D2C, but the problem you're describing, turning a complex operational system into something scalable and legible for multiple kinds of internal users, is the exact shape of problem I've spent my career solving.</p>
      </header>
<div class="requirements-list">

  <div class="requirement">
    <h2>Foundational platform capabilities and a design system that scales</h2>
    <p>I built WorkStep's design system from scratch using Figma's variables, structuring collections for color and breakpoints with their own modes rather than a flat list of static styles. I learned the hard way where that approach breaks, like how libraries only publish the variables defined in them, so pulling one library into another means redefining values as aliases. Those are the kinds of scaling problems you only find by actually building the thing, not by reading about design tokens.</p>
    <img src="/assets/img/job-apps/design-systems@2x.png" alt="Example design system from a project with Halliburton" />
  </div>

  <div class="requirement">
    <h2>Untangling complex problems into generalized, reusable tools</h2>
    <p>WorkStep's product had grown into a tangle of overlapping flows built for different moments in time. I led a full IA re-architecture that gave the product a coherent structure teams could build on top of instead of working around. It's the same kind of work you're describing: taking something that grew complex through legitimate necessity and finding the shared structure underneath it that reduces redundancy instead of adding another one-off fix.</p>
    <img src="/assets/img/job-apps/content-strategy.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Deep user understanding across multiple, distinct user types</h2>
    <p>Warehouse managers, supply chain leads, and frontline workers all needed different things from the same platform, with wildly different levels of technical comfort. Designing for that spread, rather than a single well-defined persona, is something I've done for most of my career. Serving operators, deployment strategists, and technical teams from one system is a familiar problem, even if the industry's new to me.</p>
    <img src="/assets/img/job-apps/user-flow.png" alt="" />
  </div>

  <div class="requirement">
    <h2>AI as a real part of the design and product</h2>
    <p>I designed an LLM-powered AI Assistant for WorkStep end to end, working closely with a data science team to turn model output into notifications and insights warehouse managers could actually act on. It shipped with strong adoption. I also use Cursor, Claude, and Figma's MCP integration as a standard part of how I work day to day.</p>
    <img src="/assets/img/job-apps/use-of-ai.png" alt="A screenshot of my Claude usage as of recently" />
  </div>

  <div class="requirement">
    <h2>B2B SaaS and internal tooling experience</h2>
    <p>This is listed as a bonus, but it's really the core of what I've done for two decades. I know what it's like to design for people using a tool because their job requires it, not because they chose it, and how different that is from consumer product design. Internal tools, operator workflows, and the tradeoffs of building for efficiency over delight are territory I'm already fluent in.</p>
    <img src="/assets/img/job-apps/strategic-influence.png" alt="Sticky note session" />
  </div>

  <div class="requirement">
    <h2>Cross-functional partnership and clear communication</h2>
    <p>I worked closely with WorkStep's CPO and senior PMs throughout the IA re-architecture and the AI Assistant project, translating ambiguous problems into decisions the whole team could align on. Management is a path I'm actively looking to grow into, and leading cross-functional work and getting buy-in without direct authority is something I've done consistently.</p>
    <img src="/assets/img/job-apps/collaborative.png" alt="Me and the Unilease team in a Zoom call" />
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
