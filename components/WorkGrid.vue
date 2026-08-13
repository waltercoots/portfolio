<script>
import WorkThumb from '@/components/WorkThumb.vue';
import projects from '@/assets/work.json';
import filterSvg from '@/assets/svgs/icn-filter.svg?raw';
import { useVariant } from '@/composables/useVariant.js';

export default {
	name: 'WorkGrid',
	components: {
		WorkThumb
	},
	setup() {
		const { variant } = useVariant()
		return { variant }
	},
	data() {
		return {
			jsonData: projects,
			tags: [],
			tagsVisible: false
		};
	},
	mounted() {
		this.tags = this.createTagList();
	},
	computed: {
		filterSvg() {
			return filterSvg;
		},
		activeTag() {
			return this.$route.query.tag;
		},
		// The active variant's caseStudies list drives both membership and order;
		// the tag filter then narrows within that scoped list.
		variantProjects() {
			return this.variant.caseStudies
				.map(slug => this.jsonData.projects.find(p => p.slug === slug))
				.filter(Boolean);
		},
		filteredProjects() {
			if (!this.activeTag) {
				return this.variantProjects;
			}
			return this.variantProjects.filter(project => project.tags.includes(this.activeTag));
		},
		featuredProjects() {
			return this.filteredProjects.filter(p => p.featured);
		},
		olderProjects() {
			return this.filteredProjects.filter(p => !p.featured);
		}
	},
	methods: {
		createTagList() {
			// Create a list of tags from the JSON data
			const tags = new Set();
			this.jsonData.projects.forEach(project => {
				project.tags.forEach(tag => {
					tags.add(tag);
				});
			});
			return Array.from(tags).sort((a, b) => a.localeCompare(b));
		},
		hasActiveTag(project) {
			return !!this.activeTag && project.tags.includes(this.activeTag);
		},
		tagLink(tag) {
			// Clicking the already-active tag clears the filter instead of re-applying it
			return this.activeTag === tag
				? { path: '/work', hash: this.$route.hash }
				: { path: '/work', query: { tag }, hash: this.$route.hash };
		},
		toggleTags() {
			this.tagsVisible = !this.tagsVisible;
		}
	}

}
</script>

<template>
	<div class="grid-container">
		<div class="work-header">
			<h3>Work</h3>
			<span class="filter" :class="{ active: tagsVisible }" v-html="filterSvg" role="button" tabindex="0" :aria-pressed="tagsVisible" aria-label="Filter" @click="toggleTags" @keydown.enter="toggleTags" @keydown.space.prevent="toggleTags" />
			<ul class="taglist" v-if="tags.length && tagsVisible">
				<li v-for="(tag, index) in tags" :key="index" :class="{ active: activeTag === tag }">
					<router-link :to="tagLink(tag)">{{ tag }}</router-link>
				</li>
			</ul>
		</div>
		<div class="recent-work" v-if="featuredProjects.length">
			<!-- <h3 key="recent-header" v-if="!activeTag && featuredProjects.length">Recent</h3> -->
			<WorkThumb v-for="(item, index) in featuredProjects" :key="'featured-' + (item.slug || index)" :project="item" :class="{
				'tag-match': activeTag && hasActiveTag(item)
			}" />
		</div>
		<TransitionGroup name="thumb" tag="div" class="workgrid" v-if="olderProjects.length">
			<!-- <h3 key="older-header" v-if="!activeTag && olderProjects.length">Older</h3> -->
			<WorkThumb v-for="(item, index) in olderProjects" :key="'older-' + (item.slug || index)" :project="item" :class="{
				'tag-match': activeTag && hasActiveTag(item)
			}" />
		</TransitionGroup>
	</div>
</template>

<style lang="scss">
/** ----------------------------------------------------------------
    GRID STRUCTURE
---------------------------------------------------------------- **/
div.grid-container {
	flex-grow: 2;
	max-width: 58rem;

	@include xs {
		padding: 0;
	}
	
	@include lg {
		padding: 0.5rem 0 0 5rem;
		margin-bottom:3rem;
		max-width:65rem;
	}

	@include xl {
		max-width: 84rem;
		padding-left: 15vw;
		padding-right: 0;
	}
}

div.work-header {
	padding-bottom:2rem;
	h3 {
		display:inline;
	}
	span.filter {
		display:inline-block;
		position: relative;
		top:0.45rem;
		margin-left:0.75rem;
		border-radius:50%;
		border:1px solid transparent;
		padding:0.125rem;
		&.active {
			border:1px solid var(--accent);
		}
		svg {
			position: relative;
			width:1.125em;
		}
		@media (hover:hover) {
			&:hover {
				color:color-mix(in srgb, var(--accent) 50%, transparent);
				cursor:pointer;
			}
		}
	}
}

/* For ensuring H3s take up the entire row */
div.grid-container h3 {
	width: auto; // unsure if needed; test
	grid-column: 1 / -1
}
/** ----------------------------------------------------------------
    RECENT WORK BOX, NOT A GRID!
---------------------------------------------------------------- **/
div.recent-work {
	width: 100%;
	container-type: inline-size;

	h3 {
		margin-bottom: 1.5rem;
	}
}

/** ----------------------------------------------------------------
    TAG LIST
---------------------------------------------------------------- **/
ul.taglist {
	list-style: none;
	margin-left:-0.5rem;
	padding-top:1rem;
	display:flex;
	flex-wrap: wrap;

	li {
		line-height:150%;
		white-space: nowrap;
		font-weight: 400;
		padding:0.025em 0.525em;
		border-radius:0.35em;
		margin:0 0.25em 0.25em 0;
		background: color-mix(in srgb, var(--accent) 0%, transparent);
		border:1px solid color-mix(in srgb, var(--accent) 0%, transparent);
		@include xs {
		  @include modular-scale(-1);
		}
		@include xl {
		    @include modular-scale(0);
		}
		&.active {
			border:1px solid var(--accent);
		}
		a {
			text-decoration: none;
		}
	}
}

/** ----------------------------------------------------------------
    ACTUAL GRID OF THUMBNAILS
---------------------------------------------------------------- **/
div.workgrid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(7.5rem, 2fr));
	// Note: you'll likely want to adjust the gaps in WorkThumb.vue as well
	@include xs {
		gap:2rem;
	}
	@include sm {
		gap: 1.5rem;
	}
	@include md {
		gap: 2.5rem;
	}
}

/** ----------------------------------------------------------------
    PROVISIONAL THUMB FADE TRANSITION (TransitionGroup name="thumb")
---------------------------------------------------------------- **/
.thumb-enter-active,
.thumb-leave-active {
	transition: opacity 250ms ease, transform 250ms ease;
}
.thumb-enter-from,
.thumb-leave-to {
	opacity: 0;
	transform: scale(0.95);
}
.thumb-move {
	transition: transform 250ms ease;
}
</style>