<script setup>
import CaseStudyHeader from '@/components/CaseStudyHeader.vue'
defineProps({ project: Object })
</script>

<template>
  <main>
    <CaseStudyHeader :project="project" />
    <img src="/assets/img/sxsw/01-landing.jpg" alt="SXSW" class="space-bottom" />
    <p>Each year, Music / Film / Interactive festival SXSW (South by Southwest) likes to highlight some of the lesser-known artists who will be performing. So they invite bloggers and music journalists from around the world to pick any artist on the upcoming SXSW schedule, and write a paragraph about them. 2017 was the first year they moved the guide to the web, and my role as the lead UX designer involved project scoping, persona creation, leading internal workshops, and acting as a liaison between UI, UX, and dev.</p>
    <h2>Process</h2>
    <p>The personas we created were provisional in nature. While we didn’t identify festival goers and interview them, we had a lot of friends who attended the festival and as music lovers ourselves were solving problems we knew we and other attendees would face.</p>
    <img src="/assets/img/sxsw/07-persona.jpg" alt="SXSW" class="space-bottom" />
    <img src="/assets/img/sxsw/06-wires.jpg" alt="SXSW" class="space-bottom" />
    <p>The team created rough wireframe sketches separately, then came together as a group to share ideas and evaluate. The stickies were us organizing our thoughts on common elements we were seeing across everyone's ideas.</p>
    <p>One tricky aspect about this project was that it was to be a completely separate entity from the official SXSW website, and this meant that utilizing schedule info was a non-starter. Early concepts had ideas around a mobile experience that would highlight bands in real-time based on a person’s location. You’re at the Fader Fort seeing Danny Brown. Earl Sweatshirt will be playing 2 blocks away in 30 minutes, here’s what MXDWN has to say about him. If the goal of the blogger’s guide was to expose bands, this would be a great way to do it.</p>
    <p>Another initial idea included the ability for users to make and share playlists of their favorite artists in the guide. But for business reasons, we shelved the idea for another time. We also had loftier ideas for names (I was lobbying for Under the Radar) but due to the naming system for SXSW’s tightly managed brand, were forced to keep it simple and straightforward. The final structure of the site was fairly simple.</p>
    <img src="/assets/img/sxsw/08-flowchart.jpg" alt="SXSW" class="space-bottom" />
    <img src="/assets/img/sxsw/artist-details-wire.png" alt="SXSW" class="space-bottom" />
    <h2>Outcome</h2>
    <p>Unfortunately I don’t have any metrics on how the site was used, how much traffic it got, or whether it led to more business for Foxtrot who was doing the site at a discount in return for a credit on the site. But it’s a project I learned a lot from, and am happy with the results. Credit for the final UI goes to <a href="https://greganthonythomas.com" target="_blank">Greg Anthony Thomas</a> and <a href="https://oscarmorris.design" target="_blank">Oscar Morris</a>.</p>
    <img src="/assets/img/sxsw/02-browse.jpg" alt="SXSW" class="space-top space-bottom" />
    <img src="/assets/img/sxsw/03-artist.jpg" alt="SXSW" class="space-bottom" />
    <img src="/assets/img/sxsw/04-directory.jpg" alt="SXSW" class="space-bottom" />
    <img src="/assets/img/sxsw/05-mbg-phone.jpg" alt="SXSW" class="artificial-centering" />
  </main>
</template>

<style lang="scss">
</style>"