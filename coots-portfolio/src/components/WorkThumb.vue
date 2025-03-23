<script>
export default {
	name: 'WorkThumb',
	props: {
		// Define the properties that will be passed to this component
		// Individual Project data from work.json
		project: Object
	},
	methods: {
		// When a thumbnail is clicked, navigate to the project page
		goToProject() {
			this.$router.push({ path: '/work/project/'+this.project.slug });
		}
	}
}
</script>

<template>
	<div class="workthumb" :key="project.title" @click="goToProject" :style="`background:url(/img/workthumbs/${project.slug}.png) no-repeat center / contain;`">
		<span class="title">{{ project.title }}</span>
		<span class="year">{{ project.year }}</span>
	</div>
</template>

<style lang="scss">
	div.workthumb {
		box-sizing: border-box;
		position:relative;
		@include xs {
			width: 10.1875rem;
			height: 10.1875rem;
			margin:0.5rem;
		}
		@include sm {
			width: 10.5rem;
			height: 10.5rem;
			margin:0.5rem;
		}
		@include md {
			width: 10.5rem;
			height: 10.5rem;
			margin:0.5rem;
		}
		@include lg {
			width: 10.5rem;
			height: 10.5rem;
		}
		@include xl {
			width: 14rem;
			height: 14rem;
		}

		background: #F0EFEF;
		aspect-ratio: 1 / 1;
		padding:1rem;
		overflow:hidden;
		display:flex;
		flex-direction: column;
		justify-content: space-between;
		text-align: center;
		span { 
			opacity:0;
			transition: opacity 100ms ease-out;
			position: relative;
			z-index:2;
		}
		span.title {
			@include modular-scale(0); // Font size
			line-height:145%;
			margin-bottom:0.25rem;
		}
		span.year {
			@include modular-scale(-3); // Font size
		}
		@media (hover:hover) {
			&:hover {
				cursor: pointer;
				span { 
					opacity:1; 
					transition: opacity 100ms ease-in;				
				}
				&:after {
					background:#FFF;
					opacity:85%;
					transition: opacity 100ms ease-out;
				}
			}
		}
		&:after {
			content:'';
			position:absolute;
			opacity:0;
			left:0;
			top:0;
			width:100%;
			height:100%;
			background:#F0EFEF;
			transition: opacity 500ms ease-in;
		}
	}
</style>