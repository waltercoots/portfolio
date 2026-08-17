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
        <h1>Hello, ngrok</h1>
        <p>I know you’re going through a lot of applications, so I’ve put together some highlights on how I align with what you’re looking for.</p>
        <p>I've spent the last 4 years at WorkStep, a fast-moving B2B HR SaaS company. My portfolio has more examples of functional, simple interfaces than I could fit in this page, so consider what's below a sampling. Please don't be shy to reach out if you'd like more context or specifics on anything.</p>
      </header>
      <div class="requirement-list">
      
        <div class="requirement">
          <h2>Use AI as a creative partner</h2>
          <p>How I work day to day nowadays is with Claude open pretty much constantly, and Figma's MCP integration has genuinely changed how fast I get from a rough idea to something clickable.</p>
          <img src="/assets/img/job-apps/use-of-ai.png" alt="A screenshot of my Claude usage as of recently" />
        </div>
      
        <div class="requirement">
          <h2>Think like a builder</h2>
          <p>I think what's meant with this bullet point is to make things, test, learn, and refine. You'll find I'm quite comfortable "killing my darlings", or reconfiguring the parts that aren't working.</p>
          <img src="/assets/img/job-apps/design-systems@2x.png" alt="Example design system from a project with Halliburton" />
        </div>
      
        <div class="requirement">
          <h2>End-to-end execution</h2>
          <p>Untangling WorkStep was a full site-wide IA rework, and I owned it from the initial "something here is broken" through to what shipped. The old structure was quietly costing users time, I made the case for fixing it, and I saw it through. Not a redesign because it needed a refresh. A fix because it was measurably wrong.</p>
          <img src="/assets/img/job-apps/user-flow.png" alt="An early flowchart for a project I did end-to-end" />
        </div>
      
        <div class="requirement">
          <h2>Maintain a high craft bar</h2>
          <p>I'm the person who asks "is this actually good, or just done" before something ships. That's earned me a reputation as someone who pushes for the extra pass when it matters.</p>
          <img src="/assets/img/job-apps/precision-and-details.png" alt="A callout I had in a design spec about a faint shadow being necessary" />
        </div>
      
        <div class="requirement">
          <h2>Strong communication, influence without authority</h2>
          <p>People like working with me because I'm pleasant, knowledgable, and good at what I do. Because my baseline is fairly easygoing, people tend to pay attention when I start to raise concerns. I'm also good at building inroads and pressure when it's necessary.</p>
          <img src="/assets/img/job-apps/collaborative.png" alt="Me and the Unilease team in a Zoom call" />
        </div>
      
        <div class="requirement">
          <h2>Get close to the problem</h2>
          <p>My users have never been developers, but at one point a long time ago I was equal parts dev and designer. One of the things I love about my work is learning about different people, finding what annoys them, and making their experience better.</p>
          <img src="/assets/img/job-apps/design-specs.png" alt="Some specs I did of a design at WorkStep" />
        </div>
      
        <div class="requirement">
          <h2>Collaborative design</h2>
          <p>Very little of my work happens in a vacuum. At my current job, I interface with PMs, data scientists, devs, and our CPO. In the past I've reported directly to CEOs, partnered with product marketers, and customer experience teams to make sure we were building the right things and talking about them in the right ways.</p>
          <img src="/assets/img/job-apps/strategic-influence.png" alt="Some specs I did of a design at WorkStep" />
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
