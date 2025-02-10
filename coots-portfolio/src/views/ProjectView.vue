<template>
	<div class="project">
		<h1>{{ project.title }} ({{ project.index }})</h1>
		<span>{{ project.year }}</span>
		<p v-html="project.description"></p>
		<p v-html="project.credits"></p>
		<p v-html="project.url"></p>
		<router-link to="/work">Close</router-link>
	</div>
</template>

<script>
	import jsonData from '@/assets/work.json';
	export default {
		name: 'ProjectView',
		data() {
			return {
				project: {}
			}
		},
		beforeMount() {
			this.project = jsonData.projects.find(project => project.slug === this.$route.params.slug);
			this.project.index = jsonData.projects.findIndex(project => project.slug === this.$route.params.slug);
		}
	}
</script>

<style scoped>
.project {
	padding: 3rem;
}
p {
	max-width:40em;
}
</style>