<script setup>
import CaseStudyHeader from '@/components/CaseStudyHeader.vue'
defineProps({ project: Object })
</script>

<template>
  <main>
    <CaseStudyHeader :project="project" />
    <img src="/assets/img/hallmark/design-system.png" alt="Hallmark" class="space-bottom" />
    <p>People close to me can tell you that I can be kind of a schmaltzy guy, and part of the reason I went to an agency was so I could work on bigger name projects. So when I was interviewing with T3 and learned my first client would be Hallmark, you could imagine my excitement! On my second day of work, I flew to their corporate HQ in Kansas City to meet the team and participate in workshops where I learned about the projects and who we were building them for.</p>
    <div class="image-group space-top space-bottom"><img src="/assets/img/hallmark/treatment-a-edit.gif" alt="Hallmark" /><img src="/assets/img/hallmark/treatment-b-edit.gif" alt="Hallmark" /><img src="/assets/img/hallmark/treatment-c-edit.gif" alt="Hallmark" /><img src="/assets/img/hallmark/treatment-d-edit.gif" alt="Hallmark" /><img src="/assets/img/hallmark/treatment-e-edit.gif" alt="Hallmark" /><img src="/assets/img/hallmark/treatment-f.gif" alt="Hallmark" /></div>
    <p>We were designing what would eventually become the new Hallmark Cards site. Our engagement lasted over a year, so I was involved in a variety of initiatives coordinating with other designers on laying the groundwork for a new design system; designing the main navigation; collaborating with Hallmark’s internal stakeholders on how the new site’s registration would work with Hallmark’s Crown Rewards program; and designing the product details page (PDP) to name the big ones.</p>
    <video muted loop autoplay playsinline src="/assets/img/hallmark/simul-scroll-test.mp4" class="space-bottom space-top"></video>
    <img src="/assets/img/hallmark/pdp-side-by-side.png" alt="Hallmark" class="space-bottom" />
    <p>This was my first time designing a PDP for a company as big as Hallmark, and I learned a lot about order fulfillment and the different ways a product needed to be represented. Designing the find-a-store feature was also a cool challenge with a lot of edge cases to account for.</p>
    <img src="/assets/img/hallmark/Find-a-Store-Behavior.png" alt="Hallmark" class="space-bottom"  />
    <img src="/assets/img/hallmark/Find-a-Store-States.png" alt="Hallmark" class="space-bottom"  />
    <img src="/assets/img/hallmark/HM-Address-Lockups.png" alt="Hallmark" class="space-bottom"  />
    <img src="/assets/img/hallmark/login-flow.png" alt="Hallmark" class="space-bottom"  />
    <p>Flowchart detailing sign up behavior. Hallmark’s leadership wanted user registration to automatically assign a rewards account to any new user signing up. But because customers could enroll in the rewards program at a physical Hallmark store without providing an email address, we wanted to afford the ability to link an existing rewards program account during account registration. Similar functionality existed in the account area, but we knew resolving it here would reduce support call volume to Hallmark.</p>
    <p>One of the coolest features I helped with was a means for folks to create custom cards. This was a brand new feature for Hallmark, so our team was able to really have fun with it.</p>
    <img src="/assets/img/hallmark/POD-Non-Color-Sku-Inside-Right.png" alt="Hallmark" class="space-bottom space-top artificial-centering tallboy"  />
    <p>Hallmark saw an enormous increase in card sales after the launch of this new site. Although it was during the 2020 COVID-19 pandemic and folks wanting to reach out to each other from afar was no doubt partly responsible, I know our work contributed to this and at the end of the day helped brighten some people’s days. What more can you ask for? I’ve stayed in touch with some of the people from this era and hope I get to work with them again sometime.</p>
  </main>
</template>

<style lang="scss">
.tallboy {
  @include xs {
    max-width:70%;
  }
}
</style>"