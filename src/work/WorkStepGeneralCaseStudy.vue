<script setup>
import CaseStudyHeader from '@/components/CaseStudyHeader.vue'
defineProps({ project: Object })
</script>

<template>
	<main>
		<CaseStudyHeader :project="project" />
		<div class="wide"><img src="/assets/img/workstep/ws-dashboards.png" alt="WorkStep's dashboard shown in a laptop viewport and a mobile viewport" /></div>
		<p>WorkStep was a B2B HR SaaS product that helped companies hire and retain warehouse and logistics workers. I joined shortly after they raised their series B when it was at around $2M ARR. Over the 4 years I was there, we quadrupled to $8M ARR, expanded to major customers like PepsiCo, PetSmart, and JB Hunt, and shepherded the company through its acquisition by Learning Pool (now Confirm). Here are some of my  product releases and feature highlights.</p>

		<div class="mini-case-study">
			<h2>Design system</h2>
			<p>Based on MUI, a version of the design system had been built out when I started WorkStep, but a lot of pages and components suffered from excessive (although well-meaning) nesting and kitchen sink style decisions. Pages and prototypes became so slow to open and operate that it was unbearable for everyone! </p>
			<div class="wide space-top space-bottom"><img src="/assets/img/workstep/design-system.png" alt=""/></div>

			<p>So once variables were introduced in Figma, it was a great opportunity to overhaul everything. The result was visually identical, but with <strong>85% less bloat</strong>. The tradeoff for designers meant a higher number of similar but slightly different components, but the additional upkeep was worth it.</p>
		</div>
		<div class="mini-case-study">
			<h2>AI Assistant</h2>
			<p>It started as a side comment in a workshop I ran: what if AI could flag the weird stuff in "the matrix," our survey heat map, before a manager had to go hunting for it? Over about a year, that grew into its own page, built with our CPO Justin Butler and data scientist Zack Keller.</p>
			<div class="wide space-top space-bottom">
				<video muted loop autoplay playsinline src="/assets/img/workstep/assistant-compressed.mp4" class="artificial-centering" ></video>
			</div>
			<p>We deliberately left out a free-form prompt field. Part of that was data privacy, and part was knowing a warehouse manager doesn't have time to interview a chatbot. Instead the assistant served up "maneuvers," tight little cards covering alerts, quantitative trends, and comment insights. Within five days it reached over 30% of active users, open rates held between 30 and 37%, and more than half the people who opened a maneuver clicked through to do something about it.</p>
		</div>
		<div class="mini-case-study">
			<h2>Report Builder</h2>
			<p>Customers wanted to see their WorkStep data their own way, so we set out to build them a report builder. I started by auditing every chart type we used, which nobody had ever done. Our CPO then talked me into one chart type per metric view, and that simplified everything. People picked a metric, and charts never entered the picture.</p>
			<p>After talking to customers, we found out they were taking screenshots of WorkStep charts and pasting them into PowerPoints to send to their bosses who never logged into WorkStep. So the tool evolved to be a combination BI tool and PowerPoint builder.</p>
			<div class="wide space-top space-bottom">
				<video muted loop autoplay playsinline src="/assets/img/workstep/report-creation.mp4" class="artificial-centering" ></video>
			</div>
			<p>Over 2½ years, people still built <strong>2,592 titled reports</strong> (not drafts!), <strong>22,000 cards</strong>, and more than <strong>4,000 exports</strong>.</p>
		</div>
		<div class="mini-case-study">
			<h2>Inform</h2>
			<p>Frontline workers don't sit at desks, and a lot of them don't have company email, so when a winter storm shuts down a warehouse, the message often doesn't reach them in time. WorkStep already let employees start anonymous conversations with HR through survey comments. But Inform flipped that around, allowing employers to message specific groups of workers without ever seeing any names.</p>
			<div class="wide space-top space-bottom"><img src="/assets/img/workstep/inform/inform-draft.png" alt=""/></div>
			<p>That balance between precision and privacy lived in the segment builder. Employers stacked rules like role, location, and tenure, and a live count showed how many people matched, so nobody felt like they were yelling into a void.</p>
			<div><img src="/assets/img/workstep/inform/inform-query-builder-3.png" alt="" class="artificial-centering"/></div>
			<p>Open rates and anonymous emoji reactions did the same job after a message went out. It launched as a premium upsell and barely moved until we folded it into the core package. Over 3 years, <strong>7,000 messages</strong> were sent to <strong>more than 400,000 workers</strong>. Someone even used it to announce donuts in the break room.</p>
		</div>
		<div class="mini-case-study">
			<h2>Re-architecture</h2>
			<p>WorkStep grew the way a lot of startups do, by wedging each new feature into whatever spot was open. When we needed room for Point in Time surveys next to our existing milestone surveys, there wasn't a clean place for them. That became our excuse to untangle the whole thing.</p>
			<div class="wide space-top"><img src="/assets/img/workstep/untangling/info-architecture.png" alt=""/></div>
			<div class="wide space-top space-bottom"><img src="/assets/img/workstep/untangling/stage-2-screens.png" alt=""/></div>
			<p>Lead PM Natalie Dole and I audited every page, ran card sorts and user interviews, dug through analytics, and leaned hard on our Customer Experience team, who knew exactly where people got lost. We renamed "check-ins" back to "surveys" because sales kept tripping over it, pulled Actions loose from Opportunities, and folded the scattered communication features together. It rolled out in stages so nobody logged in to a stranger's product. 20 different pages across 9 sections were overhauled, and there were 7 phase escalations with <strong>0 rollbacks</strong>.</p>
		</div>
		<div class="mini-case-study">
			<h2>Comment Insights</h2>
			<p>Frontline workers leave a lot of comments on surveys, and nobody has time to read thousands of them. Comment Insights used an LLM to sort those comments into named topics, so a manager could see something like "Attendance Policy Confusion" with a plain-language summary instead of scrolling through a wall of raw feedback. Each topic had a sparkline showing how much people were talking about it over recent weeks, plus a sentiment breakdown.</p>
			<div class="wide space-top space-bottom"><img src="/assets/img/workstep/comment-insights-3-up.png" alt=""/></div>
			<p>The catch was that it lived deep enough in the product that plenty of customers never found it. So when we built the AI Assistant, one of its maneuvers existed purely to pull new topics out of hiding and put them where people would actually trip over them.</p>
		</div>
		<div class="mini-case-study">
			<h2>Role Based Access Control</h2>
			<p>Enterprise customers like JB Hunt wanted control over who could see what, and WorkStep's permissions were a bit of a junk drawer. There were at least five kinds of roles under the hood, and plenty of them were never named or meant to be seen by anyone, admins included. Sharing a survey with a coworker, for example, quietly spun up a role just for that survey. We went through each type and decided whether it should appear in the customer-facing RBAC, and whether people could create or edit it. Those survey-sharing roles stayed hidden. Showing them would have buried the useful stuff.</p>
			<div class="wide space-top"><img src="/assets/img/workstep/rbac.png" alt=""/></div>
			<p>Most admins didn't care which group someone belonged to. They just knew Jane needed the same access as Frank. So we built a "Copy User Permissions" flow for exactly that. Data filters got the same treatment, with each one set as restricted or unrestricted and assignable to specific groups.</p>
		</div>
		<div class="mini-case-study">
			<h2>Data Export</h2>
			<p>Customers could already export filtered data from individual dashboards, but there was no way to download everything. An API would've been the right answer for some of them, but we didn't have the resources to build one, so a bulk export was the next best thing. Most folks wanted to drop WorkStep data into a heavier BI tool or line it up next to data from their other HR systems.</p>
			<div class="wide space-top"><img src="/assets/img/workstep/data-export.png" alt=""/></div>
			<p>This was some of the most sensitive data we had, and usually only one or two senior HR business partners per company were allowed near it. Exports stayed anonymous by default, with an option to include an identifier that HR could match to a person on their end. Getting into this section took an extra layer of security with two-factor authentication. Big companies' bundles could take a while to build, so this became one of the few places in WorkStep where you could walk away and get an email when your file was ready.</p>
		</div>
		<div class="mini-case-study">
			<h2>Survey Translation and Customization</h2>
			<p>Typical WorkStep surveys were automatically translated to 20 different languages, but as the product grew to accommodate more custom surveys, translation needed to be more automatic and transparent. Our first stopgap was a warning that modifying a question or its answers could break some translations, which wasn't very helpful.</p>
			<div class="wide space-top space-bottom"><img src="/assets/img/workstep/translation.png" alt=""/></div>
			<p>Some customers also had their own spreadsheets of approved wording for specific languages, so we explored letting people customize translations for both questions and answers. The UI had to handle one language or a dozen without turning into a wall of text fields. We also explored using Google translation to automatically translate for people as they edited, and allow them to preview the suggestions.</p>
			<p>We learned through talking to our customers that the use case of a big company having a large spreadsheet of translations, was very much an edge case. As WorkStep scaled, we knew we would need to accommodate that, but it wasn't necessary for this first version of translations. There were other features being modified and added to custom survey creation which ultimately steered us to keep translation as simple as possible: we landed on running every edit through Google Translate on the backend, invisible to the user. Now it worked the way everyone already assumed it did.</p>
		</div>
		

		
	</main>
</template>

<style lang="scss"></style>"