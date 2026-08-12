<script setup>
import CaseStudyHeader from '@/components/CaseStudyHeader.vue'
defineProps({ project: Object })
</script>

<template>
	<main>
		<CaseStudyHeader :project="project" />
		<p>Comment Analysis</p>
		<p>Role-based access</p>
		<p>Report Builder</p>
		<p>Data Export</p>
		<p>Inform</p>
		<p>Translation</p>
		<p>Role-based access</p>
		
	</main>
</template>

<style lang="scss"></style>"