<script>
export default {
	name: 'WorkThumb',
	props: {
		// Define the properties that will be passed to this component
		// Individual Project data from work.json
		project: Object
	},
}
</script>

<template>
	<div class="workthumb" :key="project.title">
		<span class="title">{{ project.title }}</span>
		<span class="year">{{ project.year }}</span>
	</div>
</template>

<style scoped lang="scss">
	div.workthumb {
		box-sizing: border-box;
		position:relative;
		margin: 1rem;
		width: 8rem;
		height: 8rem;
		background: #F0EFEF;
		aspect-ratio: 1 / 1;
		transform-style: preserve-3d;
		transition: transform 1s ease-out, left 1s ease-out, top 1s ease-out;
		transition-timing-function:cubic-bezier(0.05, 0.31, 0.22, 0.99);
		padding:1rem;
		span { 
			opacity:0; 
			transition: opacity 0.55s ease-out;
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