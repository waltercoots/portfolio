<script setup>
import CaseStudyHeader from '@/components/CaseStudyHeader.vue'
defineProps({ project: Object })
</script>

<template>
  <main>
    <CaseStudyHeader :project="project" />
    <img src="/assets/img/unilease/unilease-topper.png" alt="Unilease" class="space-bottom" />
    <p>Commercial real estate is an industry slow to adopt new ways of doing things. Brokers who are doing well for themselves have little incentive to change things, large firms even less so, and tenants are at the mercy of these gatekeepers’ well-established processes. Landlords seem to be involved the least of anyone.</p>
    <p>Unilease was created by a commercial real estate broker to streamline the way he did business, making it easier for both brokers and tenants. Part SaaS, part social network, I was brought in to help establish a design system, improve the existing user experience, and expand the toolset Unilease offered with the intent of it becoming a product available to all brokers and brokerages.</p>
    <p>A few things drew me to Unilease. First, my good friend and teammate from long ago worked there so I thought it would be great to work together. Second, I really liked founder and CEO Rob Marshall. But above all, the prospect of bridging the gap between two different types of users. I envisioned an experience that could be similar to gig economy products where the tech was ultimately a go-between for people looking for and offering services. Things didn’t quite pan out the way I hoped, but I learned a ton.</p>
    <h2>Brand &amp; Marketing</h2>
    <p>The initial brand direction and logo were approached with several goals in mind differentiate from competitors in the CRE tech space; elevate the company to a more exclusive and luxurious level, but also avoid feeling too affectatious to brokers’ clients. Above all else we were going for trustworthy, clean, energetic, and memorable.</p>
    <img src="/assets/img/unilease/type-exploration.png" alt="Unilease" class="space-top space-bottom" />
    <img src="/assets/img/unilease/unilease-mark-exploration.png" alt="Unilease" class="space-bottom" />
    <img src="/assets/img/unilease/unilease-patterns.png" alt="Unilease" class="space-bottom" />
    <p>We settled on a simple mark without any visual reference to buildings, offices, or stores since commercial real estate can manifest in a variety of ways. This also harkened back to Unilease’s old logo and felt like an improvement.</p>
    <img src="/assets/img/unilease/logo-standard-black.svg" alt="Unilease"  />
    <p>In parallel to logo work I’d been picking at a few different style tiles to try to build a common visual vocabulary between everyone and suss out what made the most sense. This whole time I had been working on website concepts that incorporated the new branding. Once we’d settled on a direction, the look and feel of the site began to fall into place.</p>
    <div class="image-group space-bottom space-top style-tiles">
      <img src="/assets/img/unilease/style-tile-a.png" alt="Unilease" />
      <img src="/assets/img/unilease/style-tile-b.png" alt="Unilease" />
      <img src="/assets/img/unilease/style-tile-c.png" alt="Unilease" />
    </div>
    <p>Ironically right when we were close to deciding on a finalized brand direction, we realized a very similar product in the same space was using close to the same colors and typefaces. We decided to pivot a little. This was a foundation we were all comfortable starting from, and overall I’m happy with how it shook out.</p>
    <img src="/assets/img/unilease/marketing-site.png" alt="Unilease" class="space-bottom space-top" />
    <img src="/assets/img/unilease/example-sign.jpg" alt="Unilease" class="space-bottom" />
    <img src="/assets/img/unilease/example-shirt.jpg" alt="Unilease" class="space-bottom" />
    <img src="/assets/img/unilease/example-tote.jpg" alt="Unilease" class="space-bottom" />
    <h2>Product</h2>
    <h3>Streamlining Archaic Processes</h3>
    <p>Unilease's biggest opportunity and most interesting challenge was modernizing old ways of doing things. One of these processes, surveying the market, had brokers creating files to describe leasable space their client was looking for, then playing a game of Go Fish with their network via phone and email. Some of the more complex work I did for Unilease involved this process.</p>
    <p>If you’re unfamiliar with commercial real state, it’s easy to think of it from a residential point of view. Why not just make a search engine that lists available properties? Landlords could list their properties, tenants could find them, we eliminate the need for brokers, and that’s it. But for a variety of reasons, it couldn’t be this straightforward. For starters, landlords didn’t have any incentive to change the way they did business, and brokers didn’t want to make themselves obsolete. Brokers relied heavily on their personal and professional connections, and a large part of their job was being the purveyors of this closely guarded information of which sometimes they only gained street cred and favors for. Lastly there’s a fairly large company that has an iron grip on commercial properties being listed online, and by becoming too much like it we risked alienating brokers and getting ourselves into major legal trouble.</p>
    <p>All that to say, there are much better user experiences to solve this process, but the business strategy and circumstances of the space prevented them from being feasible.</p>
    <h4>1. Creating the Market Survey</h4>
    <p>This was simple enough, it’s effectively an advanced search the broker sends out to their network to find available properties that might match what their client is wanting. If there were already properties that met those criteria which people in their network had listed within Unilease, we’d let those people know and tell them to, otherwise we’d just let them know their colleague was on the lookout for something matching that set of criteria. The most novel feature we had was the ability to draw boundaries on an interactive map.</p>
    <img src="/assets/img/unilease/market-survey.png" alt="Unilease" class="too-tight space-bottom space-top" />
    <p>The old method of doing this took 7–9 minutes. After my updates it took 1 minute, 16 seconds so 750% faster. So I’d say that’s a win.</p>
    <h4>2. Submitting Properties</h4>
    <p>This was a classic set of several data entry challenges. Too many fields, all uncategorized, no universal standardization for the data, lack of quality control, and don’t get me started on the stuff that got uploaded for location photography. OCR wasn’t an option, LLMs hadn’t made their major debut, and our dev team was a single guy so it fell on me to design the best data entry experience I possibly could.</p>
    <img src="/assets/img/unilease/property-form-modal.png" alt="Unilease" class="space-top space-bottom" />
    <img src="/assets/img/unilease/property.png" class="space-bottom artificial-centering" alt="Unilease" />
    <h4>3. Analytics, Comps, and Sharing</h4>
    <p>Given the criteria the broker entered, we could generate analytics based on peer properties and lease data, which we decided could be a great upsell. Sharing presented an avalanche of complexity. Say a broker was putting together a market survey and they were a member of a team - a hierarchy comes into play where that person’s manager should be able to see the survey as well. Then when the survey is shared with people on the tenant side, depending on how large of an organization the tenant is and how many people are involved in the decision process, the sharing of this private information quickly becomes less and less private. Our dev wanted to run the entire process using RBAC, but pigeonholing users into roles and asking admin users to categorize their team felt like a non-starter.</p>
    <img src="/assets/img/unilease/analytics.png" alt="Unilease" class="space-top space-bottom too-tight gray" />
    <p>The big elephant in the room with all three of these tasks was recruiting for research proved really difficult. We had Fullstory and the broker founding Unilease got some of his colleagues to sign up, but I really wanted to have conversations with them and get the details from them. The majority of the user feedback we got was from our founder, Rob. We all wondered if perhaps more junior brokers just starting out might find the software more helpful.</p>
    <h3 class="space-top">Business Strategy for Different Customer Tiers</h3>
    <p>Creating pricing tiers for Unilease was one of those seemingly simple decisions that turned out to be anything but. We were debating whether to add a Team tier in addition to the Free and Pro tiers, and opinions were split on how to approach it. I decided to visualize the problem to help everyone see the implications more clearly. The flowchart mapped out how each approach would affect the user journey, show all the touchpoints where human intervention would be required, and highlighted what technical changes we'd need to make to the app to support each scenario. Although I can’t remember exactly which direction we went, I can safely say the team arrived at a decision much faster.</p>
    <img src="/assets/img/unilease/unilease-pricing.png" alt="Unilease" class="space-bottom space-top" />
    <h3>Other Misc. Screens</h3>
    <p>There’s a lot more that went on at Unilease than can fit in a single case study. I worked on a design system and the flowchart for an entire app. We pivoted strategy a few different times, rebuilt the app from scratch, switched platforms the marketing site was built on, hired freelance help, and shifted the roadmap a lot. I had a good time working with those guys and hope we’re able to do it again sometime.</p>
    <img src="/assets/img/unilease/account-reg-flows.png" alt="Unilease" class="space-bottom space-top" />
    <img src="/assets/img/unilease/dashsearch.png" alt="Unilease" />
  </main>
</template>

<style lang="scss" scoped>
div.image-group {
  * {
    display:inline-block;
    @include xs {
      max-width:100%;
    }
    @include md {
      max-width:45%;      
    }
    margin:1rem;
  }
}
h3 {
  margin-bottom:0.5em;
}
h4 {
  margin:0.75rem 0;
}
.too-tight {
  padding:1.5rem;
  background:#fff;
  &.gray {
    background:#F5F4F2;
  }
}
</style>"