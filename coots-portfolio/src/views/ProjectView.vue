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
				// reset scroll
				if(document.querySelector(".project"))
				{
					document.querySelector(".project").scrollTop = 0;
				}
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
	<div class="project">
		<ProjectNav @prev-project="prevProject" @next-project="nextProject" @close-project="closeProject" />
		<div class="currentProject">
			<div class="metadata">
				<h1>{{ project.title }}</h1>
				<p v-if="project.year" class="year">{{ project.year }}</p>
				<p v-if="project.role" class="role">{{ project.role }}</p>
				<ul class="tags">
					<li v-for="(item, index) in project.tags" v-html="item" v-bind:key="index"></li>
				</ul>
			</div>
			<div class="contents" v-for="(item, index) in project.content" :key="index">
				<!-- GROUP BLOCK -->
				<div v-if="item.type === 'image-group'" class="contentPiece image-group">
					<img v-for="(groupItem, k) in item.items" :key="k"
						:src="`/img/${project.slug}/${groupItem.url}`" 
						:alt="project.title" 
						:class="[groupItem.border]" 
						:style="{ width: groupItem.width + 'px', display:groupItem.display }"/>
				</div>
				
				<!-- REGULAR BLOCK -->
				<div v-else class="contentPiece">
					<h2 v-if="item.h2" v-html="item.h2"></h2>
					<h3 v-if="item.h3" v-html="item.h3"></h3>
					<ul v-if="item.bullets">
					<li v-for="(bullet, j) in item.bullets" :key="j" v-html="bullet"></li>
					</ul>
					<p v-if="item.type==='paragraph'" v-html="item.copy"></p>
					<video v-if="item.type==='video'" muted loop autoplay playsinline
					:src="`/img/${project.slug}/${item.url}`" 
					:alt="project.title" 
					:class="[item.border, item.width]" 
					:style="{ width: item.width + 'px' }"></video>
					<img v-if="item.type==='image'" 
					:src="`/img/${project.slug}/${item.url}`" 
					:alt="project.title" 
					:class="[item.border]" 
					:style="{ width: item.width + 'px' }"/>
					<p v-if="item.caption" v-html="item.caption" class="caption"></p>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
::selection {
	background: $accent;
	color:$white;
}

.project {
	background:$white;
	position:absolute;
	top:0;
	left:0;
	width:100%;
	height:100%;
	overflow-y:auto;
	overflow-x:hidden;
	z-index:3;
	padding-top:1.5rem;
	padding-bottom:1.5rem;
}
div.currentProject {
	@include xs {
		padding:0 1rem;
	}
	@include sm {
		padding:0 1.5rem;
	}
	@include md {
		padding-top:2.5rem;
	}
	@include xl {
		padding-top:4rem;
	}
	div.metadata {
		margin:0 auto 1rem auto;
		@include md {
			max-width:50.5625rem;
		}
		@include lg {
			max-width:57.56rem;
		}

		p {
			display:inline-block;
			@include xs {
				@include modular-scale(-3);
			}
			@include xl {
				@include modular-scale(-1);
			}
		}
		p.year {
			&:after {
				content:'';
				border-right:1px solid $gray;
				padding-left:0.5rem;
			}
		}
		p.role {
			margin-left:0.5rem;
		}
		ul {
			list-style:none;
			margin-top:0.5rem;
			&.tags li {
				@include xs {
					@include modular-scale(-5);
				}
				@include xl {
					@include modular-scale(-3);
				}
			}
			li {
				border-radius:0.25rem;
				background:lighten($gray,20%);
				display:inline-block;
				margin:0 0.5rem 0.5rem 0;
				padding:0.25rem 0.5rem;
			}
		}
	}
	div.contents {
		margin:0 auto 0;
		div.contentPiece {
			margin:0 auto 1rem auto;
			text-align:center;
			&.image-group {
				img {
					margin:0 0.25rem;
				}
			}
			img, video {
				display:inline-block;
				&.half {
					max-width:20rem;
				}
			}
			video {
				background:$gray;
				max-width:100%;
			}
			p.caption {
				@include modular-scale(-3);
				text-align:center;
				margin:1rem auto 0 auto;
			}
			ul {
				list-style: circle;
				list-style-position: outside;
				padding-left:2em;
				li {
					margin-bottom:0.5em;
				}
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
	@include md {
		position:sticky;
		top:0;
	}
}
p, h1, h2, h3, li {
	@include md {
		max-width:50.5625rem;
	}
	@include lg {
		max-width:57.56rem;
	}
	orphans: 3;
	margin:0 auto 0;
	text-align:left;
	line-height: calc(1ex / 0.32);
}
p, li {
	@include modular-scale(-1);
	margin-bottom:1rem;
}
h2, h3 {
	font-family:'Morison', serif;
	font-weight:400;
}
h1 {
	margin-bottom:1rem;
	font-family:'Morison', serif;
	font-weight:400;
	@include xs {
		@include modular-scale(3);
	}
	@include xl {
		@include modular-scale(5);
	}
}
h2 {
	@include xs {
		@include modular-scale(1);
	}
	@include xl {
		@include modular-scale(3);
	}
}
h3 {
	@include xs {
		@include modular-scale(-1);
	}
	@include xl {
		@include modular-scale(1);
	}
}
p {
	@include xs {
		@include modular-scale(-2);
	}
	@include xl {
		@include modular-scale(0);
	}
}
</style>