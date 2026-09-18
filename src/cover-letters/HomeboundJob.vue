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
        <h1>Hello, Homebound</h1>
        <p>I know you’re going through a lot of applications, so I’ve put together some highlights on how I align with what you’re looking for.</p>
        <p>Twenty years in product design. Lately that's meant AI-powered features and native mobile systems as much as web. I'm also a homeowner who's spent way more hours than anyone should have to learning about a 1922 house's plumbing and foundation, so caring about how homes actually get built isn't a stretch.</p>
      </header>
<div class="requirements-list">

  <div class="requirement">
    <h2>AI-native interaction design</h2>
    <p>At WorkStep, I designed and launched an LLM-powered insights and notification tool. Built alongside a data scientist and our CPO, from early prototyping through production launch. Confidence, relevance, when the system should say something versus stay quiet, those were real design decisions, not an afterthought bolted onto a feature at the end. I'm also actively using Claude Code to rapidly prototype and test out multiple iterations of designs.</p>
    <img src="/assets/img/job-apps/use-of-ai.png" alt="A screenshot of my Claude usage as of recently" />
  </div>

  <div class="requirement">
    <h2>Native mobile, built for the field</h2>
    <p>Insitome was my first native mobile app, built in parallel with responsive web. Also my first real design system. And WorkStep's platform serves hundreds of thousands of frontline employees who aren't at a desk either, so designing for someone who needs an answer fast, not a menu to dig through, isn't new to me.</p>
    <img src="/assets/img/job-apps/nice-interfaces.png" alt="Some of the various mobile and web designs I've done" />
  </div>

  <div class="requirement">
    <h2>Executive and investor communication</h2>
    <p>I present to our CPO regularly at WorkStep. At EverlyWell, prototypes I built went directly into investor materials and sales enablement. Turning design decisions into something leadership and investors can actually act on, that's routine for me at this point, not a skill I'm hoping to grow into.</p>
    <img src="/assets/img/job-apps/strategic-influence.png" alt="Sticky note session" />
  </div>

  <div class="requirement">
    <h2>Design systems and motion</h2>
    <p>Same WorkStep system, tokens, variables, aliasing, 88% less UI bloat. Motion's in my toolkit too. Not the main event, but something I reach for when it actually clarifies what's happening on screen instead of just decorating it.</p>
    <img src="/assets/img/job-apps/design-systems@2x.png" alt="Example design system from a project with Halliburton" />
  </div>

  <div class="requirement">
    <h2>Where I'm still building</h2>
    <p>Post-acquisition integration at WorkStep used Claude Code and AI-generated prototypes to move through requirements that kept shifting under us. I don't have deep computer vision or multimodal experience specifically. But I've spent a few years now designing around AI systems whose output I couldn't fully predict ahead of time, and that's a lot of the same muscle.</p>
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
