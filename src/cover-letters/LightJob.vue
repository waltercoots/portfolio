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
        <h1>Hello, Light</h1>
        <p>I know you’re going through a lot of applications, so I’ve put together some highlights on how I align with what you’re looking for.</p>
        <p>Twenty years of dropping into categories I didn't know. Logistics, health diagnostics, genomics, commercial real estate, financial software. Researching my way into what actually mattered before designing anything. That's close to the job description here. One honest gap: no energy or utility experience yet.</p>
      </header>
<div class="requirements-list">

  <div class="requirement">
    <h2>Dropping into unfamiliar categories</h2>
    <p>Insitome put me in genomics, a category with no existing design playbook to borrow from. I mapped scientific content into onboarding flows so someone with zero background could actually use the product. Same thing at EverlyWell with lab diagnostics, and at Unilease with commercial real estate. Instead of waiting to become an expert, I go find out what the people using the thing actually care about, then design from there.</p>
    <img src="/assets/img/job-apps/collaborative.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Journey mapping and inflection points</h2>
    <p>Re-designing the IA for an enterprise SaaS app started because the navigation felt wrong, not because anyone handed me a spec. I went looking for where people actually lost confidence in the product. And at EverlyWell, redesigning product pages around where customers hesitated before buying drove a 25% sales increase. Different companies, same skill: finding the moment someone commits or walks away.</p>
    <img src="/assets/img/job-apps/user-flow.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Researching before building</h2>
    <p>I ran user research at Intuit to catch usability problems before they shipped. The WorkStep IA work came out of research I did, not a brief someone wrote for me first. I'd rather spend a week validating a direction than six months building the wrong one.</p>
    <img src="/assets/img/job-apps/strategic-influence.png" alt="A closeup of a spec I did calling out a specific shadow" />
  </div>

  <div class="requirement">
    <h2>Working inside a system, and building one from scratch</h2>
    <p>I built WorkStep's design system from the ground up, so I know what it costs to hold one together at scale. But a good chunk of my career has been working inside systems other people built, at T3, at Foxtrot, pushing on them through critique rather than insisting on a rewrite. That's the partnership model here, not a solo craft exercise.</p>
    <img src="/assets/img/job-apps/design-systems@2x.png" alt="Example design system from a project with Halliburton" />
  </div>

  <div class="requirement">
    <h2>Running my own game plan</h2>
    <p>First designer at Unilease. Sole designer through EverlyWell's hypergrowth stretch. Nobody was handing me a roadmap in either case, I had to build one and get people aligned behind it. That's most of what this role sounds like it needs, someone who can set the direction themselves and bring the team along on the thinking, not wait for it to arrive.</p>
    <img src="/assets/img/job-apps/nice-interfaces.png" alt="" />
  </div>

  <div class="requirement">
    <h2>Where I'm honest about the gap</h2>
    <p>I don't know energy or utilities. Haven't touched the category. I don't think that's really what this role is testing for, given how much of it is about researching your way into categories you don't know yet, but I'd rather say it outright than have it come up sideways later.</p>
    <img src="/assets/img/job-apps/accessible-international-button.png" alt="A11y buttons" />
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
