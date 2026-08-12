<script setup>
import { ref } from 'vue'
import { useAccentColor } from '@/composables/useAccentColor'
import madeInSvg from '@/assets/svgs/made-in.svg?raw'
import tldrSvg from '@/assets/svgs/tldr.svg?raw'

const nameBG = ref(null)
defineExpose({ nameBG })

const { cycleColor } = useAccentColor()

</script>

<template>
	<div class="name-bg" ref="nameBG">
		<span class="made-in" v-html="madeInSvg" role="img" aria-label="Written, Designed, and Coded in Austin, Texas" />
		<router-link to="/quick-overview" title="Quick Overview"><span class="tldr" v-html="tldrSvg" aria-hidden="true" /></router-link>
		<ul class="nav">
			<li><router-link to="/work" title="See Walter's Work">Work</router-link></li>
			<li><router-link to="/about" title="Learn About Walter">About</router-link></li>
			<li><a href="/assets/wcoots-resume.pdf" download title="Download my Résumé">Résumé</a></li>
			<li><a href="mailto:&#119;&#97;&#108;&#116;&#101;&#114;&#64;&#119;&#97;&#108;&#116;&#101;&#114;&#99;&#111;&#111;&#116;&#115;&#46;&#99;&#111;&#109;" title="&#119;&#97;&#108;&#116;&#101;&#114;&#64;&#119;&#97;&#108;&#116;&#101;&#114;&#99;&#111;&#111;&#116;&#115;&#46;&#99;&#111;&#109;">Contact</a></li>
		</ul>
	</div>

	<button class="color-swap" @click="cycleColor" aria-hidden="true">
		Swap
	</button>
	<div class="video" ref="video" data-section="video">
		<video autoplay muted loop playsinline loading="eager" poster="/assets/process-preview.jpg">
			<source src="/assets/process-h.mp4" type="video/mp4">
		</video>
	</div>
</template>

<style lang="scss">
/** ----------------------------------------------------------------
    BACKGROUND VIDEO
---------------------------------------------------------------- **/
div.video {
	background: var(--accent);
	position: fixed;
	z-index: 1;
	inset: 0;

	video {
		@media (prefers-color-scheme: light) {			
			mix-blend-mode: screen;
		}
		@media (prefers-color-scheme: dark) {			
			mix-blend-mode: luminosity;
		}
		opacity: 1;
		width:100%;
		height:100%;
		object-fit: cover;
		z-index: 1;
	}
}

/** ----------------------------------------------------------------
    INTRO NAME CARD & ELEMENTS
---------------------------------------------------------------- **/
div.name-bg {
	background: $white;
	@media (prefers-color-scheme: light)
	{
		background: $white;  
	}
	@media (prefers-color-scheme: dark)
	{
		background: $black;  
	}
	position: fixed;
	z-index: 2;
	/* For the "Walter Coots" wordmark */
	@include xs {
		mask-image: url('/assets/img/wordmark-vert-w.svg'), linear-gradient(white, white);
	}
	@include md {
		mask-image: url('/assets/img/wordmark-w.svg'), linear-gradient(white, white);
	}
	mask-mode: luminance;
	mask-composite: exclude;
	mask-position: 50% 50%;
	mask-repeat: no-repeat;
	mask-size: 70%, auto;
	inset:0;
	top:5px;
	bottom:5px;

	/** Note: the insets below are animated to 0 upon scroll using GSAP **/
	@include xs {
		scale:0.85;
	}
	@include sm {
		scale:0.85;
	}

	@include md {
		scale:0.85;
	}

	@include lg {
		scale:0.85;
	}

	@include xl {
		scale:0.85;
	}
}
.tldr {
	position: absolute;
	color: var(--accent);
	@include xs {
		top:unset;
		right:unset;
		left:50%;
		bottom:5rem;
		transform:translate(-50%,0);
	}
	@include sm {
		top:unset;
		right:unset;
		bottom:5rem;
		left:50%;
		transform:translate(-50%,0);
	}
	@include md {
		bottom:unset;
		left:unset;
		top: 2.8125rem;
		right: 3rem;
		transform:unset;
	}
	@include lg {
		top: 4.75rem;
		right: 5rem;
	}
}
.made-in {
	position: absolute;
	color: var(--accent);
	@include xs {
		top: 1.6rem;
		left:50%;
		transform:translate(-50%,0);
	}
	@include sm {
		top: 2rem;
		left:50%;
		transform:translate(-50%,0);
	}
	@include md {
		top: 2rem;
		left: 2rem;
		transform:none;
	}
	@include lg {
		top: 4rem;
		left: 4rem;
	}
}

/** ----------------------------------------------------------------
    COLOR PICKER
---------------------------------------------------------------- **/
.color-swap {
	cursor: url(../assets/svgs/spray-can.svg), auto;
	position: fixed;
	background:none;
	top:50dvh;
	left:50dvw;
	transform:translate(-50%, -50%);
	width:70%;
	height:25%;
	opacity:0;
	z-index: 2;
	&:active, &:focus, &:focus-visible {
		background:none;
		opacity:0;
	}
}

ul.nav {
	font-weight:400;
	display:flex;
	position:absolute;
	list-style:none;
	bottom:2.5rem;
	left:50%;
	transform:translate(-50%,0);
	a {
		text-decoration:none;
		@media (hover:hover) {
			&:hover {
				text-decoration:underline;
				background:none; /* Removes universal marching-ants style */
			}
		}
		&:focus-visible {
			text-decoration: underline;
		}
		@include xs {
			@include modular-scale(0);
			margin:0 0.5rem;
		}		
		@include sm {
			margin:0 0.25rem;
		}
		@include md {
			@include modular-scale(1);
			margin:0 1.25rem;
		}
		@include xl {
			@include modular-scale(2);
		}
	}
}
</style>