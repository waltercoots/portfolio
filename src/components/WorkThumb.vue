<script>
export default {
	name: 'WorkThumb',
	props: {
		// Define the properties that will be passed to this component
		// Individual Project data from work.json
		project: Object
	},
	computed: {
		// Tags rendered twice in a row so the marquee can loop with no visible seam
		marqueeTags() {
			return [...this.project.tags, ...this.project.tags];
		}
	},
	methods: {
		// When a thumbnail is clicked, navigate to the project page
		goToProject() {
			this.$router.push(`/work/${this.project.slug}`);
		}
	}
}
</script>

<template>
	<div class="workthumb" :key="project.title" :class="{ featured: project.featured }" @click="goToProject">
		<div class="thumbholder">
			<img :src="`/assets/img/workthumbs/${project.slug}.png`" :alt="project.title" class="thumb-img" />
		</div>
		<div class="text">
			<h2>{{ project['title-short'] }}</h2>
			<p v-if="project.featured" class="small">{{ project.summary }}</p>
			<div class="tagsClip">
				<ul class="tags">
					<li v-for="(tag, i) in marqueeTags" :key="i">{{ tag }}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style lang="scss">

/** ----------------------------------------------------------------
    STANDARD THUMBNAIL STYLING
	div.workthumb
		div.thumbholder
			img.thumb-img
		div.text
			span.title
			p
			ul.tags
---------------------------------------------------------------- **/
div.workthumb {
	position: relative;
	mix-blend-mode: multiply;
	@media (prefers-color-scheme: light)
	{
	  mix-blend-mode: multiply;
	}
	@media (prefers-color-scheme: dark)
	{
		mix-blend-mode:normal;
	}
	width: 100%;
	aspect-ratio: 1;

	h2 {
		position: absolute;
		opacity:0;
		transition: all 150ms ease-in;
		width:100%;
		height:100%;
		display:flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding:0.5em;
		color:$white;
		@media (prefers-color-scheme: light)
		{
			color: $white;  
		}
		@media (prefers-color-scheme: dark)
		{
			color: $black;  
		}
		background:var(--accent);
		@include xs {
			@include modular-scale(1);
		}
	}

	p {
		font-weight: 400;
	}
	div.tagsClip {
		width:100%;
		overflow:hidden;
		z-index: 3;
		position: absolute;
		bottom:0.5rem;
		opacity:0;
		transition: opacity 150ms ease-out;
	}
	ul.tags {
		list-style:none;
		display:flex;
		width:max-content;
		animation: tags-marquee 12s linear infinite;
		color:$white;
		@media (prefers-color-scheme: light)
		{
			color: $white;  
		}
		@media (prefers-color-scheme: dark)
		{
			color: $black;  
		}
		li {
			white-space: nowrap;
			font-weight: 400;
			line-height:150%;
			display:inline-block;
			padding:0 0.25em;
			border-radius:0.35em;
			margin:0 0.75em 0 0;
			@include xs {
				@include modular-scale(-2);
			}
			@include xl {
				@include modular-scale(-1);
			}
		}
	}

	@keyframes tags-marquee {
		from {
			transform: translateX(0);
		}
		to {
			// exactly one (duplicated) set's width, so the loop restarts seamlessly
			transform: translateX(-50%);
		}
	}

	@media (hover:hover) {
		&:hover {
			cursor: pointer;
			h2 {
				opacity:1;
			}
			div.thumbholder {
				outline: 2px solid var(--accent);
				outline-offset: 2px;
				transition: all 150ms ease-out;
			}
			div.tagsClip {
				opacity:1;
			}
		}
	}

}

/** ----------------------------------------------------------------
    IMAGE WITHIN THUMBNAIL
---------------------------------------------------------------- **/
div.workthumb div.thumbholder {
	position: absolute;
	background-color: var(--accent);
	border: 1px solid var(--accent);
	transition: all 150ms ease-out;
	outline: 0px dotted var(--accent);
	outline-offset: 0px;

	.thumb-img {
		filter: grayscale(1);
		mix-blend-mode: screen;
		@media(prefers-color-scheme: light)
		{
			mix-blend-mode: screen;
		}
		@media(prefers-color-scheme: dark)
		{
			mix-blend-mode: multiply;
			opacity:0.5;
		}
		width: 100%;
		min-height: 100%;
	}
}

/** ----------------------------------------------------------------
    FEATURED CASE STUDY STYLING
---------------------------------------------------------------- **/
div.workthumb.featured {
	grid-column: 1 / -1;
	width: 100%;
	aspect-ratio: unset;
	height: auto;
	display: flex;
	align-items: center;
	// Note: you'll likely want to adjust the gaps in WorkGrid.vue as well
	@include xs {
		gap:0.75rem;
	}
	@include sm {
		gap: 1.5rem;
	}
	@include md {
		gap: 2rem;
	}
	aspect-ratio: unset;
	margin-bottom: 2.5rem;

	@container (max-width:479px) {
		flex-direction: column;
	}

	@container (width > 479px) {
		flex-direction: row;
	}

	div.text {
		@include xs {
			width: 100%;
			h2 {
				&:before {
					display:none;
				}
			}
			div.tagsClip {
				display:none;
			}
		}
		@include lg {
			h2 {
				&:before {
					display:block;
				}
			}
		}
	}
	
	h2 {
		display: block;
		position: relative;
		transform:none;
		height:auto;
		width:auto;
		color:var(--accent);
		opacity:1;
		left:unset;
		right:unset;
		padding:unset;
		text-align: left;
		margin-bottom:0.25rem;
		@include xs {
			@include modular-scale(3);
		}
		@include xl {
			@include modular-scale(4);
		}
		background:none;
		text-decoration: underline;
		text-decoration-color: transparent;
		
		&:before {
			content: '0'; // note: see below for numbering
			position: absolute;
			top: -2.375em;
			font-size: 0.5em;
			font-weight: 400;
			@include modular-scale(-1);
			font-variant-numeric: slashed-zero;
		}

	}
	@media (hover:hover) {
		&:hover {
			h2 {
				text-decoration: underline;
				text-decoration-color: var(--accent);
			}
		}
	}
	&:nth-of-type(1) {
		h2:before {
			content: '01';
		}
	}

	&:nth-of-type(02) {
		h2:before {
			content: '02';
		}
	}

	&:nth-of-type(03) {
		h2:before {
			content: '03';
		}
	}

	div.thumbholder {
		flex-shrink: 1fr;
		height: auto;
		aspect-ratio: 2 / 1;
		position: relative;
		width:100%;
		border: 1px solid var(--accent);
		transform: none;
		top: unset;
		left: unset;
	}
}
</style>