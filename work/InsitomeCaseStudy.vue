<script setup>
import CaseStudyHeader from '@/components/CaseStudyHeader.vue'
defineProps({ project: Object })
</script>

<template>
  <main>
    <CaseStudyHeader :project="project" />
    <div class="image-group mobile-screens space-bottom"><img src="/assets/img/insitome/Neanderhtal_Insight@2x.png" alt="Insitome" style="width: 420px; display: inline-block;" /><img src="/assets/img/insitome/Metabolism_Trait-Top@2x.png" alt="Insitome" style="width: 420px; display: inline-block;" /><img src="/assets/img/insitome/Regional-Ancestry_Dashboard@2x.png" alt="Insitome" style="width: 420px; display: inline-block;" /><img src="/assets/img/insitome/Regional-Ancestry_Subregion@2x.png" alt="Insitome" style="width: 420px; display: inline-block;" /><img src="/assets/img/insitome/Metabolism_Trait-Infographics@2x.png" alt="Insitome" style="width: 420px; display: inline-block;" /></div>
    <p>Insitome (pronounced insight-oam) was a company partnered with DNA testing platform, Helix. Similar to 23andMe, Helix sequenced people’s DNA via mail-in saliva samples, but what made them different was providing the data to third-party app developers in a marketplace. The idea was for Helix to create a sort-of app store where people making the apps could leverage the DNA you had on file with Helix.</p>
    <p>Insitome was one of these creators, and sold separate edutainment modules that used DNA to shed light on people’s various traits.</p>
    <p>With branding and packaging created by <a href="https://elbow.com" target="_blank">Elbow</a>, and one product (Neanderthal) already in the wild, my job was to help launch two sister products, Metabolism and Regional Ancestry.</p>
    <img src="/assets/img/insitome/OnboardingFlow@2x.png" alt="Insitome" class="space-bottom" />
    <p>But before we’d do that, there were some problems with the existing onboarding process the team wanted help with. The existing onboarding had several steps, many of which weren’t skippable. Helix acting as a middleman between the apps on its marketplace and the end-user created a lot of interesting challenges from an onboarding perspective. So I put together a bevy of recommended hotfixes to make it easier for folks to activate their accounts and sign in.</p>
    <img src="/assets/img/insitome/email-stepper.png" alt="Insitome" class="space-top space-bottom" />
    <img src="/assets/img/insitome/icon-animations.gif" alt="Insitome" class="artificial-centering space-bottom"  />
    <p>There was a contractual obligation with Helix that created an added challenge both an iOS version and a responsive web version needed to be created in parallel. Since I‘d never worked alongside an iOS developer before, I was grateful to have someone who helped me understand the nuances of layout in iOS and how they differed from web. The good news was the functionality was quite straightforward which made parity fairly easy.</p>
    <img src="/assets/img/insitome/migration.gif" alt="Insitome" class="space-top" />
    <img src="/assets/img/insitome/WorldMap@2x.png" alt="Insitome" class="space-top space-bottom" />
    <p>Maps were a big part of Insitome. Sitting alongside the director of science content, I acted as a pair of hands to get the regions and migration paths in the right places with the right amount of overlap. I had concepts of maps animating as the user navigated, but the scope was too big for our release timeline.</p>
    <p>All three Insitome products were fairly static. The interactivity was navigating from one page to another, so the value I was able to add was helping the team understand the content hierarchy, envision how things would look, and providing as many supporting graphics as I was able.</p>
    <img src="/assets/img/insitome/responsive@2x.png" alt="Insitome" class="space-bottom space-top"  />
    <p>After launching the Metabolism and Regional Ancestry products, I helped create an ad for Genome magazine. Several rough concept sketches were presented, and the CEO fell in love with the idea of a decoder ring because he thought it would strike a nostalgia chord with the magazine’s audience. I styled and directed the shot, retouched the photos, layed out the ad, and coordinated with Helix’s legal team and Genome magazine.</p>
    <img src="/assets/img/insitome/GenomeAdSketches@2x.png" alt="Insitome" class="space-top"  />
    <img src="/assets/img/insitome/Genome-Ad-Layout@2x.jpg" alt="Insitome" class="space-bottom space-top"  />
    <p>Toward the end of my tenure after the modules had been released, we wanted to add sharing features in. I created two basic user flows, one for sharing a static image and another for sharing a public user profile.</p>
    <img src="/assets/img/insitome/sharing-lod-selection.png" alt="Insitome" class="space-bottom space-top"  />
    <img src="/assets/img/insitome/sharing-no-lod-selection.png" alt="Insitome" class="space-bottom"  />
    <div class="image-group share-screens space-below">
      <img src="/assets/img/insitome/share-card-ancestry.png" alt="Insitome" />
      <img src="/assets/img/insitome/share-card-lifestyle.png" alt="Insitome" />
      <img src="/assets/img/insitome/share-card-metabolism.png" alt="Insitome" />
      <img src="/assets/img/insitome/share-card-nenderthal.png" alt="Insitome" />
    </div>
    <p>After the holidays were over, I helped design a new marketing site but before construction was complete, Insitome parted ways with its product and engineering staff to put the company in maintenance mode. Helix shifted its focus to partnerships with healthcare systems and population genomics programs, and discontinued its consumer marketplace.</p>
    <img src="/assets/img/insitome/Marketing-Site@2x.jpg" alt="" class="space-top" />
  
  </main>
</template>

<style lang="scss" scoped>
  div.mobile-screens * {
    max-width:30%;
  }
  div.share-screens * {
    max-width:40%;
    margin:1rem
  }
</style>"