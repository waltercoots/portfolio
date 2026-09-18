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
        <h1>Hello, Apple</h1>
        <p>I know you’re going through a lot of applications, so I’ve put together some highlights on how I align with what you’re looking for.</p>
        <p>Twenty years, split between agency campaign work early on and a decade of enterprise product design more recently. Most of my recent work has been product design, not marketing or e-commerce specifically. But I have a lot of experience with that in the past that I think carries over nicely.</p>
      </header>
<div class="requirements-list">

  <div class="requirement">
    <h2>Scaling a style guide across touchpoints</h2>
    <p>I worked on both the Halliburton and Hallmark websites (ironically, around the same time) and established the design language for both. I was responsible for getting buy-in from high level executives, and I've worked with other brands across digital campaigns in the past such as Southwest Airlines and Denny's. I know how to automate production assets and grease the wheels to move fast when it matters most.</p>
    <img src="/assets/img/job-apps/design-systems@2x.png" alt="Example design system from a project with Halliburton" />
  </div>

  <div class="requirement">
    <h2>E-commerce and conversion</h2>
    <p>At EverlyWell I redesigned product detail pages for lab test products. I also built the subscription and checkout flow across both the results platform and the marketing site. When it comes to larger brands, I did a lot with Hallmark and updating their PDP. So purchase paths aren't new territory for me.</p>
    <img src="/assets/img/job-apps/user-flow.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Agency work for national brands</h2>
    <p>Earlier in my career, at ImageVisible, I designed campaigns for Southwest Airlines and Denny's, working under agency creative direction and scaling a brand identity across a bunch of different touchpoints on real deadlines. T3 and Foxtrot were the same muscle, Fortune 500 clients, presenting straight to client stakeholders, delivering polished work fast, etc. It's been a while since I worked in that specific structure day to day, but it's not unfamiliar ground.</p>
    <img src="/assets/img/job-apps/nice-interfaces.png" alt="Some of the various mobile and web designs I've done" />
  </div>

  <div class="requirement">
    <h2>Visual craft and typography</h2>
    <p>Typography, layout, balance, hierarchy, this has been the backbone of my work for two decades regardless of what the product was. I care about getting the pixels right, not just the flow.</p>
    <img src="/assets/img/job-apps/precision-and-details.png" alt="A closeup of a spec I did calling out a specific shadow" />
  </div>

  <div class="requirement">
    <h2>Where I'm honest about the fit</h2>
    <p>Most of my last several years have been digital product work on things like design systems, roadmaps, and executive alignment. Not really art direction, creative direction, or production work. But I've done that kind of work in the past, and miss various elements of it. I use Figma day to day, but am quite comfortable in Photoshop, Illustrator, After Effects, and even Sketch if y'all are still using it. </p>
    <img src="/assets/img/job-apps/report-cards.png" alt="" />
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
