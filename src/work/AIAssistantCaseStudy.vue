<script setup>
import CaseStudyHeader from '@/components/CaseStudyHeader.vue'
defineProps({ project: Object })
</script>

<template>
	<main>
		<CaseStudyHeader :project="project" />
		<div class="wide">
			<video muted loop autoplay playsinline src="/assets/img/workstep/assistant-compressed.mp4" class="artificial-centering" ></video>
		</div>
		<p class="space-top">Before I joined, WorkStep already had a favorability matrix, a feature customers liked for comparing employee favorability across two axes like role and location. One user actually took screenshots of different versions of it to track changes over time in a deck, which is about as clear a desire path as I've ever seen.</p>
		<img src="/assets/img/workstep/matrix.png" alt="Matrix" class="space-top space-bottom"/>
		<p>When AI was getting hot, I ran an internal workshop asking how we might use it to guide employers through their survey data. One idea stuck: what if an LLM just flagged the anomalies for people instead of making them sift through a matrix? The matrix was a means to an end, and I knew there was a smarter way to get people there.</p>
		<img src="/assets/img/workstep/assistant-orig-sketch.png" alt="Matrix" class="space-top space-bottom"/>
		<p>Early versions were dashboard widgets, then feeds, side panels, inline callouts. All of it felt underwhelming, partly because it sat on top of a dashboard that was underwhelming to begin with. Bolting something ambitious onto something mediocre doesn't work. Once we'd built a related feature called Comment Insights and explored more data, we had the confidence to go bigger: a series of cards surfacing the handful of things we thought each user needed to know, no chat interface, no open prompt field. We eventually made it the new WorkStep landing screen, with the dashboard bumped to second in the nav.</p>
		<div class="wide space-top space-bottom">
			<img src="/assets/img/workstep/assistant-early-dashboard-open.png" alt="Matrix"/>
		</div>
		<p>Leaving out a text box was deliberate. Technically, we ran calculations on our own servers to limit what data touched OpenAI, which meant the assistant couldn't do much with open-ended questions anyway. But even without that constraint, I think we'd have made the same call. The goal was to decide what deserved a busy HR manager's attention right now, not to build a general-purpose chatbot.</p>
		<div class="wide space-top space-bottom">
			<img src="/assets/img/workstep/ai-assistant-maneuver-paths.png" alt="" />
		</div>
		<h2>The maneuvers</h2>
		<p>We shipped three "maneuvers": Alert surfaced flagged employee comments with context, sentiment, and a translation if needed. Quant Trend watched favorability moving averages and wrote specific copy like "Feedback favorability among your Washington D.C. employees is 6% lower than the expected range," instead of vague direction-of-travel language. Comment Insight surfaced the highest-ranked topics from an open-text analysis feature I'd also designed, since it was otherwise buried a few clicks deep. We had more ideas, but shipping three things that worked beat shipping six that didn't.</p>
		<div class="wide space-top space-bottom"><img src="/assets/img/workstep/ai-assistant-3-up.png" alt="" /></div>
		<p>Quant Trend had the best view-to-click rate of the three, which vindicated the idea that started this whole thing.</p>
		<div class="metric-grid space-top space-bottom">
			<div class="metric">
				<span class="metric">1,016</span>
				<span class="label">unique users</span>
			</div>
			<div class="metric">
				<span class="metric">30%</span>
				<span class="label">used the assistant</span>
			</div>
			<div class="metric">
				<span class="metric">57%</span>
				<span class="label">engaged</span>
			</div>
		</div>
	</main>
</template>

<style lang="scss" scoped>
</style>"