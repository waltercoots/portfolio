<script setup>
import { computed, defineAsyncComponent, onMounted, onBeforeUnmount, ref } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import workData from '@/assets/work.json'
import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
let lenis = null;
let navScrollTrigger = null;
let onLenisScroll = null;

const applyParallax = () => {
	document.querySelectorAll('div.lead img').forEach(img => {
		const lead = img.closest('div.lead')
		if (!lead) return
		const { top, height } = lead.getBoundingClientRect()
		const viewH = window.innerHeight
		const parallaxDistance = height * 0.7
		const y = gsap.utils.clamp(
			-parallaxDistance,
			0,
			gsap.utils.mapRange(viewH, -height, -parallaxDistance, 0, top)
		)
		gsap.set(img, { y })
	})
}

const route = useRoute()
const router = useRouter()
const modules = import.meta.glob('@/work/*.vue')
const transitionName = ref('slide-left')
const footerVisible = ref(true)

const projects = computed(() => workData.projects || [])

const currentIndex = computed(() => {
	return projects.value.findIndex((project) => project.slug === route.params.slug)
})

const project = computed(() => {
	if (currentIndex.value === -1) return null
	return projects.value[currentIndex.value]
})

const previousProject = computed(() => {
	if (!projects.value.length || currentIndex.value === -1) return null
	const previousIndex = (currentIndex.value - 1 + projects.value.length) % projects.value.length
	return projects.value[previousIndex]
})

const nextProject = computed(() => {
	if (!projects.value.length || currentIndex.value === -1) return null
	const nextIndex = (currentIndex.value + 1) % projects.value.length
	return projects.value[nextIndex]
})

const caseStudyComponent = computed(() => {
	if (!project.value?.file) return null

	const path = `/src/work/${project.value.file}.vue`
	const loader = modules[path]

	return loader ? defineAsyncComponent(loader) : null
})

const onBeforeLeave = () => {
	footerVisible.value = false
}

const onAfterLeave = () => {
	lenis?.scrollTo(0, { immediate: true })
}

const onAfterEnter = () => {
	footerVisible.value = true
	applyParallax()
	if (!navScrollTrigger) {
		setupNavScrollTrigger()
	} else {
		navScrollTrigger.refresh()
	}
	resizeAfterImagesLoad()
}

const resizeAfterImagesLoad = () => {
	const modalEl = document.querySelector('div.modal.case-studies')
	const pending = modalEl ? [...modalEl.querySelectorAll('img')].filter((img) => !img.complete) : []
	if (!pending.length) {
		lenis?.resize()
		navScrollTrigger?.refresh()
		return
	}
	let remaining = pending.length
	const done = () => {
		if (--remaining === 0) {
			lenis?.resize()
			navScrollTrigger?.refresh()
		}
	}
	pending.forEach((img) => {
		img.addEventListener('load', done, { once: true })
		img.addEventListener('error', done, { once: true })
	})
}

const setupNavScrollTrigger = () => {
	const modalEl = document.querySelector('div.modal.case-studies')
	const navEl = document.querySelector('nav.modal-controls.case-studies')
	const footerEl = modalEl?.querySelector('.case-study-footer')
	if (!modalEl || !navEl || !footerEl) return

	ScrollTrigger.scrollerProxy(modalEl, {
		scrollTop(value) {
			if (arguments.length) modalEl.scrollTop = value
			return modalEl.scrollTop
		},
		getBoundingClientRect() {
			return { top: 0, left: 0, width: modalEl.clientWidth, height: modalEl.clientHeight }
		}
	})

	navScrollTrigger = ScrollTrigger.create({
		scroller: modalEl,
		trigger: footerEl,
		start: 'bottom bottom+=225',
		onEnter: () => gsap.to(navEl, { opacity: 0, pointerEvents: 'none', duration: 0.25 }),
		onLeaveBack: () => gsap.to(navEl, { opacity: 1, pointerEvents: 'auto', duration: 0.25 }),
	})
}

const goToNextProject = () => {
	if (!nextProject.value) return;
	transitionName.value = 'slide-left';
	router.push({ path: `/work/${nextProject.value.slug}` });
}

const goToPrevProject = () => {
	if (!previousProject.value) return;
	transitionName.value = 'slide-right';
	router.push({ path: `/work/${previousProject.value.slug}` });
}

const handleKeyDown = (e) => {
	switch (e.key) {
		case 'Escape':
			router.push({ path: '/' });
			break;
		case 'ArrowLeft':
			goToPrevProject();
			break;
		case 'ArrowRight':
			goToNextProject();
			break;
		default:
			break;
	}
}

onMounted(() => {
	lenis = new Lenis({
		wrapper: document.querySelector("div.modal"),
		autoRaf: true,
		allowNestedScroll: true
	})
	gsap.ticker.add(applyParallax)
	window.addEventListener('keydown', handleKeyDown);
})

onBeforeUnmount(() => {
	gsap.ticker.remove(applyParallax)
	if (navScrollTrigger) {
		navScrollTrigger.kill()
		navScrollTrigger = null
	}
	if (onLenisScroll) {
		lenis.off('scroll', onLenisScroll)
		onLenisScroll = null
	}
	lenis.stop();
	lenis.destroy();
	window.removeEventListener('keydown', handleKeyDown);
})

</script>

<template>
	<div class="modal case-studies">
		<nav class="modal-controls case-studies">
			<RouterLink v-if="previousProject" :to="`/work/${previousProject.slug}`" :title="`Previous case study, ${previousProject.title}`" class="modal-nav-btn" @click.prevent="goToPrevProject">
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M3.41525 8.64753C3.05929 9.00531 2.48217 9.00531 2.12621 8.64753C1.77025 8.28974 1.77025 7.70965 2.12621 7.35186L6.46953 2.96219C6.82549 2.6044 7.40261 2.6044 7.75857 2.96219C8.11453 3.31998 8.11453 3.90007 7.75857 4.25786L3.41525 8.64753Z" class="foreground" />
					<path d="M2.12621 8.64753C1.77025 8.28974 1.77025 7.70965 2.12621 7.35186C2.48217 6.99407 3.05934 6.99448 3.4153 7.35227L7.7586 11.7419C8.11456 12.0997 8.11456 12.6798 7.7586 13.0376C7.40264 13.3954 6.82551 13.3954 6.46955 13.0376L2.12621 8.64753Z" class="foreground" />
					<path d="M4.7421 8.90656C4.2374 8.90785 3.82931 8.49976 3.83061 7.99507C3.8319 7.49037 4.24209 7.08019 4.74678 7.07889L13.2619 7.04612C13.7666 7.04483 14.1747 7.45291 14.1734 7.95761C14.1721 8.46231 13.762 8.87249 13.2573 8.87379L4.7421 8.90656Z" class="foreground" />
				</svg>
			</RouterLink>
			<RouterLink to="/" title="Close" class="modal-nav-btn close">
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
					<path d="M4.09601 13.1735C3.74005 13.5313 3.16292 13.5313 2.80696 13.1735C2.451 12.8157 2.451 12.2356 2.80696 11.8778L11.8303 2.80814C12.1862 2.45035 12.7633 2.45035 13.1193 2.80814C13.4753 3.16592 13.4753 3.74601 13.1193 4.1038L4.09601 13.1735Z" class="foreground" />
					<path d="M2.88068 4.12178C2.52472 3.764 2.52472 3.18391 2.88068 2.82612C3.23664 2.46833 3.81377 2.46833 4.16973 2.82612L13.193 11.8958C13.549 12.2536 13.549 12.8337 13.193 13.1915C12.8371 13.5492 12.2599 13.5492 11.904 13.1915L2.88068 4.12178Z" class="foreground" />
				</svg>
			</RouterLink>
			<RouterLink v-if="nextProject" :to="`/work/${nextProject.slug}`" :title="`Next case study, ${nextProject.title}`" class="modal-nav-btn" @click.prevent="goToNextProject">
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12.6174 8.64753C12.9734 9.00531 13.5505 9.00531 13.9065 8.64753C14.2624 8.28974 14.2624 7.70965 13.9065 7.35186L9.56314 2.96219C9.20718 2.6044 8.63006 2.6044 8.2741 2.96219C7.91814 3.31998 7.91814 3.90007 8.2741 4.25786L12.6174 8.64753Z" class="foreground" />
					<path d="M13.9065 8.64753C14.2624 8.28974 14.2624 7.70965 13.9065 7.35186C13.5505 6.99407 12.9733 6.99448 12.6174 7.35227L8.27407 11.7419C7.91811 12.0997 7.91811 12.6798 8.27407 13.0376C8.63003 13.3954 9.20716 13.3954 9.56311 13.0376L13.9065 8.64753Z" class="foreground" />
					<path d="M11.2906 8.90656C11.7953 8.90785 12.2034 8.49976 12.2021 7.99507C12.2008 7.49037 11.7906 7.08019 11.2859 7.07889L2.77073 7.04612C2.26603 7.04483 1.85794 7.45291 1.85924 7.95761C1.86053 8.46231 2.27072 8.87249 2.77541 8.87379L11.2906 8.90656Z" class="foreground" />
				</svg>
			</RouterLink>
		</nav>
		<Transition :name="transitionName" mode="out-in" @before-leave="onBeforeLeave" @after-leave="onAfterLeave" @after-enter="onAfterEnter">
			<component v-if="caseStudyComponent" :is="caseStudyComponent" :key="route.params.slug" :project="project" />
			<div v-else class="case-study-fallback" :key="'fallback'">
				<main>
					<h1>Work not found</h1>
					<p>That's not here! Maybe it was never here. Try looking at my <RouterLink to="/work" title="Work">other work</RouterLink> instead.</p>
				</main>
			</div>
		</Transition>
		<nav class="case-study-footer" :style="{ visibility: footerVisible ? 'visible' : 'hidden' }">
			<ul>
				<li>
					<RouterLink v-if="previousProject" :to="`/work/${previousProject.slug}`" :title="`Previous case study, ${previousProject.title}`" @click.prevent="goToPrevProject">
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M3.41525 8.64753C3.05929 9.00531 2.48217 9.00531 2.12621 8.64753C1.77025 8.28974 1.77025 7.70965 2.12621 7.35186L6.46953 2.96219C6.82549 2.6044 7.40261 2.6044 7.75857 2.96219C8.11453 3.31998 8.11453 3.90007 7.75857 4.25786L3.41525 8.64753Z" class="foreground" />
							<path d="M2.12621 8.64753C1.77025 8.28974 1.77025 7.70965 2.12621 7.35186C2.48217 6.99407 3.05934 6.99448 3.4153 7.35227L7.7586 11.7419C8.11456 12.0997 8.11456 12.6798 7.7586 13.0376C7.40264 13.3954 6.82551 13.3954 6.46955 13.0376L2.12621 8.64753Z" class="foreground" />
							<path d="M4.7421 8.90656C4.2374 8.90785 3.82931 8.49976 3.83061 7.99507C3.8319 7.49037 4.24209 7.08019 4.74678 7.07889L13.2619 7.04612C13.7666 7.04483 14.1747 7.45291 14.1734 7.95761C14.1721 8.46231 13.762 8.87249 13.2573 8.87379L4.7421 8.90656Z" class="foreground" />
						</svg><span class="label">{{ previousProject.title }}</span>
					</RouterLink>
				</li>
				<li><a href="mailto:&#119;&#97;&#108;&#116;&#101;&#114;&#64;&#119;&#97;&#108;&#116;&#101;&#114;&#99;&#111;&#111;&#116;&#115;&#46;&#99;&#111;&#109;" class="liame"><span class="label">Get in Touch</span></a></li>
				<li>
					<RouterLink v-if="nextProject" :to="`/work/${nextProject.slug}`" :title="`Next case study, ${nextProject.title}`" @click.prevent="goToNextProject">
						<span class="label">{{ nextProject.title }}</span>
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M12.6174 8.64753C12.9734 9.00531 13.5505 9.00531 13.9065 8.64753C14.2624 8.28974 14.2624 7.70965 13.9065 7.35186L9.56314 2.96219C9.20718 2.6044 8.63006 2.6044 8.2741 2.96219C7.91814 3.31998 7.91814 3.90007 8.2741 4.25786L12.6174 8.64753Z" class="foreground" />
							<path d="M13.9065 8.64753C14.2624 8.28974 14.2624 7.70965 13.9065 7.35186C13.5505 6.99407 12.9733 6.99448 12.6174 7.35227L8.27407 11.7419C7.91811 12.0997 7.91811 12.6798 8.27407 13.0376C8.63003 13.3954 9.20716 13.3954 9.56311 13.0376L13.9065 8.64753Z" class="foreground" />
							<path d="M11.2906 8.90656C11.7953 8.90785 12.2034 8.49976 12.2021 7.99507C12.2008 7.49037 11.7906 7.08019 11.2859 7.07889L2.77073 7.04612C2.26603 7.04483 1.85794 7.45291 1.85924 7.95761C1.86053 8.46231 2.27072 8.87249 2.77541 8.87379L11.2906 8.90656Z" class="foreground" />
						</svg>
					</RouterLink>
				</li>
			</ul>
		</nav>
	</div>
</template>

<style lang="scss">
/** ----------------------------------------------------------------
    CASE STUDY TOP MODAL CONTROLS, NEEDS CLEANUP. SEE ALSO App.vue
---------------------------------------------------------------- **/
.case-study-links {
	display: flex;
	gap: 1.5rem;
}

/** ----------------------------------------------------------------
    HEADER
---------------------------------------------------------------- **/
header {
	display: flex;
	flex-wrap: wrap;
	z-index: 3;
	padding-bottom:3rem;
	margin-bottom:3rem;
	background: url('/assets/img/wave.svg') repeat-x bottom;


	h1 {
		flex-grow: 1;
		margin-bottom: 0;

		@include xs {
			width: 100%;
		}

		@include md {
			// width: unset;
		}
	}

	p {
		@include xs {
			width: 100%;
		}

		@include md {
			// width: 30rem;
		}
	}

	div.title-and-timeframe {
		@include xs {
			padding-top: 0.5rem;
			order: 1;
		}

		@include md {
			// padding-top: 1.325rem;
			// order: unset;
		}

		@include xl {
			// padding-top: 1.75rem;
		}

		span {
			&:last-of-type {
				margin-left: 1rem;
			}

			&.timeframe {
				&:before {
					content: '|';
					padding-right: 1rem;
				}
			}

			&.company {
				&:before {
					content: '@';
					padding: 0 0.5rem;
					// color:$gray;
				}
			}
		}
	}

	ul.tags {
		list-style: none;
		width: 100%;
		margin:0.5rem 0 0;

		li {
			line-height: 150%;
			white-space: nowrap;
			font-weight: 400;
			display: inline-block;
			padding: 0.025em 0.525em;
			border-radius: 0.35em;
			margin: 0 0.75em 0.5em 0;
			background: color-mix(in srgb, $black 5%, transparent);
			border: 1px solid color-mix(in srgb, $black 15%, transparent);
			@media (prefers-color-scheme: light)
			{
				background: color-mix(in srgb, $black 5%, transparent);
				border: 1px solid color-mix(in srgb, $black 15%, transparent);
			}
			@media (prefers-color-scheme: dark)
			{
				background: color-mix(in srgb, $white 5%, transparent);
				border: 1px solid color-mix(in srgb, $white 15%, transparent);
			}
			

			@include xs {
				@include modular-scale(-1);
			}

			@include xl {
				@include modular-scale(0);
			}
		}
	}
}

/** ----------------------------------------------------------------
    CONTENT STYLING
---------------------------------------------------------------- **/
// grid base
div.griddy {
	box-sizing: border-box;
	display: grid;
	aspect-ratio: 9 / 5;
	gap: 1rem;
	max-width: 120ch;

	div.child {
		position: relative;
		background: #fff;
		border-radius: 2px;
		border: 1px solid #e9e9e9;
		text-align: center;
		overflow: hidden;

		img {
			max-width: unset;
			position: absolute;
			width: 125%;
			top: -12.5%;
			left: -12.5%;
		}
	}
}

// individual grid layouts
div.griddy {
	&.a {
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr;

		.child {
			&:nth-child(2) {
				grid-row: 1 / span 2;
				grid-column: 2;
			}

			&:nth-child(4) {
				grid-row: 1 / span 2;
				grid-column: 3;
			}
		}
	}

	&.b {
		grid-template-columns: 1fr 2fr;
		grid-template-rows: 1fr 1fr;

		.child {
			&:nth-child(2) {
				grid-row: 1 / span 2;
				grid-column: 2;
			}

			&:nth-child(4) {
				display: none;
			}
		}
	}
}

div.lead {
	position: relative;
	overflow: hidden;
	aspect-ratio: 24 / 5;
	z-index: 1;
	margin: 2rem 0;

	img {
		display: block;
		width: 100%;
		height: 130%;
		object-fit: cover;
		object-position: center top;
		will-change: transform;
	}
}

// quotes
aside {
	text-align: center;

	figure {
		border-top: 1px dotted $black;
		border-bottom: 1px dotted $black;
		padding: 1rem 2rem;
		margin: 2rem auto;
		display: inline-block;

		figcaption {
			cite {
				font-style: normal;
			}
		}

		blockquote {
			@include xs {
				@include modular-scale(2);
				font-weight: 300;
			}

			@include sm {
				@include modular-scale(2);
			}

			@include md {
				@include modular-scale(3);
			}

			@include lg {
				@include modular-scale(4);
			}

			@include xl {
				@include modular-scale(4);
			}
		}
	}
}

div.modal.case-studies h2 {
	@include xs {
		margin:1rem 0 0.75rem 0;
	}
}

// For adjusting spacing above and below elements
.space-bottom {
	margin-bottom:2rem;
}
.space-top {
	margin-top:2rem;
}
.artificial-centering {
	margin-left:auto;
	margin-right:auto;
}

div.image-group {
	text-align:center;
	* {
		display:inline-block;
	}
}

div.metric-grid {
	display:grid;
	grid-template-columns: 1fr 1fr 1fr;
	@include xs {
		gap:1rem;
	}
	@include md {
		gap:2rem;
	}
	@include xl {
		gap:3rem;
	}
}
div.metric {
	display:flex;
	flex-direction: column;
	width:auto;
	text-align: center;
	span {
		display:inline-block;
		line-height:135%;
		margin-top:0.25rem;
	}
	span.metric {
		font-weight:500;
		line-height: 100%;
		margin:0;
		@include xs {
			@include modular-scale(5);
		}
		@include xl {
			@include modular-scale(6);
		}
	}
}

/** ----------------------------------------------------------------
    FOOTER
---------------------------------------------------------------- **/
nav.case-study-footer {
	background: url('/assets/img/wave.svg') repeat-x;
	margin: 2rem auto 0;
	padding: 3rem 0;

	@include xs {
		@include modular-scale(1);
		width: min(58ch, 100%);
	}

	@include xl {
		@include modular-scale(2);
		width: min(48ch, 100%);
	}
	a {
		background:none;
	}
	span.label {
		display:none; // for now. Would be nice to show, but will need a different design.
	}

	ul {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		width: 100%;
		list-style: none;

		li {
			text-align: center;
			white-space: nowrap;
			overflow:hidden;

			// border:1px solid #000;
			&:first-of-type {
				text-align: left;
			}

			&:last-of-type {
				text-align: right;
			}

			@include xs {
				span {
					display: none;
				}

				&:nth-of-type(2) {
					span {
						display: inline-block;
					}
				}
			}

			@include sm {
				span {
					display: inline-block;
				}
			}
		}
	}

	a {
		* {
			display: inline-block;
		}

		.foreground {
			fill: currentColor;
		}

		&:first-of-type {
			@include xs {
				svg {
					margin-right: 2.5rem;
				}
			}

			@include sm {
				svg {
					margin-right: 0.5rem;
				}
			}
		}

		&:last-of-type {
			@include xs {
							svg {
								margin-left: 2.5rem;
							}
						}
			
						@include sm {
							svg {
								margin-left: 0.5rem;
							}
						}
		}

		svg {
			position: relative;
			top: 0.025rem;
		}

		@include xs {
			svg {
				width: 1.5rem;
			}
		}

		@include sm {
			svg {
				width: 1rem;
			}
		}
	}
}

/** ----------------------------------------------------------------
    TRANSITION ANIMATIONS
---------------------------------------------------------------- **/
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
	transition: opacity 0.25s cubic-bezier(.88, -0.01, .15, 1), transform 0.25s cubic-bezier(.88, -0.01, .15, 1);
}

.slide-left-enter-from {
	opacity: 0;
	transform: translateX(15rem);
}

.slide-left-leave-to {
	opacity: 0;
	transform: translateX(-15rem);
}

.slide-right-enter-from {
	opacity: 0;
	transform: translateX(-15rem);
}

.slide-right-leave-to {
	opacity: 0;
	transform: translateX(15rem);
}
</style>