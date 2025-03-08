<script>
	import jsonData from '@/assets/work.json';
	import ProjectNav from '@/components/ProjectNav.vue';
	export default {
		name: 'ProjectView',
		components: {
			ProjectNav
		},
		data() {
			return {
				project: {}
			}
		},
		beforeMount() {
			this.loadProject(this.$route.params.slug);
		},
		methods: {
			closeProject() {
				this.$router.push('/work');
			},
			nextProject: function() {
				// handler for loading the next project
				let nextProjectIndex = this.project.index+1;
				nextProjectIndex = (nextProjectIndex > (jsonData.projects.length-1)) ? 0 : nextProjectIndex;
				let nextProjectRoute = '/work/project/'+this.getProjectSlug(nextProjectIndex);
				this.$router.push(nextProjectRoute);
			},
			prevProject: function() {
				// handler for loading the previous project
				let prevProjectIndex = this.project.index-1;
				prevProjectIndex = prevProjectIndex < 0 ? jsonData.projects.length-1 : prevProjectIndex;
				let prevProjectRoute = '/work/project/'+this.getProjectSlug(prevProjectIndex);
				this.$router.push(prevProjectRoute);
			},
			getProjectSlug(key) {
				return jsonData.projects[key].slug
			},
			loadProject(newSlug) {
				// loads a project based on its slug
				this.project = jsonData.projects.find(project => project.slug === newSlug);
				// update the current project's index for back / next reference
				this.project.index = jsonData.projects.findIndex(project => project.slug === newSlug);
			}
		},
		watch: {
			'$route' (to) {
				if (to.params.slug) {
					this.loadProject(to.params.slug);
				}
			}
		}
	}
</script>

<template>
	<!-- 
	Items to account for:
	- title, slug, year, role, description, tags, lead-art
	-- title, subtitle, description, pullquote, attribute, url, caption
	-->
	<div class="project">
		<ProjectNav @prev-project="prevProject" @next-project="nextProject" @close-project="closeProject" />
		<div class="currentProject">
			<h1>{{ project.title }} <span class="id">({{ project.index }})</span> <span class="year">{{ project.year }}</span></h1>
			<p v-html="project.description"></p>
			<p v-html="project.credits"></p>
			<p v-html="project.url"></p>
			<div class="contents">
				<div v-for="(item, index) in project.content" v-bind:project="item" v-bind:key="index" class="contentPiece">
					<h2 v-if="item.title" v-html="item.title" class="title"></h2>
					<h3 v-if="item.subtitle" v-html="item.subtitle" class="title"></h3>
					<p v-if="item.description" v-html="item.description" class="description"></p>
					<img v-if="item.url" :src="`/img/${project.slug}/${item.url}`" :alt="project.title" :class="item.border" />
					<p v-if="item.caption" v-html="item.caption" class="caption"></p>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.project {
	background:$white;
	padding: 3rem;
	position:absolute;
	top:0;
	left:0;
	width:100%;
	height:100%;
	overflow-y:auto;
	z-index:3;
}
div.currentProject {
	div.contents {
		margin:0 auto 0;
		div.contentPiece {
			margin:0 auto 4rem auto;
			text-align:center;
			img, video {
				display:inline-block;
			}
			p.caption {
				@include modular-scale(-3);
				text-align:center;
				margin:1rem auto 0 auto;
			}
		}
	}
}
.projectNav {

	@include xs {
		position:fixed;
		left:0;
		right:0;
		bottom:1.5rem;
	}
	@include sm {
	}
	@include md {
		position:sticky;
		top:0;
	}
}
p, h1, h2, h3 {
	max-width:50rem;
	margin:0 auto 0;
	text-align:left;
}
p {
	@include modular-scale(-1);
	margin-bottom:1rem;
}
h1, h2, h3 {
	font-family:'Morison', serif;
	font-weight:400;
}
h1 span.id {
	display:none;
}
h1 span.year {
	@include modular-scale(-3);
}


</style>