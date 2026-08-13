<script setup>
import { computed } from 'vue'
import WorkGrid from '@/components/WorkGrid.vue';
import { useVariant } from '@/composables/useVariant.js'
import { variants } from '@/assets/variants.js'

const { variant } = useVariant()
const intro = computed(() => variant.value.intro ?? variants.default.intro)
</script>

<template>
	<div class="about">
		<p>{{ intro }}</p>
		<ul class="main-nav">
			<li><router-link to="/quick-overview" title="Quick Overview">Quick Overview</router-link></li>
			<li><router-link to="/about" title="More Details">About</router-link></li>
			<li><a href="/assets/wcoots-resume.pdf" download title="Download my Résumé">Résumé</a></li>
		</ul>
		<ul class="contact-info">
			<li><a href="mailto:&#119;&#97;&#108;&#116;&#101;&#114;&#64;&#119;&#97;&#108;&#116;&#101;&#114;&#99;&#111;&#111;&#116;&#115;&#46;&#99;&#111;&#109;" class="liame"><span>&#119;</span><span>&#97;</span><span>&#108;</span><span>&#116;</span><span>&#101;</span><span>&#114;</span><span>&#64;</span><span>&#119;</span><span>&#97;</span><span>&#108;</span><span>&#116;</span><span>&#101;</span><span>&#114;</span><span>&#99;</span><span>&#111;</span><span>&#111;</span><span>&#116;</span><span>&#115;</span><span>&#46;</span><span>&#99;</span><span>&#111;</span><span>&#109;</span></a></li>
			<li><a href="sms:&#49;&#53;&#49;&#50;&#57;&#54;&#53;&#55;&#53;&#54;&#55;">&#53;&#49;&#50;&#45;&#57;&#54;&#53;&#45;&#55;&#53;&#54;&#55;</a></li>
			<li><a href="https://linkedin.com/in/waltercoots/" target="_blank" title="My LinkedIn Profile">LinkedIn</a></li>
			<li><a href="https://bsky.app/profile/waltercoots.bsky.social" target="_blank" title="My BlueSky Feed">BlueSky</a></li>
		</ul>
	</div>
	<work-grid></work-grid>
</template>

<style lang="scss">
/** ----------------------------------------------------------------
    ABOUT CONTENT IN LEFT COLUMN
---------------------------------------------------------------- **/
div.about {
	// font-weight: 400;

	display: flex;
	flex-direction: column;
	container-type: inline-size;
	@include xs {
		// display: contents removes the box so children participate directly in
		// section.home's flex column — lets ul.contact-info be ordered after work-grid
		display: contents;
		width:100%;
	}

	@include lg {
		display: flex;
		position: sticky;
		top: 4rem;
		width:unset;
		max-width: 21.75rem;
		flex-grow: 1;
		height: calc(100vh - 11rem);
		min-width:20rem;
	}
	@include xl {
		min-width:24rem;
		max-width:28.125rem;
	}
}

/* Link lists within the About column */
div.about ul {
	list-style: none;
	display: flex;
	width: 100%;
	max-width: 100%;
	flex-wrap: wrap;

	li {
		white-space: nowrap;
	}

	// Fallback for xs–lg where div.about is display:contents (no container context)
	@media (max-width: 390px) {
		justify-content: flex-start;

		li {
		margin-right: 1.25rem;
		}
	}

	@media (min-width: 391px) {
		justify-content: flex-start;

		li {
			margin-right: 1.25rem;
		}
	}
}

div.about ul.main-nav {
	@media (max-width: 1023px) {
		margin-bottom:4rem;
	}
	margin-top:1rem;
}

div.about ul.contact-info {
	
	@include xs {
		display: flex;
		order: 10;
		margin-top: 2rem;
		flex-wrap: wrap;
		padding-bottom:1rem;
	}

	@include lg {
		display: flex;
		height: 100%;
		order: 0;
		justify-content: space-between;
		padding-bottom:0;
	}

	align-content: flex-end;
	@media (200px <= width <= 470px), (width >= 1024px) {
		align-content: flex-end;
		justify-content: space-between;
	}
	
	li {
		height: 1.5rem;
		&:first-child {
			padding-bottom:2.5rem;
		}
		@media (200px <= width <= 470px), (width >= 1024px) {
			&:first-child {
				width: 100%;
				height: auto;
				padding-bottom: 2rem;
				
				a {
					width: 100%;
					font-size:1.2em;
					display: flex;
					justify-content: space-between;
					text-decoration: none;
					@include xs {
						border-bottom: 1px solid var(--accent);
					}
					@include xl {
						border-bottom: 2px solid var(--accent);
					}
					line-height: 1.1em;
					overflow:visible;
					position: relative;

					&::after {
						content: '';
						position: absolute;
						@include xs {
							bottom: -1px;
							left: 0;
							right: 0;
							height: 2px;
							background-image: radial-gradient(circle, currentColor 3px, transparent 1px);
							background-size: 10px 1px;
							background-position: 0 95%;
							background-repeat: repeat-x;
							opacity: 0;
						}
						@include xl {
							bottom: -2px;
							background-size: 10px 2px;
							background-position: 0 50%;
						}
					}

					@media (hover:hover) {
						&:hover {
							border-bottom-color: transparent;
							background:transparent;

							&::after {
								opacity: 1;
								animation: march-ants 0.35s linear infinite;
							}
						}
					}
					&:focus-visible {
						border-bottom-color: transparent;
												background:transparent;
						
												&::after {
													opacity: 1;
													animation: march-ants 0.35s linear infinite;
												}
					}

				}
			}
		}
		
	}
}
</style>