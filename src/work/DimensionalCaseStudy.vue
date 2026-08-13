<script setup>
import CaseStudyHeader from '@/components/CaseStudyHeader.vue'
defineProps({ project: Object })
</script>

<template>
  <main>
    <CaseStudyHeader :project="project" />
    <img src="/assets/img/dfa/01-home-d.jpg" alt="DFA" class="space-bottom" />
    <p>Dimensional Fund Advisors is an investment firm based in Austin that stands apart from the usual Wall Street suspects. Founded on academic research rather than market predictions, DFA takes a refreshingly different approach to managing money. While most investment firms are busy trying to time the market or pick winning stocks, Dimensional focuses on capturing returns through scientifically-tested factors that drive performance over time.</p>
    <h2>Process</h2>
    <p>This project was similar to the Austin Film Society site redesign, but on a smaller website and with fewer stakeholders. The client being an investment firm instead of a non-profit film collective led to differences in the tone of both the design and the level of rigor that went into the design and specs, plus the content was a lot more dense.</p>
    <p>I was involved in early UI concepting, UX design, and production on the deliverables as well as some interfacing with the offshore developers on the project. There were about 10 different templates comprising 16 different content components.</p>
    <img src="/assets/img/dfa/04-phone.jpg" alt="DFA" class="artificial-centering space-bottom"/>
    <img src="/assets/img/dfa/02-lowfi-wires.jpg" class="artificial-centering space-bottom" alt="DFA" />
    <p>Pages were structured using a series of reusable building blocks so that the client could mix and match to make new pages as necessary, even after our contract with them ended. We created low fidelity wireframes to illustrate which blocks would be used where. Each component had its own documentation to show how it operated. This is the page for the primary nav bar.</p>
    <img src="/assets/img/dfa/03-highfi-wires.png" alt="DFA" class="space-bottom" />
    <img src="/assets/img/dfa/dfa-home-wires.png" alt="DFA" class="space-bottom"  />
    <p>These are some of the wireframe annotations detailing the different components within the pages, our taxonomy for them, and how they should function.</p>
    <video muted loop autoplay playsinline src="/assets/img/dfa/home-concept.mp4" class="space-bottom space-top" ></video>
    <p>During the UI concepting phase, this was a homepage scrollytelling style animation I had been toying around with.</p>
    <img src="/assets/img/dfa/lang-480.png" alt="DFA" class="space-bottom artificial-centering" />
    <img src="/assets/img/dfa/lang-1280.png" alt="DFA" class="space-bottom" />
    <p>One of the biggest things I learned from this project was the importance of working closely with a dev team who understands my process and who can come to me with questions and problems as they arise. Despite our best efforts to detail everything as much as possible, there would still be misunderstandings that would come up, or unforeseen idiosyncrasies of frontend development we hadn’t accounted for. We were all happy with the end result, but I think we could have gotten there faster and with fewer headaches if we’d all been on the same team.</p>
  </main>
</template>

<style lang="scss">
</style>"