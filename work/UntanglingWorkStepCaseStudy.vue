<script setup>
import CaseStudyHeader from '@/components/CaseStudyHeader.vue'
defineProps({ project: Object })
</script>
<template>
  <main>
    <CaseStudyHeader :project="project" />
    <p>SaaS products have a habit of building their navigation the way cities build roads: one addition at a time, each one making sense at the moment it goes in, until one day nobody knows how to get anywhere anymore. That's roughly where WorkStep was when we decided to do something about it.</p>
    <div class="wide"><img src="/assets/img/workstep/untangling/old-sitemap.png" alt="" class="space-top space-bottom"/></div>

    <p>We called surveys "check-ins" to soften the monitoring feel for frontline workers, except everyone outside WorkStep still called them surveys, which tripped up prospects trying to figure out who'd even pay for the thing. The nav had been built around one survey type, milestone check-ins at day 30 or day 90, and when we added kiosk surveys and custom ones, that structure didn't bend so much as crack. You'd edit a survey's settings in one section, read its comments in another, and check its results in a third, with no way to jump between them. Add in communication features scattered everywhere, admin functionality with no fixed address, and a nav that reflected how our internal teams organized their work instead of how customers used the product, and the case for tearing it down was easy to make.</p>

    <div class="metric-grid space-top space-bottom">
      <div class="metric">
        <span class="metric">20</span>
        <span class="label">pages across 9 sections overhauled</span>
      </div>
      <div class="metric">
        <span class="metric">7</span>
        <span class="label">phase escalations</span>
      </div>
      <div class="metric">
        <span class="metric">0</span>
        <span class="label">rollbacks</span>
      </div>
    </div>
    <!-- <p>The core product was built around surveys, or as we’d been calling them, “check-ins.” The friendlier name had been a deliberate choice, meant to soften what could feel like constant monitoring for frontline workers. It wasn’t a bad idea, but the problem was that everyone outside WorkStep (including prospects and new customers) called them “surveys”. The mismatch was creating confusion and friction when prospects were trying to figure out which of their departments would be responsible for paying for the software, and if other software they could consolidate by going with ours. There were several instances of little idiosyncrasies like this one.</p>
    <p>Beyond just naming, there were structural issues that had festered into bigger problems as new features had been bolted on. At the time of the project, the biggest rift was that the product had grown around a primary survey type: milestone check-ins, sent automatically at key tenure dates like day 30 or day 90. That model shaped everything, but we started supporting other surveys such as a suggestion-box style kiosk and custom surveys that customers were using for things like annual engagement surveys.</p>
    <div class="wide space-top space-bottom"><img src="/assets/img/workstep/untangling/old-sitemap-checkins.png" alt="" /></div>
    <p>
      This caused scenarios where someone would have to modify the settings of a survey under one section, view the comments for that survey under another, and see the quantitative results of it under yet another. The areas above highlight those different sections. The second tier links also only showed up once you were in a given section, so you couldn’t navigate from the Favorability tab under Insights to the Analysis tab under Feedback.
    </p>
    <p>There was also the Opportunities and Actions problem. Opportunities surfaced algorithm-driven turnover reduction recommendations. Actions let managers log what they were doing about them. They’d been built as a pair, which made sense initially, but the coupling had become a constraint. We wanted Actions to work independently for things that weren’t tied to any opportunity at all. As long as they lived inside Opportunities, that felt really obtuse.</p>
    <p>At the time the project was kicking off, WorkStep had two products: WorkStep RETAIN and WorkStep HIRE. We’d decided to sunset HIRE as the business opportunity wasn’t as profitable as RETAIN was, and this helped simplify things for the new information architecture. Although we still needed to support a link to the HIRE product, it freed up certain valuable nav link names such as Home and Analytics to be used in the new world if they made sense.</p>
    <p>Add in scattered communication features, enterprise admin functionality spread across multiple corners of the product, and navigation that reflected how our internal teams thought about the product rather than how customers used it, and the case for a full re-architecture was easy to make.</p> -->
    <h2>The Process</h2>
    <p>I led this alongside Natalie Dole, our Senior PM. We ran the research together: card sorting to understand mental models, interviews across customer roles and company sizes, analytics on where people actually spent time and dropped off, and a lot of conversations with our Ops and CX teams, who turned out to have a clearer picture of the product's friction points than almost anyone.</p>
    <aside class="pull-quote">
      <figure>
        <blockquote>
          <p>Just make it make sense.</p>
        </blockquote>
        <figcaption>— Justin Butler, <cite>CTO</cite></figcaption>
      </figure>
    </aside>
    <p>Internally, everyone had opinions, which meant people cared, but it also meant a good chunk of the work was building consensus without letting the design turn into a committee product. Opportunity solution trees became our friend here, giving stakeholders something concrete to reference when a decision didn't go the way they'd lobbied for.</p>
    <div class="wide space-top space-bottom">
    <img src="/assets/img/workstep/untangling/stage-2-screens.png" alt="" />
    </div>
    <div class="wide space-top space-bottom">
      <video muted loop autoplay playsinline src="/assets/img/workstep/untangling/content-audit-sm.mp4"></video>
    </div>
    <h2>Holding the line</h2>
    <p>Everyone had a pet project they wanted folded into this one. The dashboard was the clearest example: outdated, underused, and sitting at the top of the nav. We had plenty of ideas for fixing it properly, but that was a project of its own. So we scoped our changes to what was reasonable without opening that can of worms, and moved on.</p>
    <div class="image-group share-screens space-bottom">
      <img src="/assets/img/workstep/untangling/concept-activity-feed.png" alt="" />
      <img src="/assets/img/workstep/untangling/concept-settings-menu.png" alt="" />
      <img src="/assets/img/workstep/untangling/concept-search.png" alt="" />
    </div>
    <img src="/assets/img/workstep/untangling/outlier.png" class="space-bottom" alt="" />
    <img src="/assets/img/workstep/untangling/mapping.png" alt="" class="space-top space-bottom"/>
    <h2>The outcome</h2>
    <p>The new architecture shipped in stages over about a year, which let customers absorb the changes gradually and let our dev team focus on quality in one area at a time instead of getting steamrolled by a full rebuild. The result: no surge in support tickets, no confusing sales demo moments, and nothing we shipped got rolled back. For a change this size, quiet is exactly what you want.</p>
  </main>
</template>

<style lang="scss">
div.share-screens * {
  max-width:40%;
  margin:1rem
}
</style>