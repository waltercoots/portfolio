<script setup>
import CaseStudyHeader from '@/components/CaseStudyHeader.vue'
defineProps({ project: Object })
</script>

<template>
	<main>
		<CaseStudyHeader :project="project" />
		<div class="wide space-bottom">
			<img src="/assets/img/workstep/inform/inform-message-sent.png" alt="" />
		</div>
		<p>
			Frontline workers in warehouses and supply chains are notoriously hard to reach. They don't sit at desks. Many don't have company email. When something important happens, a facility closure, a policy change, a safety update, the message often doesn't get there in time, or at all.
			WorkStep already facilitated anonymous conversations between employees and HR, but only when an employee initiated one by leaving a comment on a survey. Employers had no way to start that conversation themselves. Inform was built to close that gap: a broadcast messaging tool that lets employers reach specific groups of workers directly, without ever exposing individual identities to the sender.
		</p>
		<div class="metric-grid space-top space-bottom">
			<div class="metric">
				<span class="metric">7K</span>
				<span class="label">messages sent by 90 companies in 3 years</span>
			</div>
			<div class="metric">
				<span class="metric">4.7M</span>
				<span class="label">messages delivered to 400K+ recipients in 3 years</span>
			</div>
			<div class="metric">
				<span class="metric">50K</span>
				<span class="label">message reactions in a year</span>
			</div>
		</div>
		<h2>The problem worth solving</h2>
		<p>The interesting part of this project was more organizational than technical. Employers needed enough precision to send the right message to the right people, but giving them a list of names and checkboxes would have undermined the trust WorkStep's anonymity model worked so hard to preserve. So the feature had to strike the right balance between allowing employers specificity without giving it the ability to invade people’s privacy, and it was on us to find the right way to accommodate it with the right balance. </p>
		<h2>Building the segment builder</h2>
		<p>The heart of Inform is a query interface that lets employers define a recipient list through stacked attribute rules (such as role, division, location, and tenure) without ever seeing who the attributes specifically match. The live count at the top of the panel quietly signals both that the list changes dynamically, but also helps signal to the employer the size the audience for the message will be and reassures them it isn’t just going into an empty void. </p>

		
		<img src="/assets/img/workstep/inform/inform-query-builder-3.png" alt="" />

		<p>
			The filter rows follow conditional logic. Selecting "Unfavorable feedback" surfaces a topic dropdown: Tools, Pay, Safety, Manager Relationship. Selecting "Employee Tenure" replaces it with a numeric range input instead. The first choice shapes what comes after. When it works well, this kind of branching interaction is completely invisible. You just feel like the interface understood what you were trying to do.
		</p>
		<p>I tried different placements for the add and remove controls before landing on left-aligned icons that form a consistent vertical axis down the panel. This bent a design system convention. Buttons with icons don't normally carry that much space between the icon and the label, but it felt more important to visually align the label with the first field of each row than to follow the rule for its own sake.</p>

		<p>The segment name field, labeled "Your employees will not see this," is a small detail that I think mattered a lot. These aren't abstract query objects, but groups of real people that managers already think about by name. The label is just a quiet acknowledgment of that.</p>
		<h2>Reviewing impact</h2>
		<p>An easy trap to fall into with a one-way communication tool like this is for it to feel like the message is going into a black hole and not seen by anyone. So to mitigate this, we opted to give a report of how many people were sent the message, via which channels, and what the open rate was like. Later after launch, we also added the ability for employees to react anonymously with an emoji which further helped reinforce that there was someone out there reading these.</p>
		<div class="image-group alt-graphs">
			<img src="/assets/img/workstep/inform/inform-graph-1.png" alt="" />
			<img src="/assets/img/workstep/inform/inform-graph-2.png" alt="" />
			<img src="/assets/img/workstep/inform/inform-graph-3.png" alt="" />
			<img src="/assets/img/workstep/inform/inform-graph-4.png" alt="" />
			<img src="/assets/img/workstep/inform/inform-graph-5.png" alt="" />
		</div>
		<p>Above are some of my early explorations for our graphs on reporting send and open rates. They were fun, but all too complicated which was why we ultimately went with a simple donut.</p>

		<h2>The cutting room floor</h2>
		<p>There were a few ideas we wound up leaving out for various reasons.</p>
		<p>
			Within the segment builder, an early direction allowed for free-form numeric input, which I thought looked better and broke up the visual monotony of the dropdown rows. But tenure wasn't going to be a primary filter for most users, and even the people who did use it wouldn't have use cases requiring precision beyond the predetermined ranges. The PM made the call to simplify it, which I agreed to. Sometimes the right design decision is the one that matches how people actually behave, not the one that offers the most control.
		</p>
		<img src="/assets/img/workstep/inform/inform-tenure.png" alt="" />
		<p>
			Another potential feature was file attachments, which we still get requests for here and there. We determined the can of worms it would open wasn't worth the revenue increase we'd see.
		</p>
		<div class="image-group attachments">
			<img src="/assets/img/workstep/inform/inform-attachments-a.png" alt="" />
			<img src="/assets/img/workstep/inform/inform-attachments-errors.png" alt="" />
		</div>
		<p>Similar to this was the idea to allow surveys to be attached to Inform messages, templated messages, and to allow the messages to contain variables. With unlimited resouces I guarantee we would have added these things and more, but for a team this small it was time to put our pencils down and move onto the next adventure.</p>
		<h2>Impact</h2>
		<p>It started as a premium upsell, but early adoption was slow. I don’t think this was because the tool didn't work, but because employers weren't sure they needed it or that their employee surveying tool was a logical place to bundle a broadcast messaging tool. Folding it into the core WorkStep package and no longer offering it as an upsell changed all this. Usage expanded quickly, and the use cases turned out to be broader than anyone on our team anticipated! 
		</p>
		<p>HR teams used it to coordinate during unexpected operational changes, warehouse managers used it to alert workers about facility closures during winter storms, someone used it to tell their team about donuts in the break room, and I live for seeing use cases like that emerge from something I made.</p>

	</main>
</template>

<style lang="scss" scoped>
div.alt-graphs * {
	@include xs {
		margin:0rem;
	}
	@include md {
		max-width:45%;
		margin:1rem
	}
}
div.attachments * {
	@include xs {
		margin:0rem;
	}
	@include md {
		max-width:45%;
		margin:1rem
	}
}

</style>"