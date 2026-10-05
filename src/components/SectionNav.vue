<script setup>
import { onMounted, onBeforeUnmount, ref, shallowRef } from 'vue'
import gsap from 'gsap'

// Floating dot navigator for .mini-case-study sections inside a case study modal.
const props = defineProps({
	scroller: { type: Function, required: true }, // returns the scrolling element
	scrollTo: { type: Function, required: true }, // (el) => smooth-scroll to el
})

const sections = shallowRef([]) // [{ el, label }]
const activeIndex = ref(-1)

// A section is "current" while it straddles this fraction of the viewport height
const ACTIVE_LINE = 0.4

// Runs every frame (see feedback on async components): picks up sections as soon as
// an async case study renders, after route changes, and after HMR, with settled layout.
const tick = () => {
	const scrollerEl = props.scroller()
	if (!scrollerEl) return

	const found = [...scrollerEl.querySelectorAll('main .mini-case-study')]
	const current = sections.value
	if (found.length !== current.length || found.some((el, i) => el !== current[i].el)) {
		sections.value = found.map((el, i) => ({
			el,
			label: el.querySelector('h2')?.textContent.trim() || `Section ${i + 1}`,
		}))
	}

	const line = window.innerHeight * ACTIVE_LINE
	const next = found.findIndex((el) => {
		const { top, bottom } = el.getBoundingClientRect()
		return top <= line && bottom > line
	})
	if (next !== activeIndex.value) activeIndex.value = next
}

onMounted(() => gsap.ticker.add(tick))
onBeforeUnmount(() => gsap.ticker.remove(tick))
</script>

<template>
	<nav v-if="sections.length > 1" class="section-nav" aria-label="Sections">
		<ul>
			<li v-for="(section, i) in sections" :key="i">
				<button
					type="button"
					:class="{ active: i === activeIndex }"
					:aria-label="section.label"
					:aria-current="i === activeIndex ? 'true' : undefined"
					@click="scrollTo(section.el)"
				>
					<span class="dot" aria-hidden="true"></span>
					<span class="tooltip" aria-hidden="true">{{ section.label }}</span>
				</button>
			</li>
		</ul>
	</nav>
</template>

<style lang="scss">
nav.section-nav {
	display: none;
	position: fixed;
	top: 50%;
	transform: translateY(-50%);
	z-index: 2;

	@include lg {
		display: block;
		left: 1.5rem;
	}

	@include xl {
		left: 2.5rem;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0.75rem 0;
		border-radius: 1rem;
		background: color-mix(in srgb, $black 6%, $white);
		@media (prefers-color-scheme: dark) {
			background: color-mix(in srgb, $white 8%, $black);
		}
	}

	button {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 1.75rem;
		height: 1rem;
		padding: 0;
		border: 0;
		background: none;
		cursor: pointer;
		transition: height 250ms cubic-bezier(.88, -0.01, .15, 1);

		&.active {
			height: 1.75rem;
		}

		&:focus-visible {
			outline: 1px solid var(--accent);
			outline-offset: -1px;
			border-radius: 0.5rem;
		}
	}

	.dot {
		display: block;
		width: 0.3rem;
		height: 0.3rem;
		border-radius: 0.15rem;
		background: color-mix(in srgb, $black 45%, transparent);
		@media (prefers-color-scheme: dark) {
			background: color-mix(in srgb, $white 45%, transparent);
		}
		transition: height 250ms cubic-bezier(.88, -0.01, .15, 1), background 150ms ease-in-out;
	}

	button.active .dot {
		height: 1.1rem;
		background: $black;
		@media (prefers-color-scheme: dark) {
			background: $white;
		}
	}

	@media (hover: hover) {
		button:hover .dot {
			background: $black;
			@media (prefers-color-scheme: dark) {
				background: $white;
			}
		}
	}

	.tooltip {
		position: absolute;
		left: calc(100% + 0.75rem);
		top: 50%;
		transform: translate(-0.25rem, -50%);
		white-space: nowrap;
		padding: 0.4rem 0.8rem;
		border-radius: 1rem;
		background: $black;
		color: $white;
		@media (prefers-color-scheme: dark) {
			background: $white;
			color: $black;
		}
		@include modular-scale(-1);
		opacity: 0;
		pointer-events: none;
		transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;
	}

	@media (hover: hover) {
		button:hover .tooltip {
			opacity: 1;
			transform: translate(0, -50%);
		}
	}

	button:focus-visible .tooltip {
		opacity: 1;
		transform: translate(0, -50%);
	}
}
</style>
