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
	<div class="workthumb" :key="project.title" @click="goToProject">
		<div class="imageWrapper">
			<img :src="`/img/workthumbs/${project.slug}.jpg`" alt="" />
		</div>
		<span class="title">{{ project.title }}</span>
		<span class="year">{{ project.year }}</span>
	</div>
</template>

<style scoped lang="scss">
	div.workthumb {
		box-sizing: border-box;
		position:relative;
		@include xs {
			width: 10.1875rem;
			height: 10.1875rem;
		}
		@include sm {
			width: 10.5rem;
			height: 10.5rem;
		}
		@include md {
			width: 10.5rem;
			height: 10.5rem;
		}
		@include lg {
			width: 14rem;
			height: 14rem;
		}
		@include xl {
			width: 14rem;
			height: 14rem;
		}

		background: #F0EFEF;
		aspect-ratio: 1 / 1;
		padding:1rem;
		overflow:hidden;
		div.imageWrapper {
			position: absolute;
			left:0;
			top:0;
			height:100%;
			aspect-ratio: 660 / 410;
		}
		img {
			min-height:100%;
			opacity:1;
		}
		span { 
			opacity:0; 
			transition: opacity 50ms ease-out;
		}
		span.title {
			font-size:1rem;
			line-height:125%;
			display:block;
			margin-bottom:0.25rem;
		}
		span.year {
			font-size:0.8rem;
			display:block;
		}
		&:hover {
			padding:calc(1rem - 1px);
			cursor: pointer;
			border:1px solid $black;
			span { opacity:1; }
		}

	}
</style>