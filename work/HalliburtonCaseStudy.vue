<script setup>
import CaseStudyHeader from '@/components/CaseStudyHeader.vue'
defineProps({ project: Object })
</script>

<template>
  <main>
    <CaseStudyHeader :project="project" />
    <img src="/assets/img/halliburton/home.png" alt="Halliburton" class="space-bottom" />
    <p>To be completely candid, I had more than a little reluctance to work on any kind of fossil fuel client, especially Halliburton. But when our director of product design approached me about it, I gave it some thought, researched the industry more, learned about Halliburton’s role in it, and after learning about their sustainability efforts and considered the end users who the project would be helping (basically geologists and scientists), I decided to accept the project.</p>
    <p>There were really good people I got to work with at Halliburton, and I was quite happy with how far we were able to push the design for a somewhat conventional company.</p>
    <img src="/assets/img/halliburton/halliburton-b-and-a.png" alt="Halliburton" class="space-bottom space-top" />
    <p>Halliburton’s old site felt extremely dated, and their limited color palette wasn’t doing them any favors. Though it was being designed for the web, we knew whatever we’d be creating may be leveraged by Halliburton for other marketing materials. After extensive research and interviews (shout out to our rockstar content strategist <a href="https://www.linkedin.com/in/mgherron/" target="_blank">Matt Herron</a>), the team created mood boards to share some ideas with the client. There were a lot of rounds, some of which we presented directly to the C suite.</p>
    <img src="/assets/img/halliburton/ds.png" alt="Halliburton" class="space-bottom space-top"/>
    <p>After conducting several workshops with the client, we established a set of modular components that Halliburton was able to use, as well as extensive guidelines on usage. It was my first time documenting components to this level of detail, and I learned a lot on the project.</p>
    <p>Wayfinding was a big issue for Halliburton’s audience. We also learned through research that a lot of newcomers to the industry aren’t familiar with the jargon, and visit sites like Halliburton to learn it. This Wizard was designed to help visitors find what they were looking for when they didn’t necessarily know what to call it. Some participants in workshops questioned the need to have another means of navigation on top of search and standard navigation links, but we explained it was like going to the wine shop knowing what you were making for dinner but not knowing what paired with it.</p>
    <img src="/assets/img/halliburton/wizard-states.png" alt="Halliburton" class="space-bottom space-top"/>
    <p>There were several major challenges to the Wizard. The first was that it needed to be able to scale and change with the company, but we didn’t have time to enable management of it (in the traditional sense) within the CMS our engineers were building. The other was that we had no idea how many directions it needed to accommodate, or what the scope of the questions might be. The system we wound up creating used elaborate processes and rigorous guidelines to allow an unusual but effective way of editing the Wizard to keep it from breaking.</p>
    <img src="/assets/img/halliburton/wizard-sketches.png" alt="Halliburton" class="space-bottom space-top" />
    <p>Outside of planning and running workshops to resolve all of our Wizard questions, I also designed the interactions and animations. I helped communicate all of this using InVision Studio, and fortunately had wonderful dev help from extremely talented developers who could take the ball and run with it.</p>
    <img src="/assets/img/halliburton/halworld-cropped.png" alt="Halliburton" class="space-bottom space-top" />
    <p>My final work with Halliburton was on their company intranet, which took a lot of cues from the marketing site’s design, but importantly differentiated itself so folks weren’t confused as to whether they were looking at public or private content. There were several new components created which were designed to service the internal Halliburton employee rather than external customers.</p>
    <video muted loop autoplay playsinline src="/assets/img/halliburton/hal.mp4" class="space-bottom space-top"></video>
  </main>
</template>

<style lang="scss">
</style>"