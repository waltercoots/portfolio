<script>
import WorkThumb from '@/components/WorkThumb.vue';

export default {
  components: {
    WorkThumb
  }
}
</script>

<template>
	<div class="workgrid">
		<WorkThumb />
		<WorkThumb />
		<WorkThumb />
		<WorkThumb />
		<WorkThumb />
		<WorkThumb />
		<WorkThumb />
		<WorkThumb />
		<WorkThumb />
		<WorkThumb />
	</div>
</template>

<style scoped lang="scss">
	.workgrid {
		position: absolute;
		top: 50%;
		left: 50%;
	}
</style>