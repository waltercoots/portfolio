<script setup>
import CaseStudyHeader from '@/components/CaseStudyHeader.vue'
defineProps({ project: Object })
</script>

<template>
  <main>
    <CaseStudyHeader :project="project" />
    <img src="/assets/img/afs/01-homed.jpg" alt="Austin Film Society" class="space-bottom"/>
    <p>Nearly 10 years ago when I worked at Foxtrot, I was beyond excited that I got to be the lead UX designer on the revamped Austin Film Society website. The old site was pretty confusing and difficult to navigate, and because AFS does so many different things which are managed by so many different stakeholders, my role was mainly to work with these stakeholders to untangle the information architecture and ensure the most prominent areas of their site matched the prominence of the organization’s goals.</p>
    <p>The people at the organization were terrific to work with, as was Oscar Morris who collaborated with me on the UI and did their terrific branding. The branding and site launch coincided with AFS opening AFS Cinema. While I have no quant or qual data on the success of the site, they’re still <a href="https://www.austinfilm.org" target="_blank">using the same design</a> (as of June 2026), and AFS Cinema remains Austin’s only nonprofit art house theater.</p>
    <h2>Process</h2>
    <p>The first big piece of the puzzle was a content audit, which involved mapping out the existing site and logging every chunk of UI and content on every page. Everything was logged into a spreadsheet, and meetings were held with the appropriate stakeholders to figure out what needed to stay and what could go, as well as who was responsible for keeping which piece updated. This was my first time doing a real content audit and working on an information architecture of this size, so I learned a lot, and when doing a project like this, I still use similar methods today.</p>
    <img src="/assets/img/afs/03-content-mapping.jpg" alt="Austin Film Society" class="space-bottom" />
    <p>Dev resources were limited, so bearing that in mind and wanting to maintain consistency across the site we came up with several reusable content modules. As I was going through the audit, I identified similarities where pieces of content could use the same module. This also helped us define how many times any given module was being used.</p>
    <img src="/assets/img/afs/05-sitemap.png" alt="Austin Film Society" class="space-bottom space-top" />
    <p>A sitemap was put together with a hierarchy that made more sense, and the content modules were color-coded and organized so we could try to highlight similarities between pages. We realized the majority of pages were pretty basic content and could be handled by a few common page templates.</p>
    <img src="/assets/img/afs/content-framework.png" alt="Austin Film Society" class="space-bottom space-top" />
    <img src="/assets/img/afs/04-recipes.jpg" alt="Austin Film Society" class="space-bottom" />
    <img src="/assets/img/afs/common-wires.png" alt="Austin Film Society" class="space-bottom" />
    <p>For the remaining pages, we identified some common user goals and how they’d be accomplished coming from different sources.</p>
    <img src="/assets/img/afs/buying-ticket-user-flow.png" alt="Austin Film Society" class="space-bottom space-top" />
    <p>By this point we were getting into wireframe territory to identify exactly how on the more complex pages users would accomplish their goals such as buying tickets to see a movie, donating, or signing up for classes. This was where mine and Oscar’s work began to overlap the most and where the site finally started to take shape.</p>
    <img src="/assets/img/afs/screening-x-ux.png" alt="Austin Film Society" class="space-bottom space-top" />
    <img src="/assets/img/afs/screening-x-ui.jpg" alt="Austin Film Society" class="space-bottom" />
    <p>The last anecdote I have here is that the sitemap was originally manually created using Adobe Illustrator, which at the time didn’t have any kind of automatic layout capabilities. The manual nature of making small changes became pretty tedious, so I coded <a href="https://lab.waltercoots.com/taxonomy/" target="_blank">a tool</a> to do it in a web browser. I’ve reused this tool over the years and often daydream of making a web content planning tool to simplify a lot of what I did on this project, because it’s very much a collaborative process that could benefit from having a robust, dedicated tool.</p>
  </main>
</template>

<style lang="scss">
</style>"