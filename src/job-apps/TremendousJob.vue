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
        <p>I've spent the last 4 years at WorkStep, a fast-moving B2B HR SaaS company. My portfolio has more examples of functional, simple interfaces than I could fit in this page, so consider what's below a sampling. Please don't be shy to reach out if you'd like more context or specifics on anything.</p>
      </header>
      <div class="requirement-list">
        <div class="requirement">
          <h2>Rational, elegant, and intuitive interfaces</h2>
          <p>I've been working in product design for 17 years, and in web for over 20, so I have lots of examples of this.</p>
          <img src="/assets/img/job-apps/nice-interfaces.png" alt="" />
        </div>
        <div class="requirement">
          <h2>Owning the content</h2>
          <p>I believe good copy is a core part of what makes products great, and I’m happy to handle this. But I also believe product orgs benefit from having copy guidelines so it sounds like it's in the same voice.</p>
          <img src="/assets/img/job-apps/content-strategy.png" alt="" />
        </div>
        <div class="requirement">
          <h2>Strategic influence</h2>
          <p>I sat in on roadmap planning at WorkStep and pushed back when priorities didn’t match what we were hearing from users. Many projects I’ve worked on have started as a design-led initiative, not something handed down from above.</p>
          <img src="/assets/img/job-apps/strategic-influence.png" alt="" />
        </div>
        <div class="requirement">
          <h2>Contributing to the design system</h2>
          <p>I’ve been building, maintaining, expanding, and refactoring design systems for about 10 years now. AI has made this tremendously easier and more fun. At WorkStep I refactored many of our design system components for better performance, and have been actively participating in refactoring them to better integrate with Claude Code.</p>
          <img src="/assets/img/job-apps/design-systems@2x.png" alt="Example design system from a project with Halliburton" />
        </div>
        <div class="requirement">
          <h2>Documenting heavily</h2>
          <p>A long time ago, I manually spec’d interfaces in Photoshop and more complex flows in InDesign and Illustrator. I’m grateful we have better tools for this now, and I still believe in the importance. I pride myself on (and find comfort in) having the t’s crossed and i’s dotted when a project is completed.</p>
          <img src="/assets/img/job-apps/design-specs.png" alt="Some specs I did of a design at WorkStep" />
        </div>
        <div class="requirement">
          <h2>Using AI throughout my workflow</h2>
          <p>I use Claude, and Figma’s MCP integration daily, not as a novelty but as part of how I actually work. I prototype with AI to test ideas faster and bring working artifacts into critique instead of static mocks.</p>
          <img src="/assets/img/job-apps/use-of-ai.png" alt="A screenshot of my Claude usage as of recently" />
        </div>
        <div class="requirement">
          <h2>Raising the bar</h2>
          <p>I'm the person who asks "is this actually good, or just done" before something ships. That's earned me a reputation as someone who pushes for the extra pass when it matters.</p>
          <img src="/assets/img/job-apps/precision-and-details.png" alt="A callout I had in a design spec about a faint shadow being necessary" />
        </div>
        <div class="requirement">
          <h2>Designing for a diverse set of recipients</h2>
          <p>Frontline warehouse workers using WorkStep on cracked phone screens in poor lighting taught me a lot about accessibility that isn't theoretical. Contrast, tap targets, plain language, all of it mattered because real people were depending on it working.</p>
          <img src="/assets/img/job-apps/accessible-international-button.png" alt="" />
        </div>
        <div class="requirement">
          <h2>Collaborative design</h2>
          <p>My best work is done in close collaboration with PMs and engineers, not by myself. I've worked with content strategists, data scientists, UX researchers, and all kinds of other stakeholders and have found it consistently to help the end result.</p>
          <img src="/assets/img/job-apps/collaborative.png" alt="" />
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
