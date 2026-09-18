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
        <h1>Hello, Modus Create</h1>
        <p>I know you’re going through a lot of applications, so I’ve put together some highlights on how I align with what you’re looking for.</p>
        <p>Modus Create is asking for someone who's done real client-consulting work and can bring AI-assisted tooling into that delivery without it feeling bolted on. Both of those are already how I work.</p>
      </header>
<div class="requirements-list">

  <div class="requirement">
    <h2>Client Delivery, Not Just In-House Design</h2>
    <p>Years at T3 and Foxtrot had me working directly with client stakeholders across multiple concurrent engagements, defending design decisions to people who weren't in the room for the research. Big clients like Halliburton, Hallmark, and mid-sized like Viking Cruises. Lots of different constraints, but all necessitated framing the problem, shipping something, and keeping the client's trust the whole way through.</p>
    <img src="/assets/img/job-apps/collaborative.png" alt="Me and some teammates meeting" />
  </div>

  <div class="requirement">
    <h2>AI-Assisted Tools in Actual Production Work</h2>
    <p>I used Claude Code and AI-generated prototypes to carry WorkStep's post-acquisition integration work, structuring design decisions so they translated cleanly into engineering handoff rather than needing a second pass. I realize this is a bonus point, but for me it's just how the last year of my work has run.</p>
    <img src="/assets/img/job-apps/use-of-ai.png" alt="A screenshot of my Claude usage as of recently" />
  </div>

  <div class="requirement">
    <h2>Design Systems Across Contexts</h2>
    <p>Built WorkStep's design system from scratch in Figma, variables, tokens, aliasing, cutting UI bloat by 88%. Consulting work means walking into someone else's existing system and knowing how to extend it without breaking it, which is a different skill than building one from a blank canvas, and I've done both.</p>
    <img src="/assets/img/job-apps/design-systems@2x.png" alt="Example design system from a project with Halliburton" />
  </div>

  <div class="requirement">
    <h2>Technical Fluency Underneath the Design</h2>
    <p>Before I was doing product design full time, I was coding my own sites as a freelancer. I'm not going to out-code an engineer, but I understand what I'm asking for when I hand off a spec, which shows up in cleaner engineering conversations and fewer rounds of "that's not actually possible."</p>
    <img src="/assets/img/job-apps/design-specs.png" alt="Some specs I did of a design at WorkStep" />
  </div>

  <div class="requirement">
    <h2>Where I'm honest about the gap</h2>
    <p>My frontend coding knowledge is foundational HTML, JavaScript, and CSS. I wouldn't claim fluency in frameworks such as React or TypeScript. But my design decisions are structured clearly enough that an engineer, or an AI coding agent, can pick them up without guessing.</p>
    <img src="/assets/img/job-apps/nice-interfaces.png" alt="Some of the various mobile and web designs I've done" />
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
